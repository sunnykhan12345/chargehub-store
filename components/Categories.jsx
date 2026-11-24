import { Cable, Smartphone, Zap, Car, Radio, BatteryCharging } from 'lucide-react';

export default function Categories() {
  return (
    <section id="categories" className="pb-12 lg:pb-section">
      <div className="max-w-7xl mx-auto px-page-margin lg:px-10">
        <h2
          className="font-headline text-headline-md md:text-headline-lg text-on-surface text-center mb-8 font-bold"
          data-design-text-token="headline-lg"
        >
          Acheter par catégorie
        </h2>

        <div className="border border-outline rounded-lg p-6 md:p-8 relative bg-surface shadow-sm">
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-6 items-center">
            {/* Câbles USB-C */}
            <a href="#bonnes-affaires" className="flex flex-col items-center gap-3 group">
              <div className="w-16 h-16 rounded-full bg-surface-container flex items-center justify-center text-on-surface transition-colors duration-state-change group-hover:bg-primary group-hover:text-on-primary">
                <Cable className="w-7 h-7 shrink-0" aria-hidden="true" />
              </div>
              <span
                className="font-body text-body-sm text-on-surface text-center font-medium"
                data-design-text-token="body-sm"
              >
                Câbles USB-C
              </span>
            </a>

            {/* Câbles iPhone */}
            <a href="#bonnes-affaires" className="flex flex-col items-center gap-3 group">
              <div className="w-16 h-16 rounded-full bg-surface-container flex items-center justify-center text-on-surface transition-colors duration-state-change group-hover:bg-primary group-hover:text-on-primary">
                <Smartphone className="w-7 h-7 shrink-0" aria-hidden="true" />
              </div>
              <span
                className="font-body text-body-sm text-on-surface text-center font-medium"
                data-design-text-token="body-sm"
              >
                Câbles iPhone
              </span>
            </a>

            {/* Chargeurs Secteur 12W, 20W, 30W */}
            <a href="#meilleures-ventes" className="flex flex-col items-center gap-3 group">
              <div className="w-16 h-16 rounded-full bg-surface-container flex items-center justify-center text-on-surface transition-colors duration-state-change group-hover:bg-primary group-hover:text-on-primary">
                <Zap className="w-7 h-7 shrink-0" aria-hidden="true" />
              </div>
              <span
                className="font-body text-body-sm text-on-surface text-center font-medium"
                data-design-text-token="body-sm"
              >
                Chargeurs (12W-30W)
              </span>
            </a>

            {/* Chargeurs Voiture */}
            <a href="#meilleures-ventes" className="flex flex-col items-center gap-3 group">
              <div className="w-16 h-16 rounded-full bg-surface-container flex items-center justify-center text-on-surface transition-colors duration-state-change group-hover:bg-primary group-hover:text-on-primary">
                <Car className="w-7 h-7 shrink-0" aria-hidden="true" />
              </div>
              <span
                className="font-body text-body-sm text-on-surface text-center font-medium"
                data-design-text-token="body-sm"
              >
                Chargeurs Voiture
              </span>
            </a>

            {/* Charge Sans Fil */}
            <a href="#meilleures-ventes" className="flex flex-col items-center gap-3 group">
              <div className="w-16 h-16 rounded-full bg-surface-container flex items-center justify-center text-on-surface transition-colors duration-state-change group-hover:bg-primary group-hover:text-on-primary">
                <Radio className="w-7 h-7 shrink-0" aria-hidden="true" />
              </div>
              <span
                className="font-body text-body-sm text-on-surface text-center font-medium"
                data-design-text-token="body-sm"
              >
                Charge Sans Fil
              </span>
            </a>

            {/* Batteries MagSafe */}
            <a href="#meilleures-ventes" className="flex flex-col items-center gap-3 group">
              <div className="w-16 h-16 rounded-full bg-surface-container flex items-center justify-center text-on-surface transition-colors duration-state-change group-hover:bg-primary group-hover:text-on-primary">
                <BatteryCharging className="w-7 h-7 shrink-0" aria-hidden="true" />
              </div>
              <span
                className="font-body text-body-sm text-on-surface text-center font-medium"
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
