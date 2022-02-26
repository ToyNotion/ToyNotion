import React from 'react';
import styled from 'styled-components';
import { colors } from '../../constant/colors';

type color = 'gray' | 'mint' | 'violet';
interface LocalProps {
    type?: 'button' | 'submit';
    text: string;
    onClick?: () => void;
    backgroundColor: color;
}
const DefaultButton = ({
    backgroundColor,
    onClick,
    text,
    type = 'button',
}: LocalProps) => {
    return (
        <StyledBox
            type={type}
            backgroundColor={backgroundColor}
            onClick={onClick}
            value={text}
        />
    );
};

export default DefaultButton;

const StyledBox = styled.input<{ backgroundColor: color }>`
    display: flex;
    width: 100%;
    flex: 1;
    justify-content: center;
    align-items: center;
    padding: 10px 1rem;
    border-radius: 6px;
    background-color: ${(props) => colors[props.backgroundColor]};
    color: ${(props) =>
        props.backgroundColor === 'gray' ? colors.black : colors.white};
    cursor: pointer;
    border: none;
    outline: none;
`;
