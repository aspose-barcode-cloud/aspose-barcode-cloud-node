import assert from 'assert';

import * as Barcode from '../src/api';
import { HttpRejectType } from '../src/httpClient';
import { LoadTestConfiguration } from './helpers';

describe('Error response tests', () => {
    jest.setTimeout(60000);

    const api = new Barcode.GenerateApi(LoadTestConfiguration());

    it('should throw  response message', async () => {
        const request = new Barcode.BarcodeGenerateBarcodeTypeGetRequest(Barcode.EncodeBarcodeType.Qr, '');

        try {
            await api.barcodeGenerateBarcodeTypeGet(request);
            assert.fail('Expected HttpRejectType was not thrown');
        } catch (err) {
            assert.ok(err);
            var typedError = err as HttpRejectType;
            assert.ok(typedError);
            assert.ok(typedError.errorResponse?.error);
            assert.strictEqual(
                typedError.errorResponse?.error?.message,
                "1. Field name: 'Data'. Errors: The Data field is required."
            );
            return true;
        }
    });
});
