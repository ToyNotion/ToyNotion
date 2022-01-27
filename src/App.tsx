import React from 'react';
import './App.css';
import styled from 'styled-components';
import DefaultButton from './components/atoms/DefaultButton';
import DefaultInput from './components/atoms/DefaultInput';
import TextInputRow from './components/molecules/TextInputRow';

function App() {
    return (
        <Container>
            <TextInputRow />
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
