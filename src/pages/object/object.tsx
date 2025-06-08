import React, { useState } from 'react';
import Sidebar from '../../component/sibebar/sidebar';
import styled from '@emotion/styled';
import Box from '../../component/object/box';
import type { Request } from '../../component/object/box';

export default function Object() {
  const remaining = 200000;
  const used = 120031;
  const [item, setItem] = useState('');
  const [price, setPrice] = useState('');
  const [link, setLink] = useState('');
  const [qty, setQty] = useState(1);
  const [reason, setReason] = useState('');


  const [requests, setRequests] = useState<Request[]>([
    {
      no: '01',
      title: 'AMD 라이젠7 5세대 7800X3D 고급형 멀티팩 정품 국내정식 유통제품',
      qty: 1,
      status: '승인대기중',
      reason: '총학생회 승인 후 바로 구매 예정입니다.',
    },
    {
      no: '02',
      title: 'USB-C 케이블 1m, 2개입',
      qty: 2,
      status: '승인완료',
      reason: '실험실 장비 연결용으로 필요합니다.',
    },
    {
        no: '02',
        title: 'USB-C 케이블 1m, 2개입',
        qty: 2,
        status: '승인완료',
        reason: '실험실 장비 연결용으로 필요합니다.',
      },
      {
        no: '02',
        title: 'USB-C 케이블 1m, 2개입',
        qty: 2,
        status: '승인완료',
        reason: '실험실 장비 연결용으로 필요합니다.',
      },
  ]);

  const handleReasonChange = (no: string, newReason: string) => {
    setRequests(rs =>
      rs.map(r => (r.no === no ? { ...r, reason: newReason } : r))
    );
  };
  const handleAdd = () => {
    if (!item.trim() || reason.trim().length < 10) {
      alert('물품명과 사유(10자 이상)를 입력하세요.');
      return;
    }
    const newNo = String(requests.length + 1).padStart(2, '0');
    const newReq: Request = {
      no: newNo,
      title: item,
      qty,
      status: '승인대기중',
      reason,
    };
    setRequests([...requests, newReq]);
    setItem('');
    setPrice('');
    setLink('');
    setQty(1);
    setReason('');
  };

  return (
    <PageWrapper>
      <Sidebar />
      <Container>
        <Main>
          <Header>
            <Titles>
              <h1>전공동아리 물품신청</h1>
              <h3>전공동아리에 사용할 물품을 신청해요</h3>
            </Titles>
            <BudgetBox>
              <span>남은예산</span>
              <strong>{remaining.toLocaleString()}</strong>
              <Used>-{used.toLocaleString()}</Used>
            </BudgetBox>
          </Header>
          <FormSection>
            <FormSectionHeader>
              <SectionTitle>물품신청</SectionTitle>
              <AddButton onClick={handleAdd}>추가하기</AddButton>
            </FormSectionHeader>
            <FormRow>
              <Label>구입물품</Label>
              <Input
                placeholder="구입할 물품을 입력해 주세요"
                value={item}
                onChange={e => setItem(e.target.value)}
              />
              <Label>가격</Label>
              <Input
                placeholder="가격을 입력해 주세요"
                value={price}
                onChange={e => setPrice(e.target.value)}
              />
              <Label>수량</Label>
              <QtyWrapper>
                <QtyButton onClick={() => setQty(q => Math.max(1, q - 1))}>–</QtyButton>
                <Qty>{qty}</Qty>
                <QtyButton onClick={() => setQty(q => q + 1)}>+</QtyButton>
              </QtyWrapper>
            </FormRow>
            <FormRow>
              <Label>물품 링크</Label>
              <FullWidthInput
                placeholder="구입할 물품의 링크를 입력해 주세요"
                value={link}
                onChange={e => setLink(e.target.value)}
              />
            </FormRow>
            <FormRow>
              <Label>신청 사유</Label>
              <TextArea
                placeholder="신청 사유를 10자 이상 입력해 주세요"
                value={reason}
                onChange={e => setReason(e.target.value)}
              />
            </FormRow>
          </FormSection>
          <ListSection>
            <ListSectionHeader>
              <SectionTitle>우리 팀이 신청한 물건 확인하기</SectionTitle>
              <ApplyButton>신청하기</ApplyButton>
            </ListSectionHeader>
            <ListWrapper>
              {requests.map(r => (
                <Box
                  key={r.no}
                  request={r}
                  onReasonChange={handleReasonChange}
                />
              ))}
            </ListWrapper>
          </ListSection>
        </Main>

        <Footer>
          <FooterLink>물품 신청 가이드 보기 &gt;</FooterLink>
          <FooterLink>전체보기</FooterLink>
        </Footer>
      </Container>
    </PageWrapper>
  );
}


const PageWrapper = styled.div`
  display: flex;
  height: 100vh;
`;

const Container = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  overflow: hidden;
  width: calc(100% - 240px);
  margin-left: 220px;
  padding: 32px 5%;
  box-sizing: border-box;
`;

const Main = styled.div`
  flex: 1;
  display: flex;
   flex-direction: column;
   overflow: hidden;
   min-height: 0;  
`;

const Header = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: flex-end;
  margin-bottom: 32px;
`;

const Titles = styled.div`
  h1 { margin: 0; font-size: 28px; font-weight: bold; }
  h3 { margin: 4px 0 0; font-size: 16px; color: #666; }
`;

const BudgetBox = styled.div`
  text-align: right;
  background: #fff;
  padding: 12px 16px;
  border-radius: 12px;
  span { display: block; font-size: 14px; color: #999; }
  strong { display: block; font-size: 20px; color: #333; margin-top: 4px; }
`;

const Used = styled.span`
  display: block;
  font-size: 14px;
  color: #ff4d4f;
  margin-top: 2px;
`;

const SectionTitle = styled.h2`
  font-size: 18px;
  font-weight: 600;
  margin: 0;
`;

const FormSection = styled.div`
  background: #fff;
  border-radius: 12px;
  padding: 24px;
  margin-bottom: 32px;
`;

const FormSectionHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 16px;
`;

const AddButton = styled.button`
  background: #FF9B62;
  color: #fff;
  border: none;
  padding: 0 20px;
  height: 40px;
  border-radius: 20px;
  font-size: 14px;
  cursor: pointer;
`;

const FormRow = styled.div`
  display: flex;
  align-items: center;
  gap: 16px;
  margin-bottom: 16px;
`;

const Label = styled.label`
  flex: 0 0 80px;
  font-size: 14px;
  color: #333;
`;

const Input = styled.input`
  flex: 1 1 200px;
  height: 40px;
  padding: 0 12px;
  border: 1px solid #ddd;
  border-radius: 8px;
  font-size: 14px;
`;

const FullWidthInput = styled(Input)`
  flex: 1 1 100%;
`;

const QtyWrapper = styled.div`
  display: flex;
  align-items: center;
  border: 1px solid #ddd;
  border-radius: 8px;
  overflow: hidden;
`;

const QtyButton = styled.button`
  width: 32px;
  height: 32px;
  background: #f0f0f0;
  border: none;
  font-size: 18px;
  cursor: pointer;
`;

const Qty = styled.div`
  width: 40px;
  text-align: center;
  font-size: 14px;
`;

const TextArea = styled.textarea`
  flex: 1;
  height: 100px;
  padding: 12px;
  border: 1px solid #ddd;
  border-radius: 8px;
  font-size: 14px;
  resize: vertical;
`;

const ListSection = styled.div`
  display: flex;
  flex-direction: column;
  flex: 1;
  margin-bottom: 32px;
  min-height: 0;   
`;

const ListSectionHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 16px;
`;

const ApplyButton = styled.button`
  background: #FF9B62;
  color: #fff;
  border: none;
  padding: 0 20px;
  height: 36px;
  border-radius: 18px;
  font-size: 14px;
  cursor: pointer;
`;

const ListWrapper = styled.div`
  flex: 1;
  overflow-y: auto;
  padding-right: 8px;
`;

const Footer = styled.div`
  flex-shrink: 0;
  display: flex;
  justify-content: space-between;
  border-top: 1px solid #eee;
  padding-top: 16px;
  font-size: 14px;
  color: #909090;
`;

const FooterLink = styled.a`
  text-decoration: none;
  &:hover { text-decoration: underline; }
`;
