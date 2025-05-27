import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import FilmePage from "../features/users/pages/Filmes/FilmePage.js";

export function AppRoutes() {
  return (
      <Routes>
        <Route path="/filmes" element={<FilmePage />} />
      </Routes>
  );
}
