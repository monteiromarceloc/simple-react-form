const API_URL = 'https://61e036950f3bdb0017934eb0.mockapi.io/api/valid-passwords/results';

export const sendData = async (payload) => {
    const requestOptions = {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(payload)
    };
    const data = await fetch(API_URL, requestOptions)
    return data.status
}
