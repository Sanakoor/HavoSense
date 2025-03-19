
import React from 'react';
import { motion, useAnimation } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

const AppSection: React.FC = () => {
  const controls = useAnimation();
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  React.useEffect(() => {
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

  const features = [
    {
      title: "Report Violations",
      description: "Instantly report illegal burning and pollution violations in your area."
    },
    {
      title: "Real-time Updates",
      description: "Receive notifications about air quality and pollution reports near you."
    },
    {
      title: "Track Progress",
      description: "Follow up on your reports and see how local authorities are responding."
    }
  ];

  return (
    <section id="app" className="py-20 md:py-32 relative overflow-hidden bg-white">
      <div className="absolute top-0 left-0 right-0 h-20 bg-havosense-gray-light clip-path-slant" />
      
      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          ref={ref}
          initial="hidden"
          animate={controls}
          variants={containerVariants}
          className="max-w-7xl mx-auto"
        >
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <motion.div variants={itemVariants} className="relative">
              <div className="relative z-10 bg-havosense-blue-dark rounded-2xl overflow-hidden shadow-strong">
                <div className="absolute inset-0 bg-gradient-to-br from-havosense-blue-dark to-blue-800 opacity-90" />
                
                <div className="relative z-10 p-8">
                  <div className="flex justify-between items-center mb-6">
                    <div className="flex items-center space-x-2 text-white">
                      <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22Z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                        <path d="M7.5 12H16.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                        <path d="M12 7.5V16.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                      </svg>
                      <span className="font-medium">New Report</span>
                    </div>
                    <div className="text-white/70 text-sm">12:30 PM</div>
                  </div>
                  
                  <div className="bg-white/10 rounded-lg p-4 mb-4 backdrop-blur-sm">
                    <h4 className="text-white font-medium mb-2">Report Pollution</h4>
                    <div className="grid grid-cols-2 gap-3 mb-4">
                      <div className="col-span-2 bg-white/5 rounded p-2 border border-white/10">
                        <label className="text-white/70 text-xs block mb-1">Location</label>
                        <div className="text-white text-sm">123 Main Street, Cityville</div>
                      </div>
                      <div className="bg-white/5 rounded p-2 border border-white/10">
                        <label className="text-white/70 text-xs block mb-1">Type</label>
                        <div className="text-white text-sm">Illegal Burning</div>
                      </div>
                      <div className="bg-white/5 rounded p-2 border border-white/10">
                        <label className="text-white/70 text-xs block mb-1">Severity</label>
                        <div className="text-white text-sm">High</div>
                      </div>
                    </div>
                    <div className="flex justify-end">
                      <button className="bg-white text-havosense-blue-dark px-4 py-2 rounded text-sm font-medium">
                        Submit Report
                      </button>
                    </div>
                  </div>
                  
                  <div className="bg-white/10 rounded-lg p-4 backdrop-blur-sm">
                    <div className="flex items-center justify-between mb-3">
                      <h4 className="text-white font-medium">Air Quality Index</h4>
                      <span className="text-white/70 text-sm">Now</span>
                    </div>
                    <div className="flex items-center space-x-2 mb-2">
                      <div className="w-2/3 h-2 bg-white/20 rounded-full overflow-hidden">
                        <div className="h-full bg-green-400 rounded-full" style={{ width: '65%' }}></div>
                      </div>
                      <span className="text-white text-sm font-medium">65</span>
                    </div>
                    <span className="text-green-300 text-xs">Good - Safe to breathe</span>
                  </div>
                </div>
              </div>
              
              <div className="absolute -top-6 -left-6 w-24 h-24 bg-havosense-blue rounded-full opacity-20 blur-xl" />
              <div className="absolute -bottom-10 -right-10 w-32 h-32 bg-havosense-blue rounded-full opacity-20 blur-xl" />
            </motion.div>
            
            <motion.div variants={itemVariants}>
              <div className="flex items-center space-x-2 mb-6">
                <div className="h-px w-10 bg-havosense-blue"></div>
                <span className="text-havosense-blue-dark text-sm font-medium tracking-wider uppercase">Mobile App</span>
              </div>
              
              <h2 className="text-3xl md:text-4xl font-bold mb-6 leading-tight">
                Report Pollution and Take Action
              </h2>
              
              <p className="text-gray-700 mb-8 text-lg">
                Our mobile application empowers citizens to report air pollution violations, enabling authorities to take swift action and protect public health.
              </p>
              
              <div className="space-y-6 mb-10">
                {features.map((feature, index) => (
                  <motion.div
                    key={index}
                    variants={itemVariants}
                    className="flex items-start space-x-4"
                  >
                    <div className="flex-shrink-0 w-10 h-10 rounded-full bg-havosense-blue-light flex items-center justify-center text-havosense-blue-dark">
                      <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M8 12L11 15L16 9" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                        <path d="M12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22Z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                      </svg>
                    </div>
                    <div>
                      <h3 className="text-lg font-medium mb-1">{feature.title}</h3>
                      <p className="text-gray-700">{feature.description}</p>
                    </div>
                  </motion.div>
                ))}
              </div>
              
              <motion.div variants={itemVariants} className="flex flex-col sm:flex-row items-center gap-4">
                <a 
                  href="#" 
                  className="flex items-center justify-center px-6 py-3 bg-black text-white rounded-lg w-full sm:w-auto"
                >
                  <svg className="w-6 h-6 mr-2" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M17.5,1H8.5C6.6,1,5,2.6,5,4.5v15C5,21.4,6.6,23,8.5,23h9c1.9,0,3.5-1.6,3.5-3.5v-15C21,2.6,19.4,1,17.5,1z M13,21.5
                      c-0.8,0-1.5-0.7-1.5-1.5s0.7-1.5,1.5-1.5s1.5,0.7,1.5,1.5S13.8,21.5,13,21.5z M18,17H8V5h10V17z"/>
                  </svg>
                  <div className="text-left">
                    <div className="text-xs">Download on the</div>
                    <div className="text-sm font-medium">App Store</div>
                  </div>
                </a>
                <a 
                  href="#" 
                  className="flex items-center justify-center px-6 py-3 bg-black text-white rounded-lg w-full sm:w-auto"
                >
                  <svg className="w-6 h-6 mr-2" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M3.3,20.9c0.1,0.7,0.5,1.3,1,1.7c0.6,0.4,1.2,0.4,1.9,0.2c2.3-0.8,9.8-4.2,13.7-8.1C22.9,12,23.5,7.1,21,4.7
                      c-0.1-0.1-0.2-0.2-0.3-0.2c-2.9-2.1-7.2-1.2-12.5,2.5C3.9,9.7,2.2,11.4,1.6,13c-0.6,1.7-0.5,3.2,0.2,4.4c0.2,0.3,0.4,0.6,0.6,0.9
                      C2.6,19.1,3,20,3.3,20.9z"/>
                  </svg>
                  <div className="text-left">
                    <div className="text-xs">GET IT ON</div>
                    <div className="text-sm font-medium">Google Play</div>
                  </div>
                </a>
              </motion.div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default AppSection;
