import { HEADER } from '@constants/api.enum';
import axiosDefault, { type AxiosInstance } from 'axios'

const axios: AxiosInstance = axiosDefault.create({
    baseURL: import.meta.env.VITE_API_URL
})

// Add a request interceptor
axios.interceptors.request.use((config) => {
    // Do something before request is sent
    if (import.meta.env.hasOwnProperty('VITE_API_MOCK')) {
        config.url = `${config.headers.get(HEADER.MOCK_URL)?.toString()}.json`
    }
    return config;
}, function (error) {
    // Do something with request error
    return Promise.reject(error);
})

// Add a response interceptor
axios.interceptors.response.use((response) => {
    // Any status code that lie within the range of 2xx cause this function to trigger
    // Do something with response data
    return response;
}, function (error) {
    // Do something with response error
    return Promise.reject(error);
})

export default axios;