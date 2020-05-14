import localVarRequest = require('request');

export interface Authentication {
    /**
     * Apply authentication settings to header and query params.
     */
    applyToRequest(requestOptions: localVarRequest.Options): void;

    applyUnauthorized(): void;
}