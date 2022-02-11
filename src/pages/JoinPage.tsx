import React from 'react';
import { useLocation } from 'react-router-dom';
import styled from 'styled-components';
import Footer from '../components/molecules/Footer';
import Header from '../components/organisms/Header';
import JoinTemplate from '../components/templates/JoinTemplate';

const JoinPage = () => {
    const location = useLocation();
    console.log(location.search);
    return (
        <Container>
            <Header />
            <JoinTemplate />
            <Footer />
        </Container>
    );
};

export default JoinPage;

const Container = styled.div`
    display: flex;
    flex-direction: column;
    width: 100%;
    height: 100%;
    justify-content: space-between;
    align-items: center;
`;
