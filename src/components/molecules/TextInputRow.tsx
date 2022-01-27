import React from 'react';
import styled from 'styled-components';
import DefaultInput from '../atoms/DefaultInput';
import DefaultText from '../atoms/DefaultText';

const TextInputRow = () => {
    return (
        <Wrapper>
            <DefaultText text="이어서 하는asdfasf데" />
            <DefaultInput type={'email'} value="" onChange={() => {}} />
        </Wrapper>
    );
};

export default TextInputRow;

const Wrapper = styled.div`
    display: flex;
    width: 50%;
    flex-direction: row;
    column-gap: 2rem;
    justify-content: space-between;
`;
