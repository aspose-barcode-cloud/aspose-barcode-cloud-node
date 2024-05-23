import http from 'http';
import https from 'https';

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
    error: Error;
}

export class HttpClient {
    public requestAsync(options: HttpOptions): Promise<HttpResult> {
        const url: URL = options.qs
            ? new URL(`?${new URLSearchParams(options.qs).toString()}`, options.uri)
            : new URL(options.uri);

        const requestBody = this.buildRequestBody(options);

        const requestOptions: http.RequestOptions = {
            method: options.method,
            headers: options.headers,
        };

        const responseEncoding: BufferEncoding | null = options.encoding === null ? null : options.encoding || 'utf-8';

        return this.doHttpRequest(url, requestBody, requestOptions, responseEncoding);
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

    private doHttpRequest(
        url: URL,
        requestBody: any,
        requestOptions: http.RequestOptions,
        responseEncoding: BufferEncoding | null
    ): Promise<HttpResult> {
        return new Promise((resolve, reject: (result: HttpRejectType) => void) => {
            function requestCallback(res: http.IncomingMessage) {
                if (responseEncoding) {
                    // encoding = null for binary responses
                    res.setEncoding(responseEncoding);
                }
                const chunks: any[] | Uint8Array[] = [];

                res.on('data', (chunk) => {
                    chunks.push(chunk);
                });

                res.on('end', () => {
                    const respBody = responseEncoding ? chunks.join('') : Buffer.concat(chunks);

                    const response: HttpResponse = {
                        statusCode: res.statusCode!,
                        statusMessage: res.statusMessage!,
                        headers: res.headers,
                        body: respBody,
                    };

                    if (response.statusCode >= 200 && response.statusCode <= 299) {
                        resolve({
                            response: response,
                            body: respBody,
                        });
                    } else {
                        reject({
                            response: response,
                            error: new Error(`Error on '${url}': ${res.statusCode} ${res.statusMessage}`),
                        });
                    }
                });
            }

            const req =
                url.protocol === 'http:'
                    ? http.request(url, requestOptions, requestCallback)
                    : https.request(url, requestOptions, requestCallback);

            req.on('error', (error) => {
                reject({
                    response: null,
                    error: error,
                });
            });

            if (requestBody) {
                req.write(requestBody);
            }

            req.end();
        });
    }
}
