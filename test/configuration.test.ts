import assert from 'assert';

import { Configuration } from '../src';
import { LoadConfigurationFromEnv, LoadConfigurationFromFile, LoadTestConfiguration } from './helpers';

describe('LoadConfigurationFromFile', () => {
    it('should return Configuration', () => {
        const config: Configuration = LoadConfigurationFromFile('./test/configuration.example.json');

        assert.strictEqual(config.appSID, 'App SID from https://dashboard.aspose.cloud/#/apps');
        assert.strictEqual(config.appKey, 'App Key from https://dashboard.aspose.cloud/#/apps');
        assert.strictEqual(config.baseUrl, 'https://api.aspose.cloud');
    });
});

describe('LoadConfigurationFromEnv', () => {
    it('should return Configuration', () => {
        const config = LoadConfigurationFromEnv();

        assert.ok(config.hasOwnProperty('appSID'));
        assert.ok(config.hasOwnProperty('appKey'));
        assert.ok(config.hasOwnProperty('baseUrl'));
    });
});

describe('LoadTestConfiguration', () => {
    it('should load something', () => {
        const config = LoadTestConfiguration();

        assert.ok(config.hasOwnProperty('appSID'));
        assert.ok(config.hasOwnProperty('appKey'));
        assert.ok(config.hasOwnProperty('baseUrl'));
    });
});
