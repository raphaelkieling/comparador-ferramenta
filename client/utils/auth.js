const tokenKey = 'comp-token-request';

export function setToken(token) {
    localStorage.setItem(tokenKey, token)
}

export function getToken() {
    return localStorage.getItem(tokenKey);
}
