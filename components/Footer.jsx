'use client';

export default function Footer() {
  return (
    <footer className="border-t border-outline-subtle bg-surface pt-12 pb-8">
      <div className="max-w-7xl mx-auto px-page-margin lg:px-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 pb-12 border-b border-outline-subtle">
          {/* Colonne marque */}
          <div className="lg:col-span-4 flex flex-col gap-3">
            <a href="#accueil" className="font-display text-headline-md font-bold tracking-tight text-on-surface">
              ecomus
            </a>
            <p className="font-body text-body-sm text-muted" data-design-text-token="body-sm">
              12 Rue de la Technologie, 75001 Paris
            </p>
            <p className="font-body text-body-sm text-muted" data-design-text-token="body-sm">
              Email : <span className="text-on-surface font-medium">contact@ecomus-charge.fr</span>
            </p>
            <p className="font-body text-body-sm text-muted" data-design-text-token="body-sm">
              Téléphone : <span className="text-on-surface font-medium">+33 1 23 45 67 89</span>
            </p>
            <div className="pt-1">
              <a
                href="https://wa.me/33600000000?text=Bonjour%2C%20je%20souhaite%20commander%20un%20accessoire%20de%20charge."
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
            <div className="flex items-center gap-2 pt-2">
              <a
                href="#accueil"
                aria-label="Instagram"
                className="w-8 h-8 rounded-full border border-outline flex items-center justify-center text-on-surface hover:bg-primary hover:text-on-primary transition-colors duration-state-change"
              >
                <span className="material-symbols-outlined text-body-md" aria-hidden="true">
                  photo_camera
                </span>
              </a>
              <a
                href="https://wa.me/33600000000"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="WhatsApp"
                className="w-8 h-8 rounded-full border border-outline flex items-center justify-center text-on-surface hover:bg-whatsapp hover:text-on-whatsapp hover:border-whatsapp transition-colors duration-state-change"
              >
                <span className="material-symbols-outlined text-body-md" aria-hidden="true">
                  chat
                </span>
              </a>
              <a
                href="#accueil"
                aria-label="Partager"
                className="w-8 h-8 rounded-full border border-outline flex items-center justify-center text-on-surface hover:bg-primary hover:text-on-primary transition-colors duration-state-change"
              >
                <span className="material-symbols-outlined text-body-md" aria-hidden="true">
                  share
                </span>
              </a>
            </div>
          </div>

          {/* Colonne Aide */}
          <div className="lg:col-span-2 flex flex-col gap-3">
            <h3 className="font-title text-title-md text-on-surface" data-design-text-token="title-md">
              Aide
            </h3>
            <ul className="flex flex-col gap-2 font-body text-body-sm text-muted">
              <li>
                <a href="#accueil" className="hover:text-on-surface transition-colors">
                  Politique de confidentialité
                </a>
              </li>
              <li>
                <a href="#accueil" className="hover:text-on-surface transition-colors">
                  Retours &amp; Échanges
                </a>
              </li>
              <li>
                <a href="#accueil" className="hover:text-on-surface transition-colors">
                  Livraison Express
                </a>
              </li>
              <li>
                <a
                  href="https://wa.me/33600000000"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-on-surface transition-colors"
                >
                  Commande WhatsApp
                </a>
              </li>
              <li>
                <a href="#accueil" className="hover:text-on-surface transition-colors">
                  Questions fréquentes
                </a>
              </li>
            </ul>
          </div>

          {/* Colonne À propos */}
          <div className="lg:col-span-2 flex flex-col gap-3">
            <h3 className="font-title text-title-md text-on-surface" data-design-text-token="title-md">
              À propos
            </h3>
            <ul className="flex flex-col gap-2 font-body text-body-sm text-muted">
              <li>
                <a href="#accueil" className="hover:text-on-surface transition-colors">
                  Notre histoire
                </a>
              </li>
              <li>
                <a href="#categories" className="hover:text-on-surface transition-colors">
                  Nos catégories
                </a>
              </li>
              <li>
                <a href="#avis" className="hover:text-on-surface transition-colors">
                  Avis clients
                </a>
              </li>
              <li>
                <a
                  href="https://wa.me/33600000000"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-on-surface transition-colors"
                >
                  Nous contacter
                </a>
              </li>
            </ul>
          </div>

          {/* Colonne Newsletter */}
          <div className="lg:col-span-4 flex flex-col gap-3">
            <h3 className="font-title text-title-md text-on-surface" data-design-text-token="title-md">
              Newsletter
            </h3>
            <p className="font-body text-body-sm text-muted" data-design-text-token="body-sm">
              Inscrivez-vous pour recevoir nos nouveautés et offres exclusives sur nos chargeurs.
            </p>
            <form className="flex items-center gap-2 pt-1" onSubmit={(e) => e.preventDefault()}>
              <input
                type="email"
                placeholder="Votre adresse e-mail"
                aria-label="Votre adresse e-mail"
                className="flex-1 min-w-0 px-4 py-2.5 rounded-sm border border-outline bg-surface text-body-sm text-on-surface placeholder:text-muted focus:border-primary focus:ring-0"
              />
              <button
                type="submit"
                className="inline-flex items-center gap-1.5 px-5 py-2.5 rounded-sm bg-primary text-on-primary font-label text-label-lg hover:bg-secondary transition-colors duration-state-change shrink-0"
              >
                <span data-design-text-token="label-lg">S&apos;inscrire</span>
                <span className="material-symbols-outlined text-body-md" aria-hidden="true">
                  north_east
                </span>
              </button>
            </form>
          </div>
        </div>

        {/* Bas de pied de page */}
        <div className="pt-6 flex flex-wrap items-center justify-between gap-4">
          <p className="font-body text-body-sm text-muted" data-design-text-token="body-sm">
            © 2026 Ecomus Charge. Tous droits réservés.
          </p>
          <div className="flex items-center gap-4">
            <span className="font-body text-body-sm text-on-surface">EUR €</span>
            <span className="font-body text-body-sm text-on-surface">Français</span>
            <a
              href="#accueil"
              aria-label="Haut de page"
              className="w-9 h-9 rounded-sm border border-outline flex items-center justify-center text-on-surface hover:bg-primary hover:text-on-primary transition-colors duration-state-change"
            >
              <span className="material-symbols-outlined text-title-md" aria-hidden="true">
                keyboard_arrow_up
              </span>
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
