import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import styled from '@emotion/styled'
import img1 from '../../../assets/onboarding/background.svg'
import img2 from '../../../assets/onboarding/background2.svg'
import Slider from "react-slick";

import { useState } from 'react';
export default function Sliber(){

	const content = [
    {
      title: '전공동아리 중간 발표회',
      subtitle: '다목적홀',
      img: img1,
      date: '2025년 06월 01일',
      dDay: 'D-15',
    },
    {
      title: '전공동아리 중간 발표회',
      subtitle: '다목적홀',
      img: img2,
      date: '2025년 06월 01일',
      dDay: 'D-15',
    },
    {
      title: '전공동아리 중간 발표회',
      subtitle: '다목적홀',
      img: img2,
      date: '2025년 06월 01일',
      dDay: 'D-15',
    },
  ];
    var settings = {
        dots: false,
        infinite: true,
        speed: 800,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true, 
        autoplaySpeed: 3000,
        pauseOnHover: false,  
        pauseOnFocus: false,  
        cssEase: 'ease-in-out',
      };
    return(
        <>
				<High>
          <Slider {...settings}>
						{content.map((item,index)=>(
              <SlideWrapper key={index}>
              <Legendimg src={item.img} alt="slide" />
              <Overlay />
                <Title>{item.title}</Title>
                <Date>{item.date}</Date>
                <SubTitle>{item.subtitle}</SubTitle>
                <Ddate>{item.dDay}</Ddate>
                <Index>{index+1}/{content.length}</Index>
            </SlideWrapper>
						))}
          </Slider>
					</High>
        </>
    )
}
const Index=styled.div`
  position: absolute;
  left: 97%;
  top:85%;
`;
const Ddate=styled.div`
  position: absolute;
  font-size: 5rem;
  font-weight: semibold;  
  top: 27%;
  left: 75%;
  width: 400px;
`;
const High = styled.div`
  width: 75%;
  border-radius: 12px;
  overflow: hidden;
`;


const SlideWrapper = styled.div`
  position: relative;   
  width: 80%;
  height: 220px;       
  overflow: hidden;     
  margin: 20px auto;    
  border-radius: 12px;
  color:#FFFFFF;
`;
const Overlay = styled.div`
  position: absolute;
  inset: 0;
  background: rgba(0, 0, 0, 0.6);
`;
const Legendimg = styled.img`
  position: absolute;   
  inset: 0;              
  width: 100%;           
  height: 100%;          
  object-fit: cover;
`;

const Title = styled.div`
 position: absolute;
  font-size: 2.5rem;
  font-weight: bold;  
  top: 15%;
  left: 4%;
  width: 400px;
`;

const SubTitle = styled.div`
  font-size: 1.5rem;
  position: absolute;
  left: 4%;
  top:69%;
`;

const Date = styled.div`
  font-size: 1.5rem;
  position: absolute;
  left: 4%;
  top:57%;
`;
