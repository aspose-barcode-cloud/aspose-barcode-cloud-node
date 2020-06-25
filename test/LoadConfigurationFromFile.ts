import fs from 'fs';

import { Configuration } from '../src';

export function LoadConfigurationFromFile(filename: string): Configuration {
    const text: string = fs.readFileSync(filename, 'utf-8');
    const json = JSON.parse(text);

    return new Configuration(json.appSID, json.appKey, json.baseUrl, json.accessToken);
}
