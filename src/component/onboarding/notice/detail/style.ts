import styled from '@emotion/styled';

export const Wrapper = styled.div`
    height: 100vh;
    position: fixed;
    height: 100vh;
`;

export const Up = styled.div`
    display: flex;
    flex-direction: column;
    gap: 8px; 
    & > * {
        margin: 0; 
    }
`;

export const ContentArea = styled.div`
    margin-left: 240px;
    width: calc(100% - 240px);
    display: flex;
    flex-direction: column;
    overflow: hidden;
    padding: 0px 5%;
`;

export const Title =styled.h1`
    color: #000000;
`;

export const Subtitle=styled.h5`
    color: #B2B2B2;
`;

export const Body = styled.main`
    flex: 1;
    background: #FFFFFF;
    overflow-y: auto;
    max-width: 800px;
`;

export const NotFound = styled.div`
    padding: 32px;
    color: #999;
    text-align: center;
`;