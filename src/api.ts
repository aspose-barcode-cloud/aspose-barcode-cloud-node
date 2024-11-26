import { Configuration } from './Configuration';
import { HttpClient, HttpOptions, HttpResponse, HttpResult } from './httpClient';
import { Multipart, RequestFile, FormParamsType } from './multipart';

import {
    ApiError,
    ApiErrorResponse,
    BarcodeImageFormat,
    BarcodeImageParams,
    BarcodeResponse,
    BarcodeResponseList,
    CodeLocation,
    DecodeBarcodeType,
    EncodeBarcodeType,
    EncodeData,
    EncodeDataType,
    GenerateParams,
    GraphicsUnit,
    RecognitionImageKind,
    RecognitionMode,
    RecognizeBase64Request,
    RegionPoint,
    ScanBase64Request,
} from './models';

import {
    BarcodeGenerateBarcodeTypeGetRequest,
    BarcodeGenerateBodyPostRequest,
    BarcodeGenerateMultipartPostRequest,
    BarcodeRecognizeBodyPostRequest,
    BarcodeRecognizeGetRequest,
    BarcodeRecognizeMultipartPostRequest,
    BarcodeScanBodyPostRequest,
    BarcodeScanGetRequest,
    BarcodeScanMultipartPostRequest,
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

        if (enumsMap[type] && Object.values(enumsMap[type]).includes(data)) {
            return data;
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
    BarcodeImageFormat: BarcodeImageFormat,
    CodeLocation: CodeLocation,
    DecodeBarcodeType: DecodeBarcodeType,
    EncodeBarcodeType: EncodeBarcodeType,
    EncodeDataType: EncodeDataType,
    GraphicsUnit: GraphicsUnit,
    RecognitionImageKind: RecognitionImageKind,
    RecognitionMode: RecognitionMode,
};

let typeMap: { [index: string]: any } = {
    ApiError: ApiError,
    ApiErrorResponse: ApiErrorResponse,
    BarcodeImageParams: BarcodeImageParams,
    BarcodeResponse: BarcodeResponse,
    BarcodeResponseList: BarcodeResponseList,
    EncodeData: EncodeData,
    GenerateParams: GenerateParams,
    RecognizeBase64Request: RecognizeBase64Request,
    RegionPoint: RegionPoint,
    ScanBase64Request: ScanBase64Request,
};

export class GenerateApi {
    protected defaultHeaders: any = {
        'x-aspose-client': 'nodejs sdk',
        'x-aspose-client-version': '24.7.0',
    };
    protected _configuration: Configuration;
    private _client: HttpClient;

    constructor(configuration: Configuration) {
        this._configuration = configuration;
        this._client = new HttpClient();
    }

    /**
     *
     * @summary Generate barcode using GET request with parameters in route and query string.
     * @param request BarcodeGenerateBarcodeTypeGetRequest
     */
    public async barcodeGenerateBarcodeTypeGet(
        request: BarcodeGenerateBarcodeTypeGetRequest
    ): Promise<{ response: HttpResponse; body: Buffer }> {
        const requestPath =
            this._configuration.getApiBaseUrl() +
            '/barcode/generate/{barcodeType}'.replace(
                // eslint-disable-next-line no-useless-concat
                '{' + 'barcodeType' + '}',
                String(request.barcodeType)
            );
        let queryParameters: any = {};
        let headerParams: any = (Object as any).assign({}, this.defaultHeaders);

        // verify required parameter 'request.barcodeType' is not null or undefined
        if (request.barcodeType == null) {
            throw new Error(
                'Required parameter request.barcodeType was null or undefined when calling barcodeGenerateBarcodeTypeGet.'
            );
        }

        // verify required parameter 'request.data' is not null or undefined
        if (request.data == null) {
            throw new Error(
                'Required parameter request.data was null or undefined when calling barcodeGenerateBarcodeTypeGet.'
            );
        }

        if (request.dataType != null) {
            queryParameters['dataType'] = ObjectSerializer.serialize(request.dataType, 'EncodeDataType');
        }

        if (request.data != null) {
            queryParameters['data'] = ObjectSerializer.serialize(request.data, 'string');
        }

        if (request.imageFormat != null) {
            queryParameters['imageFormat'] = ObjectSerializer.serialize(request.imageFormat, 'BarcodeImageFormat');
        }

        if (request.textLocation != null) {
            queryParameters['textLocation'] = ObjectSerializer.serialize(request.textLocation, 'CodeLocation');
        }

        if (request.foregroundColor != null) {
            queryParameters['foregroundColor'] = ObjectSerializer.serialize(request.foregroundColor, 'string');
        }

        if (request.backgroundColor != null) {
            queryParameters['backgroundColor'] = ObjectSerializer.serialize(request.backgroundColor, 'string');
        }

        if (request.units != null) {
            queryParameters['units'] = ObjectSerializer.serialize(request.units, 'GraphicsUnit');
        }

        if (request.resolution != null) {
            queryParameters['resolution'] = ObjectSerializer.serialize(request.resolution, 'number');
        }

        if (request.imageHeight != null) {
            queryParameters['imageHeight'] = ObjectSerializer.serialize(request.imageHeight, 'number');
        }

        if (request.imageWidth != null) {
            queryParameters['imageWidth'] = ObjectSerializer.serialize(request.imageWidth, 'number');
        }

        if (request.rotationAngle != null) {
            queryParameters['rotationAngle'] = ObjectSerializer.serialize(request.rotationAngle, 'number');
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
     * @summary Generate barcode using POST request with parameters in body in json or xml format.
     * @param request BarcodeGenerateBodyPostRequest
     */
    public async barcodeGenerateBodyPost(
        request: BarcodeGenerateBodyPostRequest
    ): Promise<{ response: HttpResponse; body: Buffer }> {
        const requestPath = this._configuration.getApiBaseUrl() + '/barcode/generate-body';
        let queryParameters: any = {};
        let headerParams: any = (Object as any).assign({}, this.defaultHeaders);

        // verify required parameter 'request.generateParams' is not null or undefined
        if (request.generateParams == null) {
            throw new Error(
                'Required parameter request.generateParams was null or undefined when calling barcodeGenerateBodyPost.'
            );
        }

        const requestOptions: HttpOptions = {
            method: 'POST',
            qs: queryParameters,
            headers: headerParams,
            uri: requestPath,
            body: ObjectSerializer.serialize(request.generateParams, 'GenerateParams'),
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
     * @summary Generate barcode using POST request with parameters in multipart form.
     * @param request BarcodeGenerateMultipartPostRequest
     */
    public async barcodeGenerateMultipartPost(
        request: BarcodeGenerateMultipartPostRequest
    ): Promise<{ response: HttpResponse; body: Buffer }> {
        const requestPath = this._configuration.getApiBaseUrl() + '/barcode/generate-multipart';
        let queryParameters: any = {};
        let headerParams: any = (Object as any).assign({}, this.defaultHeaders);
        const formParams: FormParamsType = [];

        // verify required parameter 'request.barcodeType' is not null or undefined
        if (request.barcodeType == null) {
            throw new Error(
                'Required parameter request.barcodeType was null or undefined when calling barcodeGenerateMultipartPost.'
            );
        }

        // verify required parameter 'request.data' is not null or undefined
        if (request.data == null) {
            throw new Error(
                'Required parameter request.data was null or undefined when calling barcodeGenerateMultipartPost.'
            );
        }

        if (request.barcodeType != null) {
            formParams.push(['barcodeType', ObjectSerializer.serialize(request.barcodeType, 'EncodeBarcodeType')]);
        }
        if (request.dataType != null) {
            formParams.push(['dataType', ObjectSerializer.serialize(request.dataType, 'EncodeDataType')]);
        }
        if (request.data != null) {
            formParams.push(['data', ObjectSerializer.serialize(request.data, 'string')]);
        }
        if (request.imageFormat != null) {
            formParams.push(['imageFormat', ObjectSerializer.serialize(request.imageFormat, 'BarcodeImageFormat')]);
        }
        if (request.textLocation != null) {
            formParams.push(['textLocation', ObjectSerializer.serialize(request.textLocation, 'CodeLocation')]);
        }
        if (request.foregroundColor != null) {
            formParams.push(['foregroundColor', ObjectSerializer.serialize(request.foregroundColor, 'string')]);
        }
        if (request.backgroundColor != null) {
            formParams.push(['backgroundColor', ObjectSerializer.serialize(request.backgroundColor, 'string')]);
        }
        if (request.units != null) {
            formParams.push(['units', ObjectSerializer.serialize(request.units, 'GraphicsUnit')]);
        }
        if (request.resolution != null) {
            formParams.push(['resolution', ObjectSerializer.serialize(request.resolution, 'number')]);
        }
        if (request.imageHeight != null) {
            formParams.push(['imageHeight', ObjectSerializer.serialize(request.imageHeight, 'number')]);
        }
        if (request.imageWidth != null) {
            formParams.push(['imageWidth', ObjectSerializer.serialize(request.imageWidth, 'number')]);
        }
        if (request.rotationAngle != null) {
            formParams.push(['rotationAngle', ObjectSerializer.serialize(request.rotationAngle, 'number')]);
        }
        const requestOptions: HttpOptions = {
            method: 'POST',
            qs: queryParameters,
            headers: headerParams,
            uri: requestPath,
            encoding: null,
        };

        let fileArray = new Array<RequestFile>();

        const multipartForm = new Multipart(formParams, fileArray);
        requestOptions.body = multipartForm.body;
        requestOptions.headers = { ...requestOptions.headers, ...multipartForm.headers };

        await this._configuration.authentication.applyToRequestAsync(requestOptions);

        const result: HttpResult = await this._client.requestAsync(requestOptions);

        return {
            response: result.response,
            body: ObjectSerializer.deserialize(result.body, 'Buffer'),
        };
    }
}

export class RecognizeApi {
    protected defaultHeaders: any = {
        'x-aspose-client': 'nodejs sdk',
        'x-aspose-client-version': '24.7.0',
    };
    protected _configuration: Configuration;
    private _client: HttpClient;

    constructor(configuration: Configuration) {
        this._configuration = configuration;
        this._client = new HttpClient();
    }

    /**
     *
     * @summary Recognize barcode from file in request body using POST requests with parameters in body in json or xml format.
     * @param request BarcodeRecognizeBodyPostRequest
     */
    public async barcodeRecognizeBodyPost(
        request: BarcodeRecognizeBodyPostRequest
    ): Promise<{ response: HttpResponse; body: BarcodeResponseList }> {
        const requestPath = this._configuration.getApiBaseUrl() + '/barcode/recognize-body';
        let queryParameters: any = {};
        let headerParams: any = (Object as any).assign({}, this.defaultHeaders);

        // verify required parameter 'request.recognizeBase64Request' is not null or undefined
        if (request.recognizeBase64Request == null) {
            throw new Error(
                'Required parameter request.recognizeBase64Request was null or undefined when calling barcodeRecognizeBodyPost.'
            );
        }

        const requestOptions: HttpOptions = {
            method: 'POST',
            qs: queryParameters,
            headers: headerParams,
            uri: requestPath,
            body: ObjectSerializer.serialize(request.recognizeBase64Request, 'RecognizeBase64Request'),
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
     * @summary Recognize barcode from file on server using GET requests with parameters in route and query string.
     * @param request BarcodeRecognizeGetRequest
     */
    public async barcodeRecognizeGet(
        request: BarcodeRecognizeGetRequest
    ): Promise<{ response: HttpResponse; body: BarcodeResponseList }> {
        const requestPath = this._configuration.getApiBaseUrl() + '/barcode/recognize';
        let queryParameters: any = {};
        let headerParams: any = (Object as any).assign({}, this.defaultHeaders);

        // verify required parameter 'request.barcodeType' is not null or undefined
        if (request.barcodeType == null) {
            throw new Error(
                'Required parameter request.barcodeType was null or undefined when calling barcodeRecognizeGet.'
            );
        }

        // verify required parameter 'request.fileUrl' is not null or undefined
        if (request.fileUrl == null) {
            throw new Error(
                'Required parameter request.fileUrl was null or undefined when calling barcodeRecognizeGet.'
            );
        }

        if (request.barcodeType != null) {
            queryParameters['barcodeType'] = ObjectSerializer.serialize(request.barcodeType, 'DecodeBarcodeType');
        }

        if (request.fileUrl != null) {
            queryParameters['fileUrl'] = ObjectSerializer.serialize(request.fileUrl, 'string');
        }

        if (request.recognitionMode != null) {
            queryParameters['recognitionMode'] = ObjectSerializer.serialize(request.recognitionMode, 'RecognitionMode');
        }

        if (request.recognitionImageKind != null) {
            queryParameters['recognitionImageKind'] = ObjectSerializer.serialize(
                request.recognitionImageKind,
                'RecognitionImageKind'
            );
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
     * @summary Recognize barcode from file in request body using POST requests with parameters in multipart form.
     * @param request BarcodeRecognizeMultipartPostRequest
     */
    public async barcodeRecognizeMultipartPost(
        request: BarcodeRecognizeMultipartPostRequest
    ): Promise<{ response: HttpResponse; body: BarcodeResponseList }> {
        const requestPath = this._configuration.getApiBaseUrl() + '/barcode/recognize-multipart';
        let queryParameters: any = {};
        let headerParams: any = (Object as any).assign({}, this.defaultHeaders);
        const formParams: FormParamsType = [];

        // verify required parameter 'request.barcodeType' is not null or undefined
        if (request.barcodeType == null) {
            throw new Error(
                'Required parameter request.barcodeType was null or undefined when calling barcodeRecognizeMultipartPost.'
            );
        }

        // verify required parameter 'request.fileBytes' is not null or undefined
        if (request.fileBytes == null) {
            throw new Error(
                'Required parameter request.fileBytes was null or undefined when calling barcodeRecognizeMultipartPost.'
            );
        }

        if (request.barcodeType != null) {
            formParams.push(['barcodeType', ObjectSerializer.serialize(request.barcodeType, 'DecodeBarcodeType')]);
        }
        if (request.recognitionMode != null) {
            formParams.push([
                'recognitionMode',
                ObjectSerializer.serialize(request.recognitionMode, 'RecognitionMode'),
            ]);
        }
        if (request.recognitionImageKind != null) {
            formParams.push([
                'recognitionImageKind',
                ObjectSerializer.serialize(request.recognitionImageKind, 'RecognitionImageKind'),
            ]);
        }
        const requestOptions: HttpOptions = {
            method: 'POST',
            qs: queryParameters,
            headers: headerParams,
            uri: requestPath,
        };

        let fileArray = new Array<RequestFile>();
        fileArray = request.fileBytes == null ? [] : [new RequestFile('file', '', request.fileBytes)];
        const multipartForm = new Multipart(formParams, fileArray);
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

export class ScanApi {
    protected defaultHeaders: any = {
        'x-aspose-client': 'nodejs sdk',
        'x-aspose-client-version': '24.7.0',
    };
    protected _configuration: Configuration;
    private _client: HttpClient;

    constructor(configuration: Configuration) {
        this._configuration = configuration;
        this._client = new HttpClient();
    }

    /**
     *
     * @summary Scan barcode from file in request body using POST requests with parameter in body in json or xml format.
     * @param request BarcodeScanBodyPostRequest
     */
    public async barcodeScanBodyPost(
        request: BarcodeScanBodyPostRequest
    ): Promise<{ response: HttpResponse; body: BarcodeResponseList }> {
        const requestPath = this._configuration.getApiBaseUrl() + '/barcode/scan-body';
        let queryParameters: any = {};
        let headerParams: any = (Object as any).assign({}, this.defaultHeaders);

        // verify required parameter 'request.scanBase64Request' is not null or undefined
        if (request.scanBase64Request == null) {
            throw new Error(
                'Required parameter request.scanBase64Request was null or undefined when calling barcodeScanBodyPost.'
            );
        }

        const requestOptions: HttpOptions = {
            method: 'POST',
            qs: queryParameters,
            headers: headerParams,
            uri: requestPath,
            body: ObjectSerializer.serialize(request.scanBase64Request, 'ScanBase64Request'),
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
     * @summary Scan barcode from file on server using GET requests with parameter in query string.
     * @param request BarcodeScanGetRequest
     */
    public async barcodeScanGet(
        request: BarcodeScanGetRequest
    ): Promise<{ response: HttpResponse; body: BarcodeResponseList }> {
        const requestPath = this._configuration.getApiBaseUrl() + '/barcode/scan';
        let queryParameters: any = {};
        let headerParams: any = (Object as any).assign({}, this.defaultHeaders);

        // verify required parameter 'request.fileUrl' is not null or undefined
        if (request.fileUrl == null) {
            throw new Error('Required parameter request.fileUrl was null or undefined when calling barcodeScanGet.');
        }

        if (request.fileUrl != null) {
            queryParameters['fileUrl'] = ObjectSerializer.serialize(request.fileUrl, 'string');
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
     * @summary Scan barcode from file in request body using POST requests with parameter in multipart form.
     * @param request BarcodeScanMultipartPostRequest
     */
    public async barcodeScanMultipartPost(
        request: BarcodeScanMultipartPostRequest
    ): Promise<{ response: HttpResponse; body: BarcodeResponseList }> {
        const requestPath = this._configuration.getApiBaseUrl() + '/barcode/scan-multipart';
        let queryParameters: any = {};
        let headerParams: any = (Object as any).assign({}, this.defaultHeaders);
        const formParams: FormParamsType = [];

        // verify required parameter 'request.fileBytes' is not null or undefined
        if (request.fileBytes == null) {
            throw new Error(
                'Required parameter request.fileBytes was null or undefined when calling barcodeScanMultipartPost.'
            );
        }

        const requestOptions: HttpOptions = {
            method: 'POST',
            qs: queryParameters,
            headers: headerParams,
            uri: requestPath,
        };

        let fileArray = new Array<RequestFile>();
        fileArray = request.fileBytes == null ? [] : [new RequestFile('file', '', request.fileBytes)];
        const multipartForm = new Multipart(formParams, fileArray);
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
