import React from 'react';
import styled from 'styled-components';
import { colors } from '../../constant/colors';

const ContentBox: React.FC = ({ children }) => {
    return (
        <Container>
            <StyledBox>{children}</StyledBox>
        </Container>
    );
};

export default ContentBox;

const Container = styled.div`
    display: flex;
    flex: 1;
    height: 100vh;
    justify-content: center;
    align-items: center;
    background-color: ${colors.gray};
`;
const StyledBox = styled.div`
    width: 375px;
    height: 667px;
    background-color: ${colors.white};
    border-radius: 10px;
    @media (max-width: 820px) {
        width: 70%;
        height: 80%;
    }
    @media (max-width: 414px) {
        width: 100%;
        height: 100%;
    }
`;
