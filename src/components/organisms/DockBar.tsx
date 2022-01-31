import React from 'react';
import styled from 'styled-components';
import { colors } from '../../constant/colors';

const DockBar = () => {
    return (
        <Wrapper>
            <div>홈</div>
            <div>채팅</div>
            <div>검색</div>
            <div>마이페이지</div>
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
`;
