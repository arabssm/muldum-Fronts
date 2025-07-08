import { createRoot } from 'react-dom/client'

import {
    BrowserRouter,
    Routes,
    Route
} from "react-router-dom";

import {RecoilRoot} from 'recoil';
import Home from '@_pages/onboarding/index'
import Detail from '@_componentsOnboarding/notice/detail/detail';
import Notice1 from '@_pages/notice/notice';
import NotFound from '@_components/Notfound/404';
import Object from '@_pages/object/object';
import '@_styles';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

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
