'use client';

import { ChevronLeft, ChevronRight, MessageCircle } from 'lucide-react';

export default function BestSellers() {
  return (
    <section id="meilleures-ventes" className="pb-10 sm:pb-12 lg:pb-section">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-10">
        <div className="text-center mb-6 sm:mb-8 flex flex-col items-center gap-2">
          <span className="text-xs font-mono font-semibold text-primary tracking-wider uppercase">
            Nos Puissances Vedettes
          </span>
          <h2
            className="font-headline text-xl sm:text-headline-md md:text-headline-lg text-on-surface font-bold"
            data-design-text-token="headline-lg"
          >
            Chargeurs 12W, 20W &amp; 30W — Meilleures Ventes
          </h2>
          <p className="font-body text-xs sm:text-body-sm text-muted max-w-xl">
            Des chargeurs homologués et sécurisés répondant à tous vos besoins de recharge au quotidien à Casablanca.
          </p>
        </div>

        <div className="relative">
          {/* Flèche carrousel gauche */}
          <button
            type="button"
            aria-label="Meilleures ventes précédentes"
            className="hidden xl:inline-flex items-center justify-center w-9 h-9 rounded-full bg-surface border border-outline text-on-surface hover:bg-primary hover:text-on-primary transition-colors duration-state-change absolute -left-5 top-1/3 -translate-y-1/2 z-10 shrink-0 shadow-sm"
          >
            <ChevronLeft className="w-5 h-5 shrink-0" aria-hidden="true" />
          </button>

          <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-6 items-stretch">
            {/* Best Seller 1 : Adaptateur Secteur 30W */}
            <article
              data-component-id="card-action"
              data-component-type="card"
              data-component-variant="action"
              className="flex flex-col justify-between gap-2.5 sm:gap-3 h-full group bg-surface rounded-lg sm:rounded-md p-2 sm:p-0 border border-outline/50 sm:border-0 shadow-xs sm:shadow-none"
            >
              <div className="flex flex-col gap-2 sm:gap-3">
                <div className="aspect-square rounded-md bg-surface-container overflow-hidden relative flex items-center justify-center">
                  <span
                    data-component-id="badge-status"
                    data-component-type="badge"
                    data-component-variant="status"
                    role="status"
                    className="absolute top-2 right-2 sm:top-3 sm:right-3 z-10 inline-flex items-center px-1.5 sm:px-2.5 py-0.5 rounded-full bg-badge-green text-on-badge-green font-label text-[10px] sm:text-label-sm font-semibold leading-tight shadow-xs"
                  >
                    <span data-design-text-token="label-sm">30W Puissance</span>
                  </span>
                  <img
                    src="/images/product-adapter-30w.jpg"
                    alt="Adaptateur Secteur USB-C 30W Gennevilliers"
                    className="w-full h-full object-cover transition-transform duration-surface-enter group-hover:scale-105"
                  />
                </div>
                <header className="flex flex-col items-center text-center gap-0.5 sm:gap-1 px-1">
                  <h3 className="font-title text-xs sm:text-title-md text-on-surface font-semibold line-clamp-2 min-h-[2rem] sm:min-h-[2.75rem] flex items-center justify-center" data-design-text-token="title-md">
                    Adaptateur Secteur USB-C 30W
                  </h3>
                  <p className="font-label text-xs sm:text-label-lg text-primary font-bold tabular-nums" data-design-text-token="label-lg">
                    240 DH / 24,90 €
                  </p>
                </header>
                <div className="flex items-center justify-center gap-1.5 sm:gap-2" aria-label="Coloris disponibles">
                  <span className="w-2.5 h-2.5 sm:w-3.5 sm:h-3.5 rounded-full bg-surface border border-outline ring-1 ring-offset-2 ring-primary"></span>
                  <span className="w-2.5 h-2.5 sm:w-3.5 sm:h-3.5 rounded-full bg-primary"></span>
                </div>
              </div>
              <footer className="pt-1">
                <a
                  href="https://wa.me/212614095999?text=Bonjour%20Gennevilliers%2C%20je%20souhaite%20commander%20l%27Adaptateur%20Secteur%20USB-C%2030W."
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full inline-flex items-center justify-center gap-1.5 sm:gap-2 px-2 sm:px-4 py-2 sm:py-2.5 rounded-sm bg-surface text-on-surface border border-outline font-label text-xs sm:text-label-lg transition-colors duration-state-change ease-state-change hover:bg-whatsapp hover:text-on-whatsapp hover:border-whatsapp shadow-sm"
                >
                  <MessageCircle className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-whatsapp group-hover:text-on-whatsapp shrink-0" aria-hidden="true" />
                  <span className="sm:hidden text-[11px] font-semibold">Commander</span>
                  <span className="hidden sm:inline text-xs md:text-label-lg text-center leading-tight">Commander sur WhatsApp</span>
                </a>
              </footer>
            </article>

            {/* Best Seller 2 : Chargeur Rapide 20W */}
            <article
              data-component-id="card-action"
              data-component-type="card"
              data-component-variant="action"
              className="flex flex-col justify-between gap-2.5 sm:gap-3 h-full group bg-surface rounded-lg sm:rounded-md p-2 sm:p-0 border border-outline/50 sm:border-0 shadow-xs sm:shadow-none"
            >
              <div className="flex flex-col gap-2 sm:gap-3">
                <div className="aspect-square rounded-md bg-surface-container overflow-hidden relative flex items-center justify-center">
                  <span
                    role="status"
                    className="absolute top-2 right-2 sm:top-3 sm:right-3 z-10 inline-flex items-center px-1.5 sm:px-2.5 py-0.5 rounded-full bg-primary text-on-primary font-label text-[10px] sm:text-label-sm font-semibold leading-tight shadow-xs"
                  >
                    20W Fast PD
                  </span>
                  <img
                    src="/images/product-car-charger-45w.jpg"
                    alt="Chargeur Rapide USB-C 20W Power Delivery"
                    className="w-full h-full object-cover transition-transform duration-surface-enter group-hover:scale-105"
                  />
                </div>
                <header className="flex flex-col items-center text-center gap-0.5 sm:gap-1 px-1">
                  <h3 className="font-title text-xs sm:text-title-md text-on-surface font-semibold line-clamp-2 min-h-[2rem] sm:min-h-[2.75rem] flex items-center justify-center" data-design-text-token="title-md">
                    Chargeur Rapide 20W USB-C PD
                  </h3>
                  <p className="font-label text-xs sm:text-label-lg text-primary font-bold tabular-nums" data-design-text-token="label-lg">
                    190 DH / 19,90 €
                  </p>
                </header>
                <div className="flex items-center justify-center gap-1.5 sm:gap-2" aria-label="Coloris disponibles">
                  <span className="w-2.5 h-2.5 sm:w-3.5 sm:h-3.5 rounded-full bg-primary ring-1 ring-offset-2 ring-primary"></span>
                  <span className="w-2.5 h-2.5 sm:w-3.5 sm:h-3.5 rounded-full bg-muted"></span>
                </div>
              </div>
              <footer className="pt-1">
                <a
                  href="https://wa.me/212614095999?text=Bonjour%20Gennevilliers%2C%20je%20souhaite%20commander%20le%20Chargeur%20Rapide%2020W%20USB-C%20PD."
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full inline-flex items-center justify-center gap-1.5 sm:gap-2 px-2 sm:px-4 py-2 sm:py-2.5 rounded-sm bg-surface text-on-surface border border-outline font-label text-xs sm:text-label-lg transition-colors duration-state-change ease-state-change hover:bg-whatsapp hover:text-on-whatsapp hover:border-whatsapp shadow-sm"
                >
                  <MessageCircle className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-whatsapp group-hover:text-on-whatsapp shrink-0" aria-hidden="true" />
                  <span className="sm:hidden text-[11px] font-semibold">Commander</span>
                  <span className="hidden sm:inline text-xs md:text-label-lg text-center leading-tight">Commander sur WhatsApp</span>
                </a>
              </footer>
            </article>

            {/* Best Seller 3 : Chargeur Sans Fil MagSafe 15W */}
            <article
              data-component-id="card-action"
              data-component-type="card"
              data-component-variant="action"
              className="flex flex-col justify-between gap-2.5 sm:gap-3 h-full group bg-surface rounded-lg sm:rounded-md p-2 sm:p-0 border border-outline/50 sm:border-0 shadow-xs sm:shadow-none"
            >
              <div className="flex flex-col gap-2 sm:gap-3">
                <div className="aspect-square rounded-md bg-surface-container overflow-hidden relative flex items-center justify-center">
                  <span
                    role="status"
                    className="absolute top-2 right-2 sm:top-3 sm:right-3 z-10 inline-flex items-center px-1.5 sm:px-2.5 py-0.5 rounded-full bg-surface text-on-surface border border-outline font-label text-[10px] sm:text-label-sm font-semibold leading-tight shadow-xs"
                  >
                    MagSafe 15W
                  </span>
                  <img
                    src="/images/product-wireless-magsafe-15w.jpg"
                    alt="Chargeur Sans Fil MagSafe 15W Magnétique"
                    className="w-full h-full object-cover transition-transform duration-surface-enter group-hover:scale-105"
                  />
                </div>
                <header className="flex flex-col items-center text-center gap-0.5 sm:gap-1 px-1">
                  <h3 className="font-title text-xs sm:text-title-md text-on-surface font-semibold line-clamp-2 min-h-[2rem] sm:min-h-[2.75rem] flex items-center justify-center" data-design-text-token="title-md">
                    Chargeur Sans Fil MagSafe 15W
                  </h3>
                  <p className="font-label text-xs sm:text-label-lg text-primary font-bold tabular-nums" data-design-text-token="label-lg">
                    390 DH / 39,90 €
                  </p>
                </header>
                <div className="flex items-center justify-center gap-1.5 sm:gap-2" aria-label="Coloris disponibles">
                  <span className="w-2.5 h-2.5 sm:w-3.5 sm:h-3.5 rounded-full bg-surface border border-outline ring-1 ring-offset-2 ring-primary"></span>
                  <span className="w-2.5 h-2.5 sm:w-3.5 sm:h-3.5 rounded-full bg-primary"></span>
                </div>
              </div>
              <footer className="pt-1">
                <a
                  href="https://wa.me/212614095999?text=Bonjour%20Gennevilliers%2C%20je%20souhaite%20commander%20le%20Chargeur%20Sans%20Fil%20MagSafe%2015W."
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full inline-flex items-center justify-center gap-1.5 sm:gap-2 px-2 sm:px-4 py-2 sm:py-2.5 rounded-sm bg-surface text-on-surface border border-outline font-label text-xs sm:text-label-lg transition-colors duration-state-change ease-state-change hover:bg-whatsapp hover:text-on-whatsapp hover:border-whatsapp shadow-sm"
                >
                  <MessageCircle className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-whatsapp group-hover:text-on-whatsapp shrink-0" aria-hidden="true" />
                  <span className="sm:hidden text-[11px] font-semibold">Commander</span>
                  <span className="hidden sm:inline text-xs md:text-label-lg text-center leading-tight">Commander sur WhatsApp</span>
                </a>
              </footer>
            </article>

            {/* Best Seller 4 : Chargeur Compact 12W */}
            <article
              data-component-id="card-action"
              data-component-type="card"
              data-component-variant="action"
              className="flex flex-col justify-between gap-2.5 sm:gap-3 h-full group bg-surface rounded-lg sm:rounded-md p-2 sm:p-0 border border-outline/50 sm:border-0 shadow-xs sm:shadow-none"
            >
              <div className="flex flex-col gap-2 sm:gap-3">
                <div className="aspect-square rounded-md bg-surface-container overflow-hidden relative flex items-center justify-center">
                  <span
                    role="status"
                    className="absolute top-2 right-2 sm:top-3 sm:right-3 z-10 inline-flex items-center px-1.5 sm:px-2.5 py-0.5 rounded-full bg-badge-green text-on-badge-green font-label text-[10px] sm:text-label-sm font-semibold leading-tight shadow-xs"
                  >
                    12W Sécurisé
                  </span>
                  <img
                    src="/images/product-powerbank-10000mah.jpg"
                    alt="Chargeur Compact 12W Dual USB"
                    className="w-full h-full object-cover transition-transform duration-surface-enter group-hover:scale-105"
                  />
                </div>
                <header className="flex flex-col items-center text-center gap-0.5 sm:gap-1 px-1">
                  <h3 className="font-title text-xs sm:text-title-md text-on-surface font-semibold line-clamp-2 min-h-[2rem] sm:min-h-[2.75rem] flex items-center justify-center" data-design-text-token="title-md">
                    Chargeur Compact 12W Dual Port
                  </h3>
                  <p className="font-label text-xs sm:text-label-lg text-primary font-bold tabular-nums" data-design-text-token="label-lg">
                    140 DH / 14,90 €
                  </p>
                </header>
                <div className="flex items-center justify-center gap-1.5 sm:gap-2" aria-label="Coloris disponibles">
                  <span className="w-2.5 h-2.5 sm:w-3.5 sm:h-3.5 rounded-full bg-surface border border-outline ring-1 ring-offset-2 ring-primary"></span>
                  <span className="w-2.5 h-2.5 sm:w-3.5 sm:h-3.5 rounded-full bg-primary"></span>
                </div>
              </div>
              <footer className="pt-1">
                <a
                  href="https://wa.me/212614095999?text=Bonjour%20Gennevilliers%2C%20je%20souhaite%20commander%20le%20Chargeur%20Compact%2012W."
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full inline-flex items-center justify-center gap-1.5 sm:gap-2 px-2 sm:px-4 py-2 sm:py-2.5 rounded-sm bg-surface text-on-surface border border-outline font-label text-xs sm:text-label-lg transition-colors duration-state-change ease-state-change hover:bg-whatsapp hover:text-on-whatsapp hover:border-whatsapp shadow-sm"
                >
                  <MessageCircle className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-whatsapp group-hover:text-on-whatsapp shrink-0" aria-hidden="true" />
                  <span className="sm:hidden text-[11px] font-semibold">Commander</span>
                  <span className="hidden sm:inline text-xs md:text-label-lg text-center leading-tight">Commander sur WhatsApp</span>
                </a>
              </footer>
            </article>
          </div>

          {/* Flèche carrousel droite */}
          <button
            type="button"
            aria-label="Meilleures ventes suivantes"
            className="hidden xl:inline-flex items-center justify-center w-9 h-9 rounded-full bg-surface border border-outline text-on-surface hover:bg-primary hover:text-on-primary transition-colors duration-state-change absolute -right-5 top-1/3 -translate-y-1/2 z-10 shrink-0 shadow-sm"
          >
            <ChevronRight className="w-5 h-5 shrink-0" aria-hidden="true" />
          </button>
        </div>
      </div>
    </section>
  );
}
