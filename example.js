const fs = require('fs');
const Barcode = require('aspose-barcode-cloud-node');

const config = new Barcode.Configuration(
    'Client Id from https://dashboard.aspose.cloud/applications',
    'Client Secret from https://dashboard.aspose.cloud/applications',
    null,
    process.env['TEST_CONFIGURATION_ACCESS_TOKEN']
);

async function generateBarcode(api) {
    const request = new Barcode.BarcodeGenerateBarcodeTypeGetRequest(
        Barcode.EncodeBarcodeType.Qr, 
        'Aspose.BarCode for Cloud Sample');

    const oneBarcode = await api.barcodeGenerateBarcodeTypeGet(request);

    const fileName = 'QR.png'
    fs.writeFileSync(fileName, oneBarcode.body);

    return fileName;
}

async function scanBarcode(api, fileName) {

    const requestFile = new RequestFile('file', fileName, fs.readFileSync(fileName));
    const scanRequest = new Barcode.BarcodeScanMultipartPostRequest(requestFile);
    const result = await api.barcodeScanMultipartPost(scanRequest);

    return result.body.barcodes;
}

const genApi = new Barcode.GenerateApi(config);
const scanApi = new Barcode.ScanApi(config);

console.log('Generating barcode...');
generateBarcode(genApi)
    .then(fileName => {
        console.log('Barcode saved to ' + fileName);

        console.log('Trying to recognize barcode...');
        scanBarcode(scanApi, fileName)
            .then(barcodes => {
                console.log('Recognized barcodes are:');
                console.log(JSON.stringify(barcodes, null, 2));
            });
    })
    .catch(err => {
        console.error(JSON.stringify(err, null, 2));
        process.exitCode = 1;
    });
