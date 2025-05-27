# Models

## ApiError

Api Error.

```ts
interface ApiError {

    /**
     * Gets or sets api error code.
     */
    code: string;

    /**
     * Gets or sets error message.
     */
    message: string;

    /**
     * Gets or sets error description.
     */
    description?: string;

    /**
     * Gets or sets server datetime.
     */
    dateTime?: Date;
    innerError?: ApiError;
}
```

## ApiErrorResponse

ApiError Response

```ts
interface ApiErrorResponse {

    /**
     * Gets or sets request Id.
     */
    requestId: string;
    error: ApiError;
}
```

## BarcodeImageFormat

Specifies the file format of the image.

```ts
enum BarcodeImageFormat {
    Png = 'Png',
    Jpeg = 'Jpeg',
    Svg = 'Svg',
    Tiff = 'Tiff',
    Gif = 'Gif'
}
```

## BarcodeImageParams

Barcode image optional parameters

```ts
interface BarcodeImageParams {
    imageFormat?: BarcodeImageFormat;
    textLocation?: CodeLocation;

    /**
     * Specify the displaying bars and content Color. Value: Color name from https://reference.aspose.com/drawing/net/system.drawing/color/ or ARGB value started with #. For example: AliceBlue or #FF000000 Default value: Black.
     */
    foregroundColor?: string;

    /**
     * Background color of the barcode image. Value: Color name from https://reference.aspose.com/drawing/net/system.drawing/color/ or ARGB value started with #. For example: AliceBlue or #FF000000 Default value: White.
     */
    backgroundColor?: string;
    units?: GraphicsUnit;

    /**
     * Resolution of the BarCode image. One value for both dimensions. Default value: 96 dpi. Decimal separator is dot.
     */
    resolution?: number;

    /**
     * Height of the barcode image in given units. Default units: pixel. Decimal separator is dot.
     */
    imageHeight?: number;

    /**
     * Width of the barcode image in given units. Default units: pixel. Decimal separator is dot.
     */
    imageWidth?: number;

    /**
     * BarCode image rotation angle, measured in degree, e.g. RotationAngle = 0 or RotationAngle = 360 means no rotation. If RotationAngle NOT equal to 90, 180, 270 or 0, it may increase the difficulty for the scanner to read the image. Default value: 0.
     */
    rotationAngle?: number;
}
```

## BarcodeResponse

Represents information about barcode.

```ts
interface BarcodeResponse {

    /**
     * Barcode data.
     */
    barcodeValue?: string;

    /**
     * Type of the barcode.
     */
    type?: string;

    /**
     * Region with barcode.
     */
    region?: Array<RegionPoint>;

    /**
     * Checksum of barcode.
     */
    checksum?: string;
}
```

## BarcodeResponseList

Represents information about barcode list.

```ts
interface BarcodeResponseList {

    /**
     * List of barcodes which are present in image.
     */
    barcodes: Array<BarcodeResponse>;
}
```

## CodeLocation
```ts
enum CodeLocation {
    Below = 'Below',
    Above = 'Above',
    None = 'None'
}
```

## DecodeBarcodeType

See Aspose.BarCode.Aspose.BarCode.BarCodeRecognition.DecodeType

```ts
enum DecodeBarcodeType {
    MostCommonlyUsed = 'MostCommonlyUsed',
    Qr = 'QR',
    AustraliaPost = 'AustraliaPost',
    AustralianPosteParcel = 'AustralianPosteParcel',
    Aztec = 'Aztec',
    Codabar = 'Codabar',
    CodablockF = 'CodablockF',
    Code11 = 'Code11',
    Code128 = 'Code128',
    Code16K = 'Code16K',
    Code32 = 'Code32',
    Code39 = 'Code39',
    Code39FullAscii = 'Code39FullASCII',
    Code93 = 'Code93',
    CompactPdf417 = 'CompactPdf417',
    DataLogic2of5 = 'DataLogic2of5',
    DataMatrix = 'DataMatrix',
    DatabarExpanded = 'DatabarExpanded',
    DatabarExpandedStacked = 'DatabarExpandedStacked',
    DatabarLimited = 'DatabarLimited',
    DatabarOmniDirectional = 'DatabarOmniDirectional',
    DatabarStacked = 'DatabarStacked',
    DatabarStackedOmniDirectional = 'DatabarStackedOmniDirectional',
    DatabarTruncated = 'DatabarTruncated',
    DeutschePostIdentcode = 'DeutschePostIdentcode',
    DeutschePostLeitcode = 'DeutschePostLeitcode',
    DotCode = 'DotCode',
    DutchKix = 'DutchKIX',
    Ean13 = 'EAN13',
    Ean14 = 'EAN14',
    Ean8 = 'EAN8',
    Gs1Aztec = 'GS1Aztec',
    Gs1Code128 = 'GS1Code128',
    Gs1CompositeBar = 'GS1CompositeBar',
    Gs1DataMatrix = 'GS1DataMatrix',
    Gs1DotCode = 'GS1DotCode',
    Gs1HanXin = 'GS1HanXin',
    Gs1MicroPdf417 = 'GS1MicroPdf417',
    Gs1Qr = 'GS1QR',
    HanXin = 'HanXin',
    HibcAztecLic = 'HIBCAztecLIC',
    HibcAztecPas = 'HIBCAztecPAS',
    HibcCode128Lic = 'HIBCCode128LIC',
    HibcCode128Pas = 'HIBCCode128PAS',
    HibcCode39Lic = 'HIBCCode39LIC',
    HibcCode39Pas = 'HIBCCode39PAS',
    HibcDataMatrixLic = 'HIBCDataMatrixLIC',
    HibcDataMatrixPas = 'HIBCDataMatrixPAS',
    Hibcqrlic = 'HIBCQRLIC',
    Hibcqrpas = 'HIBCQRPAS',
    Iata2of5 = 'IATA2of5',
    Isbn = 'ISBN',
    Ismn = 'ISMN',
    Issn = 'ISSN',
    Itf14 = 'ITF14',
    Itf6 = 'ITF6',
    Interleaved2of5 = 'Interleaved2of5',
    ItalianPost25 = 'ItalianPost25',
    MacroPdf417 = 'MacroPdf417',
    Mailmark = 'Mailmark',
    Matrix2of5 = 'Matrix2of5',
    MaxiCode = 'MaxiCode',
    MicrE13B = 'MicrE13B',
    MicroPdf417 = 'MicroPdf417',
    MicroQr = 'MicroQR',
    Msi = 'MSI',
    OneCode = 'OneCode',
    Opc = 'OPC',
    PatchCode = 'PatchCode',
    Pdf417 = 'Pdf417',
    Pharmacode = 'Pharmacode',
    Planet = 'Planet',
    Postnet = 'Postnet',
    Pzn = 'PZN',
    RectMicroQr = 'RectMicroQR',
    Rm4Scc = 'RM4SCC',
    Scc14 = 'SCC14',
    Sscc18 = 'SSCC18',
    Standard2of5 = 'Standard2of5',
    Supplement = 'Supplement',
    SwissPostParcel = 'SwissPostParcel',
    Upca = 'UPCA',
    Upce = 'UPCE',
    Vin = 'VIN'
}
```

## EncodeBarcodeType

See Aspose.BarCode.Generation.EncodeTypes

```ts
enum EncodeBarcodeType {
    Qr = 'QR',
    AustraliaPost = 'AustraliaPost',
    AustralianPosteParcel = 'AustralianPosteParcel',
    Aztec = 'Aztec',
    Codabar = 'Codabar',
    CodablockF = 'CodablockF',
    Code11 = 'Code11',
    Code128 = 'Code128',
    Code16K = 'Code16K',
    Code32 = 'Code32',
    Code39 = 'Code39',
    Code39FullAscii = 'Code39FullASCII',
    Code93 = 'Code93',
    DataLogic2of5 = 'DataLogic2of5',
    DataMatrix = 'DataMatrix',
    DatabarExpanded = 'DatabarExpanded',
    DatabarExpandedStacked = 'DatabarExpandedStacked',
    DatabarLimited = 'DatabarLimited',
    DatabarOmniDirectional = 'DatabarOmniDirectional',
    DatabarStacked = 'DatabarStacked',
    DatabarStackedOmniDirectional = 'DatabarStackedOmniDirectional',
    DatabarTruncated = 'DatabarTruncated',
    DeutschePostIdentcode = 'DeutschePostIdentcode',
    DeutschePostLeitcode = 'DeutschePostLeitcode',
    DotCode = 'DotCode',
    DutchKix = 'DutchKIX',
    Ean13 = 'EAN13',
    Ean14 = 'EAN14',
    Ean8 = 'EAN8',
    Gs1Aztec = 'GS1Aztec',
    Gs1CodablockF = 'GS1CodablockF',
    Gs1Code128 = 'GS1Code128',
    Gs1DataMatrix = 'GS1DataMatrix',
    Gs1DotCode = 'GS1DotCode',
    Gs1HanXin = 'GS1HanXin',
    Gs1MicroPdf417 = 'GS1MicroPdf417',
    Gs1Qr = 'GS1QR',
    HanXin = 'HanXin',
    Iata2of5 = 'IATA2of5',
    Isbn = 'ISBN',
    Ismn = 'ISMN',
    Issn = 'ISSN',
    Itf14 = 'ITF14',
    Itf6 = 'ITF6',
    Interleaved2of5 = 'Interleaved2of5',
    ItalianPost25 = 'ItalianPost25',
    Msi = 'MSI',
    MacroPdf417 = 'MacroPdf417',
    Mailmark = 'Mailmark',
    Matrix2of5 = 'Matrix2of5',
    MaxiCode = 'MaxiCode',
    MicroPdf417 = 'MicroPdf417',
    MicroQr = 'MicroQR',
    Opc = 'OPC',
    OneCode = 'OneCode',
    Pzn = 'PZN',
    PatchCode = 'PatchCode',
    Pdf417 = 'Pdf417',
    Pharmacode = 'Pharmacode',
    Planet = 'Planet',
    Postnet = 'Postnet',
    Rm4Scc = 'RM4SCC',
    RectMicroQr = 'RectMicroQR',
    Scc14 = 'SCC14',
    Sscc18 = 'SSCC18',
    SingaporePost = 'SingaporePost',
    Standard2of5 = 'Standard2of5',
    SwissPostParcel = 'SwissPostParcel',
    Upca = 'UPCA',
    Upce = 'UPCE',
    UpcaGs1Code128Coupon = 'UpcaGs1Code128Coupon',
    UpcaGs1DatabarCoupon = 'UpcaGs1DatabarCoupon',
    Vin = 'VIN'
}
```

## EncodeData

Data to encode in barcode

```ts
interface EncodeData {
    dataType?: EncodeDataType;

    /**
     * String represents data to encode
     */
    data: string;
}
```

## EncodeDataType

Types of data can be encoded to barcode

```ts
enum EncodeDataType {
    StringData = 'StringData',
    Base64Bytes = 'Base64Bytes',
    HexBytes = 'HexBytes'
}
```

## GenerateParams

Barcode generation parameters

```ts
interface GenerateParams {
    barcodeType: EncodeBarcodeType;
    encodeData: EncodeData;
    barcodeImageParams?: BarcodeImageParams;
}
```

## GraphicsUnit

Subset of Aspose.Drawing.GraphicsUnit.

```ts
enum GraphicsUnit {
    Pixel = 'Pixel',
    Point = 'Point',
    Inch = 'Inch',
    Millimeter = 'Millimeter'
}
```

## RecognitionImageKind

Kind of image to recognize

```ts
enum RecognitionImageKind {
    Photo = 'Photo',
    ScannedDocument = 'ScannedDocument',
    ClearImage = 'ClearImage'
}
```

## RecognitionMode

Recognition mode.

```ts
enum RecognitionMode {
    Fast = 'Fast',
    Normal = 'Normal',
    Excellent = 'Excellent'
}
```

## RecognizeBase64Request

Barcode recognize request

```ts
interface RecognizeBase64Request {

    /**
     * Array of decode types to find on barcode
     */
    barcodeTypes: Array<DecodeBarcodeType>;

    /**
     * Barcode image bytes encoded as base-64.
     */
    fileBase64: string;
    recognitionMode?: RecognitionMode;
    recognitionImageKind?: RecognitionImageKind;
}
```

## RegionPoint

Wrapper around Drawing.Point for proper specification.

```ts
interface RegionPoint {

    /**
     * X-coordinate
     */
    x?: number;

    /**
     * Y-coordinate
     */
    y?: number;
}
```

## ScanBase64Request

Scan barcode request.

```ts
interface ScanBase64Request {

    /**
     * Barcode image bytes encoded as base-64.
     */
    fileBase64: string;
}
```

