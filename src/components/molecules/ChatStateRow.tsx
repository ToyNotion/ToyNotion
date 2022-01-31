import React from 'react';
import styled from 'styled-components';
import { colors } from '../../constant/colors';
import { ChatStatusTypes } from '../../types/MainTypes';
import DefaultText from '../atoms/DefaultText';

const ChatStateRow = ({ name, statusMessage }: ChatStatusTypes) => {
    return (
        <Container>
            <DefaultText text={name} bold />
            <DefaultText text={statusMessage} size="small" />
        </Container>
    );
};

export default ChatStateRow;

const Container = styled.div`
    display: flex;
    /* background-color: ${colors.black}; */
    flex-direction: column;
    justify-content: space-between;
    align-items: flex-start;
    padding: 0.8rem 2rem;
    row-gap: 0.4rem;
`;
