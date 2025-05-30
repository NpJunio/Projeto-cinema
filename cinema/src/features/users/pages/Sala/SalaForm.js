// src/features/salas/components/SalaForm.js
import React, { useState } from "react";
import Input from "../../../../components/Input/Input.js";
import Button from "../../../../components/Button/Button.js";

export default function SalaForm() {
  const [formData, setFormData] = useState({
    nome: "",
    capacidade: "",
    tipo: ""
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form data:", formData);

    const novaSala = {
      ...formData,
      capacidade: parseInt(formData.capacidade, 10)
    };

    const salas = JSON.parse(localStorage.getItem("sala")) || [];
    salas.push(novaSala);
    localStorage.setItem("sala", JSON.stringify(salas));

    alert("Sala cadastrada com sucesso!");

    setFormData({
      nome: "",
      capacidade: "",
      tipo: ""
    });
  };

  return (
    <form onSubmit={handleSubmit}>
      <div className="mb-3">
        <label className="form-label">Nome da Sala</label>
        <Input
          name="nome"
          className="form-control"
          value={formData.nome}
          onChange={handleChange}
          required
        />
      </div>

      <div className="mb-3">
        <label className="form-label">Capacidade</label>
        <Input
          type="number"
          name="capacidade"
          className="form-control"
          value={formData.capacidade}
          onChange={handleChange}
          required
        />
      </div>

      <div className="mb-3">
        <label className="form-label">Tipo</label>
        <select
          name="tipo"
          className="form-select"
          value={formData.tipo}
          onChange={handleChange}
          required
        >
          <option value="">Selecione</option>
          <option value="2D">2D</option>
          <option value="3D">3D</option>
          <option value="IMAX">IMAX</option>
        </select>
      </div>

      <Button type="submit" variant="success">Cadastrar</Button>

    </form>
  );
}
