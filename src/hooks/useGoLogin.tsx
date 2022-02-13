import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

const useGoLogin = () => {
    const navigation = useNavigate();

    useEffect(() => {
        navigation('/');
    }, []);

    return null;
};

export default useGoLogin;
