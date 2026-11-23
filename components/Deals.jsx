'use client';

import { useState, useEffect } from 'react';

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
    <section id="bonnes-affaires" className="py-12 lg:py-section">
      <div className="max-w-7xl mx-auto px-page-margin lg:px-10">
        <div className="flex flex-wrap items-center justify-between gap-4 mb-8">
          <h2
            className="font-headline text-headline-md md:text-headline-lg text-on-surface"
            data-design-text-token="headline-lg"
          >
            Bonnes Affaires
          </h2>
          {/* Badge compte à rebours */}
          <span
            data-component-id="badge-numeric"
            data-component-type="badge"
            data-component-variant="numeric"
            role="status"
            className="inline-flex items-center gap-1.5 px-4 py-1.5 rounded-full bg-deal-bg text-on-deal-bg font-mono text-mono-timer tabular-nums"
          >
            <span className="material-symbols-outlined text-body-md" aria-hidden="true">
              schedule
            </span>
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
            className="hidden xl:inline-flex items-center justify-center w-9 h-9 rounded-full bg-surface border border-outline text-on-surface hover:bg-primary hover:text-on-primary transition-colors duration-state-change absolute -left-5 top-1/3 -translate-y-1/2 z-10"
          >
            <span className="material-symbols-outlined text-title-lg" aria-hidden="true">
              chevron_left
            </span>
          </button>

          {/* Grille 4 produits */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 items-stretch">
            {/* Produit 1 */}
            <article
              data-component-id="card-action"
              data-component-type="card"
              data-component-variant="action"
              className="flex flex-col justify-between gap-3 h-full group"
            >
              <div className="flex flex-col gap-3">
                <div className="aspect-square rounded-md bg-surface-container overflow-hidden relative flex items-center justify-center">
                  <img
                    src="/images/product-gan-65w.jpg"
                    alt="Chargeur Rapide GaN 65W Double USB-C"
                    className="w-full h-full object-cover transition-transform duration-surface-enter group-hover:scale-105"
                  />
                </div>
                <header className="flex flex-col items-center text-center gap-1">
                  <h3 className="font-title text-title-md text-on-surface" data-design-text-token="title-md">
                    Chargeur Rapide GaN 65W
                  </h3>
                  <p className="font-label text-label-lg text-on-surface tabular-nums" data-design-text-token="label-lg">
                    29,90 €
                  </p>
                </header>
                <div className="flex items-center justify-center gap-2" aria-label="Coloris disponibles">
                  <span className="w-3.5 h-3.5 rounded-full bg-primary ring-1 ring-offset-2 ring-primary"></span>
                  <span className="w-3.5 h-3.5 rounded-full bg-surface border border-outline"></span>
                  <span className="w-3.5 h-3.5 rounded-full bg-muted"></span>
                </div>
              </div>
              <footer className="pt-1">
                <a
                  href="https://wa.me/33600000000?text=Bonjour%2C%20je%20souhaite%20commander%20%3A%20Chargeur%20Rapide%20GaN%2065W%20(29%2C90%20%E2%82%AC)"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full inline-flex items-center justify-center gap-2 px-4 py-2.5 rounded-sm bg-surface text-on-surface border border-outline font-label text-label-lg transition-colors duration-state-change ease-state-change hover:bg-whatsapp hover:text-on-whatsapp hover:border-whatsapp"
                >
                  <span className="material-symbols-outlined text-title-md" aria-hidden="true">
                    chat
                  </span>
                  <span data-design-text-token="label-lg">Commander sur WhatsApp</span>
                </a>
              </footer>
            </article>

            {/* Produit 2 */}
            <article
              data-component-id="card-action"
              data-component-type="card"
              data-component-variant="action"
              className="flex flex-col justify-between gap-3 h-full group"
            >
              <div className="flex flex-col gap-3">
                <div className="aspect-square rounded-md bg-surface-container overflow-hidden relative flex items-center justify-center">
                  <img
                    src="/images/product-cable-usbc-100w.jpg"
                    alt="Câble USB-C Tressé 100W 2 mètres"
                    className="w-full h-full object-cover transition-transform duration-surface-enter group-hover:scale-105"
                  />
                </div>
                <header className="flex flex-col items-center text-center gap-1">
                  <h3 className="font-title text-title-md text-on-surface" data-design-text-token="title-md">
                    Câble USB-C Tressé 100W
                  </h3>
                  <p className="font-label text-label-lg text-on-surface tabular-nums" data-design-text-token="label-lg">
                    19,90 €
                  </p>
                </header>
                <div className="flex items-center justify-center gap-2" aria-label="Coloris disponibles">
                  <span className="w-3.5 h-3.5 rounded-full bg-primary ring-1 ring-offset-2 ring-primary"></span>
                  <span className="w-3.5 h-3.5 rounded-full bg-muted"></span>
                  <span className="w-3.5 h-3.5 rounded-full bg-surface border border-outline"></span>
                </div>
              </div>
              <footer className="pt-1">
                <a
                  href="https://wa.me/33600000000?text=Bonjour%2C%20je%20souhaite%20commander%20%3A%20C%C3%A2ble%20USB-C%20Tress%C3%A9%20100W%20(19%2C90%20%E2%82%AC)"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full inline-flex items-center justify-center gap-2 px-4 py-2.5 rounded-sm bg-surface text-on-surface border border-outline font-label text-label-lg transition-colors duration-state-change ease-state-change hover:bg-whatsapp hover:text-on-whatsapp hover:border-whatsapp"
                >
                  <span className="material-symbols-outlined text-title-md" aria-hidden="true">
                    chat
                  </span>
                  <span data-design-text-token="label-lg">Commander sur WhatsApp</span>
                </a>
              </footer>
            </article>

            {/* Produit 3 */}
            <article
              data-component-id="card-action"
              data-component-type="card"
              data-component-variant="action"
              className="flex flex-col justify-between gap-3 h-full group"
            >
              <div className="flex flex-col gap-3">
                <div className="aspect-square rounded-md bg-surface-container overflow-hidden relative flex items-center justify-center">
                  <img
                    src="/images/product-station-3in1.jpg"
                    alt="Station de Charge Sans Fil 3-en-1 MagSafe"
                    className="w-full h-full object-cover transition-transform duration-surface-enter group-hover:scale-105"
                  />
                </div>
                <header className="flex flex-col items-center text-center gap-1">
                  <h3 className="font-title text-title-md text-on-surface" data-design-text-token="title-md">
                    Station Sans Fil 3-en-1
                  </h3>
                  <p className="font-label text-label-lg text-on-surface tabular-nums" data-design-text-token="label-lg">
                    59,90 €
                  </p>
                </header>
                <div className="flex items-center justify-center gap-2" aria-label="Coloris disponibles">
                  <span className="w-3.5 h-3.5 rounded-full bg-primary ring-1 ring-offset-2 ring-primary"></span>
                  <span className="w-3.5 h-3.5 rounded-full bg-surface border border-outline"></span>
                </div>
              </div>
              <footer className="pt-1">
                <a
                  href="https://wa.me/33600000000?text=Bonjour%2C%20je%20souhaite%20commander%20%3A%20Station%20Sans%20Fil%203-en-1%20(59%2C90%20%E2%82%AC)"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full inline-flex items-center justify-center gap-2 px-4 py-2.5 rounded-sm bg-surface text-on-surface border border-outline font-label text-label-lg transition-colors duration-state-change ease-state-change hover:bg-whatsapp hover:text-on-whatsapp hover:border-whatsapp"
                >
                  <span className="material-symbols-outlined text-title-md" aria-hidden="true">
                    chat
                  </span>
                  <span data-design-text-token="label-lg">Commander sur WhatsApp</span>
                </a>
              </footer>
            </article>

            {/* Produit 4 */}
            <article
              data-component-id="card-action"
              data-component-type="card"
              data-component-variant="action"
              className="flex flex-col justify-between gap-3 h-full group"
            >
              <div className="flex flex-col gap-3">
                <div className="aspect-square rounded-md bg-surface-container overflow-hidden relative flex items-center justify-center">
                  <img
                    src="/images/product-cable-lightning.jpg"
                    alt="Câble iPhone USB-C vers Lightning MFI"
                    className="w-full h-full object-cover transition-transform duration-surface-enter group-hover:scale-105"
                  />
                </div>
                <header className="flex flex-col items-center text-center gap-1">
                  <h3 className="font-title text-title-md text-on-surface" data-design-text-token="title-md">
                    Câble iPhone Lightning MFI
                  </h3>
                  <p className="font-label text-label-lg text-on-surface tabular-nums" data-design-text-token="label-lg">
                    14,90 €
                  </p>
                </header>
                <div className="flex items-center justify-center gap-2" aria-label="Coloris disponibles">
                  <span className="w-3.5 h-3.5 rounded-full bg-surface border border-outline ring-1 ring-offset-2 ring-primary"></span>
                  <span className="w-3.5 h-3.5 rounded-full bg-primary"></span>
                  <span className="w-3.5 h-3.5 rounded-full bg-star"></span>
                </div>
              </div>
              <footer className="pt-1">
                <a
                  href="https://wa.me/33600000000?text=Bonjour%2C%20je%20souhaite%20commander%20%3A%20C%C3%A2ble%20iPhone%20Lightning%20MFI%20(14%2C90%20%E2%82%AC)"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full inline-flex items-center justify-center gap-2 px-4 py-2.5 rounded-sm bg-surface text-on-surface border border-outline font-label text-label-lg transition-colors duration-state-change ease-state-change hover:bg-whatsapp hover:text-on-whatsapp hover:border-whatsapp"
                >
                  <span className="material-symbols-outlined text-title-md" aria-hidden="true">
                    chat
                  </span>
                  <span data-design-text-token="label-lg">Commander sur WhatsApp</span>
                </a>
              </footer>
            </article>
          </div>

          {/* Flèche carrousel droite */}
          <button
            type="button"
            aria-label="Offres suivantes"
            className="hidden xl:inline-flex items-center justify-center w-9 h-9 rounded-full bg-surface border border-outline text-on-surface hover:bg-primary hover:text-on-primary transition-colors duration-state-change absolute -right-5 top-1/3 -translate-y-1/2 z-10"
          >
            <span className="material-symbols-outlined text-title-lg" aria-hidden="true">
              chevron_right
            </span>
          </button>
        </div>
      </div>
    </section>
  );
}
