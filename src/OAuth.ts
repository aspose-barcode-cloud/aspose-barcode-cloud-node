import localVarRequest = require('request');

import {Configuration} from "./configuration";
import {Authentication} from "./Authentification";

export class OAuth implements Authentication {

    private _accessToken: string;
    private _refreshToken: string;
    private _configuration: Configuration;

    constructor(configuration: Configuration) {
        this._configuration = configuration;

        if (configuration.accessToken) {
            this._accessToken = configuration.accessToken;
        }
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