import React, { useEffect, useState } from "react";
import axios from "axios";

import Input from "../../../../components/Input/Input.js";
import Button from "../../../../components/Button/Button.js";

export default function IngressoForm() {
  const [sessoes, setSessoes] = useState([]);
  const [filmes, setFilmes] = useState([]);
  const [formData, setFormData] = useState({
    sessaoId: "",
    cliente: "",
    cpf: "",
    assento: "",
    pagamento: ""
  });
  const [loading, setLoading] = useState(false);

  // Buscar sessões e filmes quando o componente monta
  useEffect(() => {
    async function fetchData() {
      try {
        const [sessoesRes, filmesRes] = await Promise.all([
          axios.get("http://localhost:3001/sessoes"),
          axios.get("http://localhost:3001/filmes")
        ]);
        setSessoes(sessoesRes.data);
        setFilmes(filmesRes.data);
      } catch (error) {
        console.error("Erro ao carregar sessões ou filmes:", error);
        setSessoes([]);
        setFilmes([]);
      }
    }
    fetchData();
  }, []);

  // Atualiza os dados do formulário conforme o usuário digita
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  // Envio do formulário
  const handleSubmit = async (e) => {
    e.preventDefault();

    // Validar campos obrigatórios - simples exemplo
    if (!formData.sessaoId || !formData.cliente || !formData.cpf || !formData.assento || !formData.pagamento) {
      alert("Por favor, preencha todos os campos.");
      return;
    }

    setLoading(true);

    try {
      const novoIngresso = {
        sessaoId: parseInt(formData.sessaoId, 10),
        cliente: formData.cliente,
        cpf: formData.cpf,
        assento: formData.assento,
        pagamento: formData.pagamento
      };

      await axios.post("http://localhost:3001/ingressos", novoIngresso);

      alert("Ingresso vendido com sucesso!");

      // Limpa formulário após salvar
      setFormData({
        sessaoId: "",
        cliente: "",
        cpf: "",
        assento: "",
        pagamento: ""
      });
    } catch (error) {
      console.error("Erro ao vender ingresso:", error);
      alert("Erro ao vender ingresso. Confira o console para mais detalhes.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <div className="mb-3">
        <label className="form-label">Sessão</label>
        <select
          name="sessaoId"
          className="form-select"
          value={formData.sessaoId}
          onChange={handleChange}
          required
        >
          <option value="">Selecione uma sessão</option>
          {sessoes.map(sessao => {
            const filme = filmes.find(f => f.id === sessao.filmeId);
            const dataFormatada = new Date(sessao.dataHora).toLocaleString();
            return (
              <option key={sessao.id} value={sessao.id}>
                {filme?.titulo || "Filme não encontrado"} - {dataFormatada}
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
          disabled={loading}
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
          disabled={loading}
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
          disabled={loading}
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
          disabled={loading}
        >
          <option value="">Selecione</option>
          <option value="Cartão">Cartão</option>
          <option value="Pix">Pix</option>
          <option value="Dinheiro">Dinheiro</option>
        </select>
      </div>

      <Button type="submit" variant="success" disabled={loading}>
        {loading ? "Salvando..." : "Salvar"}
      </Button>
    </form>
  );
}
