import React from 'react';
import { restaurantInfo } from '../data/mock';
import { Instagram, Phone, MapPin, Heart } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-neutral-950 border-t border-neutral-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Brand */}
          <div className="lg:col-span-2">
            <button onClick={scrollToTop} className="flex items-center gap-3 mb-6">
              <div className="flex flex-col items-center">
                <div className="w-12 h-12 relative">
                  <svg viewBox="0 0 40 40" className="w-full h-full">
                    <ellipse cx="20" cy="12" rx="14" ry="6" fill="none" stroke="#D4A84B" strokeWidth="2"/>
                    <rect x="6" y="16" width="28" height="4" fill="#C41E3A" rx="1"/>
                    <ellipse cx="20" cy="26" rx="14" ry="6" fill="none" stroke="#D4A84B" strokeWidth="2"/>
                  </svg>
                </div>
                <span className="font-serif text-3xl font-bold text-amber-400 tracking-wide">Delirio</span>
                <span className="text-xs tracking-[0.3em] text-neutral-300 uppercase -mt-1">Burger</span>
              </div>
            </button>
            <p className="text-neutral-400 max-w-md leading-relaxed mb-6">
              El delirio de las hamburguesas en Vicálvaro. Carne de primera calidad, 
              ingredientes frescos y recetas que despiertan los sentidos.
            </p>
            <div className="flex gap-4">
              <a
                href={`https://instagram.com/${restaurantInfo.instagram}`}
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 bg-neutral-900 hover:bg-amber-500 rounded-full flex items-center justify-center text-neutral-300 hover:text-neutral-950 transition-all duration-300"
              >
                <Instagram size={20} />
              </a>
              <a
                href={`tel:${restaurantInfo.phone.replace(/\s/g, '')}`}
                className="w-10 h-10 bg-neutral-900 hover:bg-amber-500 rounded-full flex items-center justify-center text-neutral-300 hover:text-neutral-950 transition-all duration-300"
              >
                <Phone size={20} />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-white font-semibold text-lg mb-6">Enlaces Rápidos</h3>
            <ul className="space-y-3">
              {[
                { href: '#inicio', label: 'Inicio' },
                { href: '#menu', label: 'Carta' },
                { href: '#galeria', label: 'Galería' },
                { href: '#resenas', label: 'Reseñas' },
                { href: '#nosotros', label: 'Nosotros' },
                { href: '#contacto', label: 'Contacto' },
              ].map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    onClick={(e) => {
                      e.preventDefault();
                      document.querySelector(link.href)?.scrollIntoView({ behavior: 'smooth' });
                    }}
                    className="text-neutral-400 hover:text-amber-400 transition-colors"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-white font-semibold text-lg mb-6">Contacto</h3>
            <ul className="space-y-4">
              <li className="flex items-start gap-3 text-neutral-400">
                <MapPin size={20} className="text-amber-400 flex-shrink-0 mt-1" />
                <span>{restaurantInfo.address}</span>
              </li>
              <li>
                <a
                  href={`tel:${restaurantInfo.phone.replace(/\s/g, '')}`}
                  className="flex items-center gap-3 text-neutral-400 hover:text-amber-400 transition-colors"
                >
                  <Phone size={20} className="text-amber-400" />
                  <span>{restaurantInfo.phone}</span>
                </a>
              </li>
              <li>
                <a
                  href={`https://instagram.com/${restaurantInfo.instagram}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 text-neutral-400 hover:text-amber-400 transition-colors"
                >
                  <Instagram size={20} className="text-amber-400" />
                  <span>@{restaurantInfo.instagram}</span>
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-16 pt-8 border-t border-neutral-800">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-neutral-500 text-sm">
              © {currentYear} Delirio Burger. Todos los derechos reservados.
            </p>
            <p className="text-neutral-500 text-sm flex items-center gap-1">
              Hecho con <Heart size={14} className="text-red-500 fill-red-500" /> en Madrid
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
