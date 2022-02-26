import React from 'react';
import styled from 'styled-components';

interface BackgroundImageProps {
    isUpdateMode: boolean;
    profileImg: string | null;
    onClick: () => void;
}

const ProfileImage = ({
    profileImg,
    onClick,
    isUpdateMode,
}: BackgroundImageProps) => {
    return isUpdateMode ? (
        <>
            <ImageWrapper image={profileImg}>
                <FileUploaderBox htmlFor="uploader" />
            </ImageWrapper>
            <input
                type={'file'}
                id="uploader"
                style={{ display: 'none' }}
                onClick={() => {
                    console.log('fdf');
                }}
            />
        </>
    ) : (
        <ImageWrapper image={profileImg} onClick={onClick} />
    );
};

export default ProfileImage;

const ImageWrapper = styled.div<{ image: string | null }>`
    display: flex;
    flex: 1;
    background: url(${(props) => props.image}) no-repeat center center;
    width: 100%;
    background-size: cover;
    cursor: pointer;
`;

const FileUploaderBox = styled.label`
    height: 100%;
    width: 100%;
    background: transparent;
`;
