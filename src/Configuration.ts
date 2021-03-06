﻿/*
* MIT License

* Copyright (c) 2021 Aspose Pty Ltd

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
