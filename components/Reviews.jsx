'use client';

import { useState } from 'react';
import { Star, ChevronLeft, ChevronRight, Quote } from 'lucide-react';

const reviewsData = [
  {
    quote:
      "« Des chargeurs ultra-rapides et des câbles tressés d'une solidité remarquable. La commande sur WhatsApp a été simple et la livraison très rapide à Casablanca. »",
    author: 'Lucas Martin',
    item: 'Article commandé : Adaptateur Secteur USB-C 30W',
  },
  {
    quote:
      "« J'ai fait réparer l'écran de mon téléphone chez Gennevilliers : travail soigné, rapide et affichage impeccable comme à l'origine. Service au top au 13 Rue Maarakat Ouhoud. »",
    author: 'Mehdi Benjelloun',
    item: 'Service : Réparation d’Afficheur & Écran',
  },
  {
    quote:
      "« Espace coworking très calme, convivial et fonctionnel à Casablanca. Connexion ultra-rapide et accueil chaleureux de Rachid. Je recommande vivement ! »",
    author: 'Sara El Amrani',
    item: 'Espace Coworking Gennevilliers',
  },
];

export default function Reviews() {
  const [reviewIdx, setReviewIdx] = useState(0);

  const prevReview = () => {
    setReviewIdx((prev) => (prev - 1 + reviewsData.length) % reviewsData.length);
  };

  const nextReview = () => {
    setReviewIdx((prev) => (prev + 1) % reviewsData.length);
  };

  const current = reviewsData[reviewIdx];

  return (
    <section id="avis" className="pb-10 sm:pb-12 lg:pb-section">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-10">
        <div className="rounded-lg bg-surface-dark text-on-surface-dark p-5 sm:p-8 md:p-12 lg:p-14 grid grid-cols-1 lg:grid-cols-12 gap-6 sm:gap-8 items-center shadow-lg overflow-hidden">
          <div className="lg:col-span-8 flex flex-col gap-4 sm:gap-5">
            <div className="flex flex-col gap-2">
              <Quote className="w-8 h-8 sm:w-10 sm:h-10 text-primary shrink-0 opacity-80" aria-hidden="true" />
              <p
                className="font-label text-xs sm:text-label-sm uppercase tracking-widest text-muted-dark font-semibold"
                data-design-text-token="label-sm"
              >
                AVIS DE NOS CLIENTS &bull; GENNEVILLIERS
              </p>
              <div className="flex items-center gap-1 text-star" aria-label="Note 5 sur 5">
                {[...Array(5)].map((_, i) => (
                  <Star
                    key={i}
                    className="w-4 h-4 sm:w-5 sm:h-5 fill-star text-star shrink-0"
                    aria-hidden="true"
                  />
                ))}
              </div>
            </div>

            <blockquote
              id="review-quote"
              className="font-headline text-sm sm:text-lg md:text-headline-md text-on-surface-dark max-w-2xl text-pretty min-h-[60px] sm:min-h-[90px] leading-relaxed"
              data-design-text-token="headline-md"
            >
              {current.quote}
            </blockquote>

            <div className="flex flex-col gap-0.5">
              <p
                id="review-author"
                className="font-label text-xs sm:text-label-lg text-on-surface-dark font-semibold"
                data-design-text-token="label-lg"
              >
                {current.author}
              </p>
              <p
                id="review-item"
                className="font-body text-[11px] sm:text-body-sm text-muted-dark"
                data-design-text-token="body-sm"
              >
                {current.item}
              </p>
            </div>

            <div className="flex items-center gap-2 pt-1">
              <button
                id="review-prev"
                type="button"
                aria-label="Avis précédent"
                onClick={prevReview}
                className="w-8 h-8 sm:w-10 sm:h-10 rounded-full border border-muted-dark text-on-surface-dark flex items-center justify-center hover:bg-on-surface-dark hover:text-surface-dark transition-colors duration-state-change shrink-0"
              >
                <ChevronLeft className="w-4 h-4 sm:w-5 sm:h-5 shrink-0" aria-hidden="true" />
              </button>
              <button
                id="review-next"
                type="button"
                aria-label="Avis suivant"
                onClick={nextReview}
                className="w-8 h-8 sm:w-10 sm:h-10 rounded-full border border-muted-dark text-on-surface-dark flex items-center justify-center hover:bg-on-surface-dark hover:text-surface-dark transition-colors duration-state-change shrink-0"
              >
                <ChevronRight className="w-4 h-4 sm:w-5 sm:h-5 shrink-0" aria-hidden="true" />
              </button>
            </div>
          </div>

          <div className="lg:col-span-4 flex justify-center lg:justify-end">
            <div className="relative w-36 h-36 sm:w-56 sm:h-56 md:w-64 md:h-64">
              <div className="absolute inset-0 rounded-lg border border-muted-dark/40 rotate-3 pointer-events-none"></div>
              <img
                src="/images/testimonial-avatar.jpg"
                alt="Portrait client satisfait Gennevilliers"
                className="relative w-full h-full object-cover rounded-lg shadow-md"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
