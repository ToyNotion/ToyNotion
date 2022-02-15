import React from 'react';
import { useLocation } from 'react-router-dom';
import Cookies from 'universal-cookie';
import { client } from '../api';
import { fetchUserCheck } from '../api/auth';
import useCorrectAuth from './useCorrectAuth';
import useLogout from './useLogout';

const useCheckToken = () => {
    const location = useLocation();
    const cookies = new Cookies();
    const accessToken = cookies.get('accessToken');
    const { onLogout } = useLogout();
    const { trueAuth } = useCorrectAuth();

    const checkAccessToken = async () => {
        if (accessToken) {
            client.defaults.headers.common[
                'Authorization'
            ] = `Bearer ${accessToken}`;
            try {
                const response = await fetchUserCheck('user/vaildToken');
                if (response.data.success && location.pathname === '/') {
                    trueAuth();
                }
            } catch (e) {
                console.log(e);
            }
        } else {
            onLogout();
        }
    };
    return { checkAccessToken };
};

export default useCheckToken;
