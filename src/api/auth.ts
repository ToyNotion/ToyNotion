import { LoginTypes } from './../types/loginTypes';
import { client } from '.';
import { JoinTypes } from '../types/joinTypes';

export const fetchLogin = (loginFform: LoginTypes) => {
    return client.post('user/signIn', loginFform);
};

export const fetchJoin = (joinForm: JoinTypes) => {
    return client.post('user/signUp', joinForm);
};

export const fetchUserCheck = () => {
    return client.get('user/vaildToken');
};
