import React, { useState, useEffect } from 'react';
import { Menu, X, Phone, Instagram } from 'lucide-react';
import { restaurantInfo } from '../data/mock';

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { href: '#inicio', label: 'Inicio' },
    { href: '#menu', label: 'Carta' },
    { href: '#galeria', label: 'Galería' },
    { href: '#resenas', label: 'Reseñas' },
    { href: '#nosotros', label: 'Nosotros' },
    { href: '#contacto', label: 'Contacto' }
  ];

  const scrollToSection = (e, href) => {
    e.preventDefault();
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setIsMobileMenuOpen(false);
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-neutral-950/95 backdrop-blur-md shadow-lg'
          : 'bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <a href="#inicio" onClick={(e) => scrollToSection(e, '#inicio')} className="flex items-center gap-3">
            <div className="flex flex-col items-center">
              <img 
                src="https://customer-assets.emergentagent.com/job_27ec220e-d9e5-4640-8d92-60a6b612c860/artifacts/2bhxt5q8_image.png" 
                alt="Delirio Burger" 
                className="w-12 h-12 object-contain"
              />
              <span className="font-serif text-2xl font-bold text-amber-400 tracking-wide">Delirio</span>
              <span className="text-xs tracking-[0.3em] text-neutral-300 uppercase -mt-1">Burger</span>
            </div>
          </a>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={(e) => scrollToSection(e, link.href)}
                className="text-neutral-300 hover:text-amber-400 transition-colors duration-300 text-sm uppercase tracking-wider font-medium"
              >
                {link.label}
              </a>
            ))}
          </nav>

          {/* Desktop CTA Buttons */}
          <div className="hidden md:flex items-center gap-4">
            <a
              href={`tel:${restaurantInfo.phone.replace(/\s/g, '')}`}
              className="flex items-center gap-2 text-neutral-300 hover:text-amber-400 transition-colors"
            >
              <Phone size={18} />
              <span className="text-sm">{restaurantInfo.phone}</span>
            </a>
            <a
              href={`https://instagram.com/${restaurantInfo.instagram}`}
              target="_blank"
              rel="noopener noreferrer"
              className="text-neutral-300 hover:text-amber-400 transition-colors"
            >
              <Instagram size={20} />
            </a>
            <a
              href={restaurantInfo.uberEatsUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-amber-500 hover:bg-amber-400 text-neutral-950 px-5 py-2.5 rounded-md font-semibold text-sm transition-all duration-300 hover:shadow-lg hover:shadow-amber-500/25"
            >
              Pedir Online
            </a>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="md:hidden text-neutral-300 hover:text-amber-400 transition-colors p-2"
          >
            {isMobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <div
        className={`md:hidden absolute top-full left-0 right-0 bg-neutral-950/98 backdrop-blur-lg transition-all duration-300 overflow-hidden ${
          isMobileMenuOpen ? 'max-h-screen opacity-100' : 'max-h-0 opacity-0'
        }`}
      >
        <nav className="flex flex-col px-6 py-6 gap-4">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={(e) => scrollToSection(e, link.href)}
              className="text-neutral-300 hover:text-amber-400 transition-colors py-2 text-lg uppercase tracking-wider border-b border-neutral-800"
            >
              {link.label}
            </a>
          ))}
          <div className="flex items-center gap-4 mt-4">
            <a
              href={`tel:${restaurantInfo.phone.replace(/\s/g, '')}`}
              className="flex items-center gap-2 text-amber-400"
            >
              <Phone size={18} />
              <span>{restaurantInfo.phone}</span>
            </a>
          </div>
          <a
            href={restaurantInfo.uberEatsUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="bg-amber-500 hover:bg-amber-400 text-neutral-950 px-6 py-3 rounded-md font-semibold text-center transition-all duration-300 mt-2"
          >
            Pedir en Uber Eats
          </a>
        </nav>
      </div>
    </header>
  );
};

export default Header;
