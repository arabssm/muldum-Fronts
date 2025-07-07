import styled from '@emotion/styled';

export const Header = styled.div`
    display: flex;
    align-items: center;
    width: 100%;
`;

export const Title = styled.h2`
    font-size: 1.5rem;
    color: #1d1d1d;
    margin-right: 50%;
`;

export const SearchWrapper = styled.div`
    position: relative;
    display: flex;
    align-items: center;
    width: 21.875rem;
    height: 2.5rem;
    background-color: #f5f5f5;
    border-radius: 0.75rem;
    padding-left: 0.75rem;
    margin-right: 1rem;
`;

export const SearchIcon = styled.img`
    width: 1rem;
    height: 1rem;
    margin-right: 0.5rem;
`;

export const SearchInput = styled.input`
    flex: 1;
    border: none;
    background: transparent;
    font-size: 0.875rem;
    color: #909090;
    padding: 0;
    &::placeholder { color: #909090; }
    &:focus { outline: none; }
`;

export const ViewAll = styled.div`
    position: absolute;
    bottom: -1.75rem;
    right: 0;
    font-size: 0.875rem;
    color: #909090;
    cursor: pointer;
`;

export const BoxContainer = styled.div`
    display: flex;
    flex-direction: column;
    gap: 0.75rem;
    width: 78%;
    padding: 1rem 0;
`;

export const Container = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 0.75rem 1rem;
    cursor: pointer;
    background: #fff;
    border-radius: 0.5rem;
`;

export const Left = styled.div`
    display: flex;
    align-items: center;
    gap: 0.75rem;
    flex: 1; 
`;

export const Badge = styled.span`
    background-color: #FF9B62;
    color: #fff;
    padding: 0.25rem 0.625rem;
    font-size: 0.75rem;
    font-weight: 500;
    border-radius: 0.625rem;
    line-height: 1; 
`;

export const BigTitle = styled.h2`
    margin: 0;
    font-size: 1rem;
    color: #1E1E1E;
    line-height: 1.4; 
    word-break: keep-all;
    overflow-wrap: break-word; 
    flex-shrink: 1;
`;

export const DateText = styled.span`
    font-size: 0.875rem;
    color: #666;
    white-space: nowrap;
    margin-left: 1rem;
`;