import { LoginTypes } from './../types/loginTypes';
import { client } from '.';
import { JoinTypes } from '../types/joinTypes';

export const fetchLogin = (url: string, loginFform: LoginTypes) => {
    return client.post(url, loginFform);
};

export const fetchJoin = (url: string, joinForm: JoinTypes) => {
    return client.post(url, joinForm);
};

export const fetchUserCheck = (url: string) => {
    return client.get(url);
};
