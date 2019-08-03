import request from './request';

const route = 'category';

export function create(data) {
    return request.post(route, data);
}

export function all() {
    return request.get(route);
}

export function one(id) {
    return request.get(`${route}/${id}`);
}

export function remove(id) {
    return request.delete(`${route}/${id}`);
}
