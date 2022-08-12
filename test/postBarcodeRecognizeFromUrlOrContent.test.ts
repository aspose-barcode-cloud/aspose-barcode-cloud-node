import fs from 'fs';

import assert from 'assert';

import * as Barcode from '../src/api';
import { LoadTestConfiguration } from './helpers';

describe('postBarcodeRecognizeFromUrlOrContent', () => {
    jest.setTimeout(60000);

    const api = new Barcode.BarcodeApi(LoadTestConfiguration());

    const imageBuffer = fs.readFileSync('./testdata/pdf417Sample.png');

    it('should recognize from body', async () => {
        const request = new Barcode.PostBarcodeRecognizeFromUrlOrContentRequest();
        request.type = Barcode.DecodeBarcodeType.Pdf417;
        request.preset = Barcode.PresetType.HighPerformance;
        request.fastScanOnly = true;

        request.image = imageBuffer;
        const recognized = await api.postBarcodeRecognizeFromUrlOrContent(request);

        const barcodes = recognized.body.barcodes;
        assert.ok(barcodes);
        assert.strictEqual(barcodes.length, 1);

        const barcode = barcodes[0];
        assert.strictEqual(barcode.type, Barcode.DecodeBarcodeType.Pdf417);
        assert.strictEqual(barcode.barcodeValue, 'Aspose.BarCode for Cloud Sample');

        assert.ok(barcode.region);
        assert.strictEqual(barcode.region.length, 4);
        assert.ok(barcode.region[0].X > 0, `X=${barcode.region[0].X}`);
        assert.ok(barcode.region[0].Y > 0, `Y=${barcode.region[0].Y}`);
    });
});
