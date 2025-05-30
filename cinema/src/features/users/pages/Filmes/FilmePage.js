// src/features/filmes/pages/FilmePage.js
import React from "react";
import FilmeForm from "./FilmeForm";
import FilmeList from "./FilmeList";

export default function FilmePage() {
  return (
    <div className="container mt-4">
      <h1>Cadastro de Filme</h1>
      <FilmeForm />
      <hr />
    </div>
  );
}