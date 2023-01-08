import { getUserData } from "../utils.js";

const host = 'https://parseapi.back4app.com';
const appId = 'fKI0J7nzgCo7WUi5in6zOApnK0tqr3fRMWCvOnUO';
const jsId = '4dJCyhdUE83T3kjcXzQgV2N8KgPBH9IXV1u1wv9v';

export async function requester(method, url, data) {
    const options = {
        method,
        headers: {
            'X-Parse-Application-Id': appId,
            'X-Parse-Javascript-Key': jsId
        }
    }

    if (data !== undefined) {
        options.headers['Content-Type'] = 'application/json';
        options.body = JSON.stringify(data);
    }

    const user = getUserData();

    if (user) {
        options.headers['X-Parse-Session-Token'] = user.sessionToken;
    }

    try {
        const response = await fetch(host + url, options);

        if (response.status === 204) {
            return response;
        }

        const result = await response.json();

        if (!response.ok) {
            throw new Error(result.error || result.message);
        }

        return result;
    } catch(err) {
        alert(err.message);
        throw err;
    }
}

const get = requester.bind(null, 'get');
const post = requester.bind(null, 'post');
const put = requester.bind(null, 'put');
const del = requester.bind(null, 'delete');

export {
    get,
    post,
    put,
    del as delete
}