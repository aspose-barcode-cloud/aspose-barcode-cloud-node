import 'mocha';
import * as assert from 'assert';

import {Configuration} from '../configuration';
import {LoadConfigurationFromFile} from './test-utils';


describe('LoadConfigurationFromFile', () => {
    it('should return Configuration', () => {

        const config: Configuration = LoadConfigurationFromFile('./test/configuration.json.template');

        assert.equal(config.baseUrl, "http://localhost");
    });
});
