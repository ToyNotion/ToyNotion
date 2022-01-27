import React from 'react';
import { LoginTypes } from '../../types/loginTypes';
import TextInputRow from '../molecules/TextInputRow';

interface LoginProps {
    state: LoginTypes;
    onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}
const LoginInputRows = ({ onChange, state }: LoginProps) => {
    return (
        <>
            <TextInputRow
                inputType="email"
                rowTitle="이메일"
                inputValue={state.userId}
                name="userId"
                onChange={onChange}
                placeholder="이메일을 입력해주세요"
            />
            <TextInputRow
                inputType="password"
                rowTitle="비밀번호"
                inputValue={state.userPwd}
                name="userPwd"
                onChange={onChange}
                placeholder="비밀번호를 입력해주세요"
            />
        </>
    );
};

export default LoginInputRows;
