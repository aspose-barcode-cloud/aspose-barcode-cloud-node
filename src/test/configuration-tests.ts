import 'mocha';

const assert = require('assert');
const fs = require('fs');


function loadConfig() {
    let rawdata = fs.readFileSync('./test/configuration.json');
    let config = JSON.parse(rawdata);
    return config;
}


describe('Load configuration.json', () => {
    it('should return Configuration', () => {
        let config = loadConfig();
        assert.equal(config.ApiBaseUrl, "https://api-qa.aspose.cloud");
    });
});
