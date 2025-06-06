import { createRoot } from 'react-dom/client'

import {
    BrowserRouter,
    Routes,
    Route
} from "react-router-dom";

import {RecoilRoot} from 'recoil';
import Home from './pages/onboarding/index'
import './font.css';
import "slick-carousel/slick/slick.css"
import "slick-carousel/slick/slick-theme.css"
createRoot(document.getElementById('root')!).render(
  <RecoilRoot>
    <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home/>} />
        </Routes>
    </BrowserRouter>
  </RecoilRoot>
)
