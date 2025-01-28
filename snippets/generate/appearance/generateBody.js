const fs = require('fs');
const path = require('path');
const Barcode = require('aspose-barcode-cloud-node');

function makeConfiguration() {
    const envToken = process.env['TEST_CONFIGURATION_ACCESS_TOKEN'];
    console.log("Start config");
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
            null,
            envToken
        );
    }
}
const config = makeConfiguration();

async function generateBarcode(api, fileName) {

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


        const request = new Barcode.GenerateBodyRequestWrapper(generateParams);

        const generated = await api.generateBody(request);

        fs.writeFileSync(fileName, generated.body);
}
const genApi = new Barcode.GenerateApi(config);

const fileName = path.resolve('testdata', 'Code39.png');


generateBarcode(genApi, fileName)
    .then(() => {
        console.log('Barcode saved to ' + fileName);
    }
    )
    .catch(err => {
        console.error("Error: " + JSON.stringify(err, null, 2));
        process.exitCode = 1;
    });
