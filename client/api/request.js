import axios from 'axios';
import { getToken } from '~/utils/auth.js';

const axiosInstance = axios.create({
    baseURL: process.env.baseUrl
});

axiosInstance.interceptors.request.use(function (config) {
    config.headers = {
        Authorization: `Bearer ${getToken()}`
    }
    return config;
}, function (error) {
    return Promise.reject(error);
});

// Add a response interceptor
axiosInstance.interceptors.response.use(function (response) {
    // Do something with response data
    return response.data;
}, function (error) {
    // Do something with response error
    return Promise.reject(error);
});

export default axiosInstance;
