import fs from 'fs';

import assert from 'assert';
import { v4 as uuidv4 } from 'uuid';

import * as Barcode from '../src/api';
import { LoadConfigurationFromFile } from './test-utils';

describe('getBarcodeRecognize', () => {
  jest.setTimeout(60000);

  const config = LoadConfigurationFromFile('./test/configuration.json');
  const api = new Barcode.BarcodeApi(config);
  const fileApi = new Barcode.FileApi(config);

  const tempFolderPath = `BarcodeTests/${uuidv4()}`;
  const filename = 'Test_putBarcodeGenerateFile.png';

  const imageBuffer = fs.readFileSync('./testdata/pdf417Sample.png');

  it('should recognize uploaded image', async () => {
    const uploaded = await fileApi.uploadFile(`${tempFolderPath}/${filename}`, imageBuffer);

    assert.equal(uploaded.body.uploaded[0], filename);

    const recognized = await api.getBarcodeRecognize(
      filename,
      undefined,
      undefined,
      undefined,
      Barcode.PresetType.HighPerformance,
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
      tempFolderPath
    );

    assert.equal(recognized.body.barcodes.length, 1);
    const barcode = recognized.body.barcodes[0];
    assert.equal(barcode.type, Barcode.DecodeBarcodeType.Pdf417);
    assert.equal(barcode.barcodeValue, 'Aspose.BarCode for Cloud Sample');

    assert.equal(barcode.region.length, 4);

    assert.equal(barcode.region[0].X, 16);
    assert.equal(barcode.region[0].Y, 4);
    assert.equal(barcode.region[1].X, 185);
    assert.equal(barcode.region[1].Y, 4);
    assert.equal(barcode.region[2].X, 185);
    assert.equal(barcode.region[2].Y, 213);
    assert.equal(barcode.region[3].X, 16);
    assert.equal(barcode.region[3].Y, 213);
  });
});
