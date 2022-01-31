import React from 'react';
import { useLocation, useParams } from 'react-router-dom';
import styled from 'styled-components';
import { colors } from '../../constant/colors';
import DefaultText from '../atoms/DefaultText';
import OptionBlock from '../molecules/OptionBlock';

const LoginHeader = () => {
    return (
        <LoginWrapper>
            <DefaultText text="Toy-Chat" color={'white'} bold size="large" />
        </LoginWrapper>
    );
};
const MainHeader = () => {
    return (
        <MainWrapper>
            <DefaultText text="메인헤더" color={'white'} bold size="large" />
            <OptionBlock />
        </MainWrapper>
    );
};

const Header = () => {
    const location = useLocation();
    const { pathname } = location;

    return pathname === '/main' ? <MainHeader /> : <LoginHeader />;
};

export default Header;

const LoginWrapper = styled.div`
    background-color: ${colors.violet};
    display: flex;
    justify-content: center;
    align-items: center;
    height: 3rem;
    width: 100%;
`;

const MainWrapper = styled.div`
    background-color: ${colors.violet};
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    height: 3rem;
    padding: 0 1rem;
`;
