import React, { useEffect, useState } from "react";
import Input from "../../../../components/Input/Input.js";
import Button from "../../../../components/Button/Button.js";

export default function SessaoForm() {
  const [filmes, setFilmes] = useState([]); // já começa como array vazio
  const [salas, setSalas] = useState([]);   // já começa como array vazio
  const [formData, setFormData] = useState({
    filmeIndex: "",
    salaIndex: "",
    dataHora: "",
    preco: "",
    idioma: "",
    formato: ""
  });

  useEffect(() => {
    async function fetchFilmes() {
      try {
        const res = await fetch("http://localhost:3001/filmes");
        const data = await res.json();
        setFilmes(Array.isArray(data) ? data : []); // reforça que seja array
      } catch (error) {
        console.error("Erro ao carregar filmes:", error);
        setFilmes([]); // evita estado inválido
      }
    }

    async function fetchSalas() {
      try {
        const res = await fetch("http://localhost:3001/salas");
        const data = await res.json();
        setSalas(Array.isArray(data) ? data : []); // reforça que seja array
      } catch (error) {
        console.error("Erro ao carregar salas:", error);
        setSalas([]); // evita estado inválido
      }
    }

    fetchFilmes();
    fetchSalas();
  }, []);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    // valida se os índices estão válidos
    if (
      formData.filmeIndex === "" || 
      formData.salaIndex === "" ||
      !filmes[formData.filmeIndex] ||
      !salas[formData.salaIndex]
    ) {
      alert("Selecione filme e sala válidos!");
      return;
    }

    const sessao = {
      filmeId: filmes[formData.filmeIndex].id,
      salaId: salas[formData.salaIndex].id,
      dataHora: formData.dataHora,
      preco: parseFloat(formData.preco),
      idioma: formData.idioma,
      formato: formData.formato,
    };

    try {
      const res = await fetch("http://localhost:3001/sessoes", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(sessao),
      });
      if (!res.ok) throw new Error("Erro ao salvar sessão");

      alert("Sessão cadastrada com sucesso!");
      setFormData({
        filmeIndex: "",
        salaIndex: "",
        dataHora: "",
        preco: "",
        idioma: "",
        formato: "",
      });
    } catch (error) {
      alert(error.message);
    }
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
            <option key={filme.id} value={index}>
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
            <option key={sala.id} value={index}>
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
