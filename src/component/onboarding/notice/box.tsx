import styled from "@emotion/styled";
import { useNavigate } from "react-router-dom";

interface BoxProps {
  idx: string;
  title: string;
  date: string;
}

export default function Box({ idx, title, date }: BoxProps) {
  const navigate = useNavigate();

  const handlePostClick = (id: string) => {
    const numericId = Number(id);
    if (isNaN(numericId)) {
      console.error("Invalid ID:", id);
      return;
    }
    navigate(`/notice/${numericId}`);
  };

  return (
    <Container onClick={() => handlePostClick(idx)}>
      <Button>신규</Button>
      <Title>{title}</Title>
      <DateText>{date}</DateText>
    </Container>
  );
}

const Container = styled.div`
  display: flex;
  align-items: center;
  position: relative;
  width: 100%;
  padding: 8px 16px;
  box-sizing: border-box;
  cursor: pointer;
`;
const Button = styled.button`
  background-color: #FF9B62;
  color: #FFFFFF;
  border-radius: 12px;
  border: none;
  font-size: 16px;
  height: 110%;
  width: 3%;
`;
const Title = styled.h1`
  color: #1E1E1E;
  position: absolute;
  left: 5%;
  font-size: 20px;
  margin: 0;
`;
const DateText = styled.h3`
  position: absolute;
  left: 69.5%;
  color: #1E1E1E;
  font-size: 20px;
  margin: 0;
`;
