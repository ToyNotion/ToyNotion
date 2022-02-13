import React from 'react';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import { colors } from '../../constant/colors';
import { navigationList } from '../../initData/DockbarData';

const DockBar = () => {
    const navigate = useNavigate();
    return (
        <Wrapper>
            {navigationList.map((item, index) => (
                <IconWrapper key={index} onClick={() => navigate(item.uri)}>
                    {item.icon}
                </IconWrapper>
            ))}
        </Wrapper>
    );
};

export default DockBar;

const Wrapper = styled.div`
    position: relative;
    display: flex;
    background-color: ${colors.violet};
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    height: 3rem;
    padding: 0 1rem;
    div {
        color: #ffffff;
    }
    cursor: pointer;
`;

const IconWrapper = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    flex: 1;
    height: 100%;
`;
