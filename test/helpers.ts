import fs from 'fs';

import { Configuration } from '../src';

export function LoadConfigurationFromFile(filename: string): Configuration {
    const text: string = fs.readFileSync(filename, 'utf-8');
    const json = JSON.parse(text);

    return new Configuration(json.clientId, json.clientSecret, json.baseUrl, json.accessToken);
}

export function LoadConfigurationFromEnv(prefix?: string): Configuration {
    if (!prefix) {
        prefix = 'TEST_CONFIGURATION_';
    }

    const clientId = process.env[prefix + 'CLIENT_ID'];
    const clientSecret = process.env[prefix + 'CLIENT_SECRET'];
    const baseUrl = process.env[prefix + 'BASE_URL'];
    const accessToken = process.env[prefix + 'ACCESS_TOKEN'];

    return new Configuration(clientId!, clientSecret!, baseUrl, accessToken);
}

export function LoadTestConfiguration(): Configuration {
    const configFile = './test/configuration.json';

    if (fs.existsSync(configFile)) {
        return LoadConfigurationFromFile(configFile);
    }

    return LoadConfigurationFromEnv();
}
