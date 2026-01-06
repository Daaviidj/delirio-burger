import React from 'react';
import { Star, StarHalf, MapPin, Clock } from 'lucide-react';
import { restaurantInfo } from '../data/mock';

const Hero = () => {
  // Calculate full stars and half star
  const fullStars = Math.floor(restaurantInfo.rating);
  const hasHalfStar = restaurantInfo.rating % 1 >= 0.3;
  const emptyStars = 5 - fullStars - (hasHalfStar ? 1 : 0);

  return (
    <section
      id="inicio"
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
    >
      {/* Background with texture */}
      <div className="absolute inset-0 bg-neutral-950">
        <div 
          className="absolute inset-0 opacity-30"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 400 400' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")`,
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-neutral-950/50 via-transparent to-neutral-950" />
      </div>

      {/* Decorative elements */}
      <div className="absolute top-20 left-10 w-64 h-64 bg-amber-500/10 rounded-full blur-3xl" />
      <div className="absolute bottom-20 right-10 w-96 h-96 bg-amber-600/5 rounded-full blur-3xl" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-32">
        <div className="text-center">
          {/* Rating Badge */}
          <div className="inline-flex items-center gap-2 bg-neutral-900/80 backdrop-blur-sm px-4 py-2 rounded-full mb-8 border border-neutral-800">
            <div className="flex items-center gap-0.5">
              {/* Full stars */}
              {[...Array(fullStars)].map((_, i) => (
                <Star
                  key={`full-${i}`}
                  size={16}
                  className="text-amber-400 fill-amber-400"
                />
              ))}
              {/* Half star */}
              {hasHalfStar && (
                <StarHalf
                  size={16}
                  className="text-amber-400 fill-amber-400"
                />
              )}
              {/* Empty stars */}
              {[...Array(emptyStars)].map((_, i) => (
                <Star
                  key={`empty-${i}`}
                  size={16}
                  className="text-neutral-600"
                />
              ))}
            </div>
            <span className="text-amber-400 font-semibold">{restaurantInfo.rating}</span>
            <span className="text-neutral-400">·</span>
            <span className="text-neutral-300">{restaurantInfo.reviewCount} reseñas</span>
          </div>

          {/* Main Title */}
          <h1 className="font-serif text-5xl sm:text-7xl lg:text-8xl font-bold text-white mb-4">
            <span className="text-amber-400">Delirio</span> Burger
          </h1>
          
          <p className="text-xl sm:text-2xl text-neutral-400 mb-8 font-light max-w-2xl mx-auto">
            El delirio de las hamburguesas en Vicálvaro
          </p>

          {/* Info Pills */}
          <div className="flex flex-wrap justify-center gap-4 mb-12">
            <div className="flex items-center gap-2 text-neutral-300 bg-neutral-900/60 px-4 py-2 rounded-full">
              <MapPin size={18} className="text-amber-400" />
              <span className="text-sm">Vicálvaro, Madrid</span>
            </div>
            <div className="flex items-center gap-2 text-neutral-300 bg-neutral-900/60 px-4 py-2 rounded-full">
              <Clock size={18} className="text-amber-400" />
              <span className="text-sm">{restaurantInfo.priceRange} por persona</span>
            </div>
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href={restaurantInfo.uberEatsUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="group bg-amber-500 hover:bg-amber-400 text-neutral-950 px-8 py-4 rounded-md font-bold text-lg transition-all duration-300 hover:shadow-xl hover:shadow-amber-500/30 hover:-translate-y-1"
            >
              <span className="flex items-center justify-center gap-2">
                Pedir en Uber Eats
                <svg className="w-5 h-5 group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </span>
            </a>
            <a
              href="#menu"
              onClick={(e) => {
                e.preventDefault();
                document.querySelector('#menu')?.scrollIntoView({ behavior: 'smooth' });
              }}
              className="border-2 border-amber-500/50 hover:border-amber-400 text-amber-400 hover:text-amber-300 px-8 py-4 rounded-md font-bold text-lg transition-all duration-300 hover:-translate-y-1"
            >
              Ver Carta
            </a>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-amber-400/50 rounded-full flex items-start justify-center p-2">
          <div className="w-1.5 h-3 bg-amber-400 rounded-full animate-pulse" />
        </div>
      </div>
    </section>
  );
};

export default Hero;
