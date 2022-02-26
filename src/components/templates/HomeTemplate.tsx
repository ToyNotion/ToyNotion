import React from 'react';
import { useRecoilValue } from 'recoil';
import styled from 'styled-components';
import { userInfoState } from '../../modules/recoilAtoms/userInfoAtom';
import ChatStateRow from '../molecules/ChatStateRow';
import SubTitle from '../molecules/SubTitle';
import FriendsList from '../organisms/FriendsList';

const HomeTemplate = () => {
    const userInfo = useRecoilValue(userInfoState);
    return (
        <Container>
            <SubTitle text="내 정보" />
            <ChatStateRow
                name="김상배"
                statusMessage="개발중..."
                targetUserId={userInfo && userInfo.userSq}
            />
            <SubTitle text="친구 목록" />
            <FriendsList />
        </Container>
    );
};

export default HomeTemplate;
const Container = styled.div`
    display: flex;
    flex-direction: column;
    width: 100%;
    height: calc(100% - 6rem);
    justify-content: space-between;
    overflow: auto;
`;
