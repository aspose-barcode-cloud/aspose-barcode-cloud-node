# Documentation for API Endpoints

## class GenerateApi

### generate

Generate barcode using GET request with parameters in route and query string.

```ts
generate(barcodeType: EncodeBarcodeType, data: string): Buffer;
```

#### GenerateApi.generate parameters

Name | Type | Description  | Notes
---- | ---- | ------------ | -----
 **barcodeType** | [**EncodeBarcodeType**](models.md#)| Type of barcode to generate. |
 **data** | **string**| String represents data to encode |
 **dataType** | [**EncodeDataType**](models.md#)| Type of data to encode. Default value: StringData. | [optional]
 **imageFormat** | [**BarcodeImageFormat**](models.md#)| Barcode output image format. Default value: png | [optional]
 **textLocation** | [**CodeLocation**](models.md#)| Specify the displaying Text Location, set to CodeLocation.None to hide CodeText. Default value: Depends on BarcodeType. CodeLocation.Below for 1D Barcodes. CodeLocation.None for 2D Barcodes. | [optional]
 **foregroundColor** | **string**| Specify the displaying bars and content Color. Value: Color name from https://reference.aspose.com/drawing/net/system.drawing/color/ or ARGB value started with #. For example: AliceBlue or #FF000000 Default value: Black. | [optional] [default to '&#39;Black&#39;']
 **backgroundColor** | **string**| Background color of the barcode image. Value: Color name from https://reference.aspose.com/drawing/net/system.drawing/color/ or ARGB value started with #. For example: AliceBlue or #FF000000 Default value: White. | [optional] [default to '&#39;White&#39;']
 **units** | [**GraphicsUnit**](models.md#)| Common Units for all measuring in query. Default units: pixel. | [optional]
 **resolution** | **number**| Resolution of the BarCode image. One value for both dimensions. Default value: 96 dpi. Decimal separator is dot. | [optional]
 **imageHeight** | **number**| Height of the barcode image in given units. Default units: pixel. Decimal separator is dot. | [optional]
 **imageWidth** | **number**| Width of the barcode image in given units. Default units: pixel. Decimal separator is dot. | [optional]
 **rotationAngle** | **number**| BarCode image rotation angle, measured in degree, e.g. RotationAngle &#x3D; 0 or RotationAngle &#x3D; 360 means no rotation. If RotationAngle NOT equal to 90, 180, 270 or 0, it may increase the difficulty for the scanner to read the image. Default value: 0. | [optional]

#### GenerateApi.generate return type

Buffer

---

### generateBody

Generate barcode using POST request with parameters in body in json or xml format.

```ts
generateBody(generateParams: GenerateParams): Buffer;
```

#### GenerateApi.generateBody parameters

Name | Type | Description  | Notes
---- | ---- | ------------ | -----
 **generateParams** | [**GenerateParams**](models.md#GenerateParams)| Parameters of generation |

#### GenerateApi.generateBody return type

Buffer

---

### generateMultipart

Generate barcode using POST request with parameters in multipart form.

```ts
generateMultipart(barcodeType: EncodeBarcodeType, data: string): Buffer;
```

#### GenerateApi.generateMultipart parameters

Name | Type | Description  | Notes
---- | ---- | ------------ | -----
 **barcodeType** | [**EncodeBarcodeType**](models.md#EncodeBarcodeType)|  |
 **data** | **string**| String represents data to encode |
 **dataType** | [**EncodeDataType**](models.md#EncodeDataType)|  | [optional]
 **imageFormat** | [**BarcodeImageFormat**](models.md#BarcodeImageFormat)|  | [optional]
 **textLocation** | [**CodeLocation**](models.md#CodeLocation)|  | [optional]
 **foregroundColor** | **string**| Specify the displaying bars and content Color. Value: Color name from https://reference.aspose.com/drawing/net/system.drawing/color/ or ARGB value started with #. For example: AliceBlue or #FF000000 Default value: Black. | [optional] [default to '&#39;Black&#39;']
 **backgroundColor** | **string**| Background color of the barcode image. Value: Color name from https://reference.aspose.com/drawing/net/system.drawing/color/ or ARGB value started with #. For example: AliceBlue or #FF000000 Default value: White. | [optional] [default to '&#39;White&#39;']
 **units** | [**GraphicsUnit**](models.md#GraphicsUnit)|  | [optional]
 **resolution** | **number**| Resolution of the BarCode image. One value for both dimensions. Default value: 96 dpi. Decimal separator is dot. | [optional]
 **imageHeight** | **number**| Height of the barcode image in given units. Default units: pixel. Decimal separator is dot. | [optional]
 **imageWidth** | **number**| Width of the barcode image in given units. Default units: pixel. Decimal separator is dot. | [optional]
 **rotationAngle** | **number**| BarCode image rotation angle, measured in degree, e.g. RotationAngle &#x3D; 0 or RotationAngle &#x3D; 360 means no rotation. If RotationAngle NOT equal to 90, 180, 270 or 0, it may increase the difficulty for the scanner to read the image. Default value: 0. | [optional]

#### GenerateApi.generateMultipart return type

Buffer

---

## class RecognizeApi

### recognize

Recognize barcode from file on server in the Internet using GET requests with parameter in query string. For recognizing files from your hard drive use `recognize-body` or `recognize-multipart` endpoints instead.

```ts
recognize(barcodeType: DecodeBarcodeType, fileUrl: string): BarcodeResponseList;
```

#### RecognizeApi.recognize parameters

Name | Type | Description  | Notes
---- | ---- | ------------ | -----
 **barcodeType** | [**DecodeBarcodeType**](models.md#)| Type of barcode to recognize |
 **fileUrl** | **string**| Url to barcode image |
 **recognitionMode** | [**RecognitionMode**](models.md#)| Recognition mode | [optional]
 **recognitionImageKind** | [**RecognitionImageKind**](models.md#)| Image kind for recognition | [optional]

#### RecognizeApi.recognize return type

[**BarcodeResponseList**](models.md#BarcodeResponseList)

---

### recognizeBase64

Recognize barcode from file in request body using POST requests with parameters in body in json or xml format.

```ts
recognizeBase64(recognizeBase64Request: RecognizeBase64Request): BarcodeResponseList;
```

#### RecognizeApi.recognizeBase64 parameters

Name | Type | Description  | Notes
---- | ---- | ------------ | -----
 **recognizeBase64Request** | [**RecognizeBase64Request**](models.md#RecognizeBase64Request)| Barcode recognition request |

#### RecognizeApi.recognizeBase64 return type

[**BarcodeResponseList**](models.md#BarcodeResponseList)

---

### recognizeMultipart

Recognize barcode from file in request body using POST requests with parameters in multipart form.

```ts
recognizeMultipart(barcodeType: DecodeBarcodeType, file: RequestFile): BarcodeResponseList;
```

#### RecognizeApi.recognizeMultipart parameters

Name | Type | Description  | Notes
---- | ---- | ------------ | -----
 **barcodeType** | [**DecodeBarcodeType**](models.md#DecodeBarcodeType)|  |
 **file** | **RequestFile****RequestFile**| Barcode image file |
 **recognitionMode** | [**RecognitionMode**](models.md#RecognitionMode)|  | [optional]
 **recognitionImageKind** | [**RecognitionImageKind**](models.md#RecognitionImageKind)|  | [optional]

#### RecognizeApi.recognizeMultipart return type

[**BarcodeResponseList**](models.md#BarcodeResponseList)

---

## class ScanApi

### scan

Scan barcode from file on server in the Internet using GET requests with parameter in query string. For scaning files from your hard drive use `scan-body` or `scan-multipart` endpoints instead.

```ts
scan(fileUrl: string): BarcodeResponseList;
```

#### ScanApi.scan parameters

Name | Type | Description  | Notes
---- | ---- | ------------ | -----
 **fileUrl** | **string**| Url to barcode image |

#### ScanApi.scan return type

[**BarcodeResponseList**](models.md#BarcodeResponseList)

---

### scanBase64

Scan barcode from file in request body using POST requests with parameter in body in json or xml format.

```ts
scanBase64(scanBase64Request: ScanBase64Request): BarcodeResponseList;
```

#### ScanApi.scanBase64 parameters

Name | Type | Description  | Notes
---- | ---- | ------------ | -----
 **scanBase64Request** | [**ScanBase64Request**](models.md#ScanBase64Request)| Barcode scan request |

#### ScanApi.scanBase64 return type

[**BarcodeResponseList**](models.md#BarcodeResponseList)

---

### scanMultipart

Scan barcode from file in request body using POST requests with parameter in multipart form.

```ts
scanMultipart(file: RequestFile): BarcodeResponseList;
```

#### ScanApi.scanMultipart parameters

Name | Type | Description  | Notes
---- | ---- | ------------ | -----
 **file** | **RequestFile****RequestFile**| Barcode image file |

#### ScanApi.scanMultipart return type

[**BarcodeResponseList**](models.md#BarcodeResponseList)

---

