import { atom, useRecoilState } from 'recoil';
import styled from '@emotion/styled';
import { useState } from "react";
import Sidebar from '../../component/sibebar/sidebar'
import Slbe from '../../component/sliber/sliber'

export default function Home(){
    return(
    <>
    < Sidebar/>
    <King>
        <Slbe/>
    </King>
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