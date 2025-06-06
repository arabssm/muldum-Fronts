import React from "react";
import styled from "@emotion/styled";
import ContentCard from "./contentbox";

export default function Menu() {
  const items = [
    "역대 전공동아리 보러가기",
    "물품 신청 하러가기",
    "월말평가 작성하기",
    "공지사항 보러가기",
  ];

  const handleClick = (title: string) => {
    if(title==='역대 전공동아리 보러가기'){
        console.log("happy")
    }else if(title==='물품 신청 하러가기'){
        console.log("happy")
    }else if(title==='월말평가 작성하기'){
        console.log("happy")
    }else if(title==='공지사항 보러가기'){
        console.log("happy")
    }
  };

  return (
    <Wrapper>
        <H1>메뉴</H1>
        <H2>원하는 항목을 선택하여 이동하세요</H2>
    <GridContainer>
      {items.map((title) => (
        <ContentCard
          key={title}
          title={title}
          onClick={() => handleClick(title)}
        />
      ))}
    </GridContainer>
    </Wrapper>
  );
}
const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  width: 100%;
  box-sizing: border-box;
`;

const H1 = styled.h2`
  margin: 0;
  margin-bottom: 8px;
  font-size: 24px;
  color: #1d1d1d;
`;

const H2 = styled.h4`
  margin: 0;
  margin-bottom: 16px;
  font-size: 16px;
  color: #707070;
`;


const GridContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(2, minmax(100%, 1fr));
  row-gap: 16px;
  column-gap: -10px;
  width: 100%;
  max-width: 640px;
`;
