import { auth, client } from '.';

client.interceptors.request.use(
    function (config) {
        console.log('cookie', document.cookie);
        if (config) {
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

auth.interceptors.response.use(
    function (config) {
        console.log('cookie');
        if (config) {
            // config.headers?['Authorization'] = `Bearer `;
            console.log(config);
            const accessToken = config.data.data;
            auth.defaults.headers.common[
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
