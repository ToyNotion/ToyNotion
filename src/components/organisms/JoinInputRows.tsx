import React from 'react';
import { JoinTypes } from '../../types/joinTypes';
import TextInputRow from '../molecules/TextInputRow';
interface JoininputRowsProps {
    state: JoinTypes;
    onChanger: (e: React.ChangeEvent<HTMLInputElement>) => void;
    onCheckId: () => Promise<void>;
}
const JoinInputRows = ({ onChanger, state, onCheckId }: JoininputRowsProps) => {
    return (
        <>
            <TextInputRow
                rowTitle="이메일"
                name="userId"
                inputType={'email'}
                inputValue={state.userId}
                onChange={onChanger}
                onCheckId={onCheckId}
                placeholder="이메일을 입력해주세요"
            />
            <TextInputRow
                rowTitle="비밀번호"
                name="password"
                inputType={'userPwd'}
                inputValue={state.userPwd}
                onChange={onChanger}
                placeholder="비밀번호를 입력해주세요"
            />
            <TextInputRow
                rowTitle="비밀번호 확인"
                name="passwordCheck"
                inputType={'userPwdCheck'}
                inputValue={state.userPwdCheck}
                onChange={onChanger}
                placeholder="비밀번호를 다시 입력해주세요"
            />
            <TextInputRow
                rowTitle="이름"
                name="userNm"
                inputType={'text'}
                inputValue={state.userNm}
                onChange={onChanger}
                placeholder="이름을 입력해주세요"
            />
            <TextInputRow
                rowTitle="성별"
                name="userSex"
                inputType={'radio'}
                checkOptions={['남성', '여성']}
                checked={state.userSex}
                onChange={onChanger}
            />
            <TextInputRow
                rowTitle="휴대폰 번호"
                name="userHp"
                inputType={'tel'}
                inputValue={state.userHp}
                onChange={onChanger}
                placeholder="휴대폰 번호를 입력해주세요"
            />
            <TextInputRow
                rowTitle="생년월일"
                name="userBirth"
                inputType={'date'}
                inputValue={state.userBirth}
                onChange={onChanger}
            />
        </>
    );
};

export default JoinInputRows;
