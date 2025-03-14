const fs = require('fs');
const path = require('path');
const Barcode = require('aspose-barcode-cloud-node');

function makeConfiguration() {
    const token = process.env['TEST_CONFIGURATION_ACCESS_TOKEN'];
    if (!token) {
        return new Barcode.Configuration(
            'Client Id from https://dashboard.aspose.cloud/applications',
            'Client Secret from https://dashboard.aspose.cloud/applications'
        );
    } else {
        return new Barcode.Configuration(undefined, undefined, undefined, token);
    }
}

async function scanBarcode(api, fileName) {
    const imageBuffer = fs.readFileSync(fileName);

    const scanRequest = new Barcode.ScanMultipartRequestWrapper(imageBuffer);
    const result = await api.scanMultipart(scanRequest);
    return result.body.barcodes;
}

const config = makeConfiguration();
const scanApi = new Barcode.ScanApi(config);

const fileName = path.resolve('testdata', 'Qr.png');

scanBarcode(scanApi, fileName)
    .then((barcodes) => {
        console.log(`File '${fileName}' recognized, result: '${barcodes[0].barcodeValue}'`);
    })
    .catch((err) => {
        console.error('Error: ' + JSON.stringify(err, null, 2));
        process.exitCode = 1;
    });
