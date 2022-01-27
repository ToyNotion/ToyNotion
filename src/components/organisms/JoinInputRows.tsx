import React from 'react';
import { JoinTypes } from '../../types/joinTypes';
import TextInputRow from '../molecules/TextInputRow';
interface JoininputRowsProps {
    state: JoinTypes;
    onChanger: (e: React.ChangeEvent<HTMLInputElement>) => void;
}
const JoinInputRows = ({ onChanger, state }: JoininputRowsProps) => {
    return (
        <>
            <TextInputRow
                rowTitle="이메일"
                name="email"
                inputType={'email'}
                inputValue={state.email}
                onChange={onChanger}
                placeholder="이메일을 입력해주세요"
            />
            <TextInputRow
                rowTitle="비밀번호"
                name="password"
                inputType={'password'}
                inputValue={state.password}
                onChange={onChanger}
                placeholder="비밀번호를 입력해주세요"
            />
            <TextInputRow
                rowTitle="비밀번호 확인"
                name="passwordCheck"
                inputType={'password'}
                inputValue={state.passwordCheck}
                onChange={onChanger}
                placeholder="비밀번호를 다시 입력해주세요"
            />
            <TextInputRow
                rowTitle="이름"
                name="name"
                inputType={'text'}
                inputValue={state.name}
                onChange={onChanger}
                placeholder="이름을 입력해주세요"
            />
            <TextInputRow
                rowTitle="성별"
                name="gender"
                inputType={'radio'}
                checkOptions={['남성', '여성']}
                checked={state.gender}
                onChange={onChanger}
            />
            <TextInputRow
                rowTitle="휴대폰 번호"
                name="phone"
                inputType={'tel'}
                inputValue={state.phone}
                onChange={onChanger}
                placeholder="휴대폰 번호를 입력해주세요"
            />
            <TextInputRow
                rowTitle="생년월일"
                name="birth"
                inputType={'date'}
                inputValue={state.birth}
                onChange={onChanger}
            />
        </>
    );
};

export default JoinInputRows;
