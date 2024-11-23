const axios = require('axios');
const qs = require('qs');

async function main() {
    const clientId = "<Your-Client-Id>";
    const clientSecret = "<Your-Client-Secret>";

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
        console.log(response.data);
    } catch (error) {
        if (error.response) {
            console.error(`Request error: ${error.response.data}`);
        } else {
            console.error(`An unexpected error occurred: ${error.message}`);
        }
    }
}

main();
