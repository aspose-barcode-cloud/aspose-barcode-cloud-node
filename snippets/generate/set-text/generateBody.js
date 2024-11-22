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
    const postParams = new Barcode.GenerateParams();
    postParams.barcodeType = Barcode.EncodeBarcodeType.Pdf417;
    postParams.encodeData = new Barcode.EncodeData();
    postParams.encodeData.dataType = Barcode.EncodeDataType.Base64Bytes;
    postParams.encodeData.data = "QXNwb3NlLkJhckNvZGUuQ2xvdWQ=";

    const postRequest = new Barcode.BarcodeGenerateBodyPostRequest(postParams);
    const generated = await api.barcodeGenerateBodyPost(postRequest);

    fs.writeFileSync(fileName, generated.body);
}

const genApi = new Barcode.GenerateApi(config);
const fileName = path.resolve(
    path.dirname(__dirname),
    'testdata',
    'Pdf417.png'
);

generateBarcode(genApi, fileName)
    .then(() => {
        console.log('File \'' + fileName + '\' generated.');
    })
    .catch(err => {
        console.error(JSON.stringify(err, null, 2));
        process.exitCode = 1;
    });