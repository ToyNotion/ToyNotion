import React from 'react';
import styled from 'styled-components';

interface BackgroundImageProps {
    backgroundImg: string | null;
    onViewFullImage: () => void;
}

const BackgroundImage = ({
    backgroundImg,
    onViewFullImage,
}: BackgroundImageProps) => {
    return <ImageWrapper image={backgroundImg} onClick={onViewFullImage} />;
};

export default BackgroundImage;

const ImageWrapper = styled.div<{ image: string | null }>`
    display: flex;
    flex: 1;
    background: url(${(props) => props.image}) no-repeat center center;
    width: 100%;
    opacity: 0.9;
    background-size: cover;
    cursor: pointer;
`;
