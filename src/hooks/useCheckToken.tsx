import React from 'react';
import { useLocation } from 'react-router-dom';
import { useSetRecoilState } from 'recoil';
import Cookies from 'universal-cookie';
import { fetchUserCheck } from '../api/auth';
import { userInfoState } from '../modules/recoilAtoms/userInfoAtom';
import useCorrectAuth from './useCorrectAuth';
import useLogout from './useLogout';

const useCheckToken = () => {
    const location = useLocation();
    const cookies = new Cookies();
    const { onLogout } = useLogout();
    const { trueAuth } = useCorrectAuth();
    const setUserInfo = useSetRecoilState(userInfoState);

    const accessToken = cookies.get('accessToken');

    const checkAccessToken = async () => {
        if (accessToken && accessToken !== undefined) {
            try {
                const response = await fetchUserCheck();
                if (response.data.success) {
                    setUserInfo(response.data.data);
                    if (location.pathname === '/') trueAuth();
                }
            } catch (e) {
                console.log(e);
                // alert('다시 로그인 해주세요.');
                onLogout();
            }
        }
    };
    return { checkAccessToken };
};

export default useCheckToken;
