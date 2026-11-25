'use client';

import { useState } from 'react';
import { Phone, MessageCircle, Menu, X } from 'lucide-react';

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-40 bg-surface border-b border-outline-subtle">
      {/* Barre d'annonce supérieure */}
      <aside aria-label="Annonce" className="bg-primary text-on-primary py-1.5 px-3 sm:px-4 text-[11px] sm:text-xs font-label">
        <div className="max-w-7xl mx-auto flex items-center justify-between gap-2 sm:gap-4">
          <p className="flex items-center gap-1.5 sm:gap-2 min-w-0 truncate">
            <span className="font-semibold tracking-wide shrink-0">GENNEVILLIERS</span>
            <span className="opacity-90 shrink-0">• Casablanca</span>
            <span className="hidden lg:inline opacity-75">•</span>
            <span className="hidden lg:inline opacity-90 truncate">
              Vente de Chargeurs (12W, 20W, 30W) &bull; Espace Coworking &bull; Réparation d&apos;Écrans
            </span>
          </p>
          <div className="flex items-center gap-2.5 sm:gap-4 shrink-0 text-[11px] sm:text-xs">
            <a
              href="tel:0614095999"
              className="inline-flex items-center gap-1.5 hover:underline text-on-primary/95 font-medium shrink-0"
            >
              <Phone className="w-3 h-3 sm:w-3.5 sm:h-3.5 shrink-0" aria-hidden="true" />
              <span>06 14 09 59 99</span>
            </a>
            <a
              href="https://wa.me/212614095999?text=Bonjour%20Gennevilliers%2C%20je%20souhaite%20des%20informations."
              target="_blank"
              rel="noopener noreferrer"
              className="hidden sm:inline-flex items-center gap-1.5 font-semibold hover:underline shrink-0"
            >
              <MessageCircle className="w-3.5 h-3.5 shrink-0" aria-hidden="true" />
              <span>WhatsApp Direct</span>
            </a>
          </div>
        </div>
      </aside>

      {/* Barre de navigation principale */}
      <div className="max-w-7xl mx-auto px-3 sm:px-6 lg:px-10 h-16 flex items-center justify-between gap-2 sm:gap-4 relative">
        {/* Menu mobile button (visible < lg) */}
        <button
          id="mobile-menu-btn"
          type="button"
          aria-label="Ouvrir le menu"
          onClick={() => setMobileMenuOpen((prev) => !prev)}
          className="lg:hidden inline-flex items-center justify-center w-8 h-8 sm:w-10 sm:h-10 rounded-full text-on-surface hover:bg-surface-container transition-colors duration-state-change shrink-0"
        >
          {mobileMenuOpen ? (
            <X className="w-5 h-5 shrink-0" aria-hidden="true" />
          ) : (
            <Menu className="w-5 h-5 shrink-0" aria-hidden="true" />
          )}
        </button>

        {/* Navigation gauche (Desktop lg+) */}
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
          className="lg:absolute lg:left-1/2 lg:top-1/2 lg:-translate-x-1/2 lg:-translate-y-1/2 flex items-center gap-1.5 sm:gap-2.5 leading-none group min-w-0 shrink"
        >
          <img
            src="/images/logo.png"
            alt="GENNEVILLIERS Logo"
            className="h-6 sm:h-8 md:h-9 w-auto object-contain transition-transform duration-state-change group-hover:scale-105 shrink-0"
          />
          <span className="font-display text-sm sm:text-title-lg md:text-headline-md font-bold tracking-tight text-on-surface uppercase truncate">
            GENNEVILLIERS
          </span>
        </a>

        {/* Actions droite : Bouton Appel Direct + Bouton WhatsApp */}
        <div className="flex items-center gap-1.5 sm:gap-2.5 shrink-0">
          <a
            href="tel:0614095999"
            aria-label="Appeler le 0614095999"
            title="Appeler directement : 06 14 09 59 99"
            className="inline-flex items-center justify-center w-8 h-8 sm:w-10 sm:h-10 rounded-full border border-outline bg-surface text-on-surface hover:bg-surface-container hover:text-primary transition-colors duration-state-change shrink-0"
          >
            <Phone className="w-3.5 h-3.5 sm:w-4 sm:h-4 shrink-0 text-on-surface" aria-hidden="true" />
          </a>
          
          {/* Version mobile compacte (< sm) */}
          <a
            href="https://wa.me/212614095999?text=Bonjour%20Gennevilliers%2C%20je%20souhaite%20commander%20ou%20demander%20un%20service."
            target="_blank"
            rel="noopener noreferrer"
            aria-label="WhatsApp au 0614095999"
            title="WhatsApp : 06 14 09 59 99"
            className="sm:hidden inline-flex items-center justify-center w-8 h-8 rounded-full bg-whatsapp text-white transition-opacity hover:opacity-90 shrink-0 shadow-xs"
          >
            <MessageCircle className="w-4 h-4 shrink-0" aria-hidden="true" />
          </a>

          {/* Version tablette/desktop (sm+) */}
          <a
            href="https://wa.me/212614095999?text=Bonjour%20Gennevilliers%2C%20je%20souhaite%20commander%20ou%20demander%20un%20service."
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Contacter sur WhatsApp au 0614095999"
            className="hidden sm:inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary text-on-primary font-label text-label-sm hover:bg-whatsapp transition-colors duration-state-change shrink-0 shadow-sm"
          >
            <MessageCircle className="w-4 h-4 shrink-0 text-on-primary" aria-hidden="true" />
            <span className="font-semibold" data-design-text-token="label-sm">
              06 14 09 59 99
            </span>
          </a>
        </div>
      </div>

      {/* Drawer mobile */}
      <div
        id="mobile-menu"
        className={`${
          mobileMenuOpen ? 'block' : 'hidden'
        } lg:hidden border-t border-outline-subtle bg-surface px-4 sm:px-6 py-4 shadow-lg`}
      >
        <nav aria-label="Menu mobile" className="flex flex-col gap-2">
          <a
            href="#accueil"
            onClick={() => setMobileMenuOpen(false)}
            className="font-label text-label-lg text-on-surface py-2 px-2 rounded-md hover:bg-surface-container transition-colors"
          >
            Accueil
          </a>
          <a
            href="#bonnes-affaires"
            onClick={() => setMobileMenuOpen(false)}
            className="font-label text-label-lg text-on-surface py-2 px-2 rounded-md hover:bg-surface-container transition-colors"
          >
            Chargeurs (12W, 20W, 30W)
          </a>
          <a
            href="#a-propos"
            onClick={() => setMobileMenuOpen(false)}
            className="font-label text-label-lg text-on-surface py-2 px-2 rounded-md hover:bg-surface-container transition-colors"
          >
            Réparation d&apos;Écrans &amp; Afficheurs
          </a>
          <a
            href="#a-propos"
            onClick={() => setMobileMenuOpen(false)}
            className="font-label text-label-lg text-on-surface py-2 px-2 rounded-md hover:bg-surface-container transition-colors"
          >
            Espace Coworking Casablanca
          </a>
          <a
            href="#a-propos"
            onClick={() => setMobileMenuOpen(false)}
            className="font-label text-label-lg text-on-surface py-2 px-2 rounded-md hover:bg-surface-container transition-colors"
          >
            À Propos de Gennevilliers
          </a>
          <a
            href="#contact"
            onClick={() => setMobileMenuOpen(false)}
            className="font-label text-label-lg text-on-surface py-2 px-2 rounded-md hover:bg-surface-container transition-colors"
          >
            Nous Contacter (Casablanca)
          </a>
          <div className="pt-2 border-t border-outline-subtle flex flex-col gap-2">
            <a
              href="tel:0614095999"
              className="font-label text-label-lg text-on-surface py-2 px-2 rounded-md hover:bg-surface-container transition-colors flex items-center gap-2"
            >
              <Phone className="w-4 h-4 shrink-0 text-primary" aria-hidden="true" />
              <span>Tél : 06 14 09 59 99</span>
            </a>
            <a
              href="https://wa.me/212614095999?text=Bonjour%20Gennevilliers%2C%20je%20souhaite%20commander%20ou%20demander%20un%20service."
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => setMobileMenuOpen(false)}
              className="font-label text-label-lg text-on-whatsapp bg-whatsapp py-2.5 px-4 rounded-full flex items-center justify-center gap-2 font-semibold shadow-sm text-center"
            >
              <MessageCircle className="w-4 h-4 shrink-0" aria-hidden="true" />
              <span>Commander sur WhatsApp (06 14 09 59 99)</span>
            </a>
          </div>
        </nav>
      </div>
    </header>
  );
}
