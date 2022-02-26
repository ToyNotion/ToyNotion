import React from 'react';
import styled from 'styled-components';
import DefaultButton from '../atoms/DefaultButton';
import DefaultText from '../atoms/DefaultText';

interface ProfileProps {
    userId: number | null;
}
const ProfileUserInfo = ({ userId }: ProfileProps) => {
    return (
        <UserInfo>
            <Name text={`윈터${userId}`} bold color="black" size="large" />
            <StatusMessage text={'상태 메시지'} color="black" />
            <ChatButton>
                <DefaultButton text="1:1 대화하기" backgroundColor="violet" />
            </ChatButton>
        </UserInfo>
    );
};

export default ProfileUserInfo;

const UserInfo = styled.div`
    display: flex;
    padding: 1rem;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    flex: 0.3;
    width: 100%;
    row-gap: 10px;
`;
const Name = styled(DefaultText)``;
const StatusMessage = styled(DefaultText)``;
const ChatButton = styled.div`
    margin-top: 0.6rem;
    width: 90%;
`;
