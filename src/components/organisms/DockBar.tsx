import React from 'react';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import { colors } from '../../constant/colors';

const navigationList = [
    {
        name: '홈',
        uri: '/main',
    },
    {
        name: '채팅',
        uri: '/main/chat',
    },
    {
        name: '검색',
        uri: '/main/search',
    },
    {
        name: '마이페이지',
        uri: '/main/mypage',
    },
];
const DockBar = () => {
    const navigate = useNavigate();
    return (
        <Wrapper>
            {navigationList.map((item, index) => (
                <div key={index} onClick={() => navigate(item.uri)}>
                    {item.name}
                </div>
            ))}
        </Wrapper>
    );
};

export default DockBar;

const Wrapper = styled.div`
    position: relative;
    display: flex;
    background-color: ${colors.violet};
    flex-direction: row;
    justify-content: space-around;
    align-items: center;
    height: 3rem;
    padding: 0 1rem;
    div {
        color: #ffffff;
    }
    cursor: pointer;
`;
