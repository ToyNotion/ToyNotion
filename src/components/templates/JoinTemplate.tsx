import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import { client } from '../../api';
import { JoinTypes } from '../../types/joinTypes';
import DefaultButton from '../atoms/DefaultButton';
import JoinInputRows from '../organisms/JoinInputRows';

const JoinTemplate = () => {
    const navigate = useNavigate();
    const [state, setState] = useState<JoinTypes>({
        userId: '',
        userPwd: '',
        userPwdCheck: '',
        userNm: '',
        userSex: '여성',
        userHp: '',
        userBirth: '',
    });
    const onChanger = (e: React.ChangeEvent<HTMLInputElement>) => {
        e.preventDefault();
        e.stopPropagation();
        const { name, value } = e.target;
        setState({ ...state, [name]: value });
    };
    const onCheckNullData = (state: JoinTypes) => {
        const temp = Object.entries(state).map((item) =>
            item[1] === '' ? false : true,
        );
        return temp.includes(false);
    };
    const onCheckPassword = (pw1: string, pw2: string) => {
        return pw1.trim() === pw2.trim();
    };
    const onSubmit = () => {
        alert('onSubmit');
        const didCorrectPW = onCheckPassword(state.userPwd, state.userPwdCheck);

        if (didCorrectPW && !onCheckNullData(state)) {
            console.log('submit api 보내기');
        } else {
            console.log('보내면 안돼 !');
        }
    };
    const onCancle = () => {
        navigate('/');
        // window.location.href = '/';
    };
    const onCheckId = async () => {
        try {
            const response = await client.post('user/findId', {
                userId: state.userId,
            });
            console.log(response);
        } catch (e) {
            console.log(e);
        }
    };
    return (
        <Container>
            <JoinInputRows
                onChanger={onChanger}
                state={state}
                onCheckId={onCheckId}
            />
            <SubmitBlock>
                <DefaultButton
                    text="가입하기"
                    backgroundColor="violet"
                    onClick={onSubmit}
                />
                <DefaultButton
                    text="취소"
                    backgroundColor="gray"
                    onClick={onCancle}
                />
            </SubmitBlock>
        </Container>
    );
};

export default JoinTemplate;

const Container = styled.div`
    display: flex;
    width: 90%;
    justify-content: space-between;
    flex-direction: column;
`;

const SubmitBlock = styled.div`
    display: flex;
    flex-direction: column;
    width: 100%;
    justify-content: space-between;
    row-gap: 10px;
    margin-top: 2rem;
`;
