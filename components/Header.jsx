'use client';

import { useState } from 'react';
import { Phone, MessageCircle, Menu, X } from 'lucide-react';

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-40 bg-surface border-b border-outline-subtle">
      {/* Barre d'annonce supérieure */}
      <aside aria-label="Annonce" className="bg-primary text-on-primary py-1.5 px-4 text-xs font-label">
        <div className="max-w-7xl mx-auto flex items-center justify-between gap-4">
          <p className="flex items-center gap-2 truncate">
            <span className="font-semibold tracking-wide">GENNEVILLIERS Casablanca</span>
            <span className="hidden sm:inline opacity-75">•</span>
            <span className="hidden sm:inline opacity-90">
              Vente de Chargeurs (12W, 20W, 30W) &bull; Espace Coworking &bull; Réparation d&apos;Écrans
            </span>
          </p>
          <div className="flex items-center gap-4 shrink-0 text-xs">
            <a
              href="tel:0614095999"
              className="hidden md:inline-flex items-center gap-1.5 hover:underline text-on-primary/95 font-medium"
            >
              <Phone className="w-3.5 h-3.5 shrink-0" aria-hidden="true" />
              <span>06 14 09 59 99</span>
            </a>
            <a
              href="https://wa.me/212614095999?text=Bonjour%20Gennevilliers%2C%20je%20souhaite%20des%20informations."
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 font-semibold hover:underline"
            >
              <MessageCircle className="w-3.5 h-3.5 shrink-0" aria-hidden="true" />
              <span>WhatsApp Direct</span>
            </a>
          </div>
        </div>
      </aside>

      {/* Barre de navigation principale */}
      <div className="max-w-7xl mx-auto px-page-margin lg:px-10 h-16 flex items-center justify-between gap-4 relative">
        {/* Menu mobile button */}
        <button
          id="mobile-menu-btn"
          type="button"
          aria-label="Ouvrir le menu"
          onClick={() => setMobileMenuOpen((prev) => !prev)}
          className="lg:hidden inline-flex items-center justify-center w-10 h-10 rounded-full text-on-surface hover:bg-surface-container transition-colors duration-state-change shrink-0"
        >
          {mobileMenuOpen ? (
            <X className="w-6 h-6 shrink-0" aria-hidden="true" />
          ) : (
            <Menu className="w-6 h-6 shrink-0" aria-hidden="true" />
          )}
        </button>

        {/* Navigation gauche (Desktop) */}
        <nav aria-label="Navigation principale" className="hidden lg:flex items-center gap-3 xl:gap-4 pr-6">
          <a
            href="#accueil"
            className="inline-flex items-center gap-1 font-label text-label-lg text-on-surface hover:text-muted transition-colors duration-state-change whitespace-nowrap"
          >
            <span data-design-text-token="label-lg">Accueil</span>
          </a>
          <a
            href="#bonnes-affaires"
            className="inline-flex items-center gap-1 font-label text-label-lg text-on-surface hover:text-muted transition-colors duration-state-change whitespace-nowrap"
          >
            <span data-design-text-token="label-lg">Chargeurs</span>
          </a>
          <a
            href="#a-propos"
            className="inline-flex items-center gap-1 font-label text-label-lg text-on-surface hover:text-muted transition-colors duration-state-change whitespace-nowrap"
          >
            <span data-design-text-token="label-lg">Réparation &amp; Coworking</span>
          </a>
          <a
            href="#a-propos"
            className="inline-flex items-center gap-1 font-label text-label-lg text-on-surface hover:text-muted transition-colors duration-state-change whitespace-nowrap"
          >
            <span data-design-text-token="label-lg">À Propos</span>
          </a>
          <a
            href="#contact"
            className="inline-flex items-center gap-1 font-label text-label-lg text-on-surface hover:text-muted transition-colors duration-state-change whitespace-nowrap"
          >
            <span data-design-text-token="label-lg">Contact</span>
          </a>
        </nav>

        {/* Logo centré avec Logo Image + Nom GENNEVILLIERS */}
        <a
          href="#accueil"
          className="lg:absolute lg:left-1/2 lg:top-1/2 lg:-translate-x-1/2 lg:-translate-y-1/2 flex items-center gap-2.5 leading-none group"
        >
          <img
            src="/images/logo.png"
            alt="GENNEVILLIERS Logo"
            className="h-8 md:h-9 w-auto object-contain transition-transform duration-state-change group-hover:scale-105"
          />
          <span className="font-display text-title-lg md:text-headline-md font-bold tracking-tight text-on-surface uppercase">
            GENNEVILLIERS
          </span>
        </a>

        {/* Actions droite : Bouton Appel Direct (Icône parfaitement alignée) + Bouton WhatsApp */}
        <div className="flex items-center gap-2.5">
          <a
            href="tel:0614095999"
            aria-label="Appeler le 0614095999"
            title="Appeler directement : 06 14 09 59 99"
            className="inline-flex items-center justify-center w-10 h-10 rounded-full border border-outline bg-surface text-on-surface hover:bg-surface-container hover:text-primary transition-colors duration-state-change shrink-0"
          >
            <Phone className="w-4 h-4 shrink-0 text-on-surface" aria-hidden="true" />
          </a>
          <a
            href="https://wa.me/212614095999?text=Bonjour%20Gennevilliers%2C%20je%20souhaite%20commander%20ou%20demander%20un%20service."
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Contacter sur WhatsApp au 0614095999"
            className="inline-flex items-center gap-2 px-3.5 sm:px-4 py-2 rounded-full bg-primary text-on-primary font-label text-label-sm hover:bg-whatsapp transition-colors duration-state-change shrink-0 shadow-sm"
          >
            <MessageCircle className="w-4 h-4 shrink-0 text-on-primary" aria-hidden="true" />
            <span className="hidden sm:inline font-semibold" data-design-text-token="label-sm">
              06 14 09 59 99
            </span>
            <span className="sm:hidden font-semibold">WhatsApp</span>
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
            Chargeurs (12W, 20W, 30W)
          </a>
          <a
            href="#a-propos"
            onClick={() => setMobileMenuOpen(false)}
            className="font-label text-label-lg text-on-surface py-1"
          >
            Réparation d&apos;Écrans &amp; Afficheurs
          </a>
          <a
            href="#a-propos"
            onClick={() => setMobileMenuOpen(false)}
            className="font-label text-label-lg text-on-surface py-1"
          >
            Espace Coworking Casablanca
          </a>
          <a
            href="#a-propos"
            onClick={() => setMobileMenuOpen(false)}
            className="font-label text-label-lg text-on-surface py-1"
          >
            À Propos de Gennevilliers
          </a>
          <a
            href="#contact"
            onClick={() => setMobileMenuOpen(false)}
            className="font-label text-label-lg text-on-surface py-1"
          >
            Nous Contacter (Casablanca)
          </a>
          <a
            href="tel:0614095999"
            className="font-label text-label-lg text-on-surface py-1 flex items-center gap-2"
          >
            <Phone className="w-4 h-4 shrink-0 text-primary" aria-hidden="true" />
            <span>Tél : 06 14 09 59 99</span>
          </a>
          <a
            href="https://wa.me/212614095999?text=Bonjour%20Gennevilliers%2C%20je%20souhaite%20commander%20ou%20demander%20un%20service."
            target="_blank"
            rel="noopener noreferrer"
            onClick={() => setMobileMenuOpen(false)}
            className="font-label text-label-lg text-whatsapp py-1 flex items-center gap-2 font-semibold"
          >
            <MessageCircle className="w-4 h-4 shrink-0" aria-hidden="true" />
            <span>Commander sur WhatsApp (06 14 09 59 99)</span>
          </a>
        </nav>
      </div>
    </header>
  );
}
