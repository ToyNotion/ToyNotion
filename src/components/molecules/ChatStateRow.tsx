import React from 'react';
import { useRecoilState } from 'recoil';
import styled from 'styled-components';
import { colors } from '../../constant/colors';
import { modalState } from '../../modules/recoilAtoms/modalAtom';
import { ChatStatusTypes } from '../../types/MainTypes';
import DefaultText from '../atoms/DefaultText';

const ChatStateRow = ({ name, statusMessage }: ChatStatusTypes) => {
    const [onModal, setOnModal] = useRecoilState(modalState);
    const handleClick = (e: React.MouseEvent<HTMLDivElement>, name: string) => {
        e.preventDefault();
        e.stopPropagation();
        alert(name);
    };

    return (
        <Container
            onClick={(e: React.MouseEvent<HTMLDivElement>) => setOnModal(true)}
        >
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
    cursor: pointer;
`;
