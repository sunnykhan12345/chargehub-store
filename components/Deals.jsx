'use client';

import { useState, useEffect } from 'react';
import { Clock, ChevronLeft, ChevronRight, MessageCircle } from 'lucide-react';

export default function Deals() {
  const [timeLeft, setTimeLeft] = useState({
    days: 12,
    hours: 8,
    minutes: 15,
    seconds: 42,
  });

  useEffect(() => {
    let totalSeconds = 12 * 86400 + 8 * 3600 + 15 * 60 + 42;
    const interval = setInterval(() => {
      if (totalSeconds > 0) {
        totalSeconds--;
        const days = Math.floor(totalSeconds / 86400);
        const hours = Math.floor((totalSeconds % 86400) / 3600);
        const minutes = Math.floor((totalSeconds % 3600) / 60);
        const seconds = totalSeconds % 60;
        setTimeLeft({ days, hours, minutes, seconds });
      }
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  const formatTimer = () => {
    const d = String(timeLeft.days).padStart(2, '0');
    const h = String(timeLeft.hours).padStart(2, '0');
    const m = String(timeLeft.minutes).padStart(2, '0');
    const s = String(timeLeft.seconds).padStart(2, '0');
    return `${d}J : ${h}H : ${m}M : ${s}S`;
  };

  return (
    <section id="bonnes-affaires" className="py-10 sm:py-12 lg:py-section">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-10">
        <div className="flex flex-wrap items-center justify-between gap-3 sm:gap-4 mb-6 sm:mb-8">
          <div>
            <h2
              className="font-headline text-xl sm:text-headline-md md:text-headline-lg text-on-surface font-bold"
              data-design-text-token="headline-lg"
            >
              Nos Chargeurs &amp; Bonnes Affaires
            </h2>
            <p className="font-body text-xs sm:text-body-sm text-muted mt-1">
              Commandez directement sur WhatsApp au <strong className="text-on-surface">06 14 09 59 99</strong>
            </p>
          </div>
          {/* Badge compte à rebours */}
          <span
            data-component-id="badge-numeric"
            data-component-type="badge"
            data-component-variant="numeric"
            role="status"
            className="inline-flex items-center gap-1.5 px-3 sm:px-4 py-1.5 rounded-full bg-deal-bg text-on-deal-bg font-mono text-xs sm:text-mono-timer tabular-nums shadow-sm shrink-0"
          >
            <Clock className="w-3.5 h-3.5 sm:w-4 sm:h-4 shrink-0 text-primary" aria-hidden="true" />
            <span id="deal-countdown" data-design-text-token="mono-timer">
              {formatTimer()}
            </span>
          </span>
        </div>

        <div className="relative">
          {/* Flèche carrousel gauche */}
          <button
            type="button"
            aria-label="Offres précédentes"
            className="hidden xl:inline-flex items-center justify-center w-9 h-9 rounded-full bg-surface border border-outline text-on-surface hover:bg-primary hover:text-on-primary transition-colors duration-state-change absolute -left-5 top-1/3 -translate-y-1/2 z-10 shrink-0 shadow-sm"
          >
            <ChevronLeft className="w-5 h-5 shrink-0" aria-hidden="true" />
          </button>

          {/* Grille 4 produits */}
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-6 items-stretch">
            {/* Produit 1 : Chargeur GaN 65W Multi-Ports */}
            <article
              data-component-id="card-action"
              data-component-type="card"
              data-component-variant="action"
              className="flex flex-col justify-between gap-2.5 sm:gap-3 h-full group bg-surface rounded-lg sm:rounded-md p-2 sm:p-0 border border-outline/50 sm:border-0 shadow-xs sm:shadow-none"
            >
              <div className="flex flex-col gap-2 sm:gap-3">
                <div className="aspect-square rounded-md bg-surface-container overflow-hidden relative flex items-center justify-center">
                  <span className="absolute top-2 left-2 sm:top-2.5 sm:left-2.5 z-10 px-1.5 sm:px-2 py-0.5 rounded-full bg-primary text-on-primary text-[10px] sm:text-[11px] font-semibold leading-tight shadow-xs">
                    Puissance GaN
                  </span>
                  <img
                    src="/images/product-gan-65w.jpg"
                    alt="Chargeur Rapide GaN 65W Multi-Ports"
                    className="w-full h-full object-cover transition-transform duration-surface-enter group-hover:scale-105"
                  />
                </div>
                <header className="flex flex-col items-center text-center gap-0.5 sm:gap-1 px-1">
                  <h3 className="font-title text-xs sm:text-title-md text-on-surface font-semibold line-clamp-2 min-h-[2rem] sm:min-h-[2.75rem] flex items-center justify-center" data-design-text-token="title-md">
                    Chargeur GaN 65W Multi-Ports
                  </h3>
                  <p className="font-label text-xs sm:text-label-lg text-primary font-bold tabular-nums" data-design-text-token="label-lg">
                    290 DH / 29,90 €
                  </p>
                </header>
                <div className="flex items-center justify-center gap-1.5 sm:gap-2" aria-label="Coloris disponibles">
                  <span className="w-2.5 h-2.5 sm:w-3.5 sm:h-3.5 rounded-full bg-primary ring-1 ring-offset-2 ring-primary"></span>
                  <span className="w-2.5 h-2.5 sm:w-3.5 sm:h-3.5 rounded-full bg-surface border border-outline"></span>
                  <span className="w-2.5 h-2.5 sm:w-3.5 sm:h-3.5 rounded-full bg-muted"></span>
                </div>
              </div>
              <footer className="pt-1">
                <a
                  href="https://wa.me/212614095999?text=Bonjour%20Gennevilliers%2C%20je%20souhaite%20commander%20le%20Chargeur%20GaN%2065W%20Multi-Ports."
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

            {/* Produit 2 : Câble USB-C Tressé 100W */}
            <article
              data-component-id="card-action"
              data-component-type="card"
              data-component-variant="action"
              className="flex flex-col justify-between gap-2.5 sm:gap-3 h-full group bg-surface rounded-lg sm:rounded-md p-2 sm:p-0 border border-outline/50 sm:border-0 shadow-xs sm:shadow-none"
            >
              <div className="flex flex-col gap-2 sm:gap-3">
                <div className="aspect-square rounded-md bg-surface-container overflow-hidden relative flex items-center justify-center">
                  <img
                    src="/images/product-cable-usbc-100w.jpg"
                    alt="Câble USB-C Tressé 100W Haute Durabilité"
                    className="w-full h-full object-cover transition-transform duration-surface-enter group-hover:scale-105"
                  />
                </div>
                <header className="flex flex-col items-center text-center gap-0.5 sm:gap-1 px-1">
                  <h3 className="font-title text-xs sm:text-title-md text-on-surface font-semibold line-clamp-2 min-h-[2rem] sm:min-h-[2.75rem] flex items-center justify-center" data-design-text-token="title-md">
                    Câble USB-C Tressé 100W (2m)
                  </h3>
                  <p className="font-label text-xs sm:text-label-lg text-primary font-bold tabular-nums" data-design-text-token="label-lg">
                    190 DH / 19,90 €
                  </p>
                </header>
                <div className="flex items-center justify-center gap-1.5 sm:gap-2" aria-label="Coloris disponibles">
                  <span className="w-2.5 h-2.5 sm:w-3.5 sm:h-3.5 rounded-full bg-primary ring-1 ring-offset-2 ring-primary"></span>
                  <span className="w-2.5 h-2.5 sm:w-3.5 sm:h-3.5 rounded-full bg-muted"></span>
                  <span className="w-2.5 h-2.5 sm:w-3.5 sm:h-3.5 rounded-full bg-surface border border-outline"></span>
                </div>
              </div>
              <footer className="pt-1">
                <a
                  href="https://wa.me/212614095999?text=Bonjour%20Gennevilliers%2C%20je%20souhaite%20commander%20le%20C%C3%A2ble%20USB-C%20Tress%C3%A9%20100W."
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

            {/* Produit 3 : Station Sans Fil 3-en-1 */}
            <article
              data-component-id="card-action"
              data-component-type="card"
              data-component-variant="action"
              className="flex flex-col justify-between gap-2.5 sm:gap-3 h-full group bg-surface rounded-lg sm:rounded-md p-2 sm:p-0 border border-outline/50 sm:border-0 shadow-xs sm:shadow-none"
            >
              <div className="flex flex-col gap-2 sm:gap-3">
                <div className="aspect-square rounded-md bg-surface-container overflow-hidden relative flex items-center justify-center">
                  <img
                    src="/images/product-station-3in1.jpg"
                    alt="Station de Charge Sans Fil 3-en-1 MagSafe"
                    className="w-full h-full object-cover transition-transform duration-surface-enter group-hover:scale-105"
                  />
                </div>
                <header className="flex flex-col items-center text-center gap-0.5 sm:gap-1 px-1">
                  <h3 className="font-title text-xs sm:text-title-md text-on-surface font-semibold line-clamp-2 min-h-[2rem] sm:min-h-[2.75rem] flex items-center justify-center" data-design-text-token="title-md">
                    Station Sans Fil 3-en-1 MagSafe
                  </h3>
                  <p className="font-label text-xs sm:text-label-lg text-primary font-bold tabular-nums" data-design-text-token="label-lg">
                    590 DH / 59,90 €
                  </p>
                </header>
                <div className="flex items-center justify-center gap-1.5 sm:gap-2" aria-label="Coloris disponibles">
                  <span className="w-2.5 h-2.5 sm:w-3.5 sm:h-3.5 rounded-full bg-primary ring-1 ring-offset-2 ring-primary"></span>
                  <span className="w-2.5 h-2.5 sm:w-3.5 sm:h-3.5 rounded-full bg-surface border border-outline"></span>
                </div>
              </div>
              <footer className="pt-1">
                <a
                  href="https://wa.me/212614095999?text=Bonjour%20Gennevilliers%2C%20je%20souhaite%20commander%20la%20Station%20Sans%20Fil%203-en-1."
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

            {/* Produit 4 : Câble iPhone Lightning MFI */}
            <article
              data-component-id="card-action"
              data-component-type="card"
              data-component-variant="action"
              className="flex flex-col justify-between gap-2.5 sm:gap-3 h-full group bg-surface rounded-lg sm:rounded-md p-2 sm:p-0 border border-outline/50 sm:border-0 shadow-xs sm:shadow-none"
            >
              <div className="flex flex-col gap-2 sm:gap-3">
                <div className="aspect-square rounded-md bg-surface-container overflow-hidden relative flex items-center justify-center">
                  <img
                    src="/images/product-cable-lightning.jpg"
                    alt="Câble iPhone USB-C vers Lightning MFI Certifié"
                    className="w-full h-full object-cover transition-transform duration-surface-enter group-hover:scale-105"
                  />
                </div>
                <header className="flex flex-col items-center text-center gap-0.5 sm:gap-1 px-1">
                  <h3 className="font-title text-xs sm:text-title-md text-on-surface font-semibold line-clamp-2 min-h-[2rem] sm:min-h-[2.75rem] flex items-center justify-center" data-design-text-token="title-md">
                    Câble iPhone Lightning Certifié
                  </h3>
                  <p className="font-label text-xs sm:text-label-lg text-primary font-bold tabular-nums" data-design-text-token="label-lg">
                    140 DH / 14,90 €
                  </p>
                </header>
                <div className="flex items-center justify-center gap-1.5 sm:gap-2" aria-label="Coloris disponibles">
                  <span className="w-2.5 h-2.5 sm:w-3.5 sm:h-3.5 rounded-full bg-surface border border-outline ring-1 ring-offset-2 ring-primary"></span>
                  <span className="w-2.5 h-2.5 sm:w-3.5 sm:h-3.5 rounded-full bg-primary"></span>
                  <span className="w-2.5 h-2.5 sm:w-3.5 sm:h-3.5 rounded-full bg-star"></span>
                </div>
              </div>
              <footer className="pt-1">
                <a
                  href="https://wa.me/212614095999?text=Bonjour%20Gennevilliers%2C%20je%20souhaite%20commander%20le%20C%C3%A2ble%20iPhone%20Lightning%20Certifi%C3%A9."
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
            aria-label="Offres suivantes"
            className="hidden xl:inline-flex items-center justify-center w-9 h-9 rounded-full bg-surface border border-outline text-on-surface hover:bg-primary hover:text-on-primary transition-colors duration-state-change absolute -right-5 top-1/3 -translate-y-1/2 z-10 shrink-0 shadow-sm"
          >
            <ChevronRight className="w-5 h-5 shrink-0" aria-hidden="true" />
          </button>
        </div>
      </div>
    </section>
  );
}
