import React from "react";
import { memo } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import AllPoke from "./AllPoke";
import Header from "./Header";
import Inicio from "./Inicio";
import Onepoke from "./Onepoke";

const Todo = ({ Data }) => {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Inicio Data={Data} />} />
          <Route path="/pokemons" element={<AllPoke />} />
          <Route path="/pokemons/:id" element={<Onepoke />} />
        </Routes>
      </BrowserRouter>
    </>
  );
};

export default memo(Todo);
