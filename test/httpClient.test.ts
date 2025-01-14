import fs from 'fs';
import assert from 'assert';

import { HttpClient } from '../src/httpClient';
import { Multipart, FormFile } from '../src/multipart';

describe('httpClient tests', () => {
    jest.setTimeout(60000);

    const client = new HttpClient();

    it('should return response', async () => {
        const response = await client.requestAsync({
            uri: 'https://docs.aspose.cloud/barcode/',
        });
        assert.ok(response);
    });

    it('should return error', async () => {
        await assert.rejects(
            async () => {
                await client.requestAsync({
                    uri: 'https://www.aspose.cloud/404',
                    headers: { 'User-Agent': 'Googlebot/2.1 (+http://www.google.com/bot.html)' },
                });
            },
            (rejected: any) => {
                assert.ok(rejected.error);
                const response = rejected.response;
                assert.strictEqual(response.statusCode, 404);
                assert.strictEqual(response.statusMessage, 'Not Found');
                return true;
            }
        );
    });

    it('should fail with error', async () => {
        await assert.rejects(
            async () => {
                await client.requestAsync({
                    uri: 'https://unknown',
                });
            },
            (rejected: any) => {
                assert.ok(rejected.error);
                assert.ok(rejected.error.code);
                assert.equal(rejected.response, null);
                return true;
            }
        );
    });

    it('should send file as multipart form', async () => {
        const token = process.env['TEST_CONFIGURATION_ACCESS_TOKEN'];
        assert.ok(token, "The required env variable 'TEST_CONFIGURATION_ACCESS_TOKEN' is missing");

        const authHeader = { Authorization: `Bearer ${token}` };
        const multipartForm = new Multipart(
            [['decodeTypes', 'QR']],
            [new FormFile('imageFile', 'QR.png', fs.readFileSync('./testdata/QR_and_Code128.png'))]
        );

        const response = await client.requestAsync({
            uri: 'https://api.aspose.cloud/v3.0/barcode/scan',
            method: 'POST',
            headers: { ...authHeader, ...multipartForm.headers },
            body: multipartForm.body,
        });
        assert.ok(response);
    });
});
