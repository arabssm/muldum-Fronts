import Notice from "../../component/onboarding/notice/notice";
import Sidebar from "../../component/sibebar/sidebar";
import styled from "@emotion/styled";
export default function Notice1(){
    return(
        <King>
        <Sidebar />
        <Notice />
        </King>
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