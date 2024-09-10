# Aspose.BarCode Cloud SDK for Node.js

[![License](https://img.shields.io/github/license/aspose-barcode-cloud/aspose-barcode-cloud-node)](LICENSE)
[![Node.js CI](https://github.com/aspose-barcode-cloud/aspose-barcode-cloud-node/actions/workflows/node.js.yml/badge.svg?branch=main)](https://github.com/aspose-barcode-cloud/aspose-barcode-cloud-node/actions/workflows/node.js.yml)
[![npm](https://img.shields.io/npm/v/aspose-barcode-cloud-node)](https://www.npmjs.com/package/aspose-barcode-cloud-node)

+ API version: 4.0
+ Package version: 24.7.0

## Demo applications

[Scan QR](https://products.aspose.app/barcode/scanqr) | [Generate Barcode](https://products.aspose.app/barcode/generate) | [Recognize Barcode](https://products.aspose.app/barcode/recognize)
:---: | :---: | :---:
[![ScanQR](https://products.aspose.app/barcode/scanqr/img/aspose_scanqr-app-48.png)](https://products.aspose.app/barcode/scanqr) | [![Generate](https://products.aspose.app/barcode/generate/img/aspose_generate-app-48.png)](https://products.aspose.app/barcode/generate) | [![Recognize](https://products.aspose.app/barcode/recognize/img/aspose_recognize-app-48.png)](https://products.aspose.app/barcode/recognize)
[**Generate Wi-Fi QR**](https://products.aspose.app/barcode/wifi-qr) | [**Embed Barcode**](https://products.aspose.app/barcode/embed) | [**Scan Barcode**](https://products.aspose.app/barcode/scan)
[![Wi-FiQR](https://products.aspose.app/barcode/embed/img/aspose_wifi-qr-app-48.png)](https://products.aspose.app/barcode/wifi-qr) | [![Embed](https://products.aspose.app/barcode/embed/img/aspose_embed-app-48.png)](https://products.aspose.app/barcode/embed) | [![Scan](https://products.aspose.app/barcode/embed/img/aspose_scan-app-48.png)](https://products.aspose.app/barcode/scan)

[Aspose.BarCode for Cloud](https://products.aspose.cloud/barcode/) is a REST API for Linear, 2D and postal barcode generation and recognition in the cloud. API recognizes and generates barcode images in a variety of formats. Barcode REST API allows to specify barcode image attributes like image width, height, border style and output image format in order to customize the generation process. Developers can also specify the barcode type and text attributes such as text location and font styles in order to suit the application requirements.

This repository contains Aspose.BarCode Cloud SDK for Node.js source code.

To use these SDKs, you will need Client Id and Client Secret which can be looked up at [Aspose Cloud Dashboard](https://dashboard.aspose.cloud/applications) (free registration in Aspose Cloud is required for this).

## How to use the SDK

The complete source code is available in this repository folder. You can either directly use it in your project via source code or get [nmpjs distribution](https://www.npmjs.com/package/aspose-barcode-cloud-node) (recommended).

### Install Aspose.BarCode for Cloud via NPM

From the command line:

```sh
npm install aspose-barcode-cloud-node --save
```

### Sample usage

The examples below show how your application have to generate QR code and save it on local storage:

```js
const fs = require('fs');
const Barcode = require('aspose-barcode-cloud-node');

const config = new Barcode.Configuration(
    'Client Id from https://dashboard.aspose.cloud/applications',
    'Client Secret from https://dashboard.aspose.cloud/applications',
    null,
    process.env['TEST_CONFIGURATION_ACCESS_TOKEN']
);

async function generateBarcode(api) {
    const request = new Barcode.GetBarcodeGenerateRequest(
        Barcode.EncodeBarcodeType.QR,
        'Aspose.BarCode for Cloud Sample');
        request.textLocation = Barcode.CodeLocation.None;

    const oneBarcode = await api.getBarcodeGenerate(request);

    const fileName = 'QR.png'
    fs.writeFileSync(fileName, oneBarcode.body);

    return fileName;
}

async function scanBarcode(api, fileName) {
    const request = new Barcode.ScanBarcodeRequest(fs.readFileSync(fileName));
    request.decodeTypes = [Barcode.DecodeBarcodeType.QR];

    const result = await api.scanBarcode(request);

    return result.body.barcodes;
}

const api = new Barcode.BarcodeApi(config);

console.log('Generating barcode...');
generateBarcode(api)
    .then(fileName => {
        console.log('Barcode saved to ' + fileName);

        console.log('Trying to recognize barcode...');
        scanBarcode(api, fileName)
            .then(barcodes => {
                console.log('Recognized barcodes are:');
                console.log(JSON.stringify(barcodes, null, 2));
            });
    })
    .catch(err => {
        console.error(JSON.stringify(err, null, 2));
        process.exitCode = 1;
    });

```

Every method returns a chainable promise.

## Licensing

All Aspose.BarCode for Cloud SDKs, helper scripts and templates are licensed under [MIT License](LICENSE).

## Resources

+ [**Website**](https://www.aspose.cloud)
+ [**Product Home**](https://products.aspose.cloud/barcode/)
+ [**Documentation**](https://docs.aspose.cloud/barcode/)
+ [**Free Support Forum**](https://forum.aspose.cloud/c/barcode)
+ [**Paid Support Helpdesk**](https://helpdesk.aspose.cloud/)
+ [**Blog**](https://blog.aspose.cloud/categories/aspose.barcode-cloud-product-family/)

## Documentation for API Endpoints

All URIs are relative to *<https://barcode.qa.aspose.cloud/v4.0/>*

Class | Method | HTTP request | Description
----- | ------ | ------------ | -----------
GenerateApi | [**barcodeGenerateBarcodeTypeGet**](docs/index.md#barcodegeneratebarcodetypeget) | **GET** /barcode/generate/{barcodeType} | Generate barcode using GET request with parameters in route and query string.
GenerateApi | [**barcodeGenerateBodyPost**](docs/index.md#barcodegeneratebodypost) | **POST** /barcode/generate-body | Generate barcode using POST request with parameters in body in json or xml format.
GenerateApi | [**barcodeGenerateFormPost**](docs/index.md#barcodegenerateformpost) | **POST** /barcode/generate-form | Generate barcode using POST request with parameters in url ecncoded form.
RecognizeApi | [**barcodeRecognizeBarcodeTypeGet**](docs/index.md#barcoderecognizebarcodetypeget) | **GET** /barcode/recognize/{barcodeType} | Recognize barcode from file on server using GET requests with parameters in route and query string.
RecognizeApi | [**barcodeRecognizeBodyPost**](docs/index.md#barcoderecognizebodypost) | **POST** /barcode/recognize-body | Recognize barcode from file in request body using POST requests with parameters in body in json or xml format.
RecognizeApi | [**barcodeRecognizeFormPost**](docs/index.md#barcoderecognizeformpost) | **POST** /barcode/recognize-form | Recognize barcode from file in request body using POST requests with parameters in multipart form.
ScanApi | [**barcodeScanBodyPost**](docs/index.md#barcodescanbodypost) | **POST** /barcode/scan-body | Scan barcode from file in request body using POST requests with parameter in body in json or xml format.
ScanApi | [**barcodeScanFormPost**](docs/index.md#barcodescanformpost) | **POST** /barcode/scan-form | Scan barcode from file in request body using POST requests with parameter in multipart form.
ScanApi | [**barcodeScanGet**](docs/index.md#barcodescanget) | **GET** /barcode/scan | Scan barcode from file on server using GET requests with parameter in query string.

