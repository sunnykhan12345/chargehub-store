import { Zap, Monitor, Users, PhoneCall } from 'lucide-react';

export default function Guarantees() {
  return (
    <section aria-label="Nos services et garanties" className="py-8 border-b border-outline-subtle bg-surface">
      <div className="max-w-7xl mx-auto px-page-margin lg:px-10">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {/* Service 1 */}
          <div className="flex items-center gap-4">
            <div className="w-12 h-12 rounded-full border border-outline flex items-center justify-center shrink-0 text-primary bg-surface-container">
              <Zap className="w-5 h-5 shrink-0" aria-hidden="true" />
            </div>
            <div>
              <h2 className="font-title text-title-md text-on-surface" data-design-text-token="title-md">
                Chargeurs 12W, 20W &amp; 30W
              </h2>
              <p className="font-body text-body-sm text-muted" data-design-text-token="body-sm">
                Vente d&apos;accessoires fiables &amp; testés
              </p>
            </div>
          </div>

          {/* Service 2 */}
          <div className="flex items-center gap-4">
            <div className="w-12 h-12 rounded-full border border-outline flex items-center justify-center shrink-0 text-primary bg-surface-container">
              <Monitor className="w-5 h-5 shrink-0" aria-hidden="true" />
            </div>
            <div>
              <h2 className="font-title text-title-md text-on-surface" data-design-text-token="title-md">
                Réparation d&apos;Écrans
              </h2>
              <p className="font-body text-body-sm text-muted" data-design-text-token="body-sm">
                Afficheurs &amp; solutions sur-mesure
              </p>
            </div>
          </div>

          {/* Service 3 */}
          <div className="flex items-center gap-4">
            <div className="w-12 h-12 rounded-full border border-outline flex items-center justify-center shrink-0 text-primary bg-surface-container">
              <Users className="w-5 h-5 shrink-0" aria-hidden="true" />
            </div>
            <div>
              <h2 className="font-title text-title-md text-on-surface" data-design-text-token="title-md">
                Espace Coworking
              </h2>
              <p className="font-body text-body-sm text-muted" data-design-text-token="body-sm">
                Cadre fonctionnel &amp; collaboratif
              </p>
            </div>
          </div>

          {/* Service 4 */}
          <div className="flex items-center gap-4">
            <div className="w-12 h-12 rounded-full border border-outline flex items-center justify-center shrink-0 text-whatsapp bg-surface-container">
              <PhoneCall className="w-5 h-5 shrink-0" aria-hidden="true" />
            </div>
            <div>
              <h2 className="font-title text-title-md text-on-surface" data-design-text-token="title-md">
                06 14 09 59 99
              </h2>
              <p className="font-body text-body-sm text-muted" data-design-text-token="body-sm">
                Conseil &amp; commande WhatsApp 7j/7
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
