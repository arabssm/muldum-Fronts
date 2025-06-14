import React, { useState, useEffect } from 'react';
import { useSetRecoilState } from 'recoil';
import { whereismypasswordModalState } from '../../../atom/Modal';
import { useNavigate } from 'react-router-dom';  
import styled from '@emotion/styled';

import emailIcon from '../../../assets/login/email.svg';
import passwordIcon from '../../../assets/login/password.svg';
import checkIcon from '../../../assets/login/ check.svg';
import doneIcon from '../../../assets/login/hh.svg';

export default function LoginModal() {
  const setModalOpen = useSetRecoilState(whereismypasswordModalState);
  const navigate = useNavigate(); 
  const [step, setStep] = useState<number>(1);
  const [count, setCount] = useState<number>(5);

  useEffect(() => {
    if (step !== 2) return;

    const timer = setInterval(() => {
      setCount(c => c - 1);
    }, 1000);

    return () => clearInterval(timer);
  }, [step]);

  useEffect(() => {
    if (step === 2 && count <= 0) {
      setModalOpen(false);
      navigate('/'); 
    }
  }, [count, step, setModalOpen, navigate]);

  const goToStep2 = () => {
    setStep(2);
  };

  const closeModal = () => {
    setModalOpen(false);
    navigate('/');
  };

  return (
    <>
      <Overlay onClick={closeModal} />
      <ModalContainer>
        {step === 1 ? (
          <>
            <Title>비밀번호 변경</Title>
            <InputWrapper>
              <IconImg src={emailIcon} alt="이메일 아이콘" />
              <StyledInput type="email" placeholder="이메일" autoFocus />
            </InputWrapper>
            <InputWrapper>
              <IconImg src={checkIcon} alt="인증 아이콘" />
              <StyledInput type="text" placeholder="인증번호 입력" />
            </InputWrapper>
            <InputWrapper>
              <IconImg src={passwordIcon} alt="비밀번호 아이콘" />
              <StyledInput type="password" placeholder="새 비밀번호" />
            </InputWrapper>
            <InputWrapper>
              <IconImg src={passwordIcon} alt="비밀번호 확인 아이콘" />
              <StyledInput type="password" placeholder="비밀번호 확인" />
            </InputWrapper>
            <LoginButton onClick={goToStep2}>
              비밀번호 변경
            </LoginButton>
          </>
        ) : (
          <>
            <DoneIcon src={doneIcon} alt="완료 아이콘" />
            <DoneTitle>비밀번호 변경이 완료되었습니다</DoneTitle>
            <DoneMessage>
              다른 곳을 누르거나 {count}초 후에 메인화면으로 이동합니다
            </DoneMessage>
            <Countdown>{count}</Countdown>
          </>
        )}
      </ModalContainer>
    </>
  );
}


const Overlay = styled.div`
  position: fixed;
  inset: 0;
  background-color: rgba(255,255,255,0.6);
  backdrop-filter: blur(8px);
  z-index: 1000;
`;

const ModalContainer = styled.div`
  position: fixed;
  top: 50%; left: 50%;
  transform: translate(-50%,-50%);
  width: 380px;
  background: #fff;
  border-radius: 16px;
  padding: 32px 24px;
  box-shadow: 0 4px 16px rgba(0,0,0,0.15);
  z-index: 1001;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const Title = styled.h2`
  margin:0 0 24px;
  font-size:22px; font-weight:600; color:#333;
`;

const InputWrapper = styled.div`
  position: relative;
  width:100%;
  margin-bottom:16px;
`;

const IconImg = styled.img`
  position:absolute;
  top:50%; left:12px;
  transform: translateY(-50%);
  width:20px; height:20px;
  opacity:0.6;
`;

const StyledInput = styled.input`
  width:100%;
  box-sizing:border-box;
  height:48px;
  padding:0 12px 0 44px;
  border:none;
  border-radius:8px;
  background:#f0f0f0;
  font-size:15px; color:#333;
  outline:none;
  &::placeholder { color:#9e9e9e; }
  &:focus { background:#e8e8e8; }
`;

const LoginButton = styled.button`
  width:100%;
  height:48px;
  margin-top:8px;
  background:#f2a161;
  color:#fff;
  border:none;
  border-radius:8px;
  font-size:16px;
  font-weight:500;
  cursor:pointer;
  &:hover { background:#e59450; }
  &:active{ background:#d88440; }
`;

const DoneIcon = styled.img`
  width:64px; height:64px;
  margin-bottom:16px;
`;

const DoneTitle = styled.h3`
  font-size:20px; font-weight:600; color:#1e1e1e;
  text-align:center; margin:0 0 12px;
`;

const DoneMessage = styled.p`
  font-size:14px; color:#999;
  text-align:center; margin:0; line-height:1.5;
`;

const Countdown = styled.div`
  font-size:24px; font-weight:600; color:#ddd;
  margin-top:16px;
`;
