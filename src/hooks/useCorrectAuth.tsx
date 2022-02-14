import { useCallback } from 'react';
import { useNavigate } from 'react-router-dom';

const useCorrectAuth = () => {
    const navigation = useNavigate();

    const falseAuth = useCallback(() => {
        navigation('/');
    }, [navigation]);

    const trueAuth = useCallback(() => {
        navigation('/main');
    }, [navigation]);
    return { trueAuth, falseAuth };
};

export default useCorrectAuth;
