import { Configuration } from './Configuration';
import { Authentication } from './Authentication';
import { HttpClient, HttpOptions } from './httpClient';

export class JWTAuth implements Authentication {
    private _accessToken?: string;
    private readonly _configuration: Configuration;
    private _client: HttpClient;

    constructor(configuration: Configuration) {
        this._configuration = configuration;

        if (configuration.accessToken) {
            // Use saved token
            this._accessToken = configuration.accessToken;
        }
        this._client = new HttpClient();
    }

    /**
     * Apply authentication settings to header and query params.
     */
    public async applyToRequest(requestOptions: HttpOptions): Promise<void> {
        if (this._accessToken == null) {
            this._accessToken = await this.requestToken();
        }

        if (requestOptions && requestOptions.headers) {
            requestOptions.headers.Authorization = 'Bearer ' + this._accessToken;
        }

        return Promise.resolve();
    }

    private async requestToken(): Promise<string> {
        if (!this._configuration.clientId || !this._configuration.clientSecret) {
            throw new Error("Required 'clientId' or 'clientSecret' not specified in configuration.");
        }
        const requestOptions: HttpOptions = {
            method: 'POST',
            uri: this._configuration.tokenUrl,
            form: {
                grant_type: 'client_credentials',
                client_id: this._configuration.clientId,
                client_secret: this._configuration.clientSecret,
            },
        };

        const result = await this._client.requestAsync(requestOptions);
        const parsed = JSON.parse(result.body);
        return parsed.access_token;
    }
}
