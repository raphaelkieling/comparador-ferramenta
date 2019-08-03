import request from './request';

export function auth({ username, password }) {
    return request.post('/login', {
        username,
        password
    })
}
