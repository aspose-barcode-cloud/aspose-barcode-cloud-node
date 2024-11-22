const fs = require('fs');
const path = require('path');
const Barcode = require('aspose-barcode-cloud-node');

const config = new Barcode.Configuration(
    'Client Id from https://dashboard.aspose.cloud/applications',
    'Client Secret from https://dashboard.aspose.cloud/applications',
    null,
    process.env['TEST_CONFIGURATION_JWT_TOKEN']
);

function generateBarcode(api, fileName) {
    return new Promise(async (resolve, reject) => {
        try {
            console.log("Start generating barcodes");
            const imageParams = new Barcode.BarcodeImageParams();        
            imageParams.foregroundColor = "Green";
            imageParams.backgroundColor = "Yellow";
            imageParams.imageFormat = Barcode.BarcodeImageFormat.Gif;

            const encodeData = new Barcode.EncodeData();
            encodeData.data = 'Aspose';
        
            const generateParams = new Barcode.GenerateParams();
            generateParams.barcodeType = Barcode.EncodeBarcodeType.Code39;
            generateParams.encodeData = encodeData;
            generateParams.barcodeImageParams = imageParams;

            const request = new Barcode.BarcodeGenerateMultipartPostRequest(generateParams);

            const generated = await api.barcodeGenerateMultipartPost(request);

            fs.writeFileSync(fileName, generated.body);
            resolve();
        } catch (err) {
            reject(err);
        }
    });
}

const genApi = new Barcode.GenerateApi(config);
const fileName = path.resolve(
    path.dirname(__dirname),
    'testdata',
    'Code39.png'
);

generateBarcode(genApi, fileName)
    .then(() => {
        console.log('Barcode saved to ' + fileName);
    })
    .catch(err => {
        console.error(JSON.stringify(err, null, 2));
        process.exitCode = 1;
    });