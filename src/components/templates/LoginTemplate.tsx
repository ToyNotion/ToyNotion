import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import { client } from '../../api';
import { LoginTypes } from '../../types/loginTypes';
import { onCheckNullData, validateEmail } from '../../utils/validata';
import DefaultButton from '../atoms/DefaultButton';
import LoginInputRows from '../organisms/LoginInputRows';

const LoginTemplate = () => {
    const navigate = useNavigate();
    const [loginForm, setLoginForm] = useState<LoginTypes>({
        userId: '',
        userPwd: '',
        serviceNo: '1',
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

    const onSubmit = async () => {
        //입력한 비밀번호가 서로 맞는지 체크
        const didCorrectEmail = validateEmail(loginForm.userId);
        //비밀번호와 비밀번호 확인이 맞다면 api 요청
        if (didCorrectEmail && !onCheckNullData(loginForm)) {
            try {
                const response = await client.post('user/signIn', loginForm);
                if (response.data.success) {
                    console.log(response);
                } else {
                    alert('아이디 또는 비밀번호를 확인해주세요');
                    setLoginForm({ ...loginForm, userPwd: '' });
                }
            } catch (e) {
                console.log(e);
            }
        } else {
            alert('아이디 또는 비밀번호를 확인해주세요');
        }
    };
    return (
        <Container>
            <LoginBlock>
                <LoginInputRows state={loginForm} onChange={onChanger} />
            </LoginBlock>
            <ButtonBlock>
                <DefaultButton
                    text="로그인"
                    backgroundColor="violet"
                    onClick={onSubmit}
                />
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
