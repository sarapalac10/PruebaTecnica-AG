import React from 'react'
import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import Cards from '../components/Card/Cards';
import InitPage from '../components/Login/InitPage';
import Login from '../components/Login/Login';
import PrincipalPage from '../Pages/PrincipalPage';
// import Login from '../components/Login';
// import ProductoRender from '../components/ProductoRender';

const AppRouter = () => {
  return (
   <BrowserRouter>
    <Routes>
      <Route path='/' element={<InitPage/>} />
      <Route path='/login' element={<Login/>} /> 
      <Route path='/principalpage' element={<PrincipalPage/>} /> 
      <Route path='/cards' element={<Cards/>} /> 
      <Route path='/*' element={<Navigate to='/' />} />  
    </Routes>
   </BrowserRouter>
  )
}

export default AppRouter