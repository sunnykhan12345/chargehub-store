export default function Gallery() {
  return (
    <section className="pb-14 lg:pb-section">
      <div className="max-w-7xl mx-auto px-page-margin lg:px-10">
        <div className="text-center mb-8 flex flex-col items-center gap-2">
          <span className="text-xs font-mono font-semibold text-primary uppercase tracking-wider">
            Galerie &bull; Gennevilliers Casablanca
          </span>
          <h2
            className="font-headline text-headline-md md:text-headline-lg text-on-surface font-bold"
            data-design-text-token="headline-lg"
          >
            Nos Activités en Images
          </h2>
          <p className="font-body text-body-md text-muted max-w-xl" data-design-text-token="body-md">
            Découvrez nos chargeurs en vente, notre atelier de réparation d&apos;écrans et notre espace coworking à Casablanca.
          </p>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-4">
          {/* Image 1 : Chargeur Sans fil */}
          <a
            href="#bonnes-affaires"
            className="aspect-square rounded-md overflow-hidden bg-surface-container group relative shadow-sm"
          >
            <img
              src="/images/gallery-1.jpg"
              alt="Smartphone sur station de charge"
              className="w-full h-full object-cover transition-transform duration-surface-enter group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-primary/20 opacity-0 group-hover:opacity-100 transition-opacity flex items-end p-3">
              <span className="text-xs font-semibold text-on-primary bg-primary/90 px-2 py-0.5 rounded">Accessoires</span>
            </div>
          </a>

          {/* Image 2 : Espace Coworking */}
          <a
            href="#a-propos"
            className="aspect-square rounded-md overflow-hidden bg-surface-container group relative shadow-sm"
          >
            <img
              src="/images/service-coworking.jpg"
              alt="Espace Coworking Casablanca convivial et fonctionnel"
              className="w-full h-full object-cover transition-transform duration-surface-enter group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-primary/20 opacity-0 group-hover:opacity-100 transition-opacity flex items-end p-3">
              <span className="text-xs font-semibold text-on-primary bg-primary/90 px-2 py-0.5 rounded">Coworking</span>
            </div>
          </a>

          {/* Image 3 : Réparation d'Écran */}
          <a
            href="#a-propos"
            className="aspect-square rounded-md overflow-hidden bg-surface-container group relative shadow-sm"
          >
            <img
              src="/images/service-repair-screen.jpg"
              alt="Réparation minutieuse d'écran et afficheur smartphone"
              className="w-full h-full object-cover transition-transform duration-surface-enter group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-primary/20 opacity-0 group-hover:opacity-100 transition-opacity flex items-end p-3">
              <span className="text-xs font-semibold text-on-primary bg-primary/90 px-2 py-0.5 rounded">Réparation Écran</span>
            </div>
          </a>

          {/* Image 4 : Chargeurs 12W, 20W, 30W */}
          <a
            href="#meilleures-ventes"
            className="aspect-square rounded-md overflow-hidden bg-surface-container group relative shadow-sm"
          >
            <img
              src="/images/product-adapter-30w.jpg"
              alt="Vente de chargeurs certifiés 12W, 20W, 30W"
              className="w-full h-full object-cover transition-transform duration-surface-enter group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-primary/20 opacity-0 group-hover:opacity-100 transition-opacity flex items-end p-3">
              <span className="text-xs font-semibold text-on-primary bg-primary/90 px-2 py-0.5 rounded">Chargeurs</span>
            </div>
          </a>

          {/* Image 5 : Câbles haute résistance */}
          <a
            href="#bonnes-affaires"
            className="aspect-square rounded-md overflow-hidden bg-surface-container col-span-2 sm:col-span-1 group relative shadow-sm"
          >
            <img
              src="/images/gallery-5.jpg"
              alt="Branchement câble tressé haute performance"
              className="w-full h-full object-cover transition-transform duration-surface-enter group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-primary/20 opacity-0 group-hover:opacity-100 transition-opacity flex items-end p-3">
              <span className="text-xs font-semibold text-on-primary bg-primary/90 px-2 py-0.5 rounded">Câbles Tressés</span>
            </div>
          </a>
        </div>
      </div>
    </section>
  );
}
