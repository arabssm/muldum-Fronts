import { useNavigate } from 'react-router-dom';
import styled from '@emotion/styled';

interface BoxProps {
    idx: number;
    title: string;
    date: string;
}

const formatDate = (iso: string) => {
    const d = new Date(iso);
    const Y = d.getFullYear();
    const M = String(d.getMonth() + 1).padStart(2, '0');
    const D = String(d.getDate()).padStart(2, '0');
    let h = d.getHours();
    const m = String(d.getMinutes()).padStart(2, '0');
    const ampm = h >= 12 ? '오후' : '오전';
    if (h === 0) h = 12;
    else if (h > 12) h -= 12;
    return `${Y}-${M}-${D} ${ampm} ${h}:${m}`;
};

export default function Box({ idx, title, date }: BoxProps) {
    const navigate = useNavigate();
    return (
        <BoxContainer onClick={() => navigate(`/notice/${idx}`)}>
            <Left>
                <Badge>신규</Badge>
                <BoxTitle>{title}</BoxTitle>
            </Left>
            <DateText>{formatDate(date)}</DateText>
        </BoxContainer>
    );
}


const BoxContainer = styled.div`
    display: flex;
    align-items: center;
    width: 100%;
    padding: 1.2% 1%;
    cursor: pointer;
    background-color: #fff;
    border-radius: 8px;
`;

const Left = styled.div`
    display: flex;
    flex: 1;
    align-items: center;
    gap: 2%;
`;

const Badge = styled.span`
    background-color: #FF9B62;
    color: #fff;
    padding: 6px 12px;   
  font-size: 12px;

    border-radius: 24px;
    line-height: 1;
`;

const BoxTitle = styled.h2`
    margin: 0;
    font-size: 1.2rem;
    color: #1E1E1E;
`;

const DateText = styled.span`
    font-size: 0.8rem;
    color: #909090;
`;
