import fs from 'fs';

import assert from 'assert';
import { v4 as uuidv4 } from 'uuid';

import * as Barcode from '../src/api';
import { LoadTestConfiguration } from './helpers';

describe('getBarcodeRecognize', () => {
    jest.setTimeout(60000);

    const config = LoadTestConfiguration();
    const api = new Barcode.BarcodeApi(config);
    const fileApi = new Barcode.FileApi(config);

    const tempFolderPath = `BarcodeTests/${uuidv4()}`;
    const filename = 'Test_putBarcodeGenerateFile.png';

    const imageBuffer = fs.readFileSync('./testdata/pdf417Sample.png');

    it('getBarcodeRecognize should recognize uploaded image', async () => {
        const uploadRequest = new Barcode.UploadFileRequest(`${tempFolderPath}/${filename}`, imageBuffer);
        const uploaded = await fileApi.uploadFile(uploadRequest);

        assert.ok(uploaded.body.errors);
        assert.strictEqual(uploaded.body.errors.length, 0, JSON.stringify(uploaded.body.errors));
        assert.ok(uploaded.body.uploaded);
        assert.strictEqual(uploaded.body.uploaded[0], filename);

        const recognizeRequest = new Barcode.GetBarcodeRecognizeRequest(filename);
        recognizeRequest.types = [Barcode.DecodeBarcodeType.Pdf417];
        recognizeRequest.preset = Barcode.PresetType.HighPerformance;
        recognizeRequest.fastScanOnly = true;

        recognizeRequest.folder = tempFolderPath;
        const recognized = await api.getBarcodeRecognize(recognizeRequest);

        assert.ok(recognized.body.barcodes);
        assert.strictEqual(recognized.body.barcodes.length, 1);
        const barcode = recognized.body.barcodes[0];
        assert.strictEqual(barcode.type, Barcode.DecodeBarcodeType.Pdf417);
        assert.strictEqual(barcode.barcodeValue, 'Aspose.BarCode for Cloud Sample');

        assert.ok(barcode.region);
        assert.strictEqual(barcode.region.length, 4);

        assert.strictEqual(barcode.region[0].X, 16);
        assert.strictEqual(barcode.region[0].Y, 4);
        assert.strictEqual(barcode.region[1].X, 185);
        assert.strictEqual(barcode.region[1].Y, 4);
        assert.strictEqual(barcode.region[2].X, 185);
        assert.strictEqual(barcode.region[2].Y, 213);
        assert.strictEqual(barcode.region[3].X, 16);
        assert.strictEqual(barcode.region[3].Y, 213);
    });
});
