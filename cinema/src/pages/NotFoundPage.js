import React from 'react';
import Button from '../components/Button/Button';
import { useNavigate } from 'react-router-dom';

const NotFoundPage = () => {
  const navigate = useNavigate();

  return (
    <div className="container text-center mt-5">
      <h1>404</h1>
      <p>Página não encontrada.</p>
      <Button onClick={() => navigate('/')} variant="secondary">
        Voltar para Home
      </Button>
    </div>
  );
};

export default NotFoundPage;
