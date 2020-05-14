import 'mocha';
import {Configuration} from "../configuration";
import {LoadConfigurationFromFile} from "./test-utils";

const assert = require('assert');

describe('LoadConfigurationFromFile', () => {
    it('should return Configuration', () => {

        const config: Configuration = LoadConfigurationFromFile('./test/configuration.json.template');

        assert.equal(config.baseUrl, "http://localhost");
    });
});
