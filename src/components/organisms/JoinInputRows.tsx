import React, { SetStateAction } from 'react';
import { JoinTypes } from '../../types/joinTypes';
import TextInputRow from '../molecules/TextInputRow';
interface JoininputRowsProps {
    state: JoinTypes;
    onChanger: (e: React.ChangeEvent<HTMLInputElement>) => void;
    onCheckId: () => Promise<void>;
    isPossible: boolean;
    setIsPossible?: React.Dispatch<SetStateAction<boolean>>;
    inputRef?: React.RefObject<HTMLInputElement>;
}
const JoinInputRows = ({
    onChanger,
    state,
    onCheckId,
    isPossible,
    setIsPossible,
    inputRef,
}: JoininputRowsProps) => {
    console.log(state.userHp);
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
                isPossible={isPossible}
                setIsPossible={setIsPossible}
                inputRef={inputRef}
            />
            <TextInputRow
                rowTitle="비밀번호"
                name="userPwd"
                inputType={'password'}
                inputValue={state.userPwd}
                onChange={onChanger}
                placeholder="비밀번호를 입력해주세요"
            />
            <TextInputRow
                rowTitle="비밀번호 확인"
                name="userPwdCheck"
                inputType={'password'}
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
                inputValue={state.userHp.replace(
                    /^(\d{3})(\d{4})(\d{4})$/,
                    `$1-$2-$3`,
                )}
                onChange={onChanger}
                placeholder="번호만 입력해주세요"
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
