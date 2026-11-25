import { MessageCircle, ArrowUpRight } from 'lucide-react';

export default function FeaturedCollections() {
  return (
    <section aria-label="Nos espaces et ateliers" className="pb-10 sm:pb-12 lg:pb-section">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-10">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5 sm:gap-6 items-stretch">
          {/* Bannière gauche : Atelier Réparation d'Écrans */}
          <article className="rounded-lg bg-surface-container overflow-hidden relative min-h-[340px] sm:min-h-[380px] md:min-h-[420px] flex flex-col justify-end group shadow-sm">
            <img
              src="/images/service-repair-screen.jpg"
              alt="Atelier technique de réparation d'afficheurs et d'écrans à Casablanca"
              className="absolute inset-0 w-full h-full object-cover transition-transform duration-surface-enter group-hover:scale-105"
            />
            <div className="relative z-10 p-5 sm:p-6 md:p-8 bg-surface-container/95 backdrop-blur-xs flex flex-col gap-2 border-t border-outline-subtle">
              <span className="text-xs font-mono font-semibold text-primary uppercase tracking-wider">
                Expertise Technique &bull; Display Repairs
              </span>
              <h3
                className="font-headline text-lg sm:text-headline-md text-on-surface-container font-semibold"
                data-design-text-token="headline-md"
              >
                Réparation d&apos;Écrans &amp; Afficheurs
              </h3>
              <p
                className="font-body text-xs sm:text-body-sm text-on-surface-container max-w-sm"
                data-design-text-token="body-sm"
              >
                Diagnostic minutieux et remplacement d&apos;écrans cassés ou défectueux pour smartphones et tablettes à Casablanca.
              </p>
              <div className="pt-1">
                <a
                  href="https://wa.me/212614095999?text=Bonjour%20Gennevilliers%2C%20j%27ai%20besoin%20d%27un%20devis%20pour%20la%20r%C3%A9paration%20d%27un%20%C3%A9cran%20ou%20afficheur."
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex flex-wrap items-center gap-1.5 font-label text-xs sm:text-label-lg text-on-surface underline underline-offset-4 hover:text-whatsapp transition-colors duration-state-change font-semibold leading-relaxed"
                >
                  <MessageCircle className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-whatsapp shrink-0" aria-hidden="true" />
                  <span data-design-text-token="label-lg">Demander un devis sur WhatsApp (06 14 09 59 99)</span>
                  <ArrowUpRight className="w-3.5 h-3.5 sm:w-4 sm:h-4 shrink-0" aria-hidden="true" />
                </a>
              </div>
            </div>
          </article>

          {/* Bannière droite : Espace Coworking Casablanca */}
          <article className="rounded-lg bg-surface-container overflow-hidden relative min-h-[340px] sm:min-h-[380px] md:min-h-[420px] flex flex-col justify-end group shadow-sm">
            <img
              src="/images/service-coworking.jpg"
              alt="Espace coworking convivial et fonctionnel au 13 Rue Maarakat Ouhoud Casablanca"
              className="absolute inset-0 w-full h-full object-cover transition-transform duration-surface-enter group-hover:scale-105"
            />
            <div className="relative z-10 p-5 sm:p-6 md:p-8 bg-surface-container/95 backdrop-blur-xs flex flex-col gap-2 border-t border-outline-subtle">
              <span className="text-xs font-mono font-semibold text-primary uppercase tracking-wider">
                Espace Partagé &bull; Coworking Space
              </span>
              <h3
                className="font-headline text-lg sm:text-headline-md text-on-surface-container font-semibold"
                data-design-text-token="headline-md"
              >
                Espace Coworking Convivial
              </h3>
              <p
                className="font-body text-xs sm:text-body-sm text-on-surface-container max-w-sm"
                data-design-text-token="body-sm"
              >
                Un environnement fonctionnel, calme et tout équipé pour travailler, étudier, développer vos projets et échanger.
              </p>
              <div className="pt-1">
                <a
                  href="https://wa.me/212614095999?text=Bonjour%20Gennevilliers%2C%20je%20souhaite%20r%C3%A9server%20un%20poste%20ou%20visiter%20votre%20espace%20coworking."
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex flex-wrap items-center gap-1.5 font-label text-xs sm:text-label-lg text-on-surface underline underline-offset-4 hover:text-whatsapp transition-colors duration-state-change font-semibold leading-relaxed"
                >
                  <MessageCircle className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-whatsapp shrink-0" aria-hidden="true" />
                  <span data-design-text-token="label-lg">Réserver un espace sur WhatsApp (06 14 09 59 99)</span>
                  <ArrowUpRight className="w-3.5 h-3.5 sm:w-4 sm:h-4 shrink-0" aria-hidden="true" />
                </a>
              </div>
            </div>
          </article>
        </div>
      </div>
    </section>
  );
}
