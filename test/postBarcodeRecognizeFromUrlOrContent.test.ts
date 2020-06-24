import fs from 'fs';

import assert from 'assert';

import * as Barcode from '../src/api';
import { LoadConfigurationFromFile } from './LoadConfigurationFromFile';

describe('postBarcodeRecognizeFromUrlOrContent', () => {
    jest.setTimeout(60000);

    const api = new Barcode.BarcodeApi(LoadConfigurationFromFile('./test/configuration.json'));

    const imageBuffer = fs.readFileSync('./testdata/pdf417Sample.png');

    it('should recognize from body', async () => {
        const recognized = await api.postBarcodeRecognizeFromUrlOrContent(
            undefined,
            undefined,
            undefined,
            Barcode.PresetType.HighPerformance,
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
            imageBuffer
        );

        const barcodes = recognized.body.barcodes;
        assert.strictEqual(barcodes.length, 1);

        const barcode = barcodes[0];
        assert.strictEqual(barcode.type, Barcode.DecodeBarcodeType.Pdf417);
        assert.strictEqual(barcode.barcodeValue, 'Aspose.BarCode for Cloud Sample');

        assert.strictEqual(barcode.region.length, 4);
        assert.ok(barcode.region[0].X > 0, `X=${barcodes[0].region[0].X}`);
        assert.ok(barcode.region[0].Y > 0, `Y=${barcodes[0].region[0].Y}`);
    });
});
