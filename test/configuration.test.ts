import assert from 'assert';

import { Configuration } from '../src';
import { LoadConfigurationFromFile } from './LoadConfigurationFromFile';

describe('LoadConfigurationFromFile', () => {
    it('should return Configuration', () => {
        const config: Configuration = LoadConfigurationFromFile('./test/configuration.example.json');

        assert.strictEqual(config.appSID, 'App SID from https://dashboard.aspose.cloud/#/apps');
        assert.strictEqual(config.appKey, 'App Key from https://dashboard.aspose.cloud/#/apps');
        assert.strictEqual(config.baseUrl, 'https://api.aspose.cloud');
    });
});
