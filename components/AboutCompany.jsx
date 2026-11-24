import { MapPin, Phone, Zap, Monitor, Users, MessageCircle, ArrowDown, Check } from 'lucide-react';

export default function AboutCompany() {
  return (
    <section id="a-propos" className="py-12 lg:py-section bg-surface-container-low/50 border-y border-outline-subtle">
      <div className="max-w-7xl mx-auto px-page-margin lg:px-10">
        {/* Entête de section */}
        <div className="max-w-3xl mx-auto text-center mb-12 flex flex-col items-center gap-3">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-primary/10 text-primary text-xs font-label font-semibold tracking-wider uppercase">
            <Check className="w-3.5 h-3.5 shrink-0" aria-hidden="true" />
            <span>GENNEVILLIERS CASABLANCA</span>
          </div>
          <h2
            className="font-headline text-headline-md md:text-headline-lg text-on-surface font-bold"
            data-design-text-token="headline-lg"
          >
            À Propos de Gennevilliers
          </h2>
          <p className="font-body text-body-md text-muted text-pretty" data-design-text-token="body-md">
            Alliant expertise technique, vente d’accessoires et espace de travail collaboratif au cœur de Casablanca.
          </p>
        </div>

        {/* Bloc Présentation Détaillée de l'Entreprise */}
        <div className="rounded-2xl border border-outline bg-surface p-6 sm:p-8 lg:p-10 mb-12 shadow-sm">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            {/* Logo et identité visuelle */}
            <div className="lg:col-span-4 flex flex-col items-center text-center p-6 rounded-xl bg-surface-container">
              <div className="w-28 h-28 sm:w-36 sm:h-36 rounded-full bg-surface p-3 flex items-center justify-center border border-outline shadow-sm mb-4">
                <img
                  src="/images/logo.png"
                  alt="Logo Officiel Gennevilliers"
                  className="w-full h-full object-contain"
                />
              </div>
              <h3 className="font-display text-headline-sm font-bold text-on-surface tracking-wide uppercase">
                GENNEVILLIERS
              </h3>
              <p className="font-label text-label-sm text-primary font-medium mt-1">
                Casablanca, Maroc
              </p>
              <div className="mt-4 pt-4 border-t border-outline-subtle w-full flex flex-col gap-2 text-xs font-body text-muted">
                <div className="flex items-center justify-center gap-1.5">
                  <MapPin className="w-3.5 h-3.5 text-primary shrink-0" aria-hidden="true" />
                  <span>13 Rue Maarakat Ouhoud, Casablanca</span>
                </div>
                <div className="flex items-center justify-center gap-1.5">
                  <Phone className="w-3.5 h-3.5 text-whatsapp shrink-0" aria-hidden="true" />
                  <a href="tel:0614095999" className="hover:underline font-semibold text-on-surface">
                    06 14 09 59 99
                  </a>
                </div>
              </div>
            </div>

            {/* Texte intégral officiel */}
            <div className="lg:col-span-8 flex flex-col gap-4 text-on-surface">
              <div className="flex items-center gap-2 text-primary font-semibold text-sm">
                <span className="w-2 h-2 rounded-full bg-primary"></span>
                <span>Notre Mission &amp; Nos Engagements</span>
              </div>
              
              <p className="font-body text-body-md text-on-surface leading-relaxed text-pretty">
                Gennevilliers vous propose une gamme de services adaptés à vos besoins, alliant <strong>expertise technique</strong>, <strong>vente d’accessoires</strong> et <strong>espace de travail collaboratif</strong>.
              </p>
              
              <p className="font-body text-body-md text-muted leading-relaxed text-pretty">
                Spécialisée dans la <strong>réparation d’afficheurs et d’écrans</strong>, l’entreprise met son savoir-faire à votre disposition pour vous offrir des solutions fiables et adaptées à vos appareils. Elle propose également la <strong>vente de chargeurs de différentes puissances (12W, 20W et 30W)</strong>, pour répondre à vos besoins de recharge au quotidien.
              </p>
              
              <p className="font-body text-body-md text-muted leading-relaxed text-pretty">
                En complément, Gennevilliers met à votre disposition un <strong>espace coworking convivial et fonctionnel</strong>, idéal pour travailler, étudier, développer vos projets ou échanger dans un environnement professionnel.
              </p>

              <div className="pt-2 flex flex-wrap items-center gap-3">
                <a
                  href="https://wa.me/212614095999?text=Bonjour%20Gennevilliers%2C%20je%20souhaite%20échanger%20avec%20vous%20concernant%20vos%20services."
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-primary text-on-primary font-label text-label-md hover:bg-whatsapp transition-colors duration-state-change shadow-sm shrink-0"
                >
                  <MessageCircle className="w-4 h-4 shrink-0" aria-hidden="true" />
                  <span>Contacter Rachid sur WhatsApp</span>
                </a>
                <a
                  href="#contact"
                  className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-surface text-on-surface border border-outline font-label text-label-md hover:bg-surface-container transition-colors duration-state-change shrink-0"
                >
                  <span>Voir coordonnées complètes</span>
                  <ArrowDown className="w-4 h-4 shrink-0" aria-hidden="true" />
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Les 3 Pôles de Services : Chargers for Sale / Coworking Space / Display Repairs */}
        <div id="services-coworking" className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {/* Pôle 1 : Vente de Chargeurs */}
          <div className="rounded-xl border border-outline bg-surface p-6 sm:p-7 flex flex-col justify-between hover:border-primary transition-all duration-state-change group">
            <div className="flex flex-col gap-4">
              <div className="w-12 h-12 rounded-xl bg-primary/10 text-primary flex items-center justify-center group-hover:bg-primary group-hover:text-on-primary transition-colors duration-state-change">
                <Zap className="w-6 h-6 shrink-0" aria-hidden="true" />
              </div>
              <div className="flex flex-col gap-1">
                <span className="text-xs font-mono font-medium text-primary tracking-wider uppercase">
                  Service 01 &bull; Chargers for Sale
                </span>
                <h3 className="font-title text-title-lg font-bold text-on-surface">
                  Vente de Chargeurs
                </h3>
                <p className="text-xs font-semibold text-muted">
                  Puissances disponibles : 12W, 20W &amp; 30W
                </p>
              </div>
              <p className="font-body text-body-sm text-muted text-pretty">
                Des chargeurs certifiés, sécurisés et performants (12W, 20W, 30W et GaN) pour iPhone, Android et ordinateurs, garantissant une recharge rapide sans endommager votre batterie.
              </p>
            </div>
            <div className="pt-6 border-t border-outline-subtle mt-4">
              <a
                href="https://wa.me/212614095999?text=Bonjour%20Gennevilliers%2C%20je%20souhaite%20commander%20un%20chargeur%20(12W%2C%2020W%20ou%2030W)."
                target="_blank"
                rel="noopener noreferrer"
                className="w-full inline-flex items-center justify-center gap-2 px-4 py-2.5 rounded-lg bg-surface-container font-label text-label-md text-on-surface group-hover:bg-primary group-hover:text-on-primary transition-colors duration-state-change"
              >
                <MessageCircle className="w-4 h-4 shrink-0 text-whatsapp group-hover:text-on-primary" aria-hidden="true" />
                <span>Commander un chargeur</span>
              </a>
            </div>
          </div>

          {/* Pôle 2 : Réparation d'Écrans & Afficheurs */}
          <div className="rounded-xl border border-outline bg-surface p-6 sm:p-7 flex flex-col justify-between hover:border-primary transition-all duration-state-change group">
            <div className="flex flex-col gap-4">
              <div className="w-12 h-12 rounded-xl bg-primary/10 text-primary flex items-center justify-center group-hover:bg-primary group-hover:text-on-primary transition-colors duration-state-change">
                <Monitor className="w-6 h-6 shrink-0" aria-hidden="true" />
              </div>
              <div className="flex flex-col gap-1">
                <span className="text-xs font-mono font-medium text-primary tracking-wider uppercase">
                  Service 02 &bull; Display Repairs
                </span>
                <h3 className="font-title text-title-lg font-bold text-on-surface">
                  Réparation d&apos;Écrans
                </h3>
                <p className="text-xs font-semibold text-muted">
                  Afficheurs, vitres tactiles &amp; dalles OLED/LCD
                </p>
              </div>
              <p className="font-body text-body-sm text-muted text-pretty">
                Spécialistes reconnus à Casablanca pour le remplacement et la réparation méticuleuse d’afficheurs et d’écrans de smartphones et tablettes, avec diagnostic rigoureux.
              </p>
            </div>
            <div className="pt-6 border-t border-outline-subtle mt-4">
              <a
                href="https://wa.me/212614095999?text=Bonjour%20Gennevilliers%2C%20j%27ai%20besoin%20d%27un%20devis%20pour%20la%20r%C3%A9paration%20d%27un%20afficheur%20ou%20%C3%A9cran."
                target="_blank"
                rel="noopener noreferrer"
                className="w-full inline-flex items-center justify-center gap-2 px-4 py-2.5 rounded-lg bg-surface-container font-label text-label-md text-on-surface group-hover:bg-primary group-hover:text-on-primary transition-colors duration-state-change"
              >
                <MessageCircle className="w-4 h-4 shrink-0 text-whatsapp group-hover:text-on-primary" aria-hidden="true" />
                <span>Demander un devis réparation</span>
              </a>
            </div>
          </div>

          {/* Pôle 3 : Espace Coworking */}
          <div className="rounded-xl border border-outline bg-surface p-6 sm:p-7 flex flex-col justify-between hover:border-primary transition-all duration-state-change group">
            <div className="flex flex-col gap-4">
              <div className="w-12 h-12 rounded-xl bg-primary/10 text-primary flex items-center justify-center group-hover:bg-primary group-hover:text-on-primary transition-colors duration-state-change">
                <Users className="w-6 h-6 shrink-0" aria-hidden="true" />
              </div>
              <div className="flex flex-col gap-1">
                <span className="text-xs font-mono font-medium text-primary tracking-wider uppercase">
                  Service 03 &bull; Coworking Space
                </span>
                <h3 className="font-title text-title-lg font-bold text-on-surface">
                  Espace Coworking
                </h3>
                <p className="text-xs font-semibold text-muted">
                  Convivial, fonctionnel &amp; tout équipé
                </p>
              </div>
              <p className="font-body text-body-sm text-muted text-pretty">
                Un environnement moderne au 13 Rue Maarakat Ouhoud pour travailler, étudier, développer vos projets d&apos;entreprise ou échanger dans un cadre calme et professionnel.
              </p>
            </div>
            <div className="pt-6 border-t border-outline-subtle mt-4">
              <a
                href="https://wa.me/212614095999?text=Bonjour%20Gennevilliers%2C%20je%20souhaite%20r%C3%A9server%20ou%20visiter%20votre%20espace%20coworking."
                target="_blank"
                rel="noopener noreferrer"
                className="w-full inline-flex items-center justify-center gap-2 px-4 py-2.5 rounded-lg bg-surface-container font-label text-label-md text-on-surface group-hover:bg-primary group-hover:text-on-primary transition-colors duration-state-change"
              >
                <MessageCircle className="w-4 h-4 shrink-0 text-whatsapp group-hover:text-on-primary" aria-hidden="true" />
                <span>Réserver un espace</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
