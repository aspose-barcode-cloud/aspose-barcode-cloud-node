const fs = require('fs');
const Barcode = require('aspose-barcode-cloud-node');

const config = new Barcode.Configuration(
    'App SID from https://dashboard.aspose.cloud/#/apps',
    'App Key from https://dashboard.aspose.cloud/#/apps'
);

async function generate(api) {
    const oneBarcode = await api.getBarcodeGenerate(
        Barcode.EncodeBarcodeType.Pdf417,
        'Aspose.BarCode for Cloud Sample'
    );

    fs.writeFileSync('out.png', oneBarcode.body);
    console.log('Saved to out.png');
}

const api = new Barcode.BarcodeApi(config);
generate(api).catch(err => console.error(err));
