import React from 'react';
import styled from 'styled-components';
const MypageTemplate = () => {
    return <Container>MypageTemplate</Container>;
};

export default MypageTemplate;
const Container = styled.div`
    display: flex;
    flex-direction: column;
    width: 100%;
    height: calc(100% - 6rem);
    justify-content: space-between;
    overflow: auto;
`;
