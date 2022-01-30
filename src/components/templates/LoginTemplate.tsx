import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import { LoginTypes } from '../../types/loginTypes';
import DefaultButton from '../atoms/DefaultButton';
import LoginInputRows from '../organisms/LoginInputRows';

const LoginTemplate = () => {
    const navigate = useNavigate();
    const [loginForm, setLoginForm] = useState<LoginTypes>({
        userId: '',
        userPwd: '',
    });
    const onChanger = (e: React.ChangeEvent<HTMLInputElement>) => {
        e.preventDefault();
        e.stopPropagation();
        const { name, value } = e.target;
        setLoginForm({ ...loginForm, [name]: value });
    };

    const goJoin = () => {
        navigate('/join');
    };
    return (
        <Container>
            <LoginBlock>
                <LoginInputRows state={loginForm} onChange={onChanger} />
            </LoginBlock>
            <ButtonBlock>
                <DefaultButton text="로그인" backgroundColor="violet" />
                <DefaultButton
                    text="회원가입"
                    backgroundColor="gray"
                    onClick={goJoin}
                />
            </ButtonBlock>
        </Container>
    );
};

export default LoginTemplate;

const Container = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-evenly;
    height: 100%;
    padding: 4rem 0;
    width: 90%;
`;

const LoginBlock = styled.div`
    display: flex;
    flex-direction: column;
    margin-bottom: 2rem;
    padding: 0 0.8rem;
`;

const ButtonBlock = styled.div`
    display: flex;
    flex-direction: column;
    height: 20%;
    row-gap: 0.8rem;
    width: 100%;
    /* margin-top: 4rem; */
`;
