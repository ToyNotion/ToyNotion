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
    function (error) {
        console.log('sdfs', error);
        console.log('sdfs', error.config.status);
        // if (true) {
        //     Promise.resolve(async () => {
        //         const refresh = cookies.get('refreshKey');
        //         const data = { refreshTokenKey: `${refresh}` };
        //         try {
        //             const response = client.post('user/refresh', data);
        //             console.log(response);
        //         } catch (error) {}
        //     });
        // } else {
        // }
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
