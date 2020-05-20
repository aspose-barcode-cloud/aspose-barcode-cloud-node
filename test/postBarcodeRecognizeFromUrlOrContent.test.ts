import fs from 'fs';

import assert from 'assert';

import * as Barcode from '../src/api';
import { LoadConfigurationFromFile } from './test-utils';

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
        assert.equal(barcodes.length, 1);

        const barcode = barcodes[0];
        assert.equal(barcode.type, Barcode.DecodeBarcodeType.Pdf417);
        assert.equal(barcode.barcodeValue, 'Aspose.BarCode for Cloud Sample');

        assert.equal(barcode.region.length, 4);
        assert.ok(barcode.region[0].X > 0, `X=${barcodes[0].region[0].X}`);
        assert.ok(barcode.region[0].Y > 0, `Y=${barcodes[0].region[0].Y}`);
    });
});
