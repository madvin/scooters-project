const request = async (method, url, data, options = {}) => {

    if (!method !== 'GET') {
        options.method = method;
    }
    if (data) {
        options = { 
            ...options,
            headers: {
                'Content-Type': 'application/json',
                ...options.headers,
            },
            body: JSON.stringify(data),
            }
        }
    
        const response = await fetch(url, options);
        const resposeContrentType = response.headers