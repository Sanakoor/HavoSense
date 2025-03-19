
import React from 'react';

const AirflowAnimation: React.FC = () => {
  const particles = Array.from({ length: 50 }).map((_, i) => {
    const size = Math.random() * 4 + 1;
    const speed = Math.random() * 20 + 5;
    const opacity = Math.random() * 0.5 + 0.1;
    const delay = Math.random() * 5;
    const position = Math.random() * 100;
    
    return (
      <div 
        key={i}
        className="absolute rounded-full bg-havosense-blue"
        style={{
          width: `${size}px`,
          height: `${size}px`,
          opacity: opacity,
          top: `${Math.random() * 100}%`,
          left: `${position}%`,
          animation: `airflow ${speed}s ease-in-out infinite`,
          animationDelay: `${delay}s`
        }}
      />
    );
  });

  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {particles}
    </div>
  );
};

export default AirflowAnimation;
