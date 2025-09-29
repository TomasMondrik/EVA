import React from 'react';
import './ProcessSection.css';

const ProcessSection = () => {
  const steps = [
    {
      icon: "✦",
      title: "Control",
      description: "La IA observa y analiza todo el exterior, todo el tiempo"
    },
    {
      icon: "🔍",
      title: "Detección",
      description: "Al detectar algo inusual el sistema pasa al instante al siguiente paso"
    },
    {
      icon: "⚠",
      title: "Alerta",
      description: "Se manda una alerta al momento al usuario y a la policía"
    },
    {
      icon: "🛡",
      title: "Acción",
      description: "La policía sabe que sucedió y donde para que acudan a solucionar"
    }
  ];

  return (
    <section className="process">
      <div className="process-container">
        <h2 className="process-title">¿Como funciona el sistema EVA?</h2>
        <p className="process-subtitle">
          Detectamos, verificamos, actuamos : Tu propiedad está protegida 24/7 con la 
          tecnología más inteligente.
        </p>
        
        <div className="process-steps">
          {steps.map((step, index) => (
            <div key={index} className="process-step">
              <div className="step-icon">
                <span>{step.icon}</span>
              </div>
              <h3 className="step-title">{step.title}</h3>
              <p className="step-description">{step.description}</p>
              {index < steps.length - 1 && (
                <div className="step-arrow">→</div>
              )}
            </div>
          ))}
        </div>
        
        <div className="process-cta">
          <button className="process-cta-btn">
            Quiero estar protegido
          </button>
        </div>
      </div>
    </section>
  );
};

export default ProcessSection;