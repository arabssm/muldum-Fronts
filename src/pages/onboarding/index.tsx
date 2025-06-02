import { atom, useRecoilState } from 'recoil';
import styled from '@emotion/styled';
import { useState } from "react";
import { useRecoilValue } from 'recoil'
import { loginModalState,whereismypasswordModalState } from '../../atom/Modal'
import LoginModal from '../../component/modal/login/login'
import Sidebar from '../../component/sibebar/sidebar'
import Slbe from '../../component/sliber/sliber'
import PasswordModal from '../../component/modal/password/password'

export default function Home(){
    const isOpen = useRecoilValue(loginModalState)
    const isOpen2=useRecoilValue(whereismypasswordModalState);
    console.log(isOpen)
    console.log(isOpen2)
    return(
    <>
    < Sidebar/>
    <King>
        <Slbe/>
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
    margin-left: 220px;
    position: fixed;
`;