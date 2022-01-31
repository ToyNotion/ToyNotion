import React from 'react';
import styled from 'styled-components';
import DockBar from '../components/organisms/DockBar';
import Header from '../components/organisms/Header';
import FriendListTemplate from '../components/templates/FriendListTemplate';

const MainPage = () => {
    return (
        <Container>
            <Header />
            <FriendListTemplate />
            <DockBar />
        </Container>
    );
};

export default MainPage;

const Container = styled.div`
    position: relative;
    justify-content: space-between;
    height: 100%;
    align-items: center;
    overflow: hidden;
`;
