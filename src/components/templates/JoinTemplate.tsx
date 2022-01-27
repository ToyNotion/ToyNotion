import React, { useState } from 'react';
import styled from 'styled-components';
import { JoinTypes } from '../../types/joinTypes';
import DefaultButton from '../atoms/DefaultButton';
import JoinInputRows from '../organisms/JoinInputRows';

const JoinTemplate = () => {
    const [state, setState] = useState<JoinTypes>({
        email: '',
        password: '',
        passwordCheck: '',
        name: '',
        gender: '여성',
        phone: '',
        birth: '',
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
        const didCorrectPW = onCheckPassword(
            state.password,
            state.passwordCheck,
        );

        if (didCorrectPW && !onCheckNullData(state)) {
            console.log('submit api 보내기');
        } else {
            console.log('보내면 안돼 !');
        }
    };
    const onCancle = () => {
        alert('onCancle');
    };
    return (
        <Container>
            <JoinInputRows onChanger={onChanger} state={state} />
            <SubmitBlock>
                <DefaultButton
                    text="가입하기"
                    backgroundColor="mint"
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
    flex-direction: column;
`;

const SubmitBlock = styled.div`
    display: flex;
    flex-direction: column;
    width: 100%;
    justify-content: space-between;
    row-gap: 10px;
    margin: 2rem 0;
`;
