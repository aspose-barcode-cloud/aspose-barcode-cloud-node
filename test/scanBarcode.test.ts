import fs from 'fs';

import assert from 'assert';

import * as Barcode from '../src/api';
import { LoadTestConfiguration } from './helpers';
import { HttpRejectType } from '../src/httpClient';

describe('scanBarcode', () => {
    jest.setTimeout(60000);

    const api = new Barcode.BarcodeApi(LoadTestConfiguration());

    const imageBuffer = fs.readFileSync('./testdata/QR_and_Code128.png');

    it('should scan from body', async () => {
        const request = new Barcode.ScanBarcodeRequest(imageBuffer);
        request.decodeTypes = [Barcode.DecodeBarcodeType.Code128, Barcode.DecodeBarcodeType.QR];
        request.timeout = 5_000;

        const recognized = await api.scanBarcode(request);

        const barcodes = recognized.body.barcodes;
        assert.ok(barcodes);
        assert.strictEqual(barcodes.length, 2);

        assert.strictEqual(barcodes[0].type, Barcode.DecodeBarcodeType.QR);
        assert.strictEqual(barcodes[0].barcodeValue, 'Hello world!');

        assert.strictEqual(barcodes[1].type, Barcode.DecodeBarcodeType.Code128);
        assert.strictEqual(barcodes[1].barcodeValue, 'Hello world!');

        assert.ok(barcodes[0].region);
        assert.strictEqual(barcodes[0].region.length, 4);
        assert.ok(barcodes[0].region[0].X > 0, `X=${barcodes[0].region[0].X}`);
        assert.ok(barcodes[0].region[0].Y > 0, `Y=${barcodes[0].region[0].Y}`);

        assert.ok(barcodes[1].region);
        assert.strictEqual(barcodes[1].region.length, 4);
        assert.ok(barcodes[1].region[0].X > 0, `X=${barcodes[1].region[0].X}`);
        assert.ok(barcodes[1].region[0].Y > 0, `Y=${barcodes[1].region[0].Y}`);
    });

    it('should fail with Timeout', async () => {
        const request = new Barcode.ScanBarcodeRequest(imageBuffer);
        request.timeout = 1;

        await assert.rejects(
            async () => {
                await api.scanBarcode(request);
            },
            (rejected: HttpRejectType) => {
                const response = rejected.response;
                assert.strictEqual(response!.statusMessage, 'Request Timeout');
                assert.strictEqual(response!.statusCode, 408);
                return true;
            }
        );
    });
});
