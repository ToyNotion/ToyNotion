import React from 'react';
import { useLocation } from 'react-router-dom';
import Cookies from 'universal-cookie';
import { fetchUserCheck } from '../api/auth';
import useCorrectAuth from './useCorrectAuth';
import useLogout from './useLogout';

const useCheckToken = () => {
    const location = useLocation();
    const cookies = new Cookies();
    const { onLogout } = useLogout();
    const { trueAuth } = useCorrectAuth();

    const accessToken = cookies.get('accessToken');

    const checkAccessToken = async () => {
        if (accessToken && accessToken !== undefined) {
            try {
                const response = await fetchUserCheck('user/vaildToken');
                if (response.data.success && location.pathname === '/') {
                    trueAuth();
                }
            } catch (e) {
                console.log(e);
                alert('다시 로그인 해주세요.');
                onLogout();
            }
        }
    };
    return { checkAccessToken };
};

export default useCheckToken;
