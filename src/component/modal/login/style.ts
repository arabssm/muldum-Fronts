import styled from '@emotion/styled';

export const Overlay = styled.div`
    position: fixed;
    inset: 0;
    background-color: rgba(0, 0, 0, 0.26);
    backdrop-filter: blur(1px);
    z-index: 1000;
`;

export const ModalContainer = styled.div`
    position: fixed;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    width: 22%;
    padding: 3%;
    background-color: #ffffff;
    border-radius: 1.5rem;
    z-index: 1001;
    display: flex;
    flex-direction: column;
    align-items: center;
`;

export const Title = styled.h2`
    margin: 0;
    font-size: 1.6rem;
    font-weight: 600;
    color: #333333;
    margin-bottom: 2rem;
`;

export const InputWrapper = styled.div`
    position: relative;
    width: 100%;
    margin-bottom: 1rem;
`;

export const IconImg = styled.img`
    position: absolute;
    top: 50%;
    left: 0.75rem;
    transform: translateY(-50%);
    width: 0.75rem;
    height: 0.75rem;
    opacity: 0.6;
`;

export const StyledInput = styled.input`
    width: 100%;
    box-sizing: border-box;
    height: 3rem;
    padding: 0 0.75rem 0 2.75rem;
    border: none;
    border-radius: 0.5rem;
    background-color: #FAFAFA;
    font-size: 1rem;
    color: #1E1E1E;
    outline: none;

    &::placeholder {
        color: #B2B2B2;
        font-size: 1rem;
    }

    &:focus {
        background-color: #F3F2F2;
    }
`;

export const LoginButton = styled.button`
    width: 80%;
    height: 3rem;
    margin-top: 1.5rem;
    background-color: #FF9B62;
    color: #ffffff;
    border: none;
    border-radius: 2rem;
    font-size: 1rem;
    font-weight: 500;
    cursor: pointer;

    &:hover {
        background-color: #FF8641;
    }
`;

export const GoPassword = styled.div`
    margin-top: 0.75rem;
`;

export const PasswordLink = styled.a`
    font-size: 0.875rem;
    color: #D1D1D1;
    cursor: pointer;
    text-decoration: none;

    &:hover {
        color: #707070;
        text-decoration: underline;
    }
`;
