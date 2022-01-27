import React from 'react';
import './App.css';
import TextInputRow from './components/molecules/TextInputRow';
import ContentBox from './components/atoms/ContentBox';
// *이메일(중복확인- 백엔드), * 비밀번호, * 비밀번호 확인(유효성 검사-프론트),
//     이름, 성별, 핸드폰번호, 생년월일
function App() {
    return (
        <ContentBox>
            <TextInputRow
                rowTitle="이메일"
                name="email"
                inputType={'email'}
                inputValue={''}
                onChange={() => {}}
                placeholder="이메일을 입력해주세요"
            />
            <TextInputRow
                rowTitle="비밀번호"
                name="password1"
                inputType={'password'}
                inputValue={''}
                onChange={() => {}}
                placeholder="비밀번호를 입력해주세요"
            />
            <TextInputRow
                rowTitle="비밀번호 확인"
                name="password2"
                inputType={'password'}
                inputValue={''}
                onChange={() => {}}
                placeholder="비밀번호를 다시 입력해주세요"
            />
            <TextInputRow
                rowTitle="이름"
                name="name"
                inputType={'text'}
                inputValue={''}
                onChange={() => {}}
                placeholder="비밀번호를 다시 입력해주세요"
            />
            <TextInputRow
                rowTitle="성별"
                name="gender"
                inputType={'radio'}
                checkOptions={['남성', '여성']}
                checked={'남성'}
                onChange={() => {}}
            />
            <TextInputRow
                rowTitle="휴대폰 번호"
                name="password2"
                inputType={'password'}
                inputValue={''}
                onChange={() => {}}
                placeholder="비밀번호를 다시 입력해주세요"
            />
            <TextInputRow
                rowTitle="생년월일"
                name="password2"
                inputType={'date'}
                inputValue={''}
                onChange={() => {}}
                placeholder="비밀번호를 다시 입력해주세요"
            />
        </ContentBox>
    );
}

export default App;
