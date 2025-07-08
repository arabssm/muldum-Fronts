import styled from '@emotion/styled';

export const Card = styled.div`
    background: #fff;
    border: 1px solid #eee;
    border-radius: 12px;
    margin-bottom: 16px;
    box-shadow: 0 1px 4px rgba(0,0,0,0.05);
    overflow: hidden;
`;

export const CardRow = styled.div`
    display: flex;
    align-items: center;
    padding: 12px 16px;
    border-bottom: 1px solid #eee;
`;

export const Cell = styled.div<{ flex: string }>`
    flex: ${({ flex }) => flex};
    font-size: 14px;
    color: #333;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
`;

export const ReasonRow = styled.div`
    padding: 12px 16px;
    background: #fafafa;
    color: #555;
    cursor: text;
`;

export const ReasonTextarea = styled.textarea`
    width: 100%;
    border: none;
    resize: none;
    background: transparent;
    font-size: 14px;
    line-height: 1.5;
    outline: none;
`;
