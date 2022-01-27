import React from 'react';
import styled from 'styled-components';
import { colors } from '../../constant/colors';
import DefaultText from '../atoms/DefaultText';

const Header = () => {
    return (
        <Wrapper>
            <DefaultText text="Toy-Chat" color={'white'} bold size="large" />
        </Wrapper>
    );
};

export default Header;

const Wrapper = styled.div`
    background-color: ${colors.violet};
    display: flex;
    justify-content: center;
    align-items: center;
    height: 3rem;

    width: 100%;
`;
