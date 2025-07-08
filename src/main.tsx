import { createRoot } from 'react-dom/client'

import {
    BrowserRouter,
    Routes,
    Route
} from "react-router-dom";

import {RecoilRoot} from 'recoil';
import Home from './pages/onboarding/index'
import Detail from './component/onboarding/notice/detail/detail';
import Notice1 from './pages/notice/notice';
import Object from './pages/object/object'
import './font.css';
import "slick-carousel/slick/slick.css"
import "slick-carousel/slick/slick-theme.css"
import NotFound from '@_components/Notfound/404';

createRoot(document.getElementById('root')!).render(
  <RecoilRoot>
    <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home/>} />
          <Route path="/notice" element={<Notice1 />} /> 
          <Route path="/notice/:id" element={<Detail />} />
          <Route path='/object' element={<Object />}/> 
          <Route path="*" element={<NotFound />} />
        </Routes>
    </BrowserRouter>
  </RecoilRoot>
)
