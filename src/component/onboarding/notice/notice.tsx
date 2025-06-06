import styled from "@emotion/styled";
import He from "./noticeHeader"
import Box from "./box"
export default function Notice() {
  return (
    <>
    <He />
    <Boxcontainer>
      <Box idx="1" title="happy" date="2025-02-01"/>
    </Boxcontainer>
    </>
  );
}


const Boxcontainer=styled.div`
  display: flex;
  width: 100%;
`;