# Aspose.BarCode Cloud SDK for Node.js

[![License](https://img.shields.io/github/license/aspose-barcode-cloud/aspose-barcode-cloud-node)](LICENSE)
[![Node.js CI](https://github.com/aspose-barcode-cloud/aspose-barcode-cloud-node/actions/workflows/node.js.yml/badge.svg)](https://github.com/aspose-barcode-cloud/aspose-barcode-cloud-node/actions/workflows/node.js.yml)
[![npm](https://img.shields.io/npm/v/aspose-barcode-cloud-node)](https://www.npmjs.com/package/aspose-barcode-cloud-node)

+ API version: 3.0
+ Package version: 23.5.0

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
    const oneBarcode = await api.getBarcodeGenerate(request);

    const fileName = 'QR.png'
    fs.writeFileSync(fileName, oneBarcode.body);

    return fileName;
}

async function recognizeBarcode(api, fileName) {
    const request = new Barcode.PostBarcodeRecognizeFromUrlOrContentRequest();
    request.image = fs.readFileSync(fileName);
    request.type = Barcode.DecodeBarcodeType.QR;
    request.preset = Barcode.PresetType.HighPerformance;
    request.fastScanOnly = true;

    const result = await api.postBarcodeRecognizeFromUrlOrContent(request);

    return result.body.barcodes;
}

const api = new Barcode.BarcodeApi(config);

console.log('Generating barcode...');
generateBarcode(api)
    .then(fileName => {
        console.log('Barcode saved to ' + fileName);

        console.log('Trying to recognize barcode...');
        recognizeBarcode(api, fileName)
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

All URIs are relative to *<https://api.aspose.cloud/v3.0/>*

Class | Method | HTTP request | Description
----- | ------ | ------------ | -----------
BarcodeApi | [**getBarcodeGenerate**](docs/index.md#getbarcodegenerate) | **GET** /barcode/generate | Generate barcode.
BarcodeApi | [**getBarcodeRecognize**](docs/index.md#getbarcoderecognize) | **GET** /barcode/{name}/recognize | Recognize barcode from a file on server.
BarcodeApi | [**postBarcodeRecognizeFromUrlOrContent**](docs/index.md#postbarcoderecognizefromurlorcontent) | **POST** /barcode/recognize | Recognize barcode from an url or from request body. Request body can contain raw data bytes of the image with content-type \&quot;application/octet-stream\&quot;. An image can also be passed as a form field.
BarcodeApi | [**postGenerateMultiple**](docs/index.md#postgeneratemultiple) | **POST** /barcode/generateMultiple | Generate multiple barcodes and return in response stream
BarcodeApi | [**putBarcodeGenerateFile**](docs/index.md#putbarcodegeneratefile) | **PUT** /barcode/{name}/generate | Generate barcode and save on server (from query params or from file with json or xml content)
BarcodeApi | [**putBarcodeRecognizeFromBody**](docs/index.md#putbarcoderecognizefrombody) | **PUT** /barcode/{name}/recognize | Recognition of a barcode from file on server with parameters in body.
BarcodeApi | [**putGenerateMultiple**](docs/index.md#putgeneratemultiple) | **PUT** /barcode/{name}/generateMultiple | Generate image with multiple barcodes and put new file on server
FileApi | [**copyFile**](docs/index.md#copyfile) | **PUT** /barcode/storage/file/copy/{srcPath} | Copy file
FileApi | [**deleteFile**](docs/index.md#deletefile) | **DELETE** /barcode/storage/file/{path} | Delete file
FileApi | [**downloadFile**](docs/index.md#downloadfile) | **GET** /barcode/storage/file/{path} | Download file
FileApi | [**moveFile**](docs/index.md#movefile) | **PUT** /barcode/storage/file/move/{srcPath} | Move file
FileApi | [**uploadFile**](docs/index.md#uploadfile) | **PUT** /barcode/storage/file/{path} | Upload file
FolderApi | [**copyFolder**](docs/index.md#copyfolder) | **PUT** /barcode/storage/folder/copy/{srcPath} | Copy folder
FolderApi | [**createFolder**](docs/index.md#createfolder) | **PUT** /barcode/storage/folder/{path} | Create the folder
FolderApi | [**deleteFolder**](docs/index.md#deletefolder) | **DELETE** /barcode/storage/folder/{path} | Delete folder
FolderApi | [**getFilesList**](docs/index.md#getfileslist) | **GET** /barcode/storage/folder/{path} | Get all files and folders within a folder
FolderApi | [**moveFolder**](docs/index.md#movefolder) | **PUT** /barcode/storage/folder/move/{srcPath} | Move folder
StorageApi | [**getDiscUsage**](docs/index.md#getdiscusage) | **GET** /barcode/storage/disc | Get disc usage
StorageApi | [**getFileVersions**](docs/index.md#getfileversions) | **GET** /barcode/storage/version/{path} | Get file versions
StorageApi | [**objectExists**](docs/index.md#objectexists) | **GET** /barcode/storage/exist/{path} | Check if file or folder exists
StorageApi | [**storageExists**](docs/index.md#storageexists) | **GET** /barcode/storage/{storageName}/exist | Check if storage exists
