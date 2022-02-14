import { useCallback } from 'react';
import Cookies from 'universal-cookie';
import useCorrectAuth from './useCorrectAuth';

const useLogout = () => {
    // eslint-disable-next-line react-hooks/exhaustive-deps
    const cookies = new Cookies();
    const { falseAuth } = useCorrectAuth();

    const onLogout = useCallback(() => {
        cookies.remove('accessToken');
        cookies.remove('refreshKey');
        falseAuth();
    }, [cookies, falseAuth]);

    return onLogout;
};

export default useLogout;
