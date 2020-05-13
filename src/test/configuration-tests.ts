import 'mocha';
import {Configuration} from "../configuration";
import {LoadConfigurationFromFile} from "./test-config";

const assert = require('assert');

describe('LoadConfigurationFromFile', () => {
    it('should return Configuration', () => {
        const config: Configuration = LoadConfigurationFromFile('./test/configuration.json');
        assert.equal(config.baseUrl, "https://api-qa.aspose.cloud");
    });
});
