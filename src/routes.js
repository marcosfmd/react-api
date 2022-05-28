import React from 'react';
import { Routes, BrowserRouter, Route} from 'react-router-dom';

import Home from "./pages/Home";
import Repositories from "./pages/Repositories";

export default function AppRoutes () {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home/>} />
        <Route path='/repositories' element={<Repositories/>}/>
      </Routes>
     </BrowserRouter>
  )
}
