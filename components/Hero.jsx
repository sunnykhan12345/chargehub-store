'use client';

import { MapPin, ArrowRight, MessageCircle, ChevronLeft, ChevronRight } from 'lucide-react';

export default function Hero() {
  return (
    <section id="accueil" className="py-6 lg:py-8 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-5 items-stretch">
          {/* Aperçu latéral gauche (Desktop) */}
          <div className="hidden lg:flex lg:col-span-2 rounded-lg bg-surface-container relative items-center justify-center overflow-hidden opacity-60">
            <img
              src="/images/hero-preview-left.png"
              alt="Batterie MagSafe"
              className="w-full h-full object-cover"
            />
            <button
              type="button"
              aria-label="Diapositive précédente"
              className="absolute right-3 top-1/2 -translate-y-1/2 w-9 h-9 rounded-full bg-surface border border-outline flex items-center justify-center text-on-surface hover:bg-primary hover:text-on-primary transition-colors duration-state-change shrink-0"
            >
              <ChevronLeft className="w-5 h-5 shrink-0" aria-hidden="true" />
            </button>
          </div>

          {/* Carte Hero centrale */}
          <div className="lg:col-span-8 rounded-lg bg-surface-container overflow-hidden flex flex-col justify-between relative min-h-[380px] sm:min-h-[440px] md:min-h-[490px]">
            <div className="pt-6 sm:pt-10 pb-4 px-3 sm:px-8 md:px-12 text-center flex flex-col items-center gap-2.5 sm:gap-3 z-10">
              {/* Badge Localisation */}
              <span className="inline-flex items-center gap-1.5 px-3 py-1 sm:py-1.5 rounded-full bg-surface border border-outline text-on-surface text-[10px] sm:text-xs font-label font-semibold tracking-wide shadow-xs max-w-full truncate">
                <MapPin className="w-3.5 h-3.5 text-primary shrink-0" aria-hidden="true" />
                <span className="truncate">GENNEVILLIERS &bull; Casablanca, Morocco</span>
              </span>

              <h1
                className="font-display text-[21px] sm:text-3xl md:text-display-lg text-on-surface-container text-balance font-extrabold leading-[1.2] sm:leading-tight"
                data-design-text-token="display-lg"
              >
                12W, 20W &amp; 30W chargers. Screen repair. Coworking.
              </h1>
              <p
                className="font-body text-xs sm:text-body-md text-muted max-w-xl text-pretty leading-relaxed"
                data-design-text-token="body-md"
              >
                Gennevilliers vous propose des services adaptés à vos besoins à Casablanca : vente d&apos;accessoires fiables, réparation experte d&apos;afficheurs et un espace de travail collaboratif convivial.
              </p>
              
              {/* Boutons d'action */}
              <div className="pt-2 flex flex-col sm:flex-row items-stretch sm:items-center justify-center gap-2 sm:gap-3 w-full sm:w-auto">
                <a
                  href="#bonnes-affaires"
                  data-component-id="button-primary"
                  data-component-type="button"
                  data-component-variant="primary"
                  className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-5 sm:px-6 py-2.5 rounded-full bg-primary text-on-primary font-label text-xs sm:text-label-lg transition-colors duration-state-change hover:bg-secondary shrink-0 shadow-sm text-center"
                >
                  <span data-design-text-token="label-lg">Découvrir les chargeurs</span>
                  <ArrowRight className="w-4 h-4 shrink-0" aria-hidden="true" />
                </a>
                <a
                  href="https://wa.me/212614095999?text=Bonjour%20Gennevilliers%2C%20je%20souhaite%20commander%20ou%20demander%20un%20service."
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-5 sm:px-6 py-2.5 rounded-full bg-surface text-on-surface border border-outline font-label text-xs sm:text-label-lg transition-colors duration-state-change hover:bg-whatsapp hover:text-on-whatsapp hover:border-whatsapp shrink-0 shadow-sm text-center"
                >
                  <MessageCircle className="w-4 h-4 text-whatsapp shrink-0" aria-hidden="true" />
                  <span>WhatsApp : 06 14 09 59 99</span>
                </a>
              </div>
            </div>
            <div className="w-full flex items-end justify-center px-2 sm:px-4">
              <img
                src="/images/hero-banner.jpg"
                alt="Collection de chargeurs certifiés et accessoires Gennevilliers"
                className="w-full max-h-52 sm:max-h-72 object-cover object-bottom"
              />
            </div>
          </div>

          {/* Aperçu latéral droit (Desktop) */}
          <div className="hidden lg:flex lg:col-span-2 rounded-lg bg-surface-container relative items-center justify-center overflow-hidden opacity-80">
            <img
              src="/images/hero-preview-right.jpg"
              alt="Chargeur sans fil magnétique"
              className="w-full h-full object-cover"
            />
            <button
              type="button"
              aria-label="Diapositive suivante"
              className="absolute left-3 top-1/2 -translate-y-1/2 w-9 h-9 rounded-full bg-surface border border-outline flex items-center justify-center text-on-surface hover:bg-primary hover:text-on-primary transition-colors duration-state-change shrink-0"
            >
              <ChevronRight className="w-5 h-5 shrink-0" aria-hidden="true" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
