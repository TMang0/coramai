import React, { useState, useEffect } from 'react';
import './coramai.css';

const TOTAL = 100;

const LoveForever = () => {
  const [phase, setPhase] = useState('intro'); // 'intro' | 'zoom' | 'ready'
  const items = Array.from({ length: TOTAL }, (_, i) => i + 1);

  useEffect(() => {
    // Fase 1 → 2: después de que el corazón se forma + brillo pasa
    const zoomTimer = setTimeout(() => setPhase('zoom'), 3800);
    // Fase 2 → 3: después del zoom dramático
    const readyTimer = setTimeout(() => setPhase('ready'), 5500);

    return () => {
      clearTimeout(zoomTimer);
      clearTimeout(readyTimer);
    };
  }, []);

  return (
    <div className="love-page">

      {/* ====== INTRO NETFLIX ====== */}
      {phase !== 'ready' && (
        <div className={`intro-overlay ${phase === 'zoom' ? 'intro-overlay--zoom' : ''}`}>

          {/* Partículas de fondo */}
          <div className="intro-particles">
            {Array.from({ length: 30 }, (_, i) => (
              <span
                key={i}
                className="intro-particle"
                style={{
                  '--px': `${Math.random() * 100}%`,
                  '--py': `${Math.random() * 100}%`,
                  '--d':  `${2 + Math.random() * 4}s`,
                  '--s':  `${2 + Math.random() * 4}px`,
                }}
              />
            ))}
          </div>

          {/* Contenedor del corazón */}
          <div className="intro-heart-wrapper">
            <div className="intro-heart-container">
              {/* SVG de 5 "ribbons"  */}
              <svg
                className="intro-heart-svg"
                viewBox="0 0 512 512"
                xmlns="http://www.w3.org/2000/svg"
              >
                <defs>
                  <clipPath id="heartClip">
                    <path d="M462.3 62.6C407.5 15.9 326 24.3 275.7 76.2
                             L256 96.5 236.3 76.2C186.1 24.3 104.5 15.9
                             49.7 62.6c-62.8 53.6-66.1 149.8-9.9 207.9
                             l193.5 199.8c12.5 12.9 32.8 12.9 45.3 0
                             l193.5-199.8c56.3-58.1 53-154.3-9.8-207.9z" />
                  </clipPath>
                </defs>

                {/* ribbons */}
                <g clipPath="url(#heartClip)">
                  <rect className="ribbon r1" x="0"   y="0" width="102.4" height="512" />
                  <rect className="ribbon r2" x="102.4" y="0" width="102.4" height="512" />
                  <rect className="ribbon r3" x="204.8" y="0" width="102.4" height="512" />
                  <rect className="ribbon r4" x="307.2" y="0" width="102.4" height="512" />
                  <rect className="ribbon r5" x="409.6" y="0" width="102.4" height="512" />
                </g>
              </svg>

              {/* Brillo */}
              <div className="intro-shine"></div>
            </div>

            {/* Texto de intro */}
            <div className="intro-text">Te amo por siempre</div>
          </div>
        </div>
      )}

      {/* ====== CONTENIDO PRINCIPAL ====== */}
      <div className={`main-content ${phase === 'ready' ? 'main-content--visible' : ''}`}>
        <div id="ui">
          {items.map((i) => (
            <div className="love" style={{ '--i': i }} key={i}>
              <div className="love_horizontal">
                <div className="love_vertical">
                  <div className="love_word">Te amo</div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default LoveForever;