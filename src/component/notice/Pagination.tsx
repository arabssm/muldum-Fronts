import styled from '@emotion/styled';

interface PaginationProps {
    currentPage: number;
    totalPages: number;
    onPageChange: (page: number) => void;
}

export default function Pagination({ currentPage, totalPages, onPageChange }: PaginationProps) {
    return (
        <PaginationWrapper>
            <PageButton onClick={() => onPageChange(currentPage - 1)} disabled={currentPage === 1}>
                ＜
            </PageButton>
            {Array.from({ length: totalPages }, (_, i) => (
                <PageButton
                    key={i}
                    onClick={() => onPageChange(i + 1)}
                    active={currentPage === i + 1}
                >
                    {i + 1}
                </PageButton>
            ))}
            <PageButton onClick={() => onPageChange(currentPage + 1)} disabled={currentPage === totalPages}>
                ＞
            </PageButton>
        </PaginationWrapper>
    );
}


export const PaginationWrapper = styled.div`
  position: fixed;
  bottom: 2rem;
  left: 50%;
  background-color: white;
  padding: 0.5rem 1rem;
  border-radius: 30px;
  z-index: 10;
  display: flex;
  justify-content: center;
  gap: 1rem;
`;


export const PageButton = styled.button<{ active?: boolean }>`
    color: #000;
    background-color: #fff;
    border: none;
    border-radius: 200px;
    padding: 0.7% 1%;
    cursor: pointer;

    ${({ active }) =>
        active &&
        `
        background-color: #FFF5EF;
        color: #FF9B62;
    `}
`;