import { JWTAuth } from './JWTAuth';
import { Authentication } from './Authentication';

export enum ApiVersion {
    v1 = 'v1',
    v2 = 'v1.1',
    v3 = 'v3.0',
}

export class Configuration {
    /**
     * Authentication type.
     */
    public authentication: Authentication;

    /**
     * Client Id.
     */
    public clientId: string;

    /**
     * Client Secret.
     */
    public clientSecret: string;

    /**
     * Base Url.
     */
    public baseUrl: string;

    readonly version: ApiVersion = ApiVersion.v3;
    readonly accessToken: string;

    constructor(clientId: string, clientSecret: string, baseUrl?: string, accessToken?: string) {
        this.clientId = clientId;
        this.clientSecret = clientSecret;
        if (baseUrl) {
            this.baseUrl = baseUrl;
        } else {
            this.baseUrl = 'https://api.aspose.cloud';
        }
        if (accessToken) {
            this.accessToken = accessToken;
        } else {
            this.accessToken = '';
        }

        this.authentication = new JWTAuth(this) as Authentication;
    }

    /**
     * Returns api base url
     */
    public getApiBaseUrl(): string {
        return this.baseUrl + '/' + this.version;
    }
}
