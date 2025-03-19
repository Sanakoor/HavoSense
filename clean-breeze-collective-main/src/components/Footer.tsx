
import React from 'react';
import { motion } from 'framer-motion';

const Footer: React.FC = () => {
  return (
    <footer id="contact" className="bg-white pt-16 pb-8 relative">
      <div className="container mx-auto px-4">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-12 gap-8 mb-12 pb-12 border-b border-gray-200">
            <div className="md:col-span-4">
              <div className="mb-6">
                <span className="text-2xl font-bold text-havosense-blue-dark">
                  Havo<span className="text-black">Sense</span>
                </span>
              </div>
              <p className="text-gray-700 mb-6">
                Building sustainable cities with clean air and natural ventilation. We're committed to making breathable urban environments a reality.
              </p>
              <div className="flex space-x-4">
                {['twitter', 'facebook', 'instagram', 'linkedin'].map((social) => (
                  <a 
                    key={social}
                    href="#" 
                    className="w-10 h-10 rounded-full bg-havosense-gray flex items-center justify-center text-gray-700 hover:bg-havosense-blue-light hover:text-havosense-blue-dark transition-colors duration-300"
                  >
                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                      {social === 'twitter' && (
                        <path d="M22,5.8a8.49,8.49,0,0,1-2.36.64,4.13,4.13,0,0,0,1.81-2.27,8.21,8.21,0,0,1-2.61,1,4.1,4.1,0,0,0-7,3.74A11.64,11.64,0,0,1,3.39,4.62a4.16,4.16,0,0,0-.55,2.07,4.09,4.09,0,0,0,1.82,3.41,4.05,4.05,0,0,1-1.86-.51v.05a4.1,4.1,0,0,0,3.3,4,3.93,3.93,0,0,1-1.85.07,4.11,4.11,0,0,0,3.83,2.84A8.22,8.22,0,0,1,3,18.34a7.93,7.93,0,0,1-1-.06,11.57,11.57,0,0,0,6.29,1.85A11.59,11.59,0,0,0,20,8.45c0-.17,0-.35,0-.53A8.43,8.43,0,0,0,22,5.8Z" />
                      )}
                      {social === 'facebook' && (
                        <path d="M20.9,2H3.1A1.1,1.1,0,0,0,2,3.1V20.9A1.1,1.1,0,0,0,3.1,22h9.58V14.25h-2.6v-3h2.6V9a3.64,3.64,0,0,1,3.88-4,20.26,20.26,0,0,1,2.33.12v2.7H17.3c-1.26,0-1.5.6-1.5,1.47v1.93h3l-.39,3H15.8V22h5.1A1.1,1.1,0,0,0,22,20.9V3.1A1.1,1.1,0,0,0,20.9,2Z" />
                      )}
                      {social === 'instagram' && (
                        <path d="M12,2.16c3.2,0,3.58,0,4.85.07,3.25.15,4.77,1.69,4.92,4.92.06,1.27.07,1.65.07,4.85s0,3.59-.07,4.85c-.15,3.23-1.66,4.77-4.92,4.92-1.27.06-1.64.07-4.85.07s-3.58,0-4.85-.07c-3.26-.15-4.77-1.7-4.92-4.92-.06-1.27-.07-1.64-.07-4.85s0-3.58.07-4.85C2.38,3.92,3.9,2.38,7.15,2.23,8.42,2.18,8.8,2.16,12,2.16ZM12,0C8.74,0,8.33,0,7.05.07c-4.35.2-6.78,2.62-7,7C0,8.33,0,8.74,0,12S0,15.67.07,17c.2,4.36,2.62,6.78,7,7C8.33,24,8.74,24,12,24s3.67,0,4.95-.07c4.35-.2,6.78-2.62,7-7C24,15.67,24,15.26,24,12s0-3.67-.07-4.95c-.2-4.35-2.62-6.78-7-7C15.67,0,15.26,0,12,0Zm0,5.84A6.16,6.16,0,1,0,18.16,12,6.16,6.16,0,0,0,12,5.84ZM12,16a4,4,0,1,1,4-4A4,4,0,0,1,12,16ZM18.41,4.15a1.44,1.44,0,1,0,1.43,1.44A1.44,1.44,0,0,0,18.41,4.15Z" />
                      )}
                      {social === 'linkedin' && (
                        <path d="M21.32,2H2.68A.68.68,0,0,0,2,2.68V21.32a.68.68,0,0,0,.68.68H21.32a.68.68,0,0,0,.68-.68V2.68A.68.68,0,0,0,21.32,2ZM8.1,18.9H5.28V9.58H8.1Zm-1.41-10.6a1.64,1.64,0,1,1,1.63-1.63A1.64,1.64,0,0,1,6.69,8.3Zm12.21,10.6H16.09V14c0-1.06,0-2.41-1.47-2.41s-1.7,1.15-1.7,2.33V18.9H10.11V9.58H12.8v1.23h0a3,3,0,0,1,2.67-1.47c2.86,0,3.39,1.88,3.39,4.32Z" />
                      )}
                    </svg>
                  </a>
                ))}
              </div>
            </div>
            
            <div className="md:col-span-2">
              <h3 className="font-bold text-lg mb-4">Company</h3>
              <ul className="space-y-3">
                {['About', 'Team', 'Careers', 'Press'].map((item) => (
                  <li key={item}>
                    <a href="#" className="text-gray-700 hover:text-havosense-blue-dark transition-colors">
                      {item}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
            
            <div className="md:col-span-2">
              <h3 className="font-bold text-lg mb-4">Services</h3>
              <ul className="space-y-3">
                {['Urban Design', 'Air Monitoring', 'Consultation', 'App Solutions'].map((item) => (
                  <li key={item}>
                    <a href="#" className="text-gray-700 hover:text-havosense-blue-dark transition-colors">
                      {item}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
            
            <div className="md:col-span-4">
              <h3 className="font-bold text-lg mb-4">Stay Updated</h3>
              <p className="text-gray-700 mb-4">Subscribe to our newsletter for the latest news on sustainable urban planning and air quality initiatives.</p>
              <form className="flex">
                <input 
                  type="email" 
                  placeholder="Enter your email" 
                  className="w-full px-4 py-2 rounded-l-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-havosense-blue focus:border-transparent"
                />
                <button 
                  type="submit" 
                  className="px-4 py-2 bg-havosense-blue-dark text-white rounded-r-md hover:bg-opacity-90 transition-colors"
                >
                  Subscribe
                </button>
              </form>
            </div>
          </div>
          
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-700 text-sm mb-4 md:mb-0">
              © {new Date().getFullYear()} HavoSense. All rights reserved.
            </p>
            <div className="flex space-x-4 text-sm text-gray-700">
              <a href="#" className="hover:text-havosense-blue-dark transition-colors">Privacy Policy</a>
              <a href="#" className="hover:text-havosense-blue-dark transition-colors">Terms of Service</a>
              <a href="#" className="hover:text-havosense-blue-dark transition-colors">Cookie Policy</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
