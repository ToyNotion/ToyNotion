import React from 'react';
import styled from 'styled-components';
import DefaultText from '../atoms/DefaultText';

const Footer = () => {
    return (
        <Wrapper>
            <DefaultText
                text="Design by Toy Ground"
                color="gray"
                bold
                size="small"
            />
        </Wrapper>
    );
};

export default Footer;

const Wrapper = styled.div`
    display: flex;
    padding: 8px 10px;
    width: 100%;
    justify-content: center;
    align-items: cetner;
`;
