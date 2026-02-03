import { ApiErrorResponse } from './models';

export interface StringKeyWithStringValue {
    [key: string]: string;
}

export interface HttpOptions {
    uri: string;
    body?: any;
    encoding?: BufferEncoding | null;
    form?: StringKeyWithStringValue;
    headers?: StringKeyWithStringValue;
    json?: boolean;
    method?: string;
    qs?: StringKeyWithStringValue;
}

export interface HttpResponse {
    statusCode: number;
    statusMessage: string;
    headers: NodeJS.Dict<string | string[]>;
    body: any;
}

export interface HttpResult {
    response: HttpResponse;
    body: any;
}

export interface HttpRejectType {
    response: HttpResponse | null;
    errorResponse: ApiErrorResponse | null;
    error: Error;
}

interface FetchHeaders {
    forEach(callback: (value: string, key: string) => void): void;
}

interface FetchResponse {
    status: number;
    statusText: string;
    headers: FetchHeaders;
    ok: boolean;
    arrayBuffer(): Promise<ArrayBuffer>;
}

interface FetchRequestInit {
    method?: string;
    headers?: StringKeyWithStringValue;
    body?: any;
}

type Fetcher = (input: string | URL, init?: FetchRequestInit) => Promise<FetchResponse>;

export class HttpClient {
    public requestAsync(options: HttpOptions): Promise<HttpResult> {
        const url: URL = options.qs
            ? new URL(`?${new URLSearchParams(options.qs).toString()}`, options.uri)
            : new URL(options.uri);

        const requestBody = this.buildRequestBody(options);

        const responseEncoding: BufferEncoding | null = options.encoding === null ? null : options.encoding || 'utf-8';

        const requestOptions: FetchRequestInit = {
            method: options.method || 'GET',
            headers: options.headers,
        };

        if (requestBody) {
            requestOptions.body = requestBody;
        }

        return this.doFetchRequest(url, requestOptions, responseEncoding);
    }

    private buildRequestBody(options: HttpOptions) {
        let requestBody = options.body;
        if (options.form) {
            // Override requestBody for form with form content
            requestBody = new URLSearchParams(options.form).toString();
            options.headers = Object.assign(
                {
                    'Content-Type': 'application/x-www-form-urlencoded',
                },
                options.headers
            );
        }
        if (options.json) {
            // Override requestBody with JSON value
            requestBody = JSON.stringify(options.body);
            options.headers = Object.assign(
                {
                    'Content-Type': 'application/json',
                },
                options.headers
            );
        }
        return requestBody;
    }

    private async doFetchRequest(
        url: URL,
        requestOptions: FetchRequestInit,
        responseEncoding: BufferEncoding | null
    ): Promise<HttpResult> {
        const fetcher = this.getFetch();
        let response: FetchResponse;
        try {
            response = await fetcher(url.toString(), requestOptions);
        } catch (error) {
            return Promise.reject({
                response: null,
                error: this.normalizeFetchError(error),
                errorResponse: null,
            });
        }

        const respBody = await this.readResponseBody(response, responseEncoding);
        const responseHeaders = this.toHeaderDict(response.headers);

        const httpResponse: HttpResponse = {
            statusCode: response.status,
            statusMessage: response.statusText,
            headers: responseHeaders,
            body: respBody,
        };

        if (response.ok) {
            return {
                response: httpResponse,
                body: respBody,
            };
        }

        const rejectObject: HttpRejectType = {
            response: httpResponse,
            error: new Error(`Error on '${url}': ${response.status} ${response.statusText}`),
            errorResponse: null,
        };
        let errorResponse = null;
        try {
            errorResponse = JSON.parse(respBody.toString()) as ApiErrorResponse;
        } catch (parseError) {}

        if (errorResponse) {
            rejectObject.errorResponse = errorResponse;
        } else {
            rejectObject.error.message += `. ${respBody}`;
        }

        return Promise.reject(rejectObject);
    }

    private async readResponseBody(
        response: FetchResponse,
        responseEncoding: BufferEncoding | null
    ): Promise<string | Buffer> {
        const arrayBuffer = await response.arrayBuffer();
        const buffer = Buffer.from(arrayBuffer);

        if (responseEncoding === null) {
            return buffer;
        }

        return buffer.toString(responseEncoding);
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
