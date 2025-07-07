import React from 'react';
import { useNavigate } from 'react-router-dom';
import styled from '@emotion/styled';

interface BoxProps {
  idx: number;
  title: string;
  date: string; // ISO 문자열
}



export default function Box({ idx, title, date }: BoxProps) {
  const d = new Date(date);
  const yy = d.getFullYear();
  const mm = String(d.getMonth() + 1).padStart(2, '0');
  const dd = String(d.getDate()).padStart(2, '0');
  const formatted = `${yy}-${mm}-${dd}`;
  const navigate = useNavigate();
  return (
    <Container onClick={() => navigate(`/notice/${idx}`)}>
      <Left>
        <Badge>신규</Badge>
        <Title>{title}</Title>
      </Left>
      <DateText title={formatted}>{formatted}</DateText>
    </Container>
  );
}


const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  cursor: pointer;
  background: #fff;
  border-radius: 8px;
`;

const Left = styled.div`
  display: flex;
  align-items: center;
  gap: 12px;
  flex: 1;               
`;

const Badge = styled.span`
  background-color: #FF9B62;
  color: #fff;
  padding: 6px 12px;   
  font-size: 12px;       /* 적당한 크기 */
  font-weight: 500;
  border-radius: 16px;
  line-height: 1;        /* 텍스트가 중간에 위치하도록 */
`;

const Title = styled.h2`
  margin: 0;
  font-size: 16px;
  color: #1E1E1E;
  line-height: 1.4;      /* 두 줄 이상일 때도 읽기 좋게 */
  word-break: keep-all;  /* 한글 단어 잘리지 않도록 */
  overflow-wrap: break-word; 
  flex-shrink: 1;        /* 길어지면 줄바꿈 */
`;

const DateText = styled.div`
  max-width: 120px;        /* 원하는 칸 너비 */
  white-space: nowrap;     /* 줄바꿈 금지 */
  overflow: hidden;        /* 넘치는 텍스트 숨김 */
  text-overflow: ellipsis; /* 오른쪽 말줄임 */
  text-align: left;        /* 왼쪽부터 채워짐 */
  font-size: 14px;
  color: #909090;
`;