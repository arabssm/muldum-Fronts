/** @jsxImportSource @emotion/react */
import {
  profile,
  home,
  ranking,
  calender,
  check,
  object,
  alerticon,
  setting,
  Chome,
  Cranking,
  Ccalender,
  Ccheck,
  Cobject,
  Calerticon,
  Gologin
} from './siberbarimport';

import { atom, useRecoilState } from 'recoil';
import styled from '@emotion/styled';
import { useState } from "react";

export const modalState = atom<boolean>({
  key: 'modal1State',
  default: false,
});
const navList = [
  { key: 'home', label: '홈', icon: home, activeIcon: Chome },
  { key: 'ranking', label: '역대 동아리', icon: ranking, activeIcon: Cranking },
  { key: 'calendar', label: '캘린더', icon: calender, activeIcon: Ccalender },
  { key: 'check', label: '월말평가', icon: check, activeIcon: Ccheck },
  { key: 'object', label: '물품관리', icon: object, activeIcon: Cobject },
  { key: 'alert', label: '알림', icon: alerticon, activeIcon: Calerticon },
];

export default function Sidebar() {
  const name: string = "이효준";
  const club: string = "아라";

  const [active1, Setactive] = useState("home");
  const [modal1,Setmodal1] =useRecoilState(modalState);



  return (
    <>
      <Container>
        {/* <Profile>
          <Profileimg src={profile} alt="프로필" />
          <ProfileTextGroup>
          <Profileclub>{club}</Profileclub>
            <Profilename>{name}</Profilename>
          </ProfileTextGroup>
        </Profile> */}
        <Profile>
        <Profileimg src={Gologin} alt="프로필" />
          <Gobutton onClick={() => Setmodal1(true)}>
            로그인
          </Gobutton>
        </Profile>
        <Nav>
          {navList.map((nav) => (
            <NavItem
              key={nav.key}
              active={active1 === nav.key}
              onClick={() => Setactive(nav.key)}
            >
              <Iconimg
                src={active1 === nav.key ? nav.activeIcon : nav.icon}
                alt={nav.label}
              />
              <IconText active={active1 === nav.key}>
                {nav.label}
              </IconText>
            </NavItem>
          ))}
        </Nav>

        <Floor>
          <NavItem>
            <Iconimg
              src={setting}
            />
            <IconText>세팅</IconText>
          </NavItem>
        </Floor>
      </Container>
    </>
  );
}



const Container = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  background-color: #fff;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  border-right: 1px solid #D1D1D1;
  width: 220px;
  height: 100vh;
  padding: 30px 0 40px 16px;
  box-sizing: border-box;
  z-index: 999;
`;

const Profile = styled.div`
  display: flex;
  align-items: center;
  gap: 12px;
`;

const Profileimg = styled.img`
  width: 40px;
  height: 40px;
  border-radius: 50%;
`;

const ProfileTextGroup = styled.div`
  display: flex;
  flex-direction: column;
`;

const Profileclub = styled.p`
  font-size: 12px;
  color: #b0b0b0;
  margin: 0;
`;

const Profilename = styled.p`
  font-size: 14px;
  font-weight: bold;
  color: #1D1D1D;
  padding-top: 8px;
  width: fit-content;
`;


const Nav = styled.div`
  display: flex;
  flex-direction: column;
  gap: 12px;
  margin-top: 50px;
`;

const NavItem = styled.div<{ active?: boolean }>`
  display: flex;
  width: 80%;
  align-items: center;
  gap: 12px;
  cursor: pointer;
  padding: 8px 12px;
  height: 30px;
  border-radius: 8px;
  background-color: ${({ active }) => (active ? '#FF9B621A' : 'transparent')};
`;

const IconText = styled.p<{ active?: boolean }>`
  font-family: 'Paperlogy', sans-serif;
  font-size: 14px;
  font-weight: 400;
  letter-spacing: -0.15px;
  color: ${({ active }) => (active ? '#FF9B62' : '#909090')};
`;

const Iconimg = styled.img<{ active?: boolean }>`
  width: 24px;
  height: 24px;
  color: ${({ active }) => (active ? '#FF9B62' : '#909090')};
`;

const Floor = styled.div`
  margin-top: auto;
  display: flex;
  flex-direction: column;
  gap: 16px;
  margin-left: 10px;
`;
const Gobutton=styled.div`
  user-select: none;
`;
