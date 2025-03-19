
import React, { useEffect, useRef } from 'react';
import { motion, useAnimation } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

const MissionSection: React.FC = () => {
  const controls = useAnimation();
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.2,
  });

  useEffect(() => {
    if (inView) {
      controls.start('visible');
    }
  }, [controls, inView]);

  const containerVariants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: {
        duration: 0.6,
        ease: "easeOut"
      }
    },
  };

  return (
    <section id="about" className="py-20 md:py-32 bg-white relative overflow-hidden">
      <div className="container mx-auto px-4">
        <motion.div
          ref={ref}
          variants={containerVariants}
          initial="hidden"
          animate={controls}
          className="max-w-7xl mx-auto"
        >
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div variants={itemVariants} className="order-2 lg:order-1">
              <div className="flex items-center space-x-2 mb-6">
                <div className="h-px w-10 bg-havosense-blue"></div>
                <span className="text-havosense-blue-dark text-sm font-medium tracking-wider uppercase">Our Mission</span>
              </div>
              
              <h2 className="text-3xl md:text-4xl font-bold mb-6 leading-tight">
                Creating cleaner, healthier, and more sustainable urban environments
              </h2>
              
              <p className="text-gray-700 mb-8 text-lg leading-relaxed">
                At HavoSense, we are committed to transforming urban planning with a focus on air quality and natural ventilation. Our innovative approach ensures that cities are designed with human health at the center.
              </p>
              
              <div className="space-y-4">
                {[
                  "We analyze airflow patterns in urban environments",
                  "We design structures that enhance natural ventilation",
                  "We empower citizens to take action against pollution",
                  "We collaborate with authorities to implement sustainable solutions"
                ].map((item, index) => (
                  <motion.div
                    key={index}
                    variants={itemVariants}
                    className="flex items-start space-x-3"
                  >
                    <div className="flex-shrink-0 mt-1">
                      <svg className="h-5 w-5 text-havosense-blue-dark" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                    </div>
                    <p className="text-gray-700">{item}</p>
                  </motion.div>
                ))}
              </div>
            </motion.div>
            
            <motion.div
              variants={itemVariants}
              className="order-1 lg:order-2 relative"
              whileHover={{ scale: 1.02 }}
              transition={{ duration: 0.3 }}
            >
              <div className="relative rounded-lg overflow-hidden shadow-medium bg-havosense-blue-light h-full min-h-[400px] flex items-center justify-center">
                <div className="absolute inset-0 bg-gradient-radial from-havosense-blue-light to-havosense-blue opacity-20" />
                <div className="absolute inset-0 flex items-center justify-center">
                  <svg className="w-3/4 h-3/4 text-havosense-blue opacity-20" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M4.5 9.5a5 5 0 117.5-4.33A3.5 3.5 0 1115.5 9.5h-11z" />
                    <path d="M4.5 15a4 4 0 017.67-1.6A3.5 3.5 0 0116 17a3 3 0 013 3H4a3.5 3.5 0 01.5-18z" />
                  </svg>
                </div>
                <div className="relative z-10 p-8 text-center">
                  <h3 className="text-xl font-bold mb-4 text-havosense-blue-dark">Clean Air is a Fundamental Right</h3>
                  <p className="text-gray-700">
                    We believe that everyone deserves to breathe clean air. Our mission is to make this a reality through thoughtful urban design and community engagement.
                  </p>
                </div>
              </div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default MissionSection;
