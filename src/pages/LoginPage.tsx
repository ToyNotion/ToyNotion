import React, { useEffect } from 'react';
import styled from 'styled-components';
import Footer from '../components/molecules/Footer';
import LoginLogo from '../components/molecules/LoginLogo';
import LoginTemplate from '../components/templates/LoginTemplate';
import useCheckToken from '../hooks/useCheckToken';

const LoginPage = () => {
    const { checkAccessToken } = useCheckToken();
    useEffect(() => {
        checkAccessToken();
    }, []);
    return (
        <Container>
            <LoginLogo />
            <LoginTemplate />
            <Footer />
        </Container>
    );
};

export default LoginPage;

const Container = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-evenly;
    height: 100%;
`;
