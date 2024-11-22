const fs = require('fs');
const path = require('path');
const Barcode = require('aspose-barcode-cloud-node');

const config = new Barcode.Configuration(
    'Client Id from https://dashboard.aspose.cloud/applications',
    'Client Secret from https://dashboard.aspose.cloud/applications',
    null,
    process.env['TEST_CONFIGURATION_JWT_TOKEN']
);

async function recognizeBarcode(api) {
    const request = new Barcode.BarcodeRecognizeGetRequest(
        Barcode.DecodeBarcodeType.MostCommonlyUsed,
        "https://products.aspose.app/barcode/scan/img/how-to/scan/step2.png"
    );
    const result = await api.barcodeRecognizeGet(request);
    return result.body.barcodes;
}

const recognizeApi = new Barcode.RecognizeApi(config);

recognizeBarcode(recognizeApi)
    .then(barcodes => {
        console.log(`File recognized, result: '${barcodes[0].barcodeValue}'`);
    })
    .catch(err => {
        console.error(JSON.stringify(err, null, 2));
        process.exitCode = 1;
    });