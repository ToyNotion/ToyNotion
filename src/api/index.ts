import axios from 'axios';
import Cookie from 'universal-cookie';
import useCorrectAuth from '../hooks/useCorrectAuth';

export const client = axios.create({
    baseURL: 'http://localhost:8080/',
    headers: {
        'Content-Type': 'application/json',
    },
    withCredentials: true,
});

client.interceptors.request.use(
    function (config) {
        const cookies = new Cookie();
        const accessToken = cookies.get('accessToken');
        const refresh = cookies.get('refreshKey');

        if (config && accessToken) {
            client.defaults.headers.common[
                'Authorization'
            ] = `Bearer ${accessToken}`;
        }

        return config;
    },
    function (error) {
        console.log(error);
        return Promise.reject(error);
    },
);

client.interceptors.response.use(
    function (config) {
        const cookies = new Cookie();
        if (config) {
            if (config.config.url === 'user/signIn') {
                cookies.set('accessToken', config.data.data);
            }
        }
        return config;
    },
    function (error) {
        console.log(error);
        return Promise.reject(error);
    },
);
