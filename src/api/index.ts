import axios from 'axios';
import Cookie from 'universal-cookie';

export const client = axios.create({
    baseURL: 'http://localhost:8080/',
    // headers: {
    //     'Content-Type': 'application/json',
    // },
    withCredentials: true,
});

const cookies = new Cookie();
client.interceptors.request.use(
    function (config) {
        const accessToken = cookies.get('accessToken');

        if (config && accessToken) {
            client.defaults.headers.common[
                'Authorization'
            ] = `Bearer ${accessToken}`;
        }

        return config;
    },
    function async(error) {
        console.log('sdfs', error);
        console.log('sdfs', error.config.status);

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
            // console.log(window.location.href);
            // console.log(JSON.stringify(config.config.url)?.trim() === '');
            // console.log(config);
        }
        return config;
    },
    async (error) => {
        const status = error.response.status;
        if (status === 401) {
            const originalConfig = error.config;
            const refresh = cookies.get('refreshKey');
            const data = { refreshTokenKey: `${refresh}` };
            try {
                await client
                    .post('user/refresh', data)
                    .then((res) => {
                        cookies.set('accessToken', res.data.data);
                    })
                    .then((res) => {
                        const newConfig = { ...originalConfig };
                        const accessToken = cookies.get('accessToken');
                        newConfig.headers.Authorization = `Bearer ${accessToken}`;
                        return client(newConfig);
                    });
            } catch (error) {
                console.log(error);
                // window.location.href = '/';
                // cookies.remove('accessToken');
                // cookies.remove('refreshKey');
            }
        }

        return Promise.reject(error);
    },
);
