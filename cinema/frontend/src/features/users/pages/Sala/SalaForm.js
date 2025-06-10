import React, { useState } from "react";
import axios from "axios";

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

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const novaSala = {
        nome: formData.nome,
        capacidade: parseInt(formData.capacidade, 10),
        tipo: formData.tipo
      };

      await axios.post("http://localhost:3001/salas", novaSala);

      alert("Sala cadastrada com sucesso!");

      setFormData({
        nome: "",
        capacidade: "",
        tipo: ""
      });
    } catch (error) {
      console.error("Erro ao cadastrar sala:", error);
      alert("Erro ao cadastrar sala. Veja o console.");
    }
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
