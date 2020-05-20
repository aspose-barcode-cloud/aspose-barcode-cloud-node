import * as fs from 'fs';
import * as Barcode from './api';

import {LoadConfigurationFromFile} from '../test/LoadConfigurationFromFile';

async function generate(api: Barcode.BarcodeApi) {
    //1. simple barcode generation
    const oneBarcode = await api.getBarcodeGenerate(Barcode.EncodeBarcodeType.Pdf417, "Aspose.BarCode for Cloud Sample",
        undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined,
        "png"
    );

    fs.writeFileSync("../testdata/out_1.png", oneBarcode.body);
    console.log('Saved to ../testdata/out_1.png');


    //2. create multiple barcodes on the one image
    const firstBarcode = new Barcode.GeneratorParams();
    firstBarcode.typeOfBarcode = Barcode.EncodeBarcodeType.Code128;
    firstBarcode.text = "First barcode";

    const secondBarcode = new Barcode.GeneratorParams();
    secondBarcode.typeOfBarcode = Barcode.EncodeBarcodeType.QR;
    secondBarcode.text = "Second barcode";

    const params = new Barcode.GeneratorParamsList();
    params.barcodeBuilders = [firstBarcode, secondBarcode];
    params.xStep = 0;
    params.yStep = 1;

    const twoBarcodes = await api.postGenerateMultiple(params, "png");

    fs.writeFileSync("../testdata/out_2.png", twoBarcodes.body);
    console.log("Saved to ../testdata/out_2.png");
}


const config = LoadConfigurationFromFile('./test/configuration.json');

const api = new Barcode.BarcodeApi(config);
generate(api).then(r => console.info("Done"));
