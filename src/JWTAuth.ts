import { Configuration } from './Configuration';
import { Authentication } from './Authentication';
import { ApiErrorResponse } from './models';

type StringMap = Record<string, string>;

interface FetchHeaders {
    forEach(callback: (value: string, key: string) => void): void;
}

interface FetchResponse {
    status: number;
    statusText: string;
    headers: FetchHeaders;
    ok: boolean;
    text(): Promise<string>;
}

type Fetcher = (
    input: string | URL,
    init?: { method?: string; headers?: StringMap; body?: any }
) => Promise<FetchResponse>;

type AuthResponse = {
    statusCode: number;
    statusMessage: string;
    headers: NodeJS.Dict<string | string[]>;
    body: any;
};

type AuthRejectType = {
    response: AuthResponse | null;
    errorResponse: ApiErrorResponse | null;
    error: Error;
};

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
    public async applyToRequestAsync(requestOptions: {
        headers?: Record<string, string>;
        qs?: Record<string, string>;
    }): Promise<void> {
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
        const fetcher = this.getFetch();
        const requestBody = new URLSearchParams({
            grant_type: 'client_credentials',
            client_id: this._configuration.clientId,
            client_secret: this._configuration.clientSecret,
        }).toString();
        let response: FetchResponse;
        try {
            response = await fetcher(this._configuration.tokenUrl, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/x-www-form-urlencoded',
                },
                body: requestBody,
            });
        } catch (error) {
            throw {
                response: null,
                error: this.normalizeFetchError(error),
                errorResponse: null,
            } as AuthRejectType;
        }

        const responseBody = await response.text();
        const responseInfo: AuthResponse = {
            statusCode: response.status,
            statusMessage: response.statusText,
            headers: this.toHeaderDict(response.headers),
            body: responseBody,
        };

        if (!response.ok) {
            const rejectObject: AuthRejectType = {
                response: responseInfo,
                error: new Error(
                    `Error on '${this._configuration.tokenUrl}': ${response.status} ${response.statusText}`
                ),
                errorResponse: null,
            };
            let errorResponse = null;
            try {
                errorResponse = JSON.parse(responseBody) as ApiErrorResponse;
            } catch (parseError) {}

            if (errorResponse) {
                rejectObject.errorResponse = errorResponse;
            } else {
                rejectObject.error.message += `. ${responseBody}`;
            }
            throw rejectObject;
        }

        const parsed = JSON.parse(responseBody);
        return parsed.access_token;
    }

    private toHeaderDict(headers: FetchHeaders): NodeJS.Dict<string | string[]> {
        const normalizedHeaders: NodeJS.Dict<string | string[]> = {};

        headers.forEach((value, key) => {
            const existing = normalizedHeaders[key];
            if (existing === undefined) {
                normalizedHeaders[key] = value;
                return;
            }

            if (Array.isArray(existing)) {
                existing.push(value);
                normalizedHeaders[key] = existing;
                return;
            }

            normalizedHeaders[key] = [existing, value];
        });

        return normalizedHeaders;
    }

    private getFetch(): Fetcher {
        const fetcher = (globalThis as { fetch?: Fetcher }).fetch;
        if (!fetcher) {
            throw new Error('Global fetch API is not available. Please use Node.js 18+.');
        }

        return fetcher;
    }

    private normalizeFetchError(error: unknown): Error {
        if (error instanceof Error) {
            const mutableError = error as Error & { code?: string; cause?: unknown; name: string };
            let normalizedCode = mutableError.code;

            if (!normalizedCode) {
                const cause = mutableError.cause;
                if (cause && typeof cause === 'object' && 'code' in (cause as { code?: string })) {
                    const code = (cause as { code?: string }).code;
                    if (code) {
                        normalizedCode = String(code);
                    }
                }
            }

            if (!normalizedCode) {
                normalizedCode = mutableError.name || 'FETCH_ERROR';
            }

            try {
                if (!mutableError.code) {
                    mutableError.code = normalizedCode;
                }
            } catch (assignError) {}

            if (mutableError.code) {
                return mutableError;
            }

            const wrapped = new Error(mutableError.message);
            wrapped.name = mutableError.name;
            (wrapped as { code?: string }).code = normalizedCode;
            return wrapped;
        }

        const wrapped = new Error(String(error));
        (wrapped as { code?: string }).code = 'FETCH_ERROR';
        return wrapped;
    }
}
