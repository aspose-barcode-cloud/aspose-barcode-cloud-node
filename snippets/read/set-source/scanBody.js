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

async function scanBarcode(api, fileName) {
    const imageBytes = fs.readFileSync(fileName);
    const imageBase64 = Buffer.from(imageBytes).toString('base64');
    const base64Request = new Barcode.ScanBase64Request();
    base64Request.fileBase64 = imageBase64;
    const request = new Barcode.ScanBase64RequestWrapper(base64Request);
    const result = await api.scanBase64(request);

    return result.body.barcodes;
}

const scanApi = new Barcode.ScanApi(makeConfiguration());

const fileName = path.resolve('testdata', 'Qr.png');

scanBarcode(scanApi, fileName)
    .then((barcodes) => {
        console.log(`File '${fileName}' recognized, result: '${barcodes[0].barcodeValue}'`);
    })
    .catch((err) => {
        console.error('Error: ' + JSON.stringify(err, null, 2));
        process.exitCode = 1;
    });
