import fs = require('fs');

import {Configuration} from "../configuration";

export function LoadConfigurationFromFile(filename: string): Configuration {
    const text: string = fs.readFileSync(filename, 'utf-8');
    const config = JSON.parse(text);

    const result: Configuration = Object.assign(new Configuration(config.appSID, config.appKey, config.baseUrl), config);

    return result;
}