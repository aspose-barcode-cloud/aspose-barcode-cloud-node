const fs = require('fs');
const path = require('path');
const Barcode = require('aspose-barcode-cloud-node');

const config = new Barcode.Configuration(
    'Client Id from https://dashboard.aspose.cloud/applications',
    'Client Secret from https://dashboard.aspose.cloud/applications',
    null,
    process.env['TEST_CONFIGURATION_ACCESS_TOKEN']
);

async function generateBarcode(api, fileName) {
        console.log("Start generating barcodes");
        const imageParams = new Barcode.BarcodeImageParams();        
        imageParams.foregroundColor = "#FF0000";
        imageParams.backgroundColor = "#FFFF00";
        imageParams.imageFormat = Barcode.BarcodeImageFormat.Jpeg;
        imageParams.rotationAngle = 90;

        const encodeData = new Barcode.EncodeData();
        encodeData.data = 'Aspose';
    
        const generateParams = new Barcode.GenerateParams();
        generateParams.barcodeType = Barcode.EncodeBarcodeType.Code39;
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
    'Code39.png'
);

generateBarcode(genApi, fileName)
    .then(() => {
        console.log('Barcode saved to ' + fileName);
    }
    )
    .catch(err => {
        console.error(JSON.stringify(err, null, 2));
        process.exitCode = 1;
    });
