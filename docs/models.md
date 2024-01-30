# Models

## ApiError
```ts
interface ApiError {
    code?: string;
    message?: string;
    description?: string;
    dateTime?: Date;
    innerError?: ApiError;
}
```

## ApiErrorResponse
```ts
interface ApiErrorResponse {
    requestId?: string;
    error?: ApiError;
}
```

## AustralianPostParams

AustralianPost barcode parameters.

```ts
interface AustralianPostParams {

    /**
     * Interpreting type for the Customer Information of AustralianPost, default to CustomerInformationInterpretingType.Other\"
     */
    encodingTable?: CustomerInformationInterpretingType;

    /**
     * Short bar's height of AustralianPost barcode.
     */
    shortBarHeight?: number;
}
```

## AutoSizeMode



```ts
enum AutoSizeMode {
    None = 'None',
    Nearest = 'Nearest',
    Interpolation = 'Interpolation'
}
```

## AvailableGraphicsUnit

Subset of GraphicsUnit.

```ts
enum AvailableGraphicsUnit {
    Pixel = 'Pixel',
    Point = 'Point',
    Inch = 'Inch',
    Millimeter = 'Millimeter'
}
```

## AztecEncodeMode



```ts
enum AztecEncodeMode {
    Auto = 'Auto',
    Bytes = 'Bytes',
    ExtendedCodetext = 'ExtendedCodetext'
}
```

## AztecParams

Aztec parameters.

```ts
interface AztecParams {

    /**
     * Height/Width ratio of 2D BarCode module.
     */
    aspectRatio?: number;

    /**
     * Level of error correction of Aztec types of barcode. Value should between 10 to 95.
     */
    errorLevel?: number;

    /**
     * Aztec Symbol mode. Default value: AztecSymbolMode.Auto.
     */
    symbolMode?: AztecSymbolMode;

    /**
     * DEPRECATED: This property is obsolete and will be removed in future releases. Unicode symbols detection and encoding will be processed in Auto mode with Extended Channel Interpretation charset designator. Using of own encodings requires manual CodeText encoding into byte[] array.  Sets the encoding of codetext.
     */
    textEncoding?: string;

    /**
     * Encoding mode for Aztec barcodes. Default value: Auto
     */
    encodeMode?: AztecEncodeMode;

    /**
     * Identifies ECI encoding. Used when AztecEncodeMode is Auto. Default value: ISO-8859-1.
     */
    eCIEncoding?: ECIEncodings;

    /**
     * Used to instruct the reader to interpret the data contained within the symbol as programming for reader initialization.
     */
    isReaderInitialization?: boolean;

    /**
     * Gets or sets layers count of Aztec symbol. Layers count should be in range from 1 to 3 for Compact mode and in range from 1 to 32 for Full Range mode. Default value: 0 (auto).
     */
    layersCount?: number;
}
```

## AztecSymbolMode



```ts
enum AztecSymbolMode {
    Auto = 'Auto',
    Compact = 'Compact',
    FullRange = 'FullRange',
    Rune = 'Rune'
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
    barcodes?: Array<BarcodeResponse>;
}
```

## BorderDashStyle



```ts
enum BorderDashStyle {
    Solid = 'Solid',
    Dash = 'Dash',
    Dot = 'Dot',
    DashDot = 'DashDot',
    DashDotDot = 'DashDotDot'
}
```

## CaptionParams

Caption

```ts
interface CaptionParams {

    /**
     * Caption text.
     */
    text?: string;

    /**
     * Text alignment.
     */
    alignment?: TextAlignment;

    /**
     * Text color.
     */
    color?: string;

    /**
     * Is caption visible.
     */
    visible?: boolean;

    /**
     * Font.
     */
    font?: FontParams;

    /**
     * Padding.
     */
    padding?: Padding;

    /**
     * Specify word wraps (line breaks) within text. Default value: false.
     */
    noWrap?: boolean;
}
```

## ChecksumValidation



```ts
enum ChecksumValidation {
    Default = 'Default',
    On = 'On',
    Off = 'Off'
}
```

## CodabarChecksumMode



```ts
enum CodabarChecksumMode {
    Mod10 = 'Mod10',
    Mod16 = 'Mod16'
}
```

## CodabarParams

Codabar parameters.

```ts
interface CodabarParams {

    /**
     * Checksum algorithm for Codabar barcodes. Default value: CodabarChecksumMode.Mod16. To enable checksum calculation set value EnableChecksum.Yes to property EnableChecksum.
     */
    checksumMode?: CodabarChecksumMode;

    /**
     * Start symbol (character) of Codabar symbology. Default value: CodabarSymbol.A
     */
    startSymbol?: CodabarSymbol;

    /**
     * Stop symbol (character) of Codabar symbology. Default value: CodabarSymbol.A
     */
    stopSymbol?: CodabarSymbol;
}
```

## CodabarSymbol



```ts
enum CodabarSymbol {
    A = 'A',
    B = 'B',
    C = 'C',
    D = 'D'
}
```

## CodablockParams

Codablock parameters.

```ts
interface CodablockParams {

    /**
     * Height/Width ratio of 2D BarCode module.
     */
    aspectRatio?: number;

    /**
     * Columns count.
     */
    columns?: number;

    /**
     * Rows count.
     */
    rows?: number;
}
```

## Code128Emulation

DEPRECATED. This enum will be removed in future releases Function codewords for Code 128 emulation. Applied for MicroPDF417 only. Ignored for PDF417 and MacroPDF417 barcodes.

```ts
enum Code128Emulation {
    None = 'None',
    Code903 = 'Code903',
    Code904 = 'Code904',
    Code905 = 'Code905'
}
```

## Code128EncodeMode



```ts
enum Code128EncodeMode {
    Auto = 'Auto',
    CodeA = 'CodeA',
    CodeB = 'CodeB',
    CodeAB = 'CodeAB',
    CodeC = 'CodeC',
    CodeAC = 'CodeAC',
    CodeBC = 'CodeBC'
}
```

## Code128Params

Code128 params.

```ts
interface Code128Params {

    /**
     * Encoding mode for Code128 barcodes. Code 128 specification Default value: Code128EncodeMode.Auto.
     */
    encodeMode?: Code128EncodeMode;
}
```

## Code16KParams

Code16K parameters.

```ts
interface Code16KParams {

    /**
     * Height/Width ratio of 2D BarCode module.
     */
    aspectRatio?: number;

    /**
     * Size of the left quiet zone in xDimension. Default value: 10, meaning if xDimension = 2px than left quiet zone will be 20px.
     */
    quietZoneLeftCoef?: number;

    /**
     * Size of the right quiet zone in xDimension. Default value: 1, meaning if xDimension = 2px than right quiet zone will be 2px.
     */
    quietZoneRightCoef?: number;
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

## CouponParams

Coupon parameters. Used for UpcaGs1DatabarCoupon, UpcaGs1Code128Coupon.

```ts
interface CouponParams {

    /**
     * Space between main the BarCode and supplement BarCode in Unit value.
     */
    supplementSpace?: number;
}
```

## CustomerInformationInterpretingType



```ts
enum CustomerInformationInterpretingType {
    CTable = 'CTable',
    NTable = 'NTable',
    Other = 'Other'
}
```

## DataBarParams

Databar parameters.

```ts
interface DataBarParams {

    /**
     * Height/Width ratio of 2D BarCode module. Used for DataBar stacked.
     */
    aspectRatio?: number;

    /**
     * Columns count.
     */
    columns?: number;

    /**
     * Rows count.
     */
    rows?: number;

    /**
     * Enables flag of 2D composite component with DataBar barcode
     */
    is2DCompositeComponent?: boolean;

    /**
     * If this flag is set, it allows only GS1 encoding standard for Databar barcode types
     */
    isAllowOnlyGS1Encoding?: boolean;
}
```

## DataMatrixEccType



```ts
enum DataMatrixEccType {
    EccAuto = 'EccAuto',
    Ecc000 = 'Ecc000',
    Ecc050 = 'Ecc050',
    Ecc080 = 'Ecc080',
    Ecc100 = 'Ecc100',
    Ecc140 = 'Ecc140',
    Ecc200 = 'Ecc200'
}
```

## DataMatrixEncodeMode

DataMatrix encoder's encoding mode, default to Auto

```ts
enum DataMatrixEncodeMode {
    Auto = 'Auto',
    ASCII = 'ASCII',
    Full = 'Full',
    Custom = 'Custom',
    C40 = 'C40',
    Text = 'Text',
    EDIFACT = 'EDIFACT',
    ANSIX12 = 'ANSIX12',
    ExtendedCodetext = 'ExtendedCodetext'
}
```

## DataMatrixParams

DataMatrix parameters.

```ts
interface DataMatrixParams {

    /**
     * Height/Width ratio of 2D BarCode module
     */
    aspectRatio?: number;

    /**
     * DEPRECATED: This property is obsolete and will be removed in future releases. Unicode symbols detection and encoding will be processed in Auto mode with Extended Channel Interpretation charset designator. Using of own encodings requires manual CodeText encoding into byte[] array.  Sets the encoding of codetext.
     */
    textEncoding?: string;

    /**
     * DEPRECATED: Will be replaced with 'DataMatrix.Version' in the next release  Columns count.
     */
    columns?: number;

    /**
     * Datamatrix ECC type. Default value: DataMatrixEccType.Ecc200.
     */
    dataMatrixEcc?: DataMatrixEccType;

    /**
     * Encode mode of Datamatrix barcode. Default value: DataMatrixEncodeMode.Auto.
     */
    dataMatrixEncodeMode?: DataMatrixEncodeMode;

    /**
     * DEPRECATED: Will be replaced with 'DataMatrix.Version' in the next release  Rows count.
     */
    rows?: number;

    /**
     * Macro Characters 05 and 06 values are used to obtain more compact encoding in special modes. Can be used only with DataMatrixEccType.Ecc200 or DataMatrixEccType.EccAuto. Cannot be used with EncodeTypes.GS1DataMatrix Default value: MacroCharacters.None.
     */
    macroCharacters?: MacroCharacter;

    /**
     * Sets a Datamatrix symbol size. Default value: DataMatrixVersion.Auto.
     */
    version?: DataMatrixVersion;
}
```

## DataMatrixVersion



```ts
enum DataMatrixVersion {
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
    DMRE26x64 = 'DMRE_26x64'
}
```

## DecodeBarcodeType

See DecodeType

```ts
enum DecodeBarcodeType {
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
    GS1MicroPdf417 = 'GS1MicroPdf417',
    MostCommonlyUsed = 'mostCommonlyUsed'
}
```

## DiscUsage

Class for disc space information.

```ts
interface DiscUsage {

    /**
     * Application used disc space.
     */
    usedSize: number;

    /**
     * Total disc space.
     */
    totalSize: number;
}
```

## DotCodeEncodeMode



```ts
enum DotCodeEncodeMode {
    Auto = 'Auto',
    Bytes = 'Bytes',
    ExtendedCodetext = 'ExtendedCodetext'
}
```

## DotCodeParams

DotCode parameters.

```ts
interface DotCodeParams {

    /**
     * Height/Width ratio of 2D BarCode module.
     */
    aspectRatio?: number;

    /**
     * Identifies columns count. Sum of the number of rows plus the number of columns of a DotCode symbol must be odd. Number of columns must be at least 5.
     */
    columns?: number;

    /**
     * Identifies DotCode encode mode. Default value: Auto.
     */
    encodeMode?: DotCodeEncodeMode;

    /**
     * Identifies ECI encoding. Used when DotCodeEncodeMode is Auto. Default value: ISO-8859-1.
     */
    eCIEncoding?: ECIEncodings;

    /**
     * Indicates whether code is used for instruct reader to interpret the following data as instructions for initialization or reprogramming of the bar code reader. Default value is false.
     */
    isReaderInitialization?: boolean;

    /**
     * Identifies rows count. Sum of the number of rows plus the number of columns of a DotCode symbol must be odd. Number of rows must be at least 5.
     */
    rows?: number;
}
```

## ECIEncodings



```ts
enum ECIEncodings {
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
    EUCKR = 'EUC_KR'
}
```

## EnableChecksum



```ts
enum EnableChecksum {
    Default = 'Default',
    Yes = 'Yes',
    No = 'No'
}
```

## EncodeBarcodeType

See EncodeTypes

```ts
enum EncodeBarcodeType {
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
    GS1MicroPdf417 = 'GS1MicroPdf417'
}
```

## ErrorDetails

The error details

```ts
interface ErrorDetails {

    /**
     * The request id
     */
    requestId?: string;

    /**
     * Date
     */
    date: Date;
}
```

## FileVersions

File versions FileVersion.

```ts
interface FileVersions {

    /**
     * File versions FileVersion.
     */
    value?: Array<FileVersion>;
}
```

## FilesList

Files list

```ts
interface FilesList {

    /**
     * Files and folders contained by folder StorageFile.
     */
    value?: Array<StorageFile>;
}
```

## FilesUploadResult

File upload result

```ts
interface FilesUploadResult {

    /**
     * List of uploaded file names
     */
    uploaded?: Array<string>;

    /**
     * List of errors.
     */
    errors?: Array<Error>;
}
```

## FontMode



```ts
enum FontMode {
    Auto = 'Auto',
    Manual = 'Manual'
}
```

## FontParams

Font.

```ts
interface FontParams {

    /**
     * Font family.
     */
    family?: string;

    /**
     * Font size in units.
     */
    size?: number;

    /**
     * Font style.
     */
    style?: FontStyle;
}
```

## FontStyle



```ts
enum FontStyle {
    Regular = 'Regular',
    Bold = 'Bold',
    Italic = 'Italic',
    Underline = 'Underline',
    Strikeout = 'Strikeout'
}
```

## GeneratorParams

Represents extended BarcodeGenerator params.

```ts
interface GeneratorParams {

    /**
     * Type of barcode to generate.
     */
    typeOfBarcode: EncodeBarcodeType;

    /**
     * Text to encode.
     */
    text: string;

    /**
     * Text that will be displayed instead of codetext in 2D barcodes. Used for: Aztec, Pdf417, DataMatrix, QR, MaxiCode, DotCode
     */
    twoDDisplayText?: string;

    /**
     * Specify the displaying Text Location, set to CodeLocation.None to hide CodeText. Default value: CodeLocation.Below.
     */
    textLocation?: CodeLocation;

    /**
     * Text alignment.
     */
    textAlignment?: TextAlignment;

    /**
     * Specify the displaying CodeText's Color. Default value: Color.Black.
     */
    textColor?: string;

    /**
     * Specify the displaying Text's font. Default value: Arial 5pt regular. Ignored if FontSizeMode is set to FontSizeMode.Auto.
     */
    font?: FontParams;

    /**
     * Specify FontSizeMode. If FontSizeMode is set to Auto, font size will be calculated automatically based on xDimension value. It is recommended to use FontSizeMode.Auto especially in AutoSizeMode.Nearest or AutoSizeMode.Interpolation. Default value: FontSizeMode.Auto.
     */
    fontSizeMode?: FontMode;

    /**
     * Specify word wraps (line breaks) within text. Default value: false.
     */
    noWrap?: boolean;

    /**
     * Resolution of the BarCode image. One value for both dimensions. Default value: 96 dpi.
     */
    resolution?: number;

    /**
     * DEPRECATED: Use 'Resolution' instead.
     */
    resolutionX?: number;

    /**
     * DEPRECATED: Use 'Resolution' instead.
     */
    resolutionY?: number;

    /**
     * The smallest width of the unit of BarCode bars or spaces. Increase this will increase the whole barcode image width. Ignored if AutoSizeMode property is set to AutoSizeMode.Nearest or AutoSizeMode.Interpolation.
     */
    dimensionX?: number;

    /**
     * Space between the CodeText and the BarCode in Unit value. Default value: 2pt. Ignored for EAN8, EAN13, UPCE, UPCA, ISBN, ISMN, ISSN, UpcaGs1DatabarCoupon.
     */
    textSpace?: number;

    /**
     * Common Units for all measuring in query. Default units: pixel.
     */
    units?: AvailableGraphicsUnit;

    /**
     * Specifies the different types of automatic sizing modes. Default value: AutoSizeMode.None.
     */
    sizeMode?: AutoSizeMode;

    /**
     * Height of the barcode in given units. Default units: pixel.
     */
    barHeight?: number;

    /**
     * Height of the barcode image in given units. Default units: pixel.
     */
    imageHeight?: number;

    /**
     * Width of the barcode image in given units. Default units: pixel.
     */
    imageWidth?: number;

    /**
     * BarCode image rotation angle, measured in degree, e.g. RotationAngle = 0 or RotationAngle = 360 means no rotation. If RotationAngle NOT equal to 90, 180, 270 or 0, it may increase the difficulty for the scanner to read the image. Default value: 0.
     */
    rotationAngle?: number;

    /**
     * Barcode paddings. Default value: 5pt 5pt 5pt 5pt.
     */
    padding?: Padding;

    /**
     * Additional caption above barcode.
     */
    captionAbove?: CaptionParams;

    /**
     * Additional caption below barcode.
     */
    captionBelow?: CaptionParams;

    /**
     * Background color of the barcode image. Default value: Color.White.
     */
    backColor?: string;

    /**
     * Bars color. Default value: Color.Black.
     */
    barColor?: string;

    /**
     * Border color. Default value: Color.Black.
     */
    borderColor?: string;

    /**
     * Border width. Default value: 0. Ignored if Visible is set to false.
     */
    borderWidth?: number;

    /**
     * Border dash style. Default value: BorderDashStyle.Solid.
     */
    borderDashStyle?: BorderDashStyle;

    /**
     * Border visibility. If false than parameter Width is always ignored (0). Default value: false.
     */
    borderVisible?: boolean;

    /**
     * Enable checksum during generation 1D barcodes. Default is treated as Yes for symbology which must contain checksum, as No where checksum only possible. Checksum is possible: Code39 Standard/Extended, Standard2of5, Interleaved2of5, Matrix2of5, ItalianPost25, DeutschePostIdentcode, DeutschePostLeitcode, VIN, Codabar Checksum always used: Rest symbology
     */
    enableChecksum?: EnableChecksum;

    /**
     * Indicates whether explains the character \"\\\" as an escape character in CodeText property. Used for Pdf417, DataMatrix, Code128 only If the EnableEscape is true, \"\\\" will be explained as a special escape character. Otherwise, \"\\\" acts as normal characters. Aspose.BarCode supports input decimal ascii code and mnemonic for ASCII control-code characters. For example, \\013 and \\\\CR stands for CR.
     */
    enableEscape?: boolean;

    /**
     * Value indicating whether bars are filled. Only for 1D barcodes. Default value: true.
     */
    filledBars?: boolean;

    /**
     * Always display checksum digit in the human readable text for Code128 and GS1Code128 barcodes.
     */
    alwaysShowChecksum?: boolean;

    /**
     * Wide bars to Narrow bars ratio. Default value: 3, that is, wide bars are 3 times as wide as narrow bars. Used for ITF, PZN, PharmaCode, Standard2of5, Interleaved2of5, Matrix2of5, ItalianPost25, IATA2of5, VIN, DeutschePost, OPC, Code32, DataLogic2of5, PatchCode, Code39Extended, Code39Standard
     */
    wideNarrowRatio?: number;

    /**
     * Only for 1D barcodes. If codetext is incorrect and value set to true - exception will be thrown. Otherwise codetext will be corrected to match barcode's specification. Exception always will be thrown for: Databar symbology if codetext is incorrect. Exception always will not be thrown for: AustraliaPost, SingaporePost, Code39Extended, Code93Extended, Code16K, Code128 symbology if codetext is incorrect.
     */
    validateText?: boolean;

    /**
     * Supplement parameters. Used for Interleaved2of5, Standard2of5, EAN13, EAN8, UPCA, UPCE, ISBN, ISSN, ISMN.
     */
    supplementData?: string;

    /**
     * Space between main the BarCode and supplement BarCode.
     */
    supplementSpace?: number;

    /**
     * Bars reduction value that is used to compensate ink spread while printing.
     */
    barWidthReduction?: number;

    /**
     * Indicates whether is used anti-aliasing mode to render image. Anti-aliasing mode is applied to barcode and text drawing.
     */
    useAntiAlias?: boolean;

    /**
     * AustralianPost params.
     */
    australianPost?: AustralianPostParams;

    /**
     * Aztec params.
     */
    aztec?: AztecParams;

    /**
     * Codabar params.
     */
    codabar?: CodabarParams;

    /**
     * Codablock params.
     */
    codablock?: CodablockParams;

    /**
     * Code16K params.
     */
    code16K?: Code16KParams;

    /**
     * Coupon params.
     */
    coupon?: CouponParams;

    /**
     * DataBar params.
     */
    dataBar?: DataBarParams;

    /**
     * DataMatrix params.
     */
    dataMatrix?: DataMatrixParams;

    /**
     * DotCode params.
     */
    dotCode?: DotCodeParams;

    /**
     * ITF params.
     */
    ITF?: ITFParams;

    /**
     * MaxiCode params.
     */
    maxiCode?: MaxiCodeParams;

    /**
     * Pdf417 params.
     */
    pdf417?: Pdf417Params;

    /**
     * Postal params.
     */
    postal?: PostalParams;

    /**
     * QR params.
     */
    QR?: QrParams;

    /**
     * PatchCode params.
     */
    patchCode?: PatchCodeParams;

    /**
     * Code128 params.
     */
    code128?: Code128Params;

    /**
     * HanXin params.
     */
    hanXin?: HanXinParams;
}
```

## GeneratorParamsList

Represents list of barcode generators

```ts
interface GeneratorParamsList {

    /**
     * List of barcode generators
     */
    barcodeBuilders?: Array<GeneratorParams>;

    /**
     * Shift step according to X axis
     */
    xStep: number;

    /**
     * Shift step according to Y axis
     */
    yStep: number;
}
```

## HanXinEncodeMode



```ts
enum HanXinEncodeMode {
    Auto = 'Auto',
    Binary = 'Binary',
    ECI = 'ECI',
    Unicode = 'Unicode',
    URI = 'URI',
    Extended = 'Extended'
}
```

## HanXinErrorLevel



```ts
enum HanXinErrorLevel {
    L1 = 'L1',
    L2 = 'L2',
    L3 = 'L3',
    L4 = 'L4'
}
```

## HanXinParams

HanXin params.

```ts
interface HanXinParams {

    /**
     * Encoding mode for XanXin barcodes. Default value: HanXinEncodeMode.Auto.
     */
    encodeMode?: HanXinEncodeMode;

    /**
     * Allowed Han Xin error correction levels from L1 to L4. Default value: HanXinErrorLevel.L1.
     */
    errorLevel?: HanXinErrorLevel;

    /**
     * Allowed Han Xin versions, Auto and Version01 - Version84. Default value: HanXinVersion.Auto.
     */
    version?: HanXinVersion;

    /**
     * Extended Channel Interpretation Identifiers. It is used to tell the barcode reader details about the used references for encoding the data in the symbol. Current implementation consists all well known charset encodings. Default value: ECIEncodings.ISO_8859_1
     */
    eCIEncoding?: ECIEncodings;
}
```

## HanXinVersion



```ts
enum HanXinVersion {
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
    Version84 = 'Version84'
}
```

## ITF14BorderType



```ts
enum ITF14BorderType {
    None = 'None',
    Frame = 'Frame',
    Bar = 'Bar',
    FrameOut = 'FrameOut',
    BarOut = 'BarOut'
}
```

## ITFParams

ITF parameters.

```ts
interface ITFParams {

    /**
     * ITF border (bearer bar) thickness in Unit value. Default value: 12pt.
     */
    borderThickness?: number;

    /**
     * Border type of ITF barcode. Default value: ITF14BorderType.Bar.
     */
    borderType?: ITF14BorderType;

    /**
     * Size of the quiet zones in xDimension. Default value: 10, meaning if xDimension = 2px than quiet zones will be 20px.
     */
    quietZoneCoef?: number;
}
```

## MacroCharacter



```ts
enum MacroCharacter {
    None = 'None',
    Macro05 = 'Macro05',
    Macro06 = 'Macro06'
}
```

## MaxiCodeEncodeMode



```ts
enum MaxiCodeEncodeMode {
    Auto = 'Auto',
    Bytes = 'Bytes',
    ExtendedCodetext = 'ExtendedCodetext'
}
```

## MaxiCodeMode



```ts
enum MaxiCodeMode {
    Mode2 = 'Mode2',
    Mode3 = 'Mode3',
    Mode4 = 'Mode4',
    Mode5 = 'Mode5',
    Mode6 = 'Mode6'
}
```

## MaxiCodeParams

MaxiCode parameters.

```ts
interface MaxiCodeParams {

    /**
     * Height/Width ratio of 2D BarCode module.
     */
    aspectRatio?: number;

    /**
     * Mode for MaxiCode barcodes.
     */
    mode?: MaxiCodeMode;

    /**
     * Encoding mode for MaxiCode barcodes.
     */
    encodeMode?: MaxiCodeEncodeMode;
}
```

## ModelError

Error

```ts
interface ModelError {

    /**
     * Code
     */
    code?: string;

    /**
     * Message
     */
    message?: string;

    /**
     * Description
     */
    description?: string;

    /**
     * Inner Error
     */
    innerError?: ErrorDetails;
}
```

## ObjectExist

Object exists

```ts
interface ObjectExist {

    /**
     * Indicates that the file or folder exists.
     */
    exists: boolean;

    /**
     * True if it is a folder, false if it is a file.
     */
    isFolder: boolean;
}
```

## Padding

Padding around barcode.

```ts
interface Padding {

    /**
     * Left padding.
     */
    left?: number;

    /**
     * Right padding.
     */
    right?: number;

    /**
     * Top padding.
     */
    top?: number;

    /**
     * Bottom padding.
     */
    bottom?: number;
}
```

## PatchCodeParams

PatchCode parameters.

```ts
interface PatchCodeParams {

    /**
     * Specifies codetext for an extra QR barcode, when PatchCode is generated in page mode.
     */
    extraBarcodeText?: string;

    /**
     * PatchCode format. Choose PatchOnly to generate single PatchCode. Use page format to generate Patch page with PatchCodes as borders. Default value: PatchFormat.PatchOnly
     */
    patchFormat?: PatchFormat;
}
```

## PatchFormat



```ts
enum PatchFormat {
    PatchOnly = 'PatchOnly',
    A4 = 'A4',
    A4LANDSCAPE = 'A4_LANDSCAPE',
    USLetter = 'US_Letter',
    USLetterLANDSCAPE = 'US_Letter_LANDSCAPE'
}
```

## Pdf417CompactionMode



```ts
enum Pdf417CompactionMode {
    Auto = 'Auto',
    Text = 'Text',
    Numeric = 'Numeric',
    Binary = 'Binary'
}
```

## Pdf417ErrorLevel



```ts
enum Pdf417ErrorLevel {
    Level0 = 'Level0',
    Level1 = 'Level1',
    Level2 = 'Level2',
    Level3 = 'Level3',
    Level4 = 'Level4',
    Level5 = 'Level5',
    Level6 = 'Level6',
    Level7 = 'Level7',
    Level8 = 'Level8'
}
```

## Pdf417MacroTerminator



```ts
enum Pdf417MacroTerminator {
    Auto = 'Auto',
    None = 'None',
    Set = 'Set'
}
```

## Pdf417Params

PDF417 parameters.

```ts
interface Pdf417Params {

    /**
     * Height/Width ratio of 2D BarCode module.
     */
    aspectRatio?: number;

    /**
     * DEPRECATED: This property is obsolete and will be removed in future releases. Unicode symbols detection and encoding will be processed in Auto mode with Extended Channel Interpretation charset designator. Using of own encodings requires manual CodeText encoding into byte[] array.  Sets the encoding of codetext.
     */
    textEncoding?: string;

    /**
     * Columns count.
     */
    columns?: number;

    /**
     * Pdf417 symbology type of BarCode's compaction mode. Default value: Pdf417CompactionMode.Auto.
     */
    compactionMode?: Pdf417CompactionMode;

    /**
     * Pdf417 symbology type of BarCode's error correction level ranging from level0 to level8, level0 means no error correction info, level8 means best error correction which means a larger picture.
     */
    errorLevel?: Pdf417ErrorLevel;

    /**
     * Macro Pdf417 barcode's file ID. Used for MacroPdf417.
     */
    macroFileID?: number;

    /**
     * Macro Pdf417 barcode's segment ID, which starts from 0, to MacroSegmentsCount - 1.
     */
    macroSegmentID?: number;

    /**
     * Macro Pdf417 barcode segments count.
     */
    macroSegmentsCount?: number;

    /**
     * Rows count.
     */
    rows?: number;

    /**
     * Whether Pdf417 symbology type of BarCode is truncated (to reduce space).
     */
    truncate?: boolean;

    /**
     * Extended Channel Interpretation Identifiers. It is used to tell the barcode reader details about the used references for encoding the data in the symbol. Current implementation consists all well known charset encodings.
     */
    pdf417ECIEncoding?: ECIEncodings;

    /**
     * Used to instruct the reader to interpret the data contained within the symbol as programming for reader initialization
     */
    isReaderInitialization?: boolean;

    /**
     * Macro Pdf417 barcode time stamp
     */
    macroTimeStamp?: Date;

    /**
     * Macro Pdf417 barcode sender name
     */
    macroSender?: string;

    /**
     * Macro Pdf417 file size. The file size field contains the size in bytes of the entire source file
     */
    macroFileSize?: number;

    /**
     * Macro Pdf417 barcode checksum. The checksum field contains the value of the 16-bit (2 bytes) CRC checksum using the CCITT-16 polynomial
     */
    macroChecksum?: number;

    /**
     * Macro Pdf417 barcode file name
     */
    macroFileName?: string;

    /**
     * Macro Pdf417 barcode addressee name
     */
    macroAddressee?: string;

    /**
     * Extended Channel Interpretation Identifiers. Applies for Macro PDF417 text fields.
     */
    macroECIEncoding?: ECIEncodings;

    /**
     * DEPRECATED: This property is obsolete and will be removed in future releases. See samples of using new parameters on https://releases.aspose.com/barcode/net/release-notes/2023/aspose-barcode-for-net-23-10-release-notes/ Function codeword for Code 128 emulation. Applied for MicroPDF417 only. Ignored for PDF417 and MacroPDF417 barcodes.
     */
    code128Emulation?: Code128Emulation;

    /**
     * Can be used only with MicroPdf417 and encodes Code 128 emulation modes. Can encode FNC1 in second position modes 908 and 909, also can encode 910 and 911 which just indicate that recognized MicroPdf417 can be interpret as Code 128.
     */
    isCode128Emulation?: boolean;

    /**
     * Used to tell the encoder whether to add Macro PDF417 Terminator (codeword 922) to the segment. Applied only for Macro PDF417.
     */
    pdf417MacroTerminator?: Pdf417MacroTerminator;

    /**
     * Defines linked modes with GS1MicroPdf417, MicroPdf417 and Pdf417 barcodes. With GS1MicroPdf417 symbology encodes 906, 907, 912, 913, 914, 915 “Linked” UCC/EAN-128 modes. With MicroPdf417 and Pdf417 symbologies encodes 918 linkage flag to associated linear component other than an EAN.UCC.
     */
    isLinked?: boolean;

    /**
     * Macro Characters 05 and 06 values are used to obtain more compact encoding in special modes. Can be used only with MicroPdf417 and encodes 916 and 917 MicroPdf417 modes. Default value: MacroCharacters.None.
     */
    macroCharacters?: MacroCharacter;
}
```

## PostalParams

Postal parameters. Used for Postnet, Planet.

```ts
interface PostalParams {

    /**
     * Short bar's height of Postal barcodes.
     */
    shortBarHeight?: number;
}
```

## PresetType

See QualitySettings allows to configure recognition quality and speed manually.

```ts
enum PresetType {
    HighPerformance = 'HighPerformance',
    NormalQuality = 'NormalQuality',
    HighQualityDetection = 'HighQualityDetection',
    MaxQualityDetection = 'MaxQualityDetection',
    HighQuality = 'HighQuality',
    MaxBarCodes = 'MaxBarCodes'
}
```

## QREncodeMode



```ts
enum QREncodeMode {
    Auto = 'Auto',
    Bytes = 'Bytes',
    Utf8BOM = 'Utf8BOM',
    Utf16BEBOM = 'Utf16BEBOM',
    ECIEncoding = 'ECIEncoding',
    ExtendedCodetext = 'ExtendedCodetext'
}
```

## QREncodeType



```ts
enum QREncodeType {
    Auto = 'Auto',
    ForceQR = 'ForceQR',
    ForceMicroQR = 'ForceMicroQR'
}
```

## QRErrorLevel



```ts
enum QRErrorLevel {
    LevelL = 'LevelL',
    LevelM = 'LevelM',
    LevelQ = 'LevelQ',
    LevelH = 'LevelH'
}
```

## QRVersion



```ts
enum QRVersion {
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
    VersionM4 = 'VersionM4'
}
```

## QrParams

QR parameters.

```ts
interface QrParams {

    /**
     * Height/Width ratio of 2D BarCode module.
     */
    aspectRatio?: number;

    /**
     * DEPRECATED: This property is obsolete and will be removed in future releases. Unicode symbols detection and encoding will be processed in Auto mode with Extended Channel Interpretation charset designator. Using of own encodings requires manual CodeText encoding into byte[] array.  Sets the encoding of codetext.
     */
    textEncoding?: string;

    /**
     * QR / MicroQR selector mode. Select ForceQR for standard QR symbols, Auto for MicroQR.
     */
    encodeType?: QREncodeType;

    /**
     * Extended Channel Interpretation Identifiers. It is used to tell the barcode reader details about the used references for encoding the data in the symbol. Current implementation consists all well known charset encodings.
     */
    eCIEncoding?: ECIEncodings;

    /**
     * QR symbology type of BarCode's encoding mode. Default value: QREncodeMode.Auto.
     */
    encodeMode?: QREncodeMode;

    /**
     * Level of Reed-Solomon error correction for QR barcode. From low to high: LevelL, LevelM, LevelQ, LevelH. see QRErrorLevel.
     */
    errorLevel?: QRErrorLevel;

    /**
     * Version of QR Code. From Version1 to Version40 for QR code and from M1 to M4 for MicroQr. Default value is QRVersion.Auto.
     */
    version?: QRVersion;

    /**
     * QR structured append parameters.
     */
    structuredAppend?: StructuredAppend;
}
```

## ReaderParams

Represents BarcodeReader object.

```ts
interface ReaderParams {

    /**
     * The type of barcode to read.
     */
    type?: DecodeBarcodeType;

    /**
     * Multiple barcode types to read.
     */
    types?: Array<DecodeBarcodeType>;

    /**
     * Enable checksum validation during recognition for 1D barcodes. Default is treated as Yes for symbologies which must contain checksum, as No where checksum only possible. Checksum never used: Codabar Checksum is possible: Code39 Standard/Extended, Standard2of5, Interleaved2of5, Matrix2of5, ItalianPost25, DeutschePostIdentcode, DeutschePostLeitcode, VIN Checksum always used: Rest symbologies
     */
    checksumValidation?: ChecksumValidation;

    /**
     * A flag which force engine to detect codetext encoding for Unicode.
     */
    detectEncoding?: boolean;

    /**
     * Preset allows to configure recognition quality and speed manually. You can quickly set up Preset by embedded presets: HighPerformance, NormalQuality, HighQuality, MaxBarCodes or you can manually configure separate options. Default value of Preset is NormalQuality.
     */
    preset?: PresetType;

    /**
     * Set X of top left corner of area for recognition.
     */
    rectX?: number;

    /**
     * Set Y of top left corner of area for recognition.
     */
    rectY?: number;

    /**
     * Set Width of area for recognition.
     */
    rectWidth?: number;

    /**
     * Set Height of area for recognition.
     */
    rectHeight?: number;

    /**
     * Value indicating whether FNC symbol strip must be done.
     */
    stripFNC?: boolean;

    /**
     * Timeout of recognition process in milliseconds. Default value is 15_000 (15 seconds). Maximum value is 30_000 (1/2 minute). In case of a timeout RequestTimeout (408) status will be returned. Try reducing the image size to avoid timeout.
     */
    timeout?: number;

    /**
     * Window size for median smoothing. Typical values are 3 or 4. Default value is 3. AllowMedianSmoothing must be set.
     */
    medianSmoothingWindowSize?: number;

    /**
     * Allows engine to enable median smoothing as additional scan. Mode helps to recognize noised barcodes.
     */
    allowMedianSmoothing?: boolean;

    /**
     * Allows engine to recognize color barcodes on color background as additional scan. Extremely slow mode.
     */
    allowComplexBackground?: boolean;

    /**
     * Allows engine for Datamatrix to recognize dashed industrial Datamatrix barcodes. Slow mode which helps only for dashed barcodes which consist from spots.
     */
    allowDatamatrixIndustrialBarcodes?: boolean;

    /**
     * Allows engine to recognize decreased image as additional scan. Size for decreasing is selected by internal engine algorithms. Mode helps to recognize barcodes which are noised and blurred but captured with high resolution.
     */
    allowDecreasedImage?: boolean;

    /**
     * Allows engine to use gap between scans to increase recognition speed. Mode can make recognition problems with low height barcodes.
     */
    allowDetectScanGap?: boolean;

    /**
     * Allows engine to recognize barcodes which has incorrect checksum or incorrect values. Mode can be used to recognize damaged barcodes with incorrect text.
     */
    allowIncorrectBarcodes?: boolean;

    /**
     * Allows engine to recognize inverse color image as additional scan. Mode can be used when barcode is white on black background.
     */
    allowInvertImage?: boolean;

    /**
     * Allows engine for Postal barcodes to recognize slightly noised images. Mode helps to recognize slightly damaged Postal barcodes.
     */
    allowMicroWhiteSpotsRemoving?: boolean;

    /**
     * Allows engine for 1D barcodes to quickly recognize high quality barcodes which fill almost whole image. Mode helps to quickly recognize generated barcodes from Internet.
     */
    allowOneDFastBarcodesDetector?: boolean;

    /**
     * Allows engine for 1D barcodes to recognize barcodes with single wiped/glued bars in pattern.
     */
    allowOneDWipedBarsRestoration?: boolean;

    /**
     * Allows engine for QR/MicroQR to recognize damaged MicroQR barcodes.
     */
    allowQRMicroQrRestoration?: boolean;

    /**
     * Allows engine to recognize regular image without any restorations as main scan. Mode to recognize image as is.
     */
    allowRegularImage?: boolean;

    /**
     * Allows engine to recognize barcodes with salt and pepper noise type. Mode can remove small noise with white and black dots.
     */
    allowSaltAndPepperFiltering?: boolean;

    /**
     * Allows engine to recognize image without small white spots as additional scan. Mode helps to recognize noised image as well as median smoothing filtering.
     */
    allowWhiteSpotsRemoving?: boolean;

    /**
     * Allows engine to recognize 1D barcodes with checksum by checking more recognition variants. Default value: False.
     */
    checkMore1DVariants?: boolean;

    /**
     * Allows engine for 1D barcodes to quickly recognize middle slice of an image and return result without using any time-consuming algorithms. Default value: False.
     */
    fastScanOnly?: boolean;

    /**
     * Allows engine using additional image restorations to recognize corrupted barcodes. At this time, it is used only in MicroPdf417 barcode type. Default value: False.
     */
    allowAdditionalRestorations?: boolean;

    /**
     * Sets threshold for detected regions that may contain barcodes. Value 0.7 means that bottom 70% of possible regions are filtered out and not processed further. Region likelihood threshold must be between [0.05, 0.9] Use high values for clear images with few barcodes. Use low values for images with many barcodes or for noisy images. Low value may lead to a bigger recognition time.
     */
    regionLikelihoodThresholdPercent?: number;

    /**
     * Scan window sizes in pixels. Allowed sizes are 10, 15, 20, 25, 30. Scanning with small window size takes more time and provides more accuracy but may fail in detecting very big barcodes. Combining of several window sizes can improve detection quality.
     */
    scanWindowSizes?: Array<number>;

    /**
     * Similarity coefficient depends on how homogeneous barcodes are. Use high value for for clear barcodes. Use low values to detect barcodes that ara partly damaged or not lighten evenly. Similarity coefficient must be between [0.5, 0.9]
     */
    similarity?: number;

    /**
     * Allows detector to skip search for diagonal barcodes. Setting it to false will increase detection time but allow to find diagonal barcodes that can be missed otherwise. Enabling of diagonal search leads to a bigger detection time.
     */
    skipDiagonalSearch?: boolean;

    /**
     * Allows engine to recognize tiny barcodes on large images. Ignored if AllowIncorrectBarcodes is set to True. Default value: False.
     */
    readTinyBarcodes?: boolean;

    /**
     * Interpreting Type for the Customer Information of AustralianPost BarCode.Default is CustomerInformationInterpretingType.Other.
     */
    australianPostEncodingTable?: CustomerInformationInterpretingType;

    /**
     * The flag which force AustraliaPost decoder to ignore last filling patterns in Customer Information Field during decoding as CTable method. CTable encoding method does not have any gaps in encoding table and sequence \"333\" of filling patterns is decoded as letter \"z\".
     */
    ignoreEndingFillingPatternsForCTable?: boolean;
}
```

## RegionPoint

Wrapper around Drawing.Point for proper specification.

```ts
interface RegionPoint {

    /**
     * X-coordinate
     */
    X: number;

    /**
     * Y-coordinate
     */
    Y: number;
}
```

## ResultImageInfo

Created image info.

```ts
interface ResultImageInfo {

    /**
     * Result file size.
     */
    fileSize: number;

    /**
     * Result image width.
     */
    imageWidth?: number;

    /**
     * Result image height.
     */
    imageHeight?: number;
}
```

## StorageExist

Storage exists

```ts
interface StorageExist {

    /**
     * Shows that the storage exists.
     */
    exists: boolean;
}
```

## StorageFile

File or folder information

```ts
interface StorageFile {

    /**
     * File or folder name.
     */
    name?: string;

    /**
     * True if it is a folder.
     */
    isFolder: boolean;

    /**
     * File or folder last modified DateTime.
     */
    modifiedDate?: Date;

    /**
     * File or folder size.
     */
    size: number;

    /**
     * File or folder path.
     */
    path?: string;
}
```

## StructuredAppend

QR structured append parameters.

```ts
interface StructuredAppend {

    /**
     * The index of the QR structured append mode barcode. Index starts from 0.
     */
    sequenceIndicator?: number;

    /**
     * QR structured append mode barcodes quantity. Max value is 16.
     */
    totalCount?: number;

    /**
     * QR structured append mode parity data.
     */
    parityByte?: number;
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

## FileVersion
```ts
interface FileVersion {

    /**
     * File or folder name.
     */
    name?: string;

    /**
     * True if it is a folder.
     */
    isFolder: boolean;

    /**
     * File or folder last modified DateTime.
     */
    modifiedDate?: Date;

    /**
     * File or folder size.
     */
    size: number;

    /**
     * File or folder path.
     */
    path?: string;

    /**
     * File Version ID.
     */
    versionId?: string;

    /**
     * Specifies whether the file is (true) or is not (false) the latest version of an file.
     */
    isLatest: boolean;
}
```

