import * as api from '../api/api.js';
import { removeUserData, setUserData } from '../utils.js';

const endpoint = {
    register: '/users',
    login: '/login',
    logout: '/logout' 
}

export async function register(email, username, password) {
    const { sessionToken, objectId } = await api.post(endpoint.register, {email, username, password});
    setUserData({ email, username, sessionToken, objectId });
}

export async function login(email, password) {
    const { username, objectId, sessionToken } = await api.post(endpoint.login, {email, password});
    setUserData({email, sessionToken, username, objectId});
}
