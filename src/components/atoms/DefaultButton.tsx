import React from 'react';
import styled from 'styled-components';
import { colors } from '../../constant/colors';

type color = 'gray' | 'mint';
interface LocalProps {
    text: string;
    onClick: () => void;
    backgroundColor: color;
}
const DefaultButton = ({ backgroundColor, onClick, text }: LocalProps) => {
    return (
        <StyledBox backgroundColor={backgroundColor} onClick={onClick}>
            {text}
        </StyledBox>
    );
};

export default DefaultButton;

const StyledBox = styled.div<{ backgroundColor: color }>`
    display: flex;
    width: 100%;
    justify-content: center;
    align-items: center;
    padding: 10px 1rem;
    border-radius: 6px;
    background-color: ${(props) => colors[props.backgroundColor]};
    color: ${(props) =>
        props.backgroundColor === 'gray' ? colors.black : colors.white};
`;
