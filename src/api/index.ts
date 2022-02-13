import axios from 'axios';
import Cookie from 'universal-cookie';
import useGoLogin from '../hooks/useGoLogin';

export const client = axios.create({
    baseURL: 'http://localhost:8080/',
});

client.interceptors.request.use(
    function (config) {
        const cookies = new Cookie();
        const accessToken = cookies.get('accessToken');
        console.log('cookie', document.cookie);

        if (config) {
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
                useGoLogin();
            }
        }
        return config;
    },
    function (error) {
        console.log(error);
        return Promise.reject(error);
    },
);
