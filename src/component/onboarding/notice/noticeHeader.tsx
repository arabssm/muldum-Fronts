import React from 'react';
import styled from '@emotion/styled';
import Searchicon from '../../../assets/onboarding/search.svg';
import { useNavigate, useLocation } from 'react-router-dom';

interface HeaderProps {
  value: string;
  onChange: (v: string) => void;
}

export default function Header11({ value, onChange }: HeaderProps) {
  const navigate = useNavigate();
  const location = useLocation();
  const showViewAll = location.pathname === '/';

  return (
    <Header>
      <Title>공지사항</Title>
      <SearchWrapper>
        <SearchIcon src={Searchicon} alt="검색 아이콘" />
        <SearchInput
          placeholder="공지사항 검색"
          value={value}
          onChange={e => onChange(e.target.value)}
        />
        {showViewAll && (
          <ViewAll onClick={() => navigate('/notice')}>
            전체보기
          </ViewAll>
        )}
      </SearchWrapper>
    </Header>
  );
}

const Header = styled.div`
  display: flex;
  align-items: center;
  width: 100%;
`;

const Title = styled.h2`
  font-size: 24px;
  color: #1d1d1d;
  margin-right: 50%;
`;

const SearchWrapper = styled.div`
  position: relative;
  display: flex;
  align-items: center;
  width: 350px;
  height: 40px;
  background-color: #f5f5f5;
  border-radius: 12px;
  padding-left: 12px;
  margin-right: 16px;
`;

const SearchIcon = styled.img`
  width: 16px;
  height: 16px;
  margin-right: 8px;
`;

const SearchInput = styled.input`
  flex: 1;
  border: none;
  background: transparent;
  font-size: 14px;
  color: #909090;
  padding: 0;
  &::placeholder { color: #909090; }
  &:focus { outline: none; }
`;

const ViewAll = styled.div`
  position: absolute;
  bottom: -28px;
  right: 0;
  font-size: 14px;
  color: #909090;
  cursor: pointer;
`;
