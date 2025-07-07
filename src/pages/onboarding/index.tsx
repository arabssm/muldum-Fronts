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
    gap: 3rem;
    position: fixed
`;