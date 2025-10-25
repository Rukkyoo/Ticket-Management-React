import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { HiMenu, HiX } from 'react-icons/hi';
import Button from '../ui/Button';

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const navigate = useNavigate();

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  const handleLoginClick = () => {
    navigate('/auth/login');
    closeMenu();
  };

  const handleSignupClick = () => {
    navigate('/auth/signup');
    closeMenu();
  };

  return (
    <header className="fixed top-0 left-0 right-0 bg-white z-50 border-b border-gray-200">
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
        <div className="flex items-center gap-2">
          <div className="w-10 h-10 flex items-center justify-center">
            <img 
              src='Ticket.png' 
              alt="TicketFlow Logo" 
              className="w-full h-full object-contain"
            />
          </div>
          <span className="text-xl font-bold text-gray-900">TicketFlow</span>
        </div>
        
        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-8">
          <a href="#features" className="text-gray-600 hover:text-gray-900 transition-colors">
            Features
          </a>
          <a href="#how-it-works" className="text-gray-600 hover:text-gray-900 transition-colors">
            How it Works
          </a>
          <a href="#pricing" className="text-gray-600 hover:text-gray-900 transition-colors">
            Pricing
          </a>
          <a href="#faq" className="text-gray-600 hover:text-gray-900 transition-colors">
            FAQ
          </a>
        </nav>
        
        {/* Desktop Auth Buttons */}
        <div className="hidden md:flex items-center gap-4">
          <button 
            onClick={handleLoginClick}
            className="text-gray-900 cursor-pointer font-semibold hover:text-blue-600 transition-colors"
          >
            Login
          </button>
          <Button variant="primary" onClick={handleSignupClick}>Get Started</Button>
        </div>

        {/* Mobile Hamburger Button */}
        <button
          onClick={toggleMenu}
          className="md:hidden text-gray-900 hover:text-blue-600 transition-colors p-2"
          aria-label="Toggle menu"
        >
          {isMenuOpen ? (
            <HiX size={28} />
          ) : (
            <HiMenu size={28} />
          )}
        </button>
      </div>

      {/* Mobile Menu Overlay */}
      {isMenuOpen && (
        <div
          className="fixed inset-0  bg-opacity-50 z-40 md:hidden"
          onClick={closeMenu}
        />
      )}

      {/* Mobile Menu */}
      <div
        className={`fixed top-[73px] right-0 h-[calc(100vh-73px)] w-64 bg-white shadow-lg transform transition-transform duration-300 ease-in-out z-40 md:hidden ${
          isMenuOpen ? 'translate-x-0' : 'translate-x-full'
        }`}
      >
        <nav className="flex flex-col p-6 gap-6">
          <a
            href="#features"
            onClick={closeMenu}
            className="text-gray-600 hover:text-gray-900 transition-colors py-2 border-b border-gray-100"
          >
            Features
          </a>
          <a
            href="#how-it-works"
            onClick={closeMenu}
            className="text-gray-600 hover:text-gray-900 transition-colors py-2 border-b border-gray-100"
          >
            How it Works
          </a>
          <a
            href="#pricing"
            onClick={closeMenu}
            className="text-gray-600 hover:text-gray-900 transition-colors py-2 border-b border-gray-100"
          >
            Pricing
          </a>
          <a
            href="#faq"
            onClick={closeMenu}
            className="text-gray-600 hover:text-gray-900 transition-colors py-2 border-b border-gray-100"
          >
            FAQ
          </a>
          
          <div className="flex flex-col gap-3 mt-4">
            <button
              onClick={handleLoginClick}
              className="text-gray-900 cursor-pointer font-semibold hover:text-blue-600 transition-colors py-2 text-left"
            >
              Login
            </button>
            <Button variant="primary" onClick={handleSignupClick} className="w-full">
              Get Started
            </Button>
          </div>
        </nav>
      </div>
    </header>
  );
}