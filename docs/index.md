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
 **imageFormat** | [**BarcodeImageFormat**](models.md#)| Barcode output image format.  Default value: png | [optional]
 **textLocation** | [**CodeLocation**](models.md#)| Specify the displaying Text Location, set to CodeLocation.None to hide CodeText.  Default value: CodeLocation.Below. | [optional]
 **foregroundColor** | **string**| Specify the displaying bars and content Color.  Value: Color name from https://reference.aspose.com/drawing/net/system.drawing/color/ or ARGB value started with #.  For example: AliceBlue or #FF000000  Default value: Black. | [optional]
 **backgroundColor** | **string**| Background color of the barcode image.  Value: Color name from https://reference.aspose.com/drawing/net/system.drawing/color/ or ARGB value started with #.  For example: AliceBlue or #FF000000  Default value: White. | [optional]
 **units** | [**GraphicsUnit**](models.md#)| Common Units for all measuring in query. Default units: pixel. | [optional]
 **resolution** | **number**| Resolution of the BarCode image.  One value for both dimensions.  Default value: 96 dpi.  Decimal separator is dot. | [optional]
 **imageHeight** | **number**| Height of the barcode image in given units. Default units: pixel.  Decimal separator is dot. | [optional]
 **imageWidth** | **number**| Width of the barcode image in given units. Default units: pixel.  Decimal separator is dot. | [optional]
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

### barcodeGenerateMultipartPost

Generate barcode using POST request with parameters in multipart form.

```ts
barcodeGenerateMultipartPost(barcodeType: EncodeBarcodeType, data: string): Buffer;
```

#### GenerateApi.barcodeGenerateMultipartPost parameters

Name | Type | Description  | Notes
---- | ---- | ------------ | -----
 **barcodeType** | [**EncodeBarcodeType**](models.md#EncodeBarcodeType)|  |
 **data** | **string**| String represents data to encode |
 **dataType** | [**EncodeDataType**](models.md#EncodeDataType)|  | [optional]
 **imageFormat** | [**BarcodeImageFormat**](models.md#BarcodeImageFormat)|  | [optional]
 **textLocation** | [**CodeLocation**](models.md#CodeLocation)|  | [optional]
 **foregroundColor** | **string**| Specify the displaying bars and content Color.  Value: Color name from https://reference.aspose.com/drawing/net/system.drawing/color/ or ARGB value started with #.  For example: AliceBlue or #FF000000  Default value: Black. | [optional]
 **backgroundColor** | **string**| Background color of the barcode image.  Value: Color name from https://reference.aspose.com/drawing/net/system.drawing/color/ or ARGB value started with #.  For example: AliceBlue or #FF000000  Default value: White. | [optional]
 **units** | [**GraphicsUnit**](models.md#GraphicsUnit)|  | [optional]
 **resolution** | **number**| Resolution of the BarCode image.  One value for both dimensions.  Default value: 96 dpi.  Decimal separator is dot. | [optional]
 **imageHeight** | **number**| Height of the barcode image in given units. Default units: pixel.  Decimal separator is dot. | [optional]
 **imageWidth** | **number**| Width of the barcode image in given units. Default units: pixel.  Decimal separator is dot. | [optional]
 **rotationAngle** | **number**| BarCode image rotation angle, measured in degree, e.g. RotationAngle &#x3D; 0 or RotationAngle &#x3D; 360 means no rotation.  If RotationAngle NOT equal to 90, 180, 270 or 0, it may increase the difficulty for the scanner to read the image.  Default value: 0. | [optional]

#### GenerateApi.barcodeGenerateMultipartPost return type

Buffer

---

## class RecognizeApi

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

### barcodeRecognizeGet

Recognize barcode from file on server using GET requests with parameters in route and query string.

```ts
barcodeRecognizeGet(barcodeType: DecodeBarcodeType, fileUrl: string): BarcodeResponseList;
```

#### RecognizeApi.barcodeRecognizeGet parameters

Name | Type | Description  | Notes
---- | ---- | ------------ | -----
 **barcodeType** | [**DecodeBarcodeType**](models.md#)| Type of barcode to recognize |
 **fileUrl** | **string**| Url to barcode image |
 **recognitionMode** | [**RecognitionMode**](models.md#)| Recognition mode | [optional]
 **recognitionImageKind** | [**RecognitionImageKind**](models.md#)| Image kind for recognition | [optional]

#### RecognizeApi.barcodeRecognizeGet return type

[**BarcodeResponseList**](models.md#BarcodeResponseList)

---

### barcodeRecognizeMultipartPost

Recognize barcode from file in request body using POST requests with parameters in multipart form.

```ts
barcodeRecognizeMultipartPost(barcodeType: DecodeBarcodeType, file: RequestFile): BarcodeResponseList;
```

#### RecognizeApi.barcodeRecognizeMultipartPost parameters

Name | Type | Description  | Notes
---- | ---- | ------------ | -----
 **barcodeType** | [**DecodeBarcodeType**](models.md#DecodeBarcodeType)|  |
 **file** | **RequestFile****RequestFile**| Barcode image file |
 **recognitionMode** | [**RecognitionMode**](models.md#RecognitionMode)|  | [optional]
 **recognitionImageKind** | [**RecognitionImageKind**](models.md#RecognitionImageKind)|  | [optional]

#### RecognizeApi.barcodeRecognizeMultipartPost return type

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

### barcodeScanMultipartPost

Scan barcode from file in request body using POST requests with parameter in multipart form.

```ts
barcodeScanMultipartPost(file: RequestFile): BarcodeResponseList;
```

#### ScanApi.barcodeScanMultipartPost parameters

Name | Type | Description  | Notes
---- | ---- | ------------ | -----
 **file** | **RequestFile****RequestFile**| Barcode image file |

#### ScanApi.barcodeScanMultipartPost return type

[**BarcodeResponseList**](models.md#BarcodeResponseList)

---

