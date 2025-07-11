import Notice from "@_componentsOnboarding/notice/notice";
import Sidebar from "@_components/sibebar/sidebar";
import styled from "@emotion/styled";
export default function Notice1(){
    return(
        <Container>
            <King>
                <Sidebar />
                <Notice />
            </King>
        </Container>
    );
}

const Container = styled.div`
    width: 100vw;
    margin-left: 0;
    margin-top: 0;
    overflow-y: auto;
    overflow-x: hidden;
    flex-direction: column;
    gap: 3.25rem;
`;

const King = styled.div`
    width: 100%; 
    display: flex;
    flex-direction: column;
    gap: 3rem;
    margin-left: 18%;
`;
