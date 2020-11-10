import assert from 'assert';

import { Configuration } from '../src';
import { LoadConfigurationFromEnv, LoadConfigurationFromFile, LoadTestConfiguration } from './helpers';

describe('LoadConfigurationFromFile', () => {
    it('should return Configuration', () => {
        const config: Configuration = LoadConfigurationFromFile('./test/configuration.example.json');

        assert.strictEqual(config.clientId, 'Client Id from https://dashboard.aspose.cloud/applications');
        assert.strictEqual(config.clientSecret, 'Client Secret from https://dashboard.aspose.cloud/applications');
        assert.strictEqual(config.baseUrl, 'https://api.aspose.cloud');
    });
});

describe('LoadConfigurationFromEnv', () => {
    it('should return Configuration', () => {
        const config = LoadConfigurationFromEnv();

        assert.ok(config.hasOwnProperty('clientId'));
        assert.ok(config.hasOwnProperty('clientSecret'));
        assert.ok(config.hasOwnProperty('baseUrl'));
    });
});

describe('LoadTestConfiguration', () => {
    it('should load something', () => {
        const config = LoadTestConfiguration();

        assert.ok(config.hasOwnProperty('clientId'));
        assert.ok(config.hasOwnProperty('clientSecret'));
        assert.ok(config.hasOwnProperty('baseUrl'));
    });
});
