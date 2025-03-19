
import React, { useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import AirflowAnimation from './AirflowAnimation';

const HeroSection: React.FC = () => {
  const heroRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleParallax = () => {
      if (!heroRef.current) return;
      const scrollPosition = window.scrollY;
      heroRef.current.style.transform = `translateY(${scrollPosition * 0.3}px)`;
      heroRef.current.style.opacity = `${1 - scrollPosition / 700}`;
    };

    window.addEventListener('scroll', handleParallax);
    return () => window.removeEventListener('scroll', handleParallax);
  }, []);

  return (
    <div id="home" className="relative min-h-screen flex items-center justify-center pt-20 overflow-hidden bg-gradient-to-b from-havosense-blue-light to-white">
      <div 
        className="absolute inset-0 bg-city-pattern opacity-5"
        style={{ 
          backgroundSize: '60px 60px',
          backgroundAttachment: 'fixed',
        }}
      />
      
      <AirflowAnimation />
      
      <div className="container mx-auto px-4 z-10">
        <div className="flex flex-col items-center text-center max-w-4xl mx-auto">
          <motion.div 
            ref={heroRef}
            className="relative z-10 py-16"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1 }}
          >
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.3 }}
              className="mb-5"
            >
              <span className="inline-block py-1 px-3 rounded-full bg-havosense-blue-light text-havosense-blue-dark text-xs font-medium tracking-wide mb-6">
                BREATHE FREELY
              </span>
            </motion.div>
            
            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.5 }}
              className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-6"
            >
              Building Cities Where You Can{' '}
              <span className="text-havosense-blue-dark">Breathe Freely</span>
            </motion.h1>
            
            <motion.p
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.7 }}
              className="text-lg md:text-xl text-gray-700 max-w-3xl mx-auto mb-10"
            >
              We design sustainable urban environments that enhance natural airflow, reduce pollution, and create healthier cities where clean air is a fundamental right.
            </motion.p>
            
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.9 }}
              className="flex flex-col sm:flex-row items-center justify-center gap-4"
            >
              <a 
                href="#services" 
                className="px-8 py-3 rounded-md bg-havosense-blue-dark text-white font-medium shadow-sm hover:shadow-md transition-all duration-300 hover:bg-opacity-90 w-full sm:w-auto text-center"
              >
                Our Services
              </a>
              <a 
                href="#app" 
                className="px-8 py-3 rounded-md border border-havosense-blue-dark text-havosense-blue-dark font-medium hover:bg-havosense-blue-light transition-all duration-300 w-full sm:w-auto text-center"
              >
                Report Pollution
              </a>
            </motion.div>
          </motion.div>
        </div>
      </div>
      
      <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-white to-transparent" />
    </div>
  );
};

export default HeroSection;
