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
    const request = new Barcode.BarcodeGenerateMultipartPostRequest(Barcode.EncodeBarcodeType.Aztec, 'Aspose.BarCode.Cloud');
    request.imageHeight = 200;
    request.imageWidth = 200;
    request.resolution = 150;
    request.units = Barcode.GraphicsUnit.Point;

    const generated = await api.barcodeGenerateMultipartPost(request);

    fs.writeFileSync(fileName, generated.body);
}

const genApi = new Barcode.GenerateApi(config);
const fileName = path.resolve(
    path.dirname(__dirname),
    'testdata',
    'aztec.png'
);

generateBarcode(genApi, fileName)
    .then(() => {
        console.log('File \'' + fileName + '\' generated.');
    })
    .catch(err => {
        console.error(JSON.stringify(err, null, 2));
        process.exitCode = 1;
    });