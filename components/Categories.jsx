import { Cable, Smartphone, Zap, Car, Radio, BatteryCharging } from 'lucide-react';

export default function Categories() {
  return (
    <section id="categories" className="pb-10 sm:pb-12 lg:pb-section">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-10">
        <h2
          className="font-headline text-xl sm:text-headline-md md:text-headline-lg text-on-surface text-center mb-6 sm:mb-8 font-bold"
          data-design-text-token="headline-lg"
        >
          Acheter par catégorie
        </h2>

        <div className="border border-outline rounded-lg p-3 sm:p-6 md:p-8 relative bg-surface shadow-sm">
          <div className="grid grid-cols-3 lg:grid-cols-6 gap-2.5 sm:gap-4 md:gap-6 items-center">
            {/* Câbles USB-C */}
            <a href="#bonnes-affaires" className="flex flex-col items-center gap-1.5 sm:gap-3 group">
              <div className="w-12 h-12 sm:w-16 sm:h-16 rounded-full bg-surface-container flex items-center justify-center text-on-surface transition-colors duration-state-change group-hover:bg-primary group-hover:text-on-primary">
                <Cable className="w-5 h-5 sm:w-7 sm:h-7 shrink-0" aria-hidden="true" />
              </div>
              <span
                className="font-body text-[11px] sm:text-body-sm text-on-surface text-center font-medium"
                data-design-text-token="body-sm"
              >
                Câbles USB-C
              </span>
            </a>

            {/* Câbles iPhone */}
            <a href="#bonnes-affaires" className="flex flex-col items-center gap-1.5 sm:gap-3 group">
              <div className="w-12 h-12 sm:w-16 sm:h-16 rounded-full bg-surface-container flex items-center justify-center text-on-surface transition-colors duration-state-change group-hover:bg-primary group-hover:text-on-primary">
                <Smartphone className="w-5 h-5 sm:w-7 sm:h-7 shrink-0" aria-hidden="true" />
              </div>
              <span
                className="font-body text-[11px] sm:text-body-sm text-on-surface text-center font-medium"
                data-design-text-token="body-sm"
              >
                Câbles iPhone
              </span>
            </a>

            {/* Chargeurs Secteur 12W, 20W, 30W */}
            <a href="#meilleures-ventes" className="flex flex-col items-center gap-1.5 sm:gap-3 group">
              <div className="w-12 h-12 sm:w-16 sm:h-16 rounded-full bg-surface-container flex items-center justify-center text-on-surface transition-colors duration-state-change group-hover:bg-primary group-hover:text-on-primary">
                <Zap className="w-5 h-5 sm:w-7 sm:h-7 shrink-0" aria-hidden="true" />
              </div>
              <span
                className="font-body text-[11px] sm:text-body-sm text-on-surface text-center font-medium"
                data-design-text-token="body-sm"
              >
                Chargeurs (12W-30W)
              </span>
            </a>

            {/* Chargeurs Voiture */}
            <a href="#meilleures-ventes" className="flex flex-col items-center gap-1.5 sm:gap-3 group">
              <div className="w-12 h-12 sm:w-16 sm:h-16 rounded-full bg-surface-container flex items-center justify-center text-on-surface transition-colors duration-state-change group-hover:bg-primary group-hover:text-on-primary">
                <Car className="w-5 h-5 sm:w-7 sm:h-7 shrink-0" aria-hidden="true" />
              </div>
              <span
                className="font-body text-[11px] sm:text-body-sm text-on-surface text-center font-medium"
                data-design-text-token="body-sm"
              >
                Chargeurs Voiture
              </span>
            </a>

            {/* Charge Sans Fil */}
            <a href="#meilleures-ventes" className="flex flex-col items-center gap-1.5 sm:gap-3 group">
              <div className="w-12 h-12 sm:w-16 sm:h-16 rounded-full bg-surface-container flex items-center justify-center text-on-surface transition-colors duration-state-change group-hover:bg-primary group-hover:text-on-primary">
                <Radio className="w-5 h-5 sm:w-7 sm:h-7 shrink-0" aria-hidden="true" />
              </div>
              <span
                className="font-body text-[11px] sm:text-body-sm text-on-surface text-center font-medium"
                data-design-text-token="body-sm"
              >
                Charge Sans Fil
              </span>
            </a>

            {/* Batteries MagSafe */}
            <a href="#meilleures-ventes" className="flex flex-col items-center gap-1.5 sm:gap-3 group">
              <div className="w-12 h-12 sm:w-16 sm:h-16 rounded-full bg-surface-container flex items-center justify-center text-on-surface transition-colors duration-state-change group-hover:bg-primary group-hover:text-on-primary">
                <BatteryCharging className="w-5 h-5 sm:w-7 sm:h-7 shrink-0" aria-hidden="true" />
              </div>
              <span
                className="font-body text-[11px] sm:text-body-sm text-on-surface text-center font-medium"
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
