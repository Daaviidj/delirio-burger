import React from 'react';
import { reviews, restaurantInfo } from '../data/mock';
import { Star, StarHalf, Quote } from 'lucide-react';

const Reviews = () => {
  // Calculate full stars and half star for overall rating
  const fullStars = Math.floor(restaurantInfo.rating);
  const hasHalfStar = restaurantInfo.rating % 1 >= 0.3;
  const emptyStars = 5 - fullStars - (hasHalfStar ? 1 : 0);

  return (
    <section id="resenas" className="py-24 bg-neutral-950 relative overflow-hidden">
      {/* Background decorations */}
      <div className="absolute top-0 left-0 w-96 h-96 bg-amber-500/5 rounded-full blur-3xl" />
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-amber-500/5 rounded-full blur-3xl" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center mb-16">
          <span className="text-amber-400 uppercase tracking-[0.3em] text-sm font-medium">Lo Que Dicen</span>
          <h2 className="font-serif text-4xl sm:text-5xl lg:text-6xl font-bold text-white mt-4 mb-6">
            Reseñas
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-transparent via-amber-500 to-transparent mx-auto mb-8" />
          
          {/* Overall Rating */}
          <div className="inline-flex flex-col items-center bg-neutral-900/80 backdrop-blur-sm px-8 py-6 rounded-2xl border border-neutral-800">
            <div className="flex items-center gap-1 mb-2">
              {/* Full stars */}
              {[...Array(fullStars)].map((_, i) => (
                <Star
                  key={`full-${i}`}
                  size={28}
                  className="text-amber-400 fill-amber-400"
                />
              ))}
              {/* Half star */}
              {hasHalfStar && (
                <StarHalf
                  size={28}
                  className="text-amber-400 fill-amber-400"
                />
              )}
              {/* Empty stars */}
              {[...Array(emptyStars)].map((_, i) => (
                <Star
                  key={`empty-${i}`}
                  size={28}
                  className="text-neutral-600"
                />
              ))}
            </div>
            <span className="text-4xl font-bold text-white">{restaurantInfo.rating}</span>
            <span className="text-neutral-400 mt-1">{restaurantInfo.reviewCount} reseñas en Google</span>
          </div>
        </div>

        {/* Reviews Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {reviews.map((review, index) => (
            <div
              key={review.id}
              className="group bg-neutral-900/60 rounded-2xl p-8 border border-neutral-800 hover:border-amber-500/30 transition-all duration-300 relative"
              style={{ animationDelay: `${index * 150}ms` }}
            >
              {/* Quote Icon */}
              <div className="absolute top-6 right-6 text-amber-500/20">
                <Quote size={48} />
              </div>

              {/* Rating */}
              <div className="flex items-center gap-1 mb-4">
                {[...Array(5)].map((_, i) => (
                  <Star
                    key={i}
                    size={18}
                    className={i < review.rating ? 'text-amber-400 fill-amber-400' : 'text-neutral-600'}
                  />
                ))}
              </div>

              {/* Review Text */}
              <p className="text-neutral-300 leading-relaxed mb-6 relative z-10">
                "{review.text}"
              </p>

              {/* Author */}
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-gradient-to-br from-amber-500 to-amber-600 rounded-full flex items-center justify-center text-neutral-950 font-bold text-lg">
                  {review.author.charAt(0)}
                </div>
                <div>
                  <h4 className="text-white font-semibold">{review.author}</h4>
                  <p className="text-neutral-500 text-sm">{review.badge} · {review.date}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Write Review CTA */}
        <div className="text-center mt-12">
          <a
            href="https://search.google.com/local/writereview?placeid=ChIJx6r0r5hMQg0RGVoQ5X-1234"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-amber-400 hover:text-amber-300 font-medium transition-colors"
          >
            Escribe tu reseña en Google
            <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
            </svg>
          </a>
        </div>
      </div>
    </section>
  );
};

export default Reviews;
