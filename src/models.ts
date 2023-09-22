/*
* MIT License

* Copyright (c) 2023 Aspose Pty Ltd

* Permission is hereby granted, free of charge, to any person obtaining a copy
* of this software and associated documentation files (the "Software"), to deal
* in the Software without restriction, including without limitation the rights
* to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
* copies of the Software, and to permit persons to whom the Software is
* furnished to do so, subject to the following conditions:

* The above copyright notice and this permission notice shall be included in all
* copies or substantial portions of the Software.

* THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
* IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
* FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
* AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
* LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
* OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
* SOFTWARE.
*/

export class ApiError {
    'code'?: string;
    'message'?: string;
    'description'?: string;
    'dateTime'?: Date;
    'innerError'?: ApiError;

    static attributeTypeMap: Array<{ name: string; baseName: string; type: string }> = [
        {
            name: 'code',
            baseName: 'Code',
            type: 'string',
        },
        {
            name: 'message',
            baseName: 'Message',
            type: 'string',
        },
        {
            name: 'description',
            baseName: 'Description',
            type: 'string',
        },
        {
            name: 'dateTime',
            baseName: 'DateTime',
            type: 'Date',
        },
        {
            name: 'innerError',
            baseName: 'InnerError',
            type: 'ApiError',
        },
    ];

    static getAttributeTypeMap() {
        return ApiError.attributeTypeMap;
    }
}
export class ApiErrorResponse {
    'requestId'?: string;
    'error'?: ApiError;

    static attributeTypeMap: Array<{ name: string; baseName: string; type: string }> = [
        {
            name: 'requestId',
            baseName: 'RequestId',
            type: 'string',
        },
        {
            name: 'error',
            baseName: 'Error',
            type: 'ApiError',
        },
    ];

    static getAttributeTypeMap() {
        return ApiErrorResponse.attributeTypeMap;
    }
}

/**
 * AustralianPost barcode parameters.
 */
export class AustralianPostParams {
    /**
     * Interpreting type for the Customer Information of AustralianPost, default to CustomerInformationInterpretingType.Other\"
     */
    'encodingTable'?: CustomerInformationInterpretingType;
    /**
     * Short bar's height of AustralianPost barcode.
     */
    'shortBarHeight'?: number;

    static attributeTypeMap: Array<{ name: string; baseName: string; type: string }> = [
        {
            name: 'encodingTable',
            baseName: 'EncodingTable',
            type: 'CustomerInformationInterpretingType',
        },
        {
            name: 'shortBarHeight',
            baseName: 'ShortBarHeight',
            type: 'number',
        },
    ];

    static getAttributeTypeMap() {
        return AustralianPostParams.attributeTypeMap;
    }
}

/**
 *
 */
export enum AutoSizeMode {
    None = 'None',
    Nearest = 'Nearest',
    Interpolation = 'Interpolation',
}

/**
 * Subset of GraphicsUnit.
 */
export enum AvailableGraphicsUnit {
    Pixel = 'Pixel',
    Point = 'Point',
    Inch = 'Inch',
    Millimeter = 'Millimeter',
}

/**
 *
 */
export enum AztecEncodeMode {
    Auto = 'Auto',
    Bytes = 'Bytes',
    ExtendedCodetext = 'ExtendedCodetext',
}

/**
 * Aztec parameters.
 */
export class AztecParams {
    /**
     * Height/Width ratio of 2D BarCode module.
     */
    'aspectRatio'?: number;
    /**
     * Level of error correction of Aztec types of barcode. Value should between 10 to 95.
     */
    'errorLevel'?: number;
    /**
     * Aztec Symbol mode. Default value: AztecSymbolMode.Auto.
     */
    'symbolMode'?: AztecSymbolMode;
    /**
     * @deprecated This property is obsolete and will be removed in future releases. Unicode symbols detection and encoding will be processed in Auto mode with Extended Channel Interpretation charset designator. Using of own encodings requires manual CodeText encoding into byte[] array.  Sets the encoding of codetext.
     */
    'textEncoding'?: string;
    /**
     * Encoding mode for Aztec barcodes. Default value: Auto
     */
    'encodeMode'?: AztecEncodeMode;
    /**
     * Identifies ECI encoding. Used when AztecEncodeMode is Auto. Default value: ISO-8859-1.
     */
    'eCIEncoding'?: ECIEncodings;
    /**
     * Used to instruct the reader to interpret the data contained within the symbol as programming for reader initialization.
     */
    'isReaderInitialization'?: boolean;
    /**
     * Gets or sets layers count of Aztec symbol. Layers count should be in range from 1 to 3 for Compact mode and in range from 1 to 32 for Full Range mode. Default value: 0 (auto).
     */
    'layersCount'?: number;

    static attributeTypeMap: Array<{ name: string; baseName: string; type: string }> = [
        {
            name: 'aspectRatio',
            baseName: 'AspectRatio',
            type: 'number',
        },
        {
            name: 'errorLevel',
            baseName: 'ErrorLevel',
            type: 'number',
        },
        {
            name: 'symbolMode',
            baseName: 'SymbolMode',
            type: 'AztecSymbolMode',
        },
        {
            name: 'textEncoding',
            baseName: 'TextEncoding',
            type: 'string',
        },
        {
            name: 'encodeMode',
            baseName: 'EncodeMode',
            type: 'AztecEncodeMode',
        },
        {
            name: 'eCIEncoding',
            baseName: 'ECIEncoding',
            type: 'ECIEncodings',
        },
        {
            name: 'isReaderInitialization',
            baseName: 'IsReaderInitialization',
            type: 'boolean',
        },
        {
            name: 'layersCount',
            baseName: 'LayersCount',
            type: 'number',
        },
    ];

    static getAttributeTypeMap() {
        return AztecParams.attributeTypeMap;
    }
}

/**
 *
 */
export enum AztecSymbolMode {
    Auto = 'Auto',
    Compact = 'Compact',
    FullRange = 'FullRange',
    Rune = 'Rune',
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
            baseName: 'BarcodeValue',
            type: 'string',
        },
        {
            name: 'type',
            baseName: 'Type',
            type: 'string',
        },
        {
            name: 'region',
            baseName: 'Region',
            type: 'Array<RegionPoint>',
        },
        {
            name: 'checksum',
            baseName: 'Checksum',
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
    'barcodes'?: Array<BarcodeResponse>;

    static attributeTypeMap: Array<{ name: string; baseName: string; type: string }> = [
        {
            name: 'barcodes',
            baseName: 'Barcodes',
            type: 'Array<BarcodeResponse>',
        },
    ];

    static getAttributeTypeMap() {
        return BarcodeResponseList.attributeTypeMap;
    }
}

/**
 *
 */
export enum BorderDashStyle {
    Solid = 'Solid',
    Dash = 'Dash',
    Dot = 'Dot',
    DashDot = 'DashDot',
    DashDotDot = 'DashDotDot',
}

/**
 * Caption
 */
export class CaptionParams {
    /**
     * Caption text.
     */
    'text'?: string;
    /**
     * Text alignment.
     */
    'alignment'?: TextAlignment;
    /**
     * Text color.
     */
    'color'?: string;
    /**
     * Is caption visible.
     */
    'visible'?: boolean;
    /**
     * Font.
     */
    'font'?: FontParams;
    /**
     * Padding.
     */
    'padding'?: Padding;
    /**
     * Specify word wraps (line breaks) within text. Default value: false.
     */
    'noWrap'?: boolean;

    static attributeTypeMap: Array<{ name: string; baseName: string; type: string }> = [
        {
            name: 'text',
            baseName: 'Text',
            type: 'string',
        },
        {
            name: 'alignment',
            baseName: 'Alignment',
            type: 'TextAlignment',
        },
        {
            name: 'color',
            baseName: 'Color',
            type: 'string',
        },
        {
            name: 'visible',
            baseName: 'Visible',
            type: 'boolean',
        },
        {
            name: 'font',
            baseName: 'Font',
            type: 'FontParams',
        },
        {
            name: 'padding',
            baseName: 'Padding',
            type: 'Padding',
        },
        {
            name: 'noWrap',
            baseName: 'NoWrap',
            type: 'boolean',
        },
    ];

    static getAttributeTypeMap() {
        return CaptionParams.attributeTypeMap;
    }
}

/**
 *
 */
export enum ChecksumValidation {
    Default = 'Default',
    On = 'On',
    Off = 'Off',
}

/**
 *
 */
export enum CodabarChecksumMode {
    Mod10 = 'Mod10',
    Mod16 = 'Mod16',
}

/**
 * Codabar parameters.
 */
export class CodabarParams {
    /**
     * Checksum algorithm for Codabar barcodes. Default value: CodabarChecksumMode.Mod16. To enable checksum calculation set value EnableChecksum.Yes to property EnableChecksum.
     */
    'checksumMode'?: CodabarChecksumMode;
    /**
     * Start symbol (character) of Codabar symbology. Default value: CodabarSymbol.A
     */
    'startSymbol'?: CodabarSymbol;
    /**
     * Stop symbol (character) of Codabar symbology. Default value: CodabarSymbol.A
     */
    'stopSymbol'?: CodabarSymbol;

    static attributeTypeMap: Array<{ name: string; baseName: string; type: string }> = [
        {
            name: 'checksumMode',
            baseName: 'ChecksumMode',
            type: 'CodabarChecksumMode',
        },
        {
            name: 'startSymbol',
            baseName: 'StartSymbol',
            type: 'CodabarSymbol',
        },
        {
            name: 'stopSymbol',
            baseName: 'StopSymbol',
            type: 'CodabarSymbol',
        },
    ];

    static getAttributeTypeMap() {
        return CodabarParams.attributeTypeMap;
    }
}

/**
 *
 */
export enum CodabarSymbol {
    A = 'A',
    B = 'B',
    C = 'C',
    D = 'D',
}

/**
 * Codablock parameters.
 */
export class CodablockParams {
    /**
     * Height/Width ratio of 2D BarCode module.
     */
    'aspectRatio'?: number;
    /**
     * Columns count.
     */
    'columns'?: number;
    /**
     * Rows count.
     */
    'rows'?: number;

    static attributeTypeMap: Array<{ name: string; baseName: string; type: string }> = [
        {
            name: 'aspectRatio',
            baseName: 'AspectRatio',
            type: 'number',
        },
        {
            name: 'columns',
            baseName: 'Columns',
            type: 'number',
        },
        {
            name: 'rows',
            baseName: 'Rows',
            type: 'number',
        },
    ];

    static getAttributeTypeMap() {
        return CodablockParams.attributeTypeMap;
    }
}

/**
 *
 */
export enum Code128Emulation {
    None = 'None',
    Code903 = 'Code903',
    Code904 = 'Code904',
    Code905 = 'Code905',
}

/**
 *
 */
export enum Code128EncodeMode {
    Auto = 'Auto',
    CodeA = 'CodeA',
    CodeB = 'CodeB',
    CodeAB = 'CodeAB',
    CodeC = 'CodeC',
    CodeAC = 'CodeAC',
    CodeBC = 'CodeBC',
}

/**
 * Code128 params.
 */
export class Code128Params {
    /**
     * Encoding mode for Code128 barcodes. Code 128 specification Default value: Code128EncodeMode.Auto.
     */
    'encodeMode'?: Code128EncodeMode;

    static attributeTypeMap: Array<{ name: string; baseName: string; type: string }> = [
        {
            name: 'encodeMode',
            baseName: 'EncodeMode',
            type: 'Code128EncodeMode',
        },
    ];

    static getAttributeTypeMap() {
        return Code128Params.attributeTypeMap;
    }
}

/**
 * Code16K parameters.
 */
export class Code16KParams {
    /**
     * Height/Width ratio of 2D BarCode module.
     */
    'aspectRatio'?: number;
    /**
     * Size of the left quiet zone in xDimension. Default value: 10, meaning if xDimension = 2px than left quiet zone will be 20px.
     */
    'quietZoneLeftCoef'?: number;
    /**
     * Size of the right quiet zone in xDimension. Default value: 1, meaning if xDimension = 2px than right quiet zone will be 2px.
     */
    'quietZoneRightCoef'?: number;

    static attributeTypeMap: Array<{ name: string; baseName: string; type: string }> = [
        {
            name: 'aspectRatio',
            baseName: 'AspectRatio',
            type: 'number',
        },
        {
            name: 'quietZoneLeftCoef',
            baseName: 'QuietZoneLeftCoef',
            type: 'number',
        },
        {
            name: 'quietZoneRightCoef',
            baseName: 'QuietZoneRightCoef',
            type: 'number',
        },
    ];

    static getAttributeTypeMap() {
        return Code16KParams.attributeTypeMap;
    }
}

/**
 *
 */
export enum CodeLocation {
    Below = 'Below',
    Above = 'Above',
    None = 'None',
}

/**
 * Coupon parameters. Used for UpcaGs1DatabarCoupon, UpcaGs1Code128Coupon.
 */
export class CouponParams {
    /**
     * Space between main the BarCode and supplement BarCode in Unit value.
     */
    'supplementSpace'?: number;

    static attributeTypeMap: Array<{ name: string; baseName: string; type: string }> = [
        {
            name: 'supplementSpace',
            baseName: 'SupplementSpace',
            type: 'number',
        },
    ];

    static getAttributeTypeMap() {
        return CouponParams.attributeTypeMap;
    }
}

/**
 *
 */
export enum CustomerInformationInterpretingType {
    CTable = 'CTable',
    NTable = 'NTable',
    Other = 'Other',
}

/**
 * Databar parameters.
 */
export class DataBarParams {
    /**
     * Height/Width ratio of 2D BarCode module. Used for DataBar stacked.
     */
    'aspectRatio'?: number;
    /**
     * Columns count.
     */
    'columns'?: number;
    /**
     * Rows count.
     */
    'rows'?: number;
    /**
     * Enables flag of 2D composite component with DataBar barcode
     */
    'is2DCompositeComponent'?: boolean;
    /**
     * If this flag is set, it allows only GS1 encoding standard for Databar barcode types
     */
    'isAllowOnlyGS1Encoding'?: boolean;

    static attributeTypeMap: Array<{ name: string; baseName: string; type: string }> = [
        {
            name: 'aspectRatio',
            baseName: 'AspectRatio',
            type: 'number',
        },
        {
            name: 'columns',
            baseName: 'Columns',
            type: 'number',
        },
        {
            name: 'rows',
            baseName: 'Rows',
            type: 'number',
        },
        {
            name: 'is2DCompositeComponent',
            baseName: 'Is2DCompositeComponent',
            type: 'boolean',
        },
        {
            name: 'isAllowOnlyGS1Encoding',
            baseName: 'IsAllowOnlyGS1Encoding',
            type: 'boolean',
        },
    ];

    static getAttributeTypeMap() {
        return DataBarParams.attributeTypeMap;
    }
}

/**
 *
 */
export enum DataMatrixEccType {
    EccAuto = 'EccAuto',
    Ecc000 = 'Ecc000',
    Ecc050 = 'Ecc050',
    Ecc080 = 'Ecc080',
    Ecc100 = 'Ecc100',
    Ecc140 = 'Ecc140',
    Ecc200 = 'Ecc200',
}

/**
 * DataMatrix encoder's encoding mode, default to Auto
 */
export enum DataMatrixEncodeMode {
    Auto = 'Auto',
    ASCII = 'ASCII',
    Full = 'Full',
    Custom = 'Custom',
    C40 = 'C40',
    Text = 'Text',
    EDIFACT = 'EDIFACT',
    ANSIX12 = 'ANSIX12',
    ExtendedCodetext = 'ExtendedCodetext',
}

/**
 * DataMatrix parameters.
 */
export class DataMatrixParams {
    /**
     * Height/Width ratio of 2D BarCode module
     */
    'aspectRatio'?: number;
    /**
     * @deprecated This property is obsolete and will be removed in future releases. Unicode symbols detection and encoding will be processed in Auto mode with Extended Channel Interpretation charset designator. Using of own encodings requires manual CodeText encoding into byte[] array.  Sets the encoding of codetext.
     */
    'textEncoding'?: string;
    /**
     * @deprecated Will be replaced with 'DataMatrix.Version' in the next release  Columns count.
     */
    'columns'?: number;
    /**
     * Datamatrix ECC type. Default value: DataMatrixEccType.Ecc200.
     */
    'dataMatrixEcc'?: DataMatrixEccType;
    /**
     * Encode mode of Datamatrix barcode. Default value: DataMatrixEncodeMode.Auto.
     */
    'dataMatrixEncodeMode'?: DataMatrixEncodeMode;
    /**
     * @deprecated Will be replaced with 'DataMatrix.Version' in the next release  Rows count.
     */
    'rows'?: number;
    /**
     * Macro Characters 05 and 06 values are used to obtain more compact encoding in special modes. Can be used only with DataMatrixEccType.Ecc200 or DataMatrixEccType.EccAuto. Cannot be used with EncodeTypes.GS1DataMatrix Default value: MacroCharacters.None.
     */
    'macroCharacters'?: MacroCharacter;
    /**
     * Sets a Datamatrix symbol size. Default value: DataMatrixVersion.Auto.
     */
    'version'?: DataMatrixVersion;

    static attributeTypeMap: Array<{ name: string; baseName: string; type: string }> = [
        {
            name: 'aspectRatio',
            baseName: 'AspectRatio',
            type: 'number',
        },
        {
            name: 'textEncoding',
            baseName: 'TextEncoding',
            type: 'string',
        },
        {
            name: 'columns',
            baseName: 'Columns',
            type: 'number',
        },
        {
            name: 'dataMatrixEcc',
            baseName: 'DataMatrixEcc',
            type: 'DataMatrixEccType',
        },
        {
            name: 'dataMatrixEncodeMode',
            baseName: 'DataMatrixEncodeMode',
            type: 'DataMatrixEncodeMode',
        },
        {
            name: 'rows',
            baseName: 'Rows',
            type: 'number',
        },
        {
            name: 'macroCharacters',
            baseName: 'MacroCharacters',
            type: 'MacroCharacter',
        },
        {
            name: 'version',
            baseName: 'Version',
            type: 'DataMatrixVersion',
        },
    ];

    static getAttributeTypeMap() {
        return DataMatrixParams.attributeTypeMap;
    }
}

/**
 *
 */
export enum DataMatrixVersion {
    Auto = 'Auto',
    RowsColumns = 'RowsColumns',
    ECC0009x9 = 'ECC000_9x9',
    ECC00005011x11 = 'ECC000_050_11x11',
    ECC00010013x13 = 'ECC000_100_13x13',
    ECC00010015x15 = 'ECC000_100_15x15',
    ECC00014017x17 = 'ECC000_140_17x17',
    ECC00014019x19 = 'ECC000_140_19x19',
    ECC00014021x21 = 'ECC000_140_21x21',
    ECC00014023x23 = 'ECC000_140_23x23',
    ECC00014025x25 = 'ECC000_140_25x25',
    ECC00014027x27 = 'ECC000_140_27x27',
    ECC00014029x29 = 'ECC000_140_29x29',
    ECC00014031x31 = 'ECC000_140_31x31',
    ECC00014033x33 = 'ECC000_140_33x33',
    ECC00014035x35 = 'ECC000_140_35x35',
    ECC00014037x37 = 'ECC000_140_37x37',
    ECC00014039x39 = 'ECC000_140_39x39',
    ECC00014041x41 = 'ECC000_140_41x41',
    ECC00014043x43 = 'ECC000_140_43x43',
    ECC00014045x45 = 'ECC000_140_45x45',
    ECC00014047x47 = 'ECC000_140_47x47',
    ECC00014049x49 = 'ECC000_140_49x49',
    ECC20010x10 = 'ECC200_10x10',
    ECC20012x12 = 'ECC200_12x12',
    ECC20014x14 = 'ECC200_14x14',
    ECC20016x16 = 'ECC200_16x16',
    ECC20018x18 = 'ECC200_18x18',
    ECC20020x20 = 'ECC200_20x20',
    ECC20022x22 = 'ECC200_22x22',
    ECC20024x24 = 'ECC200_24x24',
    ECC20026x26 = 'ECC200_26x26',
    ECC20032x32 = 'ECC200_32x32',
    ECC20036x36 = 'ECC200_36x36',
    ECC20040x40 = 'ECC200_40x40',
    ECC20044x44 = 'ECC200_44x44',
    ECC20048x48 = 'ECC200_48x48',
    ECC20052x52 = 'ECC200_52x52',
    ECC20064x64 = 'ECC200_64x64',
    ECC20072x72 = 'ECC200_72x72',
    ECC20080x80 = 'ECC200_80x80',
    ECC20088x88 = 'ECC200_88x88',
    ECC20096x96 = 'ECC200_96x96',
    ECC200104x104 = 'ECC200_104x104',
    ECC200120x120 = 'ECC200_120x120',
    ECC200132x132 = 'ECC200_132x132',
    ECC200144x144 = 'ECC200_144x144',
    ECC2008x18 = 'ECC200_8x18',
    ECC2008x32 = 'ECC200_8x32',
    ECC20012x26 = 'ECC200_12x26',
    ECC20012x36 = 'ECC200_12x36',
    ECC20016x36 = 'ECC200_16x36',
    ECC20016x48 = 'ECC200_16x48',
    DMRE8x48 = 'DMRE_8x48',
    DMRE8x64 = 'DMRE_8x64',
    DMRE8x80 = 'DMRE_8x80',
    DMRE8x96 = 'DMRE_8x96',
    DMRE8x120 = 'DMRE_8x120',
    DMRE8x144 = 'DMRE_8x144',
    DMRE12x64 = 'DMRE_12x64',
    DMRE12x88 = 'DMRE_12x88',
    DMRE16x64 = 'DMRE_16x64',
    DMRE20x36 = 'DMRE_20x36',
    DMRE20x44 = 'DMRE_20x44',
    DMRE20x64 = 'DMRE_20x64',
    DMRE22x48 = 'DMRE_22x48',
    DMRE24x48 = 'DMRE_24x48',
    DMRE24x64 = 'DMRE_24x64',
    DMRE26x40 = 'DMRE_26x40',
    DMRE26x48 = 'DMRE_26x48',
    DMRE26x64 = 'DMRE_26x64',
}

/**
 * See DecodeType
 */
export enum DecodeBarcodeType {
    All = 'all',
    AustraliaPost = 'AustraliaPost',
    Aztec = 'Aztec',
    ISBN = 'ISBN',
    Codabar = 'Codabar',
    Code11 = 'Code11',
    Code128 = 'Code128',
    GS1Code128 = 'GS1Code128',
    Code39Extended = 'Code39Extended',
    Code39Standard = 'Code39Standard',
    Code93Extended = 'Code93Extended',
    Code93Standard = 'Code93Standard',
    DataMatrix = 'DataMatrix',
    DeutschePostIdentcode = 'DeutschePostIdentcode',
    DeutschePostLeitcode = 'DeutschePostLeitcode',
    EAN13 = 'EAN13',
    EAN14 = 'EAN14',
    EAN8 = 'EAN8',
    IATA2of5 = 'IATA2of5',
    Interleaved2of5 = 'Interleaved2of5',
    ISSN = 'ISSN',
    ISMN = 'ISMN',
    ItalianPost25 = 'ItalianPost25',
    ITF14 = 'ITF14',
    ITF6 = 'ITF6',
    MacroPdf417 = 'MacroPdf417',
    Matrix2of5 = 'Matrix2of5',
    MSI = 'MSI',
    OneCode = 'OneCode',
    OPC = 'OPC',
    PatchCode = 'PatchCode',
    Pdf417 = 'Pdf417',
    MicroPdf417 = 'MicroPdf417',
    Planet = 'Planet',
    Postnet = 'Postnet',
    PZN = 'PZN',
    QR = 'QR',
    MicroQR = 'MicroQR',
    RM4SCC = 'RM4SCC',
    SCC14 = 'SCC14',
    SSCC18 = 'SSCC18',
    Standard2of5 = 'Standard2of5',
    Supplement = 'Supplement',
    UPCA = 'UPCA',
    UPCE = 'UPCE',
    VIN = 'VIN',
    Pharmacode = 'Pharmacode',
    GS1DataMatrix = 'GS1DataMatrix',
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
    GS1QR = 'GS1QR',
    MaxiCode = 'MaxiCode',
    MicrE13B = 'MicrE13B',
    Code32 = 'Code32',
    DataLogic2of5 = 'DataLogic2of5',
    DotCode = 'DotCode',
    DutchKIX = 'DutchKIX',
    CodablockF = 'CodablockF',
    Mailmark = 'Mailmark',
    GS1DotCode = 'GS1DotCode',
    HIBCCode39LIC = 'HIBCCode39LIC',
    HIBCCode128LIC = 'HIBCCode128LIC',
    HIBCAztecLIC = 'HIBCAztecLIC',
    HIBCDataMatrixLIC = 'HIBCDataMatrixLIC',
    HIBCQRLIC = 'HIBCQRLIC',
    HIBCCode39PAS = 'HIBCCode39PAS',
    HIBCCode128PAS = 'HIBCCode128PAS',
    HIBCAztecPAS = 'HIBCAztecPAS',
    HIBCDataMatrixPAS = 'HIBCDataMatrixPAS',
    HIBCQRPAS = 'HIBCQRPAS',
    HanXin = 'HanXin',
    GS1HanXin = 'GS1HanXin',
    GS1Aztec = 'GS1Aztec',
    GS1CompositeBar = 'GS1CompositeBar',
}

/**
 * Class for disc space information.
 */
export class DiscUsage {
    /**
     * Application used disc space.
     */
    'usedSize': number;
    /**
     * Total disc space.
     */
    'totalSize': number;

    static attributeTypeMap: Array<{ name: string; baseName: string; type: string }> = [
        {
            name: 'usedSize',
            baseName: 'UsedSize',
            type: 'number',
        },
        {
            name: 'totalSize',
            baseName: 'TotalSize',
            type: 'number',
        },
    ];

    static getAttributeTypeMap() {
        return DiscUsage.attributeTypeMap;
    }
}

/**
 *
 */
export enum DotCodeEncodeMode {
    Auto = 'Auto',
    Bytes = 'Bytes',
    ExtendedCodetext = 'ExtendedCodetext',
}

/**
 * DotCode parameters.
 */
export class DotCodeParams {
    /**
     * Height/Width ratio of 2D BarCode module.
     */
    'aspectRatio'?: number;
    /**
     * Identifies columns count. Sum of the number of rows plus the number of columns of a DotCode symbol must be odd. Number of columns must be at least 5.
     */
    'columns'?: number;
    /**
     * Identifies DotCode encode mode. Default value: Auto.
     */
    'encodeMode'?: DotCodeEncodeMode;
    /**
     * Identifies ECI encoding. Used when DotCodeEncodeMode is Auto. Default value: ISO-8859-1.
     */
    'eCIEncoding'?: ECIEncodings;
    /**
     * Indicates whether code is used for instruct reader to interpret the following data as instructions for initialization or reprogramming of the bar code reader. Default value is false.
     */
    'isReaderInitialization'?: boolean;
    /**
     * Identifies rows count. Sum of the number of rows plus the number of columns of a DotCode symbol must be odd. Number of rows must be at least 5.
     */
    'rows'?: number;

    static attributeTypeMap: Array<{ name: string; baseName: string; type: string }> = [
        {
            name: 'aspectRatio',
            baseName: 'AspectRatio',
            type: 'number',
        },
        {
            name: 'columns',
            baseName: 'Columns',
            type: 'number',
        },
        {
            name: 'encodeMode',
            baseName: 'EncodeMode',
            type: 'DotCodeEncodeMode',
        },
        {
            name: 'eCIEncoding',
            baseName: 'ECIEncoding',
            type: 'ECIEncodings',
        },
        {
            name: 'isReaderInitialization',
            baseName: 'IsReaderInitialization',
            type: 'boolean',
        },
        {
            name: 'rows',
            baseName: 'Rows',
            type: 'number',
        },
    ];

    static getAttributeTypeMap() {
        return DotCodeParams.attributeTypeMap;
    }
}

/**
 *
 */
export enum ECIEncodings {
    NONE = 'NONE',
    ISO88591 = 'ISO_8859_1',
    ISO88592 = 'ISO_8859_2',
    ISO88593 = 'ISO_8859_3',
    ISO88594 = 'ISO_8859_4',
    ISO88595 = 'ISO_8859_5',
    ISO88596 = 'ISO_8859_6',
    ISO88597 = 'ISO_8859_7',
    ISO88598 = 'ISO_8859_8',
    ISO88599 = 'ISO_8859_9',
    ISO885910 = 'ISO_8859_10',
    ISO885911 = 'ISO_8859_11',
    ISO885913 = 'ISO_8859_13',
    ISO885914 = 'ISO_8859_14',
    ISO885915 = 'ISO_8859_15',
    ISO885916 = 'ISO_8859_16',
    ShiftJIS = 'Shift_JIS',
    Win1250 = 'Win1250',
    Win1251 = 'Win1251',
    Win1252 = 'Win1252',
    Win1256 = 'Win1256',
    UTF16BE = 'UTF16BE',
    UTF8 = 'UTF8',
    USASCII = 'US_ASCII',
    Big5 = 'Big5',
    GB18030 = 'GB18030',
    EUCKR = 'EUC_KR',
}

/**
 *
 */
export enum EnableChecksum {
    Default = 'Default',
    Yes = 'Yes',
    No = 'No',
}

/**
 * See EncodeTypes
 */
export enum EncodeBarcodeType {
    Codabar = 'Codabar',
    Code11 = 'Code11',
    Code39Standard = 'Code39Standard',
    Code39Extended = 'Code39Extended',
    Code93Standard = 'Code93Standard',
    Code93Extended = 'Code93Extended',
    Code128 = 'Code128',
    GS1Code128 = 'GS1Code128',
    EAN8 = 'EAN8',
    EAN13 = 'EAN13',
    EAN14 = 'EAN14',
    SCC14 = 'SCC14',
    SSCC18 = 'SSCC18',
    UPCA = 'UPCA',
    UPCE = 'UPCE',
    ISBN = 'ISBN',
    ISSN = 'ISSN',
    ISMN = 'ISMN',
    Standard2of5 = 'Standard2of5',
    Interleaved2of5 = 'Interleaved2of5',
    Matrix2of5 = 'Matrix2of5',
    ItalianPost25 = 'ItalianPost25',
    IATA2of5 = 'IATA2of5',
    ITF14 = 'ITF14',
    ITF6 = 'ITF6',
    MSI = 'MSI',
    VIN = 'VIN',
    DeutschePostIdentcode = 'DeutschePostIdentcode',
    DeutschePostLeitcode = 'DeutschePostLeitcode',
    OPC = 'OPC',
    PZN = 'PZN',
    Code16K = 'Code16K',
    Pharmacode = 'Pharmacode',
    DataMatrix = 'DataMatrix',
    QR = 'QR',
    Aztec = 'Aztec',
    Pdf417 = 'Pdf417',
    MacroPdf417 = 'MacroPdf417',
    AustraliaPost = 'AustraliaPost',
    Postnet = 'Postnet',
    Planet = 'Planet',
    OneCode = 'OneCode',
    RM4SCC = 'RM4SCC',
    DatabarOmniDirectional = 'DatabarOmniDirectional',
    DatabarTruncated = 'DatabarTruncated',
    DatabarLimited = 'DatabarLimited',
    DatabarExpanded = 'DatabarExpanded',
    SingaporePost = 'SingaporePost',
    GS1DataMatrix = 'GS1DataMatrix',
    AustralianPosteParcel = 'AustralianPosteParcel',
    SwissPostParcel = 'SwissPostParcel',
    PatchCode = 'PatchCode',
    DatabarExpandedStacked = 'DatabarExpandedStacked',
    DatabarStacked = 'DatabarStacked',
    DatabarStackedOmniDirectional = 'DatabarStackedOmniDirectional',
    MicroPdf417 = 'MicroPdf417',
    GS1QR = 'GS1QR',
    MaxiCode = 'MaxiCode',
    Code32 = 'Code32',
    DataLogic2of5 = 'DataLogic2of5',
    DotCode = 'DotCode',
    DutchKIX = 'DutchKIX',
    UpcaGs1Code128Coupon = 'UpcaGs1Code128Coupon',
    UpcaGs1DatabarCoupon = 'UpcaGs1DatabarCoupon',
    CodablockF = 'CodablockF',
    GS1CodablockF = 'GS1CodablockF',
    Mailmark = 'Mailmark',
    GS1DotCode = 'GS1DotCode',
    HanXin = 'HanXin',
    GS1HanXin = 'GS1HanXin',
    GS1Aztec = 'GS1Aztec',
}

/**
 * The error details
 */
export class ErrorDetails {
    /**
     * The request id
     */
    'requestId'?: string;
    /**
     * Date
     */
    'date': Date;

    static attributeTypeMap: Array<{ name: string; baseName: string; type: string }> = [
        {
            name: 'requestId',
            baseName: 'RequestId',
            type: 'string',
        },
        {
            name: 'date',
            baseName: 'Date',
            type: 'Date',
        },
    ];

    static getAttributeTypeMap() {
        return ErrorDetails.attributeTypeMap;
    }
}

/**
 * File versions FileVersion.
 */
export class FileVersions {
    /**
     * File versions FileVersion.
     */
    'value'?: Array<FileVersion>;

    static attributeTypeMap: Array<{ name: string; baseName: string; type: string }> = [
        {
            name: 'value',
            baseName: 'Value',
            type: 'Array<FileVersion>',
        },
    ];

    static getAttributeTypeMap() {
        return FileVersions.attributeTypeMap;
    }
}

/**
 * Files list
 */
export class FilesList {
    /**
     * Files and folders contained by folder StorageFile.
     */
    'value'?: Array<StorageFile>;

    static attributeTypeMap: Array<{ name: string; baseName: string; type: string }> = [
        {
            name: 'value',
            baseName: 'Value',
            type: 'Array<StorageFile>',
        },
    ];

    static getAttributeTypeMap() {
        return FilesList.attributeTypeMap;
    }
}

/**
 * File upload result
 */
export class FilesUploadResult {
    /**
     * List of uploaded file names
     */
    'uploaded'?: Array<string>;
    /**
     * List of errors.
     */
    'errors'?: Array<Error>;

    static attributeTypeMap: Array<{ name: string; baseName: string; type: string }> = [
        {
            name: 'uploaded',
            baseName: 'Uploaded',
            type: 'Array<string>',
        },
        {
            name: 'errors',
            baseName: 'Errors',
            type: 'Array<Error>',
        },
    ];

    static getAttributeTypeMap() {
        return FilesUploadResult.attributeTypeMap;
    }
}

/**
 *
 */
export enum FontMode {
    Auto = 'Auto',
    Manual = 'Manual',
}

/**
 * Font.
 */
export class FontParams {
    /**
     * Font family.
     */
    'family'?: string;
    /**
     * Font size in units.
     */
    'size'?: number;
    /**
     * Font style.
     */
    'style'?: FontStyle;

    static attributeTypeMap: Array<{ name: string; baseName: string; type: string }> = [
        {
            name: 'family',
            baseName: 'Family',
            type: 'string',
        },
        {
            name: 'size',
            baseName: 'Size',
            type: 'number',
        },
        {
            name: 'style',
            baseName: 'Style',
            type: 'FontStyle',
        },
    ];

    static getAttributeTypeMap() {
        return FontParams.attributeTypeMap;
    }
}

/**
 *
 */
export enum FontStyle {
    Regular = 'Regular',
    Bold = 'Bold',
    Italic = 'Italic',
    Underline = 'Underline',
    Strikeout = 'Strikeout',
}

/**
 * Represents extended BarcodeGenerator params.
 */
export class GeneratorParams {
    /**
     * Type of barcode to generate.
     */
    'typeOfBarcode': EncodeBarcodeType;
    /**
     * Text to encode.
     */
    'text': string;
    /**
     * Text that will be displayed instead of codetext in 2D barcodes. Used for: Aztec, Pdf417, DataMatrix, QR, MaxiCode, DotCode
     */
    'twoDDisplayText'?: string;
    /**
     * Specify the displaying Text Location, set to CodeLocation.None to hide CodeText. Default value: CodeLocation.Below.
     */
    'textLocation'?: CodeLocation;
    /**
     * Text alignment.
     */
    'textAlignment'?: TextAlignment;
    /**
     * Specify the displaying CodeText's Color. Default value: Color.Black.
     */
    'textColor'?: string;
    /**
     * Specify the displaying Text's font. Default value: Arial 5pt regular. Ignored if FontSizeMode is set to FontSizeMode.Auto.
     */
    'font'?: FontParams;
    /**
     * Specify FontSizeMode. If FontSizeMode is set to Auto, font size will be calculated automatically based on xDimension value. It is recommended to use FontSizeMode.Auto especially in AutoSizeMode.Nearest or AutoSizeMode.Interpolation. Default value: FontSizeMode.Auto.
     */
    'fontSizeMode'?: FontMode;
    /**
     * Specify word wraps (line breaks) within text. Default value: false.
     */
    'noWrap'?: boolean;
    /**
     * Resolution of the BarCode image. One value for both dimensions. Default value: 96 dpi.
     */
    'resolution'?: number;
    /**
     * @deprecated Use 'Resolution' instead.
     */
    'resolutionX'?: number;
    /**
     * @deprecated Use 'Resolution' instead.
     */
    'resolutionY'?: number;
    /**
     * The smallest width of the unit of BarCode bars or spaces. Increase this will increase the whole barcode image width. Ignored if AutoSizeMode property is set to AutoSizeMode.Nearest or AutoSizeMode.Interpolation.
     */
    'dimensionX'?: number;
    /**
     * Space between the CodeText and the BarCode in Unit value. Default value: 2pt. Ignored for EAN8, EAN13, UPCE, UPCA, ISBN, ISMN, ISSN, UpcaGs1DatabarCoupon.
     */
    'textSpace'?: number;
    /**
     * Common Units for all measuring in query. Default units: pixel.
     */
    'units'?: AvailableGraphicsUnit;
    /**
     * Specifies the different types of automatic sizing modes. Default value: AutoSizeMode.None.
     */
    'sizeMode'?: AutoSizeMode;
    /**
     * Height of the barcode in given units. Default units: pixel.
     */
    'barHeight'?: number;
    /**
     * Height of the barcode image in given units. Default units: pixel.
     */
    'imageHeight'?: number;
    /**
     * Width of the barcode image in given units. Default units: pixel.
     */
    'imageWidth'?: number;
    /**
     * BarCode image rotation angle, measured in degree, e.g. RotationAngle = 0 or RotationAngle = 360 means no rotation. If RotationAngle NOT equal to 90, 180, 270 or 0, it may increase the difficulty for the scanner to read the image. Default value: 0.
     */
    'rotationAngle'?: number;
    /**
     * Barcode paddings. Default value: 5pt 5pt 5pt 5pt.
     */
    'padding'?: Padding;
    /**
     * Additional caption above barcode.
     */
    'captionAbove'?: CaptionParams;
    /**
     * Additional caption below barcode.
     */
    'captionBelow'?: CaptionParams;
    /**
     * Background color of the barcode image. Default value: Color.White.
     */
    'backColor'?: string;
    /**
     * Bars color. Default value: Color.Black.
     */
    'barColor'?: string;
    /**
     * Border color. Default value: Color.Black.
     */
    'borderColor'?: string;
    /**
     * Border width. Default value: 0. Ignored if Visible is set to false.
     */
    'borderWidth'?: number;
    /**
     * Border dash style. Default value: BorderDashStyle.Solid.
     */
    'borderDashStyle'?: BorderDashStyle;
    /**
     * Border visibility. If false than parameter Width is always ignored (0). Default value: false.
     */
    'borderVisible'?: boolean;
    /**
     * Enable checksum during generation 1D barcodes. Default is treated as Yes for symbology which must contain checksum, as No where checksum only possible. Checksum is possible: Code39 Standard/Extended, Standard2of5, Interleaved2of5, Matrix2of5, ItalianPost25, DeutschePostIdentcode, DeutschePostLeitcode, VIN, Codabar Checksum always used: Rest symbology
     */
    'enableChecksum'?: EnableChecksum;
    /**
     * Indicates whether explains the character \"\\\" as an escape character in CodeText property. Used for Pdf417, DataMatrix, Code128 only If the EnableEscape is true, \"\\\" will be explained as a special escape character. Otherwise, \"\\\" acts as normal characters. Aspose.BarCode supports input decimal ascii code and mnemonic for ASCII control-code characters. For example, \\013 and \\\\CR stands for CR.
     */
    'enableEscape'?: boolean;
    /**
     * Value indicating whether bars are filled. Only for 1D barcodes. Default value: true.
     */
    'filledBars'?: boolean;
    /**
     * Always display checksum digit in the human readable text for Code128 and GS1Code128 barcodes.
     */
    'alwaysShowChecksum'?: boolean;
    /**
     * Wide bars to Narrow bars ratio. Default value: 3, that is, wide bars are 3 times as wide as narrow bars. Used for ITF, PZN, PharmaCode, Standard2of5, Interleaved2of5, Matrix2of5, ItalianPost25, IATA2of5, VIN, DeutschePost, OPC, Code32, DataLogic2of5, PatchCode, Code39Extended, Code39Standard
     */
    'wideNarrowRatio'?: number;
    /**
     * Only for 1D barcodes. If codetext is incorrect and value set to true - exception will be thrown. Otherwise codetext will be corrected to match barcode's specification. Exception always will be thrown for: Databar symbology if codetext is incorrect. Exception always will not be thrown for: AustraliaPost, SingaporePost, Code39Extended, Code93Extended, Code16K, Code128 symbology if codetext is incorrect.
     */
    'validateText'?: boolean;
    /**
     * Supplement parameters. Used for Interleaved2of5, Standard2of5, EAN13, EAN8, UPCA, UPCE, ISBN, ISSN, ISMN.
     */
    'supplementData'?: string;
    /**
     * Space between main the BarCode and supplement BarCode.
     */
    'supplementSpace'?: number;
    /**
     * Bars reduction value that is used to compensate ink spread while printing.
     */
    'barWidthReduction'?: number;
    /**
     * Indicates whether is used anti-aliasing mode to render image. Anti-aliasing mode is applied to barcode and text drawing.
     */
    'useAntiAlias'?: boolean;
    /**
     * AustralianPost params.
     */
    'australianPost'?: AustralianPostParams;
    /**
     * Aztec params.
     */
    'aztec'?: AztecParams;
    /**
     * Codabar params.
     */
    'codabar'?: CodabarParams;
    /**
     * Codablock params.
     */
    'codablock'?: CodablockParams;
    /**
     * Code16K params.
     */
    'code16K'?: Code16KParams;
    /**
     * Coupon params.
     */
    'coupon'?: CouponParams;
    /**
     * DataBar params.
     */
    'dataBar'?: DataBarParams;
    /**
     * DataMatrix params.
     */
    'dataMatrix'?: DataMatrixParams;
    /**
     * DotCode params.
     */
    'dotCode'?: DotCodeParams;
    /**
     * ITF params.
     */
    'ITF'?: ITFParams;
    /**
     * MaxiCode params.
     */
    'maxiCode'?: MaxiCodeParams;
    /**
     * Pdf417 params.
     */
    'pdf417'?: Pdf417Params;
    /**
     * Postal params.
     */
    'postal'?: PostalParams;
    /**
     * QR params.
     */
    'QR'?: QrParams;
    /**
     * PatchCode params.
     */
    'patchCode'?: PatchCodeParams;
    /**
     * Code128 params.
     */
    'code128'?: Code128Params;
    /**
     * HanXin params.
     */
    'hanXin'?: HanXinParams;

    static attributeTypeMap: Array<{ name: string; baseName: string; type: string }> = [
        {
            name: 'typeOfBarcode',
            baseName: 'TypeOfBarcode',
            type: 'EncodeBarcodeType',
        },
        {
            name: 'text',
            baseName: 'Text',
            type: 'string',
        },
        {
            name: 'twoDDisplayText',
            baseName: 'TwoDDisplayText',
            type: 'string',
        },
        {
            name: 'textLocation',
            baseName: 'TextLocation',
            type: 'CodeLocation',
        },
        {
            name: 'textAlignment',
            baseName: 'TextAlignment',
            type: 'TextAlignment',
        },
        {
            name: 'textColor',
            baseName: 'TextColor',
            type: 'string',
        },
        {
            name: 'font',
            baseName: 'Font',
            type: 'FontParams',
        },
        {
            name: 'fontSizeMode',
            baseName: 'FontSizeMode',
            type: 'FontMode',
        },
        {
            name: 'noWrap',
            baseName: 'NoWrap',
            type: 'boolean',
        },
        {
            name: 'resolution',
            baseName: 'Resolution',
            type: 'number',
        },
        {
            name: 'resolutionX',
            baseName: 'ResolutionX',
            type: 'number',
        },
        {
            name: 'resolutionY',
            baseName: 'ResolutionY',
            type: 'number',
        },
        {
            name: 'dimensionX',
            baseName: 'DimensionX',
            type: 'number',
        },
        {
            name: 'textSpace',
            baseName: 'TextSpace',
            type: 'number',
        },
        {
            name: 'units',
            baseName: 'Units',
            type: 'AvailableGraphicsUnit',
        },
        {
            name: 'sizeMode',
            baseName: 'SizeMode',
            type: 'AutoSizeMode',
        },
        {
            name: 'barHeight',
            baseName: 'BarHeight',
            type: 'number',
        },
        {
            name: 'imageHeight',
            baseName: 'ImageHeight',
            type: 'number',
        },
        {
            name: 'imageWidth',
            baseName: 'ImageWidth',
            type: 'number',
        },
        {
            name: 'rotationAngle',
            baseName: 'RotationAngle',
            type: 'number',
        },
        {
            name: 'padding',
            baseName: 'Padding',
            type: 'Padding',
        },
        {
            name: 'captionAbove',
            baseName: 'CaptionAbove',
            type: 'CaptionParams',
        },
        {
            name: 'captionBelow',
            baseName: 'CaptionBelow',
            type: 'CaptionParams',
        },
        {
            name: 'backColor',
            baseName: 'BackColor',
            type: 'string',
        },
        {
            name: 'barColor',
            baseName: 'BarColor',
            type: 'string',
        },
        {
            name: 'borderColor',
            baseName: 'BorderColor',
            type: 'string',
        },
        {
            name: 'borderWidth',
            baseName: 'BorderWidth',
            type: 'number',
        },
        {
            name: 'borderDashStyle',
            baseName: 'BorderDashStyle',
            type: 'BorderDashStyle',
        },
        {
            name: 'borderVisible',
            baseName: 'BorderVisible',
            type: 'boolean',
        },
        {
            name: 'enableChecksum',
            baseName: 'EnableChecksum',
            type: 'EnableChecksum',
        },
        {
            name: 'enableEscape',
            baseName: 'EnableEscape',
            type: 'boolean',
        },
        {
            name: 'filledBars',
            baseName: 'FilledBars',
            type: 'boolean',
        },
        {
            name: 'alwaysShowChecksum',
            baseName: 'AlwaysShowChecksum',
            type: 'boolean',
        },
        {
            name: 'wideNarrowRatio',
            baseName: 'WideNarrowRatio',
            type: 'number',
        },
        {
            name: 'validateText',
            baseName: 'ValidateText',
            type: 'boolean',
        },
        {
            name: 'supplementData',
            baseName: 'SupplementData',
            type: 'string',
        },
        {
            name: 'supplementSpace',
            baseName: 'SupplementSpace',
            type: 'number',
        },
        {
            name: 'barWidthReduction',
            baseName: 'BarWidthReduction',
            type: 'number',
        },
        {
            name: 'useAntiAlias',
            baseName: 'UseAntiAlias',
            type: 'boolean',
        },
        {
            name: 'australianPost',
            baseName: 'AustralianPost',
            type: 'AustralianPostParams',
        },
        {
            name: 'aztec',
            baseName: 'Aztec',
            type: 'AztecParams',
        },
        {
            name: 'codabar',
            baseName: 'Codabar',
            type: 'CodabarParams',
        },
        {
            name: 'codablock',
            baseName: 'Codablock',
            type: 'CodablockParams',
        },
        {
            name: 'code16K',
            baseName: 'Code16K',
            type: 'Code16KParams',
        },
        {
            name: 'coupon',
            baseName: 'Coupon',
            type: 'CouponParams',
        },
        {
            name: 'dataBar',
            baseName: 'DataBar',
            type: 'DataBarParams',
        },
        {
            name: 'dataMatrix',
            baseName: 'DataMatrix',
            type: 'DataMatrixParams',
        },
        {
            name: 'dotCode',
            baseName: 'DotCode',
            type: 'DotCodeParams',
        },
        {
            name: 'ITF',
            baseName: 'ITF',
            type: 'ITFParams',
        },
        {
            name: 'maxiCode',
            baseName: 'MaxiCode',
            type: 'MaxiCodeParams',
        },
        {
            name: 'pdf417',
            baseName: 'Pdf417',
            type: 'Pdf417Params',
        },
        {
            name: 'postal',
            baseName: 'Postal',
            type: 'PostalParams',
        },
        {
            name: 'QR',
            baseName: 'QR',
            type: 'QrParams',
        },
        {
            name: 'patchCode',
            baseName: 'PatchCode',
            type: 'PatchCodeParams',
        },
        {
            name: 'code128',
            baseName: 'Code128',
            type: 'Code128Params',
        },
        {
            name: 'hanXin',
            baseName: 'HanXin',
            type: 'HanXinParams',
        },
    ];

    static getAttributeTypeMap() {
        return GeneratorParams.attributeTypeMap;
    }
}

/**
 * Represents list of barcode generators
 */
export class GeneratorParamsList {
    /**
     * List of barcode generators
     */
    'barcodeBuilders'?: Array<GeneratorParams>;
    /**
     * Shift step according to X axis
     */
    'xStep': number;
    /**
     * Shift step according to Y axis
     */
    'yStep': number;

    static attributeTypeMap: Array<{ name: string; baseName: string; type: string }> = [
        {
            name: 'barcodeBuilders',
            baseName: 'BarcodeBuilders',
            type: 'Array<GeneratorParams>',
        },
        {
            name: 'xStep',
            baseName: 'XStep',
            type: 'number',
        },
        {
            name: 'yStep',
            baseName: 'YStep',
            type: 'number',
        },
    ];

    static getAttributeTypeMap() {
        return GeneratorParamsList.attributeTypeMap;
    }
}

/**
 *
 */
export enum HanXinEncodeMode {
    Auto = 'Auto',
    Binary = 'Binary',
    ECI = 'ECI',
    Unicode = 'Unicode',
    URI = 'URI',
    Extended = 'Extended',
}

/**
 *
 */
export enum HanXinErrorLevel {
    L1 = 'L1',
    L2 = 'L2',
    L3 = 'L3',
    L4 = 'L4',
}

/**
 * HanXin params.
 */
export class HanXinParams {
    /**
     * Encoding mode for XanXin barcodes. Default value: HanXinEncodeMode.Auto.
     */
    'encodeMode'?: HanXinEncodeMode;
    /**
     * Allowed Han Xin error correction levels from L1 to L4. Default value: HanXinErrorLevel.L1.
     */
    'errorLevel'?: HanXinErrorLevel;
    /**
     * Allowed Han Xin versions, Auto and Version01 - Version84. Default value: HanXinVersion.Auto.
     */
    'version'?: HanXinVersion;
    /**
     * Extended Channel Interpretation Identifiers. It is used to tell the barcode reader details about the used references for encoding the data in the symbol. Current implementation consists all well known charset encodings. Default value: ECIEncodings.ISO_8859_1
     */
    'eCIEncoding'?: ECIEncodings;

    static attributeTypeMap: Array<{ name: string; baseName: string; type: string }> = [
        {
            name: 'encodeMode',
            baseName: 'EncodeMode',
            type: 'HanXinEncodeMode',
        },
        {
            name: 'errorLevel',
            baseName: 'ErrorLevel',
            type: 'HanXinErrorLevel',
        },
        {
            name: 'version',
            baseName: 'Version',
            type: 'HanXinVersion',
        },
        {
            name: 'eCIEncoding',
            baseName: 'ECIEncoding',
            type: 'ECIEncodings',
        },
    ];

    static getAttributeTypeMap() {
        return HanXinParams.attributeTypeMap;
    }
}

/**
 *
 */
export enum HanXinVersion {
    Auto = 'Auto',
    Version01 = 'Version01',
    Version02 = 'Version02',
    Version03 = 'Version03',
    Version04 = 'Version04',
    Version05 = 'Version05',
    Version06 = 'Version06',
    Version07 = 'Version07',
    Version08 = 'Version08',
    Version09 = 'Version09',
    Version10 = 'Version10',
    Version11 = 'Version11',
    Version12 = 'Version12',
    Version13 = 'Version13',
    Version14 = 'Version14',
    Version15 = 'Version15',
    Version16 = 'Version16',
    Version17 = 'Version17',
    Version18 = 'Version18',
    Version19 = 'Version19',
    Version20 = 'Version20',
    Version21 = 'Version21',
    Version22 = 'Version22',
    Version23 = 'Version23',
    Version24 = 'Version24',
    Version25 = 'Version25',
    Version26 = 'Version26',
    Version27 = 'Version27',
    Version28 = 'Version28',
    Version29 = 'Version29',
    Version30 = 'Version30',
    Version31 = 'Version31',
    Version32 = 'Version32',
    Version33 = 'Version33',
    Version34 = 'Version34',
    Version35 = 'Version35',
    Version36 = 'Version36',
    Version37 = 'Version37',
    Version38 = 'Version38',
    Version39 = 'Version39',
    Version40 = 'Version40',
    Version41 = 'Version41',
    Version42 = 'Version42',
    Version43 = 'Version43',
    Version44 = 'Version44',
    Version45 = 'Version45',
    Version46 = 'Version46',
    Version47 = 'Version47',
    Version48 = 'Version48',
    Version49 = 'Version49',
    Version50 = 'Version50',
    Version51 = 'Version51',
    Version52 = 'Version52',
    Version53 = 'Version53',
    Version54 = 'Version54',
    Version55 = 'Version55',
    Version56 = 'Version56',
    Version57 = 'Version57',
    Version58 = 'Version58',
    Version59 = 'Version59',
    Version60 = 'Version60',
    Version61 = 'Version61',
    Version62 = 'Version62',
    Version63 = 'Version63',
    Version64 = 'Version64',
    Version65 = 'Version65',
    Version66 = 'Version66',
    Version67 = 'Version67',
    Version68 = 'Version68',
    Version69 = 'Version69',
    Version70 = 'Version70',
    Version71 = 'Version71',
    Version72 = 'Version72',
    Version73 = 'Version73',
    Version74 = 'Version74',
    Version75 = 'Version75',
    Version76 = 'Version76',
    Version77 = 'Version77',
    Version78 = 'Version78',
    Version79 = 'Version79',
    Version80 = 'Version80',
    Version81 = 'Version81',
    Version82 = 'Version82',
    Version83 = 'Version83',
    Version84 = 'Version84',
}

/**
 *
 */
export enum ITF14BorderType {
    None = 'None',
    Frame = 'Frame',
    Bar = 'Bar',
    FrameOut = 'FrameOut',
    BarOut = 'BarOut',
}

/**
 * ITF parameters.
 */
export class ITFParams {
    /**
     * ITF border (bearer bar) thickness in Unit value. Default value: 12pt.
     */
    'borderThickness'?: number;
    /**
     * Border type of ITF barcode. Default value: ITF14BorderType.Bar.
     */
    'borderType'?: ITF14BorderType;
    /**
     * Size of the quiet zones in xDimension. Default value: 10, meaning if xDimension = 2px than quiet zones will be 20px.
     */
    'quietZoneCoef'?: number;

    static attributeTypeMap: Array<{ name: string; baseName: string; type: string }> = [
        {
            name: 'borderThickness',
            baseName: 'BorderThickness',
            type: 'number',
        },
        {
            name: 'borderType',
            baseName: 'BorderType',
            type: 'ITF14BorderType',
        },
        {
            name: 'quietZoneCoef',
            baseName: 'QuietZoneCoef',
            type: 'number',
        },
    ];

    static getAttributeTypeMap() {
        return ITFParams.attributeTypeMap;
    }
}

/**
 *
 */
export enum MacroCharacter {
    None = 'None',
    Macro05 = 'Macro05',
    Macro06 = 'Macro06',
}

/**
 *
 */
export enum MaxiCodeEncodeMode {
    Auto = 'Auto',
    Bytes = 'Bytes',
    ExtendedCodetext = 'ExtendedCodetext',
}

/**
 *
 */
export enum MaxiCodeMode {
    Mode2 = 'Mode2',
    Mode3 = 'Mode3',
    Mode4 = 'Mode4',
    Mode5 = 'Mode5',
    Mode6 = 'Mode6',
}

/**
 * MaxiCode parameters.
 */
export class MaxiCodeParams {
    /**
     * Height/Width ratio of 2D BarCode module.
     */
    'aspectRatio'?: number;
    /**
     * Mode for MaxiCode barcodes.
     */
    'mode'?: MaxiCodeMode;
    /**
     * Encoding mode for MaxiCode barcodes.
     */
    'encodeMode'?: MaxiCodeEncodeMode;

    static attributeTypeMap: Array<{ name: string; baseName: string; type: string }> = [
        {
            name: 'aspectRatio',
            baseName: 'AspectRatio',
            type: 'number',
        },
        {
            name: 'mode',
            baseName: 'Mode',
            type: 'MaxiCodeMode',
        },
        {
            name: 'encodeMode',
            baseName: 'EncodeMode',
            type: 'MaxiCodeEncodeMode',
        },
    ];

    static getAttributeTypeMap() {
        return MaxiCodeParams.attributeTypeMap;
    }
}

/**
 * Error
 */
export class ModelError {
    /**
     * Code
     */
    'code'?: string;
    /**
     * Message
     */
    'message'?: string;
    /**
     * Description
     */
    'description'?: string;
    /**
     * Inner Error
     */
    'innerError'?: ErrorDetails;

    static attributeTypeMap: Array<{ name: string; baseName: string; type: string }> = [
        {
            name: 'code',
            baseName: 'Code',
            type: 'string',
        },
        {
            name: 'message',
            baseName: 'Message',
            type: 'string',
        },
        {
            name: 'description',
            baseName: 'Description',
            type: 'string',
        },
        {
            name: 'innerError',
            baseName: 'InnerError',
            type: 'ErrorDetails',
        },
    ];

    static getAttributeTypeMap() {
        return ModelError.attributeTypeMap;
    }
}

/**
 * Object exists
 */
export class ObjectExist {
    /**
     * Indicates that the file or folder exists.
     */
    'exists': boolean;
    /**
     * True if it is a folder, false if it is a file.
     */
    'isFolder': boolean;

    static attributeTypeMap: Array<{ name: string; baseName: string; type: string }> = [
        {
            name: 'exists',
            baseName: 'Exists',
            type: 'boolean',
        },
        {
            name: 'isFolder',
            baseName: 'IsFolder',
            type: 'boolean',
        },
    ];

    static getAttributeTypeMap() {
        return ObjectExist.attributeTypeMap;
    }
}

/**
 * Padding around barcode.
 */
export class Padding {
    /**
     * Left padding.
     */
    'left'?: number;
    /**
     * Right padding.
     */
    'right'?: number;
    /**
     * Top padding.
     */
    'top'?: number;
    /**
     * Bottom padding.
     */
    'bottom'?: number;

    static attributeTypeMap: Array<{ name: string; baseName: string; type: string }> = [
        {
            name: 'left',
            baseName: 'Left',
            type: 'number',
        },
        {
            name: 'right',
            baseName: 'Right',
            type: 'number',
        },
        {
            name: 'top',
            baseName: 'Top',
            type: 'number',
        },
        {
            name: 'bottom',
            baseName: 'Bottom',
            type: 'number',
        },
    ];

    static getAttributeTypeMap() {
        return Padding.attributeTypeMap;
    }
}

/**
 * PatchCode parameters.
 */
export class PatchCodeParams {
    /**
     * Specifies codetext for an extra QR barcode, when PatchCode is generated in page mode.
     */
    'extraBarcodeText'?: string;
    /**
     * PatchCode format. Choose PatchOnly to generate single PatchCode. Use page format to generate Patch page with PatchCodes as borders. Default value: PatchFormat.PatchOnly
     */
    'patchFormat'?: PatchFormat;

    static attributeTypeMap: Array<{ name: string; baseName: string; type: string }> = [
        {
            name: 'extraBarcodeText',
            baseName: 'ExtraBarcodeText',
            type: 'string',
        },
        {
            name: 'patchFormat',
            baseName: 'PatchFormat',
            type: 'PatchFormat',
        },
    ];

    static getAttributeTypeMap() {
        return PatchCodeParams.attributeTypeMap;
    }
}

/**
 *
 */
export enum PatchFormat {
    PatchOnly = 'PatchOnly',
    A4 = 'A4',
    A4LANDSCAPE = 'A4_LANDSCAPE',
    USLetter = 'US_Letter',
    USLetterLANDSCAPE = 'US_Letter_LANDSCAPE',
}

/**
 *
 */
export enum Pdf417CompactionMode {
    Auto = 'Auto',
    Text = 'Text',
    Numeric = 'Numeric',
    Binary = 'Binary',
}

/**
 *
 */
export enum Pdf417ErrorLevel {
    Level0 = 'Level0',
    Level1 = 'Level1',
    Level2 = 'Level2',
    Level3 = 'Level3',
    Level4 = 'Level4',
    Level5 = 'Level5',
    Level6 = 'Level6',
    Level7 = 'Level7',
    Level8 = 'Level8',
}

/**
 *
 */
export enum Pdf417MacroTerminator {
    Auto = 'Auto',
    None = 'None',
    Set = 'Set',
}

/**
 * PDF417 parameters.
 */
export class Pdf417Params {
    /**
     * Height/Width ratio of 2D BarCode module.
     */
    'aspectRatio'?: number;
    /**
     * @deprecated This property is obsolete and will be removed in future releases. Unicode symbols detection and encoding will be processed in Auto mode with Extended Channel Interpretation charset designator. Using of own encodings requires manual CodeText encoding into byte[] array.  Sets the encoding of codetext.
     */
    'textEncoding'?: string;
    /**
     * Columns count.
     */
    'columns'?: number;
    /**
     * Pdf417 symbology type of BarCode's compaction mode. Default value: Pdf417CompactionMode.Auto.
     */
    'compactionMode'?: Pdf417CompactionMode;
    /**
     * Pdf417 symbology type of BarCode's error correction level ranging from level0 to level8, level0 means no error correction info, level8 means best error correction which means a larger picture.
     */
    'errorLevel'?: Pdf417ErrorLevel;
    /**
     * Macro Pdf417 barcode's file ID. Used for MacroPdf417.
     */
    'macroFileID'?: number;
    /**
     * Macro Pdf417 barcode's segment ID, which starts from 0, to MacroSegmentsCount - 1.
     */
    'macroSegmentID'?: number;
    /**
     * Macro Pdf417 barcode segments count.
     */
    'macroSegmentsCount'?: number;
    /**
     * Rows count.
     */
    'rows'?: number;
    /**
     * Whether Pdf417 symbology type of BarCode is truncated (to reduce space).
     */
    'truncate'?: boolean;
    /**
     * Extended Channel Interpretation Identifiers. It is used to tell the barcode reader details about the used references for encoding the data in the symbol. Current implementation consists all well known charset encodings.
     */
    'pdf417ECIEncoding'?: ECIEncodings;
    /**
     * Used to instruct the reader to interpret the data contained within the symbol as programming for reader initialization
     */
    'isReaderInitialization'?: boolean;
    /**
     * Macro Pdf417 barcode time stamp
     */
    'macroTimeStamp'?: Date;
    /**
     * Macro Pdf417 barcode sender name
     */
    'macroSender'?: string;
    /**
     * Macro Pdf417 file size. The file size field contains the size in bytes of the entire source file
     */
    'macroFileSize'?: number;
    /**
     * Macro Pdf417 barcode checksum. The checksum field contains the value of the 16-bit (2 bytes) CRC checksum using the CCITT-16 polynomial
     */
    'macroChecksum'?: number;
    /**
     * Macro Pdf417 barcode file name
     */
    'macroFileName'?: string;
    /**
     * Macro Pdf417 barcode addressee name
     */
    'macroAddressee'?: string;
    /**
     * Extended Channel Interpretation Identifiers. Applies for Macro PDF417 text fields.
     */
    'macroECIEncoding'?: ECIEncodings;
    /**
     * Function codeword for Code 128 emulation. Applied for MicroPDF417 only. Ignored for PDF417 and MacroPDF417 barcodes.
     */
    'code128Emulation'?: Code128Emulation;
    /**
     * Used to tell the encoder whether to add Macro PDF417 Terminator (codeword 922) to the segment. Applied only for Macro PDF417.
     */
    'pdf417MacroTerminator'?: Pdf417MacroTerminator;

    static attributeTypeMap: Array<{ name: string; baseName: string; type: string }> = [
        {
            name: 'aspectRatio',
            baseName: 'AspectRatio',
            type: 'number',
        },
        {
            name: 'textEncoding',
            baseName: 'TextEncoding',
            type: 'string',
        },
        {
            name: 'columns',
            baseName: 'Columns',
            type: 'number',
        },
        {
            name: 'compactionMode',
            baseName: 'CompactionMode',
            type: 'Pdf417CompactionMode',
        },
        {
            name: 'errorLevel',
            baseName: 'ErrorLevel',
            type: 'Pdf417ErrorLevel',
        },
        {
            name: 'macroFileID',
            baseName: 'MacroFileID',
            type: 'number',
        },
        {
            name: 'macroSegmentID',
            baseName: 'MacroSegmentID',
            type: 'number',
        },
        {
            name: 'macroSegmentsCount',
            baseName: 'MacroSegmentsCount',
            type: 'number',
        },
        {
            name: 'rows',
            baseName: 'Rows',
            type: 'number',
        },
        {
            name: 'truncate',
            baseName: 'Truncate',
            type: 'boolean',
        },
        {
            name: 'pdf417ECIEncoding',
            baseName: 'Pdf417ECIEncoding',
            type: 'ECIEncodings',
        },
        {
            name: 'isReaderInitialization',
            baseName: 'IsReaderInitialization',
            type: 'boolean',
        },
        {
            name: 'macroTimeStamp',
            baseName: 'MacroTimeStamp',
            type: 'Date',
        },
        {
            name: 'macroSender',
            baseName: 'MacroSender',
            type: 'string',
        },
        {
            name: 'macroFileSize',
            baseName: 'MacroFileSize',
            type: 'number',
        },
        {
            name: 'macroChecksum',
            baseName: 'MacroChecksum',
            type: 'number',
        },
        {
            name: 'macroFileName',
            baseName: 'MacroFileName',
            type: 'string',
        },
        {
            name: 'macroAddressee',
            baseName: 'MacroAddressee',
            type: 'string',
        },
        {
            name: 'macroECIEncoding',
            baseName: 'MacroECIEncoding',
            type: 'ECIEncodings',
        },
        {
            name: 'code128Emulation',
            baseName: 'Code128Emulation',
            type: 'Code128Emulation',
        },
        {
            name: 'pdf417MacroTerminator',
            baseName: 'Pdf417MacroTerminator',
            type: 'Pdf417MacroTerminator',
        },
    ];

    static getAttributeTypeMap() {
        return Pdf417Params.attributeTypeMap;
    }
}

/**
 * Postal parameters. Used for Postnet, Planet.
 */
export class PostalParams {
    /**
     * Short bar's height of Postal barcodes.
     */
    'shortBarHeight'?: number;

    static attributeTypeMap: Array<{ name: string; baseName: string; type: string }> = [
        {
            name: 'shortBarHeight',
            baseName: 'ShortBarHeight',
            type: 'number',
        },
    ];

    static getAttributeTypeMap() {
        return PostalParams.attributeTypeMap;
    }
}

/**
 * See QualitySettings allows to configure recognition quality and speed manually.
 */
export enum PresetType {
    HighPerformance = 'HighPerformance',
    NormalQuality = 'NormalQuality',
    HighQualityDetection = 'HighQualityDetection',
    MaxQualityDetection = 'MaxQualityDetection',
    HighQuality = 'HighQuality',
    MaxBarCodes = 'MaxBarCodes',
}

/**
 *
 */
export enum QREncodeMode {
    Auto = 'Auto',
    Bytes = 'Bytes',
    Utf8BOM = 'Utf8BOM',
    Utf16BEBOM = 'Utf16BEBOM',
    ECIEncoding = 'ECIEncoding',
    ExtendedCodetext = 'ExtendedCodetext',
}

/**
 *
 */
export enum QREncodeType {
    Auto = 'Auto',
    ForceQR = 'ForceQR',
    ForceMicroQR = 'ForceMicroQR',
}

/**
 *
 */
export enum QRErrorLevel {
    LevelL = 'LevelL',
    LevelM = 'LevelM',
    LevelQ = 'LevelQ',
    LevelH = 'LevelH',
}

/**
 *
 */
export enum QRVersion {
    Auto = 'Auto',
    Version01 = 'Version01',
    Version02 = 'Version02',
    Version03 = 'Version03',
    Version04 = 'Version04',
    Version05 = 'Version05',
    Version06 = 'Version06',
    Version07 = 'Version07',
    Version08 = 'Version08',
    Version09 = 'Version09',
    Version10 = 'Version10',
    Version11 = 'Version11',
    Version12 = 'Version12',
    Version13 = 'Version13',
    Version14 = 'Version14',
    Version15 = 'Version15',
    Version16 = 'Version16',
    Version17 = 'Version17',
    Version18 = 'Version18',
    Version19 = 'Version19',
    Version20 = 'Version20',
    Version21 = 'Version21',
    Version22 = 'Version22',
    Version23 = 'Version23',
    Version24 = 'Version24',
    Version25 = 'Version25',
    Version26 = 'Version26',
    Version27 = 'Version27',
    Version28 = 'Version28',
    Version29 = 'Version29',
    Version30 = 'Version30',
    Version31 = 'Version31',
    Version32 = 'Version32',
    Version33 = 'Version33',
    Version34 = 'Version34',
    Version35 = 'Version35',
    Version36 = 'Version36',
    Version37 = 'Version37',
    Version38 = 'Version38',
    Version39 = 'Version39',
    Version40 = 'Version40',
    VersionM1 = 'VersionM1',
    VersionM2 = 'VersionM2',
    VersionM3 = 'VersionM3',
    VersionM4 = 'VersionM4',
}

/**
 * QR parameters.
 */
export class QrParams {
    /**
     * Height/Width ratio of 2D BarCode module.
     */
    'aspectRatio'?: number;
    /**
     * @deprecated This property is obsolete and will be removed in future releases. Unicode symbols detection and encoding will be processed in Auto mode with Extended Channel Interpretation charset designator. Using of own encodings requires manual CodeText encoding into byte[] array.  Sets the encoding of codetext.
     */
    'textEncoding'?: string;
    /**
     * QR / MicroQR selector mode. Select ForceQR for standard QR symbols, Auto for MicroQR.
     */
    'encodeType'?: QREncodeType;
    /**
     * Extended Channel Interpretation Identifiers. It is used to tell the barcode reader details about the used references for encoding the data in the symbol. Current implementation consists all well known charset encodings.
     */
    'eCIEncoding'?: ECIEncodings;
    /**
     * QR symbology type of BarCode's encoding mode. Default value: QREncodeMode.Auto.
     */
    'encodeMode'?: QREncodeMode;
    /**
     * Level of Reed-Solomon error correction for QR barcode. From low to high: LevelL, LevelM, LevelQ, LevelH. see QRErrorLevel.
     */
    'errorLevel'?: QRErrorLevel;
    /**
     * Version of QR Code. From Version1 to Version40 for QR code and from M1 to M4 for MicroQr. Default value is QRVersion.Auto.
     */
    'version'?: QRVersion;
    /**
     * QR structured append parameters.
     */
    'structuredAppend'?: StructuredAppend;

    static attributeTypeMap: Array<{ name: string; baseName: string; type: string }> = [
        {
            name: 'aspectRatio',
            baseName: 'AspectRatio',
            type: 'number',
        },
        {
            name: 'textEncoding',
            baseName: 'TextEncoding',
            type: 'string',
        },
        {
            name: 'encodeType',
            baseName: 'EncodeType',
            type: 'QREncodeType',
        },
        {
            name: 'eCIEncoding',
            baseName: 'ECIEncoding',
            type: 'ECIEncodings',
        },
        {
            name: 'encodeMode',
            baseName: 'EncodeMode',
            type: 'QREncodeMode',
        },
        {
            name: 'errorLevel',
            baseName: 'ErrorLevel',
            type: 'QRErrorLevel',
        },
        {
            name: 'version',
            baseName: 'Version',
            type: 'QRVersion',
        },
        {
            name: 'structuredAppend',
            baseName: 'StructuredAppend',
            type: 'StructuredAppend',
        },
    ];

    static getAttributeTypeMap() {
        return QrParams.attributeTypeMap;
    }
}

/**
 * Represents BarcodeReader object.
 */
export class ReaderParams {
    /**
     * The type of barcode to read.
     */
    'type'?: DecodeBarcodeType;
    /**
     * Enable checksum validation during recognition for 1D barcodes. Default is treated as Yes for symbologies which must contain checksum, as No where checksum only possible. Checksum never used: Codabar Checksum is possible: Code39 Standard/Extended, Standard2of5, Interleaved2of5, Matrix2of5, ItalianPost25, DeutschePostIdentcode, DeutschePostLeitcode, VIN Checksum always used: Rest symbologies
     */
    'checksumValidation'?: ChecksumValidation;
    /**
     * A flag which force engine to detect codetext encoding for Unicode.
     */
    'detectEncoding'?: boolean;
    /**
     * Preset allows to configure recognition quality and speed manually. You can quickly set up Preset by embedded presets: HighPerformance, NormalQuality, HighQuality, MaxBarCodes or you can manually configure separate options. Default value of Preset is NormalQuality.
     */
    'preset'?: PresetType;
    /**
     * Set X of top left corner of area for recognition.
     */
    'rectX'?: number;
    /**
     * Set Y of top left corner of area for recognition.
     */
    'rectY'?: number;
    /**
     * Set Width of area for recognition.
     */
    'rectWidth'?: number;
    /**
     * Set Height of area for recognition.
     */
    'rectHeight'?: number;
    /**
     * Value indicating whether FNC symbol strip must be done.
     */
    'stripFNC'?: boolean;
    /**
     * Timeout of recognition process in milliseconds. Default value is 15_000 (15 seconds). Maximum value is 60_000 (1 minute). In case of a timeout RequestTimeout (408) status will be returned. Try reducing the image size to avoid timeout.
     */
    'timeout'?: number;
    /**
     * Window size for median smoothing. Typical values are 3 or 4. Default value is 3. AllowMedianSmoothing must be set.
     */
    'medianSmoothingWindowSize'?: number;
    /**
     * Allows engine to enable median smoothing as additional scan. Mode helps to recognize noised barcodes.
     */
    'allowMedianSmoothing'?: boolean;
    /**
     * Allows engine to recognize color barcodes on color background as additional scan. Extremely slow mode.
     */
    'allowComplexBackground'?: boolean;
    /**
     * Allows engine for Datamatrix to recognize dashed industrial Datamatrix barcodes. Slow mode which helps only for dashed barcodes which consist from spots.
     */
    'allowDatamatrixIndustrialBarcodes'?: boolean;
    /**
     * Allows engine to recognize decreased image as additional scan. Size for decreasing is selected by internal engine algorithms. Mode helps to recognize barcodes which are noised and blurred but captured with high resolution.
     */
    'allowDecreasedImage'?: boolean;
    /**
     * Allows engine to use gap between scans to increase recognition speed. Mode can make recognition problems with low height barcodes.
     */
    'allowDetectScanGap'?: boolean;
    /**
     * Allows engine to recognize barcodes which has incorrect checksum or incorrect values. Mode can be used to recognize damaged barcodes with incorrect text.
     */
    'allowIncorrectBarcodes'?: boolean;
    /**
     * Allows engine to recognize inverse color image as additional scan. Mode can be used when barcode is white on black background.
     */
    'allowInvertImage'?: boolean;
    /**
     * Allows engine for Postal barcodes to recognize slightly noised images. Mode helps to recognize slightly damaged Postal barcodes.
     */
    'allowMicroWhiteSpotsRemoving'?: boolean;
    /**
     * Allows engine for 1D barcodes to quickly recognize high quality barcodes which fill almost whole image. Mode helps to quickly recognize generated barcodes from Internet.
     */
    'allowOneDFastBarcodesDetector'?: boolean;
    /**
     * Allows engine for 1D barcodes to recognize barcodes with single wiped/glued bars in pattern.
     */
    'allowOneDWipedBarsRestoration'?: boolean;
    /**
     * Allows engine for QR/MicroQR to recognize damaged MicroQR barcodes.
     */
    'allowQRMicroQrRestoration'?: boolean;
    /**
     * Allows engine to recognize regular image without any restorations as main scan. Mode to recognize image as is.
     */
    'allowRegularImage'?: boolean;
    /**
     * Allows engine to recognize barcodes with salt and pepper noise type. Mode can remove small noise with white and black dots.
     */
    'allowSaltAndPepperFiltering'?: boolean;
    /**
     * Allows engine to recognize image without small white spots as additional scan. Mode helps to recognize noised image as well as median smoothing filtering.
     */
    'allowWhiteSpotsRemoving'?: boolean;
    /**
     * Allows engine to recognize 1D barcodes with checksum by checking more recognition variants. Default value: False.
     */
    'checkMore1DVariants'?: boolean;
    /**
     * Allows engine for 1D barcodes to quickly recognize middle slice of an image and return result without using any time-consuming algorithms. Default value: False.
     */
    'fastScanOnly'?: boolean;
    /**
     * Allows engine using additional image restorations to recognize corrupted barcodes. At this time, it is used only in MicroPdf417 barcode type. Default value: False.
     */
    'allowAdditionalRestorations'?: boolean;
    /**
     * Sets threshold for detected regions that may contain barcodes. Value 0.7 means that bottom 70% of possible regions are filtered out and not processed further. Region likelihood threshold must be between [0.05, 0.9] Use high values for clear images with few barcodes. Use low values for images with many barcodes or for noisy images. Low value may lead to a bigger recognition time.
     */
    'regionLikelihoodThresholdPercent'?: number;
    /**
     * Scan window sizes in pixels. Allowed sizes are 10, 15, 20, 25, 30. Scanning with small window size takes more time and provides more accuracy but may fail in detecting very big barcodes. Combining of several window sizes can improve detection quality.
     */
    'scanWindowSizes'?: Array<number>;
    /**
     * Similarity coefficient depends on how homogeneous barcodes are. Use high value for for clear barcodes. Use low values to detect barcodes that ara partly damaged or not lighten evenly. Similarity coefficient must be between [0.5, 0.9]
     */
    'similarity'?: number;
    /**
     * Allows detector to skip search for diagonal barcodes. Setting it to false will increase detection time but allow to find diagonal barcodes that can be missed otherwise. Enabling of diagonal search leads to a bigger detection time.
     */
    'skipDiagonalSearch'?: boolean;
    /**
     * Allows engine to recognize tiny barcodes on large images. Ignored if AllowIncorrectBarcodes is set to True. Default value: False.
     */
    'readTinyBarcodes'?: boolean;
    /**
     * Interpreting Type for the Customer Information of AustralianPost BarCode.Default is CustomerInformationInterpretingType.Other.
     */
    'australianPostEncodingTable'?: CustomerInformationInterpretingType;
    /**
     * The flag which force AustraliaPost decoder to ignore last filling patterns in Customer Information Field during decoding as CTable method. CTable encoding method does not have any gaps in encoding table and sequence \"333\" of filling patterns is decoded as letter \"z\".
     */
    'ignoreEndingFillingPatternsForCTable'?: boolean;

    static attributeTypeMap: Array<{ name: string; baseName: string; type: string }> = [
        {
            name: 'type',
            baseName: 'Type',
            type: 'DecodeBarcodeType',
        },
        {
            name: 'checksumValidation',
            baseName: 'ChecksumValidation',
            type: 'ChecksumValidation',
        },
        {
            name: 'detectEncoding',
            baseName: 'DetectEncoding',
            type: 'boolean',
        },
        {
            name: 'preset',
            baseName: 'Preset',
            type: 'PresetType',
        },
        {
            name: 'rectX',
            baseName: 'RectX',
            type: 'number',
        },
        {
            name: 'rectY',
            baseName: 'RectY',
            type: 'number',
        },
        {
            name: 'rectWidth',
            baseName: 'RectWidth',
            type: 'number',
        },
        {
            name: 'rectHeight',
            baseName: 'RectHeight',
            type: 'number',
        },
        {
            name: 'stripFNC',
            baseName: 'StripFNC',
            type: 'boolean',
        },
        {
            name: 'timeout',
            baseName: 'Timeout',
            type: 'number',
        },
        {
            name: 'medianSmoothingWindowSize',
            baseName: 'MedianSmoothingWindowSize',
            type: 'number',
        },
        {
            name: 'allowMedianSmoothing',
            baseName: 'AllowMedianSmoothing',
            type: 'boolean',
        },
        {
            name: 'allowComplexBackground',
            baseName: 'AllowComplexBackground',
            type: 'boolean',
        },
        {
            name: 'allowDatamatrixIndustrialBarcodes',
            baseName: 'AllowDatamatrixIndustrialBarcodes',
            type: 'boolean',
        },
        {
            name: 'allowDecreasedImage',
            baseName: 'AllowDecreasedImage',
            type: 'boolean',
        },
        {
            name: 'allowDetectScanGap',
            baseName: 'AllowDetectScanGap',
            type: 'boolean',
        },
        {
            name: 'allowIncorrectBarcodes',
            baseName: 'AllowIncorrectBarcodes',
            type: 'boolean',
        },
        {
            name: 'allowInvertImage',
            baseName: 'AllowInvertImage',
            type: 'boolean',
        },
        {
            name: 'allowMicroWhiteSpotsRemoving',
            baseName: 'AllowMicroWhiteSpotsRemoving',
            type: 'boolean',
        },
        {
            name: 'allowOneDFastBarcodesDetector',
            baseName: 'AllowOneDFastBarcodesDetector',
            type: 'boolean',
        },
        {
            name: 'allowOneDWipedBarsRestoration',
            baseName: 'AllowOneDWipedBarsRestoration',
            type: 'boolean',
        },
        {
            name: 'allowQRMicroQrRestoration',
            baseName: 'AllowQRMicroQrRestoration',
            type: 'boolean',
        },
        {
            name: 'allowRegularImage',
            baseName: 'AllowRegularImage',
            type: 'boolean',
        },
        {
            name: 'allowSaltAndPepperFiltering',
            baseName: 'AllowSaltAndPepperFiltering',
            type: 'boolean',
        },
        {
            name: 'allowWhiteSpotsRemoving',
            baseName: 'AllowWhiteSpotsRemoving',
            type: 'boolean',
        },
        {
            name: 'checkMore1DVariants',
            baseName: 'CheckMore1DVariants',
            type: 'boolean',
        },
        {
            name: 'fastScanOnly',
            baseName: 'FastScanOnly',
            type: 'boolean',
        },
        {
            name: 'allowAdditionalRestorations',
            baseName: 'AllowAdditionalRestorations',
            type: 'boolean',
        },
        {
            name: 'regionLikelihoodThresholdPercent',
            baseName: 'RegionLikelihoodThresholdPercent',
            type: 'number',
        },
        {
            name: 'scanWindowSizes',
            baseName: 'ScanWindowSizes',
            type: 'Array<number>',
        },
        {
            name: 'similarity',
            baseName: 'Similarity',
            type: 'number',
        },
        {
            name: 'skipDiagonalSearch',
            baseName: 'SkipDiagonalSearch',
            type: 'boolean',
        },
        {
            name: 'readTinyBarcodes',
            baseName: 'ReadTinyBarcodes',
            type: 'boolean',
        },
        {
            name: 'australianPostEncodingTable',
            baseName: 'AustralianPostEncodingTable',
            type: 'CustomerInformationInterpretingType',
        },
        {
            name: 'ignoreEndingFillingPatternsForCTable',
            baseName: 'IgnoreEndingFillingPatternsForCTable',
            type: 'boolean',
        },
    ];

    static getAttributeTypeMap() {
        return ReaderParams.attributeTypeMap;
    }
}

/**
 * Wrapper around Drawing.Point for proper specification.
 */
export class RegionPoint {
    /**
     * X-coordinate
     */
    'X': number;
    /**
     * Y-coordinate
     */
    'Y': number;

    static attributeTypeMap: Array<{ name: string; baseName: string; type: string }> = [
        {
            name: 'X',
            baseName: 'X',
            type: 'number',
        },
        {
            name: 'Y',
            baseName: 'Y',
            type: 'number',
        },
    ];

    static getAttributeTypeMap() {
        return RegionPoint.attributeTypeMap;
    }
}

/**
 * Created image info.
 */
export class ResultImageInfo {
    /**
     * Result file size.
     */
    'fileSize': number;
    /**
     * Result image width.
     */
    'imageWidth'?: number;
    /**
     * Result image height.
     */
    'imageHeight'?: number;

    static attributeTypeMap: Array<{ name: string; baseName: string; type: string }> = [
        {
            name: 'fileSize',
            baseName: 'FileSize',
            type: 'number',
        },
        {
            name: 'imageWidth',
            baseName: 'ImageWidth',
            type: 'number',
        },
        {
            name: 'imageHeight',
            baseName: 'ImageHeight',
            type: 'number',
        },
    ];

    static getAttributeTypeMap() {
        return ResultImageInfo.attributeTypeMap;
    }
}

/**
 * Storage exists
 */
export class StorageExist {
    /**
     * Shows that the storage exists.
     */
    'exists': boolean;

    static attributeTypeMap: Array<{ name: string; baseName: string; type: string }> = [
        {
            name: 'exists',
            baseName: 'Exists',
            type: 'boolean',
        },
    ];

    static getAttributeTypeMap() {
        return StorageExist.attributeTypeMap;
    }
}

/**
 * File or folder information
 */
export class StorageFile {
    /**
     * File or folder name.
     */
    'name'?: string;
    /**
     * True if it is a folder.
     */
    'isFolder': boolean;
    /**
     * File or folder last modified DateTime.
     */
    'modifiedDate'?: Date;
    /**
     * File or folder size.
     */
    'size': number;
    /**
     * File or folder path.
     */
    'path'?: string;

    static attributeTypeMap: Array<{ name: string; baseName: string; type: string }> = [
        {
            name: 'name',
            baseName: 'Name',
            type: 'string',
        },
        {
            name: 'isFolder',
            baseName: 'IsFolder',
            type: 'boolean',
        },
        {
            name: 'modifiedDate',
            baseName: 'ModifiedDate',
            type: 'Date',
        },
        {
            name: 'size',
            baseName: 'Size',
            type: 'number',
        },
        {
            name: 'path',
            baseName: 'Path',
            type: 'string',
        },
    ];

    static getAttributeTypeMap() {
        return StorageFile.attributeTypeMap;
    }
}

/**
 * QR structured append parameters.
 */
export class StructuredAppend {
    /**
     * The index of the QR structured append mode barcode. Index starts from 0.
     */
    'sequenceIndicator'?: number;
    /**
     * QR structured append mode barcodes quantity. Max value is 16.
     */
    'totalCount'?: number;
    /**
     * QR structured append mode parity data.
     */
    'parityByte'?: number;

    static attributeTypeMap: Array<{ name: string; baseName: string; type: string }> = [
        {
            name: 'sequenceIndicator',
            baseName: 'SequenceIndicator',
            type: 'number',
        },
        {
            name: 'totalCount',
            baseName: 'TotalCount',
            type: 'number',
        },
        {
            name: 'parityByte',
            baseName: 'ParityByte',
            type: 'number',
        },
    ];

    static getAttributeTypeMap() {
        return StructuredAppend.attributeTypeMap;
    }
}

/**
 *
 */
export enum TextAlignment {
    Left = 'Left',
    Center = 'Center',
    Right = 'Right',
}
export class FileVersion {
    /**
     * File or folder name.
     */
    'name'?: string;
    /**
     * True if it is a folder.
     */
    'isFolder': boolean;
    /**
     * File or folder last modified DateTime.
     */
    'modifiedDate'?: Date;
    /**
     * File or folder size.
     */
    'size': number;
    /**
     * File or folder path.
     */
    'path'?: string;
    /**
     * File Version ID.
     */
    'versionId'?: string;
    /**
     * Specifies whether the file is (true) or is not (false) the latest version of an file.
     */
    'isLatest': boolean;

    static attributeTypeMap: Array<{ name: string; baseName: string; type: string }> = [
        {
            name: 'name',
            baseName: 'Name',
            type: 'string',
        },
        {
            name: 'isFolder',
            baseName: 'IsFolder',
            type: 'boolean',
        },
        {
            name: 'modifiedDate',
            baseName: 'ModifiedDate',
            type: 'Date',
        },
        {
            name: 'size',
            baseName: 'Size',
            type: 'number',
        },
        {
            name: 'path',
            baseName: 'Path',
            type: 'string',
        },
        {
            name: 'versionId',
            baseName: 'VersionId',
            type: 'string',
        },
        {
            name: 'isLatest',
            baseName: 'IsLatest',
            type: 'boolean',
        },
    ];

    static getAttributeTypeMap() {
        return FileVersion.attributeTypeMap;
    }
}

// BarcodeApi

/**
 * Generate barcode.
 */
export class GetBarcodeGenerateRequest {
    /**
     * Type of barcode to generate.
     */
    'type':
        | 'Codabar'
        | 'Code11'
        | 'Code39Standard'
        | 'Code39Extended'
        | 'Code93Standard'
        | 'Code93Extended'
        | 'Code128'
        | 'GS1Code128'
        | 'EAN8'
        | 'EAN13'
        | 'EAN14'
        | 'SCC14'
        | 'SSCC18'
        | 'UPCA'
        | 'UPCE'
        | 'ISBN'
        | 'ISSN'
        | 'ISMN'
        | 'Standard2of5'
        | 'Interleaved2of5'
        | 'Matrix2of5'
        | 'ItalianPost25'
        | 'IATA2of5'
        | 'ITF14'
        | 'ITF6'
        | 'MSI'
        | 'VIN'
        | 'DeutschePostIdentcode'
        | 'DeutschePostLeitcode'
        | 'OPC'
        | 'PZN'
        | 'Code16K'
        | 'Pharmacode'
        | 'DataMatrix'
        | 'QR'
        | 'Aztec'
        | 'Pdf417'
        | 'MacroPdf417'
        | 'AustraliaPost'
        | 'Postnet'
        | 'Planet'
        | 'OneCode'
        | 'RM4SCC'
        | 'DatabarOmniDirectional'
        | 'DatabarTruncated'
        | 'DatabarLimited'
        | 'DatabarExpanded'
        | 'SingaporePost'
        | 'GS1DataMatrix'
        | 'AustralianPosteParcel'
        | 'SwissPostParcel'
        | 'PatchCode'
        | 'DatabarExpandedStacked'
        | 'DatabarStacked'
        | 'DatabarStackedOmniDirectional'
        | 'MicroPdf417'
        | 'GS1QR'
        | 'MaxiCode'
        | 'Code32'
        | 'DataLogic2of5'
        | 'DotCode'
        | 'DutchKIX'
        | 'UpcaGs1Code128Coupon'
        | 'UpcaGs1DatabarCoupon'
        | 'CodablockF'
        | 'GS1CodablockF'
        | 'Mailmark'
        | 'GS1DotCode'
        | 'HanXin'
        | 'GS1HanXin'
        | 'GS1Aztec';
    /**
     * Text to encode.
     */
    'text': string;
    /**
     * Text that will be displayed instead of codetext in 2D barcodes.
Used for: Aztec, Pdf417, DataMatrix, QR, MaxiCode, DotCode
     */
    'twoDDisplayText'?: string;
    /**
     * Specify the displaying Text Location, set to CodeLocation.None to hide CodeText.
Default value: CodeLocation.Below.
     */
    'textLocation'?: 'Below' | 'Above' | 'None';
    /**
     * Text alignment.
     */
    'textAlignment'?: 'Left' | 'Center' | 'Right';
    /**
     * Specify the displaying CodeText's Color.
Default value: Color.Black.
     */
    'textColor'?: string;
    /**
     * Specify FontSizeMode. If FontSizeMode is set to Auto, font size will be calculated automatically based on xDimension value.
It is recommended to use FontSizeMode.Auto especially in AutoSizeMode.Nearest or AutoSizeMode.Interpolation.
Default value: FontSizeMode.Auto.
     */
    'fontSizeMode'?: 'Auto' | 'Manual';
    /**
     * Specify word wraps (line breaks) within text.
Default value: false.
     */
    'noWrap'?: boolean;
    /**
     * Resolution of the BarCode image.
One value for both dimensions.
Default value: 96 dpi.
     */
    'resolution'?: number;
    /**
     * @deprecated Use 'Resolution' instead.
     */
    'resolutionX'?: number;
    /**
     * @deprecated Use 'Resolution' instead.
     */
    'resolutionY'?: number;
    /**
     * The smallest width of the unit of BarCode bars or spaces.
Increase this will increase the whole barcode image width.
Ignored if AutoSizeMode property is set to AutoSizeMode.Nearest or AutoSizeMode.Interpolation.
     */
    'dimensionX'?: number;
    /**
     * Space between the CodeText and the BarCode in Unit value.
Default value: 2pt.
Ignored for EAN8, EAN13, UPCE, UPCA, ISBN, ISMN, ISSN, UpcaGs1DatabarCoupon.
     */
    'textSpace'?: number;
    /**
     * Common Units for all measuring in query. Default units: pixel.
     */
    'units'?: 'Pixel' | 'Point' | 'Inch' | 'Millimeter';
    /**
     * Specifies the different types of automatic sizing modes.
Default value: AutoSizeMode.None.
     */
    'sizeMode'?: 'None' | 'Nearest' | 'Interpolation';
    /**
     * Height of the barcode in given units. Default units: pixel.
     */
    'barHeight'?: number;
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
     * Background color of the barcode image.
Default value: Color.White.
     */
    'backColor'?: string;
    /**
     * Bars color.
Default value: Color.Black.
     */
    'barColor'?: string;
    /**
     * Border color.
Default value: Color.Black.
     */
    'borderColor'?: string;
    /**
     * Border width.
Default value: 0.
Ignored if Visible is set to false.
     */
    'borderWidth'?: number;
    /**
     * Border dash style.
Default value: BorderDashStyle.Solid.
     */
    'borderDashStyle'?: 'Solid' | 'Dash' | 'Dot' | 'DashDot' | 'DashDotDot';
    /**
     * Border visibility. If false than parameter Width is always ignored (0).
Default value: false.
     */
    'borderVisible'?: boolean;
    /**
     * Enable checksum during generation 1D barcodes.
Default is treated as Yes for symbology which must contain checksum, as No where checksum only possible.
Checksum is possible: Code39 Standard/Extended, Standard2of5, Interleaved2of5, Matrix2of5, ItalianPost25, DeutschePostIdentcode, DeutschePostLeitcode, VIN, Codabar
Checksum always used: Rest symbology
     */
    'enableChecksum'?: 'Default' | 'Yes' | 'No';
    /**
     * Indicates whether explains the character "\" as an escape character in CodeText property. Used for Pdf417, DataMatrix, Code128 only
If the EnableEscape is true, "\" will be explained as a special escape character. Otherwise, "\" acts as normal characters.
Aspose.BarCode supports input decimal ascii code and mnemonic for ASCII control-code characters. For example, \013 and \\CR stands for CR.
     */
    'enableEscape'?: boolean;
    /**
     * Value indicating whether bars are filled.
Only for 1D barcodes.
Default value: true.
     */
    'filledBars'?: boolean;
    /**
     * Always display checksum digit in the human readable text for Code128 and GS1Code128 barcodes.
     */
    'alwaysShowChecksum'?: boolean;
    /**
     * Wide bars to Narrow bars ratio.
Default value: 3, that is, wide bars are 3 times as wide as narrow bars.
Used for ITF, PZN, PharmaCode, Standard2of5, Interleaved2of5, Matrix2of5, ItalianPost25, IATA2of5, VIN, DeutschePost, OPC, Code32, DataLogic2of5, PatchCode, Code39Extended, Code39Standard
     */
    'wideNarrowRatio'?: number;
    /**
     * Only for 1D barcodes.
If codetext is incorrect and value set to true - exception will be thrown. Otherwise codetext will be corrected to match barcode's specification.
Exception always will be thrown for: Databar symbology if codetext is incorrect.
Exception always will not be thrown for: AustraliaPost, SingaporePost, Code39Extended, Code93Extended, Code16K, Code128 symbology if codetext is incorrect.
     */
    'validateText'?: boolean;
    /**
     * Supplement parameters.
Used for Interleaved2of5, Standard2of5, EAN13, EAN8, UPCA, UPCE, ISBN, ISSN, ISMN.
     */
    'supplementData'?: string;
    /**
     * Space between main the BarCode and supplement BarCode.
     */
    'supplementSpace'?: number;
    /**
     * Bars reduction value that is used to compensate ink spread while printing.
     */
    'barWidthReduction'?: number;
    /**
     * Indicates whether is used anti-aliasing mode to render image. Anti-aliasing mode is applied to barcode and text drawing.
     */
    'useAntiAlias'?: boolean;
    /**
     * Result image format.
     */
    'format'?: string;

    /**
     * @param type Type of barcode to generate.
     
     * @param text Text to encode.
     */
    constructor(
        type:
            | 'Codabar'
            | 'Code11'
            | 'Code39Standard'
            | 'Code39Extended'
            | 'Code93Standard'
            | 'Code93Extended'
            | 'Code128'
            | 'GS1Code128'
            | 'EAN8'
            | 'EAN13'
            | 'EAN14'
            | 'SCC14'
            | 'SSCC18'
            | 'UPCA'
            | 'UPCE'
            | 'ISBN'
            | 'ISSN'
            | 'ISMN'
            | 'Standard2of5'
            | 'Interleaved2of5'
            | 'Matrix2of5'
            | 'ItalianPost25'
            | 'IATA2of5'
            | 'ITF14'
            | 'ITF6'
            | 'MSI'
            | 'VIN'
            | 'DeutschePostIdentcode'
            | 'DeutschePostLeitcode'
            | 'OPC'
            | 'PZN'
            | 'Code16K'
            | 'Pharmacode'
            | 'DataMatrix'
            | 'QR'
            | 'Aztec'
            | 'Pdf417'
            | 'MacroPdf417'
            | 'AustraliaPost'
            | 'Postnet'
            | 'Planet'
            | 'OneCode'
            | 'RM4SCC'
            | 'DatabarOmniDirectional'
            | 'DatabarTruncated'
            | 'DatabarLimited'
            | 'DatabarExpanded'
            | 'SingaporePost'
            | 'GS1DataMatrix'
            | 'AustralianPosteParcel'
            | 'SwissPostParcel'
            | 'PatchCode'
            | 'DatabarExpandedStacked'
            | 'DatabarStacked'
            | 'DatabarStackedOmniDirectional'
            | 'MicroPdf417'
            | 'GS1QR'
            | 'MaxiCode'
            | 'Code32'
            | 'DataLogic2of5'
            | 'DotCode'
            | 'DutchKIX'
            | 'UpcaGs1Code128Coupon'
            | 'UpcaGs1DatabarCoupon'
            | 'CodablockF'
            | 'GS1CodablockF'
            | 'Mailmark'
            | 'GS1DotCode'
            | 'HanXin'
            | 'GS1HanXin'
            | 'GS1Aztec',
        text: string
    ) {
        this.type = type;
        this.text = text;
    }
}

/**
 * Recognize barcode from a file on server.
 */
export class GetBarcodeRecognizeRequest {
    /**
     * The image file name.
     */
    'name': string;
    /**
     * The type of barcode to read.
     */
    'type'?:
        | 'all'
        | 'AustraliaPost'
        | 'Aztec'
        | 'ISBN'
        | 'Codabar'
        | 'Code11'
        | 'Code128'
        | 'GS1Code128'
        | 'Code39Extended'
        | 'Code39Standard'
        | 'Code93Extended'
        | 'Code93Standard'
        | 'DataMatrix'
        | 'DeutschePostIdentcode'
        | 'DeutschePostLeitcode'
        | 'EAN13'
        | 'EAN14'
        | 'EAN8'
        | 'IATA2of5'
        | 'Interleaved2of5'
        | 'ISSN'
        | 'ISMN'
        | 'ItalianPost25'
        | 'ITF14'
        | 'ITF6'
        | 'MacroPdf417'
        | 'Matrix2of5'
        | 'MSI'
        | 'OneCode'
        | 'OPC'
        | 'PatchCode'
        | 'Pdf417'
        | 'MicroPdf417'
        | 'Planet'
        | 'Postnet'
        | 'PZN'
        | 'QR'
        | 'MicroQR'
        | 'RM4SCC'
        | 'SCC14'
        | 'SSCC18'
        | 'Standard2of5'
        | 'Supplement'
        | 'UPCA'
        | 'UPCE'
        | 'VIN'
        | 'Pharmacode'
        | 'GS1DataMatrix'
        | 'DatabarOmniDirectional'
        | 'DatabarTruncated'
        | 'DatabarLimited'
        | 'DatabarExpanded'
        | 'SwissPostParcel'
        | 'AustralianPosteParcel'
        | 'Code16K'
        | 'DatabarStackedOmniDirectional'
        | 'DatabarStacked'
        | 'DatabarExpandedStacked'
        | 'CompactPdf417'
        | 'GS1QR'
        | 'MaxiCode'
        | 'MicrE13B'
        | 'Code32'
        | 'DataLogic2of5'
        | 'DotCode'
        | 'DutchKIX'
        | 'CodablockF'
        | 'Mailmark'
        | 'GS1DotCode'
        | 'HIBCCode39LIC'
        | 'HIBCCode128LIC'
        | 'HIBCAztecLIC'
        | 'HIBCDataMatrixLIC'
        | 'HIBCQRLIC'
        | 'HIBCCode39PAS'
        | 'HIBCCode128PAS'
        | 'HIBCAztecPAS'
        | 'HIBCDataMatrixPAS'
        | 'HIBCQRPAS'
        | 'HanXin'
        | 'GS1HanXin'
        | 'GS1Aztec'
        | 'GS1CompositeBar';
    /**
     * Enable checksum validation during recognition for 1D barcodes.
Default is treated as Yes for symbologies which must contain checksum, as No where checksum only possible.
Checksum never used: Codabar
Checksum is possible: Code39 Standard/Extended, Standard2of5, Interleaved2of5, Matrix2of5, ItalianPost25, DeutschePostIdentcode, DeutschePostLeitcode, VIN
Checksum always used: Rest symbologies
     */
    'checksumValidation'?: 'Default' | 'On' | 'Off';
    /**
     * A flag which force engine to detect codetext encoding for Unicode.
     */
    'detectEncoding'?: boolean;
    /**
     * Preset allows to configure recognition quality and speed manually.
You can quickly set up Preset by embedded presets: HighPerformance, NormalQuality,
HighQuality, MaxBarCodes or you can manually configure separate options.
Default value of Preset is NormalQuality.
     */
    'preset'?:
        | 'HighPerformance'
        | 'NormalQuality'
        | 'HighQualityDetection'
        | 'MaxQualityDetection'
        | 'HighQuality'
        | 'MaxBarCodes';
    /**
     * Set X of top left corner of area for recognition.
     */
    'rectX'?: number;
    /**
     * Set Y of top left corner of area for recognition.
     */
    'rectY'?: number;
    /**
     * Set Width of area for recognition.
     */
    'rectWidth'?: number;
    /**
     * Set Height of area for recognition.
     */
    'rectHeight'?: number;
    /**
     * Value indicating whether FNC symbol strip must be done.
     */
    'stripFNC'?: boolean;
    /**
     * Timeout of recognition process in milliseconds.
Default value is 15_000 (15 seconds).
Maximum value is 60_000 (1 minute).
In case of a timeout RequestTimeout (408) status will be returned.
Try reducing the image size to avoid timeout.
     */
    'timeout'?: number;
    /**
     * Window size for median smoothing. Typical values are 3 or 4. Default value is 3. AllowMedianSmoothing must be set.
     */
    'medianSmoothingWindowSize'?: number;
    /**
     * Allows engine to enable median smoothing as additional scan. Mode helps to recognize noised barcodes.
     */
    'allowMedianSmoothing'?: boolean;
    /**
     * Allows engine to recognize color barcodes on color background as additional scan. Extremely slow mode.
     */
    'allowComplexBackground'?: boolean;
    /**
     * Allows engine for Datamatrix to recognize dashed industrial Datamatrix barcodes.
Slow mode which helps only for dashed barcodes which consist from spots.
     */
    'allowDatamatrixIndustrialBarcodes'?: boolean;
    /**
     * Allows engine to recognize decreased image as additional scan. Size for decreasing is selected by internal engine algorithms.
Mode helps to recognize barcodes which are noised and blurred but captured with high resolution.
     */
    'allowDecreasedImage'?: boolean;
    /**
     * Allows engine to use gap between scans to increase recognition speed. Mode can make recognition problems with low height barcodes.
     */
    'allowDetectScanGap'?: boolean;
    /**
     * Allows engine to recognize barcodes which has incorrect checksum or incorrect values.
Mode can be used to recognize damaged barcodes with incorrect text.
     */
    'allowIncorrectBarcodes'?: boolean;
    /**
     * Allows engine to recognize inverse color image as additional scan. Mode can be used when barcode is white on black background.
     */
    'allowInvertImage'?: boolean;
    /**
     * Allows engine for Postal barcodes to recognize slightly noised images. Mode helps to recognize slightly damaged Postal barcodes.
     */
    'allowMicroWhiteSpotsRemoving'?: boolean;
    /**
     * Allows engine for 1D barcodes to quickly recognize high quality barcodes which fill almost whole image.
Mode helps to quickly recognize generated barcodes from Internet.
     */
    'allowOneDFastBarcodesDetector'?: boolean;
    /**
     * Allows engine for 1D barcodes to recognize barcodes with single wiped/glued bars in pattern.
     */
    'allowOneDWipedBarsRestoration'?: boolean;
    /**
     * Allows engine for QR/MicroQR to recognize damaged MicroQR barcodes.
     */
    'allowQRMicroQrRestoration'?: boolean;
    /**
     * Allows engine to recognize regular image without any restorations as main scan. Mode to recognize image as is.
     */
    'allowRegularImage'?: boolean;
    /**
     * Allows engine to recognize barcodes with salt and pepper noise type. Mode can remove small noise with white and black dots.
     */
    'allowSaltAndPepperFiltering'?: boolean;
    /**
     * Allows engine to recognize image without small white spots as additional scan. Mode helps to recognize noised image as well as median smoothing filtering.
     */
    'allowWhiteSpotsRemoving'?: boolean;
    /**
     * Allows engine to recognize 1D barcodes with checksum by checking more recognition variants. Default value: False.
     */
    'checkMore1DVariants'?: boolean;
    /**
     * Allows engine for 1D barcodes to quickly recognize middle slice of an image and return result without using any time-consuming algorithms.
Default value: False.
     */
    'fastScanOnly'?: boolean;
    /**
     * Allows engine using additional image restorations to recognize corrupted barcodes. At this time, it is used only in MicroPdf417 barcode type.
Default value: False.
     */
    'allowAdditionalRestorations'?: boolean;
    /**
     * Sets threshold for detected regions that may contain barcodes.
Value 0.7 means that bottom 70% of possible regions are filtered out and not processed further.
Region likelihood threshold must be between [0.05, 0.9]
Use high values for clear images with few barcodes.
Use low values for images with many barcodes or for noisy images.
Low value may lead to a bigger recognition time.
     */
    'regionLikelihoodThresholdPercent'?: number;
    /**
     * Scan window sizes in pixels.
Allowed sizes are 10, 15, 20, 25, 30.
Scanning with small window size takes more time and provides more accuracy but may fail in detecting very big barcodes.
Combining of several window sizes can improve detection quality.
     */
    'scanWindowSizes'?: Array<number>;
    /**
     * Similarity coefficient depends on how homogeneous barcodes are.
Use high value for for clear barcodes.
Use low values to detect barcodes that ara partly damaged or not lighten evenly.
Similarity coefficient must be between [0.5, 0.9]
     */
    'similarity'?: number;
    /**
     * Allows detector to skip search for diagonal barcodes.
Setting it to false will increase detection time but allow to find diagonal barcodes that can be missed otherwise.
Enabling of diagonal search leads to a bigger detection time.
     */
    'skipDiagonalSearch'?: boolean;
    /**
     * Allows engine to recognize tiny barcodes on large images. Ignored if AllowIncorrectBarcodes is set to True. Default value: False.
     */
    'readTinyBarcodes'?: boolean;
    /**
     * Interpreting Type for the Customer Information of AustralianPost BarCode.Default is CustomerInformationInterpretingType.Other.
     */
    'australianPostEncodingTable'?: 'CTable' | 'NTable' | 'Other';
    /**
     * The flag which force AustraliaPost decoder to ignore last filling patterns in Customer Information Field during decoding as CTable method.
CTable encoding method does not have any gaps in encoding table and sequence "333" of filling patterns is decoded as letter "z".
     */
    'ignoreEndingFillingPatternsForCTable'?: boolean;
    /**
     * The image storage.
     */
    'storage'?: string;
    /**
     * The image folder.
     */
    'folder'?: string;

    /**
     * @param name The image file name.
     */
    constructor(name: string) {
        this.name = name;
    }
}

/**
 * Recognize barcode from an url or from request body. Request body can contain raw data bytes of the image with content-type \"application/octet-stream\". An image can also be passed as a form field.
 */
export class PostBarcodeRecognizeFromUrlOrContentRequest {
    /**
     * The type of barcode to read.
     */
    'type'?:
        | 'all'
        | 'AustraliaPost'
        | 'Aztec'
        | 'ISBN'
        | 'Codabar'
        | 'Code11'
        | 'Code128'
        | 'GS1Code128'
        | 'Code39Extended'
        | 'Code39Standard'
        | 'Code93Extended'
        | 'Code93Standard'
        | 'DataMatrix'
        | 'DeutschePostIdentcode'
        | 'DeutschePostLeitcode'
        | 'EAN13'
        | 'EAN14'
        | 'EAN8'
        | 'IATA2of5'
        | 'Interleaved2of5'
        | 'ISSN'
        | 'ISMN'
        | 'ItalianPost25'
        | 'ITF14'
        | 'ITF6'
        | 'MacroPdf417'
        | 'Matrix2of5'
        | 'MSI'
        | 'OneCode'
        | 'OPC'
        | 'PatchCode'
        | 'Pdf417'
        | 'MicroPdf417'
        | 'Planet'
        | 'Postnet'
        | 'PZN'
        | 'QR'
        | 'MicroQR'
        | 'RM4SCC'
        | 'SCC14'
        | 'SSCC18'
        | 'Standard2of5'
        | 'Supplement'
        | 'UPCA'
        | 'UPCE'
        | 'VIN'
        | 'Pharmacode'
        | 'GS1DataMatrix'
        | 'DatabarOmniDirectional'
        | 'DatabarTruncated'
        | 'DatabarLimited'
        | 'DatabarExpanded'
        | 'SwissPostParcel'
        | 'AustralianPosteParcel'
        | 'Code16K'
        | 'DatabarStackedOmniDirectional'
        | 'DatabarStacked'
        | 'DatabarExpandedStacked'
        | 'CompactPdf417'
        | 'GS1QR'
        | 'MaxiCode'
        | 'MicrE13B'
        | 'Code32'
        | 'DataLogic2of5'
        | 'DotCode'
        | 'DutchKIX'
        | 'CodablockF'
        | 'Mailmark'
        | 'GS1DotCode'
        | 'HIBCCode39LIC'
        | 'HIBCCode128LIC'
        | 'HIBCAztecLIC'
        | 'HIBCDataMatrixLIC'
        | 'HIBCQRLIC'
        | 'HIBCCode39PAS'
        | 'HIBCCode128PAS'
        | 'HIBCAztecPAS'
        | 'HIBCDataMatrixPAS'
        | 'HIBCQRPAS'
        | 'HanXin'
        | 'GS1HanXin'
        | 'GS1Aztec'
        | 'GS1CompositeBar';
    /**
     * Enable checksum validation during recognition for 1D barcodes.
Default is treated as Yes for symbologies which must contain checksum, as No where checksum only possible.
Checksum never used: Codabar
Checksum is possible: Code39 Standard/Extended, Standard2of5, Interleaved2of5, Matrix2of5, ItalianPost25, DeutschePostIdentcode, DeutschePostLeitcode, VIN
Checksum always used: Rest symbologies
     */
    'checksumValidation'?: 'Default' | 'On' | 'Off';
    /**
     * A flag which force engine to detect codetext encoding for Unicode.
     */
    'detectEncoding'?: boolean;
    /**
     * Preset allows to configure recognition quality and speed manually.
You can quickly set up Preset by embedded presets: HighPerformance, NormalQuality,
HighQuality, MaxBarCodes or you can manually configure separate options.
Default value of Preset is NormalQuality.
     */
    'preset'?:
        | 'HighPerformance'
        | 'NormalQuality'
        | 'HighQualityDetection'
        | 'MaxQualityDetection'
        | 'HighQuality'
        | 'MaxBarCodes';
    /**
     * Set X of top left corner of area for recognition.
     */
    'rectX'?: number;
    /**
     * Set Y of top left corner of area for recognition.
     */
    'rectY'?: number;
    /**
     * Set Width of area for recognition.
     */
    'rectWidth'?: number;
    /**
     * Set Height of area for recognition.
     */
    'rectHeight'?: number;
    /**
     * Value indicating whether FNC symbol strip must be done.
     */
    'stripFNC'?: boolean;
    /**
     * Timeout of recognition process in milliseconds.
Default value is 15_000 (15 seconds).
Maximum value is 60_000 (1 minute).
In case of a timeout RequestTimeout (408) status will be returned.
Try reducing the image size to avoid timeout.
     */
    'timeout'?: number;
    /**
     * Window size for median smoothing. Typical values are 3 or 4. Default value is 3. AllowMedianSmoothing must be set.
     */
    'medianSmoothingWindowSize'?: number;
    /**
     * Allows engine to enable median smoothing as additional scan. Mode helps to recognize noised barcodes.
     */
    'allowMedianSmoothing'?: boolean;
    /**
     * Allows engine to recognize color barcodes on color background as additional scan. Extremely slow mode.
     */
    'allowComplexBackground'?: boolean;
    /**
     * Allows engine for Datamatrix to recognize dashed industrial Datamatrix barcodes.
Slow mode which helps only for dashed barcodes which consist from spots.
     */
    'allowDatamatrixIndustrialBarcodes'?: boolean;
    /**
     * Allows engine to recognize decreased image as additional scan. Size for decreasing is selected by internal engine algorithms.
Mode helps to recognize barcodes which are noised and blurred but captured with high resolution.
     */
    'allowDecreasedImage'?: boolean;
    /**
     * Allows engine to use gap between scans to increase recognition speed. Mode can make recognition problems with low height barcodes.
     */
    'allowDetectScanGap'?: boolean;
    /**
     * Allows engine to recognize barcodes which has incorrect checksum or incorrect values.
Mode can be used to recognize damaged barcodes with incorrect text.
     */
    'allowIncorrectBarcodes'?: boolean;
    /**
     * Allows engine to recognize inverse color image as additional scan. Mode can be used when barcode is white on black background.
     */
    'allowInvertImage'?: boolean;
    /**
     * Allows engine for Postal barcodes to recognize slightly noised images. Mode helps to recognize slightly damaged Postal barcodes.
     */
    'allowMicroWhiteSpotsRemoving'?: boolean;
    /**
     * Allows engine for 1D barcodes to quickly recognize high quality barcodes which fill almost whole image.
Mode helps to quickly recognize generated barcodes from Internet.
     */
    'allowOneDFastBarcodesDetector'?: boolean;
    /**
     * Allows engine for 1D barcodes to recognize barcodes with single wiped/glued bars in pattern.
     */
    'allowOneDWipedBarsRestoration'?: boolean;
    /**
     * Allows engine for QR/MicroQR to recognize damaged MicroQR barcodes.
     */
    'allowQRMicroQrRestoration'?: boolean;
    /**
     * Allows engine to recognize regular image without any restorations as main scan. Mode to recognize image as is.
     */
    'allowRegularImage'?: boolean;
    /**
     * Allows engine to recognize barcodes with salt and pepper noise type. Mode can remove small noise with white and black dots.
     */
    'allowSaltAndPepperFiltering'?: boolean;
    /**
     * Allows engine to recognize image without small white spots as additional scan. Mode helps to recognize noised image as well as median smoothing filtering.
     */
    'allowWhiteSpotsRemoving'?: boolean;
    /**
     * Allows engine to recognize 1D barcodes with checksum by checking more recognition variants. Default value: False.
     */
    'checkMore1DVariants'?: boolean;
    /**
     * Allows engine for 1D barcodes to quickly recognize middle slice of an image and return result without using any time-consuming algorithms.
Default value: False.
     */
    'fastScanOnly'?: boolean;
    /**
     * Allows engine using additional image restorations to recognize corrupted barcodes. At this time, it is used only in MicroPdf417 barcode type.
Default value: False.
     */
    'allowAdditionalRestorations'?: boolean;
    /**
     * Sets threshold for detected regions that may contain barcodes.
Value 0.7 means that bottom 70% of possible regions are filtered out and not processed further.
Region likelihood threshold must be between [0.05, 0.9]
Use high values for clear images with few barcodes.
Use low values for images with many barcodes or for noisy images.
Low value may lead to a bigger recognition time.
     */
    'regionLikelihoodThresholdPercent'?: number;
    /**
     * Scan window sizes in pixels.
Allowed sizes are 10, 15, 20, 25, 30.
Scanning with small window size takes more time and provides more accuracy but may fail in detecting very big barcodes.
Combining of several window sizes can improve detection quality.
     */
    'scanWindowSizes'?: Array<number>;
    /**
     * Similarity coefficient depends on how homogeneous barcodes are.
Use high value for for clear barcodes.
Use low values to detect barcodes that ara partly damaged or not lighten evenly.
Similarity coefficient must be between [0.5, 0.9]
     */
    'similarity'?: number;
    /**
     * Allows detector to skip search for diagonal barcodes.
Setting it to false will increase detection time but allow to find diagonal barcodes that can be missed otherwise.
Enabling of diagonal search leads to a bigger detection time.
     */
    'skipDiagonalSearch'?: boolean;
    /**
     * Allows engine to recognize tiny barcodes on large images. Ignored if AllowIncorrectBarcodes is set to True. Default value: False.
     */
    'readTinyBarcodes'?: boolean;
    /**
     * Interpreting Type for the Customer Information of AustralianPost BarCode.Default is CustomerInformationInterpretingType.Other.
     */
    'australianPostEncodingTable'?: 'CTable' | 'NTable' | 'Other';
    /**
     * The flag which force AustraliaPost decoder to ignore last filling patterns in Customer Information Field during decoding as CTable method.
CTable encoding method does not have any gaps in encoding table and sequence "333" of filling patterns is decoded as letter "z".
     */
    'ignoreEndingFillingPatternsForCTable'?: boolean;
    /**
     * The image file url.
     */
    'url'?: string;
    /**
     * Image data
     */
    'image'?: Buffer;
}

/**
 * Generate multiple barcodes and return in response stream
 */
export class PostGenerateMultipleRequest {
    /**
     * List of barcodes
     */
    'generatorParamsList': GeneratorParamsList;
    /**
     * Format to return stream in
     */
    'format'?: string = 'png';

    /**
     * @param generatorParamsList List of barcodes
     */
    constructor(generatorParamsList: GeneratorParamsList) {
        this.generatorParamsList = generatorParamsList;
    }
}

/**
 * Generate barcode and save on server (from query params or from file with json or xml content)
 */
export class PutBarcodeGenerateFileRequest {
    /**
     * The image file name.
     */
    'name': string;
    /**
     * Type of barcode to generate.
     */
    'type':
        | 'Codabar'
        | 'Code11'
        | 'Code39Standard'
        | 'Code39Extended'
        | 'Code93Standard'
        | 'Code93Extended'
        | 'Code128'
        | 'GS1Code128'
        | 'EAN8'
        | 'EAN13'
        | 'EAN14'
        | 'SCC14'
        | 'SSCC18'
        | 'UPCA'
        | 'UPCE'
        | 'ISBN'
        | 'ISSN'
        | 'ISMN'
        | 'Standard2of5'
        | 'Interleaved2of5'
        | 'Matrix2of5'
        | 'ItalianPost25'
        | 'IATA2of5'
        | 'ITF14'
        | 'ITF6'
        | 'MSI'
        | 'VIN'
        | 'DeutschePostIdentcode'
        | 'DeutschePostLeitcode'
        | 'OPC'
        | 'PZN'
        | 'Code16K'
        | 'Pharmacode'
        | 'DataMatrix'
        | 'QR'
        | 'Aztec'
        | 'Pdf417'
        | 'MacroPdf417'
        | 'AustraliaPost'
        | 'Postnet'
        | 'Planet'
        | 'OneCode'
        | 'RM4SCC'
        | 'DatabarOmniDirectional'
        | 'DatabarTruncated'
        | 'DatabarLimited'
        | 'DatabarExpanded'
        | 'SingaporePost'
        | 'GS1DataMatrix'
        | 'AustralianPosteParcel'
        | 'SwissPostParcel'
        | 'PatchCode'
        | 'DatabarExpandedStacked'
        | 'DatabarStacked'
        | 'DatabarStackedOmniDirectional'
        | 'MicroPdf417'
        | 'GS1QR'
        | 'MaxiCode'
        | 'Code32'
        | 'DataLogic2of5'
        | 'DotCode'
        | 'DutchKIX'
        | 'UpcaGs1Code128Coupon'
        | 'UpcaGs1DatabarCoupon'
        | 'CodablockF'
        | 'GS1CodablockF'
        | 'Mailmark'
        | 'GS1DotCode'
        | 'HanXin'
        | 'GS1HanXin'
        | 'GS1Aztec';
    /**
     * Text to encode.
     */
    'text': string;
    /**
     * Text that will be displayed instead of codetext in 2D barcodes.
Used for: Aztec, Pdf417, DataMatrix, QR, MaxiCode, DotCode
     */
    'twoDDisplayText'?: string;
    /**
     * Specify the displaying Text Location, set to CodeLocation.None to hide CodeText.
Default value: CodeLocation.Below.
     */
    'textLocation'?: 'Below' | 'Above' | 'None';
    /**
     * Text alignment.
     */
    'textAlignment'?: 'Left' | 'Center' | 'Right';
    /**
     * Specify the displaying CodeText's Color.
Default value: Color.Black.
     */
    'textColor'?: string;
    /**
     * Specify FontSizeMode. If FontSizeMode is set to Auto, font size will be calculated automatically based on xDimension value.
It is recommended to use FontSizeMode.Auto especially in AutoSizeMode.Nearest or AutoSizeMode.Interpolation.
Default value: FontSizeMode.Auto.
     */
    'fontSizeMode'?: 'Auto' | 'Manual';
    /**
     * Specify word wraps (line breaks) within text.
Default value: false.
     */
    'noWrap'?: boolean;
    /**
     * Resolution of the BarCode image.
One value for both dimensions.
Default value: 96 dpi.
     */
    'resolution'?: number;
    /**
     * @deprecated Use 'Resolution' instead.
     */
    'resolutionX'?: number;
    /**
     * @deprecated Use 'Resolution' instead.
     */
    'resolutionY'?: number;
    /**
     * The smallest width of the unit of BarCode bars or spaces.
Increase this will increase the whole barcode image width.
Ignored if AutoSizeMode property is set to AutoSizeMode.Nearest or AutoSizeMode.Interpolation.
     */
    'dimensionX'?: number;
    /**
     * Space between the CodeText and the BarCode in Unit value.
Default value: 2pt.
Ignored for EAN8, EAN13, UPCE, UPCA, ISBN, ISMN, ISSN, UpcaGs1DatabarCoupon.
     */
    'textSpace'?: number;
    /**
     * Common Units for all measuring in query. Default units: pixel.
     */
    'units'?: 'Pixel' | 'Point' | 'Inch' | 'Millimeter';
    /**
     * Specifies the different types of automatic sizing modes.
Default value: AutoSizeMode.None.
     */
    'sizeMode'?: 'None' | 'Nearest' | 'Interpolation';
    /**
     * Height of the barcode in given units. Default units: pixel.
     */
    'barHeight'?: number;
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
     * Background color of the barcode image.
Default value: Color.White.
     */
    'backColor'?: string;
    /**
     * Bars color.
Default value: Color.Black.
     */
    'barColor'?: string;
    /**
     * Border color.
Default value: Color.Black.
     */
    'borderColor'?: string;
    /**
     * Border width.
Default value: 0.
Ignored if Visible is set to false.
     */
    'borderWidth'?: number;
    /**
     * Border dash style.
Default value: BorderDashStyle.Solid.
     */
    'borderDashStyle'?: 'Solid' | 'Dash' | 'Dot' | 'DashDot' | 'DashDotDot';
    /**
     * Border visibility. If false than parameter Width is always ignored (0).
Default value: false.
     */
    'borderVisible'?: boolean;
    /**
     * Enable checksum during generation 1D barcodes.
Default is treated as Yes for symbology which must contain checksum, as No where checksum only possible.
Checksum is possible: Code39 Standard/Extended, Standard2of5, Interleaved2of5, Matrix2of5, ItalianPost25, DeutschePostIdentcode, DeutschePostLeitcode, VIN, Codabar
Checksum always used: Rest symbology
     */
    'enableChecksum'?: 'Default' | 'Yes' | 'No';
    /**
     * Indicates whether explains the character "\" as an escape character in CodeText property. Used for Pdf417, DataMatrix, Code128 only
If the EnableEscape is true, "\" will be explained as a special escape character. Otherwise, "\" acts as normal characters.
Aspose.BarCode supports input decimal ascii code and mnemonic for ASCII control-code characters. For example, \013 and \\CR stands for CR.
     */
    'enableEscape'?: boolean;
    /**
     * Value indicating whether bars are filled.
Only for 1D barcodes.
Default value: true.
     */
    'filledBars'?: boolean;
    /**
     * Always display checksum digit in the human readable text for Code128 and GS1Code128 barcodes.
     */
    'alwaysShowChecksum'?: boolean;
    /**
     * Wide bars to Narrow bars ratio.
Default value: 3, that is, wide bars are 3 times as wide as narrow bars.
Used for ITF, PZN, PharmaCode, Standard2of5, Interleaved2of5, Matrix2of5, ItalianPost25, IATA2of5, VIN, DeutschePost, OPC, Code32, DataLogic2of5, PatchCode, Code39Extended, Code39Standard
     */
    'wideNarrowRatio'?: number;
    /**
     * Only for 1D barcodes.
If codetext is incorrect and value set to true - exception will be thrown. Otherwise codetext will be corrected to match barcode's specification.
Exception always will be thrown for: Databar symbology if codetext is incorrect.
Exception always will not be thrown for: AustraliaPost, SingaporePost, Code39Extended, Code93Extended, Code16K, Code128 symbology if codetext is incorrect.
     */
    'validateText'?: boolean;
    /**
     * Supplement parameters.
Used for Interleaved2of5, Standard2of5, EAN13, EAN8, UPCA, UPCE, ISBN, ISSN, ISMN.
     */
    'supplementData'?: string;
    /**
     * Space between main the BarCode and supplement BarCode.
     */
    'supplementSpace'?: number;
    /**
     * Bars reduction value that is used to compensate ink spread while printing.
     */
    'barWidthReduction'?: number;
    /**
     * Indicates whether is used anti-aliasing mode to render image. Anti-aliasing mode is applied to barcode and text drawing.
     */
    'useAntiAlias'?: boolean;
    /**
     * Image's storage.
     */
    'storage'?: string;
    /**
     * Image's folder.
     */
    'folder'?: string;
    /**
     * The image format.
     */
    'format'?: string;

    /**
     * @param name The image file name.
     
     * @param type Type of barcode to generate.
     
     * @param text Text to encode.
     */
    constructor(
        name: string,
        type:
            | 'Codabar'
            | 'Code11'
            | 'Code39Standard'
            | 'Code39Extended'
            | 'Code93Standard'
            | 'Code93Extended'
            | 'Code128'
            | 'GS1Code128'
            | 'EAN8'
            | 'EAN13'
            | 'EAN14'
            | 'SCC14'
            | 'SSCC18'
            | 'UPCA'
            | 'UPCE'
            | 'ISBN'
            | 'ISSN'
            | 'ISMN'
            | 'Standard2of5'
            | 'Interleaved2of5'
            | 'Matrix2of5'
            | 'ItalianPost25'
            | 'IATA2of5'
            | 'ITF14'
            | 'ITF6'
            | 'MSI'
            | 'VIN'
            | 'DeutschePostIdentcode'
            | 'DeutschePostLeitcode'
            | 'OPC'
            | 'PZN'
            | 'Code16K'
            | 'Pharmacode'
            | 'DataMatrix'
            | 'QR'
            | 'Aztec'
            | 'Pdf417'
            | 'MacroPdf417'
            | 'AustraliaPost'
            | 'Postnet'
            | 'Planet'
            | 'OneCode'
            | 'RM4SCC'
            | 'DatabarOmniDirectional'
            | 'DatabarTruncated'
            | 'DatabarLimited'
            | 'DatabarExpanded'
            | 'SingaporePost'
            | 'GS1DataMatrix'
            | 'AustralianPosteParcel'
            | 'SwissPostParcel'
            | 'PatchCode'
            | 'DatabarExpandedStacked'
            | 'DatabarStacked'
            | 'DatabarStackedOmniDirectional'
            | 'MicroPdf417'
            | 'GS1QR'
            | 'MaxiCode'
            | 'Code32'
            | 'DataLogic2of5'
            | 'DotCode'
            | 'DutchKIX'
            | 'UpcaGs1Code128Coupon'
            | 'UpcaGs1DatabarCoupon'
            | 'CodablockF'
            | 'GS1CodablockF'
            | 'Mailmark'
            | 'GS1DotCode'
            | 'HanXin'
            | 'GS1HanXin'
            | 'GS1Aztec',
        text: string
    ) {
        this.name = name;
        this.type = type;
        this.text = text;
    }
}

/**
 * Recognition of a barcode from file on server with parameters in body.
 */
export class PutBarcodeRecognizeFromBodyRequest {
    /**
     * The image file name.
     */
    'name': string;
    /**
     * BarcodeReader object with parameters.
     */
    'readerParams': ReaderParams;
    /**
     *
     */
    'type'?:
        | 'all'
        | 'AustraliaPost'
        | 'Aztec'
        | 'ISBN'
        | 'Codabar'
        | 'Code11'
        | 'Code128'
        | 'GS1Code128'
        | 'Code39Extended'
        | 'Code39Standard'
        | 'Code93Extended'
        | 'Code93Standard'
        | 'DataMatrix'
        | 'DeutschePostIdentcode'
        | 'DeutschePostLeitcode'
        | 'EAN13'
        | 'EAN14'
        | 'EAN8'
        | 'IATA2of5'
        | 'Interleaved2of5'
        | 'ISSN'
        | 'ISMN'
        | 'ItalianPost25'
        | 'ITF14'
        | 'ITF6'
        | 'MacroPdf417'
        | 'Matrix2of5'
        | 'MSI'
        | 'OneCode'
        | 'OPC'
        | 'PatchCode'
        | 'Pdf417'
        | 'MicroPdf417'
        | 'Planet'
        | 'Postnet'
        | 'PZN'
        | 'QR'
        | 'MicroQR'
        | 'RM4SCC'
        | 'SCC14'
        | 'SSCC18'
        | 'Standard2of5'
        | 'Supplement'
        | 'UPCA'
        | 'UPCE'
        | 'VIN'
        | 'Pharmacode'
        | 'GS1DataMatrix'
        | 'DatabarOmniDirectional'
        | 'DatabarTruncated'
        | 'DatabarLimited'
        | 'DatabarExpanded'
        | 'SwissPostParcel'
        | 'AustralianPosteParcel'
        | 'Code16K'
        | 'DatabarStackedOmniDirectional'
        | 'DatabarStacked'
        | 'DatabarExpandedStacked'
        | 'CompactPdf417'
        | 'GS1QR'
        | 'MaxiCode'
        | 'MicrE13B'
        | 'Code32'
        | 'DataLogic2of5'
        | 'DotCode'
        | 'DutchKIX'
        | 'CodablockF'
        | 'Mailmark'
        | 'GS1DotCode'
        | 'HIBCCode39LIC'
        | 'HIBCCode128LIC'
        | 'HIBCAztecLIC'
        | 'HIBCDataMatrixLIC'
        | 'HIBCQRLIC'
        | 'HIBCCode39PAS'
        | 'HIBCCode128PAS'
        | 'HIBCAztecPAS'
        | 'HIBCDataMatrixPAS'
        | 'HIBCQRPAS'
        | 'HanXin'
        | 'GS1HanXin'
        | 'GS1Aztec'
        | 'GS1CompositeBar';
    /**
     * The storage name
     */
    'storage'?: string;
    /**
     * The image folder.
     */
    'folder'?: string;

    /**
     * @param name The image file name.
     
     * @param readerParams BarcodeReader object with parameters.
     */
    constructor(name: string, readerParams: ReaderParams) {
        this.name = name;
        this.readerParams = readerParams;
    }
}

/**
 * Generate image with multiple barcodes and put new file on server
 */
export class PutGenerateMultipleRequest {
    /**
     * New filename
     */
    'name': string;
    /**
     * List of barcodes
     */
    'generatorParamsList': GeneratorParamsList;
    /**
     * Format of file
     */
    'format'?: string = 'png';
    /**
     * Folder to place file to
     */
    'folder'?: string;
    /**
     * The storage name
     */
    'storage'?: string;

    /**
     * @param name New filename
     
     * @param generatorParamsList List of barcodes
     */
    constructor(name: string, generatorParamsList: GeneratorParamsList) {
        this.name = name;
        this.generatorParamsList = generatorParamsList;
    }
}

// FileApi

/**
 * Copy file
 */
export class CopyFileRequest {
    /**
     * Source file path e.g. '/folder/file.ext'
     */
    'srcPath': string;
    /**
     * Destination file path
     */
    'destPath': string;
    /**
     * Source storage name
     */
    'srcStorageName'?: string;
    /**
     * Destination storage name
     */
    'destStorageName'?: string;
    /**
     * File version ID to copy
     */
    'versionId'?: string;

    /**
     * @param srcPath Source file path e.g. '/folder/file.ext'
     
     * @param destPath Destination file path
     */
    constructor(srcPath: string, destPath: string) {
        this.srcPath = srcPath;
        this.destPath = destPath;
    }
}

/**
 * Delete file
 */
export class DeleteFileRequest {
    /**
     * File path e.g. '/folder/file.ext'
     */
    'path': string;
    /**
     * Storage name
     */
    'storageName'?: string;
    /**
     * File version ID to delete
     */
    'versionId'?: string;

    /**
     * @param path File path e.g. '/folder/file.ext'
     */
    constructor(path: string) {
        this.path = path;
    }
}

/**
 * Download file
 */
export class DownloadFileRequest {
    /**
     * File path e.g. '/folder/file.ext'
     */
    'path': string;
    /**
     * Storage name
     */
    'storageName'?: string;
    /**
     * File version ID to download
     */
    'versionId'?: string;

    /**
     * @param path File path e.g. '/folder/file.ext'
     */
    constructor(path: string) {
        this.path = path;
    }
}

/**
 * Move file
 */
export class MoveFileRequest {
    /**
     * Source file path e.g. '/src.ext'
     */
    'srcPath': string;
    /**
     * Destination file path e.g. '/dest.ext'
     */
    'destPath': string;
    /**
     * Source storage name
     */
    'srcStorageName'?: string;
    /**
     * Destination storage name
     */
    'destStorageName'?: string;
    /**
     * File version ID to move
     */
    'versionId'?: string;

    /**
     * @param srcPath Source file path e.g. '/src.ext'
     
     * @param destPath Destination file path e.g. '/dest.ext'
     */
    constructor(srcPath: string, destPath: string) {
        this.srcPath = srcPath;
        this.destPath = destPath;
    }
}

/**
 * Upload file
 */
export class UploadFileRequest {
    /**
     * Path where to upload including filename and extension e.g. /file.ext or /Folder 1/file.ext
 If the content is multipart and path does not contains the file name it tries to get them from filename parameter
 from Content-Disposition header.
     */
    'path': string;
    /**
     * File to upload
     */
    'file': Buffer;
    /**
     * Storage name
     */
    'storageName'?: string;

    /**
     * @param path Path where to upload including filename and extension e.g. /file.ext or /Folder 1/file.ext
 If the content is multipart and path does not contains the file name it tries to get them from filename parameter
 from Content-Disposition header.
     
     * @param file File to upload
     */
    constructor(path: string, file: Buffer) {
        this.path = path;
        this.file = file;
    }
}

// FolderApi

/**
 * Copy folder
 */
export class CopyFolderRequest {
    /**
     * Source folder path e.g. '/src'
     */
    'srcPath': string;
    /**
     * Destination folder path e.g. '/dst'
     */
    'destPath': string;
    /**
     * Source storage name
     */
    'srcStorageName'?: string;
    /**
     * Destination storage name
     */
    'destStorageName'?: string;

    /**
     * @param srcPath Source folder path e.g. '/src'
     
     * @param destPath Destination folder path e.g. '/dst'
     */
    constructor(srcPath: string, destPath: string) {
        this.srcPath = srcPath;
        this.destPath = destPath;
    }
}

/**
 * Create the folder
 */
export class CreateFolderRequest {
    /**
     * Folder path to create e.g. 'folder_1/folder_2/'
     */
    'path': string;
    /**
     * Storage name
     */
    'storageName'?: string;

    /**
     * @param path Folder path to create e.g. 'folder_1/folder_2/'
     */
    constructor(path: string) {
        this.path = path;
    }
}

/**
 * Delete folder
 */
export class DeleteFolderRequest {
    /**
     * Folder path e.g. '/folder'
     */
    'path': string;
    /**
     * Storage name
     */
    'storageName'?: string;
    /**
     * Enable to delete folders, subfolders and files
     */
    'recursive'?: boolean = false;

    /**
     * @param path Folder path e.g. '/folder'
     */
    constructor(path: string) {
        this.path = path;
    }
}

/**
 * Get all files and folders within a folder
 */
export class GetFilesListRequest {
    /**
     * Folder path e.g. '/folder'
     */
    'path': string;
    /**
     * Storage name
     */
    'storageName'?: string;

    /**
     * @param path Folder path e.g. '/folder'
     */
    constructor(path: string) {
        this.path = path;
    }
}

/**
 * Move folder
 */
export class MoveFolderRequest {
    /**
     * Folder path to move e.g. '/folder'
     */
    'srcPath': string;
    /**
     * Destination folder path to move to e.g '/dst'
     */
    'destPath': string;
    /**
     * Source storage name
     */
    'srcStorageName'?: string;
    /**
     * Destination storage name
     */
    'destStorageName'?: string;

    /**
     * @param srcPath Folder path to move e.g. '/folder'
     
     * @param destPath Destination folder path to move to e.g '/dst'
     */
    constructor(srcPath: string, destPath: string) {
        this.srcPath = srcPath;
        this.destPath = destPath;
    }
}

// StorageApi

/**
 * Get disc usage
 */
export class GetDiscUsageRequest {
    /**
     * Storage name
     */
    'storageName'?: string;
}

/**
 * Get file versions
 */
export class GetFileVersionsRequest {
    /**
     * File path e.g. '/file.ext'
     */
    'path': string;
    /**
     * Storage name
     */
    'storageName'?: string;

    /**
     * @param path File path e.g. '/file.ext'
     */
    constructor(path: string) {
        this.path = path;
    }
}

/**
 * Check if file or folder exists
 */
export class ObjectExistsRequest {
    /**
     * File or folder path e.g. '/file.ext' or '/folder'
     */
    'path': string;
    /**
     * Storage name
     */
    'storageName'?: string;
    /**
     * File version ID
     */
    'versionId'?: string;

    /**
     * @param path File or folder path e.g. '/file.ext' or '/folder'
     */
    constructor(path: string) {
        this.path = path;
    }
}

/**
 * Check if storage exists
 */
export class StorageExistsRequest {
    /**
     * Storage name
     */
    'storageName': string;

    /**
     * @param storageName Storage name
     */
    constructor(storageName: string) {
        this.storageName = storageName;
    }
}
