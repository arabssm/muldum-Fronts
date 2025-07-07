import { useState, useEffect } from 'react';
import styled from '@emotion/styled';
import Box from './box';
import Sidebar from '../../component/sibebar/sidebar';
import Pagination from './Pagination';
import Search from '../../assets/onboarding/search.svg';

interface NoticeItem {
  idx: number;
  title: string;
  date: string;
}

const data = [
  { idx: 1, title: '전공동아리 중간발표회 부스 운영 절차', date: '2025-07-21' },
  { idx: 2, title: '전공동아리 중간발표회 부스 운영 절차', date: '2025-07-21' },
  { idx: 3, title: '전공동아리 중간발표회 부스 운영 절차', date: '2025-07-21' },
  { idx: 4, title: '전공동아리 중간발표회 부스 운영 절차', date: '2025-07-21' },
  { idx: 5, title: '전공동아리 중간발표회 부스 운영 절차', date: '2025-07-21' },
  { idx: 6, title: '전공동아리 중간발표회 부스 운영 절차', date: '2025-07-21' },
  { idx: 7, title: '전공동아리 중간발표회 부스 운영 절차', date: '2025-07-21' },
  { idx: 8, title: '전공동아리 중간발표회 부스 운영 절차', date: '2025-07-21' },
  { idx: 9, title: '전공동아리 중간발표회 부스 운영 절차', date: '2025-07-21' },
  { idx: 10, title: '전공동아리 중간발표회 부스 운영 절차', date: '2025-07-21' },
  { idx: 11, title: '전공동아리 중간발표회 부스 운영 절차', date: '2025-07-21' },
  { idx: 12, title: '전공동아리 중간발표회 부스 운영 절차', date: '2025-07-21' },
  { idx: 13, title: '전공동아리 중간발표회 부스 운영 절차', date: '2025-07-21' },
];

export default function Notice() {
  const [notices, setNotices] = useState<NoticeItem[]>([]);
  const [search, setSearch] = useState('');
  const [page, setPage] = useState(1);

  useEffect(() => {
    setNotices(data);
  }, []);

  const filtered = notices.filter((item) =>
    item.title.toLowerCase().includes(search.toLowerCase())
  );

  const totalPages = Math.ceil(filtered.length / 10);
  const startIdx = (page - 1) * 10;
  const paginated = filtered.slice(startIdx, startIdx + 10);

  const handlePageChange = (newPage: number) => {
    if (newPage >= 1 && newPage <= totalPages) {
      setPage(newPage);
    }
  };

  return (
    <Wrapper>
      <Sidebar />
      <Content>
        <TitleWrapper>
          <PageTitle>공지사항</PageTitle>
          <SearchBar>
            <img src={Search} alt="Search" />
            <SearchInput
              type="text"
              placeholder="공지사항 검색"
              value={search}
              onChange={(e) => {
                setSearch(e.target.value);
                setPage(1);
              }}
            />
          </SearchBar>
        </TitleWrapper>

        {paginated.map((item) => (
          <Box key={item.idx} idx={item.idx} title={item.title} date={item.date} />
        ))}

        <Pagination
          currentPage={page}
          totalPages={totalPages}
          onPageChange={handlePageChange}
        />
      </Content>
    </Wrapper>
  );
}

const Wrapper = styled.div`
  display: flex;
  width: 90%;
  min-height: 100vh;
`;

const Content = styled.div`
  flex: 1;
  padding: 2% 4%;
`;

const TitleWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 1.5rem;  
  width: 100%;
`;

const PageTitle = styled.div`
  font-size: 1.5rem;
  font-weight: 600;
  color: #1d1d1d;
`;

const SearchBar = styled.div`
  display: flex;
  align-items: center;
  width: 250px;
  padding: 8px 12px;
  background-color: #fafafa;
  color: #909090;
  border-radius: 12px;
  gap: 8px;
`;

const SearchInput = styled.input`
  border: none;
  outline: none;
  background-color: transparent;
  width: 100%;
  font-size: 1rem;
  color: #1d1d1d;
  font-family: 'Paperlogy';
`;
