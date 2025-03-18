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

async function generateBarcode(api, fileName) {
    const postParams = new Barcode.GenerateParams();
    postParams.barcodeType = Barcode.EncodeBarcodeType.Pdf417;
    postParams.encodeData = new Barcode.EncodeData();
    postParams.encodeData.dataType = Barcode.EncodeDataType.Base64Bytes;
    postParams.encodeData.data = 'QXNwb3NlLkJhckNvZGUuQ2xvdWQ=';

    const postRequest = new Barcode.GenerateBodyRequestWrapper(postParams);
    const generated = await api.generateBody(postRequest);

    fs.writeFileSync(fileName, generated.body);
}

const genApi = new Barcode.GenerateApi(config);
const fileName = path.resolve('testdata', 'Pdf417.png');

generateBarcode(genApi, fileName)
    .then(() => {
        console.log("File '" + fileName + "' generated.");
    })
    .catch((err) => {
        console.error('Error: ' + JSON.stringify(err, null, 2));
        process.exitCode = 1;
    });
