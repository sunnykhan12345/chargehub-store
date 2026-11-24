'use client';

export default function Footer() {
  return (
    <footer className="border-t border-outline-subtle bg-surface pt-12 pb-8">
      <div className="max-w-7xl mx-auto px-page-margin lg:px-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 pb-12 border-b border-outline-subtle">
          {/* Colonne marque */}
          <div className="lg:col-span-4 flex flex-col gap-3">
            <a href="#accueil" className="flex items-center gap-2.5 group">
              <img
                src="/images/logo.png"
                alt="Logo GENNEVILLIERS"
                className="h-9 w-auto object-contain transition-transform group-hover:scale-105"
              />
              <span className="font-display text-headline-sm font-bold tracking-tight text-on-surface uppercase">
                GENNEVILLIERS
              </span>
            </a>
            <p className="font-body text-body-sm text-on-surface font-medium" data-design-text-token="body-sm">
              13 RUE MAARAKAT OUHOUD, EX MARECHAL
            </p>
            <p className="font-body text-body-sm text-muted">
              Casablanca 20080, Casablanca, Morocco
            </p>
            <p className="font-body text-body-sm text-muted" data-design-text-token="body-sm">
              Email : <a href="mailto:rachid@gennevilliers.mav" className="text-on-surface font-medium hover:underline">rachid@gennevilliers.mav</a>
            </p>
            <p className="font-body text-body-sm text-muted" data-design-text-token="body-sm">
              Téléphone : <a href="tel:0614095999" className="text-on-surface font-medium hover:underline">06 14 09 59 99 (+212 614 09 59 99)</a>
            </p>
            <div className="pt-1">
              <a
                href="https://wa.me/212614095999?text=Bonjour%20Gennevilliers%2C%20je%20souhaite%20commander%20ou%20obtenir%20des%20renseignements."
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 font-label text-label-lg text-whatsapp underline underline-offset-4 hover:opacity-80 transition-opacity font-semibold"
              >
                <span data-design-text-token="label-lg">Commander sur WhatsApp : 06 14 09 59 99</span>
                <span className="material-symbols-outlined text-body-md" aria-hidden="true">
                  north_east
                </span>
              </a>
            </div>
            <div className="flex items-center gap-2 pt-2">
              <a
                href="tel:0614095999"
                aria-label="Appeler directement"
                title="06 14 09 59 99"
                className="w-8 h-8 rounded-full border border-outline flex items-center justify-center text-on-surface hover:bg-primary hover:text-on-primary transition-colors duration-state-change"
              >
                <span className="material-symbols-outlined text-body-md" aria-hidden="true">
                  call
                </span>
              </a>
              <a
                href="https://wa.me/212614095999"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="WhatsApp"
                title="WhatsApp 06 14 09 59 99"
                className="w-8 h-8 rounded-full border border-outline flex items-center justify-center text-on-surface hover:bg-whatsapp hover:text-on-whatsapp hover:border-whatsapp transition-colors duration-state-change"
              >
                <span className="material-symbols-outlined text-body-md" aria-hidden="true">
                  chat
                </span>
              </a>
              <a
                href="mailto:rachid@gennevilliers.mav"
                aria-label="Email"
                title="rachid@gennevilliers.mav"
                className="w-8 h-8 rounded-full border border-outline flex items-center justify-center text-on-surface hover:bg-primary hover:text-on-primary transition-colors duration-state-change"
              >
                <span className="material-symbols-outlined text-body-md" aria-hidden="true">
                  mail
                </span>
              </a>
            </div>
          </div>

          {/* Colonne Nos Services */}
          <div className="lg:col-span-3 flex flex-col gap-3">
            <h3 className="font-title text-title-md text-on-surface font-semibold" data-design-text-token="title-md">
              Nos Services
            </h3>
            <ul className="flex flex-col gap-2 font-body text-body-sm text-muted">
              <li>
                <a href="#bonnes-affaires" className="hover:text-on-surface transition-colors">
                  Vente de Chargeurs (12W, 20W, 30W)
                </a>
              </li>
              <li>
                <a href="#a-propos" className="hover:text-on-surface transition-colors">
                  Réparation d&apos;Écrans &amp; Afficheurs
                </a>
              </li>
              <li>
                <a href="#a-propos" className="hover:text-on-surface transition-colors">
                  Espace Coworking Casablanca
                </a>
              </li>
              <li>
                <a href="#bonnes-affaires" className="hover:text-on-surface transition-colors">
                  Câbles USB-C &amp; iPhone Certifiés
                </a>
              </li>
              <li>
                <a
                  href="https://wa.me/212614095999"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-on-surface transition-colors font-semibold text-whatsapp"
                >
                  Commande Rapide WhatsApp (0614095999)
                </a>
              </li>
            </ul>
          </div>

          {/* Colonne À propos & Navigation */}
          <div className="lg:col-span-2 flex flex-col gap-3">
            <h3 className="font-title text-title-md text-on-surface font-semibold" data-design-text-token="title-md">
              Navigation
            </h3>
            <ul className="flex flex-col gap-2 font-body text-body-sm text-muted">
              <li>
                <a href="#accueil" className="hover:text-on-surface transition-colors">
                  Accueil
                </a>
              </li>
              <li>
                <a href="#a-propos" className="hover:text-on-surface transition-colors">
                  À Propos de Gennevilliers
                </a>
              </li>
              <li>
                <a href="#bonnes-affaires" className="hover:text-on-surface transition-colors">
                  Boutique Accessoires
                </a>
              </li>
              <li>
                <a href="#faq" className="hover:text-on-surface transition-colors">
                  Questions fréquentes
                </a>
              </li>
              <li>
                <a href="#contact" className="hover:text-on-surface transition-colors">
                  Nous Contacter
                </a>
              </li>
            </ul>
          </div>

          {/* Colonne Newsletter & Info */}
          <div className="lg:col-span-3 flex flex-col gap-3">
            <h3 className="font-title text-title-md text-on-surface font-semibold" data-design-text-token="title-md">
              Newsletter Gennevilliers
            </h3>
            <p className="font-body text-body-sm text-muted" data-design-text-token="body-sm">
              Restez informé de nos nouveaux arrivages de chargeurs et des disponibilités de notre espace coworking.
            </p>
            <form className="flex items-center gap-2 pt-1" onSubmit={(e) => e.preventDefault()}>
              <input
                type="email"
                placeholder="Votre e-mail"
                aria-label="Votre e-mail"
                className="flex-1 min-w-0 px-3.5 py-2 rounded-sm border border-outline bg-surface text-body-sm text-on-surface placeholder:text-muted focus:border-primary focus:ring-0"
              />
              <button
                type="submit"
                className="inline-flex items-center gap-1.5 px-4 py-2 rounded-sm bg-primary text-on-primary font-label text-label-md hover:bg-secondary transition-colors duration-state-change shrink-0"
              >
                <span>OK</span>
              </button>
            </form>
          </div>
        </div>

        {/* Bas de pied de page */}
        <div className="pt-6 flex flex-wrap items-center justify-between gap-4">
          <p className="font-body text-body-sm text-muted" data-design-text-token="body-sm">
            © 2026 GENNEVILLIERS — Casablanca, Maroc. Tous droits réservés.
          </p>
          <div className="flex items-center gap-4">
            <span className="font-body text-body-sm text-on-surface">MAD (DH) / EUR €</span>
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
