import React from 'react';
import { Facebook, Twitter, Instagram, Linkedin, Mail, Phone, MapPin } from 'lucide-react';
import { Link } from 'react-router-dom';

const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-900 text-white pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          
          {/* Brand Column */}
          <div className="space-y-4">
            <div className="flex items-center">
               <div className="w-8 h-8 bg-white rounded flex items-center justify-center mr-2">
                 <span className="text-primary-900 font-bold">S</span>
               </div>
               <span className="font-bold text-xl tracking-tight">SmallStay</span>
            </div>
            <p className="text-gray-400 text-sm leading-relaxed">
              Experience the world with the comfort of home. SmallStay connects you with the best short-let apartments and vacation homes across the globe.
            </p>
            <div className="flex space-x-4 pt-2">
              <a href="#" className="text-gray-400 hover:text-white transition-colors"><Facebook className="w-5 h-5" /></a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors"><Twitter className="w-5 h-5" /></a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors"><Instagram className="w-5 h-5" /></a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors"><Linkedin className="w-5 h-5" /></a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-bold mb-6 text-white">Company</h4>
            <ul className="space-y-3 text-sm text-gray-400">
              <li><Link to="/about" className="hover:text-accent-500 transition-colors">About Us</Link></li>
              <li><Link to="/list-property" className="hover:text-accent-500 transition-colors">Become a Host</Link></li>
              <li><Link to="/affiliate" className="hover:text-accent-500 transition-colors font-semibold text-accent-400">Affiliate Program (10%)</Link></li>
              <li><a href="#" className="hover:text-accent-500 transition-colors">Careers</a></li>
              <li><a href="#" className="hover:text-accent-500 transition-colors">Press</a></li>
            </ul>
          </div>

          {/* Support */}
          <div>
            <h4 className="text-lg font-bold mb-6 text-white">Support</h4>
            <ul className="space-y-3 text-sm text-gray-400">
              <li><a href="#" className="hover:text-accent-500 transition-colors">Help Center</a></li>
              <li><a href="#" className="hover:text-accent-500 transition-colors">Safety Information</a></li>
              <li><a href="#" className="hover:text-accent-500 transition-colors">Cancellation Options</a></li>
              <li><a href="#" className="hover:text-accent-500 transition-colors">Report Issue</a></li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-lg font-bold mb-6 text-white">Contact Us</h4>
            <ul className="space-y-4 text-sm text-gray-400">
              <li className="flex items-start">
                <MapPin className="w-5 h-5 mr-3 text-accent-500 flex-shrink-0" />
                <span>123 Victoria Island,<br />Lagos, Nigeria</span>
              </li>
              <li className="flex items-center">
                <Phone className="w-5 h-5 mr-3 text-accent-500 flex-shrink-0" />
                <span>+234 800 SMALLSTAY</span>
              </li>
              <li className="flex items-center">
                <Mail className="w-5 h-5 mr-3 text-accent-500 flex-shrink-0" />
                <span>hello@smallstay.com</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-800 pt-8 flex flex-col md:flex-row justify-between items-center text-sm text-gray-500">
          <p>&copy; {new Date().getFullYear()} SmallStay. All rights reserved.</p>
          <div className="flex space-x-6 mt-4 md:mt-0">
            <a href="#" className="hover:text-white transition-colors">Privacy</a>
            <a href="#" className="hover:text-white transition-colors">Terms</a>
            <a href="#" className="hover:text-white transition-colors">Sitemap</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
