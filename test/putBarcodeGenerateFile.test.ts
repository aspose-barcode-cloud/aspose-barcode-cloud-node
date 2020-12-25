import assert from 'assert';
import { v4 as uuidv4 } from 'uuid';

import * as Barcode from '../src/api';
import { LoadTestConfiguration } from './helpers';

describe('putBarcodeGenerateFile', () => {
    jest.setTimeout(60000);

    const api = new Barcode.BarcodeApi(LoadTestConfiguration());
    const tempFolderPath = `BarcodeTests/${uuidv4()}`;
    const filename = 'Test_putBarcodeGenerateFile.png';

    it('should create file on server', async function() {
        const response = await api.putBarcodeGenerateFile(
            filename,
            Barcode.EncodeBarcodeType.Code128,
            'Hello!',
            undefined,
            undefined,
            undefined,
            undefined,
            undefined,
            undefined,
            undefined,
            undefined,
            undefined,
            undefined,
            undefined,
            undefined,
            undefined,
            undefined,
            undefined,
            undefined,
            undefined,
            undefined,
            undefined,
            undefined,
            undefined,
            undefined,
            undefined,
            undefined,
            undefined,
            undefined,
            undefined,
            undefined,
            undefined,
            undefined,
            undefined,
            undefined,
            undefined,
            tempFolderPath,
            undefined
        );

        assert.ok(response.body.fileSize > 0);
        assert.ok(response.body.imageWidth > 0);
        assert.ok(response.body.imageHeight > 0);
    });
});
