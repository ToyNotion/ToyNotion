import React, { useCallback } from 'react';
import { useRecoilState, useRecoilValue } from 'recoil';
import styled from 'styled-components';
import { modalState, userIdState } from '../../modules/recoilAtoms/modalAtom';

const Modal = () => {
    const [onModal, setOnModal] = useRecoilState<boolean>(modalState);
    const userId = useRecoilValue<number | null>(userIdState);
    const handleMountModal = useCallback(() => {
        setOnModal(false);
    }, [setOnModal]);

    return (
        <Container isView={onModal}>
            <Background onClick={handleMountModal} />
            <Wrapper>{userId}</Wrapper>
        </Container>
    );
};

export default Modal;
const Container = styled.div<{ isView: boolean }>`
    display: ${(props) => (props.isView ? 'flex' : 'none')};
    position: absolute;
    width: 100%;
    height: 100%;
    justify-content: center;
    align-items: center;
    z-index: 1;
`;
const Background = styled.div`
    position: absolute;
    height: 100%;
    width: 100%;
    background-color: black;
    opacity: 0.5;
`;

const Wrapper = styled.div`
    position: absolute;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    height: 80%;
    width: 76%;
    background-color: white;
    border-radius: 10px;
`;
