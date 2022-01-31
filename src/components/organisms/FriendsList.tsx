import React from 'react';
import ChatStateRow from '../molecules/ChatStateRow';

// interface LocalProps {
//     list :
// }
const FriendsList = () => {
    return (
        <>
            {[...Array(50)].map((item, index) => (
                <ChatStateRow
                    key={index}
                    name={`친구 ${index + 1}`}
                    statusMessage="개발중..."
                />
            ))}
        </>
    );
};

export default FriendsList;
