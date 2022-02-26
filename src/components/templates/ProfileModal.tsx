import React, { useCallback, useState } from 'react';
import { useRecoilState, useRecoilValue } from 'recoil';
import styled from 'styled-components';
import { colors } from '../../constant/colors';
import { modalState, userIdState } from '../../modules/recoilAtoms/modalAtom';
import BackgroundImage from '../atoms/BackgroundImage';
import ProfileUserInfo from '../molecules/ProfileUserInfo';
import winter from './겨울.jpg';

const ProfileModal = () => {
    const [onModal, setOnModal] = useRecoilState<boolean>(modalState);
    const [isViewImage, setIsViewImage] = useState<boolean>(false);
    const userId = useRecoilValue<number | null>(userIdState);
    const handleMountModal = useCallback(() => {
        setOnModal(false);
    }, [setOnModal]);

    const onViewFullImage = () => {
        setIsViewImage((isViewImage) => !isViewImage);
    };

    return (
        <Container isView={onModal}>
            {isViewImage ? (
                <FullImage image={winter} onClick={onViewFullImage} />
            ) : (
                <>
                    <Background onClick={handleMountModal} />
                    <Wrapper>
                        <BackgroundImage
                            backgroundImg={winter}
                            onViewFullImage={onViewFullImage}
                        />
                        <ProfileUserInfo userId={userId} />
                    </Wrapper>
                </>
            )}
        </Container>
    );
};

export default ProfileModal;

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
    background-color: #000000ac;
`;

const Wrapper = styled.div`
    position: absolute;
    display: flex;
    flex: 1;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    height: 80%;
    width: 74%;
    border: 1px solid gray;
    background-color: white;
    border-radius: 10px;
    overflow: hidden;
`;
const FullImage = styled.div<{ image: string | null }>`
    position: absolute;
    display: flex;
    color: white;
    flex: 1;
    height: 100%;
    background: url(${(props) => props.image}) no-repeat center center;
    background-color: #242424;
    overflow: hidden;
    width: 100%;
    opacity: 1;
    background-size: contain;
    cursor: pointer;
`;
