import { Configuration } from './Configuration';
import { HttpClient, HttpOptions, HttpResponse, HttpResult } from './httpClient';
import { Multipart, FormFile, FormParamsType } from './multipart';

import {
    ApiError,
    ApiErrorResponse,
    AustralianPostParams,
    AutoSizeMode,
    AvailableGraphicsUnit,
    AztecEncodeMode,
    AztecParams,
    AztecSymbolMode,
    BarcodeResponse,
    BarcodeResponseList,
    BorderDashStyle,
    CaptionParams,
    ChecksumValidation,
    CodabarChecksumMode,
    CodabarParams,
    CodabarSymbol,
    CodablockParams,
    Code128Emulation,
    Code128EncodeMode,
    Code128Params,
    Code16KParams,
    CodeLocation,
    CouponParams,
    CustomerInformationInterpretingType,
    DataBarParams,
    DataMatrixEccType,
    DataMatrixEncodeMode,
    DataMatrixParams,
    DataMatrixVersion,
    DecodeBarcodeType,
    DiscUsage,
    DotCodeEncodeMode,
    DotCodeParams,
    ECIEncodings,
    EnableChecksum,
    EncodeBarcodeType,
    ErrorDetails,
    FileVersions,
    FilesList,
    FilesUploadResult,
    FontMode,
    FontParams,
    FontStyle,
    GeneratorParams,
    GeneratorParamsList,
    HanXinEncodeMode,
    HanXinErrorLevel,
    HanXinParams,
    HanXinVersion,
    ITF14BorderType,
    ITFParams,
    MacroCharacter,
    MaxiCodeEncodeMode,
    MaxiCodeMode,
    MaxiCodeParams,
    ModelError,
    ObjectExist,
    Padding,
    PatchCodeParams,
    PatchFormat,
    Pdf417CompactionMode,
    Pdf417ErrorLevel,
    Pdf417MacroTerminator,
    Pdf417Params,
    PostalParams,
    PresetType,
    QREncodeMode,
    QREncodeType,
    QRErrorLevel,
    QRVersion,
    QrParams,
    ReaderParams,
    RegionPoint,
    ResultImageInfo,
    StorageExist,
    StorageFile,
    StructuredAppend,
    TextAlignment,
    FileVersion,
} from './models';

import {
    GetBarcodeGenerateRequest,
    GetBarcodeRecognizeRequest,
    PostBarcodeRecognizeFromUrlOrContentRequest,
    PostGenerateMultipleRequest,
    PutBarcodeGenerateFileRequest,
    PutBarcodeRecognizeFromBodyRequest,
    PutGenerateMultipleRequest,
    ScanBarcodeRequest,
    CopyFileRequest,
    DeleteFileRequest,
    DownloadFileRequest,
    MoveFileRequest,
    UploadFileRequest,
    CopyFolderRequest,
    CreateFolderRequest,
    DeleteFolderRequest,
    GetFilesListRequest,
    MoveFolderRequest,
    GetDiscUsageRequest,
    GetFileVersionsRequest,
    ObjectExistsRequest,
    StorageExistsRequest,
} from './models';

export * from './models';

let primitives = ['string', 'boolean', 'double', 'integer', 'long', 'float', 'number', 'any'];

class ObjectSerializer {
    public static findCorrectType(data: any, expectedType: string) {
        if (data == null) {
            return expectedType;
        }

        if (primitives.indexOf(expectedType.toLowerCase()) !== -1) {
            return expectedType;
        }

        if (expectedType === 'Date') {
            return expectedType;
        }

        if (enumsMap[expectedType]) {
            return expectedType;
        }

        if (!typeMap[expectedType]) {
            return expectedType; // w/e we don't know the type
        }

        // Check the discriminator
        let discriminatorProperty = typeMap[expectedType].discriminator;
        if (discriminatorProperty == null) {
            return expectedType; // the type does not have a discriminator. use it.
        }

        if (data[discriminatorProperty]) {
            return data[discriminatorProperty]; // use the type given in the discriminator
        }

        return expectedType; // discriminator was not present (or an empty string)
    }

    public static serialize(data: any, type: string) {
        if (data == null) {
            return data;
        }

        if (primitives.indexOf(type.toLowerCase()) !== -1) {
            return data;
        }

        if (type.lastIndexOf('Array<', 0) === 0) {
            // string.startsWith pre es6
            let subType: string = type.replace('Array<', ''); // Array<Type> => Type>
            subType = subType.substring(0, subType.length - 1); // Type> => Type
            let transformedData: any[] = [];
            for (let index in data) {
                let date = data[index];
                transformedData.push(ObjectSerializer.serialize(date, subType));
            }

            return transformedData;
        }

        if (type === 'Date') {
            return data.toString();
        }

        if (enumsMap[type]) {
            return enumsMap[type][data];
        }

        if (!typeMap[type]) {
            // in case we don't know the type
            return data;
        }

        // get the map for the correct type.
        let attributeTypes = typeMap[type].getAttributeTypeMap();
        let instance: { [index: string]: any } = {};
        for (let index in attributeTypes) {
            let attributeType = attributeTypes[index];
            instance[attributeType.baseName] = ObjectSerializer.serialize(data[attributeType.name], attributeType.type);
        }

        return instance;
    }

    public static deserialize(data: any, type: string) {
        // polymorphism may change the actual type.
        type = ObjectSerializer.findCorrectType(data, type);

        if (data == null) {
            return data;
        }

        if (primitives.indexOf(type.toLowerCase()) !== -1) {
            return data;
        }

        if (type.lastIndexOf('Array<', 0) === 0) {
            // string.startsWith pre es6
            let subType: string = type.replace('Array<', ''); // Array<Type> => Type>
            subType = subType.substring(0, subType.length - 1); // Type> => Type
            let transformedData: any[] = [];
            for (let index in data) {
                let date = data[index];
                transformedData.push(ObjectSerializer.deserialize(date, subType));
            }
            return transformedData;
        }

        if (type === 'Date') {
            return new Date(data);
        }

        if (enumsMap[type]) {
            // is Enum
            return data;
        }

        if (!typeMap[type]) {
            // don't know the type
            return data;
        }

        if (typeof data === 'string') {
            // data should be deserialized before usage
            data = JSON.parse(data);
        }

        let instance = new typeMap[type]();
        let attributeTypes = typeMap[type].getAttributeTypeMap();
        for (const attributeType of attributeTypes) {
            const key = attributeType.baseName.replace(/^(.)/, ($1: string) => {
                return $1.toLowerCase();
            });
            instance[attributeType.name] = ObjectSerializer.deserialize(data[key], attributeType.type);
        }

        return instance;
    }
}

let enumsMap: { [index: string]: any } = {
    AutoSizeMode: AutoSizeMode,
    AvailableGraphicsUnit: AvailableGraphicsUnit,
    AztecEncodeMode: AztecEncodeMode,
    AztecSymbolMode: AztecSymbolMode,
    BorderDashStyle: BorderDashStyle,
    ChecksumValidation: ChecksumValidation,
    CodabarChecksumMode: CodabarChecksumMode,
    CodabarSymbol: CodabarSymbol,
    Code128Emulation: Code128Emulation,
    Code128EncodeMode: Code128EncodeMode,
    CodeLocation: CodeLocation,
    CustomerInformationInterpretingType: CustomerInformationInterpretingType,
    DataMatrixEccType: DataMatrixEccType,
    DataMatrixEncodeMode: DataMatrixEncodeMode,
    DataMatrixVersion: DataMatrixVersion,
    DecodeBarcodeType: DecodeBarcodeType,
    DotCodeEncodeMode: DotCodeEncodeMode,
    ECIEncodings: ECIEncodings,
    EnableChecksum: EnableChecksum,
    EncodeBarcodeType: EncodeBarcodeType,
    FontMode: FontMode,
    FontStyle: FontStyle,
    HanXinEncodeMode: HanXinEncodeMode,
    HanXinErrorLevel: HanXinErrorLevel,
    HanXinVersion: HanXinVersion,
    ITF14BorderType: ITF14BorderType,
    MacroCharacter: MacroCharacter,
    MaxiCodeEncodeMode: MaxiCodeEncodeMode,
    MaxiCodeMode: MaxiCodeMode,
    PatchFormat: PatchFormat,
    Pdf417CompactionMode: Pdf417CompactionMode,
    Pdf417ErrorLevel: Pdf417ErrorLevel,
    Pdf417MacroTerminator: Pdf417MacroTerminator,
    PresetType: PresetType,
    QREncodeMode: QREncodeMode,
    QREncodeType: QREncodeType,
    QRErrorLevel: QRErrorLevel,
    QRVersion: QRVersion,
    TextAlignment: TextAlignment,
};

let typeMap: { [index: string]: any } = {
    ApiError: ApiError,
    ApiErrorResponse: ApiErrorResponse,
    AustralianPostParams: AustralianPostParams,
    AztecParams: AztecParams,
    BarcodeResponse: BarcodeResponse,
    BarcodeResponseList: BarcodeResponseList,
    CaptionParams: CaptionParams,
    CodabarParams: CodabarParams,
    CodablockParams: CodablockParams,
    Code128Params: Code128Params,
    Code16KParams: Code16KParams,
    CouponParams: CouponParams,
    DataBarParams: DataBarParams,
    DataMatrixParams: DataMatrixParams,
    DiscUsage: DiscUsage,
    DotCodeParams: DotCodeParams,
    ErrorDetails: ErrorDetails,
    FileVersions: FileVersions,
    FilesList: FilesList,
    FilesUploadResult: FilesUploadResult,
    FontParams: FontParams,
    GeneratorParams: GeneratorParams,
    GeneratorParamsList: GeneratorParamsList,
    HanXinParams: HanXinParams,
    ITFParams: ITFParams,
    MaxiCodeParams: MaxiCodeParams,
    ModelError: ModelError,
    ObjectExist: ObjectExist,
    Padding: Padding,
    PatchCodeParams: PatchCodeParams,
    Pdf417Params: Pdf417Params,
    PostalParams: PostalParams,
    QrParams: QrParams,
    ReaderParams: ReaderParams,
    RegionPoint: RegionPoint,
    ResultImageInfo: ResultImageInfo,
    StorageExist: StorageExist,
    StorageFile: StorageFile,
    StructuredAppend: StructuredAppend,
    FileVersion: FileVersion,
};

export class BarcodeApi {
    protected defaultHeaders: any = {
        'x-aspose-client': 'nodejs sdk',
        'x-aspose-client-version': '24.13.0',
    };
    protected _configuration: Configuration;
    private _client: HttpClient;

    constructor(configuration: Configuration) {
        this._configuration = configuration;
        this._client = new HttpClient();
    }

    /**
     *
     * @summary Generate barcode.
     * @param request GetBarcodeGenerateRequest
     */
    public async getBarcodeGenerate(
        request: GetBarcodeGenerateRequest
    ): Promise<{ response: HttpResponse; body: Buffer }> {
        const requestPath = this._configuration.getApiBaseUrl() + '/barcode/generate';
        let queryParameters: any = {};
        let headerParams: any = (Object as any).assign({}, this.defaultHeaders);

        // verify required parameter 'request.type' is not null or undefined
        if (request.type == null) {
            throw new Error('Required parameter request.type was null or undefined when calling getBarcodeGenerate.');
        }

        // verify required parameter 'request.text' is not null or undefined
        if (request.text == null) {
            throw new Error('Required parameter request.text was null or undefined when calling getBarcodeGenerate.');
        }

        if (request.type != null) {
            queryParameters['Type'] = ObjectSerializer.serialize(
                request.type,
                "'Codabar' | 'Code11' | 'Code39Standard' | 'Code39Extended' | 'Code93Standard' | 'Code93Extended' | 'Code128' | 'GS1Code128' | 'EAN8' | 'EAN13' | 'EAN14' | 'SCC14' | 'SSCC18' | 'UPCA' | 'UPCE' | 'ISBN' | 'ISSN' | 'ISMN' | 'Standard2of5' | 'Interleaved2of5' | 'Matrix2of5' | 'ItalianPost25' | 'IATA2of5' | 'ITF14' | 'ITF6' | 'MSI' | 'VIN' | 'DeutschePostIdentcode' | 'DeutschePostLeitcode' | 'OPC' | 'PZN' | 'Code16K' | 'Pharmacode' | 'DataMatrix' | 'QR' | 'Aztec' | 'Pdf417' | 'MacroPdf417' | 'AustraliaPost' | 'Postnet' | 'Planet' | 'OneCode' | 'RM4SCC' | 'DatabarOmniDirectional' | 'DatabarTruncated' | 'DatabarLimited' | 'DatabarExpanded' | 'SingaporePost' | 'GS1DataMatrix' | 'AustralianPosteParcel' | 'SwissPostParcel' | 'PatchCode' | 'DatabarExpandedStacked' | 'DatabarStacked' | 'DatabarStackedOmniDirectional' | 'MicroPdf417' | 'GS1QR' | 'MaxiCode' | 'Code32' | 'DataLogic2of5' | 'DotCode' | 'DutchKIX' | 'UpcaGs1Code128Coupon' | 'UpcaGs1DatabarCoupon' | 'CodablockF' | 'GS1CodablockF' | 'Mailmark' | 'GS1DotCode' | 'HanXin' | 'GS1HanXin' | 'GS1Aztec' | 'GS1MicroPdf417'"
            );
        }

        if (request.text != null) {
            queryParameters['Text'] = ObjectSerializer.serialize(request.text, 'string');
        }

        if (request.twoDDisplayText != null) {
            queryParameters['TwoDDisplayText'] = ObjectSerializer.serialize(request.twoDDisplayText, 'string');
        }

        if (request.textLocation != null) {
            queryParameters['TextLocation'] = ObjectSerializer.serialize(
                request.textLocation,
                "'Below' | 'Above' | 'None'"
            );
        }

        if (request.textAlignment != null) {
            queryParameters['TextAlignment'] = ObjectSerializer.serialize(
                request.textAlignment,
                "'Left' | 'Center' | 'Right'"
            );
        }

        if (request.textColor != null) {
            queryParameters['TextColor'] = ObjectSerializer.serialize(request.textColor, 'string');
        }

        if (request.noWrap != null) {
            queryParameters['NoWrap'] = ObjectSerializer.serialize(request.noWrap, 'boolean');
        }

        if (request.resolution != null) {
            queryParameters['Resolution'] = ObjectSerializer.serialize(request.resolution, 'number');
        }

        if (request.resolutionX != null) {
            queryParameters['ResolutionX'] = ObjectSerializer.serialize(request.resolutionX, 'number');
        }

        if (request.resolutionY != null) {
            queryParameters['ResolutionY'] = ObjectSerializer.serialize(request.resolutionY, 'number');
        }

        if (request.dimensionX != null) {
            queryParameters['DimensionX'] = ObjectSerializer.serialize(request.dimensionX, 'number');
        }

        if (request.textSpace != null) {
            queryParameters['TextSpace'] = ObjectSerializer.serialize(request.textSpace, 'number');
        }

        if (request.units != null) {
            queryParameters['Units'] = ObjectSerializer.serialize(
                request.units,
                "'Pixel' | 'Point' | 'Inch' | 'Millimeter'"
            );
        }

        if (request.sizeMode != null) {
            queryParameters['SizeMode'] = ObjectSerializer.serialize(
                request.sizeMode,
                "'None' | 'Nearest' | 'Interpolation'"
            );
        }

        if (request.barHeight != null) {
            queryParameters['BarHeight'] = ObjectSerializer.serialize(request.barHeight, 'number');
        }

        if (request.imageHeight != null) {
            queryParameters['ImageHeight'] = ObjectSerializer.serialize(request.imageHeight, 'number');
        }

        if (request.imageWidth != null) {
            queryParameters['ImageWidth'] = ObjectSerializer.serialize(request.imageWidth, 'number');
        }

        if (request.rotationAngle != null) {
            queryParameters['RotationAngle'] = ObjectSerializer.serialize(request.rotationAngle, 'number');
        }

        if (request.backColor != null) {
            queryParameters['BackColor'] = ObjectSerializer.serialize(request.backColor, 'string');
        }

        if (request.barColor != null) {
            queryParameters['BarColor'] = ObjectSerializer.serialize(request.barColor, 'string');
        }

        if (request.borderColor != null) {
            queryParameters['BorderColor'] = ObjectSerializer.serialize(request.borderColor, 'string');
        }

        if (request.borderWidth != null) {
            queryParameters['BorderWidth'] = ObjectSerializer.serialize(request.borderWidth, 'number');
        }

        if (request.borderDashStyle != null) {
            queryParameters['BorderDashStyle'] = ObjectSerializer.serialize(
                request.borderDashStyle,
                "'Solid' | 'Dash' | 'Dot' | 'DashDot' | 'DashDotDot'"
            );
        }

        if (request.borderVisible != null) {
            queryParameters['BorderVisible'] = ObjectSerializer.serialize(request.borderVisible, 'boolean');
        }

        if (request.enableChecksum != null) {
            queryParameters['EnableChecksum'] = ObjectSerializer.serialize(
                request.enableChecksum,
                "'Default' | 'Yes' | 'No'"
            );
        }

        if (request.enableEscape != null) {
            queryParameters['EnableEscape'] = ObjectSerializer.serialize(request.enableEscape, 'boolean');
        }

        if (request.filledBars != null) {
            queryParameters['FilledBars'] = ObjectSerializer.serialize(request.filledBars, 'boolean');
        }

        if (request.alwaysShowChecksum != null) {
            queryParameters['AlwaysShowChecksum'] = ObjectSerializer.serialize(request.alwaysShowChecksum, 'boolean');
        }

        if (request.wideNarrowRatio != null) {
            queryParameters['WideNarrowRatio'] = ObjectSerializer.serialize(request.wideNarrowRatio, 'number');
        }

        if (request.validateText != null) {
            queryParameters['ValidateText'] = ObjectSerializer.serialize(request.validateText, 'boolean');
        }

        if (request.supplementData != null) {
            queryParameters['SupplementData'] = ObjectSerializer.serialize(request.supplementData, 'string');
        }

        if (request.supplementSpace != null) {
            queryParameters['SupplementSpace'] = ObjectSerializer.serialize(request.supplementSpace, 'number');
        }

        if (request.barWidthReduction != null) {
            queryParameters['BarWidthReduction'] = ObjectSerializer.serialize(request.barWidthReduction, 'number');
        }

        if (request.useAntiAlias != null) {
            queryParameters['UseAntiAlias'] = ObjectSerializer.serialize(request.useAntiAlias, 'boolean');
        }

        if (request.format != null) {
            queryParameters['format'] = ObjectSerializer.serialize(request.format, 'string');
        }

        const requestOptions: HttpOptions = {
            method: 'GET',
            qs: queryParameters,
            headers: headerParams,
            uri: requestPath,
            encoding: null,
        };

        await this._configuration.authentication.applyToRequestAsync(requestOptions);

        const result: HttpResult = await this._client.requestAsync(requestOptions);

        return {
            response: result.response,
            body: ObjectSerializer.deserialize(result.body, 'Buffer'),
        };
    }

    /**
     *
     * @summary Recognize barcode from a file on server.
     * @param request GetBarcodeRecognizeRequest
     */
    public async getBarcodeRecognize(
        request: GetBarcodeRecognizeRequest
    ): Promise<{ response: HttpResponse; body: BarcodeResponseList }> {
        const requestPath =
            this._configuration.getApiBaseUrl() +
            '/barcode/{name}/recognize'.replace(
                // eslint-disable-next-line no-useless-concat
                '{' + 'name' + '}',
                String(request.name)
            );
        let queryParameters: any = {};
        let headerParams: any = (Object as any).assign({}, this.defaultHeaders);

        // verify required parameter 'request.name' is not null or undefined
        if (request.name == null) {
            throw new Error('Required parameter request.name was null or undefined when calling getBarcodeRecognize.');
        }

        if (request.type != null) {
            queryParameters['Type'] = ObjectSerializer.serialize(
                request.type,
                "'all' | 'AustraliaPost' | 'Aztec' | 'ISBN' | 'Codabar' | 'Code11' | 'Code128' | 'GS1Code128' | 'Code39Extended' | 'Code39Standard' | 'Code93Extended' | 'Code93Standard' | 'DataMatrix' | 'DeutschePostIdentcode' | 'DeutschePostLeitcode' | 'EAN13' | 'EAN14' | 'EAN8' | 'IATA2of5' | 'Interleaved2of5' | 'ISSN' | 'ISMN' | 'ItalianPost25' | 'ITF14' | 'ITF6' | 'MacroPdf417' | 'Matrix2of5' | 'MSI' | 'OneCode' | 'OPC' | 'PatchCode' | 'Pdf417' | 'MicroPdf417' | 'Planet' | 'Postnet' | 'PZN' | 'QR' | 'MicroQR' | 'RM4SCC' | 'SCC14' | 'SSCC18' | 'Standard2of5' | 'Supplement' | 'UPCA' | 'UPCE' | 'VIN' | 'Pharmacode' | 'GS1DataMatrix' | 'DatabarOmniDirectional' | 'DatabarTruncated' | 'DatabarLimited' | 'DatabarExpanded' | 'SwissPostParcel' | 'AustralianPosteParcel' | 'Code16K' | 'DatabarStackedOmniDirectional' | 'DatabarStacked' | 'DatabarExpandedStacked' | 'CompactPdf417' | 'GS1QR' | 'MaxiCode' | 'MicrE13B' | 'Code32' | 'DataLogic2of5' | 'DotCode' | 'DutchKIX' | 'CodablockF' | 'Mailmark' | 'GS1DotCode' | 'HIBCCode39LIC' | 'HIBCCode128LIC' | 'HIBCAztecLIC' | 'HIBCDataMatrixLIC' | 'HIBCQRLIC' | 'HIBCCode39PAS' | 'HIBCCode128PAS' | 'HIBCAztecPAS' | 'HIBCDataMatrixPAS' | 'HIBCQRPAS' | 'HanXin' | 'GS1HanXin' | 'GS1Aztec' | 'GS1CompositeBar' | 'GS1MicroPdf417' | 'mostCommonlyUsed'"
            );
        }

        if (request.types != null) {
            queryParameters['Types'] = ObjectSerializer.serialize(request.types, 'Array<DecodeBarcodeType>');
        }

        if (request.checksumValidation != null) {
            queryParameters['ChecksumValidation'] = ObjectSerializer.serialize(
                request.checksumValidation,
                "'Default' | 'On' | 'Off'"
            );
        }

        if (request.detectEncoding != null) {
            queryParameters['DetectEncoding'] = ObjectSerializer.serialize(request.detectEncoding, 'boolean');
        }

        if (request.preset != null) {
            queryParameters['Preset'] = ObjectSerializer.serialize(
                request.preset,
                "'HighPerformance' | 'NormalQuality' | 'HighQualityDetection' | 'MaxQualityDetection' | 'HighQuality' | 'MaxBarCodes'"
            );
        }

        if (request.rectX != null) {
            queryParameters['RectX'] = ObjectSerializer.serialize(request.rectX, 'number');
        }

        if (request.rectY != null) {
            queryParameters['RectY'] = ObjectSerializer.serialize(request.rectY, 'number');
        }

        if (request.rectWidth != null) {
            queryParameters['RectWidth'] = ObjectSerializer.serialize(request.rectWidth, 'number');
        }

        if (request.rectHeight != null) {
            queryParameters['RectHeight'] = ObjectSerializer.serialize(request.rectHeight, 'number');
        }

        if (request.stripFNC != null) {
            queryParameters['StripFNC'] = ObjectSerializer.serialize(request.stripFNC, 'boolean');
        }

        if (request.timeout != null) {
            queryParameters['Timeout'] = ObjectSerializer.serialize(request.timeout, 'number');
        }

        if (request.medianSmoothingWindowSize != null) {
            queryParameters['MedianSmoothingWindowSize'] = ObjectSerializer.serialize(
                request.medianSmoothingWindowSize,
                'number'
            );
        }

        if (request.allowMedianSmoothing != null) {
            queryParameters['AllowMedianSmoothing'] = ObjectSerializer.serialize(
                request.allowMedianSmoothing,
                'boolean'
            );
        }

        if (request.allowComplexBackground != null) {
            queryParameters['AllowComplexBackground'] = ObjectSerializer.serialize(
                request.allowComplexBackground,
                'boolean'
            );
        }

        if (request.allowDatamatrixIndustrialBarcodes != null) {
            queryParameters['AllowDatamatrixIndustrialBarcodes'] = ObjectSerializer.serialize(
                request.allowDatamatrixIndustrialBarcodes,
                'boolean'
            );
        }

        if (request.allowDecreasedImage != null) {
            queryParameters['AllowDecreasedImage'] = ObjectSerializer.serialize(request.allowDecreasedImage, 'boolean');
        }

        if (request.allowDetectScanGap != null) {
            queryParameters['AllowDetectScanGap'] = ObjectSerializer.serialize(request.allowDetectScanGap, 'boolean');
        }

        if (request.allowIncorrectBarcodes != null) {
            queryParameters['AllowIncorrectBarcodes'] = ObjectSerializer.serialize(
                request.allowIncorrectBarcodes,
                'boolean'
            );
        }

        if (request.allowInvertImage != null) {
            queryParameters['AllowInvertImage'] = ObjectSerializer.serialize(request.allowInvertImage, 'boolean');
        }

        if (request.allowMicroWhiteSpotsRemoving != null) {
            queryParameters['AllowMicroWhiteSpotsRemoving'] = ObjectSerializer.serialize(
                request.allowMicroWhiteSpotsRemoving,
                'boolean'
            );
        }

        if (request.allowOneDFastBarcodesDetector != null) {
            queryParameters['AllowOneDFastBarcodesDetector'] = ObjectSerializer.serialize(
                request.allowOneDFastBarcodesDetector,
                'boolean'
            );
        }

        if (request.allowOneDWipedBarsRestoration != null) {
            queryParameters['AllowOneDWipedBarsRestoration'] = ObjectSerializer.serialize(
                request.allowOneDWipedBarsRestoration,
                'boolean'
            );
        }

        if (request.allowQRMicroQrRestoration != null) {
            queryParameters['AllowQRMicroQrRestoration'] = ObjectSerializer.serialize(
                request.allowQRMicroQrRestoration,
                'boolean'
            );
        }

        if (request.allowRegularImage != null) {
            queryParameters['AllowRegularImage'] = ObjectSerializer.serialize(request.allowRegularImage, 'boolean');
        }

        if (request.allowSaltAndPepperFiltering != null) {
            queryParameters['AllowSaltAndPepperFiltering'] = ObjectSerializer.serialize(
                request.allowSaltAndPepperFiltering,
                'boolean'
            );
        }

        if (request.allowWhiteSpotsRemoving != null) {
            queryParameters['AllowWhiteSpotsRemoving'] = ObjectSerializer.serialize(
                request.allowWhiteSpotsRemoving,
                'boolean'
            );
        }

        if (request.checkMore1DVariants != null) {
            queryParameters['CheckMore1DVariants'] = ObjectSerializer.serialize(request.checkMore1DVariants, 'boolean');
        }

        if (request.fastScanOnly != null) {
            queryParameters['FastScanOnly'] = ObjectSerializer.serialize(request.fastScanOnly, 'boolean');
        }

        if (request.allowAdditionalRestorations != null) {
            queryParameters['AllowAdditionalRestorations'] = ObjectSerializer.serialize(
                request.allowAdditionalRestorations,
                'boolean'
            );
        }

        if (request.regionLikelihoodThresholdPercent != null) {
            queryParameters['RegionLikelihoodThresholdPercent'] = ObjectSerializer.serialize(
                request.regionLikelihoodThresholdPercent,
                'number'
            );
        }

        if (request.scanWindowSizes != null) {
            queryParameters['ScanWindowSizes'] = ObjectSerializer.serialize(request.scanWindowSizes, 'Array<number>');
        }

        if (request.similarity != null) {
            queryParameters['Similarity'] = ObjectSerializer.serialize(request.similarity, 'number');
        }

        if (request.skipDiagonalSearch != null) {
            queryParameters['SkipDiagonalSearch'] = ObjectSerializer.serialize(request.skipDiagonalSearch, 'boolean');
        }

        if (request.readTinyBarcodes != null) {
            queryParameters['ReadTinyBarcodes'] = ObjectSerializer.serialize(request.readTinyBarcodes, 'boolean');
        }

        if (request.australianPostEncodingTable != null) {
            queryParameters['AustralianPostEncodingTable'] = ObjectSerializer.serialize(
                request.australianPostEncodingTable,
                "'CTable' | 'NTable' | 'Other'"
            );
        }

        if (request.ignoreEndingFillingPatternsForCTable != null) {
            queryParameters['IgnoreEndingFillingPatternsForCTable'] = ObjectSerializer.serialize(
                request.ignoreEndingFillingPatternsForCTable,
                'boolean'
            );
        }

        if (request.storage != null) {
            queryParameters['storage'] = ObjectSerializer.serialize(request.storage, 'string');
        }

        if (request.folder != null) {
            queryParameters['folder'] = ObjectSerializer.serialize(request.folder, 'string');
        }

        const requestOptions: HttpOptions = {
            method: 'GET',
            qs: queryParameters,
            headers: headerParams,
            uri: requestPath,
        };

        await this._configuration.authentication.applyToRequestAsync(requestOptions);

        const result: HttpResult = await this._client.requestAsync(requestOptions);

        return {
            response: result.response,
            body: ObjectSerializer.deserialize(result.body, 'BarcodeResponseList'),
        };
    }

    /**
     *
     * @summary Recognize barcode from an url or from request body. Request body can contain raw data bytes of the image with content-type \"application/octet-stream\". An image can also be passed as a form field.
     * @param request PostBarcodeRecognizeFromUrlOrContentRequest
     */
    public async postBarcodeRecognizeFromUrlOrContent(
        request: PostBarcodeRecognizeFromUrlOrContentRequest
    ): Promise<{ response: HttpResponse; body: BarcodeResponseList }> {
        const requestPath = this._configuration.getApiBaseUrl() + '/barcode/recognize';
        let queryParameters: any = {};
        let headerParams: any = (Object as any).assign({}, this.defaultHeaders);
        const formParams: FormParamsType = [];
        const fileToUpload = request.image == null ? null : new FormFile('image', 'image.png', request.image);

        if (request.type != null) {
            queryParameters['Type'] = ObjectSerializer.serialize(
                request.type,
                "'all' | 'AustraliaPost' | 'Aztec' | 'ISBN' | 'Codabar' | 'Code11' | 'Code128' | 'GS1Code128' | 'Code39Extended' | 'Code39Standard' | 'Code93Extended' | 'Code93Standard' | 'DataMatrix' | 'DeutschePostIdentcode' | 'DeutschePostLeitcode' | 'EAN13' | 'EAN14' | 'EAN8' | 'IATA2of5' | 'Interleaved2of5' | 'ISSN' | 'ISMN' | 'ItalianPost25' | 'ITF14' | 'ITF6' | 'MacroPdf417' | 'Matrix2of5' | 'MSI' | 'OneCode' | 'OPC' | 'PatchCode' | 'Pdf417' | 'MicroPdf417' | 'Planet' | 'Postnet' | 'PZN' | 'QR' | 'MicroQR' | 'RM4SCC' | 'SCC14' | 'SSCC18' | 'Standard2of5' | 'Supplement' | 'UPCA' | 'UPCE' | 'VIN' | 'Pharmacode' | 'GS1DataMatrix' | 'DatabarOmniDirectional' | 'DatabarTruncated' | 'DatabarLimited' | 'DatabarExpanded' | 'SwissPostParcel' | 'AustralianPosteParcel' | 'Code16K' | 'DatabarStackedOmniDirectional' | 'DatabarStacked' | 'DatabarExpandedStacked' | 'CompactPdf417' | 'GS1QR' | 'MaxiCode' | 'MicrE13B' | 'Code32' | 'DataLogic2of5' | 'DotCode' | 'DutchKIX' | 'CodablockF' | 'Mailmark' | 'GS1DotCode' | 'HIBCCode39LIC' | 'HIBCCode128LIC' | 'HIBCAztecLIC' | 'HIBCDataMatrixLIC' | 'HIBCQRLIC' | 'HIBCCode39PAS' | 'HIBCCode128PAS' | 'HIBCAztecPAS' | 'HIBCDataMatrixPAS' | 'HIBCQRPAS' | 'HanXin' | 'GS1HanXin' | 'GS1Aztec' | 'GS1CompositeBar' | 'GS1MicroPdf417' | 'mostCommonlyUsed'"
            );
        }

        if (request.types != null) {
            queryParameters['Types'] = ObjectSerializer.serialize(request.types, 'Array<DecodeBarcodeType>');
        }

        if (request.checksumValidation != null) {
            queryParameters['ChecksumValidation'] = ObjectSerializer.serialize(
                request.checksumValidation,
                "'Default' | 'On' | 'Off'"
            );
        }

        if (request.detectEncoding != null) {
            queryParameters['DetectEncoding'] = ObjectSerializer.serialize(request.detectEncoding, 'boolean');
        }

        if (request.preset != null) {
            queryParameters['Preset'] = ObjectSerializer.serialize(
                request.preset,
                "'HighPerformance' | 'NormalQuality' | 'HighQualityDetection' | 'MaxQualityDetection' | 'HighQuality' | 'MaxBarCodes'"
            );
        }

        if (request.rectX != null) {
            queryParameters['RectX'] = ObjectSerializer.serialize(request.rectX, 'number');
        }

        if (request.rectY != null) {
            queryParameters['RectY'] = ObjectSerializer.serialize(request.rectY, 'number');
        }

        if (request.rectWidth != null) {
            queryParameters['RectWidth'] = ObjectSerializer.serialize(request.rectWidth, 'number');
        }

        if (request.rectHeight != null) {
            queryParameters['RectHeight'] = ObjectSerializer.serialize(request.rectHeight, 'number');
        }

        if (request.stripFNC != null) {
            queryParameters['StripFNC'] = ObjectSerializer.serialize(request.stripFNC, 'boolean');
        }

        if (request.timeout != null) {
            queryParameters['Timeout'] = ObjectSerializer.serialize(request.timeout, 'number');
        }

        if (request.medianSmoothingWindowSize != null) {
            queryParameters['MedianSmoothingWindowSize'] = ObjectSerializer.serialize(
                request.medianSmoothingWindowSize,
                'number'
            );
        }

        if (request.allowMedianSmoothing != null) {
            queryParameters['AllowMedianSmoothing'] = ObjectSerializer.serialize(
                request.allowMedianSmoothing,
                'boolean'
            );
        }

        if (request.allowComplexBackground != null) {
            queryParameters['AllowComplexBackground'] = ObjectSerializer.serialize(
                request.allowComplexBackground,
                'boolean'
            );
        }

        if (request.allowDatamatrixIndustrialBarcodes != null) {
            queryParameters['AllowDatamatrixIndustrialBarcodes'] = ObjectSerializer.serialize(
                request.allowDatamatrixIndustrialBarcodes,
                'boolean'
            );
        }

        if (request.allowDecreasedImage != null) {
            queryParameters['AllowDecreasedImage'] = ObjectSerializer.serialize(request.allowDecreasedImage, 'boolean');
        }

        if (request.allowDetectScanGap != null) {
            queryParameters['AllowDetectScanGap'] = ObjectSerializer.serialize(request.allowDetectScanGap, 'boolean');
        }

        if (request.allowIncorrectBarcodes != null) {
            queryParameters['AllowIncorrectBarcodes'] = ObjectSerializer.serialize(
                request.allowIncorrectBarcodes,
                'boolean'
            );
        }

        if (request.allowInvertImage != null) {
            queryParameters['AllowInvertImage'] = ObjectSerializer.serialize(request.allowInvertImage, 'boolean');
        }

        if (request.allowMicroWhiteSpotsRemoving != null) {
            queryParameters['AllowMicroWhiteSpotsRemoving'] = ObjectSerializer.serialize(
                request.allowMicroWhiteSpotsRemoving,
                'boolean'
            );
        }

        if (request.allowOneDFastBarcodesDetector != null) {
            queryParameters['AllowOneDFastBarcodesDetector'] = ObjectSerializer.serialize(
                request.allowOneDFastBarcodesDetector,
                'boolean'
            );
        }

        if (request.allowOneDWipedBarsRestoration != null) {
            queryParameters['AllowOneDWipedBarsRestoration'] = ObjectSerializer.serialize(
                request.allowOneDWipedBarsRestoration,
                'boolean'
            );
        }

        if (request.allowQRMicroQrRestoration != null) {
            queryParameters['AllowQRMicroQrRestoration'] = ObjectSerializer.serialize(
                request.allowQRMicroQrRestoration,
                'boolean'
            );
        }

        if (request.allowRegularImage != null) {
            queryParameters['AllowRegularImage'] = ObjectSerializer.serialize(request.allowRegularImage, 'boolean');
        }

        if (request.allowSaltAndPepperFiltering != null) {
            queryParameters['AllowSaltAndPepperFiltering'] = ObjectSerializer.serialize(
                request.allowSaltAndPepperFiltering,
                'boolean'
            );
        }

        if (request.allowWhiteSpotsRemoving != null) {
            queryParameters['AllowWhiteSpotsRemoving'] = ObjectSerializer.serialize(
                request.allowWhiteSpotsRemoving,
                'boolean'
            );
        }

        if (request.checkMore1DVariants != null) {
            queryParameters['CheckMore1DVariants'] = ObjectSerializer.serialize(request.checkMore1DVariants, 'boolean');
        }

        if (request.fastScanOnly != null) {
            queryParameters['FastScanOnly'] = ObjectSerializer.serialize(request.fastScanOnly, 'boolean');
        }

        if (request.allowAdditionalRestorations != null) {
            queryParameters['AllowAdditionalRestorations'] = ObjectSerializer.serialize(
                request.allowAdditionalRestorations,
                'boolean'
            );
        }

        if (request.regionLikelihoodThresholdPercent != null) {
            queryParameters['RegionLikelihoodThresholdPercent'] = ObjectSerializer.serialize(
                request.regionLikelihoodThresholdPercent,
                'number'
            );
        }

        if (request.scanWindowSizes != null) {
            queryParameters['ScanWindowSizes'] = ObjectSerializer.serialize(request.scanWindowSizes, 'Array<number>');
        }

        if (request.similarity != null) {
            queryParameters['Similarity'] = ObjectSerializer.serialize(request.similarity, 'number');
        }

        if (request.skipDiagonalSearch != null) {
            queryParameters['SkipDiagonalSearch'] = ObjectSerializer.serialize(request.skipDiagonalSearch, 'boolean');
        }

        if (request.readTinyBarcodes != null) {
            queryParameters['ReadTinyBarcodes'] = ObjectSerializer.serialize(request.readTinyBarcodes, 'boolean');
        }

        if (request.australianPostEncodingTable != null) {
            queryParameters['AustralianPostEncodingTable'] = ObjectSerializer.serialize(
                request.australianPostEncodingTable,
                "'CTable' | 'NTable' | 'Other'"
            );
        }

        if (request.ignoreEndingFillingPatternsForCTable != null) {
            queryParameters['IgnoreEndingFillingPatternsForCTable'] = ObjectSerializer.serialize(
                request.ignoreEndingFillingPatternsForCTable,
                'boolean'
            );
        }

        if (request.url != null) {
            queryParameters['url'] = ObjectSerializer.serialize(request.url, 'string');
        }

        const requestOptions: HttpOptions = {
            method: 'POST',
            qs: queryParameters,
            headers: headerParams,
            uri: requestPath,
        };
        const multipartForm = new Multipart(formParams, fileToUpload == null ? [] : [fileToUpload]);
        requestOptions.body = multipartForm.body;
        requestOptions.headers = { ...requestOptions.headers, ...multipartForm.headers };

        await this._configuration.authentication.applyToRequestAsync(requestOptions);

        const result: HttpResult = await this._client.requestAsync(requestOptions);

        return {
            response: result.response,
            body: ObjectSerializer.deserialize(result.body, 'BarcodeResponseList'),
        };
    }

    /**
     *
     * @summary Generate multiple barcodes and return in response stream
     * @param request PostGenerateMultipleRequest
     */
    public async postGenerateMultiple(
        request: PostGenerateMultipleRequest
    ): Promise<{ response: HttpResponse; body: Buffer }> {
        const requestPath = this._configuration.getApiBaseUrl() + '/barcode/generateMultiple';
        let queryParameters: any = {};
        let headerParams: any = (Object as any).assign({}, this.defaultHeaders);

        // verify required parameter 'request.generatorParamsList' is not null or undefined
        if (request.generatorParamsList == null) {
            throw new Error(
                'Required parameter request.generatorParamsList was null or undefined when calling postGenerateMultiple.'
            );
        }

        if (request.format != null) {
            queryParameters['format'] = ObjectSerializer.serialize(request.format, 'string');
        }

        const requestOptions: HttpOptions = {
            method: 'POST',
            qs: queryParameters,
            headers: headerParams,
            uri: requestPath,
            body: ObjectSerializer.serialize(request.generatorParamsList, 'GeneratorParamsList'),
            json: true,
            encoding: null,
        };

        await this._configuration.authentication.applyToRequestAsync(requestOptions);

        const result: HttpResult = await this._client.requestAsync(requestOptions);

        return {
            response: result.response,
            body: ObjectSerializer.deserialize(result.body, 'Buffer'),
        };
    }

    /**
     *
     * @summary Generate barcode and save on server (from query params or from file with json or xml content)
     * @param request PutBarcodeGenerateFileRequest
     */
    public async putBarcodeGenerateFile(
        request: PutBarcodeGenerateFileRequest
    ): Promise<{ response: HttpResponse; body: ResultImageInfo }> {
        const requestPath =
            this._configuration.getApiBaseUrl() +
            '/barcode/{name}/generate'.replace(
                // eslint-disable-next-line no-useless-concat
                '{' + 'name' + '}',
                String(request.name)
            );
        let queryParameters: any = {};
        let headerParams: any = (Object as any).assign({}, this.defaultHeaders);

        // verify required parameter 'request.name' is not null or undefined
        if (request.name == null) {
            throw new Error(
                'Required parameter request.name was null or undefined when calling putBarcodeGenerateFile.'
            );
        }

        // verify required parameter 'request.type' is not null or undefined
        if (request.type == null) {
            throw new Error(
                'Required parameter request.type was null or undefined when calling putBarcodeGenerateFile.'
            );
        }

        // verify required parameter 'request.text' is not null or undefined
        if (request.text == null) {
            throw new Error(
                'Required parameter request.text was null or undefined when calling putBarcodeGenerateFile.'
            );
        }

        if (request.type != null) {
            queryParameters['Type'] = ObjectSerializer.serialize(
                request.type,
                "'Codabar' | 'Code11' | 'Code39Standard' | 'Code39Extended' | 'Code93Standard' | 'Code93Extended' | 'Code128' | 'GS1Code128' | 'EAN8' | 'EAN13' | 'EAN14' | 'SCC14' | 'SSCC18' | 'UPCA' | 'UPCE' | 'ISBN' | 'ISSN' | 'ISMN' | 'Standard2of5' | 'Interleaved2of5' | 'Matrix2of5' | 'ItalianPost25' | 'IATA2of5' | 'ITF14' | 'ITF6' | 'MSI' | 'VIN' | 'DeutschePostIdentcode' | 'DeutschePostLeitcode' | 'OPC' | 'PZN' | 'Code16K' | 'Pharmacode' | 'DataMatrix' | 'QR' | 'Aztec' | 'Pdf417' | 'MacroPdf417' | 'AustraliaPost' | 'Postnet' | 'Planet' | 'OneCode' | 'RM4SCC' | 'DatabarOmniDirectional' | 'DatabarTruncated' | 'DatabarLimited' | 'DatabarExpanded' | 'SingaporePost' | 'GS1DataMatrix' | 'AustralianPosteParcel' | 'SwissPostParcel' | 'PatchCode' | 'DatabarExpandedStacked' | 'DatabarStacked' | 'DatabarStackedOmniDirectional' | 'MicroPdf417' | 'GS1QR' | 'MaxiCode' | 'Code32' | 'DataLogic2of5' | 'DotCode' | 'DutchKIX' | 'UpcaGs1Code128Coupon' | 'UpcaGs1DatabarCoupon' | 'CodablockF' | 'GS1CodablockF' | 'Mailmark' | 'GS1DotCode' | 'HanXin' | 'GS1HanXin' | 'GS1Aztec' | 'GS1MicroPdf417'"
            );
        }

        if (request.text != null) {
            queryParameters['Text'] = ObjectSerializer.serialize(request.text, 'string');
        }

        if (request.twoDDisplayText != null) {
            queryParameters['TwoDDisplayText'] = ObjectSerializer.serialize(request.twoDDisplayText, 'string');
        }

        if (request.textLocation != null) {
            queryParameters['TextLocation'] = ObjectSerializer.serialize(
                request.textLocation,
                "'Below' | 'Above' | 'None'"
            );
        }

        if (request.textAlignment != null) {
            queryParameters['TextAlignment'] = ObjectSerializer.serialize(
                request.textAlignment,
                "'Left' | 'Center' | 'Right'"
            );
        }

        if (request.textColor != null) {
            queryParameters['TextColor'] = ObjectSerializer.serialize(request.textColor, 'string');
        }

        if (request.noWrap != null) {
            queryParameters['NoWrap'] = ObjectSerializer.serialize(request.noWrap, 'boolean');
        }

        if (request.resolution != null) {
            queryParameters['Resolution'] = ObjectSerializer.serialize(request.resolution, 'number');
        }

        if (request.resolutionX != null) {
            queryParameters['ResolutionX'] = ObjectSerializer.serialize(request.resolutionX, 'number');
        }

        if (request.resolutionY != null) {
            queryParameters['ResolutionY'] = ObjectSerializer.serialize(request.resolutionY, 'number');
        }

        if (request.dimensionX != null) {
            queryParameters['DimensionX'] = ObjectSerializer.serialize(request.dimensionX, 'number');
        }

        if (request.textSpace != null) {
            queryParameters['TextSpace'] = ObjectSerializer.serialize(request.textSpace, 'number');
        }

        if (request.units != null) {
            queryParameters['Units'] = ObjectSerializer.serialize(
                request.units,
                "'Pixel' | 'Point' | 'Inch' | 'Millimeter'"
            );
        }

        if (request.sizeMode != null) {
            queryParameters['SizeMode'] = ObjectSerializer.serialize(
                request.sizeMode,
                "'None' | 'Nearest' | 'Interpolation'"
            );
        }

        if (request.barHeight != null) {
            queryParameters['BarHeight'] = ObjectSerializer.serialize(request.barHeight, 'number');
        }

        if (request.imageHeight != null) {
            queryParameters['ImageHeight'] = ObjectSerializer.serialize(request.imageHeight, 'number');
        }

        if (request.imageWidth != null) {
            queryParameters['ImageWidth'] = ObjectSerializer.serialize(request.imageWidth, 'number');
        }

        if (request.rotationAngle != null) {
            queryParameters['RotationAngle'] = ObjectSerializer.serialize(request.rotationAngle, 'number');
        }

        if (request.backColor != null) {
            queryParameters['BackColor'] = ObjectSerializer.serialize(request.backColor, 'string');
        }

        if (request.barColor != null) {
            queryParameters['BarColor'] = ObjectSerializer.serialize(request.barColor, 'string');
        }

        if (request.borderColor != null) {
            queryParameters['BorderColor'] = ObjectSerializer.serialize(request.borderColor, 'string');
        }

        if (request.borderWidth != null) {
            queryParameters['BorderWidth'] = ObjectSerializer.serialize(request.borderWidth, 'number');
        }

        if (request.borderDashStyle != null) {
            queryParameters['BorderDashStyle'] = ObjectSerializer.serialize(
                request.borderDashStyle,
                "'Solid' | 'Dash' | 'Dot' | 'DashDot' | 'DashDotDot'"
            );
        }

        if (request.borderVisible != null) {
            queryParameters['BorderVisible'] = ObjectSerializer.serialize(request.borderVisible, 'boolean');
        }

        if (request.enableChecksum != null) {
            queryParameters['EnableChecksum'] = ObjectSerializer.serialize(
                request.enableChecksum,
                "'Default' | 'Yes' | 'No'"
            );
        }

        if (request.enableEscape != null) {
            queryParameters['EnableEscape'] = ObjectSerializer.serialize(request.enableEscape, 'boolean');
        }

        if (request.filledBars != null) {
            queryParameters['FilledBars'] = ObjectSerializer.serialize(request.filledBars, 'boolean');
        }

        if (request.alwaysShowChecksum != null) {
            queryParameters['AlwaysShowChecksum'] = ObjectSerializer.serialize(request.alwaysShowChecksum, 'boolean');
        }

        if (request.wideNarrowRatio != null) {
            queryParameters['WideNarrowRatio'] = ObjectSerializer.serialize(request.wideNarrowRatio, 'number');
        }

        if (request.validateText != null) {
            queryParameters['ValidateText'] = ObjectSerializer.serialize(request.validateText, 'boolean');
        }

        if (request.supplementData != null) {
            queryParameters['SupplementData'] = ObjectSerializer.serialize(request.supplementData, 'string');
        }

        if (request.supplementSpace != null) {
            queryParameters['SupplementSpace'] = ObjectSerializer.serialize(request.supplementSpace, 'number');
        }

        if (request.barWidthReduction != null) {
            queryParameters['BarWidthReduction'] = ObjectSerializer.serialize(request.barWidthReduction, 'number');
        }

        if (request.useAntiAlias != null) {
            queryParameters['UseAntiAlias'] = ObjectSerializer.serialize(request.useAntiAlias, 'boolean');
        }

        if (request.storage != null) {
            queryParameters['storage'] = ObjectSerializer.serialize(request.storage, 'string');
        }

        if (request.folder != null) {
            queryParameters['folder'] = ObjectSerializer.serialize(request.folder, 'string');
        }

        if (request.format != null) {
            queryParameters['format'] = ObjectSerializer.serialize(request.format, 'string');
        }

        const requestOptions: HttpOptions = {
            method: 'PUT',
            qs: queryParameters,
            headers: headerParams,
            uri: requestPath,
        };

        await this._configuration.authentication.applyToRequestAsync(requestOptions);

        const result: HttpResult = await this._client.requestAsync(requestOptions);

        return {
            response: result.response,
            body: ObjectSerializer.deserialize(result.body, 'ResultImageInfo'),
        };
    }

    /**
     *
     * @summary Recognition of a barcode from file on server with parameters in body.
     * @param request PutBarcodeRecognizeFromBodyRequest
     */
    public async putBarcodeRecognizeFromBody(
        request: PutBarcodeRecognizeFromBodyRequest
    ): Promise<{ response: HttpResponse; body: BarcodeResponseList }> {
        const requestPath =
            this._configuration.getApiBaseUrl() +
            '/barcode/{name}/recognize'.replace(
                // eslint-disable-next-line no-useless-concat
                '{' + 'name' + '}',
                String(request.name)
            );
        let queryParameters: any = {};
        let headerParams: any = (Object as any).assign({}, this.defaultHeaders);

        // verify required parameter 'request.name' is not null or undefined
        if (request.name == null) {
            throw new Error(
                'Required parameter request.name was null or undefined when calling putBarcodeRecognizeFromBody.'
            );
        }

        // verify required parameter 'request.readerParams' is not null or undefined
        if (request.readerParams == null) {
            throw new Error(
                'Required parameter request.readerParams was null or undefined when calling putBarcodeRecognizeFromBody.'
            );
        }

        if (request.type != null) {
            queryParameters['type'] = ObjectSerializer.serialize(
                request.type,
                "'all' | 'AustraliaPost' | 'Aztec' | 'ISBN' | 'Codabar' | 'Code11' | 'Code128' | 'GS1Code128' | 'Code39Extended' | 'Code39Standard' | 'Code93Extended' | 'Code93Standard' | 'DataMatrix' | 'DeutschePostIdentcode' | 'DeutschePostLeitcode' | 'EAN13' | 'EAN14' | 'EAN8' | 'IATA2of5' | 'Interleaved2of5' | 'ISSN' | 'ISMN' | 'ItalianPost25' | 'ITF14' | 'ITF6' | 'MacroPdf417' | 'Matrix2of5' | 'MSI' | 'OneCode' | 'OPC' | 'PatchCode' | 'Pdf417' | 'MicroPdf417' | 'Planet' | 'Postnet' | 'PZN' | 'QR' | 'MicroQR' | 'RM4SCC' | 'SCC14' | 'SSCC18' | 'Standard2of5' | 'Supplement' | 'UPCA' | 'UPCE' | 'VIN' | 'Pharmacode' | 'GS1DataMatrix' | 'DatabarOmniDirectional' | 'DatabarTruncated' | 'DatabarLimited' | 'DatabarExpanded' | 'SwissPostParcel' | 'AustralianPosteParcel' | 'Code16K' | 'DatabarStackedOmniDirectional' | 'DatabarStacked' | 'DatabarExpandedStacked' | 'CompactPdf417' | 'GS1QR' | 'MaxiCode' | 'MicrE13B' | 'Code32' | 'DataLogic2of5' | 'DotCode' | 'DutchKIX' | 'CodablockF' | 'Mailmark' | 'GS1DotCode' | 'HIBCCode39LIC' | 'HIBCCode128LIC' | 'HIBCAztecLIC' | 'HIBCDataMatrixLIC' | 'HIBCQRLIC' | 'HIBCCode39PAS' | 'HIBCCode128PAS' | 'HIBCAztecPAS' | 'HIBCDataMatrixPAS' | 'HIBCQRPAS' | 'HanXin' | 'GS1HanXin' | 'GS1Aztec' | 'GS1CompositeBar' | 'GS1MicroPdf417' | 'mostCommonlyUsed'"
            );
        }

        if (request.storage != null) {
            queryParameters['storage'] = ObjectSerializer.serialize(request.storage, 'string');
        }

        if (request.folder != null) {
            queryParameters['folder'] = ObjectSerializer.serialize(request.folder, 'string');
        }

        const requestOptions: HttpOptions = {
            method: 'PUT',
            qs: queryParameters,
            headers: headerParams,
            uri: requestPath,
            body: ObjectSerializer.serialize(request.readerParams, 'ReaderParams'),
            json: true,
        };

        await this._configuration.authentication.applyToRequestAsync(requestOptions);

        const result: HttpResult = await this._client.requestAsync(requestOptions);

        return {
            response: result.response,
            body: ObjectSerializer.deserialize(result.body, 'BarcodeResponseList'),
        };
    }

    /**
     *
     * @summary Generate image with multiple barcodes and put new file on server
     * @param request PutGenerateMultipleRequest
     */
    public async putGenerateMultiple(
        request: PutGenerateMultipleRequest
    ): Promise<{ response: HttpResponse; body: ResultImageInfo }> {
        const requestPath =
            this._configuration.getApiBaseUrl() +
            '/barcode/{name}/generateMultiple'.replace(
                // eslint-disable-next-line no-useless-concat
                '{' + 'name' + '}',
                String(request.name)
            );
        let queryParameters: any = {};
        let headerParams: any = (Object as any).assign({}, this.defaultHeaders);

        // verify required parameter 'request.name' is not null or undefined
        if (request.name == null) {
            throw new Error('Required parameter request.name was null or undefined when calling putGenerateMultiple.');
        }

        // verify required parameter 'request.generatorParamsList' is not null or undefined
        if (request.generatorParamsList == null) {
            throw new Error(
                'Required parameter request.generatorParamsList was null or undefined when calling putGenerateMultiple.'
            );
        }

        if (request.format != null) {
            queryParameters['format'] = ObjectSerializer.serialize(request.format, 'string');
        }

        if (request.folder != null) {
            queryParameters['folder'] = ObjectSerializer.serialize(request.folder, 'string');
        }

        if (request.storage != null) {
            queryParameters['storage'] = ObjectSerializer.serialize(request.storage, 'string');
        }

        const requestOptions: HttpOptions = {
            method: 'PUT',
            qs: queryParameters,
            headers: headerParams,
            uri: requestPath,
            body: ObjectSerializer.serialize(request.generatorParamsList, 'GeneratorParamsList'),
            json: true,
        };

        await this._configuration.authentication.applyToRequestAsync(requestOptions);

        const result: HttpResult = await this._client.requestAsync(requestOptions);

        return {
            response: result.response,
            body: ObjectSerializer.deserialize(result.body, 'ResultImageInfo'),
        };
    }

    /**
     *
     * @summary Quickly scan a barcode from an image.
     * @param request ScanBarcodeRequest
     */
    public async scanBarcode(
        request: ScanBarcodeRequest
    ): Promise<{ response: HttpResponse; body: BarcodeResponseList }> {
        const requestPath = this._configuration.getApiBaseUrl() + '/barcode/scan';
        let queryParameters: any = {};
        let headerParams: any = (Object as any).assign({}, this.defaultHeaders);
        const formParams: FormParamsType = [];
        const fileToUpload =
            request.imageFile == null ? null : new FormFile('imageFile', 'imageFile.png', request.imageFile);

        // verify required parameter 'request.imageFile' is not null or undefined
        if (request.imageFile == null) {
            throw new Error('Required parameter request.imageFile was null or undefined when calling scanBarcode.');
        }

        if (request.decodeTypes != null) {
            for (const oneParam of request.decodeTypes) {
                formParams.push(['decodeTypes', ObjectSerializer.serialize(oneParam, 'DecodeBarcodeType')]);
            }
        }

        if (request.timeout != null) {
            formParams.push(['timeout', ObjectSerializer.serialize(request.timeout, 'number')]);
        }

        if (request.checksumValidation != null) {
            formParams.push(['checksumValidation', ObjectSerializer.serialize(request.checksumValidation, 'string')]);
        }

        const requestOptions: HttpOptions = {
            method: 'POST',
            qs: queryParameters,
            headers: headerParams,
            uri: requestPath,
        };
        const multipartForm = new Multipart(formParams, fileToUpload == null ? [] : [fileToUpload]);
        requestOptions.body = multipartForm.body;
        requestOptions.headers = { ...requestOptions.headers, ...multipartForm.headers };

        await this._configuration.authentication.applyToRequestAsync(requestOptions);

        const result: HttpResult = await this._client.requestAsync(requestOptions);

        return {
            response: result.response,
            body: ObjectSerializer.deserialize(result.body, 'BarcodeResponseList'),
        };
    }
}

export class FileApi {
    protected defaultHeaders: any = {
        'x-aspose-client': 'nodejs sdk',
        'x-aspose-client-version': '24.13.0',
    };
    protected _configuration: Configuration;
    private _client: HttpClient;

    constructor(configuration: Configuration) {
        this._configuration = configuration;
        this._client = new HttpClient();
    }

    /**
     *
     * @summary Copy file
     * @param request CopyFileRequest
     */
    public async copyFile(request: CopyFileRequest): Promise<{ response: HttpResponse; body?: any }> {
        const requestPath =
            this._configuration.getApiBaseUrl() +
            '/barcode/storage/file/copy/{srcPath}'.replace(
                // eslint-disable-next-line no-useless-concat
                '{' + 'srcPath' + '}',
                String(request.srcPath)
            );
        let queryParameters: any = {};
        let headerParams: any = (Object as any).assign({}, this.defaultHeaders);

        // verify required parameter 'request.srcPath' is not null or undefined
        if (request.srcPath == null) {
            throw new Error('Required parameter request.srcPath was null or undefined when calling copyFile.');
        }

        // verify required parameter 'request.destPath' is not null or undefined
        if (request.destPath == null) {
            throw new Error('Required parameter request.destPath was null or undefined when calling copyFile.');
        }

        if (request.destPath != null) {
            queryParameters['destPath'] = ObjectSerializer.serialize(request.destPath, 'string');
        }

        if (request.srcStorageName != null) {
            queryParameters['srcStorageName'] = ObjectSerializer.serialize(request.srcStorageName, 'string');
        }

        if (request.destStorageName != null) {
            queryParameters['destStorageName'] = ObjectSerializer.serialize(request.destStorageName, 'string');
        }

        if (request.versionId != null) {
            queryParameters['versionId'] = ObjectSerializer.serialize(request.versionId, 'string');
        }

        const requestOptions: HttpOptions = {
            method: 'PUT',
            qs: queryParameters,
            headers: headerParams,
            uri: requestPath,
        };

        await this._configuration.authentication.applyToRequestAsync(requestOptions);

        const result: HttpResult = await this._client.requestAsync(requestOptions);

        return result;
    }

    /**
     *
     * @summary Delete file
     * @param request DeleteFileRequest
     */
    public async deleteFile(request: DeleteFileRequest): Promise<{ response: HttpResponse; body?: any }> {
        const requestPath =
            this._configuration.getApiBaseUrl() +
            '/barcode/storage/file/{path}'.replace(
                // eslint-disable-next-line no-useless-concat
                '{' + 'path' + '}',
                String(request.path)
            );
        let queryParameters: any = {};
        let headerParams: any = (Object as any).assign({}, this.defaultHeaders);

        // verify required parameter 'request.path' is not null or undefined
        if (request.path == null) {
            throw new Error('Required parameter request.path was null or undefined when calling deleteFile.');
        }

        if (request.storageName != null) {
            queryParameters['storageName'] = ObjectSerializer.serialize(request.storageName, 'string');
        }

        if (request.versionId != null) {
            queryParameters['versionId'] = ObjectSerializer.serialize(request.versionId, 'string');
        }

        const requestOptions: HttpOptions = {
            method: 'DELETE',
            qs: queryParameters,
            headers: headerParams,
            uri: requestPath,
        };

        await this._configuration.authentication.applyToRequestAsync(requestOptions);

        const result: HttpResult = await this._client.requestAsync(requestOptions);

        return result;
    }

    /**
     *
     * @summary Download file
     * @param request DownloadFileRequest
     */
    public async downloadFile(request: DownloadFileRequest): Promise<{ response: HttpResponse; body: Buffer }> {
        const requestPath =
            this._configuration.getApiBaseUrl() +
            '/barcode/storage/file/{path}'.replace(
                // eslint-disable-next-line no-useless-concat
                '{' + 'path' + '}',
                String(request.path)
            );
        let queryParameters: any = {};
        let headerParams: any = (Object as any).assign({}, this.defaultHeaders);

        // verify required parameter 'request.path' is not null or undefined
        if (request.path == null) {
            throw new Error('Required parameter request.path was null or undefined when calling downloadFile.');
        }

        if (request.storageName != null) {
            queryParameters['storageName'] = ObjectSerializer.serialize(request.storageName, 'string');
        }

        if (request.versionId != null) {
            queryParameters['versionId'] = ObjectSerializer.serialize(request.versionId, 'string');
        }

        const requestOptions: HttpOptions = {
            method: 'GET',
            qs: queryParameters,
            headers: headerParams,
            uri: requestPath,
            encoding: null,
        };

        await this._configuration.authentication.applyToRequestAsync(requestOptions);

        const result: HttpResult = await this._client.requestAsync(requestOptions);

        return {
            response: result.response,
            body: ObjectSerializer.deserialize(result.body, 'Buffer'),
        };
    }

    /**
     *
     * @summary Move file
     * @param request MoveFileRequest
     */
    public async moveFile(request: MoveFileRequest): Promise<{ response: HttpResponse; body?: any }> {
        const requestPath =
            this._configuration.getApiBaseUrl() +
            '/barcode/storage/file/move/{srcPath}'.replace(
                // eslint-disable-next-line no-useless-concat
                '{' + 'srcPath' + '}',
                String(request.srcPath)
            );
        let queryParameters: any = {};
        let headerParams: any = (Object as any).assign({}, this.defaultHeaders);

        // verify required parameter 'request.srcPath' is not null or undefined
        if (request.srcPath == null) {
            throw new Error('Required parameter request.srcPath was null or undefined when calling moveFile.');
        }

        // verify required parameter 'request.destPath' is not null or undefined
        if (request.destPath == null) {
            throw new Error('Required parameter request.destPath was null or undefined when calling moveFile.');
        }

        if (request.destPath != null) {
            queryParameters['destPath'] = ObjectSerializer.serialize(request.destPath, 'string');
        }

        if (request.srcStorageName != null) {
            queryParameters['srcStorageName'] = ObjectSerializer.serialize(request.srcStorageName, 'string');
        }

        if (request.destStorageName != null) {
            queryParameters['destStorageName'] = ObjectSerializer.serialize(request.destStorageName, 'string');
        }

        if (request.versionId != null) {
            queryParameters['versionId'] = ObjectSerializer.serialize(request.versionId, 'string');
        }

        const requestOptions: HttpOptions = {
            method: 'PUT',
            qs: queryParameters,
            headers: headerParams,
            uri: requestPath,
        };

        await this._configuration.authentication.applyToRequestAsync(requestOptions);

        const result: HttpResult = await this._client.requestAsync(requestOptions);

        return result;
    }

    /**
     *
     * @summary Upload file
     * @param request UploadFileRequest
     */
    public async uploadFile(request: UploadFileRequest): Promise<{ response: HttpResponse; body: FilesUploadResult }> {
        const requestPath =
            this._configuration.getApiBaseUrl() +
            '/barcode/storage/file/{path}'.replace(
                // eslint-disable-next-line no-useless-concat
                '{' + 'path' + '}',
                String(request.path)
            );
        let queryParameters: any = {};
        let headerParams: any = (Object as any).assign({}, this.defaultHeaders);
        const formParams: FormParamsType = [];
        const fileToUpload = request.file == null ? null : new FormFile('file', 'file.png', request.file);

        // verify required parameter 'request.path' is not null or undefined
        if (request.path == null) {
            throw new Error('Required parameter request.path was null or undefined when calling uploadFile.');
        }

        // verify required parameter 'request.file' is not null or undefined
        if (request.file == null) {
            throw new Error('Required parameter request.file was null or undefined when calling uploadFile.');
        }

        if (request.storageName != null) {
            queryParameters['storageName'] = ObjectSerializer.serialize(request.storageName, 'string');
        }

        const requestOptions: HttpOptions = {
            method: 'PUT',
            qs: queryParameters,
            headers: headerParams,
            uri: requestPath,
        };
        const multipartForm = new Multipart(formParams, fileToUpload == null ? [] : [fileToUpload]);
        requestOptions.body = multipartForm.body;
        requestOptions.headers = { ...requestOptions.headers, ...multipartForm.headers };

        await this._configuration.authentication.applyToRequestAsync(requestOptions);

        const result: HttpResult = await this._client.requestAsync(requestOptions);

        return {
            response: result.response,
            body: ObjectSerializer.deserialize(result.body, 'FilesUploadResult'),
        };
    }
}

export class FolderApi {
    protected defaultHeaders: any = {
        'x-aspose-client': 'nodejs sdk',
        'x-aspose-client-version': '24.13.0',
    };
    protected _configuration: Configuration;
    private _client: HttpClient;

    constructor(configuration: Configuration) {
        this._configuration = configuration;
        this._client = new HttpClient();
    }

    /**
     *
     * @summary Copy folder
     * @param request CopyFolderRequest
     */
    public async copyFolder(request: CopyFolderRequest): Promise<{ response: HttpResponse; body?: any }> {
        const requestPath =
            this._configuration.getApiBaseUrl() +
            '/barcode/storage/folder/copy/{srcPath}'.replace(
                // eslint-disable-next-line no-useless-concat
                '{' + 'srcPath' + '}',
                String(request.srcPath)
            );
        let queryParameters: any = {};
        let headerParams: any = (Object as any).assign({}, this.defaultHeaders);

        // verify required parameter 'request.srcPath' is not null or undefined
        if (request.srcPath == null) {
            throw new Error('Required parameter request.srcPath was null or undefined when calling copyFolder.');
        }

        // verify required parameter 'request.destPath' is not null or undefined
        if (request.destPath == null) {
            throw new Error('Required parameter request.destPath was null or undefined when calling copyFolder.');
        }

        if (request.destPath != null) {
            queryParameters['destPath'] = ObjectSerializer.serialize(request.destPath, 'string');
        }

        if (request.srcStorageName != null) {
            queryParameters['srcStorageName'] = ObjectSerializer.serialize(request.srcStorageName, 'string');
        }

        if (request.destStorageName != null) {
            queryParameters['destStorageName'] = ObjectSerializer.serialize(request.destStorageName, 'string');
        }

        const requestOptions: HttpOptions = {
            method: 'PUT',
            qs: queryParameters,
            headers: headerParams,
            uri: requestPath,
        };

        await this._configuration.authentication.applyToRequestAsync(requestOptions);

        const result: HttpResult = await this._client.requestAsync(requestOptions);

        return result;
    }

    /**
     *
     * @summary Create the folder
     * @param request CreateFolderRequest
     */
    public async createFolder(request: CreateFolderRequest): Promise<{ response: HttpResponse; body?: any }> {
        const requestPath =
            this._configuration.getApiBaseUrl() +
            '/barcode/storage/folder/{path}'.replace(
                // eslint-disable-next-line no-useless-concat
                '{' + 'path' + '}',
                String(request.path)
            );
        let queryParameters: any = {};
        let headerParams: any = (Object as any).assign({}, this.defaultHeaders);

        // verify required parameter 'request.path' is not null or undefined
        if (request.path == null) {
            throw new Error('Required parameter request.path was null or undefined when calling createFolder.');
        }

        if (request.storageName != null) {
            queryParameters['storageName'] = ObjectSerializer.serialize(request.storageName, 'string');
        }

        const requestOptions: HttpOptions = {
            method: 'PUT',
            qs: queryParameters,
            headers: headerParams,
            uri: requestPath,
        };

        await this._configuration.authentication.applyToRequestAsync(requestOptions);

        const result: HttpResult = await this._client.requestAsync(requestOptions);

        return result;
    }

    /**
     *
     * @summary Delete folder
     * @param request DeleteFolderRequest
     */
    public async deleteFolder(request: DeleteFolderRequest): Promise<{ response: HttpResponse; body?: any }> {
        const requestPath =
            this._configuration.getApiBaseUrl() +
            '/barcode/storage/folder/{path}'.replace(
                // eslint-disable-next-line no-useless-concat
                '{' + 'path' + '}',
                String(request.path)
            );
        let queryParameters: any = {};
        let headerParams: any = (Object as any).assign({}, this.defaultHeaders);

        // verify required parameter 'request.path' is not null or undefined
        if (request.path == null) {
            throw new Error('Required parameter request.path was null or undefined when calling deleteFolder.');
        }

        if (request.storageName != null) {
            queryParameters['storageName'] = ObjectSerializer.serialize(request.storageName, 'string');
        }

        if (request.recursive != null) {
            queryParameters['recursive'] = ObjectSerializer.serialize(request.recursive, 'boolean');
        }

        const requestOptions: HttpOptions = {
            method: 'DELETE',
            qs: queryParameters,
            headers: headerParams,
            uri: requestPath,
        };

        await this._configuration.authentication.applyToRequestAsync(requestOptions);

        const result: HttpResult = await this._client.requestAsync(requestOptions);

        return result;
    }

    /**
     *
     * @summary Get all files and folders within a folder
     * @param request GetFilesListRequest
     */
    public async getFilesList(request: GetFilesListRequest): Promise<{ response: HttpResponse; body: FilesList }> {
        const requestPath =
            this._configuration.getApiBaseUrl() +
            '/barcode/storage/folder/{path}'.replace(
                // eslint-disable-next-line no-useless-concat
                '{' + 'path' + '}',
                String(request.path)
            );
        let queryParameters: any = {};
        let headerParams: any = (Object as any).assign({}, this.defaultHeaders);

        // verify required parameter 'request.path' is not null or undefined
        if (request.path == null) {
            throw new Error('Required parameter request.path was null or undefined when calling getFilesList.');
        }

        if (request.storageName != null) {
            queryParameters['storageName'] = ObjectSerializer.serialize(request.storageName, 'string');
        }

        const requestOptions: HttpOptions = {
            method: 'GET',
            qs: queryParameters,
            headers: headerParams,
            uri: requestPath,
        };

        await this._configuration.authentication.applyToRequestAsync(requestOptions);

        const result: HttpResult = await this._client.requestAsync(requestOptions);

        return {
            response: result.response,
            body: ObjectSerializer.deserialize(result.body, 'FilesList'),
        };
    }

    /**
     *
     * @summary Move folder
     * @param request MoveFolderRequest
     */
    public async moveFolder(request: MoveFolderRequest): Promise<{ response: HttpResponse; body?: any }> {
        const requestPath =
            this._configuration.getApiBaseUrl() +
            '/barcode/storage/folder/move/{srcPath}'.replace(
                // eslint-disable-next-line no-useless-concat
                '{' + 'srcPath' + '}',
                String(request.srcPath)
            );
        let queryParameters: any = {};
        let headerParams: any = (Object as any).assign({}, this.defaultHeaders);

        // verify required parameter 'request.srcPath' is not null or undefined
        if (request.srcPath == null) {
            throw new Error('Required parameter request.srcPath was null or undefined when calling moveFolder.');
        }

        // verify required parameter 'request.destPath' is not null or undefined
        if (request.destPath == null) {
            throw new Error('Required parameter request.destPath was null or undefined when calling moveFolder.');
        }

        if (request.destPath != null) {
            queryParameters['destPath'] = ObjectSerializer.serialize(request.destPath, 'string');
        }

        if (request.srcStorageName != null) {
            queryParameters['srcStorageName'] = ObjectSerializer.serialize(request.srcStorageName, 'string');
        }

        if (request.destStorageName != null) {
            queryParameters['destStorageName'] = ObjectSerializer.serialize(request.destStorageName, 'string');
        }

        const requestOptions: HttpOptions = {
            method: 'PUT',
            qs: queryParameters,
            headers: headerParams,
            uri: requestPath,
        };

        await this._configuration.authentication.applyToRequestAsync(requestOptions);

        const result: HttpResult = await this._client.requestAsync(requestOptions);

        return result;
    }
}

export class StorageApi {
    protected defaultHeaders: any = {
        'x-aspose-client': 'nodejs sdk',
        'x-aspose-client-version': '24.13.0',
    };
    protected _configuration: Configuration;
    private _client: HttpClient;

    constructor(configuration: Configuration) {
        this._configuration = configuration;
        this._client = new HttpClient();
    }

    /**
     *
     * @summary Get disc usage
     * @param request GetDiscUsageRequest
     */
    public async getDiscUsage(request: GetDiscUsageRequest): Promise<{ response: HttpResponse; body: DiscUsage }> {
        const requestPath = this._configuration.getApiBaseUrl() + '/barcode/storage/disc';
        let queryParameters: any = {};
        let headerParams: any = (Object as any).assign({}, this.defaultHeaders);

        if (request.storageName != null) {
            queryParameters['storageName'] = ObjectSerializer.serialize(request.storageName, 'string');
        }

        const requestOptions: HttpOptions = {
            method: 'GET',
            qs: queryParameters,
            headers: headerParams,
            uri: requestPath,
        };

        await this._configuration.authentication.applyToRequestAsync(requestOptions);

        const result: HttpResult = await this._client.requestAsync(requestOptions);

        return {
            response: result.response,
            body: ObjectSerializer.deserialize(result.body, 'DiscUsage'),
        };
    }

    /**
     *
     * @summary Get file versions
     * @param request GetFileVersionsRequest
     */
    public async getFileVersions(
        request: GetFileVersionsRequest
    ): Promise<{ response: HttpResponse; body: FileVersions }> {
        const requestPath =
            this._configuration.getApiBaseUrl() +
            '/barcode/storage/version/{path}'.replace(
                // eslint-disable-next-line no-useless-concat
                '{' + 'path' + '}',
                String(request.path)
            );
        let queryParameters: any = {};
        let headerParams: any = (Object as any).assign({}, this.defaultHeaders);

        // verify required parameter 'request.path' is not null or undefined
        if (request.path == null) {
            throw new Error('Required parameter request.path was null or undefined when calling getFileVersions.');
        }

        if (request.storageName != null) {
            queryParameters['storageName'] = ObjectSerializer.serialize(request.storageName, 'string');
        }

        const requestOptions: HttpOptions = {
            method: 'GET',
            qs: queryParameters,
            headers: headerParams,
            uri: requestPath,
        };

        await this._configuration.authentication.applyToRequestAsync(requestOptions);

        const result: HttpResult = await this._client.requestAsync(requestOptions);

        return {
            response: result.response,
            body: ObjectSerializer.deserialize(result.body, 'FileVersions'),
        };
    }

    /**
     *
     * @summary Check if file or folder exists
     * @param request ObjectExistsRequest
     */
    public async objectExists(request: ObjectExistsRequest): Promise<{ response: HttpResponse; body: ObjectExist }> {
        const requestPath =
            this._configuration.getApiBaseUrl() +
            '/barcode/storage/exist/{path}'.replace(
                // eslint-disable-next-line no-useless-concat
                '{' + 'path' + '}',
                String(request.path)
            );
        let queryParameters: any = {};
        let headerParams: any = (Object as any).assign({}, this.defaultHeaders);

        // verify required parameter 'request.path' is not null or undefined
        if (request.path == null) {
            throw new Error('Required parameter request.path was null or undefined when calling objectExists.');
        }

        if (request.storageName != null) {
            queryParameters['storageName'] = ObjectSerializer.serialize(request.storageName, 'string');
        }

        if (request.versionId != null) {
            queryParameters['versionId'] = ObjectSerializer.serialize(request.versionId, 'string');
        }

        const requestOptions: HttpOptions = {
            method: 'GET',
            qs: queryParameters,
            headers: headerParams,
            uri: requestPath,
        };

        await this._configuration.authentication.applyToRequestAsync(requestOptions);

        const result: HttpResult = await this._client.requestAsync(requestOptions);

        return {
            response: result.response,
            body: ObjectSerializer.deserialize(result.body, 'ObjectExist'),
        };
    }

    /**
     *
     * @summary Check if storage exists
     * @param request StorageExistsRequest
     */
    public async storageExists(request: StorageExistsRequest): Promise<{ response: HttpResponse; body: StorageExist }> {
        const requestPath =
            this._configuration.getApiBaseUrl() +
            '/barcode/storage/{storageName}/exist'.replace(
                // eslint-disable-next-line no-useless-concat
                '{' + 'storageName' + '}',
                String(request.storageName)
            );
        let queryParameters: any = {};
        let headerParams: any = (Object as any).assign({}, this.defaultHeaders);

        // verify required parameter 'request.storageName' is not null or undefined
        if (request.storageName == null) {
            throw new Error('Required parameter request.storageName was null or undefined when calling storageExists.');
        }

        const requestOptions: HttpOptions = {
            method: 'GET',
            qs: queryParameters,
            headers: headerParams,
            uri: requestPath,
        };

        await this._configuration.authentication.applyToRequestAsync(requestOptions);

        const result: HttpResult = await this._client.requestAsync(requestOptions);

        return {
            response: result.response,
            body: ObjectSerializer.deserialize(result.body, 'StorageExist'),
        };
    }
}
