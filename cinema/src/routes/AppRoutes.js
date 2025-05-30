import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import FilmePage from "../features/users/pages/Filmes/FilmePage.js";
import FilmeList from "../features/users/pages/Filmes/FilmeList.js";
import SalaForm from "../features/users/pages/Sala/SalaForm.js";
import SessaoForm from "../features/users/pages/Sessao/SessaoForm.js";
import IngressoForm from "../features/users/pages/Ingresso/IngressoForm.js";

export function AppRoutes() {
  return (
      <Routes>
        <Route path="/filmes" element={<FilmePage />} />
        <Route path="/" element={<FilmeList />} />
        <Route path="/sala" element={<SalaForm />} />
        <Route path="/sessao" element={<SessaoForm />} />
        <Route path="/ingresso" element={<IngressoForm />} />
      </Routes>
  );
}
