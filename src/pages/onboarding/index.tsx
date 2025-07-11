import styled from '@emotion/styled';
import { useRecoilValue } from 'recoil';
import { loginModalState, whereismypasswordModalState } from "@_atom/Modal";
import LoginModal from '@_componentsModal/login/login';
import Sidebar from '@_components/sibebar/sidebar';
import Slbe from '@_componentsOnboarding/sliber/sliber';
import Menu from '@_componentsOnboarding/menu/menu';
import Notice from '@_componentsOnboarding/notice/notice';
import PasswordModal from '@_componentsModal/password/password';

export default function Home(){
    const isOpen = useRecoilValue(loginModalState)
    const isOpen2=useRecoilValue(whereismypasswordModalState);

    return(
    <Container>
        < Sidebar/>
            <King>
                <Slbe/>
                <Menu />
                <Notice />
            </King>
            {isOpen && <LoginModal />}
            {isOpen2 && <PasswordModal />}
        </Container>
    );
}

const Container = styled.div`
    width: 100vw;
    margin-left: 0;
    margin-top: 0;
    overflow-y: auto;
    overflow-x: hidden;
`;

const King = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
    gap: 3rem;
    margin-left: 19%;
    margin-top: 2.2%;
`;
