import { JWTAuth } from './JWTAuth';
import { Authentication } from './Authentication';

export enum ApiVersion {
    v4 = 'v4.0',
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

    readonly version: ApiVersion = ApiVersion.v4;
    readonly accessToken: string;
    readonly tokenUrl: string;

    constructor(clientId: string, clientSecret: string, baseUrl?: string, accessToken?: string, tokenUrl?: string) {
        this.clientId = clientId;
        this.clientSecret = clientSecret;

        if (baseUrl) {
            this.baseUrl = baseUrl;
        } else {
            this.baseUrl = 'https://api.aspose.cloud';
        }

        this.tokenUrl = tokenUrl ?? 'https://id.aspose.cloud/connect/token';

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
