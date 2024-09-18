import { RequestFile } from './multipart';

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
    'requestId'?: string;
    'error'?: ApiError;

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
export enum AvailableBarCodeImageFormat {
    Gif = 'Gif',
    Jpeg = 'Jpeg',
    Png = 'Png',
    Tiff = 'Tiff',
    Svg = 'Svg',
}

/**
 * Subset of Aspose.Drawing.GraphicsUnit.
 */
export enum AvailableGraphicsUnit {
    Pixel = 'Pixel',
    Point = 'Point',
    Inch = 'Inch',
    Millimeter = 'Millimeter',
}

/**
 * Barcode image optional parameters
 */
export class BarcodeImageParams {
    'imageFormat'?: AvailableBarCodeImageFormat;
    /**
     * Text that will be displayed instead of codetext in 2D barcodes.  Used for: Aztec, Pdf417, DataMatrix, QR, MaxiCode, DotCode
     */
    'twoDDisplayText'?: string;
    'textLocation'?: CodeLocation;
    'textAlignment'?: TextAlignment;
    /**
     * Specify the displaying bars and content Color.   Value: Color name from https://reference.aspose.com/drawing/net/system.drawing/color/ or ARGB value started with #.   For example: Color.AliceBlue or #FF000000  Default value: Color.Black.
     */
    'foregroundColor'?: string;
    /**
     * Background color of the barcode image.  Value: Color name from https://reference.aspose.com/drawing/net/system.drawing/color/ or ARGB value started with #.   For example: Color.AliceBlue or #FF000000  Default value: Color.White.
     */
    'backgroundColor'?: string;
    'units'?: AvailableGraphicsUnit;
    /**
     * Resolution of the BarCode image.  One value for both dimensions.  Default value: 96 dpi.
     */
    'resolution'?: number;
    /**
     * Height of the barcode image in given units. Default units: pixel.
     */
    'imageHeight'?: number;
    /**
     * Width of the barcode image in given units. Default units: pixel.
     */
    'imageWidth'?: number;
    /**
     * BarCode image rotation angle, measured in degree, e.g. RotationAngle = 0 or RotationAngle = 360 means no rotation.  If RotationAngle NOT equal to 90, 180, 270 or 0, it may increase the difficulty for the scanner to read the image.  Default value: 0.
     */
    'rotationAngle'?: number;

    static attributeTypeMap: Array<{ name: string; baseName: string; type: string }> = [
        {
            name: 'imageFormat',
            baseName: 'imageFormat',
            type: 'AvailableBarCodeImageFormat',
        },
        {
            name: 'twoDDisplayText',
            baseName: 'twoDDisplayText',
            type: 'string',
        },
        {
            name: 'textLocation',
            baseName: 'textLocation',
            type: 'CodeLocation',
        },
        {
            name: 'textAlignment',
            baseName: 'textAlignment',
            type: 'TextAlignment',
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
            type: 'AvailableGraphicsUnit',
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
    Gs1MicroPdf417 = 'GS1MicroPdf417',
}

/**
 * See Aspose.BarCode.Generation.EncodeTypes
 */
export enum EncodeBarcodeType {
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
    MicroQr = 'MicroQR',
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
    'imageKind'?: RecognitionImageKind;

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
            name: 'imageKind',
            baseName: 'imageKind',
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
export enum TextAlignment {
    Left = 'Left',
    Center = 'Center',
    Right = 'Right',
}

// GenerateApi

/**
 * Generate barcode using GET request with parameters in route and query string.
 */
export class BarcodeGenerateBarcodeTypeGetRequest {
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
Default value:  EncodeDataType.StringData.
     */
    'dataType'?: EncodeDataType;
    /**
     * Barcode output image format.
Default value: png
     */
    'imageFormat'?: AvailableBarCodeImageFormat;
    /**
     * Text that will be displayed instead of codetext in 2D barcodes.
Used for: Aztec, Pdf417, DataMatrix, QR, MaxiCode, DotCode
     */
    'twoDDisplayText'?: string;
    /**
     * Specify the displaying Text Location, set to CodeLocation.None to hide CodeText.
Default value: CodeLocation.Below.
     */
    'textLocation'?: CodeLocation;
    /**
     * Text alignment.
Default value: TextAligment.Left
     */
    'textAlignment'?: TextAlignment;
    /**
     * Specify the displaying bars and content Color. 
Value: Color name from https://reference.aspose.com/drawing/net/system.drawing/color/ or ARGB value started with #. 
For example: Color.AliceBlue or #FF000000
Default value: Color.Black.
     */
    'foregroundColor'?: string;
    /**
     * Background color of the barcode image.
Value: Color name from https://reference.aspose.com/drawing/net/system.drawing/color/ or ARGB value started with #. 
For example: Color.AliceBlue or #FF000000
Default value: Color.White.
     */
    'backgroundColor'?: string;
    /**
     * Common Units for all measuring in query. Default units: pixel.
     */
    'units'?: AvailableGraphicsUnit;
    /**
     * Resolution of the BarCode image.
One value for both dimensions.
Default value: 96 dpi.
     */
    'resolution'?: number;
    /**
     * Height of the barcode image in given units. Default units: pixel.
     */
    'imageHeight'?: number;
    /**
     * Width of the barcode image in given units. Default units: pixel.
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
export class BarcodeGenerateBodyPostRequest {
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
 * Generate barcode using POST request with parameters in url ecncoded form.
 */
export class BarcodeGenerateFormPostRequest {
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
    'imageFormat'?: AvailableBarCodeImageFormat;
    /**
     * Text that will be displayed instead of codetext in 2D barcodes.  Used for: Aztec, Pdf417, DataMatrix, QR, MaxiCode, DotCode
     */
    'twoDDisplayText'?: string;
    /**
     *
     */
    'textLocation'?: CodeLocation;
    /**
     *
     */
    'textAlignment'?: TextAlignment;
    /**
     * Specify the displaying bars and content Color.   Value: Color name from https://reference.aspose.com/drawing/net/system.drawing/color/ or ARGB value started with #.   For example: Color.AliceBlue or #FF000000  Default value: Color.Black.
     */
    'foregroundColor'?: string;
    /**
     * Background color of the barcode image.  Value: Color name from https://reference.aspose.com/drawing/net/system.drawing/color/ or ARGB value started with #.   For example: Color.AliceBlue or #FF000000  Default value: Color.White.
     */
    'backgroundColor'?: string;
    /**
     *
     */
    'units'?: AvailableGraphicsUnit;
    /**
     * Resolution of the BarCode image.  One value for both dimensions.  Default value: 96 dpi.
     */
    'resolution'?: number;
    /**
     * Height of the barcode image in given units. Default units: pixel.
     */
    'imageHeight'?: number;
    /**
     * Width of the barcode image in given units. Default units: pixel.
     */
    'imageWidth'?: number;
    /**
     * BarCode image rotation angle, measured in degree, e.g. RotationAngle = 0 or RotationAngle = 360 means no rotation.  If RotationAngle NOT equal to 90, 180, 270 or 0, it may increase the difficulty for the scanner to read the image.  Default value: 0.
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
export class BarcodeRecognizeBarcodeTypeGetRequest {
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
     * Image kind
     */
    'imageKind'?: RecognitionImageKind;

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
export class BarcodeRecognizeBodyPostRequest {
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
export class BarcodeRecognizeFormPostRequest {
    /**
     *
     */
    'barcodeType': DecodeBarcodeType;
    /**
     *
     */
    'file': RequestFile;
    /**
     *
     */
    'recognitionMode'?: RecognitionMode;
    /**
     *
     */
    'imageKind'?: RecognitionImageKind;

    /**
     * @param barcodeType 
     
     * @param file 
     */
    constructor(barcodeType: DecodeBarcodeType, file: RequestFile) {
        this.barcodeType = barcodeType;
        this.file = file;
    }
}

// ScanApi

/**
 * Scan barcode from file in request body using POST requests with parameter in body in json or xml format.
 */
export class BarcodeScanBodyPostRequest {
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
export class BarcodeScanFormPostRequest {
    /**
     *
     */
    'file': RequestFile;

    /**
     * @param file
     */
    constructor(file: RequestFile) {
        this.file = file;
    }
}

/**
 * Scan barcode from file on server using GET requests with parameter in query string.
 */
export class BarcodeScanGetRequest {
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
