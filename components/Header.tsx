import React, { useState } from 'react';
import { Menu, X, User, Globe, ChevronDown } from 'lucide-react';
import { Link, useLocation } from 'react-router-dom';

const Header: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isUserMenuOpen, setIsUserMenuOpen] = useState(false);
  
  // Switcher States
  const [currency, setCurrency] = useState('NGN');
  const [isCurrencyOpen, setIsCurrencyOpen] = useState(false);
  
  const [language, setLanguage] = useState('EN');
  const [isLangOpen, setIsLangOpen] = useState(false);

  const location = useLocation();

  const isActive = (path: string) => {
    return location.pathname === path ? 'text-primary-600 font-bold' : 'text-gray-600 font-medium hover:text-primary-600';
  };

  const currencies = ['NGN', 'USD', 'GBP', 'EUR'];
  const languages = ['EN', 'FR', 'ES', 'DE'];

  const closeAllMenus = () => {
    setIsCurrencyOpen(false);
    setIsLangOpen(false);
    setIsUserMenuOpen(false);
  };

  const toggleCurrency = (e: React.MouseEvent) => {
    e.stopPropagation();
    setIsCurrencyOpen(!isCurrencyOpen);
    setIsLangOpen(false);
    setIsUserMenuOpen(false);
  };

  const toggleLanguage = (e: React.MouseEvent) => {
    e.stopPropagation();
    setIsLangOpen(!isLangOpen);
    setIsCurrencyOpen(false);
    setIsUserMenuOpen(false);
  };

  const toggleUserMenu = (e: React.MouseEvent) => {
    e.stopPropagation();
    setIsUserMenuOpen(!isUserMenuOpen);
    setIsCurrencyOpen(false);
    setIsLangOpen(false);
  };

  return (
    <header className="sticky top-0 z-50 bg-white/95 backdrop-blur-sm shadow-sm border-b border-gray-100 transition-all" onClick={closeAllMenus}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          {/* Logo */}
          <Link to="/" className="flex-shrink-0 flex items-center cursor-pointer">
            <div className="w-10 h-10 bg-primary-900 rounded-lg flex items-center justify-center mr-2 shadow-lg">
              <span className="text-white font-bold text-xl">S</span>
            </div>
            <span className="font-bold text-2xl text-primary-900 tracking-tighter">SmallStay</span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex space-x-8 items-center">
            <Link to="/" className={`${isActive('/')} transition-colors`}>Shortlets</Link>
            <Link to="/hotels" className={`${isActive('/hotels')} transition-colors`}>Hotels</Link>
            <Link to="/cars" className={`${isActive('/cars')} transition-colors`}>Cars</Link>
            <Link to="/boats" className={`${isActive('/boats')} transition-colors`}>Boats</Link>
            <div className="h-4 w-px bg-gray-300"></div>
            <Link to="/list-property" className={`${isActive('/list-property')} transition-colors`}>Become a Host</Link>
          </nav>

          {/* Right Side Icons */}
          <div className="hidden md:flex items-center space-x-6">
            
            {/* Currency Switcher */}
            <div className="relative">
                <button 
                    onClick={toggleCurrency}
                    className="text-gray-500 hover:text-primary-600 transition-colors flex items-center text-sm font-medium focus:outline-none"
                >
                    <span>{currency}</span>
                    <ChevronDown className={`w-3 h-3 ml-1 transition-transform ${isCurrencyOpen ? 'rotate-180' : ''}`} />
                </button>
                {isCurrencyOpen && (
                    <div className="absolute top-full right-0 mt-2 w-24 bg-white rounded-xl shadow-lg border border-gray-100 py-1 overflow-hidden animate-in fade-in slide-in-from-top-2 duration-200">
                        {currencies.map((curr) => (
                            <button
                                key={curr}
                                onClick={(e) => { e.stopPropagation(); setCurrency(curr); setIsCurrencyOpen(false); }}
                                className={`w-full text-left px-4 py-2 text-sm hover:bg-gray-50 flex items-center justify-between ${currency === curr ? 'text-primary-600 font-bold' : 'text-gray-700'}`}
                            >
                                {curr}
                            </button>
                        ))}
                    </div>
                )}
            </div>

            {/* Language Switcher */}
            <div className="relative">
                <button 
                    onClick={toggleLanguage}
                    className="text-gray-500 hover:text-primary-600 transition-colors flex items-center text-sm font-medium focus:outline-none"
                >
                    <Globe className="w-4 h-4 mr-1" />
                    <span>{language}</span>
                </button>
                {isLangOpen && (
                    <div className="absolute top-full right-0 mt-2 w-24 bg-white rounded-xl shadow-lg border border-gray-100 py-1 overflow-hidden animate-in fade-in slide-in-from-top-2 duration-200">
                        {languages.map((lang) => (
                            <button
                                key={lang}
                                onClick={(e) => { e.stopPropagation(); setLanguage(lang); setIsLangOpen(false); }}
                                className={`w-full text-left px-4 py-2 text-sm hover:bg-gray-50 flex items-center justify-between ${language === lang ? 'text-primary-600 font-bold' : 'text-gray-700'}`}
                            >
                                {lang}
                            </button>
                        ))}
                    </div>
                )}
            </div>

            {/* User Menu */}
            <div className="relative">
                <button 
                  onClick={toggleUserMenu}
                  className="flex items-center space-x-2 border border-gray-300 rounded-full p-2 pl-4 hover:shadow-md transition-shadow bg-white focus:outline-none"
                >
                  <Menu className="w-5 h-5 text-gray-600" />
                  <div className="bg-gray-500 text-white rounded-full p-1">
                    <User className="w-5 h-5" />
                  </div>
                </button>
                
                {isUserMenuOpen && (
                  <div className="absolute right-0 mt-2 w-48 bg-white rounded-xl shadow-lg border border-gray-100 py-1 z-50 animate-in fade-in slide-in-from-top-2 duration-200">
                    <Link 
                      to="/dashboard" 
                      className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-50"
                      onClick={() => setIsUserMenuOpen(false)}
                    >
                      Dashboard
                    </Link>
                     <Link 
                      to="/list-property" 
                      className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-50"
                      onClick={() => setIsUserMenuOpen(false)}
                    >
                      Become a Host
                    </Link>
                    <Link 
                      to="/affiliate" 
                      className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-50 font-medium text-accent-600"
                      onClick={() => setIsUserMenuOpen(false)}
                    >
                      Affiliate (Earn 10%)
                    </Link>
                    <div className="border-t border-gray-100 my-1"></div>
                    <a href="#" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-50">Log In</a>
                    <a href="#" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-50">Sign Up</a>
                  </div>
                )}
            </div>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="text-gray-600 hover:text-gray-900 focus:outline-none"
            >
              {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden bg-white border-t border-gray-100 absolute w-full shadow-xl">
          <div className="px-4 pt-2 pb-3 space-y-1">
            <Link to="/" className="block py-3 text-base font-medium text-gray-900 border-b border-gray-50" onClick={() => setIsMenuOpen(false)}>Shortlets</Link>
            <Link to="/hotels" className="block py-3 text-base font-medium text-gray-600 border-b border-gray-50" onClick={() => setIsMenuOpen(false)}>Hotels</Link>
            <Link to="/cars" className="block py-3 text-base font-medium text-gray-600 border-b border-gray-50" onClick={() => setIsMenuOpen(false)}>Cars</Link>
            <Link to="/boats" className="block py-3 text-base font-medium text-gray-600 border-b border-gray-50" onClick={() => setIsMenuOpen(false)}>Boats</Link>
            <Link to="/dashboard" className="block py-3 text-base font-medium text-gray-600 border-b border-gray-50" onClick={() => setIsMenuOpen(false)}>Dashboard</Link>
            <Link to="/list-property" className="block py-3 text-base font-medium text-accent-600" onClick={() => setIsMenuOpen(false)}>Become a Host</Link>
            <Link to="/affiliate" className="block py-3 text-base font-medium text-green-600 border-b border-gray-50" onClick={() => setIsMenuOpen(false)}>Affiliate Program</Link>
            
            {/* Mobile Switchers */}
            <div className="flex items-center justify-between py-3 border-b border-gray-50">
               <span className="text-gray-500 font-medium">Settings</span>
               <div className="flex space-x-4">
                  <button onClick={() => setCurrency(currency === 'NGN' ? 'USD' : 'NGN')} className="text-sm font-bold text-gray-700 border px-2 py-1 rounded">{currency}</button>
                  <button onClick={() => setLanguage(language === 'EN' ? 'FR' : 'EN')} className="text-sm font-bold text-gray-700 border px-2 py-1 rounded flex items-center"><Globe className="w-3 h-3 mr-1"/> {language}</button>
               </div>
            </div>

            <div className="py-2 flex space-x-4 mt-2">
               <button className="w-full py-2 border border-gray-300 rounded-lg text-gray-700 font-medium">Log in</button>
               <button className="w-full py-2 bg-primary-900 text-white rounded-lg font-medium">Sign up</button>
            </div>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;
