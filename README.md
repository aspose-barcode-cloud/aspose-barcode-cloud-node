# Aspose.BarCode Cloud SDK for Node.js

+ API version: 3.0
+ Package version: 20.8.0

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

## Documentation for API Endpoints

All URIs are relative to *<https://api.aspose.cloud/v3.0/>*

Class | Method | HTTP request | Description
----- | ------ | ------------ | -----------
BarcodeApi | [**getBarcodeGenerate**](docs/index.md#getbarcodegenerate) | **GET** /barcode/generate | Generate barcode.
BarcodeApi | [**getBarcodeRecognize**](docs/index.md#getbarcoderecognize) | **GET** /barcode/{name}/recognize | Recognize barcode from a file on server.
BarcodeApi | [**postBarcodeRecognizeFromUrlOrContent**](docs/index.md#postbarcoderecognizefromurlorcontent) | **POST** /barcode/recognize | Recognize barcode from an url or from request body. Request body can contain raw data bytes of the image or encoded with base64.
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
