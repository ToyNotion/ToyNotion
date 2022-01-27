import React from 'react';
import logo from './logo.svg';
import './App.css';
import styled from 'styled-components';
import DefalutText from './components/atoms/DefalutText';

function App() {
    return (
        <Container>
            <DefalutText text="합의금은 두둑히" size="large" bold={true} />
            <DefalutText text="합의금은 두둑히" size="large" bold={false} />
            <DefalutText text="합의금은 두둑히" size="medium" />
            <DefalutText text="합의금은 두둑히" size="small" />
        </Container>
    );
}

export default App;

const Container = styled.div`
    display: flex;
    flex: 1;
    height: 100vh;
    justify-content: center;
    align-items: center;
`;
