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
    const formRequest = new Barcode.BarcodeGenerateMultipartPostRequest(Barcode.EncodeBarcodeType.Code128, "4173706F73652E426172436F64652E436C6F7564");
    formRequest.dataType = Barcode.EncodeDataType.HexBytes;

    const generated = await api.barcodeGenerateMultipartPost(formRequest);

    fs.writeFileSync(fileName, generated.body);
}

const genApi = new Barcode.GenerateApi(config);
const fileName = path.resolve(
    path.dirname(__dirname),
    '..',
    '..',
    '..',
    '..',
    'Code128.png'
);

generateBarcode(genApi, fileName)
    .then(() => {
        console.log(`File '${fileName}' generated.`);
    })
    .catch(err => {
        console.error(JSON.stringify(err, null, 2));
        process.exitCode = 1;
    });