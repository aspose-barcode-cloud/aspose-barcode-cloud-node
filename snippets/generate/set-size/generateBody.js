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
    const imageParams = new Barcode.BarcodeImageParams();
    imageParams.imageHeight = 2;
    imageParams.imageWidth = 3;
    imageParams.resolution = 96;
    imageParams.units = Barcode.GraphicsUnit.Inch;

    const encodeData = new Barcode.EncodeData();
    encodeData.data = 'Aspose.BarCode.Cloud';
    encodeData.dataType = Barcode.EncodeDataType.StringData;

    const generateParams = new Barcode.GenerateParams();
    generateParams.barcodeType = Barcode.EncodeBarcodeType.Pdf417;
    generateParams.encodeData = encodeData;
    generateParams.barcodeImageParams = imageParams;

    const request = new Barcode.GenerateBodyRequestWrapper(generateParams);

    const generated = await api.generateBody(request);

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
