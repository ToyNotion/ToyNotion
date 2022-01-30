import React from 'react';
import styled from 'styled-components';
import { colors } from '../../constant/colors';
import DefaultText from '../atoms/DefaultText';
import waves from '../../asset/images/waves.svg';
const LoginLogo = () => {
    return (
        <Wrapper>
            <DefaultText color="white" size="large" bold text="Toy-Chat" />
            <Wave />
        </Wrapper>
    );
};

export default LoginLogo;

const Wrapper = styled.div`
    position: relative;
    display: flex;
    align-items: center;
    flex-direction: column;
    width: 100%;
    justify-content: center;
    height: 100%;
    background-color: ${colors.violet};
`;
const Wave = styled.div`
    position: absolute;
    bottom: -1px;
    width: 100%;
    height: 14%;
    background: url(${waves});
    transform: rotate(180deg);
`;
