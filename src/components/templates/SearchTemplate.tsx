import React from 'react';
import styled from 'styled-components';
const SearchTemplate = () => {
    return <Container>서치 템플릿</Container>;
};

export default SearchTemplate;
const Container = styled.div`
    display: flex;
    flex-direction: column;
    width: 100%;
    height: calc(100% - 6rem);
    justify-content: space-between;
    overflow: auto;
`;
