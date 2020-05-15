import fs = require('fs');

import * as Barcode from './api';

import {LoadConfigurationFromFile} from "./test/test-utils";

async function generate(api: Barcode.BarcodeApi) {
    //1. simple barcode generation
    await api.getBarcodeGenerate(Barcode.EncodeBarcodeType.Pdf417, "Aspose.BarCode for Cloud Sample",
        undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined,
        "png"
    )
        .then(apiResult => {
            if (apiResult.response.statusCode == 200) {
                fs.writeFile("../testdata/out_1.png", apiResult.body, (err) => {
                    if (err) throw err;

                    console.log('Saved to ../testdata/out_1.png');
                });
            }
        })
        .catch(reason => {
            console.error(reason);
        });

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

    await api.postGenerateMultiple(params, "png")
        .then(apiResult => {
            if (apiResult.response.statusCode == 200) {
                fs.writeFile("../testdata/out_2.png", apiResult.body, (err) => {
                    if (err) throw err;

                    console.log("Saved to ../testdata/out_2.png");
                });
            }
        })
        .catch(reason => {
            console.error(reason);
        });
}

const config = LoadConfigurationFromFile('./test/configuration.json');

const api = new Barcode.BarcodeApi(config);
generate(api).then(r => console.info("Done"));
