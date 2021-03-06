import assert from 'assert';

import * as Barcode from '../src/api';
import { LoadTestConfiguration } from './helpers';

describe('postGenerateMultiple', () => {
    jest.setTimeout(60000);

    const api = new Barcode.BarcodeApi(LoadTestConfiguration());

    const firstBarcode = new Barcode.GeneratorParams();
    firstBarcode.typeOfBarcode = Barcode.EncodeBarcodeType.Code128;
    firstBarcode.text = 'First barcode';

    const secondBarcode = new Barcode.GeneratorParams();
    secondBarcode.typeOfBarcode = Barcode.EncodeBarcodeType.QR;
    secondBarcode.text = 'Second barcode';

    const params = new Barcode.GeneratorParamsList();
    params.barcodeBuilders = [firstBarcode, secondBarcode];
    params.xStep = 0;
    params.yStep = 1;

    it('should generate image', async () => {
        const request = new Barcode.PostGenerateMultipleRequest(params);
        request.format = 'png';
        const generated = await api.postGenerateMultiple(request);

        const imageSize = generated.body.buffer.byteLength;
        assert.ok(imageSize > 0, `ImageSize=${imageSize}`);
    });
});
