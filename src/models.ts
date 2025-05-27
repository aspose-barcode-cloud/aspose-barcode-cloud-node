/**
 * Api Error.
 */
export class ApiError {
    /**
     * Gets or sets api error code.
     */
    'code': string;
    /**
     * Gets or sets error message.
     */
    'message': string;
    /**
     * Gets or sets error description.
     */
    'description'?: string;
    /**
     * Gets or sets server datetime.
     */
    'dateTime'?: Date;
    'innerError'?: ApiError;

    static attributeTypeMap: Array<{ name: string; baseName: string; type: string }> = [
        {
            name: 'code',
            baseName: 'code',
            type: 'string',
        },
        {
            name: 'message',
            baseName: 'message',
            type: 'string',
        },
        {
            name: 'description',
            baseName: 'description',
            type: 'string',
        },
        {
            name: 'dateTime',
            baseName: 'dateTime',
            type: 'Date',
        },
        {
            name: 'innerError',
            baseName: 'innerError',
            type: 'ApiError',
        },
    ];

    static getAttributeTypeMap() {
        return ApiError.attributeTypeMap;
    }
}

/**
 * ApiError Response
 */
export class ApiErrorResponse {
    /**
     * Gets or sets request Id.
     */
    'requestId': string;
    'error': ApiError;

    static attributeTypeMap: Array<{ name: string; baseName: string; type: string }> = [
        {
            name: 'requestId',
            baseName: 'requestId',
            type: 'string',
        },
        {
            name: 'error',
            baseName: 'error',
            type: 'ApiError',
        },
    ];

    static getAttributeTypeMap() {
        return ApiErrorResponse.attributeTypeMap;
    }
}

/**
 * Specifies the file format of the image.
 */
export enum BarcodeImageFormat {
    Png = 'Png',
    Jpeg = 'Jpeg',
    Svg = 'Svg',
    Tiff = 'Tiff',
    Gif = 'Gif',
}

/**
 * Barcode image optional parameters
 */
export class BarcodeImageParams {
    'imageFormat'?: BarcodeImageFormat;
    'textLocation'?: CodeLocation;
    /**
     * Specify the displaying bars and content Color. Value: Color name from https://reference.aspose.com/drawing/net/system.drawing/color/ or ARGB value started with #. For example: AliceBlue or #FF000000 Default value: Black.
     */
    'foregroundColor'?: string;
    /**
     * Background color of the barcode image. Value: Color name from https://reference.aspose.com/drawing/net/system.drawing/color/ or ARGB value started with #. For example: AliceBlue or #FF000000 Default value: White.
     */
    'backgroundColor'?: string;
    'units'?: GraphicsUnit;
    /**
     * Resolution of the BarCode image. One value for both dimensions. Default value: 96 dpi. Decimal separator is dot.
     */
    'resolution'?: number;
    /**
     * Height of the barcode image in given units. Default units: pixel. Decimal separator is dot.
     */
    'imageHeight'?: number;
    /**
     * Width of the barcode image in given units. Default units: pixel. Decimal separator is dot.
     */
    'imageWidth'?: number;
    /**
     * BarCode image rotation angle, measured in degree, e.g. RotationAngle = 0 or RotationAngle = 360 means no rotation. If RotationAngle NOT equal to 90, 180, 270 or 0, it may increase the difficulty for the scanner to read the image. Default value: 0.
     */
    'rotationAngle'?: number;

    static attributeTypeMap: Array<{ name: string; baseName: string; type: string }> = [
        {
            name: 'imageFormat',
            baseName: 'imageFormat',
            type: 'BarcodeImageFormat',
        },
        {
            name: 'textLocation',
            baseName: 'textLocation',
            type: 'CodeLocation',
        },
        {
            name: 'foregroundColor',
            baseName: 'foregroundColor',
            type: 'string',
        },
        {
            name: 'backgroundColor',
            baseName: 'backgroundColor',
            type: 'string',
        },
        {
            name: 'units',
            baseName: 'units',
            type: 'GraphicsUnit',
        },
        {
            name: 'resolution',
            baseName: 'resolution',
            type: 'number',
        },
        {
            name: 'imageHeight',
            baseName: 'imageHeight',
            type: 'number',
        },
        {
            name: 'imageWidth',
            baseName: 'imageWidth',
            type: 'number',
        },
        {
            name: 'rotationAngle',
            baseName: 'rotationAngle',
            type: 'number',
        },
    ];

    static getAttributeTypeMap() {
        return BarcodeImageParams.attributeTypeMap;
    }
}

/**
 * Represents information about barcode.
 */
export class BarcodeResponse {
    /**
     * Barcode data.
     */
    'barcodeValue'?: string;
    /**
     * Type of the barcode.
     */
    'type'?: string;
    /**
     * Region with barcode.
     */
    'region'?: Array<RegionPoint>;
    /**
     * Checksum of barcode.
     */
    'checksum'?: string;

    static attributeTypeMap: Array<{ name: string; baseName: string; type: string }> = [
        {
            name: 'barcodeValue',
            baseName: 'barcodeValue',
            type: 'string',
        },
        {
            name: 'type',
            baseName: 'type',
            type: 'string',
        },
        {
            name: 'region',
            baseName: 'region',
            type: 'Array<RegionPoint>',
        },
        {
            name: 'checksum',
            baseName: 'checksum',
            type: 'string',
        },
    ];

    static getAttributeTypeMap() {
        return BarcodeResponse.attributeTypeMap;
    }
}

/**
 * Represents information about barcode list.
 */
export class BarcodeResponseList {
    /**
     * List of barcodes which are present in image.
     */
    'barcodes': Array<BarcodeResponse>;

    static attributeTypeMap: Array<{ name: string; baseName: string; type: string }> = [
        {
            name: 'barcodes',
            baseName: 'barcodes',
            type: 'Array<BarcodeResponse>',
        },
    ];

    static getAttributeTypeMap() {
        return BarcodeResponseList.attributeTypeMap;
    }
}
export enum CodeLocation {
    Below = 'Below',
    Above = 'Above',
    None = 'None',
}

/**
 * See Aspose.BarCode.Aspose.BarCode.BarCodeRecognition.DecodeType
 */
export enum DecodeBarcodeType {
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
    Vin = 'VIN',
}

/**
 * See Aspose.BarCode.Generation.EncodeTypes
 */
export enum EncodeBarcodeType {
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
    Vin = 'VIN',
}

/**
 * Data to encode in barcode
 */
export class EncodeData {
    'dataType'?: EncodeDataType;
    /**
     * String represents data to encode
     */
    'data': string;

    static attributeTypeMap: Array<{ name: string; baseName: string; type: string }> = [
        {
            name: 'dataType',
            baseName: 'dataType',
            type: 'EncodeDataType',
        },
        {
            name: 'data',
            baseName: 'data',
            type: 'string',
        },
    ];

    static getAttributeTypeMap() {
        return EncodeData.attributeTypeMap;
    }
}

/**
 * Types of data can be encoded to barcode
 */
export enum EncodeDataType {
    StringData = 'StringData',
    Base64Bytes = 'Base64Bytes',
    HexBytes = 'HexBytes',
}

/**
 * Barcode generation parameters
 */
export class GenerateParams {
    'barcodeType': EncodeBarcodeType;
    'encodeData': EncodeData;
    'barcodeImageParams'?: BarcodeImageParams;

    static attributeTypeMap: Array<{ name: string; baseName: string; type: string }> = [
        {
            name: 'barcodeType',
            baseName: 'barcodeType',
            type: 'EncodeBarcodeType',
        },
        {
            name: 'encodeData',
            baseName: 'encodeData',
            type: 'EncodeData',
        },
        {
            name: 'barcodeImageParams',
            baseName: 'barcodeImageParams',
            type: 'BarcodeImageParams',
        },
    ];

    static getAttributeTypeMap() {
        return GenerateParams.attributeTypeMap;
    }
}

/**
 * Subset of Aspose.Drawing.GraphicsUnit.
 */
export enum GraphicsUnit {
    Pixel = 'Pixel',
    Point = 'Point',
    Inch = 'Inch',
    Millimeter = 'Millimeter',
}

/**
 * Kind of image to recognize
 */
export enum RecognitionImageKind {
    Photo = 'Photo',
    ScannedDocument = 'ScannedDocument',
    ClearImage = 'ClearImage',
}

/**
 * Recognition mode.
 */
export enum RecognitionMode {
    Fast = 'Fast',
    Normal = 'Normal',
    Excellent = 'Excellent',
}

/**
 * Barcode recognize request
 */
export class RecognizeBase64Request {
    /**
     * Array of decode types to find on barcode
     */
    'barcodeTypes': Array<DecodeBarcodeType>;
    /**
     * Barcode image bytes encoded as base-64.
     */
    'fileBase64': string;
    'recognitionMode'?: RecognitionMode;
    'recognitionImageKind'?: RecognitionImageKind;

    static attributeTypeMap: Array<{ name: string; baseName: string; type: string }> = [
        {
            name: 'barcodeTypes',
            baseName: 'barcodeTypes',
            type: 'Array<DecodeBarcodeType>',
        },
        {
            name: 'fileBase64',
            baseName: 'fileBase64',
            type: 'string',
        },
        {
            name: 'recognitionMode',
            baseName: 'recognitionMode',
            type: 'RecognitionMode',
        },
        {
            name: 'recognitionImageKind',
            baseName: 'recognitionImageKind',
            type: 'RecognitionImageKind',
        },
    ];

    static getAttributeTypeMap() {
        return RecognizeBase64Request.attributeTypeMap;
    }
}

/**
 * Wrapper around Drawing.Point for proper specification.
 */
export class RegionPoint {
    /**
     * X-coordinate
     */
    'x'?: number;
    /**
     * Y-coordinate
     */
    'y'?: number;

    static attributeTypeMap: Array<{ name: string; baseName: string; type: string }> = [
        {
            name: 'x',
            baseName: 'x',
            type: 'number',
        },
        {
            name: 'y',
            baseName: 'y',
            type: 'number',
        },
    ];

    static getAttributeTypeMap() {
        return RegionPoint.attributeTypeMap;
    }
}

/**
 * Scan barcode request.
 */
export class ScanBase64Request {
    /**
     * Barcode image bytes encoded as base-64.
     */
    'fileBase64': string;

    static attributeTypeMap: Array<{ name: string; baseName: string; type: string }> = [
        {
            name: 'fileBase64',
            baseName: 'fileBase64',
            type: 'string',
        },
    ];

    static getAttributeTypeMap() {
        return ScanBase64Request.attributeTypeMap;
    }
}

// GenerateApi

/**
 * Generate barcode using GET request with parameters in route and query string.
 */
export class GenerateRequestWrapper {
    /**
     * Type of barcode to generate.
     */
    'barcodeType': EncodeBarcodeType;
    /**
     * String represents data to encode
     */
    'data': string;
    /**
     * Type of data to encode.
Default value: StringData.
     */
    'dataType'?: EncodeDataType;
    /**
     * Barcode output image format.
Default value: png
     */
    'imageFormat'?: BarcodeImageFormat;
    /**
     * Specify the displaying Text Location, set to CodeLocation.None to hide CodeText.
Default value: Depends on BarcodeType. CodeLocation.Below for 1D Barcodes. CodeLocation.None for 2D Barcodes.
     */
    'textLocation'?: CodeLocation;
    /**
     * Specify the displaying bars and content Color.
Value: Color name from https://reference.aspose.com/drawing/net/system.drawing/color/ or ARGB value started with #.
For example: AliceBlue or #FF000000
Default value: Black.
     */
    'foregroundColor'?: string = "'Black'";
    /**
     * Background color of the barcode image.
Value: Color name from https://reference.aspose.com/drawing/net/system.drawing/color/ or ARGB value started with #.
For example: AliceBlue or #FF000000
Default value: White.
     */
    'backgroundColor'?: string = "'White'";
    /**
     * Common Units for all measuring in query. Default units: pixel.
     */
    'units'?: GraphicsUnit;
    /**
     * Resolution of the BarCode image.
One value for both dimensions.
Default value: 96 dpi.
Decimal separator is dot.
     */
    'resolution'?: number;
    /**
     * Height of the barcode image in given units. Default units: pixel.
Decimal separator is dot.
     */
    'imageHeight'?: number;
    /**
     * Width of the barcode image in given units. Default units: pixel.
Decimal separator is dot.
     */
    'imageWidth'?: number;
    /**
     * BarCode image rotation angle, measured in degree, e.g. RotationAngle = 0 or RotationAngle = 360 means no rotation.
If RotationAngle NOT equal to 90, 180, 270 or 0, it may increase the difficulty for the scanner to read the image.
Default value: 0.
     */
    'rotationAngle'?: number;

    /**
     * @param barcodeType Type of barcode to generate.
     
     * @param data String represents data to encode
     */
    constructor(barcodeType: EncodeBarcodeType, data: string) {
        this.barcodeType = barcodeType;
        this.data = data;
    }
}

/**
 * Generate barcode using POST request with parameters in body in json or xml format.
 */
export class GenerateBodyRequestWrapper {
    /**
     *
     */
    'generateParams': GenerateParams;

    /**
     * @param generateParams
     */
    constructor(generateParams: GenerateParams) {
        this.generateParams = generateParams;
    }
}

/**
 * Generate barcode using POST request with parameters in multipart form.
 */
export class GenerateMultipartRequestWrapper {
    /**
     *
     */
    'barcodeType': EncodeBarcodeType;
    /**
     * String represents data to encode
     */
    'data': string;
    /**
     *
     */
    'dataType'?: EncodeDataType;
    /**
     *
     */
    'imageFormat'?: BarcodeImageFormat;
    /**
     *
     */
    'textLocation'?: CodeLocation;
    /**
     * Specify the displaying bars and content Color. Value: Color name from https://reference.aspose.com/drawing/net/system.drawing/color/ or ARGB value started with #. For example: AliceBlue or #FF000000 Default value: Black.
     */
    'foregroundColor'?: string = "'Black'";
    /**
     * Background color of the barcode image. Value: Color name from https://reference.aspose.com/drawing/net/system.drawing/color/ or ARGB value started with #. For example: AliceBlue or #FF000000 Default value: White.
     */
    'backgroundColor'?: string = "'White'";
    /**
     *
     */
    'units'?: GraphicsUnit;
    /**
     * Resolution of the BarCode image. One value for both dimensions. Default value: 96 dpi. Decimal separator is dot.
     */
    'resolution'?: number;
    /**
     * Height of the barcode image in given units. Default units: pixel. Decimal separator is dot.
     */
    'imageHeight'?: number;
    /**
     * Width of the barcode image in given units. Default units: pixel. Decimal separator is dot.
     */
    'imageWidth'?: number;
    /**
     * BarCode image rotation angle, measured in degree, e.g. RotationAngle = 0 or RotationAngle = 360 means no rotation. If RotationAngle NOT equal to 90, 180, 270 or 0, it may increase the difficulty for the scanner to read the image. Default value: 0.
     */
    'rotationAngle'?: number;

    /**
     * @param barcodeType 
     
     * @param data String represents data to encode
     */
    constructor(barcodeType: EncodeBarcodeType, data: string) {
        this.barcodeType = barcodeType;
        this.data = data;
    }
}

// RecognizeApi

/**
 * Recognize barcode from file on server using GET requests with parameters in route and query string.
 */
export class RecognizeRequestWrapper {
    /**
     * Type of barcode to recognize
     */
    'barcodeType': DecodeBarcodeType;
    /**
     * Url to barcode image
     */
    'fileUrl': string;
    /**
     * Recognition mode
     */
    'recognitionMode'?: RecognitionMode;
    /**
     * Image kind for recognition
     */
    'recognitionImageKind'?: RecognitionImageKind;

    /**
     * @param barcodeType Type of barcode to recognize
     
     * @param fileUrl Url to barcode image
     */
    constructor(barcodeType: DecodeBarcodeType, fileUrl: string) {
        this.barcodeType = barcodeType;
        this.fileUrl = fileUrl;
    }
}

/**
 * Recognize barcode from file in request body using POST requests with parameters in body in json or xml format.
 */
export class RecognizeBase64RequestWrapper {
    /**
     *
     */
    'recognizeBase64Request': RecognizeBase64Request;

    /**
     * @param recognizeBase64Request
     */
    constructor(recognizeBase64Request: RecognizeBase64Request) {
        this.recognizeBase64Request = recognizeBase64Request;
    }
}

/**
 * Recognize barcode from file in request body using POST requests with parameters in multipart form.
 */
export class RecognizeMultipartRequestWrapper {
    /**
     *
     */
    'barcodeType': DecodeBarcodeType;
    /**
     * Barcode image file
     */
    'fileBytes': Buffer;
    /**
     *
     */
    'recognitionMode'?: RecognitionMode;
    /**
     *
     */
    'recognitionImageKind'?: RecognitionImageKind;

    /**
     * @param barcodeType 
     
     * @param fileBytes Barcode image file
     */
    constructor(barcodeType: DecodeBarcodeType, fileBytes: Buffer) {
        this.barcodeType = barcodeType;
        this.fileBytes = fileBytes;
    }
}

// ScanApi

/**
 * Scan barcode from file on server using GET requests with parameter in query string.
 */
export class ScanRequestWrapper {
    /**
     * Url to barcode image
     */
    'fileUrl': string;

    /**
     * @param fileUrl Url to barcode image
     */
    constructor(fileUrl: string) {
        this.fileUrl = fileUrl;
    }
}

/**
 * Scan barcode from file in request body using POST requests with parameter in body in json or xml format.
 */
export class ScanBase64RequestWrapper {
    /**
     *
     */
    'scanBase64Request': ScanBase64Request;

    /**
     * @param scanBase64Request
     */
    constructor(scanBase64Request: ScanBase64Request) {
        this.scanBase64Request = scanBase64Request;
    }
}

/**
 * Scan barcode from file in request body using POST requests with parameter in multipart form.
 */
export class ScanMultipartRequestWrapper {
    /**
     * Barcode image file
     */
    'fileBytes': Buffer;

    /**
     * @param fileBytes Barcode image file
     */
    constructor(fileBytes: Buffer) {
        this.fileBytes = fileBytes;
    }
}
