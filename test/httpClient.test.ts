import assert from 'assert';

import { HttpClient } from '../src/httpClient';

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
                    uri: 'https://www.aspose.cloud/404/',
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
});
