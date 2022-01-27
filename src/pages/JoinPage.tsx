import React from 'react';
import styled from 'styled-components';
import DefaultText from '../components/atoms/DefaultText';
import Header from '../components/organisms/Header';
import JoinTemplate from '../components/templates/JoinTemplate';

const JoinPage = () => {
    return (
        <Container>
            <Header />
            <JoinTemplate />
            <Footer>
                <DefaultText
                    text="Design by Toy Ground"
                    color="gray"
                    bold
                    size="small"
                />
            </Footer>
        </Container>
    );
};

export default JoinPage;

const Container = styled.div`
    display: flex;
    flex-direction: column;
    width: 100%;
    height: 100%;
    justify-content: space-between;
    align-items: center;
`;

const Footer = styled.div`
    display: flex;
    padding: 8px 10px;
    width: 100%;
    justify-content: center;
    align-items: cetner;
`;
