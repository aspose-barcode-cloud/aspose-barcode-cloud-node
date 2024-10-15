# Documentation for API Endpoints

## class GenerateApi

### barcodeGenerateBarcodeTypeGet

Generate barcode using GET request with parameters in route and query string.

```ts
barcodeGenerateBarcodeTypeGet(barcodeType: EncodeBarcodeType, data: string): Buffer;
```

#### GenerateApi.barcodeGenerateBarcodeTypeGet parameters

Name | Type | Description  | Notes
---- | ---- | ------------ | -----
 **barcodeType** | [**EncodeBarcodeType**](models.md#)| Type of barcode to generate. |
 **data** | **string**| String represents data to encode |
 **dataType** | [**EncodeDataType**](models.md#)| Type of data to encode.  Default value:  EncodeDataType.StringData. | [optional]
 **imageFormat** | [**AvailableBarCodeImageFormat**](models.md#)| Barcode output image format.  Default value: png | [optional]
 **twoDDisplayText** | **string**| Text that will be displayed instead of codetext in 2D barcodes.  Used for: Aztec, Pdf417, DataMatrix, QR, MaxiCode, DotCode | [optional]
 **textLocation** | [**CodeLocation**](models.md#)| Specify the displaying Text Location, set to CodeLocation.None to hide CodeText.  Default value: CodeLocation.Below. | [optional]
 **textAlignment** | [**TextAlignment**](models.md#)| Text alignment.  Default value: TextAligment.Left | [optional]
 **foregroundColor** | **string**| Specify the displaying bars and content Color.   Value: Color name from https://reference.aspose.com/drawing/net/system.drawing/color/ or ARGB value started with #.   For example: AliceBlue or #FF000000  Default value: Black. | [optional]
 **backgroundColor** | **string**| Background color of the barcode image.  Value: Color name from https://reference.aspose.com/drawing/net/system.drawing/color/ or ARGB value started with #.   For example: AliceBlue or #FF000000  Default value: White. | [optional]
 **units** | [**AvailableGraphicsUnit**](models.md#)| Common Units for all measuring in query. Default units: pixel. | [optional]
 **resolution** | **number**| Resolution of the BarCode image.  One value for both dimensions.  Default value: 96 dpi. | [optional]
 **imageHeight** | **number**| Height of the barcode image in given units. Default units: pixel. | [optional]
 **imageWidth** | **number**| Width of the barcode image in given units. Default units: pixel. | [optional]
 **rotationAngle** | **number**| BarCode image rotation angle, measured in degree, e.g. RotationAngle &#x3D; 0 or RotationAngle &#x3D; 360 means no rotation.  If RotationAngle NOT equal to 90, 180, 270 or 0, it may increase the difficulty for the scanner to read the image.  Default value: 0. | [optional]

#### GenerateApi.barcodeGenerateBarcodeTypeGet return type

Buffer

---

### barcodeGenerateBodyPost

Generate barcode using POST request with parameters in body in json or xml format.

```ts
barcodeGenerateBodyPost(generateParams: GenerateParams): Buffer;
```

#### GenerateApi.barcodeGenerateBodyPost parameters

Name | Type | Description  | Notes
---- | ---- | ------------ | -----
 **generateParams** | [**GenerateParams**](models.md#GenerateParams)| Parameters of generation |

#### GenerateApi.barcodeGenerateBodyPost return type

Buffer

---

### barcodeGenerateFormPost

Generate barcode using POST request with parameters in url ecncoded form.

```ts
barcodeGenerateFormPost(barcodeType: EncodeBarcodeType, data: string): Buffer;
```

#### GenerateApi.barcodeGenerateFormPost parameters

Name | Type | Description  | Notes
---- | ---- | ------------ | -----
 **barcodeType** | [**EncodeBarcodeType**](models.md#EncodeBarcodeType)|  |
 **data** | **string**| String represents data to encode |
 **dataType** | [**EncodeDataType**](models.md#EncodeDataType)|  | [optional]
 **imageFormat** | [**AvailableBarCodeImageFormat**](models.md#AvailableBarCodeImageFormat)|  | [optional]
 **twoDDisplayText** | **string**| Text that will be displayed instead of codetext in 2D barcodes.  Used for: Aztec, Pdf417, DataMatrix, QR, MaxiCode, DotCode | [optional]
 **textLocation** | [**CodeLocation**](models.md#CodeLocation)|  | [optional]
 **textAlignment** | [**TextAlignment**](models.md#TextAlignment)|  | [optional]
 **foregroundColor** | **string**| Specify the displaying bars and content Color.   Value: Color name from https://reference.aspose.com/drawing/net/system.drawing/color/ or ARGB value started with #.   For example: AliceBlue or #FF000000  Default value: Black. | [optional]
 **backgroundColor** | **string**| Background color of the barcode image.  Value: Color name from https://reference.aspose.com/drawing/net/system.drawing/color/ or ARGB value started with #.   For example: AliceBlue or #FF000000  Default value: White. | [optional]
 **units** | [**AvailableGraphicsUnit**](models.md#AvailableGraphicsUnit)|  | [optional]
 **resolution** | **number**| Resolution of the BarCode image.  One value for both dimensions.  Default value: 96 dpi. | [optional]
 **imageHeight** | **number**| Height of the barcode image in given units. Default units: pixel. | [optional]
 **imageWidth** | **number**| Width of the barcode image in given units. Default units: pixel. | [optional]
 **rotationAngle** | **number**| BarCode image rotation angle, measured in degree, e.g. RotationAngle &#x3D; 0 or RotationAngle &#x3D; 360 means no rotation.  If RotationAngle NOT equal to 90, 180, 270 or 0, it may increase the difficulty for the scanner to read the image.  Default value: 0. | [optional]

#### GenerateApi.barcodeGenerateFormPost return type

Buffer

---

## class RecognizeApi

### barcodeRecognizeBarcodeTypeGet

Recognize barcode from file on server using GET requests with parameters in route and query string.

```ts
barcodeRecognizeBarcodeTypeGet(barcodeType: DecodeBarcodeType, fileUrl: string): BarcodeResponseList;
```

#### RecognizeApi.barcodeRecognizeBarcodeTypeGet parameters

Name | Type | Description  | Notes
---- | ---- | ------------ | -----
 **barcodeType** | [**DecodeBarcodeType**](models.md#)| Type of barcode to recognize |
 **fileUrl** | **string**| Url to barcode image |
 **recognitionMode** | [**RecognitionMode**](models.md#)| Recognition mode | [optional]
 **imageKind** | [**RecognitionImageKind**](models.md#)| Image kind | [optional]

#### RecognizeApi.barcodeRecognizeBarcodeTypeGet return type

[**BarcodeResponseList**](models.md#BarcodeResponseList)

---

### barcodeRecognizeBodyPost

Recognize barcode from file in request body using POST requests with parameters in body in json or xml format.

```ts
barcodeRecognizeBodyPost(recognizeBase64Request: RecognizeBase64Request): BarcodeResponseList;
```

#### RecognizeApi.barcodeRecognizeBodyPost parameters

Name | Type | Description  | Notes
---- | ---- | ------------ | -----
 **recognizeBase64Request** | [**RecognizeBase64Request**](models.md#RecognizeBase64Request)| Barcode recognition request |

#### RecognizeApi.barcodeRecognizeBodyPost return type

[**BarcodeResponseList**](models.md#BarcodeResponseList)

---

### barcodeRecognizeFormPost

Recognize barcode from file in request body using POST requests with parameters in multipart form.

```ts
barcodeRecognizeFormPost(barcodeType: DecodeBarcodeType, file: RequestFile): BarcodeResponseList;
```

#### RecognizeApi.barcodeRecognizeFormPost parameters

Name | Type | Description  | Notes
---- | ---- | ------------ | -----
 **barcodeType** | [**DecodeBarcodeType**](models.md#DecodeBarcodeType)|  |
 **file** | **RequestFile****RequestFile**| Barcode image file |
 **recognitionMode** | [**RecognitionMode**](models.md#RecognitionMode)|  | [optional]
 **imageKind** | [**RecognitionImageKind**](models.md#RecognitionImageKind)|  | [optional]

#### RecognizeApi.barcodeRecognizeFormPost return type

[**BarcodeResponseList**](models.md#BarcodeResponseList)

---

## class ScanApi

### barcodeScanBodyPost

Scan barcode from file in request body using POST requests with parameter in body in json or xml format.

```ts
barcodeScanBodyPost(scanBase64Request: ScanBase64Request): BarcodeResponseList;
```

#### ScanApi.barcodeScanBodyPost parameters

Name | Type | Description  | Notes
---- | ---- | ------------ | -----
 **scanBase64Request** | [**ScanBase64Request**](models.md#ScanBase64Request)| Barcode scan request |

#### ScanApi.barcodeScanBodyPost return type

[**BarcodeResponseList**](models.md#BarcodeResponseList)

---

### barcodeScanFormPost

Scan barcode from file in request body using POST requests with parameter in multipart form.

```ts
barcodeScanFormPost(file: RequestFile): BarcodeResponseList;
```

#### ScanApi.barcodeScanFormPost parameters

Name | Type | Description  | Notes
---- | ---- | ------------ | -----
 **file** | **RequestFile****RequestFile**| Barcode image file |

#### ScanApi.barcodeScanFormPost return type

[**BarcodeResponseList**](models.md#BarcodeResponseList)

---

### barcodeScanGet

Scan barcode from file on server using GET requests with parameter in query string.

```ts
barcodeScanGet(fileUrl: string): BarcodeResponseList;
```

#### ScanApi.barcodeScanGet parameters

Name | Type | Description  | Notes
---- | ---- | ------------ | -----
 **fileUrl** | **string**| Url to barcode image |

#### ScanApi.barcodeScanGet return type

[**BarcodeResponseList**](models.md#BarcodeResponseList)

---

