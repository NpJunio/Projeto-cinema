import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import FilmePage from "../features/users/pages/Filmes/FilmePage.js";
import FilmeListPage from "../features/users/pages/Inicio/FilmeList.js";
import SalaPage from "../features/users/pages/Sala/SalaPage.js";
import SessaoPage from "../features/users/pages/Sessao/SessaoPage.js";
import IngressoPage from "../features/users/pages/Ingresso/IngressoPage.js";
import LoginPage from "../pages/LoginPage.js";

export function AppRoutes() {
  return (
      <Routes>
        <Route path="/login" element={<LoginPage />} />
        <Route path="/filmes" element={<FilmePage />} />
        <Route path="/" element={<FilmeListPage />} />
        <Route path="/sala" element={<SalaPage />} />
        <Route path="/sessao" element={<SessaoPage />} />
        <Route path="/ingresso" element={<IngressoPage />} />
      </Routes>
  );
}
