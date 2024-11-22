const fs = require('fs');
const path = require('path');
const Barcode = require('aspose-barcode-cloud-node');

const config = new Barcode.Configuration(
    'Client Id from https://dashboard.aspose.cloud/applications',
    'Client Secret from https://dashboard.aspose.cloud/applications',
    null,
    process.env['TEST_CONFIGURATION_JWT_TOKEN']
);

async function recognizeBarcode(api, fileName) {
    const imageBytes = fs.readFileSync(fileName);
    const imageBase64 = Buffer.from(imageBytes).toString('base64');
    const recognizeBase64Request = new Barcode.RecognizeBase64Request();
    recognizeBase64Request.barcodeTypes = [Barcode.DecodeBarcodeType.QR];
    recognizeBase64Request.fileBase64 = imageBase64;
    const recognizeRequest = new Barcode.BarcodeRecognizeBodyPostRequest(recognizeBase64Request);
    const result = await api.barcodeRecognizeBodyPost(recognizeRequest);

    return result.body.barcodes;
}

const recognizeApi = new Barcode.RecognizeApi(config);

const fileName = path.resolve(
    path.dirname(__dirname),
    '..',
    '..',
    '..',
    '..',
    '..',
    'qr.png'
);

recognizeBarcode(recognizeApi, fileName)
    .then(barcodes => {
        console.log(`File '${fileName}' recognized, result: '${barcodes[0].barcodeValue}'`);
    })
    .catch(err => {
        console.error(JSON.stringify(err, null, 2));
        process.exitCode = 1;
    });