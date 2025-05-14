import { createRoot } from 'react-dom/client'

import {
    BrowserRouter,
    Routes,
    Route
} from "react-router-dom";

import {RecoilRoot} from 'recoil';
import Sidebar from './component/sibebar/sidebar'
import './font.css';
createRoot(document.getElementById('root')!).render(
  <RecoilRoot>
    <BrowserRouter>
        <Routes>
          <Route path="/" element={<Sidebar/>} />
        </Routes>
    </BrowserRouter>
  </RecoilRoot>
)
