const fs = require('fs');
const path = require('path');
const Barcode = require('aspose-barcode-cloud-node');

const config = new Barcode.Configuration(
    'Client Id from https://dashboard.aspose.cloud/applications',
    'Client Secret from https://dashboard.aspose.cloud/applications',
    null,
    process.env['TEST_CONFIGURATION_ACCESS_TOKEN']
);

async function recognizeBarcode(api, fileUrl) {
    const recognizeRequest = new Barcode.BarcodeRecognizeGetRequest(
        Barcode.DecodeBarcodeType.QR,
        fileUrl
    );
    const result = await api.barcodeRecognizeGet(recognizeRequest);
    return result.body.barcodes;
}

const recognizeApi = new Barcode.RecognizeApi(config);

const fileUrl = 'https://products.aspose.app/barcode/scan/img/how-to/scan/step2.png';

recognizeBarcode(recognizeApi, fileUrl)
    .then(barcodes => {
        console.log(`File recognized, result: '${barcodes[0].barcodeValue}'`);
    })
    .catch(err => {
        console.error(JSON.stringify(err, null, 2));
        process.exitCode = 1;
    });