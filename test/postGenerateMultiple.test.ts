import assert from 'assert';

import * as Barcode from '../src/api';
import { LoadConfigurationFromFile } from './helpers';

describe('postGenerateMultiple', () => {
    jest.setTimeout(60000);

    const api = new Barcode.BarcodeApi(LoadConfigurationFromFile('./test/configuration.json'));

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
        const generated = await api.postGenerateMultiple(params, 'png');

        const imageSize = generated.body.buffer.byteLength;
        assert.ok(imageSize > 0, `ImageSize=${imageSize}`);
    });
});
