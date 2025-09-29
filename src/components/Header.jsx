import React from 'react';
import './Header.css';

const Header = () => {
  return (
    <header className="header">
      <div className="header-container">
        <div className="logo">
          <span className="logo-text">EVA</span>
          <span className="logo-subtitle">Security System</span>
        </div>
        
        <nav className="nav">
          <a href="#soluciones" className="nav-link">Soluciones</a>
          <a href="#clientes" className="nav-link">Clientes</a>
          <a href="#seguridad" className="nav-link">Seguridad</a>
          <a href="#precios" className="nav-link">Precios</a>
        </nav>
        
        <div className="header-actions">
          <button className="login-btn">Iniciar sesión</button>
          <button className="cta-btn">Habla con nosotros</button>
        </div>
      </div>
    </header>
  );
};

export default Header;