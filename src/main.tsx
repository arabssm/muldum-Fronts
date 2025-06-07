import { createRoot } from 'react-dom/client'

import {
    BrowserRouter,
    Routes,
    Route
} from "react-router-dom";

import {RecoilRoot} from 'recoil';
import Home from './pages/onboarding/index'
import Detail from './component/onboarding/notice/detail/detail';
import Notice1 from './pages/Notice/Notice/notice';
import './font.css';
import "slick-carousel/slick/slick.css"
import "slick-carousel/slick/slick-theme.css"
createRoot(document.getElementById('root')!).render(
  <RecoilRoot>
    <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home/>} />
          <Route path="/notice" element={<Notice1 />} /> 
          <Route path="/notice/:id" element={<Detail />} /> 
        </Routes>
    </BrowserRouter>
  </RecoilRoot>
)
