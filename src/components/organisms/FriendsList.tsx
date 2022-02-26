import React from 'react';
import styled from 'styled-components';
import ChatStateRow from '../molecules/ChatStateRow';

// interface LocalProps {
//     list :
// }
const FriendsList = () => {
    return (
        <Wrapper>
            {[...Array(50)].map((item, index) => (
                <ChatStateRow
                    key={index}
                    name={`친구 ${index + 1}`}
                    targetUserId={index + 2}
                    statusMessage="개발중..."
                />
            ))}
        </Wrapper>
    );
};

export default FriendsList;

const Wrapper = styled.div`
    &::-webkit-scrollbar {
        display: none;
    }
`;
