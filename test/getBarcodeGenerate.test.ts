import assert from 'assert';

import * as Barcode from '../src/api';
import { LoadTestConfiguration } from './helpers';

describe('getBarcodeGenerate', () => {
    jest.setTimeout(60000);

    const api = new Barcode.BarcodeApi(LoadTestConfiguration());

    it('should generate image', async () => {
        const request = new Barcode.GetBarcodeGenerateRequest(Barcode.EncodeBarcodeType.QR, 'Testing generator');
        const generated = await api.getBarcodeGenerate(request);

        const imageSize = generated.body.buffer.byteLength;
        assert.ok(imageSize > 0, `ImageSize=${imageSize}`);
    });
});
