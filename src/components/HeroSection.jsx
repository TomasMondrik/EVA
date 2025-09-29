import React from 'react';
import './HeroSection.css';

const HeroSection = () => {
  return (
    <section className="hero">
      <div className="hero-background">
        <img 
          src="https://images.pexels.com/photos/4545962/pexels-photo-4545962.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" 
          alt="Family at home" 
          className="hero-bg-image"
        />
        <div className="hero-overlay"></div>
      </div>
      
      <div className="hero-content">
        <h1 className="hero-title">
          La seguridad del <span className="highlight">futuro</span>, hoy
        </h1>
        
        <p className="hero-subtitle">
          Cuidá tu hogar con monitoreo inteligente, alertas instantáneas y control remoto
        </p>
        
        <div className="hero-cta">
          <button className="hero-main-btn">
            Habla con un asesor, hoy
          </button>
          <p className="hero-cta-subtitle">
            Cotizá ahora y respondemos por WhatsApp rápido
          </p>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;