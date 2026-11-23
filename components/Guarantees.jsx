export default function Guarantees() {
  return (
    <section aria-label="Nos garanties" className="py-8 border-b border-outline-subtle">
      <div className="max-w-7xl mx-auto px-page-margin lg:px-10">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          <div className="flex items-center gap-4">
            <div className="w-11 h-11 rounded-full border border-outline flex items-center justify-center shrink-0 text-on-surface">
              <span className="material-symbols-outlined text-title-lg" aria-hidden="true">
                inventory_2
              </span>
            </div>
            <div>
              <h2 className="font-title text-title-md text-on-surface" data-design-text-token="title-md">
                Livraison Rapide
              </h2>
              <p className="font-body text-body-sm text-muted" data-design-text-token="body-sm">
                Expédition express partout
              </p>
            </div>
          </div>

          <div className="flex items-center gap-4">
            <div className="w-11 h-11 rounded-full border border-outline flex items-center justify-center shrink-0 text-on-surface">
              <span className="material-symbols-outlined text-title-lg" aria-hidden="true">
                chat
              </span>
            </div>
            <div>
              <h2 className="font-title text-title-md text-on-surface" data-design-text-token="title-md">
                Commande WhatsApp
              </h2>
              <p className="font-body text-body-sm text-muted" data-design-text-token="body-sm">
                Confirmation et suivi directs
              </p>
            </div>
          </div>

          <div className="flex items-center gap-4">
            <div className="w-11 h-11 rounded-full border border-outline flex items-center justify-center shrink-0 text-on-surface">
              <span className="material-symbols-outlined text-title-lg" aria-hidden="true">
                sync_alt
              </span>
            </div>
            <div>
              <h2 className="font-title text-title-md text-on-surface" data-design-text-token="title-md">
                Échange 14 Jours
              </h2>
              <p className="font-body text-body-sm text-muted" data-design-text-token="body-sm">
                Garantie satisfait ou échangé
              </p>
            </div>
          </div>

          <div className="flex items-center gap-4">
            <div className="w-11 h-11 rounded-full border border-outline flex items-center justify-center shrink-0 text-on-surface">
              <span className="material-symbols-outlined text-title-lg" aria-hidden="true">
                support_agent
              </span>
            </div>
            <div>
              <h2 className="font-title text-title-md text-on-surface" data-design-text-token="title-md">
                Support Premium
              </h2>
              <p className="font-body text-body-sm text-muted" data-design-text-token="body-sm">
                Conseils techniques dédiés
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
