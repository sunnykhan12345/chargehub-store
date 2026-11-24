'use client';

import { MapPin, ArrowRight, MessageCircle, ChevronLeft, ChevronRight } from 'lucide-react';

export default function Hero() {
  return (
    <section id="accueil" className="py-6 lg:py-8 overflow-hidden">
      <div className="max-w-7xl mx-auto px-page-margin lg:px-10">
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
          <div className="lg:col-span-8 rounded-lg bg-surface-container overflow-hidden flex flex-col justify-between relative min-h-[440px] md:min-h-[490px]">
            <div className="pt-10 pb-4 px-6 md:px-12 text-center flex flex-col items-center gap-3 z-10">
              {/* Badge Localisation parfaitement aligné sans coupure */}
              <span className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full bg-surface border border-outline text-on-surface text-xs font-label font-semibold tracking-wide shadow-sm">
                <MapPin className="w-4 h-4 text-primary shrink-0" aria-hidden="true" />
                <span>GENNEVILLIERS &bull; Casablanca, Morocco</span>
              </span>

              <h1
                className="font-display text-display-lg-mobile md:text-display-lg text-on-surface-container text-balance font-extrabold"
                data-design-text-token="display-lg"
              >
                12W, 20W &amp; 30W chargers. Screen repair. Coworking.
              </h1>
              <p
                className="font-body text-body-md text-muted max-w-xl text-pretty"
                data-design-text-token="body-md"
              >
                Gennevilliers vous propose des services adaptés à vos besoins à Casablanca : vente d&apos;accessoires fiables, réparation experte d&apos;afficheurs et un espace de travail collaboratif convivial.
              </p>
              
              {/* Boutons d'action avec icônes Lucide SVG parfaitement visibles */}
              <div className="pt-2 flex flex-wrap items-center justify-center gap-3">
                <a
                  href="#bonnes-affaires"
                  data-component-id="button-primary"
                  data-component-type="button"
                  data-component-variant="primary"
                  className="inline-flex items-center justify-center gap-2 px-6 py-2.5 rounded-full bg-primary text-on-primary font-label text-label-lg transition-colors duration-state-change hover:bg-secondary shrink-0 shadow-sm"
                >
                  <span data-design-text-token="label-lg">Découvrir les chargeurs</span>
                  <ArrowRight className="w-4 h-4 shrink-0" aria-hidden="true" />
                </a>
                <a
                  href="https://wa.me/212614095999?text=Bonjour%20Gennevilliers%2C%20je%20souhaite%20commander%20ou%20demander%20un%20service."
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-2 px-6 py-2.5 rounded-full bg-surface text-on-surface border border-outline font-label text-label-lg transition-colors duration-state-change hover:bg-whatsapp hover:text-on-whatsapp hover:border-whatsapp shrink-0 shadow-sm"
                >
                  <MessageCircle className="w-4 h-4 text-whatsapp shrink-0" aria-hidden="true" />
                  <span>WhatsApp : 06 14 09 59 99</span>
                </a>
              </div>
            </div>
            <div className="w-full flex items-end justify-center px-4">
              <img
                src="/images/hero-banner.jpg"
                alt="Collection de chargeurs certifiés et accessoires Gennevilliers"
                className="w-full max-h-72 object-cover object-bottom"
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
