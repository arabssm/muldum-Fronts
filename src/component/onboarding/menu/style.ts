import styled from "@emotion/styled";

export const CardContainer = styled.div`
    background: #f8f8f8;     
    border-radius: 12px;       
    padding: 20px 24px;        
    width: 90%;
    box-shadow: 0px 1px 4px rgba(0, 0, 0, 0.1);
    cursor: pointer;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    
    transition: background 0.2s ease;
    &:hover {
        background: #efefef;
    }
`;

export const Title = styled.h2`
    margin: 0;
    font-size: 18px;
    font-weight: 600;
    color: #1d1d1d;
`;

export const LinkText = styled.span`
    margin-top: 12px;
    font-size: 14px;
    color: #707070;
    line-height: 1.4;
`;
