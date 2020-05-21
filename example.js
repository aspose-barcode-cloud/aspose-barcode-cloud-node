const fs = require('fs');

const Barcode = require('aspose-barcode-cloud-node');

const config = new Barcode.Configuration(
    'App SID from https://dashboard.aspose.cloud/#/apps',
    'App Key from https://dashboard.aspose.cloud/#/apps'
);

async function generate(api) {
    //1. simple barcode generation
    const oneBarcode = await api.getBarcodeGenerate(Barcode.EncodeBarcodeType.Pdf417, 'Aspose.BarCode for Cloud Sample',
        null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null,
        'png'
    );

    fs.writeFileSync('../testdata/out_1.png', oneBarcode.body);
    console.log('Saved to ../testdata/out_1.png');
}

const api = new Barcode.BarcodeApi(config);
generate(api).then(() => console.info('Done')).catch(err => console.error(err));
