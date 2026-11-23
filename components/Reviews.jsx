'use client';

import { useState } from 'react';

const reviewsData = [
  {
    quote:
      "« Des chargeurs ultra-rapides et des câbles tressés d'une solidité remarquable. La commande sur WhatsApp a été simple et la livraison très rapide. »",
    author: 'Lucas Martin',
    item: 'Article commandé : Station Charge 3-en-1',
  },
  {
    quote:
      "« Le chargeur GaN 65W recharge mon ordinateur et mon téléphone en même temps sans chauffer. Service client très réactif sur WhatsApp. »",
    author: 'Camille Bernard',
    item: 'Article commandé : Chargeur Rapide GaN 65W',
  },
  {
    quote:
      "« Enfin des câbles iPhone et USB-C qui ne s'abîment pas au bout d'un mois. Je recommande les yeux fermés. »",
    author: 'Thomas Petit',
    item: 'Article commandé : Câble USB-C Tressé 2m',
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
    <section id="avis" className="pb-12 lg:pb-section">
      <div className="max-w-7xl mx-auto px-page-margin lg:px-10">
        <div className="rounded-lg bg-surface-dark text-on-surface-dark p-8 md:p-12 lg:p-14 grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          <div className="lg:col-span-8 flex flex-col gap-5">
            <div className="flex flex-col gap-2">
              <span
                className="material-symbols-outlined text-headline-lg text-muted-dark"
                aria-hidden="true"
              >
                format_quote
              </span>
              <p
                className="font-label text-label-sm uppercase tracking-widest text-muted-dark"
                data-design-text-token="label-sm"
              >
                AVIS DE NOS CLIENTS
              </p>
              <div className="flex items-center gap-1 text-star" aria-label="Note 5 sur 5">
                {[...Array(5)].map((_, i) => (
                  <span
                    key={i}
                    className="material-symbols-outlined text-title-lg"
                    style={{ fontVariationSettings: "'FILL' 1" }}
                    aria-hidden="true"
                  >
                    star
                  </span>
                ))}
              </div>
            </div>

            <blockquote
              id="review-quote"
              className="font-headline text-headline-md text-on-surface-dark max-w-2xl text-pretty min-h-[90px]"
              data-design-text-token="headline-md"
            >
              {current.quote}
            </blockquote>

            <div className="flex flex-col gap-0.5">
              <p
                id="review-author"
                className="font-label text-label-lg text-on-surface-dark"
                data-design-text-token="label-lg"
              >
                {current.author}
              </p>
              <p
                id="review-item"
                className="font-body text-body-sm text-muted-dark"
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
                className="w-9 h-9 rounded-full border border-muted-dark text-on-surface-dark flex items-center justify-center hover:bg-on-surface-dark hover:text-surface-dark transition-colors duration-state-change"
              >
                <span className="material-symbols-outlined text-title-md" aria-hidden="true">
                  chevron_left
                </span>
              </button>
              <button
                id="review-next"
                type="button"
                aria-label="Avis suivant"
                onClick={nextReview}
                className="w-9 h-9 rounded-full border border-muted-dark text-on-surface-dark flex items-center justify-center hover:bg-on-surface-dark hover:text-surface-dark transition-colors duration-state-change"
              >
                <span className="material-symbols-outlined text-title-md" aria-hidden="true">
                  chevron_right
                </span>
              </button>
            </div>
          </div>

          <div className="lg:col-span-4 flex justify-center lg:justify-end">
            <div className="relative w-56 h-56 sm:w-64 sm:h-64">
              <div className="absolute inset-0 rounded-lg border border-muted-dark/40 rotate-3"></div>
              <img
                src="/images/testimonial-avatar.jpg"
                alt="Portrait client satisfait"
                className="relative w-full h-full object-cover rounded-lg"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
