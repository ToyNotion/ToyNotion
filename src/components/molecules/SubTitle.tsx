import React from 'react';
import styled from 'styled-components';
import { colors } from '../../constant/colors';
import DefaultText from '../atoms/DefaultText';
interface LocalProps {
    text: string;
}
const SubTitle = ({ text }: LocalProps) => {
    return (
        <Wrapper>
            <DefaultText text={text} bold color="navy" />
        </Wrapper>
    );
};

export default SubTitle;

const Wrapper = styled.div`
    padding: 1rem;
    border-bottom: 1px solid ${colors.gray};
    & > span {
        font-size: 15px;
    }
`;
