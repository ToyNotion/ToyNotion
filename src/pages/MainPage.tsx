import React, { useEffect } from 'react';
import { useLocation, useParams } from 'react-router-dom';
import styled from 'styled-components';
import DockBar from '../components/organisms/DockBar';
import Header from '../components/organisms/Header';
import ChatTemplate from '../components/templates/ChatTemplate';
import HomeTemplate from '../components/templates/HomeTemplate';
import MypageTemplate from '../components/templates/MypageTemplate';
import SearchTemplate from '../components/templates/SearchTemplate';
import useCheckToken from '../hooks/useCheckToken';
import useLogout from '../hooks/useLogout';

const MainPage = () => {
    const location = useLocation();
    const params = useParams();
    const { menu } = params;
    const { checkAccessToken } = useCheckToken();
    const { onLogout } = useLogout();

    useEffect(() => {
        checkAccessToken();
        return () => {
            onLogout();
        };
    }, []);

    const renderComponent = () => {
        switch (menu) {
            case '':
                return <HomeTemplate />;
            case 'chat':
                return <ChatTemplate />;
            case 'search':
                return <SearchTemplate />;
            case 'mypage':
                return <MypageTemplate />;

            default:
                return <HomeTemplate />;
        }
    };

    return (
        <Container>
            <Header />
            {renderComponent()}
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
