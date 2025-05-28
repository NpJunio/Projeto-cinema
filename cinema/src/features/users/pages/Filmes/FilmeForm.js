// src/features/filmes/components/FilmeForm.js
import React, { useState } from "react";
import Input from "../../../../components/Input/Input.js";
import Button from "../../../../components/Button/Button.js";


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
        <Input
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
        <Input
          name="genero"
          className="form-control"
          value={formData.genero}
          onChange={handleChange}
          required
        />
      </div>

      <div className="mb-3">
        <label className="form-label">Classificação</label>
        <Input
          name="classificacao"
          className="form-control"
          value={formData.classificacao}
          onChange={handleChange}
          required
        />
      </div>

      <div className="mb-3">
        <label className="form-label">Duração (minutos)</label>
        <Input
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
        <Input
          type="date"
          name="estreia"
          className="form-control"
          value={formData.estreia}
          onChange={handleChange}
          required
        />
      </div>

      <Button variant="success">Cadastrar</Button>

    </form>
  );
}
