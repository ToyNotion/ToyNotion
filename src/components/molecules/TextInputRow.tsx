import React, { HTMLInputTypeAttribute } from 'react';
import styled from 'styled-components';
import { colors } from '../../constant/colors';
import { InputValueTypes } from '../../types/defaultTypes';
import DefaultButton from '../atoms/DefaultButton';
import DefaultInput from '../atoms/DefaultInput';
import DefaultText from '../atoms/DefaultText';
interface TextInputRowProps {
    rowTitle: string;
    inputType: HTMLInputTypeAttribute;
    inputValue?: InputValueTypes;
    onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
    placeholder?: string | undefined;
    name?: string;
    checked?: string;
    checkOptions?: string[];
}
const TextInputRow = ({
    inputType,
    inputValue,
    onChange,
    rowTitle,
    placeholder,
    name,
    checked,
    checkOptions,
}: TextInputRowProps) => {
    return (
        <Wrapper>
            <DefaultText text={rowTitle} />
            <DefaultInput
                type={inputType}
                value={inputValue}
                name={name}
                placeholder={placeholder}
                onChange={onChange}
            />
            {checkOptions && (
                <OptionBox>
                    {checkOptions?.map((item) => (
                        <StyledLabel
                            htmlFor={name}
                            checked={checked}
                            item={item}
                        >
                            item
                        </StyledLabel>
                    ))}
                </OptionBox>
            )}
        </Wrapper>
    );
};

export default TextInputRow;

const Wrapper = styled.div`
    display: flex;
    height: 2rem;
    padding: 0 2rem;
    flex-direction: row;
    /* column-gap: 2rem; */
    justify-content: space-between;
    & {
        margin-bottom: 0.6rem;
    }
`;
const OptionBox = styled.div`
    display: flex;
    flex-direction: row;
`;

const StyledLabel = styled.label<{ checked?: string; item?: string }>`
    display: flex;
    padding: 0 1.6rem;
    align-items: center;
    border-radius: 4px;
    background-color: ${(props) =>
        props.checked === props.item ? colors.mint : colors.gray};
    color: ${(props) =>
        props.checked === props.item ? colors.white : colors.black};
    & + & {
        margin-left: 0.8rem;
    }
`;
