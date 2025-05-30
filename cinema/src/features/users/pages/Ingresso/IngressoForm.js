// src/features/ingressos/components/VendaForm.js
import React, { useEffect, useState } from "react";
import Input from "../../../../components/Input/Input.js";
import Button from "../../../../components/Button/Button.js";

export default function IngressoForm() {
  const [sessoes, setSessoes] = useState([]);
  const [filmes, setFilmes] = useState([]);
  const [formData, setFormData] = useState({
    sessaoIndex: "",
    cliente: "",
    cpf: "",
    assento: "",
    pagamento: ""
  });

  useEffect(() => {
    const sessoesStorage = JSON.parse(localStorage.getItem("sessoes")) || [];
    const filmesStorage = JSON.parse(localStorage.getItem("filmes")) || [];
    setSessoes(sessoesStorage);
    setFilmes(filmesStorage);
  }, []);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const ingresso = { ...formData };

    const ingressos = JSON.parse(localStorage.getItem("ingressos")) || [];
    ingressos.push(ingresso);
    localStorage.setItem("ingressos", JSON.stringify(ingressos));

    alert("Ingresso vendido com sucesso!");

    setFormData({
      sessaoIndex: "",
      cliente: "",
      cpf: "",
      assento: "",
      pagamento: ""
    });
  };

  return (
    <form onSubmit={handleSubmit}>
      <div className="mb-3">
        <label className="form-label">Sessão</label>
        <select
          name="sessaoIndex"
          className="form-select"
          value={formData.sessaoIndex}
          onChange={handleChange}
          required
        >
          <option value="">Selecione uma sessão</option>
          {sessoes.map((sessao, index) => {
            const filme = filmes[sessao.filmeIndex];
            return (
              <option key={index} value={index}>
                {filme?.titulo || "Filme não encontrado"} - {sessao.dataHora}
              </option>
            );
          })}
        </select>
      </div>

      <div className="mb-3">
        <label className="form-label">Nome do Cliente</label>
        <Input
          type="text"
          name="cliente"
          className="form-control"
          value={formData.cliente}
          onChange={handleChange}
          required
        />
      </div>

      <div className="mb-3">
        <label className="form-label">CPF</label>
        <Input
          type="text"
          name="cpf"
          className="form-control"
          value={formData.cpf}
          onChange={handleChange}
          required
        />
      </div>

      <div className="mb-3">
        <label className="form-label">Assento (ex: A10)</label>
        <Input
          type="text"
          name="assento"
          className="form-control"
          value={formData.assento}
          onChange={handleChange}
          required
        />
      </div>

      <div className="mb-3">
        <label className="form-label">Tipo de Pagamento</label>
        <select
          name="pagamento"
          className="form-select"
          value={formData.pagamento}
          onChange={handleChange}
          required
        >
          <option value="">Selecione</option>
          <option value="Cartão">Cartão</option>
          <option value="Pix">Pix</option>
          <option value="Dinheiro">Dinheiro</option>
        </select>
      </div>

      <Button type="submit" variant="success">Salvar</Button>
    </form>
  );
}
