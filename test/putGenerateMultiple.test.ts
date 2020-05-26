import assert from 'assert';
import { v4 as uuidv4 } from 'uuid';

import * as Barcode from '../src/api';
import { LoadConfigurationFromFile } from './LoadConfigurationFromFile';

describe('putGenerateMultiple', () => {
    jest.setTimeout(60000);

    const api = new Barcode.BarcodeApi(LoadConfigurationFromFile('./test/configuration.json'));
    const tempFolderPath = `BarcodeTests/${uuidv4()}`;
    const filename = 'Test_putGenerateMultiple.png';

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

    it('should create file on server', async () => {
        const response = await api.putGenerateMultiple(filename, params, undefined, tempFolderPath);

        assert.ok(response.body.fileSize > 0);
        assert.ok(response.body.imageWidth > 0);
        assert.ok(response.body.imageHeight > 0);
    });
});
