import React, { useState, useEffect, useRef } from 'react';
import styled from '@emotion/styled';

export interface Request {
  no: string;
  title: string;
  qty: number;
  status: string;
  reason: string;
}

interface Props {
  request: Request;
  onReasonChange: (no: string, newReason: string) => void;
}

export default function Box({ request, onReasonChange }: Props) {
  const [isEditing, setIsEditing] = useState(false);
  const [reason, setReason] = useState(request.reason);
  const textareaRef = useRef<HTMLTextAreaElement>(null);
  useEffect(() => {
    if (isEditing && textareaRef.current) {
      textareaRef.current.focus();
    }
  }, [isEditing]);

  const finishEdit = () => {
    setIsEditing(false);
    onReasonChange(request.no, reason.trim());
  };

  return (
    <Card>
      <CardRow>
        <Cell flex="0 0 40px">{request.no}</Cell>
        <Cell flex="1">{request.title}</Cell>
        <Cell flex="0 0 60px">수량 {request.qty}</Cell>
        <Cell flex="0 0 100px">{request.status}</Cell>
      </CardRow>
      <ReasonRow onClick={() => !isEditing && setIsEditing(true)}>
        {isEditing ? (
          <ReasonTextarea
            ref={textareaRef}
            value={reason}
            onChange={e => setReason(e.target.value)}
            onBlur={finishEdit}
          />
        ) : (
          reason || '구매 사유를 입력해 주세요'
        )}
      </ReasonRow>
    </Card>
  );
}

const Card = styled.div`
  background: #fff;
  border: 1px solid #eee;
  width: 100%;
  border-radius: 12px;
  margin-bottom: 16px;
  overflow: hidden;
`;

const CardRow = styled.div`
  display: flex;
  align-items: center;
  padding: 8px 16px;
  border-bottom: 1px solid #eee;
`;

const Cell = styled.div<{ flex: string }>`
  flex: ${({ flex }) => flex};
  font-size: 14px;
  color: #333;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
`;

const ReasonRow = styled.div`
  padding: 12px 16px;
  background: #fafafa;
  color: #555;
  cursor: text;
`;

const ReasonTextarea = styled.textarea`
  width: 100%;
  border: none;
  resize: none;
  background: transparent;
  font-size: 14px;
  line-height: 1.5;
  outline: none;
  padding: 0;
`;
