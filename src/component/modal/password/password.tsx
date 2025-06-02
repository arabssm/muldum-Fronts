
import React from 'react';
import { useSetRecoilState } from 'recoil';
import { whereismypasswordModalState } from '../../../atom/Modal';
import styled from '@emotion/styled';

import emailIcon from '../../../assets/login/email.svg';
import passwordIcon from '../../../assets/login/password.svg';

export default function LoginModal() {
  const setModalOpen = useSetRecoilState(whereismypasswordModalState);

  return (
    <>
      <Overlay onClick={() => setModalOpen(false)} />
      <ModalContainer>
        <Title>password</Title>

        <InputWrapper>
          <IconImg src={emailIcon} alt="이메일 아이콘" />
          <StyledInput
            type=""
            placeholder="이메일"
            autoFocus
          />
        </InputWrapper>

        <InputWrapper>
          <IconImg src={passwordIcon} alt="비밀번호 아이콘" />
          <StyledInput
            type="password"
            placeholder="비밀번호"
          />
        </InputWrapper>

        <LoginButton onClick={() => setModalOpen(false)}>
          로그인
        </LoginButton>
      </ModalContainer>
    </>
  );
}

const Overlay = styled.div`
  position: fixed;
  inset: 0;
  background-color: rgba(255, 255, 255, 0.6);
  backdrop-filter: blur(8px);
  z-index: 1000;
`;
const ModalContainer = styled.div`
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 380px;               
  background-color: #ffffff;
  border-radius: 16px;
  padding: 32px 24px;        
  box-shadow: 0 4px 16px rgba(0, 0, 0, 0.15);
  z-index: 1001;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const Title = styled.h2`
  margin: 0;
  font-size: 22px;
  font-weight: 600;
  color: #333333;
  margin-bottom: 24px;
`;

const InputWrapper = styled.div`
  position: relative;
  width: 100%;
  margin-bottom: 16px;
`;

const IconImg = styled.img`
  position: absolute;
  top: 50%;
  left: 12px;
  transform: translateY(-50%);
  width: 20px;
  height: 20px;
  opacity: 0.6;
`;
const StyledInput = styled.input`
  width: 100%;
  box-sizing: border-box;       
  height: 48px;
  padding: 0 12px 0 44px;      
  border: none;
  border-radius: 8px;
  background-color: #f0f0f0;
  font-size: 15px;
  color: #333333;
  outline: none;

  &::placeholder {
    color: #9e9e9e;
    font-size: 15px;
  }

  &:focus {
    background-color: #e8e8e8;
  }
`;

const LoginButton = styled.button`
  width: 100%;
  height: 48px;
  margin-top: 8px;
  background-color: #f2a161;
  color: #ffffff;
  border: none;
  border-radius: 8px;
  font-size: 16px;
  font-weight: 500;
  cursor: pointer;

  &:hover {
    background-color: #e59450;
  }
  &:active {
    background-color: #d88440;
  }
`;
