# Aspose.BarCode Cloud SDK for Node.js

+ API version: 3.0
+ Package version: 20.5.0

Aspose.BarCode for Cloud is a REST API for Linear, 2D and postal barcode generation and recognition in the cloud. API recognizes and generates barcode images in a variety of formats. Barcode REST API allows to specify barcode image attributes like image width, height, border style and output image format in order to customize the generation process. Developers can also specify the barcode type and text attributes such as text location and font styles in order to suit the application requirements.

This repository contains Aspose.BarCode Cloud SDK for Node.js source code.

To use these SDKs, you will need App SID and App Key which can be looked up at [Aspose Cloud Dashboard](https://dashboard.aspose.cloud/#/apps) (free registration in Aspose Cloud is required for this).

## How to use the SDK

The complete source code is available in this repository folder. You can either directly use it in your project via source code or get [nmpjs distribution](https://www.npmjs.com/package/aspose-barcode-cloud-node) (recommended).

### Install Aspose.BarCode for Cloud via NPM

From the command line:

```sh
npm install aspose-barcode-cloud-node --save
```

### Sample usage

The examples below show how your application have to generate PDF417 barcode and save it on local storage:

```js
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
```

Every method returns a chainable promise.

## Licensing

All Aspose.BarCode for Cloud SDKs, helper scripts and templates are licensed under [MIT License](LICENSE).

## Resources

+ [**Website**](https://www.aspose.cloud)
+ [**Product Home**](https://products.aspose.cloud/barcode/cloud)
+ [**Documentation**](https://docs.aspose.cloud/display/barcodecloud/Home)
+ [**Free Support Forum**](https://forum.aspose.cloud/c/barcode)
+ [**Paid Support Helpdesk**](https://helpdesk.aspose.cloud/)
+ [**Blog**](https://blog.aspose.cloud/category/aspose-products/aspose-barcode-product-family/)
