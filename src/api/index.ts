import axios from 'axios';

export const client = axios.create({
    baseURL: 'http://localhost:8080/',
});

export const auth = axios.create({
    baseURL: 'http://localhost:8080/',
});
