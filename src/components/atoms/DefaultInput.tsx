import React, { HTMLInputTypeAttribute, InputHTMLAttributes } from 'react';
import styled from 'styled-components';
import { colors } from '../../constant/colors';

interface LocalProps {
    type: HTMLInputTypeAttribute;
    value: string;
    onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
    placeholder?: string;
}
const DefaultInput = ({ type, onChange, value, placeholder }: LocalProps) => {
    return (
        <StyledInput
            type={type}
            value={value}
            onChange={onChange}
            placeholder={placeholder}
        />
    );
};

export default DefaultInput;

const StyledInput = styled.input`
    display: flex;
    flex: 1;
    outline: none;
    align-items: center;
    padding: 10px 8px;
    border: 1px solid ${colors.gray};
    border-radius: 4px;
    &:focus {
        border: 2px solid ${colors.violet};
    }
`;
