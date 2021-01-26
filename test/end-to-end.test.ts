import assert from 'assert';

import * as Barcode from '../src/api';
import { LoadTestConfiguration } from './helpers';

describe('Generate and recognize', () => {
    jest.setTimeout(60000);

    const api = new Barcode.BarcodeApi(LoadTestConfiguration());

    it('should recognize generated code', async () => {
        const generated = await api.getBarcodeGenerate(Barcode.EncodeBarcodeType.QR, 'Testing generator');
        const imageSize = generated.body.buffer.byteLength;
        assert.ok(imageSize > 0, `ImageSize=${imageSize}`);

        const recognized = await api.postBarcodeRecognizeFromUrlOrContent(
            undefined,
            undefined,
            undefined,
            undefined,
            undefined,
            undefined,
            undefined,
            undefined,
            undefined,
            undefined,
            undefined,
            undefined,
            undefined,
            undefined,
            undefined,
            undefined,
            undefined,
            undefined,
            undefined,
            undefined,
            undefined,
            undefined,
            undefined,
            undefined,
            undefined,
            undefined,
            undefined,
            undefined,
            undefined,
            undefined,
            undefined,
            undefined,
            undefined,
            undefined,
            generated.body
        );

        const barcodes = recognized.body.barcodes;
        assert.strictEqual(barcodes.length, 1);

        const barcode = barcodes[0];
        assert.strictEqual(barcode.type, Barcode.DecodeBarcodeType.QR);
        assert.strictEqual(barcode.barcodeValue, 'Testing generator');

        assert.strictEqual(barcode.region.length, 4);
        assert.ok(barcode.region[0].X > 0, `X=${barcode.region[0].X}`);
        assert.ok(barcode.region[0].Y > 0, `Y=${barcode.region[0].Y}`);
    });
});
