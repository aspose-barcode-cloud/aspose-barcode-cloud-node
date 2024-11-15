import fs from 'fs';

import assert from 'assert';

import * as Barcode from '../src/api';
import { LoadTestConfiguration } from './helpers';
import { RequestFile } from '../src/multipart';

describe('barcodeRecognize', () => {
    jest.setTimeout(60000);

    const config = LoadTestConfiguration();
    const api = new Barcode.RecognizeApi(config);

    const imageBuffer = fs.readFileSync('./testdata/pdf417Sample.png');
    const requestFile = new RequestFile('file', 'pdf417Sample.png', imageBuffer);
    const base64File = fs.readFileSync('./testdata/QR_and_Code128.png').toString('base64');

    it('barcodeRecognizeMultipartPost should recognize uploaded image', async () => {
        const recognizeRequest = new Barcode.BarcodeRecognizeMultipartPostRequest(
            Barcode.DecodeBarcodeType.Pdf417,
            requestFile
        );
        recognizeRequest.recognitionImageKind = Barcode.RecognitionImageKind.ClearImage;
        recognizeRequest.recognitionMode = Barcode.RecognitionMode.Fast;

        const recognized = await api.barcodeRecognizeMultipartPost(recognizeRequest);

        assert.ok(recognized.body.barcodes);
        assert.strictEqual(recognized.body.barcodes.length, 1);
        const barcode = recognized.body.barcodes[0];
        assert.strictEqual(barcode.type, Barcode.DecodeBarcodeType.Pdf417);
        assert.strictEqual(barcode.barcodeValue, 'Aspose.BarCode for Cloud Sample');

        assert.ok(barcode.region);
        assert.strictEqual(barcode.region!.length, 4);

        assert.strictEqual(barcode.region![0].x, 16);
        assert.strictEqual(barcode.region![0].y, 4);
        assert.strictEqual(barcode.region![1].x, 185);
        assert.strictEqual(barcode.region![1].y, 4);
        assert.strictEqual(barcode.region![2].x, 185);
        assert.strictEqual(barcode.region![2].y, 213);
        assert.strictEqual(barcode.region![3].x, 16);
        assert.strictEqual(barcode.region![3].y, 213);
    });

    it('barcodeRecognizeBodyPost should recognize uploaded image', async () => {
        const recognizeBase64Request = new Barcode.RecognizeBase64Request();
        recognizeBase64Request.barcodeTypes = [Barcode.DecodeBarcodeType.MostCommonlyUsed];
        recognizeBase64Request.fileBase64 = base64File;
        const recognizeRequest = new Barcode.BarcodeRecognizeBodyPostRequest(recognizeBase64Request);

        const recognized = await api.barcodeRecognizeBodyPost(recognizeRequest);

        assert.ok(recognized.body.barcodes);
        assert.strictEqual(recognized.body.barcodes.length, 2);

        let barcode = recognized.body.barcodes[0];
        assert.strictEqual(barcode.type, Barcode.DecodeBarcodeType.Qr);
        assert.strictEqual(barcode.barcodeValue, 'Hello world!');

        barcode = recognized.body.barcodes[1];
        assert.strictEqual(barcode.type, Barcode.DecodeBarcodeType.Code128);
        assert.strictEqual(barcode.barcodeValue, 'Hello world!');
    });

    it('barcodeRecognizeBodyPost should recognize image from URL', async () => {
        const recognizeRequest = new Barcode.BarcodeRecognizeGetRequest(
            Barcode.DecodeBarcodeType.Qr,
            'https://products.aspose.app/barcode/scan/img/how-to/scan/step2.png'
        );

        const recognized = await api.barcodeRecognizeGet(recognizeRequest);

        assert.ok(recognized.body.barcodes);
        assert.strictEqual(recognized.body.barcodes.length, 1);

        let barcode = recognized.body.barcodes[0];
        assert.strictEqual(barcode.type, Barcode.DecodeBarcodeType.Qr);
        assert.strictEqual(barcode.barcodeValue, 'http://en.m.wikipedia.org');
    });
});
