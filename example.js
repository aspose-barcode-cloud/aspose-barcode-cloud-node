const fs = require('fs');
const Barcode = require('aspose-barcode-cloud-node');

const config = new Barcode.Configuration(
    'Client Id from https://dashboard.aspose.cloud/applications',
    'Client Secret from https://dashboard.aspose.cloud/applications',
    null,
    process.env['TEST_CONFIGURATION_ACCESS_TOKEN']
);

async function generateBarcode(api) {
    const request = new Barcode.GetBarcodeGenerateRequest(
        Barcode.EncodeBarcodeType.QR,
        'Aspose.BarCode for Cloud Sample');
    const oneBarcode = await api.getBarcodeGenerate(request);

    const fileName = 'QR.png'
    fs.writeFileSync(fileName, oneBarcode.body);

    return fileName;
}

async function recognizeBarcode(api, fileName) {
    const request = new Barcode.PostBarcodeRecognizeFromUrlOrContentRequest();
    request.image = fs.readFileSync(fileName);
    request.preset = Barcode.PresetType.HighPerformance;

    const result = await api.postBarcodeRecognizeFromUrlOrContent(request);

    return result.body.barcodes;
}

const api = new Barcode.BarcodeApi(config);

console.log('Generating barcode...');
generateBarcode(api)
    .then(fileName => {
        console.log('Barcode saved to ' + fileName);

        console.log('Trying to recognize barcode...');
        recognizeBarcode(api, fileName)
            .then(barcodes => {
                console.log('Recognized barcodes are:');
                console.log(JSON.stringify(barcodes, null, 2));
            });
    })
    .catch(err => {
        console.error(JSON.stringify(err, null, 2));
        process.exitCode = 1;
    });
