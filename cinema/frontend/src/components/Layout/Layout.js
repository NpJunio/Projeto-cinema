// src/components/Layout/Layout.js
import React from 'react';

export default function Layout({ children }) {
  return (
    <div className="layout-container">

      <main className="layout-content">
        {children}
      </main>

      <footer className="layout-footer">
        <p>© 2025 Minha Aplicação - Todos os direitos reservados</p>
      </footer>
    </div>
  );
}
