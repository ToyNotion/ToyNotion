import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import DefaultButton from '../components/atoms/DefaultButton';
import { colors } from '../constant/colors';

const TIMEOUT_SECOND = 5;

const UrlErrorPage = () => {
    const navigate = useNavigate();
    const [count, setCount] = useState<number>(TIMEOUT_SECOND);

    const goBack = () => navigate('/main');

    const timeOut = () =>
        setInterval(() => {
            setCount((count) => count - 1);
        }, 1000);

    useEffect(() => {
        timeOut();
        return () => {
            setCount(TIMEOUT_SECOND);
            clearInterval(timeOut());
        };
    }, []);

    useEffect(() => {
        if (count === 0) {
            goBack();
        }
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [count]);

    return (
        <Container>
            <ErrorTitle>잘못된 접근입니다.</ErrorTitle>
            <ErrorExplain>{count}초 뒤 메인 페이지로 이동합니다.</ErrorExplain>
            <ButtonBox>
                <DefaultButton
                    backgroundColor="violet"
                    text="뒤로가기"
                    onClick={goBack}
                />
            </ButtonBox>
        </Container>
    );
};

export default UrlErrorPage;

const Container = styled.div`
    display: flex;
    flex-direction: column;
    height: 100%;
    justify-content: center;
    align-items: center;
    flex: 1;
`;

const ErrorTitle = styled.h2`
    color: ${colors.mint};
`;
const ErrorExplain = styled.h3`
    color: ${colors.black};
`;
const ButtonBox = styled.div`
    padding: 4rem 0;
`;
