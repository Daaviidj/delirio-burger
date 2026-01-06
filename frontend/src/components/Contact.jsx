import React from 'react';
import { restaurantInfo, schedule } from '../data/mock';
import { MapPin, Phone, Clock, Navigation, ExternalLink } from 'lucide-react';

const Contact = () => {
  const today = new Date().toLocaleDateString('es-ES', { weekday: 'long' });
  const capitalizedToday = today.charAt(0).toUpperCase() + today.slice(1);
  const todaySchedule = schedule.find(s => s.day.toLowerCase() === today.toLowerCase());

  return (
    <section id="contacto" className="py-24 bg-neutral-950 relative">
      {/* Decorative elements */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-px bg-gradient-to-r from-transparent via-amber-500/50 to-transparent" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <span className="text-amber-400 uppercase tracking-[0.3em] text-sm font-medium">Encuéntranos</span>
          <h2 className="font-serif text-4xl sm:text-5xl lg:text-6xl font-bold text-white mt-4 mb-6">
            Contacto
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-transparent via-amber-500 to-transparent mx-auto" />
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Map */}
          <div className="relative rounded-2xl overflow-hidden h-[400px] lg:h-full min-h-[400px] bg-neutral-900">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3038.1!2d-3.6!3d40.4!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zNDDCsDI0JzAwLjAiTiAzwrAzNicwMC4wIlc!5e0!3m2!1ses!2ses!4v1234567890"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Ubicación de Delirio Burger"
              className="grayscale contrast-125 opacity-80"
            />
            <div className="absolute inset-0 pointer-events-none border-2 border-amber-500/20 rounded-2xl" />
          </div>

          {/* Contact Info */}
          <div className="space-y-8">
            {/* Address Card */}
            <div className="bg-neutral-900/80 rounded-2xl p-8 border border-neutral-800 hover:border-amber-500/30 transition-colors">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-amber-500/20 rounded-xl flex items-center justify-center flex-shrink-0">
                  <MapPin size={24} className="text-amber-400" />
                </div>
                <div>
                  <h3 className="text-white font-semibold text-lg mb-2">Dirección</h3>
                  <p className="text-neutral-300">{restaurantInfo.address}</p>
                  <a
                    href={`https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(restaurantInfo.address)}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 text-amber-400 hover:text-amber-300 mt-3 font-medium transition-colors"
                  >
                    <Navigation size={16} />
                    Cómo llegar
                  </a>
                </div>
              </div>
            </div>

            {/* Phone Card */}
            <div className="bg-neutral-900/80 rounded-2xl p-8 border border-neutral-800 hover:border-amber-500/30 transition-colors">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-amber-500/20 rounded-xl flex items-center justify-center flex-shrink-0">
                  <Phone size={24} className="text-amber-400" />
                </div>
                <div>
                  <h3 className="text-white font-semibold text-lg mb-2">Teléfono</h3>
                  <a
                    href={`tel:${restaurantInfo.phone.replace(/\s/g, '')}`}
                    className="text-2xl font-bold text-amber-400 hover:text-amber-300 transition-colors"
                  >
                    {restaurantInfo.phone}
                  </a>
                  <p className="text-neutral-400 text-sm mt-2">Llámanos para reservar</p>
                </div>
              </div>
            </div>

            {/* Schedule Card */}
            <div className="bg-neutral-900/80 rounded-2xl p-8 border border-neutral-800">
              <div className="flex items-center gap-4 mb-6">
                <div className="w-12 h-12 bg-amber-500/20 rounded-xl flex items-center justify-center flex-shrink-0">
                  <Clock size={24} className="text-amber-400" />
                </div>
                <div>
                  <h3 className="text-white font-semibold text-lg">Horarios</h3>
                  {todaySchedule && (
                    <p className={`text-sm ${todaySchedule.hours === 'Cerrado' ? 'text-red-400' : 'text-green-400'}`}>
                      Hoy ({capitalizedToday}): {todaySchedule.hours}
                    </p>
                  )}
                </div>
              </div>
              
              <div className="space-y-3">
                {schedule.map((item, index) => (
                  <div
                    key={index}
                    className={`flex justify-between items-center py-2 border-b border-neutral-800 last:border-0 ${
                      item.day.toLowerCase() === today.toLowerCase() ? 'text-amber-400' : 'text-neutral-300'
                    }`}
                  >
                    <span className="font-medium">{item.day}</span>
                    <span className={item.hours === 'Cerrado' ? 'text-red-400' : ''}>
                      {item.hours}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            {/* Uber Eats CTA */}
            <a
              href={restaurantInfo.uberEatsUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="block bg-gradient-to-r from-green-600 to-green-500 hover:from-green-500 hover:to-green-400 text-white rounded-2xl p-6 transition-all duration-300 hover:shadow-lg hover:shadow-green-500/25 hover:-translate-y-1"
            >
              <div className="flex items-center justify-between">
                <div>
                  <h3 className="font-bold text-xl mb-1">Pide a Domicilio</h3>
                  <p className="text-green-100">Disponible en Uber Eats</p>
                </div>
                <ExternalLink size={28} />
              </div>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
