const fs = require('fs');
const path = require('path');
const Barcode = require('aspose-barcode-cloud-node');

function makeConfiguration() {
    const envToken = process.env['TEST_CONFIGURATION_JWT_TOKEN'];
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
            envToken,
            null
        );
    }
}
const config = makeConfiguration();

function generateBarcode(api, fileName) {
    return new Promise(async (resolve, reject) => {
        try {
            const request = new Barcode.GenerateMultipartRequestWrapper(
                Barcode.EncodeBarcodeType.Code39,
                'Aspose'
            );
            request.foregroundColor = "Green";
            request.backgroundColor = "Yellow";
            request.imageFormat = Barcode.BarcodeImageFormat.Gif;

            const generated = await api.generateMultipart(request);

            fs.writeFileSync(fileName, generated.body);
            resolve();
        } catch (err) {
            reject(err);
        }
    });
}

const genApi = new Barcode.GenerateApi(config);
const fileName = path.resolve('testdata','Code39.png');

generateBarcode(genApi, fileName)
    .then(() => {
        console.log('Barcode saved to ' + fileName);
    })
    .catch(err => {
        console.error("Error: " + JSON.stringify(err, null, 2));
        process.exitCode = 1;
    });