'use client';

import { useState } from 'react';

const faqs = [
  {
    question: 'Comment passer commande sur WhatsApp ?',
    answer:
      "Cliquez sur le bouton « Commander sur WhatsApp » sous le produit souhaité. Une conversation WhatsApp s'ouvre avec un message prérempli contenant le nom et le prix de l'article. Envoyez-le pour confirmer votre adresse et recevoir votre suivi.",
  },
  {
    question: 'Quels sont les délais de livraison ?',
    answer:
      'Toutes les commandes validées avant 15h sont expédiées le jour même avec un numéro de suivi. La livraison express prend 24 à 48 heures ouvrées partout en France métropolitaine.',
  },
  {
    question: 'Le chargeur GaN 65W est-il compatible avec iPhone, Samsung et MacBook ?',
    answer:
      "Oui. Nos chargeurs GaN intègrent les protocoles USB-C Power Delivery (PD 3.0) et PPS pour recharger en toute sécurité les iPhone, Samsung Galaxy, Google Pixel, iPad et ordinateurs portables USB-C jusqu'à 65W.",
  },
  {
    question: "Comment fonctionne l'échange sous 14 jours et la garantie ?",
    answer:
      'Vous disposez de 14 jours après réception pour échanger un produit neuf ou non utilisé, et tous nos accessoires sont garantis 24 mois sur simple message WhatsApp.',
  },
];

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState(0);

  const toggle = (idx) => {
    setOpenIndex((prev) => (prev === idx ? -1 : idx));
  };

  return (
    <section id="faq" className="pb-12 lg:pb-section">
      <div className="max-w-4xl mx-auto px-page-margin lg:px-10">
        <div className="text-center mb-10 flex flex-col items-center gap-2">
          <h2
            className="font-headline text-headline-md md:text-headline-lg text-on-surface"
            data-design-text-token="headline-lg"
          >
            Questions Fréquentes
          </h2>
          <p className="font-body text-body-md text-muted max-w-xl" data-design-text-token="body-md">
            Toutes les réponses sur les commandes WhatsApp, la livraison et la compatibilité de nos
            chargeurs.
          </p>
        </div>

        <div className="flex flex-col gap-3">
          {faqs.map((faq, idx) => {
            const isOpen = openIndex === idx;
            return (
              <div key={idx} className="rounded-lg border border-outline bg-surface overflow-hidden">
                <button
                  type="button"
                  aria-expanded={isOpen}
                  onClick={() => toggle(idx)}
                  className="faq-toggle w-full px-6 py-5 flex items-center justify-between gap-4 text-left hover:bg-surface-container-low transition-colors duration-state-change"
                >
                  <span className="font-title text-title-md text-on-surface" data-design-text-token="title-md">
                    {faq.question}
                  </span>
                  <span
                    className={`material-symbols-outlined text-title-lg text-on-surface shrink-0 transition-transform duration-state-change ${
                      isOpen ? 'rotate-180' : ''
                    }`}
                    aria-hidden="true"
                  >
                    expand_more
                  </span>
                </button>
                <div className={`faq-panel px-6 pb-5 ${isOpen ? '' : 'hidden'}`}>
                  <p className="font-body text-body-md text-muted text-pretty" data-design-text-token="body-md">
                    {faq.answer}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
