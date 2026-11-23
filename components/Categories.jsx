export default function Categories() {
  return (
    <section id="categories" className="pb-12 lg:pb-section">
      <div className="max-w-7xl mx-auto px-page-margin lg:px-10">
        <h2
          className="font-headline text-headline-md md:text-headline-lg text-on-surface text-center mb-8"
          data-design-text-token="headline-lg"
        >
          Acheter par catégorie
        </h2>

        <div className="border border-outline rounded-lg p-6 md:p-8 relative">
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-6 items-center">
            <a href="#bonnes-affaires" className="flex flex-col items-center gap-3 group">
              <div className="w-16 h-16 rounded-full bg-surface-container flex items-center justify-center text-on-surface transition-colors duration-state-change group-hover:bg-primary group-hover:text-on-primary">
                <span className="material-symbols-outlined text-headline-md" aria-hidden="true">
                  cable
                </span>
              </div>
              <span
                className="font-body text-body-sm text-on-surface text-center"
                data-design-text-token="body-sm"
              >
                Câbles USB-C
              </span>
            </a>

            <a href="#bonnes-affaires" className="flex flex-col items-center gap-3 group">
              <div className="w-16 h-16 rounded-full bg-surface-container flex items-center justify-center text-on-surface transition-colors duration-state-change group-hover:bg-primary group-hover:text-on-primary">
                <span className="material-symbols-outlined text-headline-md" aria-hidden="true">
                  phone_iphone
                </span>
              </div>
              <span
                className="font-body text-body-sm text-on-surface text-center"
                data-design-text-token="body-sm"
              >
                Câbles iPhone
              </span>
            </a>

            <a href="#meilleures-ventes" className="flex flex-col items-center gap-3 group">
              <div className="w-16 h-16 rounded-full bg-surface-container flex items-center justify-center text-on-surface transition-colors duration-state-change group-hover:bg-primary group-hover:text-on-primary">
                <span className="material-symbols-outlined text-headline-md" aria-hidden="true">
                  power
                </span>
              </div>
              <span
                className="font-body text-body-sm text-on-surface text-center"
                data-design-text-token="body-sm"
              >
                Chargeurs Secteur
              </span>
            </a>

            <a href="#meilleures-ventes" className="flex flex-col items-center gap-3 group">
              <div className="w-16 h-16 rounded-full bg-surface-container flex items-center justify-center text-on-surface transition-colors duration-state-change group-hover:bg-primary group-hover:text-on-primary">
                <span className="material-symbols-outlined text-headline-md" aria-hidden="true">
                  directions_car
                </span>
              </div>
              <span
                className="font-body text-body-sm text-on-surface text-center"
                data-design-text-token="body-sm"
              >
                Chargeurs Voiture
              </span>
            </a>

            <a href="#meilleures-ventes" className="flex flex-col items-center gap-3 group">
              <div className="w-16 h-16 rounded-full bg-surface-container flex items-center justify-center text-on-surface transition-colors duration-state-change group-hover:bg-primary group-hover:text-on-primary">
                <span className="material-symbols-outlined text-headline-md" aria-hidden="true">
                  bolt
                </span>
              </div>
              <span
                className="font-body text-body-sm text-on-surface text-center"
                data-design-text-token="body-sm"
              >
                Charge Sans Fil
              </span>
            </a>

            <a href="#meilleures-ventes" className="flex flex-col items-center gap-3 group">
              <div className="w-16 h-16 rounded-full bg-surface-container flex items-center justify-center text-on-surface transition-colors duration-state-change group-hover:bg-primary group-hover:text-on-primary">
                <span className="material-symbols-outlined text-headline-md" aria-hidden="true">
                  battery_charging_full
                </span>
              </div>
              <span
                className="font-body text-body-sm text-on-surface text-center"
                data-design-text-token="body-sm"
              >
                Batteries MagSafe
              </span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
