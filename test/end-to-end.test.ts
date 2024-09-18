import assert from 'assert';

import * as Barcode from '../src/api';
import { RequestFile } from '../src/multipart';
import { LoadTestConfiguration } from './helpers';

describe('Generate and recognize', () => {
    jest.setTimeout(60000);

    const generateApi = new Barcode.GenerateApi(LoadTestConfiguration());
    const scanApi = new Barcode.ScanApi(LoadTestConfiguration());

    it('should recognize generated code', async () => {
        const generateRequest = new Barcode.BarcodeGenerateBarcodeTypeGetRequest(
            Barcode.EncodeBarcodeType.Qr,
            'Testing generator'
        );
        const generated = await generateApi.barcodeGenerateBarcodeTypeGet(generateRequest);
        const imageSize = generated.body.buffer.byteLength;
        assert.ok(imageSize > 0, `ImageSize=${imageSize}`);

        const scanRequest = new Barcode.BarcodeScanFormPostRequest(new RequestFile('file', 'file', generated.body));

        const recognized = await scanApi.barcodeScanFormPost(scanRequest);

        const barcodes = recognized.body.barcodes;
        assert.ok(barcodes);
        assert.strictEqual(barcodes.length, 1);

        const barcode = barcodes[0];
        assert.ok(barcode);
        assert.strictEqual(barcode.type, Barcode.DecodeBarcodeType.Qr);
        assert.strictEqual(barcode.barcodeValue, 'Testing generator');

        assert.ok(barcode.region);
        assert.strictEqual(barcode.region?.length, 4);

        assert.ok(barcode.region![0].x! > 0, `X=${barcode.region![0].x}`);
        assert.ok(barcode.region![0].y! > 0, `Y=${barcode.region![0].y}`);
    });
});
