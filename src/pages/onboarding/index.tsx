import { atom, useRecoilState } from 'recoil';
import styled from '@emotion/styled';
import { useState } from "react";
import { useRecoilValue } from 'recoil'
import { loginModalState,whereismypasswordModalState } from '../../atom/Modal'
import LoginModal from '../../component/modal/login/login'
import Sidebar from '../../component/sibebar/sidebar'
import Slbe from '../../component/onboarding/sliber/sliber'
import Menu from '../../component/onboarding/menu/menu'
import Notice from '../../component/onboarding/notice/notice'

import PasswordModal from '../../component/modal/password/password'

export default function Home(){
    const isOpen = useRecoilValue(loginModalState)
    const isOpen2=useRecoilValue(whereismypasswordModalState);

    return(
    <>
    < Sidebar/>
    <King>
        <Slbe/>
        <Menu />
        <Notice />
    </King>
    {isOpen && <LoginModal />}
    {isOpen2 && <PasswordModal />}
    </>
    );
}
const King =styled.div`
    width: 100%;
    height: 100vh;
    display: flex;
    margin-left: 15%;
    flex-direction: column;
    gap: 50px;
`;