import Notice from "../../component/notice/notice";
import Sidebar from "../../component/sibebar/sidebar";
import styled from "@emotion/styled";
export default function Notice1(){
    return(
        <>
        <Sidebar />
        <King>
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
`;