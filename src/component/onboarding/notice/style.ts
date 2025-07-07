import styled from '@emotion/styled';

export const Header = styled.div`
    display: flex;
    align-items: center;
    width: 100%;
`;

export const Title = styled.h2`
    font-size: 24px;
    color: #1d1d1d;
    margin-right: 50%;
`;

export const SearchWrapper = styled.div`
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

export const SearchIcon = styled.img`
    width: 16px;
    height: 16px;
    margin-right: 8px;
`;

export const SearchInput = styled.input`
    flex: 1;
    border: none;
    background: transparent;
    font-size: 14px;
    color: #909090;
    padding: 0;
    &::placeholder { color: #909090; }
    &:focus { outline: none; }
`;

export const ViewAll = styled.div`
    position: absolute;
    bottom: -28px;
    right: 0;
    font-size: 14px;
    color: #909090;
    cursor: pointer;
`;

export const BoxContainer = styled.div`
    display: flex;
    flex-direction: column;
    gap: 12px;
    width: 78%;
    padding: 16px 0;
`;
