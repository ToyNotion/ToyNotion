import React from 'react';
import styled from 'styled-components';
import Header from '../components/organisms/Header';

const MainPage = () => {
    return (
        <Container>
            <Header />
            mainPage
        </Container>
    );
};

export default MainPage;

const Container = styled.div`
    flex-direction: column;
    width: 100%;
    height: 100%;
    justify-content: space-between;
    align-items: center;
`;
