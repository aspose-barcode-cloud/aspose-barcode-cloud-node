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
    const fileStream = fs.createReadStream(fileName);
    const recognizeMultipartRequest = new Barcode.BarcodeRecognizeMultipartPostRequest();
    recognizeMultipartRequest.barcodeType = Barcode.DecodeBarcodeType.MostCommonlyUsed;
    recognizeMultipartRequest.imageStream = fileStream;
    recognizeMultipartRequest.imageKind = Barcode.RecognitionImageKind.ClearImage;
    const result = await api.barcodeRecognizeMultipartPost(recognizeMultipartRequest);

    return result.body.barcodes;
}

const recognizeApi = new Barcode.RecognizeApi(config);

const fileName = path.resolve(
    path.dirname(__dirname),
    '..',
    '..',
    '..',
    '..',
    'Pdf417.png'
);

recognizeBarcode(recognizeApi, fileName)
.then(barcodes => {
    console.log(`File '${fileName}' recognized, result: '${barcodes[0].barcodeValue}'`);
})
.catch(err => {
    console.error(JSON.stringify(err, null, 2));
    process.exitCode = 1;
});