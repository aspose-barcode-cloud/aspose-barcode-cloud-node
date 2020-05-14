import 'mocha';

import {LoadConfigurationFromFile} from './test-utils';
import * as Barcode from '../api';

const assert = require('assert');

describe('Generate and recognize', function () {
    this.timeout(60000);
    const api = new Barcode.BarcodeApi(LoadConfigurationFromFile('./test/configuration.json'));

    it('should recognize generated code', async function () {
        const generated = await api.getBarcodeGenerate(Barcode.EncodeBarcodeType.QR, 'Testing generator');
        const imageSize = generated.body.buffer.byteLength;
        assert.ok(imageSize > 0, `ImageSize=${imageSize}`);

        const recognized = await api.postBarcodeRecognizeFromUrlOrContent(
            undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined,
            generated.body);

        const barcodes = recognized.body.barcodes;
        assert.equal(barcodes.length, 1);

        const barcode = barcodes[0];
        assert.equal(barcode.type, Barcode.DecodeBarcodeType.QR);
        assert.equal(barcode.barcodeValue, 'Testing generator');

        assert.equal(barcode.region.length, 4);
        assert.ok(barcode.region[0].X > 0, `X=${barcode.region[0].X}`);
        assert.ok(barcode.region[0].Y > 0, `Y=${barcode.region[0].Y}`);
    });
});
