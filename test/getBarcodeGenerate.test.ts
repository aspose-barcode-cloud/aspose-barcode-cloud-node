import assert from 'assert';

import * as Barcode from '../src/api';
import { LoadConfigurationFromFile } from './LoadConfigurationFromFile';

describe('getBarcodeGenerate', () => {
    jest.setTimeout(60000);

    const api = new Barcode.BarcodeApi(LoadConfigurationFromFile('./test/configuration.json'));

    it('should generate image', async () => {
        const generated = await api.getBarcodeGenerate(Barcode.EncodeBarcodeType.QR, 'Testing generator');

        const imageSize = generated.body.buffer.byteLength;
        assert.ok(imageSize > 0, `ImageSize=${imageSize}`);
    });
});
