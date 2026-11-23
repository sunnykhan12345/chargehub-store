export default function FeaturedCollections() {
  return (
    <section aria-label="Collections phares" className="pb-12 lg:pb-section">
      <div className="max-w-7xl mx-auto px-page-margin lg:px-10">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 items-stretch">
          {/* Bannière gauche */}
          <article className="rounded-lg bg-surface-container overflow-hidden relative min-h-[420px] flex flex-col justify-end group">
            <img
              src="/images/banner-collection-battery.jpg"
              alt="Batterie MagSafe 10000mAh tenue en main"
              className="absolute inset-0 w-full h-full object-cover transition-transform duration-surface-enter group-hover:scale-105"
            />
            <div className="relative z-10 p-8 bg-surface-container/95 flex flex-col gap-2">
              <h3
                className="font-headline text-headline-md text-on-surface-container"
                data-design-text-token="headline-md"
              >
                Batterie MagSafe
              </h3>
              <p
                className="font-body text-body-sm text-on-surface-container max-w-sm"
                data-design-text-token="body-sm"
              >
                Chaque pièce est conçue pour offrir une charge fiable au quotidien.
              </p>
              <div className="pt-1">
                <a
                  href="https://wa.me/33600000000?text=Bonjour%2C%20je%20souhaite%20commander%20%3A%20Batterie%20MagSafe%2010000mAh"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 font-label text-label-lg text-on-surface underline underline-offset-4 hover:text-whatsapp transition-colors duration-state-change"
                >
                  <span data-design-text-token="label-lg">Commander sur WhatsApp</span>
                  <span className="material-symbols-outlined text-body-md" aria-hidden="true">
                    north_east
                  </span>
                </a>
              </div>
            </div>
          </article>

          {/* Bannière droite */}
          <article className="rounded-lg bg-surface-container overflow-hidden relative min-h-[420px] flex flex-col justify-end group">
            <img
              src="/images/banner-collection-station.jpg"
              alt="Station de charge MagSafe Pro orange et aluminium"
              className="absolute inset-0 w-full h-full object-cover transition-transform duration-surface-enter group-hover:scale-105"
            />
            <div className="relative z-10 p-8 bg-surface-container/95 flex flex-col gap-2">
              <h3
                className="font-headline text-headline-md text-on-surface-container"
                data-design-text-token="headline-md"
              >
                Station MagSafe Pro
              </h3>
              <p
                className="font-body text-body-sm text-on-surface-container max-w-sm"
                data-design-text-token="body-sm"
              >
                Charge magnétique haute vitesse pensée pour votre bureau.
              </p>
              <div className="pt-1">
                <a
                  href="https://wa.me/33600000000?text=Bonjour%2C%20je%20souhaite%20commander%20%3A%20Station%20MagSafe%20Pro"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 font-label text-label-lg text-on-surface underline underline-offset-4 hover:text-whatsapp transition-colors duration-state-change"
                >
                  <span data-design-text-token="label-lg">Commander sur WhatsApp</span>
                  <span className="material-symbols-outlined text-body-md" aria-hidden="true">
                    north_east
                  </span>
                </a>
              </div>
            </div>
          </article>
        </div>
      </div>
    </section>
  );
}
