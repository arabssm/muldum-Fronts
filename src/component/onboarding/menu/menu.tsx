import ContentCard from "./contentbox";
import { items } from "./items";
import * as _ from './style';

export default function Menu() {
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
    <_.Wrapper>
        <_.H1>메뉴</_.H1>
        <_.H2>원하는 항목을 선택하여 이동하세요</_.H2>
    <_.GridContainer>
      {items.map((title) => (
        <ContentCard
          key={title}
          title={title}
          onClick={() => handleClick(title)}
        />
      ))}
    </_.GridContainer>
    </_.Wrapper>
  );
}