import styled from '@emotion/styled';

export const PageWrapper = styled.div`
    display: flex;
    height: 100vh;
`;

export const Container = styled.div`
    flex: 1;
    display: flex;
    flex-direction: column;
    overflow: hidden;
    width: calc(100% - 240px);
    margin-left: 220px;
    padding: 32px 5%;
    box-sizing: border-box;
`;

export const Main = styled.div`
    flex: 1;
    display: flex;
    flex-direction: column;
    overflow: hidden;
    min-height: 0;  
`;

export const Header = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: flex-end;
    margin-bottom: 32px;
`;

export const Titles = styled.div`
    h1 { margin: 0; font-size: 28px; font-weight: bold; }
    h3 { margin: 4px 0 0; font-size: 16px; color: #666; }
`;

export const BudgetBox = styled.div`
    text-align: right;
    background: #fff;
    padding: 12px 16px;
    border-radius: 12px;
    span { display: block; font-size: 14px; color: #999; }
    strong { display: block; font-size: 20px; color: #333; margin-top: 4px; }
`;

export const Used = styled.span`
    display: block;
    font-size: 14px;
    color: #ff4d4f;
    margin-top: 2px;
`;

export const SectionTitle = styled.h2`
    font-size: 18px;
    font-weight: 600;
    margin: 0;
`;

export const FormSection = styled.div`
    background: #fff;
    border-radius: 12px;
    padding: 24px;
    margin-bottom: 32px;
`;

export const FormSectionHeader = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 16px;
`;

export const AddButton = styled.button`
    background: #FF9B62;
    color: #fff;
    border: none;
    padding: 0 20px;
    height: 40px;
    border-radius: 20px;
    font-size: 14px;
    cursor: pointer;
`;

export const FormRow = styled.div`
    display: flex;
    align-items: center;
    gap: 16px;
    margin-bottom: 16px;
`;

export const Label = styled.label`
    flex: 0 0 80px;
    font-size: 14px;
    color: #333;
`;

export const Input = styled.input`
    flex: 1 1 200px;
    height: 40px;
    padding: 0 12px;
    border: 1px solid #ddd;
    border-radius: 8px;
    font-size: 14px;
`;

export const FullWidthInput = styled(Input)`
    flex: 1 1 100%;
`;

export const QtyWrapper = styled.div`
    display: flex;
    align-items: center;
    border: 1px solid #ddd;
    border-radius: 8px;
    overflow: hidden;
`;

export const QtyButton = styled.button`
    width: 32px;
    height: 32px;
    background: #f0f0f0;
    border: none;
    font-size: 18px;
    cursor: pointer;
`;

export const Qty = styled.div`
    width: 40px;
    text-align: center;
    font-size: 14px;
`;

export const TextArea = styled.textarea`
    flex: 1;
    height: 100px;
    padding: 12px;
    border: 1px solid #ddd;
    border-radius: 8px;
    font-size: 14px;
    resize: vertical;
`;

export const ListSection = styled.div`
    display: flex;
    flex-direction: column;
    flex: 1;
    margin-bottom: 32px;
    min-height: 0;   
`;

export const ListSectionHeader = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 16px;
`;

export const ApplyButton = styled.button`
    background: #FF9B62;
    color: #fff;
    border: none;
    padding: 0 20px;
    height: 36px;
    border-radius: 18px;
    font-size: 14px;
    cursor: pointer;
`;

export const ListWrapper = styled.div`
    flex: 1;
    overflow-y: auto;
    padding-right: 8px;
`;

export const Footer = styled.div`
    flex-shrink: 0;
    display: flex;
    justify-content: space-between;
    border-top: 1px solid #eee;
    padding-top: 16px;
    font-size: 14px;
    color: #909090;
`;

export const FooterLink = styled.a`
    text-decoration: none;
    &:hover { text-decoration: underline; }
`;