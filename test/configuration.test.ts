import assert from 'assert';

import { Configuration } from '../src/Configuration';
import { LoadConfigurationFromFile } from './LoadConfigurationFromFile';

describe('LoadConfigurationFromFile', () => {
    it('should return Configuration', () => {
        const config: Configuration = LoadConfigurationFromFile('./test/configuration.example.json');

        assert.equal(config.appSID, 'App SID from https://dashboard.aspose.cloud/#/apps');
        assert.equal(config.appKey, 'App Key from https://dashboard.aspose.cloud/#/apps');
        assert.equal(config.baseUrl, 'https://api.aspose.cloud');
    });
});
