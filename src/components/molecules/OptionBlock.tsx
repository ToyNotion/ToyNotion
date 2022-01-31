import React from 'react';
import styled from 'styled-components';
import DefaultText from '../atoms/DefaultText';

const OptionBlock = () => {
    return (
        <IconBlock>
            <DefaultText text="검색" color={'white'} bold />
            <DefaultText text="추가" color={'white'} bold />
            <DefaultText text="설정" color={'white'} bold />
        </IconBlock>
    );
};

export default OptionBlock;
const IconBlock = styled.div`
    display: flex;
    flex-direction: row;
    column-gap: 0.4rem;
`;
