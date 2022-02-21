import React from 'react';
import styled from 'styled-components';
import ChatStateRow from '../molecules/ChatStateRow';

const ChatTemplate = () => {
    return (
        <Container>
            {/* <ChatStateRow name="김상배" statusMessage="개발중..." />
            <ChatStateRow name="김상배" statusMessage="개발중..." />
            <ChatStateRow name="김상배" statusMessage="개발중..." />
            <ChatStateRow name="김상배" statusMessage="개발중..." />
            <ChatStateRow name="김상배" statusMessage="개발중..." /> */}
        </Container>
    );
};

export default ChatTemplate;
const Container = styled.div`
    display: flex;
    flex-direction: column;
    width: 100%;
    height: calc(100% - 6rem);
    justify-content: space-between;
    overflow: auto;
`;
