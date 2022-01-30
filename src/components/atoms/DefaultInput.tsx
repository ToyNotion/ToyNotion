import React, { HTMLInputTypeAttribute, useEffect } from 'react';
import styled from 'styled-components';
import { colors } from '../../constant/colors';
import { InputValueTypes } from '../../types/defaultTypes';

interface LocalProps {
    type: HTMLInputTypeAttribute;
    value?: InputValueTypes;
    onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
    placeholder?: string;
    name?: string;
    checked?: boolean;
    onBlur?: () => Promise<void>;
    inputRef?: React.RefObject<HTMLInputElement>;
}
const DefaultInput = ({
    type,
    onChange,
    value,
    name,
    placeholder,
    onBlur,
    inputRef,
}: LocalProps) => {
    useEffect(() => {
        if (inputRef) inputRef?.current?.focus();
    }, [inputRef]);
    const funcString = (data: string) => {
        let tempYear = data.split('-');
        let applyYear = Number(tempYear[0]) > 1900 ? Number(tempYear[0]) : 1900;
        tempYear[0] = JSON.stringify(applyYear);
        let temp = '';
        tempYear.map(
            (item, index) => (temp += `${item}${index !== 2 ? '-' : ''}`),
        );
        return temp;
    };
    return (
        <StyledInput
            type={type}
            name={name}
            value={type === 'date' ? funcString(value as string) : value}
            onChange={onChange}
            placeholder={placeholder}
            onBlur={onBlur}
            min={'1900-01-01'}
            max={'2100-12-31'}
            ref={inputRef}
            maxLength={name === 'userHp' ? 13 : name === 'userBirth' ? 10 : 30}
        />
    );
};

export default DefaultInput;

const StyledInput = styled.input<{
    type: HTMLInputTypeAttribute;
}>`
    display: ${(props) => (props.type === 'radio' ? 'none' : 'flex')};
    outline: none;
    width: 10rem;
    align-items: center;
    padding: 10px 8px;
    border: 1px solid ${colors.gray};
    border-radius: 4px;
    background: transparent;
    &:focus {
        border: 2px solid ${colors.violet};
    }
`;
