'use client';

import { useState } from 'react';

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-40 bg-surface border-b border-outline-subtle">
      <div className="max-w-7xl mx-auto px-page-margin lg:px-10 h-16 flex items-center justify-between gap-4 relative">
        {/* Menu mobile */}
        <button
          id="mobile-menu-btn"
          type="button"
          aria-label="Ouvrir le menu"
          onClick={() => setMobileMenuOpen((prev) => !prev)}
          className="lg:hidden inline-flex items-center justify-center w-10 h-10 rounded-full text-on-surface hover:bg-surface-container transition-colors duration-state-change"
        >
          <span className="material-symbols-outlined text-headline-md" aria-hidden="true">
            {mobileMenuOpen ? 'close' : 'menu'}
          </span>
        </button>

        {/* Navigation gauche (Desktop) */}
        <nav aria-label="Navigation principale" className="hidden lg:flex items-center gap-3 xl:gap-4 2xl:gap-5 pr-8">
          <a
            href="#accueil"
            className="inline-flex items-center gap-1 font-label text-label-lg text-on-surface hover:text-muted transition-colors duration-state-change whitespace-nowrap"
          >
            <span data-design-text-token="label-lg">Accueil</span>
            <span className="material-symbols-outlined text-body-sm" aria-hidden="true">
              expand_more
            </span>
          </a>
          <a
            href="#bonnes-affaires"
            className="inline-flex items-center gap-1 font-label text-label-lg text-on-surface hover:text-muted transition-colors duration-state-change whitespace-nowrap"
          >
            <span data-design-text-token="label-lg">Boutique</span>
            <span className="material-symbols-outlined text-body-sm" aria-hidden="true">
              expand_more
            </span>
          </a>
          <a
            href="#meilleures-ventes"
            className="inline-flex items-center gap-1 font-label text-label-lg text-on-surface hover:text-muted transition-colors duration-state-change whitespace-nowrap"
          >
            <span data-design-text-token="label-lg">Chargeurs</span>
            <span className="material-symbols-outlined text-body-sm" aria-hidden="true">
              expand_more
            </span>
          </a>
          <a
            href="#categories"
            className="inline-flex items-center gap-1 font-label text-label-lg text-on-surface hover:text-muted transition-colors duration-state-change whitespace-nowrap"
          >
            <span data-design-text-token="label-lg">Câbles</span>
            <span className="material-symbols-outlined text-body-sm" aria-hidden="true">
              expand_more
            </span>
          </a>
          <a
            href="#avis"
            className="inline-flex items-center gap-1 font-label text-label-lg text-on-surface hover:text-muted transition-colors duration-state-change whitespace-nowrap"
          >
            <span data-design-text-token="label-lg">Avis</span>
          </a>
          <a
            href="https://wa.me/33600000000?text=Bonjour%2C%20je%20souhaite%20obtenir%20des%20conseils%20pour%20commander%20un%20chargeur."
            target="_blank"
            rel="noopener noreferrer"
            className="font-label text-label-lg text-on-surface hover:text-whatsapp transition-colors duration-state-change whitespace-nowrap"
          >
            <span data-design-text-token="label-lg">Commander</span>
          </a>
        </nav>

        {/* Logo centré - Parfaitement aligné sur la ligne médiane avec marge visuelle */}
        <a
          href="#accueil"
          className="font-display text-headline-md font-bold tracking-tight text-on-surface lg:absolute lg:left-1/2 lg:top-1/2 lg:-translate-x-1/2 lg:-translate-y-1/2 flex items-center leading-none pt-0.5"
        >
          ecomus
        </a>

        {/* Actions droite (Recherche + WhatsApp direct, sans panier) */}
        <div className="flex items-center gap-2">
          <a
            href="#bonnes-affaires"
            aria-label="Rechercher un produit"
            className="inline-flex items-center justify-center w-9 h-9 rounded-full text-on-surface hover:bg-surface-container transition-colors duration-state-change"
          >
            <span className="material-symbols-outlined text-title-lg" aria-hidden="true">
              search
            </span>
          </a>
          <a
            href="https://wa.me/33600000000?text=Bonjour%2C%20je%20souhaite%20commander%20un%20accessoire%20de%20charge."
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Contacter sur WhatsApp"
            className="inline-flex items-center gap-1.5 px-3.5 py-2 rounded-full bg-primary text-on-primary font-label text-label-sm hover:bg-whatsapp transition-colors duration-state-change"
          >
            <span className="material-symbols-outlined text-body-md" aria-hidden="true">
              chat
            </span>
            <span className="hidden sm:inline" data-design-text-token="label-sm">
              WhatsApp
            </span>
          </a>
        </div>
      </div>

      {/* Drawer mobile */}
      <div
        id="mobile-menu"
        className={`${
          mobileMenuOpen ? 'block' : 'hidden'
        } lg:hidden border-t border-outline-subtle bg-surface px-page-margin py-4`}
      >
        <nav aria-label="Menu mobile" className="flex flex-col gap-3">
          <a
            href="#accueil"
            onClick={() => setMobileMenuOpen(false)}
            className="font-label text-label-lg text-on-surface py-1"
          >
            Accueil
          </a>
          <a
            href="#bonnes-affaires"
            onClick={() => setMobileMenuOpen(false)}
            className="font-label text-label-lg text-on-surface py-1"
          >
            Bonnes Affaires
          </a>
          <a
            href="#categories"
            onClick={() => setMobileMenuOpen(false)}
            className="font-label text-label-lg text-on-surface py-1"
          >
            Catégories
          </a>
          <a
            href="#meilleures-ventes"
            onClick={() => setMobileMenuOpen(false)}
            className="font-label text-label-lg text-on-surface py-1"
          >
            Meilleures Ventes
          </a>
          <a
            href="#avis"
            onClick={() => setMobileMenuOpen(false)}
            className="font-label text-label-lg text-on-surface py-1"
          >
            Avis Clients
          </a>
          <a
            href="https://wa.me/33600000000?text=Bonjour%2C%20je%20souhaite%20commander%20un%20accessoire%20de%20charge."
            target="_blank"
            rel="noopener noreferrer"
            onClick={() => setMobileMenuOpen(false)}
            className="font-label text-label-lg text-whatsapp py-1"
          >
            Commander sur WhatsApp
          </a>
        </nav>
      </div>
    </header>
  );
}
