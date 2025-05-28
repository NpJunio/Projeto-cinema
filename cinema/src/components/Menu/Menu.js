import React from 'react';
import styles from './Menu.module.css';

const Menu = () => {
  return (
    <nav className="menu">
      <ul>
        <li><a href="/">Início</a></li>
        <li><a href="/sobre">Sobre</a></li>
        <li><a href="/contato">Contato</a></li>
      </ul>
    </nav>
  );
};

export default Menu;
