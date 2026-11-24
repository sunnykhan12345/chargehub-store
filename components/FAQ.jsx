'use client';

import { useState } from 'react';

const faqs = [
  {
    question: 'Comment commander un chargeur (12W, 20W, 30W) sur WhatsApp ?',
    answer:
      "Il vous suffit de cliquer sur le bouton « Commander sur WhatsApp » sous l'article de votre choix ou d'écrire directement au 06 14 09 59 99 (+212 614 09 59 99). Un message prérempli avec les détails du produit s'ouvre automatiquement. Nous confirmons votre commande et expédions dans les meilleurs délais.",
  },
  {
    question: "Comment se déroule la réparation d'afficheurs et d'écrans chez Gennevilliers ?",
    answer:
      "Spécialisée dans la réparation d'afficheurs et d'écrans de smartphones et tablettes, notre équipe technique effectue un diagnostic précis de votre appareil, vous propose un devis transparent et réalise la réparation avec des pièces de haute fiabilité à notre adresse à Casablanca.",
  },
  {
    question: "Quels sont les avantages de votre espace coworking à Casablanca ?",
    answer:
      "Notre espace coworking situé 13 Rue Maarakat Ouhoud à Casablanca est un environnement convivial et fonctionnel, équipé de connexion internet haut débit, idéal pour travailler en toute sérénité, étudier, développer vos projets d'entreprise ou échanger dans un cadre professionnel.",
  },
  {
    question: "Où se trouve Gennevilliers et quels sont vos horaires d'ouverture ?",
    answer:
      "Nous sommes situés au 13 RUE MAARAKAT OUHOUD, EX MARECHAL, Casablanca 20080, Casablanca, Morocco. Nous vous accueillons du Lundi au Samedi de 9h00 à 20h00, et nous répondons 7j/7 sur WhatsApp au 06 14 09 59 99.",
  },
  {
    question: 'Quelles sont les puissances de chargeurs disponibles à la vente ?',
    answer:
      "Nous proposons une sélection complète de chargeurs certifiés : chargeurs compacts 12W, chargeurs rapides 20W USB-C Power Delivery, adaptateurs secteurs 30W ultra-rapides, ainsi que des chargeurs multi-ports GaN 65W adaptés à tous les smartphones, tablettes et ordinateurs.",
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
          <span className="text-xs font-mono font-semibold text-primary tracking-wider uppercase">
            Aide &amp; Renseignements
          </span>
          <h2
            className="font-headline text-headline-md md:text-headline-lg text-on-surface"
            data-design-text-token="headline-lg"
          >
            Questions Fréquentes — Gennevilliers
          </h2>
          <p className="font-body text-body-md text-muted max-w-xl" data-design-text-token="body-md">
            Toutes les réponses sur nos chargeurs, nos réparations d&apos;écrans et notre espace coworking à Casablanca.
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
                  <span className="font-title text-title-md text-on-surface font-semibold" data-design-text-token="title-md">
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
                  <p className="font-body text-body-md text-muted text-pretty leading-relaxed" data-design-text-token="body-md">
                    {faq.answer}
                  </p>
                </div>
              </div>
            );
          })}
        </div>

        <div className="mt-8 text-center">
          <p className="font-body text-body-sm text-muted">
            Vous avez une autre question ?{' '}
            <a
              href="https://wa.me/212614095999?text=Bonjour%20Gennevilliers%2C%20j%27ai%20une%20question%20particuli%C3%A8re."
              target="_blank"
              rel="noopener noreferrer"
              className="text-whatsapp font-semibold hover:underline"
            >
              Posez-la directement sur WhatsApp au 06 14 09 59 99 &rarr;
            </a>
          </p>
        </div>
      </div>
    </section>
  );
}
