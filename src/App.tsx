import {
    BrowserRouter,
    Routes,
    Route
} from "react-router-dom";
import Home from './pages/onboarding/index'
import Detail from './component/onboarding/notice/detail/detail';
import Notice1 from './pages/notice/notice';
import Object from './pages/object/object'
import './font.css';
import "slick-carousel/slick/slick.css"
import "slick-carousel/slick/slick-theme.css"
import { useRecoilValue } from 'recoil'
import { loginModalState,whereismypasswordModalState } from './atom/Modal'
import LoginModal from './component/modal/login/login'
import PasswordModal from './component/modal/password/password'
import Notfound from './component/notfound';
export default function App(){
    const isOpen = useRecoilValue(loginModalState)
    const isOpen2=useRecoilValue(whereismypasswordModalState);
    return (
        <BrowserRouter>
        {isOpen && <LoginModal />}
        {isOpen2 && <PasswordModal />}
        <Routes>
          <Route path="*" element={<Notfound />} />
          <Route path="/" element={<Home/>} />
          <Route path="/notice" element={<Notice1 />} /> 
          <Route path="/notice/:id" element={<Detail />} />
          <Route path='/object' element={<Object />}/> 
        </Routes>
        </BrowserRouter>
    );
}