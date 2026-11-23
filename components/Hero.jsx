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
              className="absolute right-3 top-1/2 -translate-y-1/2 w-9 h-9 rounded-full bg-surface border border-outline flex items-center justify-center text-on-surface hover:bg-primary hover:text-on-primary transition-colors duration-state-change"
            >
              <span className="material-symbols-outlined text-title-lg" aria-hidden="true">
                chevron_left
              </span>
            </button>
          </div>

          {/* Carte Hero centrale */}
          <div className="lg:col-span-8 rounded-lg bg-surface-container overflow-hidden flex flex-col justify-between relative min-h-[420px] md:min-h-[480px]">
            <div className="pt-10 pb-4 px-6 md:px-12 text-center flex flex-col items-center gap-3 z-10">
              <h1
                className="font-display text-display-lg-mobile md:text-display-lg text-on-surface-container text-balance"
                data-design-text-token="display-lg"
              >
                Charge. Rapide. Sans Limite.
              </h1>
              <p
                className="font-body text-body-md text-muted max-w-lg text-pretty"
                data-design-text-token="body-md"
              >
                Découvrez nos chargeurs GaN ultra-compacts, câbles USB-C tressés et stations sans fil
                MagSafe.
              </p>
              <div className="pt-2">
                <a
                  href="#bonnes-affaires"
                  data-component-id="button-primary"
                  data-component-type="button"
                  data-component-variant="primary"
                  className="inline-flex items-center justify-center gap-2 px-6 py-2.5 rounded-full bg-surface text-on-surface border border-outline font-label text-label-lg transition-colors duration-state-change hover:bg-primary hover:text-on-primary hover:border-primary"
                >
                  <span data-design-text-token="label-lg">Voir la collection</span>
                  <span className="material-symbols-outlined text-body-md" aria-hidden="true">
                    chevron_right
                  </span>
                </a>
              </div>
            </div>
            <div className="w-full flex items-end justify-center px-4">
              <img
                src="/images/hero-banner.jpg"
                alt="Collection de chargeurs rapides GaN et batteries MagSafe colorés"
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
              className="absolute left-3 top-1/2 -translate-y-1/2 w-9 h-9 rounded-full bg-surface border border-outline flex items-center justify-center text-on-surface hover:bg-primary hover:text-on-primary transition-colors duration-state-change"
            >
              <span className="material-symbols-outlined text-title-lg" aria-hidden="true">
                chevron_right
              </span>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
