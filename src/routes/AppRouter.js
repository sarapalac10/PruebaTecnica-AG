import React from 'react'
import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import Cards from '../components/Card/Cards';
import { Form } from '../components/Login/Form';
import InitPage from '../components/Login/InitPage';
import Login from '../components/Login/Login';
import PrincipalPage from '../Pages/PrincipalPage';

const AppRouter = () => {
  return (
   <BrowserRouter>
    <Routes>
      <Route path='/' element={<InitPage/>} />
      <Route path='/login' element={<Login/>} /> 
      <Route path='/principalpage' element={<PrincipalPage/>} /> 
      <Route path='/cards' element={<Cards/>} /> 
      <Route path='/form' element={<Form/>} /> 
      <Route path='/*' element={<Navigate to='/' />} />  
    </Routes>
   </BrowserRouter>
  )
}

export default AppRouter