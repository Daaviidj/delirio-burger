import React, { useState } from 'react';
import { galleryImages, restaurantInfo } from '../data/mock';
import { X, Instagram, ChevronLeft, ChevronRight } from 'lucide-react';

const Gallery = () => {
  const [selectedImage, setSelectedImage] = useState(null);
  const [filter, setFilter] = useState('all');

  const filteredImages = filter === 'all' 
    ? galleryImages 
    : galleryImages.filter(img => img.category === filter);

  const openLightbox = (image) => {
    setSelectedImage(image);
  };

  const closeLightbox = () => {
    setSelectedImage(null);
  };

  const navigateImage = (direction) => {
    const currentIndex = filteredImages.findIndex(img => img.id === selectedImage.id);
    let newIndex;
    if (direction === 'next') {
      newIndex = currentIndex === filteredImages.length - 1 ? 0 : currentIndex + 1;
    } else {
      newIndex = currentIndex === 0 ? filteredImages.length - 1 : currentIndex - 1;
    }
    setSelectedImage(filteredImages[newIndex]);
  };

  return (
    <section id="galeria" className="py-24 bg-neutral-900 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <span className="text-amber-400 uppercase tracking-[0.3em] text-sm font-medium">Nuestras Fotos</span>
          <h2 className="font-serif text-4xl sm:text-5xl lg:text-6xl font-bold text-white mt-4 mb-6">
            Galería
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-transparent via-amber-500 to-transparent mx-auto mb-8" />
          
          {/* Filter Buttons */}
          <div className="flex justify-center gap-4 flex-wrap">
            {[{ key: 'all', label: 'Todas' }, { key: 'platos', label: 'Platos' }, { key: 'local', label: 'Local' }].map((f) => (
              <button
                key={f.key}
                onClick={() => setFilter(f.key)}
                className={`px-5 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
                  filter === f.key
                    ? 'bg-amber-500 text-neutral-950'
                    : 'bg-neutral-800 text-neutral-300 hover:bg-neutral-700 hover:text-amber-400'
                }`}
              >
                {f.label}
              </button>
            ))}
          </div>
        </div>

        {/* Gallery Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {filteredImages.map((image, index) => (
            <div
              key={image.id}
              onClick={() => openLightbox(image)}
              className={`relative group cursor-pointer overflow-hidden rounded-xl ${
                index === 0 ? 'col-span-2 row-span-2' : ''
              }`}
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div className={`${index === 0 ? 'aspect-square' : 'aspect-square'}`}>
                <img
                  src={image.src}
                  alt={image.alt}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                />
              </div>
              <div className="absolute inset-0 bg-gradient-to-t from-neutral-950/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              <div className="absolute bottom-0 left-0 right-0 p-4 transform translate-y-full group-hover:translate-y-0 transition-transform duration-300">
                <p className="text-white text-sm font-medium">{image.alt}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Instagram CTA */}
        <div className="mt-16 text-center">
          <p className="text-neutral-400 mb-6">Síguenos en Instagram para más contenido</p>
          <a
            href={`https://instagram.com/${restaurantInfo.instagram}`}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-3 bg-gradient-to-r from-purple-600 via-pink-600 to-orange-500 text-white px-8 py-4 rounded-md font-bold transition-all duration-300 hover:shadow-lg hover:shadow-pink-500/25 hover:-translate-y-1"
          >
            <Instagram size={24} />
            @{restaurantInfo.instagram}
          </a>
        </div>
      </div>

      {/* Lightbox */}
      {selectedImage && (
        <div 
          className="fixed inset-0 bg-neutral-950/95 z-50 flex items-center justify-center p-4"
          onClick={closeLightbox}
        >
          <button
            onClick={closeLightbox}
            className="absolute top-6 right-6 text-white hover:text-amber-400 transition-colors"
          >
            <X size={32} />
          </button>
          
          <button
            onClick={(e) => { e.stopPropagation(); navigateImage('prev'); }}
            className="absolute left-4 md:left-8 text-white hover:text-amber-400 transition-colors bg-neutral-900/50 p-2 rounded-full"
          >
            <ChevronLeft size={32} />
          </button>
          
          <img
            src={selectedImage.src}
            alt={selectedImage.alt}
            className="max-w-full max-h-[85vh] object-contain rounded-lg"
            onClick={(e) => e.stopPropagation()}
          />
          
          <button
            onClick={(e) => { e.stopPropagation(); navigateImage('next'); }}
            className="absolute right-4 md:right-8 text-white hover:text-amber-400 transition-colors bg-neutral-900/50 p-2 rounded-full"
          >
            <ChevronRight size={32} />
          </button>
          
          <div className="absolute bottom-6 left-1/2 -translate-x-1/2 text-white text-center">
            <p className="font-medium">{selectedImage.alt}</p>
          </div>
        </div>
      )}
    </section>
  );
};

export default Gallery;
