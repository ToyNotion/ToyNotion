import { LoginTypes } from './../types/loginTypes';
import { client } from '.';
import { JoinTypes } from '../types/joinTypes';
import axios from 'axios';

export const fetchLogin = (url: string, loginFform: LoginTypes) => {
    return client.post(url, loginFform);
};

export const fetchJoin = (url: string, joinForm: JoinTypes) => {
    return axios.post(url, joinForm);
};
