import fs = require('fs');
import * as barcode from './api';
import { Configuration } from './configuration';

async function generate(api: barcode.BarCodeApi) {
    //1. simple barcode generation
    await api.barCodeGetBarCodeGenerate("Aspose.BarCode for Cloud Sample", "Pdf417", "png")
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
    await api.barCodePostGenerateMultiple(
        {
            barCodeBuilders: [{
                typeOfBarCode: barcode.BarCodeType.Code128,
                text: "First barcode"
            },
            {
                typeOfBarCode: barcode.BarCodeType.QR,
                text: "Second barcode"
            }],
            xStep: 0,
            yStep: 1
        },
        "png")
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


let api = new barcode.BarCodeApi(config);
generate(api);
