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
    estreia: "",
    imagem: null, // novo campo
  });

  const handleChange = (e) => {
    const { name, value, files } = e.target;

    if (name === "imagem") {
      const file = files[0];
      if (file && file.type.startsWith("image/")) {
        const reader = new FileReader();
        reader.onloadend = () => {
          setFormData((prev) => ({ ...prev, imagem: reader.result }));
        };
        reader.readAsDataURL(file);
      } else {
        alert("Por favor, selecione uma imagem válida.");
      }
    } else {
      setFormData((prev) => ({ ...prev, [name]: value }));
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const filme = {
      ...formData,
      duracao: parseInt(formData.duracao),
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
      estreia: "",
      imagem: null,
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
       <select
         name="genero"
         className="form-control"
         value={formData.genero}
         onChange={handleChange}
         required
        >
        <option value="">Selecione</option>
        <option value="Ação">Ação</option>
        <option value="Comédia">Comédia</option>
        <option value="Drama">Drama</option>
        <option value="Terror">Terror</option>
        <option value="Ficção Científica">Ficção Científica</option>
        <option value="Animação">Animação</option>
        <option value="Romance">Romance</option>
        <option value="Documentário">Documentário</option>
        <option value="Aventura">Aventura</option>
        <option value="Musical">Musical</option>
        </select>
      </div>


      <div className="mb-3">
       <label className="form-label">Classificação</label>
       <select
         name="classificacao"
         className="form-control"
         value={formData.classificacao}
         onChange={handleChange}
         required
        >
         <option value="">Selecione</option>
         <option value="Livre">Livre</option>
         <option value="10">10</option>
         <option value="12">12</option>
         <option value="14">14</option>
         <option value="14">16</option>
         <option value="14">18</option>
        </select>
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

      <div className="mb-3">
        <label className="form-label">Pôster do Filme</label>
        <input
          type="file"
          name="imagem"
          accept="image/*"
          className="form-control"
          onChange={handleChange}
          required
        />
      </div>

      <Button type="submit" variant="success">Cadastrar</Button>
    </form>
  );
}
