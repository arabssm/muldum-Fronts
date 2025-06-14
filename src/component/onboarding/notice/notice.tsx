
import React, { useState } from 'react';
import styled from '@emotion/styled';
import Header11 from './noticeHeader';
import Box from './box';

interface NoticeItem {
  id: number;
  title: string;
  created_at: string;
  teacher: string;
}

const mockData: NoticeItem[] = [
  {
    id: 1679,
    title: '4월 전공동아리 이벤트 안내',
    created_at: '2025-04-09T08:00:00Z',
    teacher: '최병준',
  },
  {
    id: 1678,
    title: '6월 중간발표회 안내',
    created_at: '2025-04-08T13:00:00Z',
    teacher: '최병준',
  },
];

export default function Notice() {
  const [search, setSearch] = useState('');
  const filtered = mockData.filter(n =>
    n.title.includes(search)
  );

  return (
    <>
      <Header11 value={search} onChange={setSearch} />
      <BoxContainer>
        {filtered.map(notice => (
          <Box
            key={notice.id}
            idx={notice.id}
            title={notice.title}
            date={notice.created_at}
          />
        ))}
      </BoxContainer>
    </>
  );
}

const BoxContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 12px;
`;
