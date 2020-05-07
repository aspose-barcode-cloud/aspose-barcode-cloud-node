/*
* MIT License

* Copyright (c) 2018 Aspose Pty Ltd

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

import localVarRequest = require('request');
import http = require('http');


export interface Authentication {
    /**
     * Apply authentication settings to header and query params.
     */
    applyToRequest(requestOptions: localVarRequest.Options): void;

    applyUnauthorized(): void;
}

export class OAuth implements Authentication {

    private _accessToken: string;
    private _refreshToken: string;
    private _configuration: Configuration;

    constructor(configuration: Configuration) {
        this._configuration = configuration;
    }

    /**
     * Apply authentication settings to header and query params.
     */
    public async applyToRequest(requestOptions: localVarRequest.Options): Promise<void> {
        if (this._accessToken == null) {
            await this.requestToken();
        }

        if (requestOptions && requestOptions.headers) {
            requestOptions.headers.Authorization = "Bearer " + this._accessToken;
        }

        return Promise.resolve();
    }

    public async applyUnauthorized(): Promise<void> {
        await this.refreshToken();
    }

    private requestToken(): Promise<void> {
        const requestOptions: localVarRequest.Options = {
            method: "POST",
            json: true,
            uri: this._configuration.baseUrl + "/oauth2/token",
            form: {
                grant_type: "client_credentials",
                client_id: this._configuration.appSID,
                client_secret: this._configuration.appKey,
            },
        };

        return new Promise<void>((resolve, reject) => {
            var self = this;
            localVarRequest(requestOptions, (error, response, body) => {
                if (error) {
                    reject(error);
                } else {
                    if (response.statusCode && response.statusCode >= 200 && response.statusCode <= 299) {
                        self._accessToken = response.body.access_token;
                        self._refreshToken = response.body.refresh_token;
                        resolve();
                    } else {
                        reject(response.body);
                    }
                }
            });
        });
    }

    private refreshToken(): Promise<void> {
        const requestOptions: localVarRequest.Options = {
            method: "POST",
            json: true,
            uri: this._configuration.baseUrl + "/oauth2/token",
            form: {
                grant_type: "refresh_token",
                refresh_token: this._refreshToken,
            },
        };

        return new Promise<void>((resolve, reject) => {
            var self = this;
            localVarRequest(requestOptions, (error, response, body) => {
                if (error) {
                    reject(error);
                } else {
                    if (response.statusCode && response.statusCode >= 200 && response.statusCode <= 299) {
                        self._accessToken = response.body.access_token;
                        self._refreshToken = response.body.refresh_token;
                        resolve();
                    } else {
                        reject(response.body);
                    }
                }
            });
        });
    }
}

export enum ApiVersion {
    v1,
    v2,
    v3
}

export class Configuration {

    /**
     * Authentication type.
     */
    public authentication: Authentication;

    /**
     * App SID.
     */
    public appSID: string;

    /**
     * App key.
     */
    public appKey: string;

    /**
     * Base Url.
     */
    public baseUrl: string;

    /**
     * Gets or sets the API version.
     */
    public version: ApiVersion = ApiVersion.v1;

    constructor(appSID: string, appKey: string, baseUrl?: string) {
        this.appSID = appSID;
        this.appKey = appKey;
        if (baseUrl) {
            this.baseUrl = baseUrl;
        } else {
            this.baseUrl = "https://api.aspose.cloud";
        }

        this.version = ApiVersion.v3;

        //TODO: make JWT
        this.authentication = new OAuth(this) as Authentication;
    }

    // static FromFile(filename: string): Configuration
    // {
    // }

    /**
     * Returns api base url
     */
    public getApiBaseUrl(): string {
        return this.baseUrl + "/" + ApiVersion[this.version];
    }
}
