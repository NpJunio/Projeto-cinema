import React, { useState } from 'react';
import Button from '../components/Button/Button';
import { useNavigate } from 'react-router-dom';  // importar o hook

const LoginPage = () => {
  const [email, setEmail] = useState('');
  const [senha, setSenha] = useState('');
  const navigate = useNavigate();  // criar o navigate

  const handleLogin = () => {
    alert(`Cadastro feito com sucesso`);
    navigate('/filmes'); // redireciona para essa rota
  };

  return (
    <div className="container mt-5">
      <h2>Login</h2>
      <div className="mb-3">
        <label className="form-label">Email</label>
        <input
          type="email"
          className="form-control"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
      </div>
      <div className="mb-3">
        <label className="form-label">Senha</label>
        <input
          type="password"
          className="form-control"
          value={senha}
          onChange={(e) => setSenha(e.target.value)}
        />
      </div>
      <Button onClick={handleLogin} variant="success">Entrar</Button>
    </div>
  );
};

export default LoginPage;
