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
    requestId?: string;
    error?: ApiError;
}
```

## AvailableBarCodeImageFormat

Specifies the file format of the image.

```ts
enum AvailableBarCodeImageFormat {
    Gif = 'Gif',
    Jpeg = 'Jpeg',
    Png = 'Png',
    Tiff = 'Tiff',
    Svg = 'Svg'
}
```

## AvailableGraphicsUnit

Subset of Aspose.Drawing.GraphicsUnit.

```ts
enum AvailableGraphicsUnit {
    Pixel = 'Pixel',
    Point = 'Point',
    Inch = 'Inch',
    Millimeter = 'Millimeter'
}
```

## BarcodeImageParams

Barcode image optional parameters

```ts
interface BarcodeImageParams {
    imageFormat?: AvailableBarCodeImageFormat;

    /**
     * Text that will be displayed instead of codetext in 2D barcodes.  Used for: Aztec, Pdf417, DataMatrix, QR, MaxiCode, DotCode
     */
    twoDDisplayText?: string;
    textLocation?: CodeLocation;
    textAlignment?: TextAlignment;

    /**
     * Specify the displaying bars and content Color.   Value: Color name from https://reference.aspose.com/drawing/net/system.drawing/color/ or ARGB value started with #.   For example: AliceBlue or #FF000000  Default value: Black.
     */
    foregroundColor?: string;

    /**
     * Background color of the barcode image.  Value: Color name from https://reference.aspose.com/drawing/net/system.drawing/color/ or ARGB value started with #.   For example: AliceBlue or #FF000000  Default value: White.
     */
    backgroundColor?: string;
    units?: AvailableGraphicsUnit;

    /**
     * Resolution of the BarCode image.  One value for both dimensions.  Default value: 96 dpi.
     */
    resolution?: number;

    /**
     * Height of the barcode image in given units. Default units: pixel.
     */
    imageHeight?: number;

    /**
     * Width of the barcode image in given units. Default units: pixel.
     */
    imageWidth?: number;

    /**
     * BarCode image rotation angle, measured in degree, e.g. RotationAngle = 0 or RotationAngle = 360 means no rotation.  If RotationAngle NOT equal to 90, 180, 270 or 0, it may increase the difficulty for the scanner to read the image.  Default value: 0.
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
    MostCommonlyUsed = 'mostCommonlyUsed',
    AustraliaPost = 'AustraliaPost',
    Aztec = 'Aztec',
    Isbn = 'ISBN',
    Codabar = 'Codabar',
    Code11 = 'Code11',
    Code128 = 'Code128',
    Gs1Code128 = 'GS1Code128',
    Code39 = 'Code39',
    Code39FullAscii = 'Code39FullASCII',
    Code93 = 'Code93',
    Code93FullAscii = 'Code93FullASCII',
    DataMatrix = 'DataMatrix',
    DeutschePostIdentcode = 'DeutschePostIdentcode',
    DeutschePostLeitcode = 'DeutschePostLeitcode',
    Ean13 = 'EAN13',
    Ean14 = 'EAN14',
    Ean8 = 'EAN8',
    Iata2of5 = 'IATA2of5',
    Interleaved2of5 = 'Interleaved2of5',
    Issn = 'ISSN',
    Ismn = 'ISMN',
    ItalianPost25 = 'ItalianPost25',
    Itf14 = 'ITF14',
    Itf6 = 'ITF6',
    MacroPdf417 = 'MacroPdf417',
    Matrix2of5 = 'Matrix2of5',
    Msi = 'MSI',
    OneCode = 'OneCode',
    Opc = 'OPC',
    PatchCode = 'PatchCode',
    Pdf417 = 'Pdf417',
    MicroPdf417 = 'MicroPdf417',
    Planet = 'Planet',
    Postnet = 'Postnet',
    Pzn = 'PZN',
    Qr = 'QR',
    MicroQr = 'MicroQR',
    RectMicroQr = 'RectMicroQR',
    Rm4Scc = 'RM4SCC',
    Scc14 = 'SCC14',
    Sscc18 = 'SSCC18',
    Standard2of5 = 'Standard2of5',
    Supplement = 'Supplement',
    Upca = 'UPCA',
    Upce = 'UPCE',
    Vin = 'VIN',
    Pharmacode = 'Pharmacode',
    Gs1DataMatrix = 'GS1DataMatrix',
    DatabarOmniDirectional = 'DatabarOmniDirectional',
    DatabarTruncated = 'DatabarTruncated',
    DatabarLimited = 'DatabarLimited',
    DatabarExpanded = 'DatabarExpanded',
    SwissPostParcel = 'SwissPostParcel',
    AustralianPosteParcel = 'AustralianPosteParcel',
    Code16K = 'Code16K',
    DatabarStackedOmniDirectional = 'DatabarStackedOmniDirectional',
    DatabarStacked = 'DatabarStacked',
    DatabarExpandedStacked = 'DatabarExpandedStacked',
    CompactPdf417 = 'CompactPdf417',
    Gs1Qr = 'GS1QR',
    MaxiCode = 'MaxiCode',
    MicrE13B = 'MicrE13B',
    Code32 = 'Code32',
    DataLogic2of5 = 'DataLogic2of5',
    DotCode = 'DotCode',
    DutchKix = 'DutchKIX',
    CodablockF = 'CodablockF',
    Mailmark = 'Mailmark',
    Gs1DotCode = 'GS1DotCode',
    HibcCode39Lic = 'HIBCCode39LIC',
    HibcCode128Lic = 'HIBCCode128LIC',
    HibcAztecLic = 'HIBCAztecLIC',
    HibcDataMatrixLic = 'HIBCDataMatrixLIC',
    Hibcqrlic = 'HIBCQRLIC',
    HibcCode39Pas = 'HIBCCode39PAS',
    HibcCode128Pas = 'HIBCCode128PAS',
    HibcAztecPas = 'HIBCAztecPAS',
    HibcDataMatrixPas = 'HIBCDataMatrixPAS',
    Hibcqrpas = 'HIBCQRPAS',
    HanXin = 'HanXin',
    Gs1HanXin = 'GS1HanXin',
    Gs1Aztec = 'GS1Aztec',
    Gs1CompositeBar = 'GS1CompositeBar',
    Gs1MicroPdf417 = 'GS1MicroPdf417'
}
```

## EncodeBarcodeType

See Aspose.BarCode.Generation.EncodeTypes

```ts
enum EncodeBarcodeType {
    Codabar = 'Codabar',
    Code11 = 'Code11',
    Code39 = 'Code39',
    Code39FullAscii = 'Code39FullASCII',
    Code93 = 'Code93',
    Code128 = 'Code128',
    Gs1Code128 = 'GS1Code128',
    Ean8 = 'EAN8',
    Ean13 = 'EAN13',
    Ean14 = 'EAN14',
    Scc14 = 'SCC14',
    Sscc18 = 'SSCC18',
    Upca = 'UPCA',
    Upce = 'UPCE',
    Isbn = 'ISBN',
    Issn = 'ISSN',
    Ismn = 'ISMN',
    Standard2of5 = 'Standard2of5',
    Interleaved2of5 = 'Interleaved2of5',
    Matrix2of5 = 'Matrix2of5',
    ItalianPost25 = 'ItalianPost25',
    Iata2of5 = 'IATA2of5',
    Itf14 = 'ITF14',
    Itf6 = 'ITF6',
    Msi = 'MSI',
    Vin = 'VIN',
    DeutschePostIdentcode = 'DeutschePostIdentcode',
    DeutschePostLeitcode = 'DeutschePostLeitcode',
    Opc = 'OPC',
    Pzn = 'PZN',
    Code16K = 'Code16K',
    Pharmacode = 'Pharmacode',
    DataMatrix = 'DataMatrix',
    Qr = 'QR',
    Aztec = 'Aztec',
    Pdf417 = 'Pdf417',
    MacroPdf417 = 'MacroPdf417',
    AustraliaPost = 'AustraliaPost',
    Postnet = 'Postnet',
    Planet = 'Planet',
    OneCode = 'OneCode',
    Rm4Scc = 'RM4SCC',
    DatabarOmniDirectional = 'DatabarOmniDirectional',
    DatabarTruncated = 'DatabarTruncated',
    DatabarLimited = 'DatabarLimited',
    DatabarExpanded = 'DatabarExpanded',
    SingaporePost = 'SingaporePost',
    Gs1DataMatrix = 'GS1DataMatrix',
    AustralianPosteParcel = 'AustralianPosteParcel',
    SwissPostParcel = 'SwissPostParcel',
    PatchCode = 'PatchCode',
    DatabarExpandedStacked = 'DatabarExpandedStacked',
    DatabarStacked = 'DatabarStacked',
    DatabarStackedOmniDirectional = 'DatabarStackedOmniDirectional',
    MicroPdf417 = 'MicroPdf417',
    Gs1Qr = 'GS1QR',
    MaxiCode = 'MaxiCode',
    Code32 = 'Code32',
    DataLogic2of5 = 'DataLogic2of5',
    DotCode = 'DotCode',
    DutchKix = 'DutchKIX',
    UpcaGs1Code128Coupon = 'UpcaGs1Code128Coupon',
    UpcaGs1DatabarCoupon = 'UpcaGs1DatabarCoupon',
    CodablockF = 'CodablockF',
    Gs1CodablockF = 'GS1CodablockF',
    Mailmark = 'Mailmark',
    Gs1DotCode = 'GS1DotCode',
    HanXin = 'HanXin',
    Gs1HanXin = 'GS1HanXin',
    Gs1Aztec = 'GS1Aztec',
    Gs1MicroPdf417 = 'GS1MicroPdf417',
    RectMicroQr = 'RectMicroQR',
    MicroQr = 'MicroQR'
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
    imageKind?: RecognitionImageKind;
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

## TextAlignment
```ts
enum TextAlignment {
    Left = 'Left',
    Center = 'Center',
    Right = 'Right'
}
```

