import moment from 'moment';
import React, { useEffect, useRef, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import { client } from '../../api';
import { fetchJoin } from '../../api/auth';
import { joinInitForm } from '../../initData/join';
import { JoinTypes } from '../../types/joinTypes';
import {
    insertOnlyNumber,
    onCheckBirth,
    onCheckNullData,
    onCheckPassword,
    validateEmail,
} from '../../utils/validata';
import DefaultButton from '../atoms/DefaultButton';
import DefaultText from '../atoms/DefaultText';
import JoinInputRows from '../organisms/JoinInputRows';

const JoinTemplate = () => {
    const navigate = useNavigate();
    const inputRef = useRef<HTMLInputElement>(null);
    const [state, setState] = useState<JoinTypes>(joinInitForm);
    const [viewMessage, setViewMessaage] = useState<string>('');

    useEffect(() => {
        return () => {
            setState(() => joinInitForm);
            setIsPossible(() => true);
        };
    }, []);

    const [isPossible, setIsPossible] = useState<boolean>(true);

    const onChanger = (e: React.ChangeEvent<HTMLInputElement>) => {
        e.preventDefault();
        const { name, value } = e.target;
        switch (true) {
            case name === 'userHp':
                setState({
                    ...state,
                    [name]: insertOnlyNumber(value),
                });
                return null;

            default:
                setState({ ...state, [name]: value });
                return null;
        }
    };

    const onSubmit = async () => {
        //입력한 비밀번호가 서로 맞는지 체크
        const didCorrectPW =
            state.userPwdCheck &&
            onCheckPassword(state.userPwd, state.userPwdCheck);

        const isCorrectBirth = onCheckBirth(state.userBirth);
        //비밀번호와 비밀번호 확인이 맞다면 api 요청
        console.log(isCorrectBirth);
        if (didCorrectPW && isCorrectBirth && !onCheckNullData(state)) {
            setIsPossible(() => true);
            let sendForm = {
                userId: state.userId,
                userPwd: state.userPwd,
                userNm: state.userNm,
                userSex: state.userSex === '남성' ? '1' : '2',
                userHp: state.userHp,
                userBirth: moment(state.userBirth).format('YYMMDD'),
            };

            try {
                const response = await fetchJoin('user/signUp', sendForm);
                console.log(response);
                const result = response.data.success;
                const message = response.data.message;
                if (result) {
                    alert(message);
                    setState(() => joinInitForm);
                    navigate('/');
                } else {
                    alert(message);
                }
            } catch (e) {
                console.log(e);
            }
        } else {
            if (!isCorrectBirth) {
                setIsPossible(() => false);
                setViewMessaage(() => '생년월일을 확인해주세요');
            } else {
                setIsPossible(() => false);
                setViewMessaage(() => '입력하신 데이터를 확인해주세요.');
            }
        }
    };
    const onCancle = () => {
        navigate('/');
    };

    const onCheckId = async () => {
        if (state.userId === '') {
        } else {
            if (validateEmail(state.userId)) {
                try {
                    const response = await client.post('user/findId', {
                        userId: state.userId,
                    });
                    const data = response.data;
                    const success = data.success;

                    if (success) {
                        setIsPossible(() => true);
                    } else {
                        setViewMessaage(() => data.message);
                        setIsPossible(() => false);
                        inputRef?.current?.focus();
                    }
                } catch (e) {
                    console.log(e);
                }
            } else {
                setIsPossible(() => false);
                setViewMessaage(() => '이메일 형식으로 입력해주세요.');
                inputRef?.current?.focus();
            }
        }
    };

    return (
        <Container>
            {!isPossible && viewMessage !== '' && (
                <Wrapper>
                    <DefaultText text={viewMessage} color="red" />
                </Wrapper>
            )}
            <JoinInputRows
                onChanger={onChanger}
                state={state}
                isPossible={isPossible}
                setIsPossible={setIsPossible}
                onCheckId={onCheckId}
                inputRef={inputRef}
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
    height: 70%;
    justify-content: space-around;
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

const Wrapper = styled.div`
    display: flex;
    justify-content: center;
    align-items: flex-start;
    padding: 2rem;
    /* background-color: bluea; */
`;
