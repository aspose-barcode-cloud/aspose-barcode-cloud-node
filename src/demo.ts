import fs = require('fs');

import * as barcode from './api';

import {LoadConfigurationFromFile} from "./test/test-config";

async function generate(api: barcode.BarcodeApi) {
    //1. simple barcode generation
    await api.getBarcodeGenerate("Pdf417", "Aspose.BarCode for Cloud Sample", "png")
        .then((apiResult) => {
            if (apiResult.response.statusCode == 200) {
                fs.writeFile("../testdata/out_1.png", apiResult.body, (err) => {
                    if (err) throw err;

                    console.log('Saved to ../testdata/out_1.png');
                });
            }
        })
        .catch((reason) => {
            console.error(reason);
        });

    //2. create multiple barcodes on the one image
    const firstBarcode = new barcode.GeneratorParams();
    firstBarcode.typeOfBarcode = barcode.EncodeBarcodeType.Code128;
    firstBarcode.text = "First barcode";

    const secondBarcode = new barcode.GeneratorParams();
    secondBarcode.typeOfBarcode = barcode.EncodeBarcodeType.QR;
    secondBarcode.text = "Second barcode";

    const params = new barcode.GeneratorParamsList();
    params.barcodeBuilders = [firstBarcode, secondBarcode];
    params.xStep = 0;
    params.yStep = 1;

    await api.postGenerateMultiple(params, "png")
        .then((apiResult) => {
            if (apiResult.response.statusCode == 200) {
                fs.writeFile("../testdata/out_2.png", apiResult.body, (err) => {
                    if (err) throw err;

                    console.log("Saved to ../testdata/out_2.png");
                });
            }
        })
        .catch((reason) => {
            console.error(reason);
        });
}

const config = LoadConfigurationFromFile('./test/configuration.json');

let api = new barcode.BarcodeApi(config);
generate(api).then(r => console.info("Done"));
