import assert from 'assert';

import * as Barcode from '../src/api';
import * as Models from '../src/models';
import { LoadTestConfiguration } from './helpers';

describe('postGenerateMultiple', () => {
    jest.setTimeout(60000);

    const api = new Barcode.BarcodeApi(LoadTestConfiguration());

    const firstBarcode = new Models.GeneratorParams();
    firstBarcode.typeOfBarcode = Models.EncodeBarcodeType.Code128;
    firstBarcode.text = 'First barcode';

    const secondBarcode = new Models.GeneratorParams();
    secondBarcode.typeOfBarcode = Models.EncodeBarcodeType.QR;
    secondBarcode.text = 'Second barcode';

    const params = new Models.GeneratorParamsList();
    params.barcodeBuilders = [firstBarcode, secondBarcode];
    params.xStep = 0;
    params.yStep = 1;

    it('should generate image', async () => {
        const request = new Models.PostGenerateMultipleRequest(params);
        request.format = 'png';
        const generated = await api.postGenerateMultiple(request);

        const imageSize = generated.body.buffer.byteLength;
        assert.ok(imageSize > 0, `ImageSize=${imageSize}`);
    });
});
