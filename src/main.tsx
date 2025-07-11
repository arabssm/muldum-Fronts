import { createRoot } from 'react-dom/client'

import {
    BrowserRouter,
    Routes,
    Route
} from "react-router-dom";

import { useRecoilValue } from 'recoil'
import { loginModalState,whereismypasswordModalState } from '@_atom/Modal'
import {RecoilRoot} from 'recoil';
import Home from '@_pages/onboarding/index'
import Detail from '@_componentsOnboarding/notice/detail/detail';
import Notice1 from '@_pages/notice/notice';
import NotFound from '@_components/Notfound/404';
import Object from '@_pages/object/object';
import AllObject from '@_pages/object/allobject';
import LoginModal from '@_components/modal/login/login';
import PasswordModal from '@_components/modal/password/password';
import ClubHistory from '@_pages/ClubHistory/ClubHistory';
import Teamspace from '@_pages/Teamspace/Teamspace';

import '@_styles';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

function Main(){

  const isOpen = useRecoilValue(loginModalState)
  const isOpen2=useRecoilValue(whereismypasswordModalState);
  return(
      <>
      {isOpen && <LoginModal />}
      {isOpen2 && <PasswordModal />}
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/notice" element={<Notice1 />} /> 
        <Route path="/notice/:id" element={<Detail />} />
        <Route path='/object' element={<Object />}/> 
        <Route path='/object/all' element={<AllObject />}/> 
        <Route path='/club-history' element={<ClubHistory />}/> 
        <Route path='/teamspace' element={<Teamspace />}/> 
        <Route path="*" element={<NotFound />} />
      </Routes>
    </>
  );
}
createRoot(document.getElementById('root')!).render(
    <RecoilRoot>
      <BrowserRouter>
        <Main />
      </BrowserRouter>
    </RecoilRoot>
)
