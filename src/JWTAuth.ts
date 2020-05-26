import Request from 'request';

import { Configuration } from 'Configuration';
import { Authentication } from 'Authentication';

export class JWTAuth implements Authentication {
    private _accessToken?: string;
    private readonly _configuration: Configuration;

    constructor(configuration: Configuration) {
        this._configuration = configuration;

        if (configuration.accessToken) {
            // Use saved token
            this._accessToken = configuration.accessToken;
        }
    }

    /**
     * Apply authentication settings to header and query params.
     */
    public async applyToRequest(requestOptions: Request.Options): Promise<void> {
        if (this._accessToken == null) {
            await this.requestToken();
        }

        if (requestOptions && requestOptions.headers) {
            requestOptions.headers.Authorization = 'Bearer ' + this._accessToken;
        }

        return Promise.resolve();
    }

    public async applyUnauthorized(): Promise<void> {
        if (this._configuration.appSID && this._configuration.appKey) {
            await this.requestToken();
        } else {
            throw new Error("Required 'appSID' or 'appKey' not specified in configuration.");
        }
    }

    private requestToken(): Promise<void> {
        const requestOptions: Request.Options = {
            method: 'POST',
            json: true,
            uri: this._configuration.baseUrl + '/connect/token',
            form: {
                grant_type: 'client_credentials',
                client_id: this._configuration.appSID,
                client_secret: this._configuration.appKey,
            },
        };

        return new Promise<void>((resolve, reject) => {
            const self = this;
            Request(requestOptions, (error, response) => {
                if (error) {
                    reject(error);
                } else {
                    if (response.statusCode && response.statusCode >= 200 && response.statusCode <= 299) {
                        self._accessToken = response.body.access_token;
                        resolve();
                    } else {
                        reject(response.body);
                    }
                }
            });
        });
    }
}
