import React from 'react';
import './Layout.css';  // importa o CSS do layout

const Layout = ({ children }) => {
  return (
    <>
      <nav className="menu">
        <ul className="menu-list">
          <li><a href="/login" className="menu-link">Login</a></li>
          <li><a href="/" className="menu-link">Início</a></li>
          <li><a href="/filmes" className="menu-link">filmes</a></li>
          <li><a href="/sala" className="menu-link">Sala</a></li>
          <li><a href="/sessao" className="menu-link">Sessão</a></li>
          <li><a href="/ingresso" className="menu-link">ingresso</a></li>
        </ul>
      </nav>

      <main className="layout-content">
        {children}
      </main>
    </>
  );
};

export default Layout;
