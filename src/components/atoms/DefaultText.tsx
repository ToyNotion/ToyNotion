import React, { useMemo } from 'react';
import styled from 'styled-components';
import { colors } from '../../constant/colors';

type SizesType = 'small' | 'medium' | 'large';
type ColorsType = 'white' | 'navy' | 'black' | 'red' | 'gray';

interface LocalProps {
    text: string | undefined;
    bold?: boolean;
    size?: SizesType;
    color?: ColorsType;
}

const DefaultText = React.memo(({ text, bold, color, size }: LocalProps) => {
    const memoizeText = useMemo(() => text, [text]);
    return (
        <StyledSpan
            selectColor={color || 'black'}
            selectSize={size || 'medium'}
            isBold={bold || false}
        >
            {memoizeText}
        </StyledSpan>
    );
});

export default DefaultText;

const StyledSpan = styled.span<{
    selectColor: ColorsType;
    selectSize: SizesType;
    isBold: boolean;
}>`
    display: flex;
    align-items: center;

    color: ${(props) => colors[props.selectColor]};
    font-size: ${(props) =>
        props.selectSize === 'small'
            ? '0.6rem'
            : props.selectSize === 'medium'
            ? '0.8rem'
            : '1.2rem'};
    font-weight: ${(props) => (props.isBold ? 700 : 'normal')};
`;
