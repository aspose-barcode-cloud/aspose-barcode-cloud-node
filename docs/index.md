# Documentation for API Endpoints

## class BarcodeApi

### getBarcodeGenerate

Generate barcode.

```ts
getBarcodeGenerate(type: 'Codabar' | 'Code11' | 'Code39Standard' | 'Code39Extended' | 'Code93Standard' | 'Code93Extended' | 'Code128' | 'GS1Code128' | 'EAN8' | 'EAN13' | 'EAN14' | 'SCC14' | 'SSCC18' | 'UPCA' | 'UPCE' | 'ISBN' | 'ISSN' | 'ISMN' | 'Standard2of5' | 'Interleaved2of5' | 'Matrix2of5' | 'ItalianPost25' | 'IATA2of5' | 'ITF14' | 'ITF6' | 'MSI' | 'VIN' | 'DeutschePostIdentcode' | 'DeutschePostLeitcode' | 'OPC' | 'PZN' | 'Code16K' | 'Pharmacode' | 'DataMatrix' | 'QR' | 'Aztec' | 'Pdf417' | 'MacroPdf417' | 'AustraliaPost' | 'Postnet' | 'Planet' | 'OneCode' | 'RM4SCC' | 'DatabarOmniDirectional' | 'DatabarTruncated' | 'DatabarLimited' | 'DatabarExpanded' | 'SingaporePost' | 'GS1DataMatrix' | 'AustralianPosteParcel' | 'SwissPostParcel' | 'PatchCode' | 'DatabarExpandedStacked' | 'DatabarStacked' | 'DatabarStackedOmniDirectional' | 'MicroPdf417' | 'GS1QR' | 'MaxiCode' | 'Code32' | 'DataLogic2of5' | 'DotCode' | 'DutchKIX' | 'UpcaGs1Code128Coupon' | 'UpcaGs1DatabarCoupon' | 'CodablockF' | 'GS1CodablockF' | 'Mailmark' | 'GS1DotCode' | 'HanXin' | 'GS1HanXin' | 'GS1Aztec' | 'GS1MicroPdf417', text: string): Buffer;
```

#### BarcodeApi.getBarcodeGenerate parameters

Name | Type | Description  | Notes
---- | ---- | ------------ | -----
 **type** |  &#39;Codabar&#39;, &#39;Code11&#39;, &#39;Code39Standard&#39;, &#39;Code39Extended&#39;, &#39;Code93Standard&#39;, &#39;Code93Extended&#39;, &#39;Code128&#39;, &#39;GS1Code128&#39;, &#39;EAN8&#39;, &#39;EAN13&#39;, &#39;EAN14&#39;, &#39;SCC14&#39;, &#39;SSCC18&#39;, &#39;UPCA&#39;, &#39;UPCE&#39;, &#39;ISBN&#39;, &#39;ISSN&#39;, &#39;ISMN&#39;, &#39;Standard2of5&#39;, &#39;Interleaved2of5&#39;, &#39;Matrix2of5&#39;, &#39;ItalianPost25&#39;, &#39;IATA2of5&#39;, &#39;ITF14&#39;, &#39;ITF6&#39;, &#39;MSI&#39;, &#39;VIN&#39;, &#39;DeutschePostIdentcode&#39;, &#39;DeutschePostLeitcode&#39;, &#39;OPC&#39;, &#39;PZN&#39;, &#39;Code16K&#39;, &#39;Pharmacode&#39;, &#39;DataMatrix&#39;, &#39;QR&#39;, &#39;Aztec&#39;, &#39;Pdf417&#39;, &#39;MacroPdf417&#39;, &#39;AustraliaPost&#39;, &#39;Postnet&#39;, &#39;Planet&#39;, &#39;OneCode&#39;, &#39;RM4SCC&#39;, &#39;DatabarOmniDirectional&#39;, &#39;DatabarTruncated&#39;, &#39;DatabarLimited&#39;, &#39;DatabarExpanded&#39;, &#39;SingaporePost&#39;, &#39;GS1DataMatrix&#39;, &#39;AustralianPosteParcel&#39;, &#39;SwissPostParcel&#39;, &#39;PatchCode&#39;, &#39;DatabarExpandedStacked&#39;, &#39;DatabarStacked&#39;, &#39;DatabarStackedOmniDirectional&#39;, &#39;MicroPdf417&#39;, &#39;GS1QR&#39;, &#39;MaxiCode&#39;, &#39;Code32&#39;, &#39;DataLogic2of5&#39;, &#39;DotCode&#39;, &#39;DutchKIX&#39;, &#39;UpcaGs1Code128Coupon&#39;, &#39;UpcaGs1DatabarCoupon&#39;, &#39;CodablockF&#39;, &#39;GS1CodablockF&#39;, &#39;Mailmark&#39;, &#39;GS1DotCode&#39;, &#39;HanXin&#39;, &#39;GS1HanXin&#39;, &#39;GS1Aztec&#39;, &#39;GS1MicroPdf417&#39; | Type of barcode to generate. |
 **text** | **string**| Text to encode. |
 **twoDDisplayText** | **string**| Text that will be displayed instead of codetext in 2D barcodes. Used for: Aztec, Pdf417, DataMatrix, QR, MaxiCode, DotCode | [optional]
 **textLocation** |  &#39;Below&#39;, &#39;Above&#39;, &#39;None&#39; | Specify the displaying Text Location, set to CodeLocation.None to hide CodeText. Default value: CodeLocation.Below. | [optional]
 **textAlignment** |  &#39;Left&#39;, &#39;Center&#39;, &#39;Right&#39; | Text alignment. | [optional]
 **textColor** | **string**| Specify the displaying CodeText&#39;s Color. Default value: Color.Black. | [optional]
 **fontSizeMode** |  &#39;Auto&#39;, &#39;Manual&#39; | Specify FontSizeMode. If FontSizeMode is set to Auto, font size will be calculated automatically based on xDimension value. It is recommended to use FontSizeMode.Auto especially in AutoSizeMode.Nearest or AutoSizeMode.Interpolation. Default value: FontSizeMode.Auto. | [optional]
 **noWrap** | **boolean**| Specify word wraps (line breaks) within text. Default value: false. | [optional]
 **resolution** | **number**| Resolution of the BarCode image. One value for both dimensions. Default value: 96 dpi. | [optional]
 **resolutionX** | **number**| DEPRECATED: Use &#39;Resolution&#39; instead. | [optional]
 **resolutionY** | **number**| DEPRECATED: Use &#39;Resolution&#39; instead. | [optional]
 **dimensionX** | **number**| The smallest width of the unit of BarCode bars or spaces. Increase this will increase the whole barcode image width. Ignored if AutoSizeMode property is set to AutoSizeMode.Nearest or AutoSizeMode.Interpolation. | [optional]
 **textSpace** | **number**| Space between the CodeText and the BarCode in Unit value. Default value: 2pt. Ignored for EAN8, EAN13, UPCE, UPCA, ISBN, ISMN, ISSN, UpcaGs1DatabarCoupon. | [optional]
 **units** |  &#39;Pixel&#39;, &#39;Point&#39;, &#39;Inch&#39;, &#39;Millimeter&#39; | Common Units for all measuring in query. Default units: pixel. | [optional]
 **sizeMode** |  &#39;None&#39;, &#39;Nearest&#39;, &#39;Interpolation&#39; | Specifies the different types of automatic sizing modes. Default value: AutoSizeMode.None. | [optional]
 **barHeight** | **number**| Height of the barcode in given units. Default units: pixel. | [optional]
 **imageHeight** | **number**| Height of the barcode image in given units. Default units: pixel. | [optional]
 **imageWidth** | **number**| Width of the barcode image in given units. Default units: pixel. | [optional]
 **rotationAngle** | **number**| BarCode image rotation angle, measured in degree, e.g. RotationAngle &#x3D; 0 or RotationAngle &#x3D; 360 means no rotation. If RotationAngle NOT equal to 90, 180, 270 or 0, it may increase the difficulty for the scanner to read the image. Default value: 0. | [optional]
 **backColor** | **string**| Background color of the barcode image. Default value: Color.White. | [optional]
 **barColor** | **string**| Bars color. Default value: Color.Black. | [optional]
 **borderColor** | **string**| Border color. Default value: Color.Black. | [optional]
 **borderWidth** | **number**| Border width. Default value: 0. Ignored if Visible is set to false. | [optional]
 **borderDashStyle** |  &#39;Solid&#39;, &#39;Dash&#39;, &#39;Dot&#39;, &#39;DashDot&#39;, &#39;DashDotDot&#39; | Border dash style. Default value: BorderDashStyle.Solid. | [optional]
 **borderVisible** | **boolean**| Border visibility. If false than parameter Width is always ignored (0). Default value: false. | [optional]
 **enableChecksum** |  &#39;Default&#39;, &#39;Yes&#39;, &#39;No&#39; | Enable checksum during generation 1D barcodes. Default is treated as Yes for symbology which must contain checksum, as No where checksum only possible. Checksum is possible: Code39 Standard/Extended, Standard2of5, Interleaved2of5, Matrix2of5, ItalianPost25, DeutschePostIdentcode, DeutschePostLeitcode, VIN, Codabar Checksum always used: Rest symbology | [optional]
 **enableEscape** | **boolean**| Indicates whether explains the character \&quot;\\\&quot; as an escape character in CodeText property. Used for Pdf417, DataMatrix, Code128 only If the EnableEscape is true, \&quot;\\\&quot; will be explained as a special escape character. Otherwise, \&quot;\\\&quot; acts as normal characters. Aspose.BarCode supports input decimal ascii code and mnemonic for ASCII control-code characters. For example, \\013 and \\\\CR stands for CR. | [optional]
 **filledBars** | **boolean**| Value indicating whether bars are filled. Only for 1D barcodes. Default value: true. | [optional]
 **alwaysShowChecksum** | **boolean**| Always display checksum digit in the human readable text for Code128 and GS1Code128 barcodes. | [optional]
 **wideNarrowRatio** | **number**| Wide bars to Narrow bars ratio. Default value: 3, that is, wide bars are 3 times as wide as narrow bars. Used for ITF, PZN, PharmaCode, Standard2of5, Interleaved2of5, Matrix2of5, ItalianPost25, IATA2of5, VIN, DeutschePost, OPC, Code32, DataLogic2of5, PatchCode, Code39Extended, Code39Standard | [optional]
 **validateText** | **boolean**| Only for 1D barcodes. If codetext is incorrect and value set to true - exception will be thrown. Otherwise codetext will be corrected to match barcode&#39;s specification. Exception always will be thrown for: Databar symbology if codetext is incorrect. Exception always will not be thrown for: AustraliaPost, SingaporePost, Code39Extended, Code93Extended, Code16K, Code128 symbology if codetext is incorrect. | [optional]
 **supplementData** | **string**| Supplement parameters. Used for Interleaved2of5, Standard2of5, EAN13, EAN8, UPCA, UPCE, ISBN, ISSN, ISMN. | [optional]
 **supplementSpace** | **number**| Space between main the BarCode and supplement BarCode. | [optional]
 **barWidthReduction** | **number**| Bars reduction value that is used to compensate ink spread while printing. | [optional]
 **useAntiAlias** | **boolean**| Indicates whether is used anti-aliasing mode to render image. Anti-aliasing mode is applied to barcode and text drawing. | [optional]
 **format** | **string**| Result image format. | [optional]

#### BarcodeApi.getBarcodeGenerate return type

Buffer

---

### getBarcodeRecognize

Recognize barcode from a file on server.

```ts
getBarcodeRecognize(name: string): BarcodeResponseList;
```

#### BarcodeApi.getBarcodeRecognize parameters

Name | Type | Description  | Notes
---- | ---- | ------------ | -----
 **name** | **string**| The image file name. |
 **type** |  &#39;all&#39;, &#39;AustraliaPost&#39;, &#39;Aztec&#39;, &#39;ISBN&#39;, &#39;Codabar&#39;, &#39;Code11&#39;, &#39;Code128&#39;, &#39;GS1Code128&#39;, &#39;Code39Extended&#39;, &#39;Code39Standard&#39;, &#39;Code93Extended&#39;, &#39;Code93Standard&#39;, &#39;DataMatrix&#39;, &#39;DeutschePostIdentcode&#39;, &#39;DeutschePostLeitcode&#39;, &#39;EAN13&#39;, &#39;EAN14&#39;, &#39;EAN8&#39;, &#39;IATA2of5&#39;, &#39;Interleaved2of5&#39;, &#39;ISSN&#39;, &#39;ISMN&#39;, &#39;ItalianPost25&#39;, &#39;ITF14&#39;, &#39;ITF6&#39;, &#39;MacroPdf417&#39;, &#39;Matrix2of5&#39;, &#39;MSI&#39;, &#39;OneCode&#39;, &#39;OPC&#39;, &#39;PatchCode&#39;, &#39;Pdf417&#39;, &#39;MicroPdf417&#39;, &#39;Planet&#39;, &#39;Postnet&#39;, &#39;PZN&#39;, &#39;QR&#39;, &#39;MicroQR&#39;, &#39;RM4SCC&#39;, &#39;SCC14&#39;, &#39;SSCC18&#39;, &#39;Standard2of5&#39;, &#39;Supplement&#39;, &#39;UPCA&#39;, &#39;UPCE&#39;, &#39;VIN&#39;, &#39;Pharmacode&#39;, &#39;GS1DataMatrix&#39;, &#39;DatabarOmniDirectional&#39;, &#39;DatabarTruncated&#39;, &#39;DatabarLimited&#39;, &#39;DatabarExpanded&#39;, &#39;SwissPostParcel&#39;, &#39;AustralianPosteParcel&#39;, &#39;Code16K&#39;, &#39;DatabarStackedOmniDirectional&#39;, &#39;DatabarStacked&#39;, &#39;DatabarExpandedStacked&#39;, &#39;CompactPdf417&#39;, &#39;GS1QR&#39;, &#39;MaxiCode&#39;, &#39;MicrE13B&#39;, &#39;Code32&#39;, &#39;DataLogic2of5&#39;, &#39;DotCode&#39;, &#39;DutchKIX&#39;, &#39;CodablockF&#39;, &#39;Mailmark&#39;, &#39;GS1DotCode&#39;, &#39;HIBCCode39LIC&#39;, &#39;HIBCCode128LIC&#39;, &#39;HIBCAztecLIC&#39;, &#39;HIBCDataMatrixLIC&#39;, &#39;HIBCQRLIC&#39;, &#39;HIBCCode39PAS&#39;, &#39;HIBCCode128PAS&#39;, &#39;HIBCAztecPAS&#39;, &#39;HIBCDataMatrixPAS&#39;, &#39;HIBCQRPAS&#39;, &#39;HanXin&#39;, &#39;GS1HanXin&#39;, &#39;GS1Aztec&#39;, &#39;GS1CompositeBar&#39;, &#39;GS1MicroPdf417&#39; | The type of barcode to read. | [optional]
 **checksumValidation** |  &#39;Default&#39;, &#39;On&#39;, &#39;Off&#39; | Enable checksum validation during recognition for 1D barcodes. Default is treated as Yes for symbologies which must contain checksum, as No where checksum only possible. Checksum never used: Codabar Checksum is possible: Code39 Standard/Extended, Standard2of5, Interleaved2of5, Matrix2of5, ItalianPost25, DeutschePostIdentcode, DeutschePostLeitcode, VIN Checksum always used: Rest symbologies | [optional]
 **detectEncoding** | **boolean**| A flag which force engine to detect codetext encoding for Unicode. | [optional]
 **preset** |  &#39;HighPerformance&#39;, &#39;NormalQuality&#39;, &#39;HighQualityDetection&#39;, &#39;MaxQualityDetection&#39;, &#39;HighQuality&#39;, &#39;MaxBarCodes&#39; | Preset allows to configure recognition quality and speed manually. You can quickly set up Preset by embedded presets: HighPerformance, NormalQuality, HighQuality, MaxBarCodes or you can manually configure separate options. Default value of Preset is NormalQuality. | [optional]
 **rectX** | **number**| Set X of top left corner of area for recognition. | [optional]
 **rectY** | **number**| Set Y of top left corner of area for recognition. | [optional]
 **rectWidth** | **number**| Set Width of area for recognition. | [optional]
 **rectHeight** | **number**| Set Height of area for recognition. | [optional]
 **stripFNC** | **boolean**| Value indicating whether FNC symbol strip must be done. | [optional]
 **timeout** | **number**| Timeout of recognition process in milliseconds. Default value is 15_000 (15 seconds). Maximum value is 60_000 (1 minute). In case of a timeout RequestTimeout (408) status will be returned. Try reducing the image size to avoid timeout. | [optional]
 **medianSmoothingWindowSize** | **number**| Window size for median smoothing. Typical values are 3 or 4. Default value is 3. AllowMedianSmoothing must be set. | [optional]
 **allowMedianSmoothing** | **boolean**| Allows engine to enable median smoothing as additional scan. Mode helps to recognize noised barcodes. | [optional]
 **allowComplexBackground** | **boolean**| Allows engine to recognize color barcodes on color background as additional scan. Extremely slow mode. | [optional]
 **allowDatamatrixIndustrialBarcodes** | **boolean**| Allows engine for Datamatrix to recognize dashed industrial Datamatrix barcodes. Slow mode which helps only for dashed barcodes which consist from spots. | [optional]
 **allowDecreasedImage** | **boolean**| Allows engine to recognize decreased image as additional scan. Size for decreasing is selected by internal engine algorithms. Mode helps to recognize barcodes which are noised and blurred but captured with high resolution. | [optional]
 **allowDetectScanGap** | **boolean**| Allows engine to use gap between scans to increase recognition speed. Mode can make recognition problems with low height barcodes. | [optional]
 **allowIncorrectBarcodes** | **boolean**| Allows engine to recognize barcodes which has incorrect checksum or incorrect values. Mode can be used to recognize damaged barcodes with incorrect text. | [optional]
 **allowInvertImage** | **boolean**| Allows engine to recognize inverse color image as additional scan. Mode can be used when barcode is white on black background. | [optional]
 **allowMicroWhiteSpotsRemoving** | **boolean**| Allows engine for Postal barcodes to recognize slightly noised images. Mode helps to recognize slightly damaged Postal barcodes. | [optional]
 **allowOneDFastBarcodesDetector** | **boolean**| Allows engine for 1D barcodes to quickly recognize high quality barcodes which fill almost whole image. Mode helps to quickly recognize generated barcodes from Internet. | [optional]
 **allowOneDWipedBarsRestoration** | **boolean**| Allows engine for 1D barcodes to recognize barcodes with single wiped/glued bars in pattern. | [optional]
 **allowQRMicroQrRestoration** | **boolean**| Allows engine for QR/MicroQR to recognize damaged MicroQR barcodes. | [optional]
 **allowRegularImage** | **boolean**| Allows engine to recognize regular image without any restorations as main scan. Mode to recognize image as is. | [optional]
 **allowSaltAndPepperFiltering** | **boolean**| Allows engine to recognize barcodes with salt and pepper noise type. Mode can remove small noise with white and black dots. | [optional]
 **allowWhiteSpotsRemoving** | **boolean**| Allows engine to recognize image without small white spots as additional scan. Mode helps to recognize noised image as well as median smoothing filtering. | [optional]
 **checkMore1DVariants** | **boolean**| Allows engine to recognize 1D barcodes with checksum by checking more recognition variants. Default value: False. | [optional]
 **fastScanOnly** | **boolean**| Allows engine for 1D barcodes to quickly recognize middle slice of an image and return result without using any time-consuming algorithms. Default value: False. | [optional]
 **allowAdditionalRestorations** | **boolean**| Allows engine using additional image restorations to recognize corrupted barcodes. At this time, it is used only in MicroPdf417 barcode type. Default value: False. | [optional]
 **regionLikelihoodThresholdPercent** | **number**| Sets threshold for detected regions that may contain barcodes. Value 0.7 means that bottom 70% of possible regions are filtered out and not processed further. Region likelihood threshold must be between [0.05, 0.9] Use high values for clear images with few barcodes. Use low values for images with many barcodes or for noisy images. Low value may lead to a bigger recognition time. | [optional]
 **scanWindowSizes** | **Array&lt;number&gt;**| Scan window sizes in pixels. Allowed sizes are 10, 15, 20, 25, 30. Scanning with small window size takes more time and provides more accuracy but may fail in detecting very big barcodes. Combining of several window sizes can improve detection quality. | [optional]
 **similarity** | **number**| Similarity coefficient depends on how homogeneous barcodes are. Use high value for for clear barcodes. Use low values to detect barcodes that ara partly damaged or not lighten evenly. Similarity coefficient must be between [0.5, 0.9] | [optional]
 **skipDiagonalSearch** | **boolean**| Allows detector to skip search for diagonal barcodes. Setting it to false will increase detection time but allow to find diagonal barcodes that can be missed otherwise. Enabling of diagonal search leads to a bigger detection time. | [optional]
 **readTinyBarcodes** | **boolean**| Allows engine to recognize tiny barcodes on large images. Ignored if AllowIncorrectBarcodes is set to True. Default value: False. | [optional]
 **australianPostEncodingTable** |  &#39;CTable&#39;, &#39;NTable&#39;, &#39;Other&#39; | Interpreting Type for the Customer Information of AustralianPost BarCode.Default is CustomerInformationInterpretingType.Other. | [optional]
 **ignoreEndingFillingPatternsForCTable** | **boolean**| The flag which force AustraliaPost decoder to ignore last filling patterns in Customer Information Field during decoding as CTable method. CTable encoding method does not have any gaps in encoding table and sequence \&quot;333\&quot; of filling patterns is decoded as letter \&quot;z\&quot;. | [optional]
 **storage** | **string**| The image storage. | [optional]
 **folder** | **string**| The image folder. | [optional]

#### BarcodeApi.getBarcodeRecognize return type

[**BarcodeResponseList**](models.md#BarcodeResponseList)

---

### postBarcodeRecognizeFromUrlOrContent

Recognize barcode from an url or from request body. Request body can contain raw data bytes of the image with content-type \"application/octet-stream\". An image can also be passed as a form field.

```ts
postBarcodeRecognizeFromUrlOrContent(): BarcodeResponseList;
```

#### BarcodeApi.postBarcodeRecognizeFromUrlOrContent parameters

Name | Type | Description  | Notes
---- | ---- | ------------ | -----
 **type** |  &#39;all&#39;, &#39;AustraliaPost&#39;, &#39;Aztec&#39;, &#39;ISBN&#39;, &#39;Codabar&#39;, &#39;Code11&#39;, &#39;Code128&#39;, &#39;GS1Code128&#39;, &#39;Code39Extended&#39;, &#39;Code39Standard&#39;, &#39;Code93Extended&#39;, &#39;Code93Standard&#39;, &#39;DataMatrix&#39;, &#39;DeutschePostIdentcode&#39;, &#39;DeutschePostLeitcode&#39;, &#39;EAN13&#39;, &#39;EAN14&#39;, &#39;EAN8&#39;, &#39;IATA2of5&#39;, &#39;Interleaved2of5&#39;, &#39;ISSN&#39;, &#39;ISMN&#39;, &#39;ItalianPost25&#39;, &#39;ITF14&#39;, &#39;ITF6&#39;, &#39;MacroPdf417&#39;, &#39;Matrix2of5&#39;, &#39;MSI&#39;, &#39;OneCode&#39;, &#39;OPC&#39;, &#39;PatchCode&#39;, &#39;Pdf417&#39;, &#39;MicroPdf417&#39;, &#39;Planet&#39;, &#39;Postnet&#39;, &#39;PZN&#39;, &#39;QR&#39;, &#39;MicroQR&#39;, &#39;RM4SCC&#39;, &#39;SCC14&#39;, &#39;SSCC18&#39;, &#39;Standard2of5&#39;, &#39;Supplement&#39;, &#39;UPCA&#39;, &#39;UPCE&#39;, &#39;VIN&#39;, &#39;Pharmacode&#39;, &#39;GS1DataMatrix&#39;, &#39;DatabarOmniDirectional&#39;, &#39;DatabarTruncated&#39;, &#39;DatabarLimited&#39;, &#39;DatabarExpanded&#39;, &#39;SwissPostParcel&#39;, &#39;AustralianPosteParcel&#39;, &#39;Code16K&#39;, &#39;DatabarStackedOmniDirectional&#39;, &#39;DatabarStacked&#39;, &#39;DatabarExpandedStacked&#39;, &#39;CompactPdf417&#39;, &#39;GS1QR&#39;, &#39;MaxiCode&#39;, &#39;MicrE13B&#39;, &#39;Code32&#39;, &#39;DataLogic2of5&#39;, &#39;DotCode&#39;, &#39;DutchKIX&#39;, &#39;CodablockF&#39;, &#39;Mailmark&#39;, &#39;GS1DotCode&#39;, &#39;HIBCCode39LIC&#39;, &#39;HIBCCode128LIC&#39;, &#39;HIBCAztecLIC&#39;, &#39;HIBCDataMatrixLIC&#39;, &#39;HIBCQRLIC&#39;, &#39;HIBCCode39PAS&#39;, &#39;HIBCCode128PAS&#39;, &#39;HIBCAztecPAS&#39;, &#39;HIBCDataMatrixPAS&#39;, &#39;HIBCQRPAS&#39;, &#39;HanXin&#39;, &#39;GS1HanXin&#39;, &#39;GS1Aztec&#39;, &#39;GS1CompositeBar&#39;, &#39;GS1MicroPdf417&#39; | The type of barcode to read. | [optional]
 **checksumValidation** |  &#39;Default&#39;, &#39;On&#39;, &#39;Off&#39; | Enable checksum validation during recognition for 1D barcodes. Default is treated as Yes for symbologies which must contain checksum, as No where checksum only possible. Checksum never used: Codabar Checksum is possible: Code39 Standard/Extended, Standard2of5, Interleaved2of5, Matrix2of5, ItalianPost25, DeutschePostIdentcode, DeutschePostLeitcode, VIN Checksum always used: Rest symbologies | [optional]
 **detectEncoding** | **boolean**| A flag which force engine to detect codetext encoding for Unicode. | [optional]
 **preset** |  &#39;HighPerformance&#39;, &#39;NormalQuality&#39;, &#39;HighQualityDetection&#39;, &#39;MaxQualityDetection&#39;, &#39;HighQuality&#39;, &#39;MaxBarCodes&#39; | Preset allows to configure recognition quality and speed manually. You can quickly set up Preset by embedded presets: HighPerformance, NormalQuality, HighQuality, MaxBarCodes or you can manually configure separate options. Default value of Preset is NormalQuality. | [optional]
 **rectX** | **number**| Set X of top left corner of area for recognition. | [optional]
 **rectY** | **number**| Set Y of top left corner of area for recognition. | [optional]
 **rectWidth** | **number**| Set Width of area for recognition. | [optional]
 **rectHeight** | **number**| Set Height of area for recognition. | [optional]
 **stripFNC** | **boolean**| Value indicating whether FNC symbol strip must be done. | [optional]
 **timeout** | **number**| Timeout of recognition process in milliseconds. Default value is 15_000 (15 seconds). Maximum value is 60_000 (1 minute). In case of a timeout RequestTimeout (408) status will be returned. Try reducing the image size to avoid timeout. | [optional]
 **medianSmoothingWindowSize** | **number**| Window size for median smoothing. Typical values are 3 or 4. Default value is 3. AllowMedianSmoothing must be set. | [optional]
 **allowMedianSmoothing** | **boolean**| Allows engine to enable median smoothing as additional scan. Mode helps to recognize noised barcodes. | [optional]
 **allowComplexBackground** | **boolean**| Allows engine to recognize color barcodes on color background as additional scan. Extremely slow mode. | [optional]
 **allowDatamatrixIndustrialBarcodes** | **boolean**| Allows engine for Datamatrix to recognize dashed industrial Datamatrix barcodes. Slow mode which helps only for dashed barcodes which consist from spots. | [optional]
 **allowDecreasedImage** | **boolean**| Allows engine to recognize decreased image as additional scan. Size for decreasing is selected by internal engine algorithms. Mode helps to recognize barcodes which are noised and blurred but captured with high resolution. | [optional]
 **allowDetectScanGap** | **boolean**| Allows engine to use gap between scans to increase recognition speed. Mode can make recognition problems with low height barcodes. | [optional]
 **allowIncorrectBarcodes** | **boolean**| Allows engine to recognize barcodes which has incorrect checksum or incorrect values. Mode can be used to recognize damaged barcodes with incorrect text. | [optional]
 **allowInvertImage** | **boolean**| Allows engine to recognize inverse color image as additional scan. Mode can be used when barcode is white on black background. | [optional]
 **allowMicroWhiteSpotsRemoving** | **boolean**| Allows engine for Postal barcodes to recognize slightly noised images. Mode helps to recognize slightly damaged Postal barcodes. | [optional]
 **allowOneDFastBarcodesDetector** | **boolean**| Allows engine for 1D barcodes to quickly recognize high quality barcodes which fill almost whole image. Mode helps to quickly recognize generated barcodes from Internet. | [optional]
 **allowOneDWipedBarsRestoration** | **boolean**| Allows engine for 1D barcodes to recognize barcodes with single wiped/glued bars in pattern. | [optional]
 **allowQRMicroQrRestoration** | **boolean**| Allows engine for QR/MicroQR to recognize damaged MicroQR barcodes. | [optional]
 **allowRegularImage** | **boolean**| Allows engine to recognize regular image without any restorations as main scan. Mode to recognize image as is. | [optional]
 **allowSaltAndPepperFiltering** | **boolean**| Allows engine to recognize barcodes with salt and pepper noise type. Mode can remove small noise with white and black dots. | [optional]
 **allowWhiteSpotsRemoving** | **boolean**| Allows engine to recognize image without small white spots as additional scan. Mode helps to recognize noised image as well as median smoothing filtering. | [optional]
 **checkMore1DVariants** | **boolean**| Allows engine to recognize 1D barcodes with checksum by checking more recognition variants. Default value: False. | [optional]
 **fastScanOnly** | **boolean**| Allows engine for 1D barcodes to quickly recognize middle slice of an image and return result without using any time-consuming algorithms. Default value: False. | [optional]
 **allowAdditionalRestorations** | **boolean**| Allows engine using additional image restorations to recognize corrupted barcodes. At this time, it is used only in MicroPdf417 barcode type. Default value: False. | [optional]
 **regionLikelihoodThresholdPercent** | **number**| Sets threshold for detected regions that may contain barcodes. Value 0.7 means that bottom 70% of possible regions are filtered out and not processed further. Region likelihood threshold must be between [0.05, 0.9] Use high values for clear images with few barcodes. Use low values for images with many barcodes or for noisy images. Low value may lead to a bigger recognition time. | [optional]
 **scanWindowSizes** | **Array&lt;number&gt;**| Scan window sizes in pixels. Allowed sizes are 10, 15, 20, 25, 30. Scanning with small window size takes more time and provides more accuracy but may fail in detecting very big barcodes. Combining of several window sizes can improve detection quality. | [optional]
 **similarity** | **number**| Similarity coefficient depends on how homogeneous barcodes are. Use high value for for clear barcodes. Use low values to detect barcodes that ara partly damaged or not lighten evenly. Similarity coefficient must be between [0.5, 0.9] | [optional]
 **skipDiagonalSearch** | **boolean**| Allows detector to skip search for diagonal barcodes. Setting it to false will increase detection time but allow to find diagonal barcodes that can be missed otherwise. Enabling of diagonal search leads to a bigger detection time. | [optional]
 **readTinyBarcodes** | **boolean**| Allows engine to recognize tiny barcodes on large images. Ignored if AllowIncorrectBarcodes is set to True. Default value: False. | [optional]
 **australianPostEncodingTable** |  &#39;CTable&#39;, &#39;NTable&#39;, &#39;Other&#39; | Interpreting Type for the Customer Information of AustralianPost BarCode.Default is CustomerInformationInterpretingType.Other. | [optional]
 **ignoreEndingFillingPatternsForCTable** | **boolean**| The flag which force AustraliaPost decoder to ignore last filling patterns in Customer Information Field during decoding as CTable method. CTable encoding method does not have any gaps in encoding table and sequence \&quot;333\&quot; of filling patterns is decoded as letter \&quot;z\&quot;. | [optional]
 **url** | **string**| The image file url. | [optional]
 **image** | **Buffer**| Image data | [optional]

#### BarcodeApi.postBarcodeRecognizeFromUrlOrContent return type

[**BarcodeResponseList**](models.md#BarcodeResponseList)

---

### postGenerateMultiple

Generate multiple barcodes and return in response stream

```ts
postGenerateMultiple(generatorParamsList: GeneratorParamsList): Buffer;
```

#### BarcodeApi.postGenerateMultiple parameters

Name | Type | Description  | Notes
---- | ---- | ------------ | -----
 **generatorParamsList** | [**GeneratorParamsList**](models.md#GeneratorParamsList)| List of barcodes |
 **format** | **string**| Format to return stream in | [optional] [default to 'png']

#### BarcodeApi.postGenerateMultiple return type

Buffer

---

### putBarcodeGenerateFile

Generate barcode and save on server (from query params or from file with json or xml content)

```ts
putBarcodeGenerateFile(name: string, type: 'Codabar' | 'Code11' | 'Code39Standard' | 'Code39Extended' | 'Code93Standard' | 'Code93Extended' | 'Code128' | 'GS1Code128' | 'EAN8' | 'EAN13' | 'EAN14' | 'SCC14' | 'SSCC18' | 'UPCA' | 'UPCE' | 'ISBN' | 'ISSN' | 'ISMN' | 'Standard2of5' | 'Interleaved2of5' | 'Matrix2of5' | 'ItalianPost25' | 'IATA2of5' | 'ITF14' | 'ITF6' | 'MSI' | 'VIN' | 'DeutschePostIdentcode' | 'DeutschePostLeitcode' | 'OPC' | 'PZN' | 'Code16K' | 'Pharmacode' | 'DataMatrix' | 'QR' | 'Aztec' | 'Pdf417' | 'MacroPdf417' | 'AustraliaPost' | 'Postnet' | 'Planet' | 'OneCode' | 'RM4SCC' | 'DatabarOmniDirectional' | 'DatabarTruncated' | 'DatabarLimited' | 'DatabarExpanded' | 'SingaporePost' | 'GS1DataMatrix' | 'AustralianPosteParcel' | 'SwissPostParcel' | 'PatchCode' | 'DatabarExpandedStacked' | 'DatabarStacked' | 'DatabarStackedOmniDirectional' | 'MicroPdf417' | 'GS1QR' | 'MaxiCode' | 'Code32' | 'DataLogic2of5' | 'DotCode' | 'DutchKIX' | 'UpcaGs1Code128Coupon' | 'UpcaGs1DatabarCoupon' | 'CodablockF' | 'GS1CodablockF' | 'Mailmark' | 'GS1DotCode' | 'HanXin' | 'GS1HanXin' | 'GS1Aztec' | 'GS1MicroPdf417', text: string): ResultImageInfo;
```

#### BarcodeApi.putBarcodeGenerateFile parameters

Name | Type | Description  | Notes
---- | ---- | ------------ | -----
 **name** | **string**| The image file name. |
 **type** |  &#39;Codabar&#39;, &#39;Code11&#39;, &#39;Code39Standard&#39;, &#39;Code39Extended&#39;, &#39;Code93Standard&#39;, &#39;Code93Extended&#39;, &#39;Code128&#39;, &#39;GS1Code128&#39;, &#39;EAN8&#39;, &#39;EAN13&#39;, &#39;EAN14&#39;, &#39;SCC14&#39;, &#39;SSCC18&#39;, &#39;UPCA&#39;, &#39;UPCE&#39;, &#39;ISBN&#39;, &#39;ISSN&#39;, &#39;ISMN&#39;, &#39;Standard2of5&#39;, &#39;Interleaved2of5&#39;, &#39;Matrix2of5&#39;, &#39;ItalianPost25&#39;, &#39;IATA2of5&#39;, &#39;ITF14&#39;, &#39;ITF6&#39;, &#39;MSI&#39;, &#39;VIN&#39;, &#39;DeutschePostIdentcode&#39;, &#39;DeutschePostLeitcode&#39;, &#39;OPC&#39;, &#39;PZN&#39;, &#39;Code16K&#39;, &#39;Pharmacode&#39;, &#39;DataMatrix&#39;, &#39;QR&#39;, &#39;Aztec&#39;, &#39;Pdf417&#39;, &#39;MacroPdf417&#39;, &#39;AustraliaPost&#39;, &#39;Postnet&#39;, &#39;Planet&#39;, &#39;OneCode&#39;, &#39;RM4SCC&#39;, &#39;DatabarOmniDirectional&#39;, &#39;DatabarTruncated&#39;, &#39;DatabarLimited&#39;, &#39;DatabarExpanded&#39;, &#39;SingaporePost&#39;, &#39;GS1DataMatrix&#39;, &#39;AustralianPosteParcel&#39;, &#39;SwissPostParcel&#39;, &#39;PatchCode&#39;, &#39;DatabarExpandedStacked&#39;, &#39;DatabarStacked&#39;, &#39;DatabarStackedOmniDirectional&#39;, &#39;MicroPdf417&#39;, &#39;GS1QR&#39;, &#39;MaxiCode&#39;, &#39;Code32&#39;, &#39;DataLogic2of5&#39;, &#39;DotCode&#39;, &#39;DutchKIX&#39;, &#39;UpcaGs1Code128Coupon&#39;, &#39;UpcaGs1DatabarCoupon&#39;, &#39;CodablockF&#39;, &#39;GS1CodablockF&#39;, &#39;Mailmark&#39;, &#39;GS1DotCode&#39;, &#39;HanXin&#39;, &#39;GS1HanXin&#39;, &#39;GS1Aztec&#39;, &#39;GS1MicroPdf417&#39; | Type of barcode to generate. |
 **text** | **string**| Text to encode. |
 **twoDDisplayText** | **string**| Text that will be displayed instead of codetext in 2D barcodes. Used for: Aztec, Pdf417, DataMatrix, QR, MaxiCode, DotCode | [optional]
 **textLocation** |  &#39;Below&#39;, &#39;Above&#39;, &#39;None&#39; | Specify the displaying Text Location, set to CodeLocation.None to hide CodeText. Default value: CodeLocation.Below. | [optional]
 **textAlignment** |  &#39;Left&#39;, &#39;Center&#39;, &#39;Right&#39; | Text alignment. | [optional]
 **textColor** | **string**| Specify the displaying CodeText&#39;s Color. Default value: Color.Black. | [optional]
 **fontSizeMode** |  &#39;Auto&#39;, &#39;Manual&#39; | Specify FontSizeMode. If FontSizeMode is set to Auto, font size will be calculated automatically based on xDimension value. It is recommended to use FontSizeMode.Auto especially in AutoSizeMode.Nearest or AutoSizeMode.Interpolation. Default value: FontSizeMode.Auto. | [optional]
 **noWrap** | **boolean**| Specify word wraps (line breaks) within text. Default value: false. | [optional]
 **resolution** | **number**| Resolution of the BarCode image. One value for both dimensions. Default value: 96 dpi. | [optional]
 **resolutionX** | **number**| DEPRECATED: Use &#39;Resolution&#39; instead. | [optional]
 **resolutionY** | **number**| DEPRECATED: Use &#39;Resolution&#39; instead. | [optional]
 **dimensionX** | **number**| The smallest width of the unit of BarCode bars or spaces. Increase this will increase the whole barcode image width. Ignored if AutoSizeMode property is set to AutoSizeMode.Nearest or AutoSizeMode.Interpolation. | [optional]
 **textSpace** | **number**| Space between the CodeText and the BarCode in Unit value. Default value: 2pt. Ignored for EAN8, EAN13, UPCE, UPCA, ISBN, ISMN, ISSN, UpcaGs1DatabarCoupon. | [optional]
 **units** |  &#39;Pixel&#39;, &#39;Point&#39;, &#39;Inch&#39;, &#39;Millimeter&#39; | Common Units for all measuring in query. Default units: pixel. | [optional]
 **sizeMode** |  &#39;None&#39;, &#39;Nearest&#39;, &#39;Interpolation&#39; | Specifies the different types of automatic sizing modes. Default value: AutoSizeMode.None. | [optional]
 **barHeight** | **number**| Height of the barcode in given units. Default units: pixel. | [optional]
 **imageHeight** | **number**| Height of the barcode image in given units. Default units: pixel. | [optional]
 **imageWidth** | **number**| Width of the barcode image in given units. Default units: pixel. | [optional]
 **rotationAngle** | **number**| BarCode image rotation angle, measured in degree, e.g. RotationAngle &#x3D; 0 or RotationAngle &#x3D; 360 means no rotation. If RotationAngle NOT equal to 90, 180, 270 or 0, it may increase the difficulty for the scanner to read the image. Default value: 0. | [optional]
 **backColor** | **string**| Background color of the barcode image. Default value: Color.White. | [optional]
 **barColor** | **string**| Bars color. Default value: Color.Black. | [optional]
 **borderColor** | **string**| Border color. Default value: Color.Black. | [optional]
 **borderWidth** | **number**| Border width. Default value: 0. Ignored if Visible is set to false. | [optional]
 **borderDashStyle** |  &#39;Solid&#39;, &#39;Dash&#39;, &#39;Dot&#39;, &#39;DashDot&#39;, &#39;DashDotDot&#39; | Border dash style. Default value: BorderDashStyle.Solid. | [optional]
 **borderVisible** | **boolean**| Border visibility. If false than parameter Width is always ignored (0). Default value: false. | [optional]
 **enableChecksum** |  &#39;Default&#39;, &#39;Yes&#39;, &#39;No&#39; | Enable checksum during generation 1D barcodes. Default is treated as Yes for symbology which must contain checksum, as No where checksum only possible. Checksum is possible: Code39 Standard/Extended, Standard2of5, Interleaved2of5, Matrix2of5, ItalianPost25, DeutschePostIdentcode, DeutschePostLeitcode, VIN, Codabar Checksum always used: Rest symbology | [optional]
 **enableEscape** | **boolean**| Indicates whether explains the character \&quot;\\\&quot; as an escape character in CodeText property. Used for Pdf417, DataMatrix, Code128 only If the EnableEscape is true, \&quot;\\\&quot; will be explained as a special escape character. Otherwise, \&quot;\\\&quot; acts as normal characters. Aspose.BarCode supports input decimal ascii code and mnemonic for ASCII control-code characters. For example, \\013 and \\\\CR stands for CR. | [optional]
 **filledBars** | **boolean**| Value indicating whether bars are filled. Only for 1D barcodes. Default value: true. | [optional]
 **alwaysShowChecksum** | **boolean**| Always display checksum digit in the human readable text for Code128 and GS1Code128 barcodes. | [optional]
 **wideNarrowRatio** | **number**| Wide bars to Narrow bars ratio. Default value: 3, that is, wide bars are 3 times as wide as narrow bars. Used for ITF, PZN, PharmaCode, Standard2of5, Interleaved2of5, Matrix2of5, ItalianPost25, IATA2of5, VIN, DeutschePost, OPC, Code32, DataLogic2of5, PatchCode, Code39Extended, Code39Standard | [optional]
 **validateText** | **boolean**| Only for 1D barcodes. If codetext is incorrect and value set to true - exception will be thrown. Otherwise codetext will be corrected to match barcode&#39;s specification. Exception always will be thrown for: Databar symbology if codetext is incorrect. Exception always will not be thrown for: AustraliaPost, SingaporePost, Code39Extended, Code93Extended, Code16K, Code128 symbology if codetext is incorrect. | [optional]
 **supplementData** | **string**| Supplement parameters. Used for Interleaved2of5, Standard2of5, EAN13, EAN8, UPCA, UPCE, ISBN, ISSN, ISMN. | [optional]
 **supplementSpace** | **number**| Space between main the BarCode and supplement BarCode. | [optional]
 **barWidthReduction** | **number**| Bars reduction value that is used to compensate ink spread while printing. | [optional]
 **useAntiAlias** | **boolean**| Indicates whether is used anti-aliasing mode to render image. Anti-aliasing mode is applied to barcode and text drawing. | [optional]
 **storage** | **string**| Image&#39;s storage. | [optional]
 **folder** | **string**| Image&#39;s folder. | [optional]
 **format** | **string**| The image format. | [optional]

#### BarcodeApi.putBarcodeGenerateFile return type

[**ResultImageInfo**](models.md#ResultImageInfo)

---

### putBarcodeRecognizeFromBody

Recognition of a barcode from file on server with parameters in body.

```ts
putBarcodeRecognizeFromBody(name: string, readerParams: ReaderParams): BarcodeResponseList;
```

#### BarcodeApi.putBarcodeRecognizeFromBody parameters

Name | Type | Description  | Notes
---- | ---- | ------------ | -----
 **name** | **string**| The image file name. |
 **readerParams** | [**ReaderParams**](models.md#ReaderParams)| BarcodeReader object with parameters. |
 **type** |  &#39;all&#39;, &#39;AustraliaPost&#39;, &#39;Aztec&#39;, &#39;ISBN&#39;, &#39;Codabar&#39;, &#39;Code11&#39;, &#39;Code128&#39;, &#39;GS1Code128&#39;, &#39;Code39Extended&#39;, &#39;Code39Standard&#39;, &#39;Code93Extended&#39;, &#39;Code93Standard&#39;, &#39;DataMatrix&#39;, &#39;DeutschePostIdentcode&#39;, &#39;DeutschePostLeitcode&#39;, &#39;EAN13&#39;, &#39;EAN14&#39;, &#39;EAN8&#39;, &#39;IATA2of5&#39;, &#39;Interleaved2of5&#39;, &#39;ISSN&#39;, &#39;ISMN&#39;, &#39;ItalianPost25&#39;, &#39;ITF14&#39;, &#39;ITF6&#39;, &#39;MacroPdf417&#39;, &#39;Matrix2of5&#39;, &#39;MSI&#39;, &#39;OneCode&#39;, &#39;OPC&#39;, &#39;PatchCode&#39;, &#39;Pdf417&#39;, &#39;MicroPdf417&#39;, &#39;Planet&#39;, &#39;Postnet&#39;, &#39;PZN&#39;, &#39;QR&#39;, &#39;MicroQR&#39;, &#39;RM4SCC&#39;, &#39;SCC14&#39;, &#39;SSCC18&#39;, &#39;Standard2of5&#39;, &#39;Supplement&#39;, &#39;UPCA&#39;, &#39;UPCE&#39;, &#39;VIN&#39;, &#39;Pharmacode&#39;, &#39;GS1DataMatrix&#39;, &#39;DatabarOmniDirectional&#39;, &#39;DatabarTruncated&#39;, &#39;DatabarLimited&#39;, &#39;DatabarExpanded&#39;, &#39;SwissPostParcel&#39;, &#39;AustralianPosteParcel&#39;, &#39;Code16K&#39;, &#39;DatabarStackedOmniDirectional&#39;, &#39;DatabarStacked&#39;, &#39;DatabarExpandedStacked&#39;, &#39;CompactPdf417&#39;, &#39;GS1QR&#39;, &#39;MaxiCode&#39;, &#39;MicrE13B&#39;, &#39;Code32&#39;, &#39;DataLogic2of5&#39;, &#39;DotCode&#39;, &#39;DutchKIX&#39;, &#39;CodablockF&#39;, &#39;Mailmark&#39;, &#39;GS1DotCode&#39;, &#39;HIBCCode39LIC&#39;, &#39;HIBCCode128LIC&#39;, &#39;HIBCAztecLIC&#39;, &#39;HIBCDataMatrixLIC&#39;, &#39;HIBCQRLIC&#39;, &#39;HIBCCode39PAS&#39;, &#39;HIBCCode128PAS&#39;, &#39;HIBCAztecPAS&#39;, &#39;HIBCDataMatrixPAS&#39;, &#39;HIBCQRPAS&#39;, &#39;HanXin&#39;, &#39;GS1HanXin&#39;, &#39;GS1Aztec&#39;, &#39;GS1CompositeBar&#39;, &#39;GS1MicroPdf417&#39; |  | [optional]
 **storage** | **string**| The storage name | [optional]
 **folder** | **string**| The image folder. | [optional]

#### BarcodeApi.putBarcodeRecognizeFromBody return type

[**BarcodeResponseList**](models.md#BarcodeResponseList)

---

### putGenerateMultiple

Generate image with multiple barcodes and put new file on server

```ts
putGenerateMultiple(name: string, generatorParamsList: GeneratorParamsList): ResultImageInfo;
```

#### BarcodeApi.putGenerateMultiple parameters

Name | Type | Description  | Notes
---- | ---- | ------------ | -----
 **name** | **string**| New filename |
 **generatorParamsList** | [**GeneratorParamsList**](models.md#GeneratorParamsList)| List of barcodes |
 **format** | **string**| Format of file | [optional] [default to 'png']
 **folder** | **string**| Folder to place file to | [optional]
 **storage** | **string**| The storage name | [optional]

#### BarcodeApi.putGenerateMultiple return type

[**ResultImageInfo**](models.md#ResultImageInfo)

---

## class FileApi

### copyFile

Copy file

```ts
copyFile(srcPath: string, destPath: string): void;
```

#### FileApi.copyFile parameters

Name | Type | Description  | Notes
---- | ---- | ------------ | -----
 **srcPath** | **string**| Source file path e.g. &#39;/folder/file.ext&#39; |
 **destPath** | **string**| Destination file path |
 **srcStorageName** | **string**| Source storage name | [optional]
 **destStorageName** | **string**| Destination storage name | [optional]
 **versionId** | **string**| File version ID to copy | [optional]
---

### deleteFile

Delete file

```ts
deleteFile(path: string): void;
```

#### FileApi.deleteFile parameters

Name | Type | Description  | Notes
---- | ---- | ------------ | -----
 **path** | **string**| File path e.g. &#39;/folder/file.ext&#39; |
 **storageName** | **string**| Storage name | [optional]
 **versionId** | **string**| File version ID to delete | [optional]
---

### downloadFile

Download file

```ts
downloadFile(path: string): Buffer;
```

#### FileApi.downloadFile parameters

Name | Type | Description  | Notes
---- | ---- | ------------ | -----
 **path** | **string**| File path e.g. &#39;/folder/file.ext&#39; |
 **storageName** | **string**| Storage name | [optional]
 **versionId** | **string**| File version ID to download | [optional]

#### FileApi.downloadFile return type

Buffer

---

### moveFile

Move file

```ts
moveFile(srcPath: string, destPath: string): void;
```

#### FileApi.moveFile parameters

Name | Type | Description  | Notes
---- | ---- | ------------ | -----
 **srcPath** | **string**| Source file path e.g. &#39;/src.ext&#39; |
 **destPath** | **string**| Destination file path e.g. &#39;/dest.ext&#39; |
 **srcStorageName** | **string**| Source storage name | [optional]
 **destStorageName** | **string**| Destination storage name | [optional]
 **versionId** | **string**| File version ID to move | [optional]
---

### uploadFile

Upload file

```ts
uploadFile(path: string, file: Buffer): FilesUploadResult;
```

#### FileApi.uploadFile parameters

Name | Type | Description  | Notes
---- | ---- | ------------ | -----
 **path** | **string**| Path where to upload including filename and extension e.g. /file.ext or /Folder 1/file.ext  If the content is multipart and path does not contains the file name it tries to get them from filename parameter  from Content-Disposition header. |
 **file** | **Buffer**| File to upload |
 **storageName** | **string**| Storage name | [optional]

#### FileApi.uploadFile return type

[**FilesUploadResult**](models.md#FilesUploadResult)

---

## class FolderApi

### copyFolder

Copy folder

```ts
copyFolder(srcPath: string, destPath: string): void;
```

#### FolderApi.copyFolder parameters

Name | Type | Description  | Notes
---- | ---- | ------------ | -----
 **srcPath** | **string**| Source folder path e.g. &#39;/src&#39; |
 **destPath** | **string**| Destination folder path e.g. &#39;/dst&#39; |
 **srcStorageName** | **string**| Source storage name | [optional]
 **destStorageName** | **string**| Destination storage name | [optional]
---

### createFolder

Create the folder

```ts
createFolder(path: string): void;
```

#### FolderApi.createFolder parameters

Name | Type | Description  | Notes
---- | ---- | ------------ | -----
 **path** | **string**| Folder path to create e.g. &#39;folder_1/folder_2/&#39; |
 **storageName** | **string**| Storage name | [optional]
---

### deleteFolder

Delete folder

```ts
deleteFolder(path: string): void;
```

#### FolderApi.deleteFolder parameters

Name | Type | Description  | Notes
---- | ---- | ------------ | -----
 **path** | **string**| Folder path e.g. &#39;/folder&#39; |
 **storageName** | **string**| Storage name | [optional]
 **recursive** | **boolean**| Enable to delete folders, subfolders and files | [optional] [default to 'false']
---

### getFilesList

Get all files and folders within a folder

```ts
getFilesList(path: string): FilesList;
```

#### FolderApi.getFilesList parameters

Name | Type | Description  | Notes
---- | ---- | ------------ | -----
 **path** | **string**| Folder path e.g. &#39;/folder&#39; |
 **storageName** | **string**| Storage name | [optional]

#### FolderApi.getFilesList return type

[**FilesList**](models.md#FilesList)

---

### moveFolder

Move folder

```ts
moveFolder(srcPath: string, destPath: string): void;
```

#### FolderApi.moveFolder parameters

Name | Type | Description  | Notes
---- | ---- | ------------ | -----
 **srcPath** | **string**| Folder path to move e.g. &#39;/folder&#39; |
 **destPath** | **string**| Destination folder path to move to e.g &#39;/dst&#39; |
 **srcStorageName** | **string**| Source storage name | [optional]
 **destStorageName** | **string**| Destination storage name | [optional]
---

## class StorageApi

### getDiscUsage

Get disc usage

```ts
getDiscUsage(): DiscUsage;
```

#### StorageApi.getDiscUsage parameters

Name | Type | Description  | Notes
---- | ---- | ------------ | -----
 **storageName** | **string**| Storage name | [optional]

#### StorageApi.getDiscUsage return type

[**DiscUsage**](models.md#DiscUsage)

---

### getFileVersions

Get file versions

```ts
getFileVersions(path: string): FileVersions;
```

#### StorageApi.getFileVersions parameters

Name | Type | Description  | Notes
---- | ---- | ------------ | -----
 **path** | **string**| File path e.g. &#39;/file.ext&#39; |
 **storageName** | **string**| Storage name | [optional]

#### StorageApi.getFileVersions return type

[**FileVersions**](models.md#FileVersions)

---

### objectExists

Check if file or folder exists

```ts
objectExists(path: string): ObjectExist;
```

#### StorageApi.objectExists parameters

Name | Type | Description  | Notes
---- | ---- | ------------ | -----
 **path** | **string**| File or folder path e.g. &#39;/file.ext&#39; or &#39;/folder&#39; |
 **storageName** | **string**| Storage name | [optional]
 **versionId** | **string**| File version ID | [optional]

#### StorageApi.objectExists return type

[**ObjectExist**](models.md#ObjectExist)

---

### storageExists

Check if storage exists

```ts
storageExists(storageName: string): StorageExist;
```

#### StorageApi.storageExists parameters

Name | Type | Description  | Notes
---- | ---- | ------------ | -----
 **storageName** | **string**| Storage name |

#### StorageApi.storageExists return type

[**StorageExist**](models.md#StorageExist)

---

