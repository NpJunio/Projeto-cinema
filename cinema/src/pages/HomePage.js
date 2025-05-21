import React from 'react';
import Button from '../components/Button/Button.js';

const HomePage = () => {
  return (
    <div className="container mt-5">
      <h1>Bem-vindo à Home</h1>
      <p>Esta é a página inicial do seu app.</p>
      <Button onClick={() => alert('Você está na Home')} variant="primary">
        Saiba mais
      </Button>
    </div>
  );
};

export default HomePage;
