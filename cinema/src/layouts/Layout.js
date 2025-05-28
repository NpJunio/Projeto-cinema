import React from 'react';
import './Layout.css';  // importa o CSS do layout

const Layout = ({ children }) => {
  return (
    <>
      <nav className="menu">
        <ul className="menu-list">
          <li><a href="/" className="menu-link">Início</a></li>
          <li><a href="/filmes" className="menu-link">filmes</a></li>
          <li><a href="/filmes" className="menu-link">Sala</a></li>
          <li><a href="/filmes" className="menu-link">Sessão</a></li>
          <li><a href="/filmes" className="menu-link">Ingresso</a></li>
        </ul>
      </nav>

      <main className="layout-content">
        {children}
      </main>
    </>
  );
};

export default Layout;
