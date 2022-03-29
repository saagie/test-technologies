const axios = require('axios');
const axiosHttp = require('axios/lib/adapters/http');

const client = axios.create({
    adapter: axiosHttp,
});

exports.checkConnection = async ({ connection }) => {
    console.log('check connection for user', connection.username);
    const url = `${connection.url}/api/demo/start`;
    const requestData = {
        username: connection.username,
        password: connection.password
    };
    console.log('Requesting POST at', url, requestData);
    let response;
    try {
        response = await client.post(url, requestData);
    } catch (e) {
        console.log('HTTP error:', e.response?.status, e.response?.statusText, e.response?.data);
        return false;
    }
    console.log('Response:', response.data);
    return true;
};
