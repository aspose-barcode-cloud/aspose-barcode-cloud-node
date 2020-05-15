import 'mocha';

import {LoadConfigurationFromFile} from './test-utils';
import * as Barcode from '../api';

const assert = require('assert');

describe('getBarcodeGenerate', function () {
    this.timeout(60000);
    const api = new Barcode.BarcodeApi(LoadConfigurationFromFile('./test/configuration.json'));

    it('should generate image', async function () {

        const generated = await api.getBarcodeGenerate(Barcode.EncodeBarcodeType.QR, 'Testing generator');

        const imageSize = generated.body.buffer.byteLength;
        assert.ok(imageSize > 0, `ImageSize=${imageSize}`);
    });
});
