import React, { useState } from 'react';
import './FeaturesSection.css';

const FeaturesSection = () => {
  const [hoveredCard, setHoveredCard] = useState(null);

  const features = [
    {
      id: 1,
      title: "Controlá tu casa en cualquier momento",
      image: "https://images.pexels.com/photos/4050315/pexels-photo-4050315.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
      hoverContent: {
        bullets: [
          "Manejo cerraduras y ventanas",
          "Mirá la actividad de tu casa",
          "Sabé quien ingresó y cuando"
        ],
        link: "Conocé más sobre esto >"
      }
    },
    {
      id: 2,
      title: "Disfruta tranquilo, nosotros te avisamos",
      image: "https://images.pexels.com/photos/3184418/pexels-photo-3184418.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
      hoverContent: {
        description: "Nuestra inteligencia artificial está activa 24/7, avisando de cualquier suceso a vos y a la policía",
        link: "Conocé más de nuestra IA >"
      }
    },
    {
      id: 3,
      title: "Te cuidamos a vos y a tu familia",
      image: "https://images.pexels.com/photos/4473864/pexels-photo-4473864.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
      hoverContent: {
        description: "Disfruta los momentos con tu familia, que son únicos. De cuidarlos nos encargamos nosotros",
        link: "Conocé más de la seguridad >"
      }
    },
    {
      id: 4,
      title: "Aviso instantáneo ante un problema",
      image: "https://images.pexels.com/photos/2116475/pexels-photo-2116475.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
      hoverContent: {
        description: "Si sucede algo avisamos al instante a la policía",
        link: "Conocé más >"
      }
    },
    {
      id: 5,
      title: "La seguridad mas inteligente",
      image: "https://images.pexels.com/photos/442150/pexels-photo-442150.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
      hoverContent: {
        description: "El mejor sistema de inteligencia artificial del mercado entrenado para protegerte a vos",
        link: "Conocé más del sistema >"
      }
    }
  ];

  return (
    <section className="features">
      <div className="features-container">
        <h2 className="features-title">Eva, la mejor seguridad</h2>
        
        <div className="features-grid">
          {features.map((feature) => (
            <div
              key={feature.id}
              className={`feature-card ${feature.id === 1 ? 'large' : ''}`}
              onMouseEnter={() => setHoveredCard(feature.id)}
              onMouseLeave={() => setHoveredCard(null)}
            >
              <div className="feature-image">
                <img src={feature.image} alt={feature.title} />
                <div className="feature-overlay"></div>
              </div>
              
              <div className="feature-content">
                <h3 className="feature-title">{feature.title}</h3>
                
                {hoveredCard === feature.id && (
                  <div className="feature-hover-content">
                    {feature.hoverContent.bullets ? (
                      <ul className="feature-bullets">
                        {feature.hoverContent.bullets.map((bullet, index) => (
                          <li key={index}>{bullet}</li>
                        ))}
                      </ul>
                    ) : (
                      <p className="feature-description">
                        {feature.hoverContent.description}
                      </p>
                    )}
                    <a href="#" className="feature-link">
                      {feature.hoverContent.link}
                    </a>
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>
        
        <div className="features-cta">
          <h3 className="features-cta-text">
            ¡Dejanos cuidarte! <span className="highlight">Contactate</span> con nosotros
          </h3>
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;