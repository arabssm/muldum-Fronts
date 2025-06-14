import { atom, useRecoilState } from 'recoil';
import styled from '@emotion/styled';
import { useState } from "react";

import Sidebar from '../../component/sibebar/sidebar'
import Slbe from '../../component/onboarding/sliber/sliber'
import Menu from '../../component/onboarding/menu/menu'
import Notice from '../../component/onboarding/notice/notice'

export default function Home(){
    

    return(
    <>
    < Sidebar/>
    <King>
        <Slbe/>
        <Menu />
        <Notice />
    </King>
    
    </>
    );
}
const King =styled.div`
    width: 85%;
    height: 100vh;
    display: flex;
    margin-left: 15%;
    flex-direction: column;
    gap: 50px;

`;