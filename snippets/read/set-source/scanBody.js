const fs = require('fs');
const path = require('path');
const Barcode = require('aspose-barcode-cloud-node');

function makeConfiguration() {
    return new Barcode.Configuration(
        process.env['TEST_CONFIGURATION_JWT_TOKEN'] || 'Client Id from https://dashboard.aspose.cloud/applications',
        process.env['TEST_CONFIGURATION_JWT_TOKEN'] ? null : 'Client Secret from https://dashboard.aspose.cloud/applications',
        null,
        process.env['TEST_CONFIGURATION_ACCESS_TOKEN']
    );
}

async function scanBarcode(api, fileName) {
    const imageBytes = fs.readFileSync(fileName);
    const imageBase64 = Buffer.from(imageBytes).toString('base64');
    const base64Request = new Barcode.ScanBase64Request();
    base64Request.fileBase64 = imageBase64;
    const request = new Barcode.BarcodeScanBodyPostRequest(base64Request);
    const result = await api.barcodeScanBodyPost(request);
    
    return result.body.barcodes;
}

const scanApi = new Barcode.ScanApi(makeConfiguration());

const fileName = path.resolve(
    path.dirname(__dirname),
    '..', '..', '..', '..', '..',
    'qr.png'
);

scanBarcode(scanApi, fileName)
.then(barcodes => {
    console.log(`File '${fileName}' recognized, result: '${barcodes[0].barcodeValue}'`);
})
.catch(err => {
    console.error(JSON.stringify(err, null, 2));
    process.exitCode = 1;
});