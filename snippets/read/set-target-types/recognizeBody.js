const fs = require('fs');
const path = require('path');
const Barcode = require('aspose-barcode-cloud-node');

function makeConfiguration() {
    const envToken = process.env['TEST_CONFIGURATION_ACCESS_TOKEN'];
    if (!envToken) {
        return new Barcode.Configuration(
            'Client Id from https://dashboard.aspose.cloud/applications',
            'Client Secret from https://dashboard.aspose.cloud/applications',
            null,
            null
        );
    } else {
        return new Barcode.Configuration(null, null, null, envToken);
    }
}

async function recognizeBarcode(api, fileName) {
    const imageBytes = fs.readFileSync(fileName);
    const imageBase64 = Buffer.from(imageBytes).toString('base64');
    const recognizeBase64Request = new Barcode.RecognizeBase64Request();
    recognizeBase64Request.barcodeTypes = [Barcode.DecodeBarcodeType.Qr, Barcode.DecodeBarcodeType.Pdf417];
    recognizeBase64Request.fileBase64 = imageBase64;
    const RecognizeRequestWrapper = new Barcode.RecognizeBase64RequestWrapper(recognizeBase64Request);
    const result = await api.recognizeBase64(RecognizeRequestWrapper);
    return result.body.barcodes;
}

const recognizeApi = new Barcode.RecognizeApi(makeConfiguration());

const fileName = path.resolve('testdata', 'QR_and_Code128.png');

recognizeBarcode(recognizeApi, fileName)
    .then((barcodes) => {
        console.log(`File '${fileName}' recognized, results:`);
        barcodes.forEach((result) => {
            console.log(`Value: '${result.barcodeValue}', type: ${result.type}`);
        });
    })
    .catch((err) => {
        console.error('Error: ' + JSON.stringify(err, null, 2));
        process.exitCode = 1;
    });
