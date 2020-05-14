import 'mocha';

import {LoadConfigurationFromFile} from './test-utils';
import * as Barcode from '../api';

const assert = require('assert');

describe('getBarcodeGenerate', function () {
    this.timeout(60000);

    const api = new Barcode.BarcodeApi(LoadConfigurationFromFile('./test/configuration.json'));

    it('should generate QR', async function () {
        const barcode = new Barcode.GeneratorParams();
        barcode.typeOfBarcode = Barcode.EncodeBarcodeType.Code128;
        barcode.text = 'First barcode';

        const secondBarcode = new Barcode.GeneratorParams();
        secondBarcode.typeOfBarcode = Barcode.EncodeBarcodeType.QR;
        secondBarcode.text = 'Second barcode';

        const params = new Barcode.GeneratorParamsList();
        params.barcodeBuilders = [barcode, secondBarcode];
        params.xStep = 0;
        params.yStep = 1;

        const generated = await api.postGenerateMultiple(params, 'png');

        const imageSize = generated.body.buffer.byteLength;
        assert.ok(imageSize > 0, `ImageSize=${imageSize}`);
    });
});