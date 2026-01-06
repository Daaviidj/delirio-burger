import React from 'react';
import { restaurantInfo } from '../data/mock';

const About = () => {
  return (
    <section id="nosotros" className="py-24 bg-neutral-900 relative overflow-hidden">
      {/* Background Pattern */}
      <div 
        className="absolute inset-0 opacity-10"
        style={{
          backgroundImage: `radial-gradient(circle at 2px 2px, #D4A84B 1px, transparent 0)`,
          backgroundSize: '40px 40px',
        }}
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Image Side */}
          <div className="relative">
            <div className="relative rounded-2xl overflow-hidden">
              <img
                src="https://customer-assets.emergentagent.com/job_27ec220e-d9e5-4640-8d92-60a6b612c860/artifacts/titfldcb_image.png"
                alt="Fachada de Delirio Burger"
                className="w-full h-auto rounded-2xl"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-neutral-950/60 via-transparent to-transparent" />
            </div>
            
            {/* Floating Card */}
            <div className="absolute -bottom-8 -right-4 lg:-right-8 bg-amber-500 text-neutral-950 p-6 rounded-xl shadow-2xl max-w-xs">
              <p className="font-serif text-2xl font-bold mb-2">“En Delirio no nos olvidamos de vosotros”</p>
              <p className="text-sm opacity-80">Para todos nuestros públicos</p>
            </div>
          </div>

          {/* Content Side */}
          <div>
            <span className="text-amber-400 uppercase tracking-[0.3em] text-sm font-medium">Nuestra Historia</span>
            <h2 className="font-serif text-4xl sm:text-5xl font-bold text-white mt-4 mb-8">
              Sobre Nosotros
            </h2>
            
            <div className="space-y-6 text-neutral-300 leading-relaxed">
              <p>
                <span className="text-amber-400 font-serif text-xl">Delirio Burger</span> nació con una misión clara: 
                crear las mejores hamburguesas artesanales de Vicálvaro, usando ingredientes de primera calidad 
                y recetas que despiertan los sentidos.
              </p>
              <p>
                Somos un local pequeñito pero con mucho corazón. Cada hamburguesa que sale de nuestra cocina 
                está hecha con cariño y dedicación, desde la selección de la carne hasta la preparación de 
                nuestras salsas secretas.
              </p>
              <p>
                Nuestro equipo, liderado por un dueño apasionado y camareros siempre atentos, 
                se esfuerza cada día por ofreceros una experiencia gastronómica única. 
                Ya sea para comer en el local, para llevar, o a través de Uber Eats.
              </p>
            </div>

            {/* Features */}
            <div className="grid grid-cols-2 gap-6 mt-10">
              {[
                { number: '4', label: 'Tipos de Carne' },
                { number: '3', label: 'Panes Artesanales' },
                { number: '6+', label: 'Hamburguesas Únicas' },
                { number: '4.8', label: 'Valoración Google' },
              ].map((feature, index) => (
                <div key={index} className="text-center p-4 bg-neutral-950/50 rounded-xl border border-neutral-800">
                  <span className="text-3xl font-bold text-amber-400 font-serif">{feature.number}</span>
                  <p className="text-neutral-400 text-sm mt-1">{feature.label}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
