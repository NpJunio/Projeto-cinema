import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import FilmePage from "../features/users/pages/Filmes/FilmePage.js";
import FilmeListPage from "../features/users/pages/Inicio/FilmeList.js";
import SalaForm from "../features/users/pages/Sala/SalaForm.js";
import SessaoForm from "../features/users/pages/Sessao/SessaoForm.js";
import IngressoPage from "../features/users/pages/Ingresso/IngressoPage.js";
import LoginPage from "../pages/LoginPage.js";

export function AppRoutes() {
  return (
      <Routes>
        <Route path="/login" element={<LoginPage />} />
        <Route path="/filmes" element={<FilmePage />} />
        <Route path="/" element={<FilmeListPage />} />
        <Route path="/sala" element={<SalaForm />} />
        <Route path="/sessao" element={<SessaoForm />} />
        <Route path="/ingresso" element={<IngressoPage />} />
      </Routes>
  );
}
