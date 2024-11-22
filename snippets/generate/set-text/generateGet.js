const fs = require('fs');
const path = require('path');
const Barcode = require('aspose-barcode-cloud-node');

const config = new Barcode.Configuration(
    'Client Id from https://dashboard.aspose.cloud/applications',
    'Client Secret from https://dashboard.aspose.cloud/applications',
    null,
    process.env['TEST_CONFIGURATION_JWT_TOKEN']
);

async function generateBarcode(api, fileName) {
    const getRequest = new Barcode.BarcodeGenerateBarcodeTypeGetRequest(
        Barcode.EncodeBarcodeType.QR,
        "Aspose.BarCode.Cloud"
    );
    getRequest.dataType = Barcode.EncodeDataType.StringData;

    const generated = await api.barcodeGenerateBarcodeTypeGet(getRequest);

    fs.writeFileSync(fileName, generated.body);
}

const genApi = new Barcode.GenerateApi(config);
const fileName = path.resolve(
    path.dirname(__dirname),
    'testdata',
    'qr.png'
);

generateBarcode(genApi, fileName)
    .then(() => {
        console.log('Barcode saved to ' + fileName);
    })
    .catch(err => {
        console.error(JSON.stringify(err, null, 2));
        process.exitCode = 1;
    });