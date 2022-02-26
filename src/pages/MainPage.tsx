import React, { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { useRecoilValue } from 'recoil';
import styled from 'styled-components';
import DockBar from '../components/organisms/DockBar';
import Header from '../components/organisms/Header';
import ChatTemplate from '../components/templates/ChatTemplate';
import HomeTemplate from '../components/templates/HomeTemplate';
import ProfileModal from '../components/templates/ProfileModal';
import MypageTemplate from '../components/templates/MypageTemplate';
import SearchTemplate from '../components/templates/SearchTemplate';
import useCheckToken from '../hooks/useCheckToken';
import useLogout from '../hooks/useLogout';
import { modalState } from '../modules/recoilAtoms/modalAtom';

const MainPage = () => {
    const params = useParams();
    const { menu } = params;
    const { checkAccessToken } = useCheckToken();
    const { onLogout } = useLogout();
    const onModal = useRecoilValue(modalState);

    useEffect(() => {
        checkAccessToken();
        return () => {
            onLogout();
        };
    }, []);

    const renderComponent = () => {
        switch (menu) {
            case undefined:
                return <HomeTemplate />;
            case 'chat':
                return <ChatTemplate />;
            case 'search':
                return <SearchTemplate />;
            case 'mypage':
                return <MypageTemplate />;

            default:
                return null;
        }
    };

    return (
        <>
            <Container>
                {onModal && <ProfileModal />}
                <Header />
                {renderComponent()}
                <DockBar />
            </Container>
        </>
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
