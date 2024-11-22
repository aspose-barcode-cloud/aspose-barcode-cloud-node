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
    const imageParams = new Barcode.BarcodeImageParams();
    imageParams.foregroundColor = "#FF5733";
    imageParams.backgroundColor = "#FFFFFF";
    imageParams.imageFormat = Barcode.BarcodeImageFormat.Jpeg;

    const encodeData = new Barcode.EncodeData();
    encodeData.data = 'Aspose.BarCode.Cloud';
    encodeData.dataType = Barcode.EncodeDataType.StringData;

    const generateParams = new Barcode.GenerateParams();
    generateParams.barcodeType = Barcode.EncodeBarcodeType.Pdf417;
    generateParams.encodeData = encodeData;
    generateParams.barcodeImageParams = imageParams;

    const request = new Barcode.BarcodeGenerateBodyPostRequest(generateParams);

    const generated = await api.barcodeGenerateBodyPost(request);

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