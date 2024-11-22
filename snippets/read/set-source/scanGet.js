const fs = require('fs');
const path = require('path');
const Barcode = require('aspose-barcode-cloud-node');

function MakeConfiguration() {
    const envToken = process.env['TEST_CONFIGURATION_JWT_TOKEN'];
    const config = new Barcode.Configuration(
        !envToken ? 'Client Id from https://dashboard.aspose.cloud/applications' : null,
        !envToken ? 'Client Secret from https://dashboard.aspose.cloud/applications' : null,
        null,
        envToken
    );
    return config;
}

async function scanBarcode(api, imageUrl) {
    const request = new Barcode.BarcodeScanGetRequest(imageUrl);
    const result = await api.barcodeScanGet(request);
    return result.body.barcodes;
}

const config = MakeConfiguration();
const scanApi = new Barcode.ScanApi(config);
const fileUrl = "https://products.aspose.app/barcode/scan/img/how-to/scan/step2.png";

scanBarcode(scanApi, fileUrl)
    .then(barcodes => {
        console.log(`File recognized, result: '${barcodes[0].barcodeValue}'`);
    })
    .catch(err => {
        console.error(JSON.stringify(err, null, 2));
        process.exitCode = 1;
    });