import React from 'react';
import { useNavigate } from 'react-router-dom';
import styled from '@emotion/styled';

interface BoxProps {
  idx: number;
  title: string;
  date: string; // ISO 문자열
}

// ISO → "YYYY-MM-DD 오전/오후 H:MM" 포맷
const formatDate = (iso: string) => {
  const d = new Date(iso);
  const Y = d.getFullYear();
  const M = String(d.getMonth()+1).padStart(2,'0');
  const D = String(d.getDate()).padStart(2,'0');
  let h = d.getHours();
  const m = String(d.getMinutes()).padStart(2,'0');
  const ampm = h >= 12 ? '오후' : '오전';
  if (h === 0) h = 12;
  else if (h > 12) h -= 12;
  return `${Y}-${M}-${D} ${ampm} ${h}:${m}`;
};

export default function Box({ idx, title, date }: BoxProps) {
  const navigate = useNavigate();
  return (
    <Container onClick={() => navigate(`/notice/${idx}`)}>
      <Left>
        <Badge>신규</Badge>
        <Title>{title}</Title>
      </Left>
      <DateText>{formatDate(date)}</DateText>
    </Container>
  );
}

// ─── styled ─────────────────────────────────

const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 12px 16px;
  cursor: pointer;
  background: #fff;
  border-radius: 8px;
`;

const Left = styled.div`
  display: flex;
  align-items: center;
  gap: 12px;
  flex: 1;               /* 제목이 오른쪽 영역 침범하지 않게 */
`;

const Badge = styled.span`
  background-color: #FF9B62;
  color: #fff;
  padding: 4px 10px;     /* width 대신 padding으로 크기 조절 */
  font-size: 12px;       /* 적당한 크기 */
  font-weight: 500;
  border-radius: 10px;
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

const DateText = styled.span`
  font-size: 14px;
  color: #666;
  white-space: nowrap;   /* 날짜가 잘리지 않도록 */
  margin-left: 16px;
`;
