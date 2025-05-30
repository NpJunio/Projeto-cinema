// src/features/sessoes/components/SessaoForm.js
import React, { useEffect, useState } from "react";
import Input from "../../../../components/Input/Input.js";
import Button from "../../../../components/Button/Button.js";

export default function SessaoForm() {
  const [filmes, setFilmes] = useState([]);
  const [salas, setSalas] = useState([]);
  const [formData, setFormData] = useState({
    filmeIndex: "",
    salaIndex: "",
    dataHora: "",
    preco: "",
    idioma: "",
    formato: ""
  });

  useEffect(() => {
    const filmesStorage = JSON.parse(localStorage.getItem("filmes")) || [];
    const salasStorage = JSON.parse(localStorage.getItem("sala")) || [];
    setFilmes(filmesStorage);
    setSalas(salasStorage);
  }, []);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const sessao = {
      ...formData,
      preco: parseFloat(formData.preco)
    };

    const sessoes = JSON.parse(localStorage.getItem("sessoes")) || [];
    sessoes.push(sessao);
    localStorage.setItem("sessoes", JSON.stringify(sessoes));

    alert("Sessão cadastrada com sucesso!");

    setFormData({
      filmeIndex: "",
      salaIndex: "",
      dataHora: "",
      preco: "",
      idioma: "",
      formato: ""
    });
  };

  return (
    <form onSubmit={handleSubmit}>
      <div className="mb-3">
        <label className="form-label">Filme</label>
        <select
          name="filmeIndex"
          className="form-select"
          value={formData.filmeIndex}
          onChange={handleChange}
          required
        >
          <option value="">Selecione um filme</option>
          {filmes.map((filme, index) => (
            <option key={index} value={index}>
              {filme.titulo}
            </option>
          ))}
        </select>
      </div>

      <div className="mb-3">
        <label className="form-label">Sala</label>
        <select
          name="salaIndex"
          className="form-select"
          value={formData.salaIndex}
          onChange={handleChange}
          required
        >
          <option value="">Selecione uma sala</option>
          {salas.map((sala, index) => (
            <option key={index} value={index}>
              {sala.nome}
            </option>
          ))}
        </select>
      </div>

      <div className="mb-3">
        <label className="form-label">Data e Hora</label>
        <Input
          type="datetime-local"
          name="dataHora"
          className="form-control"
          value={formData.dataHora}
          onChange={handleChange}
          required
        />
      </div>

      <div className="mb-3">
        <label className="form-label">Preço</label>
        <Input
          type="number"
          name="preco"
          className="form-control"
          value={formData.preco}
          onChange={handleChange}
          required
        />
      </div>

      <div className="mb-3">
        <label className="form-label">Idioma</label>
        <select
          name="idioma"
          className="form-select"
          value={formData.idioma}
          onChange={handleChange}
          required
        >
          <option value="">Selecione</option>
          <option value="Dublado">Dublado</option>
          <option value="Legendado">Legendado</option>
        </select>
      </div>

      <div className="mb-3">
        <label className="form-label">Formato</label>
        <select
          name="formato"
          className="form-select"
          value={formData.formato}
          onChange={handleChange}
          required
        >
          <option value="">Selecione</option>
          <option value="2D">2D</option>
          <option value="3D">3D</option>
        </select>
      </div>

      <Button type="submit" variant="success">Salvar</Button>
    </form>
  );
}
