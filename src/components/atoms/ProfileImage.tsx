import React from 'react';
import styled from 'styled-components';

interface BackgroundImageProps {
    profileImg: string | null;
    onClick: () => void;
}

const ProfileImage = ({ profileImg, onClick }: BackgroundImageProps) => {
    return <ImageWrapper image={profileImg} onClick={onClick} />;
};

export default ProfileImage;

const ImageWrapper = styled.div<{ image: string | null }>`
    display: flex;
    flex: 1;
    background: url(${(props) => props.image}) no-repeat center center;
    width: 100%;
    opacity: 0.9;
    background-size: cover;
    cursor: pointer;
`;
