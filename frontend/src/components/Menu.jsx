import React, { useState } from 'react';
import { burgers, starters, desserts, meatOptions, breadOptions } from '../data/mock';
import { Flame, Leaf, Cake } from 'lucide-react';

const Menu = () => {
  const [activeTab, setActiveTab] = useState('burgers');

  return (
    <section id="menu" className="py-24 bg-neutral-950 relative">
      {/* Background texture */}
      <div 
        className="absolute inset-0 opacity-20"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23D4A84B' fill-opacity='0.1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
        }}
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center mb-16">
          <span className="text-amber-400 uppercase tracking-[0.3em] text-sm font-medium">Nuestra Carta</span>
          <h2 className="font-serif text-4xl sm:text-5xl lg:text-6xl font-bold text-white mt-4 mb-6">
            La Carta
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-transparent via-amber-500 to-transparent mx-auto" />
        </div>

        {/* Tabs */}
        <div className="flex justify-center gap-3 sm:gap-4 mb-12 flex-wrap">
          <button
            onClick={() => setActiveTab('burgers')}
            className={`px-4 sm:px-6 py-3 rounded-md font-semibold transition-all duration-300 ${
              activeTab === 'burgers'
                ? 'bg-amber-500 text-neutral-950'
                : 'bg-neutral-900 text-neutral-300 hover:bg-neutral-800 hover:text-amber-400'
            }`}
          >
            Hamburguesas
          </button>
          <button
            onClick={() => setActiveTab('starters')}
            className={`px-4 sm:px-6 py-3 rounded-md font-semibold transition-all duration-300 ${
              activeTab === 'starters'
                ? 'bg-amber-500 text-neutral-950'
                : 'bg-neutral-900 text-neutral-300 hover:bg-neutral-800 hover:text-amber-400'
            }`}
          >
            Entrantes
          </button>
          <button
            onClick={() => setActiveTab('desserts')}
            className={`px-4 sm:px-6 py-3 rounded-md font-semibold transition-all duration-300 ${
              activeTab === 'desserts'
                ? 'bg-amber-500 text-neutral-950'
                : 'bg-neutral-900 text-neutral-300 hover:bg-neutral-800 hover:text-amber-400'
            }`}
          >
            Postres
          </button>
        </div>

        {/* Burgers Grid */}
        {activeTab === 'burgers' && (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {burgers.map((burger, index) => (
              <div
                key={burger.id}
                className="group bg-neutral-900/80 rounded-xl overflow-hidden border border-neutral-800 hover:border-amber-500/50 transition-all duration-500 hover:-translate-y-2 hover:shadow-xl hover:shadow-amber-500/10"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className="relative h-56 overflow-hidden">
                  <img
                    src={burger.image}
                    alt={burger.name}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-neutral-950 via-transparent to-transparent" />
                  <div className="absolute top-4 right-4 bg-amber-500 text-neutral-950 px-3 py-1 rounded-full font-bold">
                    {burger.price.toFixed(2)}€
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="font-serif text-2xl font-bold text-amber-400 mb-3 flex items-center gap-2">
                    {burger.name}
                    {burger.name === 'POTENCIA' && <Flame size={20} className="text-red-500" />}
                  </h3>
                  <p className="text-neutral-400 leading-relaxed">{burger.description}</p>
                </div>
              </div>
            ))}
          </div>
        )}

        {/* Starters Grid */}
        {activeTab === 'starters' && (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {starters.map((starter, index) => (
              <div
                key={starter.id}
                className="group bg-neutral-900/80 rounded-xl p-6 border border-neutral-800 hover:border-amber-500/50 transition-all duration-300 hover:-translate-y-1"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className="flex justify-between items-start mb-3">
                  <h3 className="font-serif text-xl font-bold text-amber-400">{starter.name}</h3>
                  <span className="bg-amber-500/20 text-amber-400 px-3 py-1 rounded-full font-bold text-sm">
                    {starter.price.toFixed(2)}€
                  </span>
                </div>
                <p className="text-neutral-400 leading-relaxed text-sm">{starter.description}</p>
              </div>
            ))}
          </div>
        )}

        {/* Desserts Grid */}
        {activeTab === 'desserts' && (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {desserts.map((dessert, index) => (
              <div
                key={dessert.id}
                className="group bg-neutral-900/80 rounded-xl p-6 border border-neutral-800 hover:border-amber-500/50 transition-all duration-300 hover:-translate-y-1"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className="flex items-center justify-center mb-4">
                  <div className="w-14 h-14 bg-amber-500/20 rounded-full flex items-center justify-center">
                    <Cake size={28} className="text-amber-400" />
                  </div>
                </div>
                <div className="text-center">
                  <h3 className="font-serif text-lg font-bold text-amber-400 mb-2">{dessert.name}</h3>
                  <p className="text-neutral-400 text-sm mb-3">{dessert.description}</p>
                  <span className="bg-amber-500/20 text-amber-400 px-4 py-1 rounded-full font-bold text-sm">
                    {dessert.price.toFixed(2)}€
                  </span>
                </div>
              </div>
            ))}
          </div>
        )}

        {/* Options Section */}
        <div className="mt-20 grid md:grid-cols-2 gap-8">
          {/* Meat Options */}
          <div className="bg-neutral-900/60 rounded-xl p-8 border border-neutral-800">
            <h3 className="font-serif text-2xl font-bold text-white mb-6 flex items-center gap-3">
              <div className="w-10 h-10 bg-amber-500/20 rounded-full flex items-center justify-center">
                <Flame size={20} className="text-amber-400" />
              </div>
              Carnes a Elegir
            </h3>
            <ul className="space-y-3">
              {meatOptions.map((meat, index) => (
                <li key={index} className="flex items-center gap-3 text-neutral-300">
                  <span className="text-amber-400 font-bold">{index + 1}.</span>
                  {meat}
                </li>
              ))}
            </ul>
          </div>

          {/* Bread Options */}
          <div className="bg-neutral-900/60 rounded-xl p-8 border border-neutral-800">
            <h3 className="font-serif text-2xl font-bold text-white mb-6 flex items-center gap-3">
              <div className="w-10 h-10 bg-amber-500/20 rounded-full flex items-center justify-center">
                <Leaf size={20} className="text-amber-400" />
              </div>
              Pan a Elegir
            </h3>
            <ul className="space-y-3">
              {breadOptions.map((bread, index) => (
                <li key={index} className="flex items-center gap-3 text-neutral-300">
                  <span className="w-2 h-2 bg-amber-400 rounded-full" />
                  {bread}
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* CTA */}
        <div className="text-center mt-16">
          <p className="text-neutral-400 mb-6">¿No puedes venir a Delirio? ¡Te lo llevamos!</p>
          <a
            href="https://www.ubereats.com/es/store/delirio-burger"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 bg-amber-500 hover:bg-amber-400 text-neutral-950 px-8 py-4 rounded-md font-bold transition-all duration-300 hover:shadow-lg hover:shadow-amber-500/25 hover:-translate-y-1"
          >
            Pedir en Uber Eats
            <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
            </svg>
          </a>
        </div>
      </div>
    </section>
  );
};

export default Menu;
