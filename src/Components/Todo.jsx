import React from 'react'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import AllPoke from './AllPoke';
import Header from './Header';
import Inicio from './Inicio';


const Todo = ({Data}) => {

  
  return (
    <>
    <BrowserRouter>
        <Header />
        <Routes>
            <Route path='/' element={<Inicio Data={Data}/>} />
            <Route path='AllPoke' element={<AllPoke />} />
        </Routes>
    </BrowserRouter>
    </>
  )
}

export default Todo