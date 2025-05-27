// src/features/filmes/components/FilmeForm.js
import React, { useState } from "react";

export default function FilmeForm() {
  const [formData, setFormData] = useState({
    titulo: "",
    descricao: "",
    genero: "",
    classificacao: "",
    duracao: "",
    estreia: ""
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const filme = {
      ...formData,
      duracao: parseInt(formData.duracao)
    };

    const filmes = JSON.parse(localStorage.getItem("filmes")) || [];
    filmes.push(filme);
    localStorage.setItem("filmes", JSON.stringify(filmes));

    alert("Filme cadastrado com sucesso!");

    setFormData({
      titulo: "",
      descricao: "",
      genero: "",
      classificacao: "",
      duracao: "",
      estreia: ""
    });
  };

  return (
    <form onSubmit={handleSubmit}>
      <div className="mb-3">
        <label className="form-label">Título</label>
        <input
          name="titulo"
          className="form-control"
          value={formData.titulo}
          onChange={handleChange}
          required
        />
      </div>

      <div className="mb-3">
        <label className="form-label">Descrição</label>
        <textarea
          name="descricao"
          className="form-control"
          value={formData.descricao}
          onChange={handleChange}
          required
        />
      </div>

      <div className="mb-3">
        <label className="form-label">Gênero</label>
        <input
          name="genero"
          className="form-control"
          value={formData.genero}
          onChange={handleChange}
          required
        />
      </div>

      <div className="mb-3">
        <label className="form-label">Classificação</label>
        <input
          name="classificacao"
          className="form-control"
          value={formData.classificacao}
          onChange={handleChange}
          required
        />
      </div>

      <div className="mb-3">
        <label className="form-label">Duração (minutos)</label>
        <input
          type="number"
          name="duracao"
          className="form-control"
          value={formData.duracao}
          onChange={handleChange}
          required
        />
      </div>

      <div className="mb-3">
        <label className="form-label">Estreia</label>
        <input
          type="date"
          name="estreia"
          className="form-control"
          value={formData.estreia}
          onChange={handleChange}
          required
        />
      </div>

      <button className="btn btn-primary" type="submit">
        Cadastrar Filme
      </button>
    </form>
  );
}
