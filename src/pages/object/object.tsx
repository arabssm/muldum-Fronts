// pages/ObjectPage.tsx
import React from 'react'
import Sidebar from '../../component/sibebar/sidebar'
import Apply from '../../component/object/apply'
import styled from '@emotion/styled'

export default function ObjectPage() {
  return (
    <>
    <Sidebar />
    <King>
      <Apply />
    </King>
    </>
  )
}

const King =styled.div`
    width: 85%;
    height: 100vh;
    display: flex;
    margin-left: 15%;
    position: fixed;
`;