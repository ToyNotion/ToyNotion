import axios from 'axios';
import Cookie from 'universal-cookie';
export const client = axios.create({
    baseURL: 'http://localhost:8080/',
});

export const auth = axios.create({
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
            // config.headers['Content-Type'] = 'application/json; charset=utf-8';
            // config.headers?['Authorization'] = `Bearer `;
            // console.log(config);
            // client.defaults.headers.common['Authorization'] = `Bearer`;
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
            console.log('cookie', config);
            if (config.config.url === 'user/signIn') {
                cookies.set('accessToken', config.data.data);
            }
            // config.headers?['Authorization'] = `Bearer `;
        }
        return config;
    },
    function (error) {
        console.log(error);
        return Promise.reject(error);
    },
);
