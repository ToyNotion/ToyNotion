import React from 'react';
import { useRecoilState } from 'recoil';
import styled from 'styled-components';
import { modalState } from '../../modules/recoilAtoms/modalAtom';

const Modal = () => {
    const [onModal, setOnModal] = useRecoilState(modalState);
    const handleMountModal = () => {
        setOnModal(false);
    };
    return (
        <Container isView={onModal}>
            <Background onClick={handleMountModal} />
            <Wrapper>bakground</Wrapper>
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
    height: 84%;
    width: 84%;
    background-color: white;
    border-radius: 10px;
`;
