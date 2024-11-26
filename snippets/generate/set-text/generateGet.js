const fs = require('fs');
const path = require('path');
const Barcode = require('aspose-barcode-cloud-node');

function makeConfiguration() {
    const envToken = process.env['TEST_CONFIGURATION_JWT_TOKEN'];
    if (!envToken) {
        return new Barcode.Configuration(
            'Client Id from https://dashboard.aspose.cloud/applications',
            'Client Secret from https://dashboard.aspose.cloud/applications',
            null,
            null
        );
    } else {
        return new Barcode.Configuration(
            null,
            null,
            envToken,
            null
        );
    }
}
const config = makeConfiguration();

async function generateBarcode(api, fileName) {
    const getRequest = new Barcode.BarcodeGenerateBarcodeTypeGetRequest(
        Barcode.EncodeBarcodeType.Qr,
        "Aspose.BarCode.Cloud"
    );
    getRequest.dataType = Barcode.EncodeDataType.StringData;

    const generated = await api.barcodeGenerateBarcodeTypeGet(getRequest);

    fs.writeFileSync(fileName, generated.body);
}

const genApi = new Barcode.GenerateApi(config);
const fileName = path.resolve('testdata','Qr.png');

generateBarcode(genApi, fileName)
    .then(() => {
        console.log('Barcode saved to ' + fileName);
    })
    .catch(err => {
        console.error("Error: " + JSON.stringify(err, null, 2));
        process.exitCode = 1;
    });