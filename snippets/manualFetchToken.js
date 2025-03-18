const axios = require('axios');
const qs = require('qs');

async function main() {
    const clientId = 'Client Id from https://dashboard.aspose.cloud/applications';
    const clientSecret = 'Client Secret from https://dashboard.aspose.cloud/applications';

    // Check the client_id is changed to not break GitHub CI pipeline
    if (clientId.startsWith('Client Id')) {
        console.log('clientId not configured. Skip this snippet test');
        return;
    }

    const client = axios.create({
        baseURL: 'https://id.aspose.cloud/',
        headers: {
            'Content-Type': 'application/x-www-form-urlencoded',
        },
    });

    const payload = qs.stringify({
        grant_type: 'client_credentials',
        client_id: clientId,
        client_secret: clientSecret,
    });

    try {
        const response = await client.post('connect/token', payload);
        console.log('Token received successfully');
        //Uncomment next line to view token
        //console.log(response.data.access_token);
    } catch (error) {
        if (error.response) {
            console.error(`Request error:`);
            console.error(error.response.data);
        } else {
            console.error(`An unexpected error occurred: ${error.message}`);
        }
    }
}

main();
