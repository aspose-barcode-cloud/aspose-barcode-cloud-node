import assert from 'assert';

import * as Barcode from '../src/api';
import { LoadTestConfiguration } from './helpers';

describe('Generate and recognize', () => {
    jest.setTimeout(60000);

    const api = new Barcode.BarcodeApi(LoadTestConfiguration());

    it('should recognize generated code', async () => {
        const generateRequest = new Barcode.GetBarcodeGenerateRequest(
            Barcode.EncodeBarcodeType.QR,
            'Testing generator'
        );
        const generated = await api.getBarcodeGenerate(generateRequest);
        const imageSize = generated.body.buffer.byteLength;
        assert.ok(imageSize > 0, `ImageSize=${imageSize}`);

        const recognizeRequest = new Barcode.PostBarcodeRecognizeFromUrlOrContentRequest();
        recognizeRequest.types = [Barcode.DecodeBarcodeType.QR];
        recognizeRequest.preset = Barcode.PresetType.HighPerformance;
        recognizeRequest.fastScanOnly = true;

        recognizeRequest.image = generated.body;
        const recognized = await api.postBarcodeRecognizeFromUrlOrContent(recognizeRequest);

        const barcodes = recognized.body.barcodes;
        assert.ok(barcodes);
        assert.strictEqual(barcodes.length, 1);

        const barcode = barcodes[0];
        assert.ok(barcode);
        assert.strictEqual(barcode.type, Barcode.DecodeBarcodeType.QR);
        assert.strictEqual(barcode.barcodeValue, 'Testing generator');

        assert.ok(barcode.region);
        assert.strictEqual(barcode.region.length, 4);
        assert.ok(barcode.region[0].X > 0, `X=${barcode.region[0].X}`);
        assert.ok(barcode.region[0].Y > 0, `Y=${barcode.region[0].Y}`);
    });
});
