import React, { HTMLInputTypeAttribute, SetStateAction } from 'react';
import styled from 'styled-components';
import { colors } from '../../constant/colors';
import { InputValueTypes } from '../../types/defaultTypes';
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
    onCheckId?: () => Promise<void>;
    isPossible?: boolean;
    setIsPossible?: React.Dispatch<SetStateAction<boolean>>;
    inputRef?: React.RefObject<HTMLInputElement>;
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
    onCheckId,
    isPossible,
    inputRef,
}: TextInputRowProps) => {
    return (
        <Wrapper>
            <DefaultText
                text={rowTitle}
                color={
                    name === 'userId'
                        ? isPossible === false
                            ? 'red'
                            : 'black'
                        : 'black'
                }
            />
            {!checkOptions ? (
                <DefaultInput
                    type={inputType}
                    value={inputValue}
                    name={name}
                    placeholder={placeholder}
                    onChange={onChange}
                    onBlur={onCheckId}
                    inputRef={inputRef}
                />
            ) : (
                <OptionBox>
                    {checkOptions?.map((item, index) => {
                        return (
                            <React.Fragment key={item}>
                                <StyledLabel
                                    htmlFor={item}
                                    checked={checked}
                                    item={item}
                                >
                                    <DefaultText
                                        text={item}
                                        size="small"
                                        bold={true}
                                    />
                                </StyledLabel>
                                <RadioInput
                                    type={'radio'}
                                    name={name}
                                    id={item}
                                    value={item}
                                    checked={checked === item ? true : false}
                                    onChange={onChange}
                                />
                            </React.Fragment>
                        );
                    })}
                </OptionBox>
            )}
        </Wrapper>
    );
};

export default TextInputRow;

const Wrapper = styled.div`
    display: flex;
    height: 2rem;
    flex-direction: row;
    justify-content: space-between;
    & {
        margin-bottom: 1.2rem;
    }
`;
const OptionBox = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: center;
`;

const StyledLabel = styled.label<{ checked?: string; item?: string }>`
    display: flex;
    padding: 1rem 2rem;
    align-items: center;
    border-radius: 2rem;
    background-color: ${(props) =>
        props.checked === props.item ? colors.violet : colors.gray};
    & > span {
        color: ${(props) =>
            props.checked === props.item ? colors.white : colors.black};
    }
    margin: 0 0.2rem;
    cursor: pointer;
`;

const RadioInput = styled.input`
    display: none;
`;
