import { Zap, Monitor, Users, PhoneCall } from 'lucide-react';

export default function Guarantees() {
  return (
    <section aria-label="Nos services et garanties" className="py-5 sm:py-8 border-b border-outline-subtle bg-surface">
      <div className="max-w-7xl mx-auto px-3 sm:px-6 lg:px-10">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-2.5 sm:gap-6">
          {/* Service 1 */}
          <div className="flex items-center gap-2.5 sm:gap-4 p-2.5 sm:p-0 rounded-lg bg-surface-container/50 sm:bg-transparent border border-outline-subtle sm:border-0">
            <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-full border border-outline flex items-center justify-center shrink-0 text-primary bg-surface sm:bg-surface-container">
              <Zap className="w-4 h-4 sm:w-5 sm:h-5 shrink-0" aria-hidden="true" />
            </div>
            <div className="min-w-0">
              <h2 className="font-title text-xs sm:text-title-md text-on-surface font-semibold leading-tight" data-design-text-token="title-md">
                Chargeurs 12W, 20W &amp; 30W
              </h2>
              <p className="font-body text-[11px] sm:text-body-sm text-muted mt-0.5 line-clamp-1 sm:line-clamp-none" data-design-text-token="body-sm">
                Vente d&apos;accessoires fiables &amp; testés
              </p>
            </div>
          </div>

          {/* Service 2 */}
          <div className="flex items-center gap-2.5 sm:gap-4 p-2.5 sm:p-0 rounded-lg bg-surface-container/50 sm:bg-transparent border border-outline-subtle sm:border-0">
            <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-full border border-outline flex items-center justify-center shrink-0 text-primary bg-surface sm:bg-surface-container">
              <Monitor className="w-4 h-4 sm:w-5 sm:h-5 shrink-0" aria-hidden="true" />
            </div>
            <div className="min-w-0">
              <h2 className="font-title text-xs sm:text-title-md text-on-surface font-semibold leading-tight" data-design-text-token="title-md">
                Réparation d&apos;Écrans
              </h2>
              <p className="font-body text-[11px] sm:text-body-sm text-muted mt-0.5 line-clamp-1 sm:line-clamp-none" data-design-text-token="body-sm">
                Afficheurs &amp; solutions sur-mesure
              </p>
            </div>
          </div>

          {/* Service 3 */}
          <div className="flex items-center gap-2.5 sm:gap-4 p-2.5 sm:p-0 rounded-lg bg-surface-container/50 sm:bg-transparent border border-outline-subtle sm:border-0">
            <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-full border border-outline flex items-center justify-center shrink-0 text-primary bg-surface sm:bg-surface-container">
              <Users className="w-4 h-4 sm:w-5 sm:h-5 shrink-0" aria-hidden="true" />
            </div>
            <div className="min-w-0">
              <h2 className="font-title text-xs sm:text-title-md text-on-surface font-semibold leading-tight" data-design-text-token="title-md">
                Espace Coworking
              </h2>
              <p className="font-body text-[11px] sm:text-body-sm text-muted mt-0.5 line-clamp-1 sm:line-clamp-none" data-design-text-token="body-sm">
                Cadre fonctionnel &amp; collaboratif
              </p>
            </div>
          </div>

          {/* Service 4 */}
          <div className="flex items-center gap-2.5 sm:gap-4 p-2.5 sm:p-0 rounded-lg bg-surface-container/50 sm:bg-transparent border border-outline-subtle sm:border-0">
            <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-full border border-outline flex items-center justify-center shrink-0 text-whatsapp bg-surface sm:bg-surface-container">
              <PhoneCall className="w-4 h-4 sm:w-5 sm:h-5 shrink-0" aria-hidden="true" />
            </div>
            <div className="min-w-0">
              <h2 className="font-title text-xs sm:text-title-md text-on-surface font-semibold leading-tight" data-design-text-token="title-md">
                06 14 09 59 99
              </h2>
              <p className="font-body text-[11px] sm:text-body-sm text-muted mt-0.5 line-clamp-1 sm:line-clamp-none" data-design-text-token="body-sm">
                Conseil &amp; commande WhatsApp 7j/7
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
