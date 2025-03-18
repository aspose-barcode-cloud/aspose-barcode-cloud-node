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
const config = makeConfiguration();

async function recognizeBarcode(api) {
    const request = new Barcode.RecognizeRequestWrapper(
        Barcode.DecodeBarcodeType.MostCommonlyUsed,
        'https://products.aspose.app/barcode/scan/img/how-to/scan/step2.png'
    );
    const result = await api.recognize(request);
    return result.body.barcodes;
}

const recognizeApi = new Barcode.RecognizeApi(config);

recognizeBarcode(recognizeApi)
    .then((barcodes) => {
        console.log(`File recognized, result: '${barcodes[0].barcodeValue}'`);
    })
    .catch((err) => {
        console.error('Error: ' + JSON.stringify(err, null, 2));
        process.exitCode = 1;
    });
