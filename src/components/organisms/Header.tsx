import React, { useEffect } from 'react';
import { useLocation, useParams } from 'react-router-dom';
import styled from 'styled-components';
import Cookies from 'universal-cookie';
import { client } from '../../api';
import { colors } from '../../constant/colors';
import { LogoutIcon } from '../../constant/Icons';
import useCheckToken from '../../hooks/useCheckToken';
import useLogout from '../../hooks/useLogout';
import DefaultText from '../atoms/DefaultText';

const LoginHeader = () => {
    return (
        <LoginWrapper>
            <DefaultText text="Toy-Chat" color={'white'} bold size="large" />
        </LoginWrapper>
    );
};
const MainHeader = () => {
    const params = useParams();
    const { menu } = params;
    const cookies = new Cookies();

    const { onLogout } = useLogout();

    function getMenuName(menu: string | undefined) {
        switch (true) {
            case menu === 'chat':
                return '채팅';
            case menu === 'search':
                return '검색';
            case menu === 'mypage':
                return '설정';
            default:
                return '친구목록';
        }
    }
    const handleLogout = () => {
        if (window.confirm('logout하시겠습니까?')) {
            onLogout();
        }
        return;
    };
    const testRefresh = async () => {
        const refreshKey = cookies.get('refreshKey');
        console.log(refreshKey);
        const data = { refreshTokenKey: refreshKey };
        console.log(data);
        try {
            const response = await client.post('user/refresh', data);
            console.log('response', response);
        } catch (error) {
            console.log('error', error);
        }
    };
    const testAuthorization = async () => {
        try {
            const response = await client.get('user/vaildToken');
            console.log('response', response);
        } catch (error) {
            console.log('error', error);
        }
    };
    return (
        <MainWrapper>
            <DefaultText
                text={getMenuName(menu)}
                color={'white'}
                bold
                size="large"
            />
            <div onClick={testAuthorization}>토큰 검증</div>
            <div onClick={testRefresh}>리프레쉬</div>
            <LogoutBox children={<LogoutIcon />} onClick={handleLogout} />
        </MainWrapper>
    );
};

const Header = () => {
    const location = useLocation();
    const { pathname } = location;

    return pathname.includes('/main') ? <MainHeader /> : <LoginHeader />;
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
    display: flex;
    background-color: ${colors.violet};
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    height: 3rem;
    padding: 0 1rem;
`;

const LogoutBox = styled.div<React.FC<{ children: React.ReactElement }>>`
    display: flex;
    align-items: center;
    justify-content: center;
    width: max-content;
    height: max-content;
    cursor: pointer;
`;
