import assert from 'assert';

import * as Barcode from '../src/api';
import { LoadTestConfiguration } from './helpers';

describe('barcodeGenerateApiTests', () => {
    jest.setTimeout(60000);

    const api = new Barcode.GenerateApi(LoadTestConfiguration());

    it('should generate image with barcodeGenerateBarcodeTypeGet', async () => {
        const request = new Barcode.BarcodeGenerateBarcodeTypeGetRequest(Barcode.EncodeBarcodeType.Qr, Barcode.EncodeDataType.StringData,'Testing generator');
        request.foregroundColor = "0x001100";
        const generated = await api.barcodeGenerateBarcodeTypeGet(request);

        const imageSize = generated.body.buffer.byteLength;
        assert.ok(imageSize > 0, `ImageSize=${imageSize}`);
    });

    it('should generate image with barcodeGenerateBodyPost', async () => {


        const imageParams = new Barcode.BarcodeImageParams();
        imageParams.backgroundColor = "0xffddff";

        const encodeData = new Barcode.EncodeData();
        encodeData.data = 'Testing generator';
        encodeData.dataType = Barcode.EncodeDataType.StringData;

        const generateParams = new Barcode.GenerateParams();
        generateParams.barcodeType = Barcode.EncodeBarcodeType.Pdf417;
        generateParams.encodeData = encodeData;
        generateParams.barcodeImageParams = imageParams;

        const request = new Barcode.BarcodeGenerateBodyPostRequest(generateParams);
        const generated = await api.barcodeGenerateBodyPost(request);

        const imageSize = generated.body.buffer.byteLength;
        assert.ok(imageSize > 0, `ImageSize=${imageSize}`);
    });

    it('should generate image with barcodeGenerateBodyPost', async () => {
        const request = new Barcode.BarcodeGenerateFormPostRequest(
            Barcode.EncodeBarcodeType.Qr,
            Barcode.EncodeDataType.StringData,
            'Testing generator'
        );
        request.rotationAngle = 90;
        const generated = await api.barcodeGenerateFormPost(request);

        const imageSize = generated.body.buffer.byteLength;
        assert.ok(imageSize > 0, `ImageSize=${imageSize}`);
    });
});
