export default function Gallery() {
  return (
    <section className="pb-14 lg:pb-section">
      <div className="max-w-7xl mx-auto px-page-margin lg:px-10">
        <div className="text-center mb-8 flex flex-col items-center gap-2">
          <h2
            className="font-headline text-headline-md md:text-headline-lg text-on-surface"
            data-design-text-token="headline-lg"
          >
            Inspirations Charge
          </h2>
          <p className="font-body text-body-md text-muted max-w-xl" data-design-text-token="body-md">
            Découvrez nos chargeurs et câbles en situation réelle sur votre bureau ou en déplacement.
          </p>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-4">
          <a
            href="#bonnes-affaires"
            className="aspect-square rounded-md overflow-hidden bg-surface-container group"
          >
            <img
              src="/images/gallery-1.jpg"
              alt="Smartphone sur chargeur sans fil MagSafe"
              className="w-full h-full object-cover transition-transform duration-surface-enter group-hover:scale-105"
            />
          </a>
          <a
            href="#bonnes-affaires"
            className="aspect-square rounded-md overflow-hidden bg-surface-container group"
          >
            <img
              src="/images/gallery-2.jpg"
              alt="Espace de travail avec chargeur GaN et câble USB-C"
              className="w-full h-full object-cover transition-transform duration-surface-enter group-hover:scale-105"
            />
          </a>
          <a
            href="#meilleures-ventes"
            className="aspect-square rounded-md overflow-hidden bg-surface-container group"
          >
            <img
              src="/images/gallery-3.jpg"
              alt="Charge rapide en voiture"
              className="w-full h-full object-cover transition-transform duration-surface-enter group-hover:scale-105"
            />
          </a>
          <a
            href="#meilleures-ventes"
            className="aspect-square rounded-md overflow-hidden bg-surface-container group"
          >
            <img
              src="/images/gallery-4.jpg"
              alt="Accessoires de charge pour voyage"
              className="w-full h-full object-cover transition-transform duration-surface-enter group-hover:scale-105"
            />
          </a>
          <a
            href="#bonnes-affaires"
            className="aspect-square rounded-md overflow-hidden bg-surface-container col-span-2 sm:col-span-1 group"
          >
            <img
              src="/images/gallery-5.jpg"
              alt="Branchement câble USB-C tressé sur smartphone"
              className="w-full h-full object-cover transition-transform duration-surface-enter group-hover:scale-105"
            />
          </a>
        </div>
      </div>
    </section>
  );
}
