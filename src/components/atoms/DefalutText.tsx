import React from 'react';
import styled from 'styled-components';
import { colors } from '../../constant/colors';

type sizes = 'small' | 'medium' | 'large';
type colors = 'white' | 'navy' | 'black' | 'red';

interface LocalProps {
    text: string;
    bold?: boolean;
    size?: sizes;
    color?: colors;
}

const DefalutText = ({ text, bold, color, size }: LocalProps) => {
    return (
        <StyledSpan
            selectColor={color || 'black'}
            selectSize={size || 'medium'}
            isBold={bold || false}
        >
            {text}
        </StyledSpan>
    );
};

export default DefalutText;

const StyledSpan = styled.span<{
    selectColor: colors;
    selectSize: sizes;
    isBold: boolean;
}>`
    color: ${(props) => colors[props.selectColor]};
    font-size: ${(props) =>
        props.selectSize === 'small'
            ? '0.6rem'
            : props.selectSize === 'medium'
            ? '0.8rem'
            : '1.2rem'};
    font-weight: ${(props) => (props.isBold ? 700 : 'normal')};
`;
