'use client';

import { useState } from 'react';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
    setFormData({ name: '', email: '', message: '' });
  };

  return (
    <section id="contact" className="pb-14 lg:pb-section">
      <div className="max-w-7xl mx-auto px-page-margin lg:px-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
          {/* Coordonnées directes */}
          <div className="lg:col-span-5 flex flex-col gap-5">
            <div className="flex flex-col gap-2">
              <h2
                className="font-headline text-headline-md md:text-headline-lg text-on-surface"
                data-design-text-token="headline-lg"
              >
                Nous Contacter
              </h2>
              <p className="font-body text-body-md text-muted text-pretty" data-design-text-token="body-md">
                Une question sur un produit ou votre commande ? Écrivez-nous directement sur WhatsApp ou
                via le formulaire.
              </p>
            </div>

            <article className="rounded-lg bg-surface-container p-6 flex items-start gap-4">
              <div className="w-11 h-11 rounded-full bg-surface border border-outline flex items-center justify-center shrink-0 text-whatsapp">
                <span className="material-symbols-outlined text-title-lg" aria-hidden="true">
                  chat
                </span>
              </div>
              <div className="flex flex-col gap-1.5">
                <h3
                  className="font-title text-title-md text-on-surface-container"
                  data-design-text-token="title-md"
                >
                  Service Client WhatsApp
                </h3>
                <p className="font-body text-body-sm text-muted" data-design-text-token="body-sm">
                  Disponible 7j/7 de 9h00 à 20h00 pour commander ou obtenir un conseil technique.
                </p>
                <a
                  href="https://wa.me/33600000000?text=Bonjour%2C%20j%27ai%20une%20question%20concernant%20vos%20chargeurs."
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 font-label text-label-lg text-whatsapp underline underline-offset-4 pt-1"
                >
                  <span data-design-text-token="label-lg">Discuter sur WhatsApp</span>
                  <span className="material-symbols-outlined text-body-md" aria-hidden="true">
                    north_east
                  </span>
                </a>
              </div>
            </article>

            <article className="rounded-lg border border-outline p-6 flex items-start gap-4">
              <div className="w-11 h-11 rounded-full bg-surface-container flex items-center justify-center shrink-0 text-on-surface">
                <span className="material-symbols-outlined text-title-lg" aria-hidden="true">
                  location_on
                </span>
              </div>
              <div className="flex flex-col gap-1">
                <h3 className="font-title text-title-md text-on-surface" data-design-text-token="title-md">
                  Boutique Paris
                </h3>
                <p className="font-body text-body-sm text-muted" data-design-text-token="body-sm">
                  12 Rue de la Technologie, 75001 Paris · Lun–Sam 10h–19h
                </p>
              </div>
            </article>
          </div>

          {/* Formulaire de contact */}
          <div className="lg:col-span-7 rounded-lg border border-outline p-6 md:p-8 bg-surface">
            <div className="flex flex-col gap-1 mb-6">
              <h3
                className="font-headline text-headline-md text-on-surface"
                data-design-text-token="headline-md"
              >
                Écrivez-nous
              </h3>
              <p className="font-body text-body-sm text-muted" data-design-text-token="body-sm">
                Réponse garantie sous 24 heures ouvrées par e-mail.
              </p>
            </div>

            <form id="contact-form" onSubmit={handleSubmit} className="flex flex-col gap-4">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="flex flex-col gap-1.5">
                  <label
                    htmlFor="contact-name"
                    className="font-label text-label-lg text-on-surface"
                    data-design-text-token="label-lg"
                  >
                    Nom complet
                  </label>
                  <input
                    id="contact-name"
                    type="text"
                    required
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    placeholder="Ex. Camille Bernard"
                    className="w-full px-4 py-2.5 rounded-sm border border-outline bg-surface text-body-md text-on-surface placeholder:text-muted focus:border-primary focus:ring-0"
                  />
                </div>
                <div className="flex flex-col gap-1.5">
                  <label
                    htmlFor="contact-email"
                    className="font-label text-label-lg text-on-surface"
                    data-design-text-token="label-lg"
                  >
                    Adresse e-mail
                  </label>
                  <input
                    id="contact-email"
                    type="email"
                    required
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    placeholder="camille@exemple.fr"
                    className="w-full px-4 py-2.5 rounded-sm border border-outline bg-surface text-body-md text-on-surface placeholder:text-muted focus:border-primary focus:ring-0"
                  />
                </div>
              </div>

              <div className="flex flex-col gap-1.5">
                <label
                  htmlFor="contact-message"
                  className="font-label text-label-lg text-on-surface"
                  data-design-text-token="label-lg"
                >
                  Votre message
                </label>
                <textarea
                  id="contact-message"
                  rows="4"
                  required
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  placeholder="Indiquez le modèle de votre téléphone ou votre question..."
                  className="w-full px-4 py-3 rounded-sm border border-outline bg-surface text-body-md text-on-surface placeholder:text-muted focus:border-primary focus:ring-0"
                ></textarea>
              </div>

              <div className="flex flex-wrap items-center justify-between gap-4 pt-1">
                <button
                  type="submit"
                  className="inline-flex items-center justify-center gap-2 px-6 py-2.5 rounded-full bg-primary text-on-primary font-label text-label-lg hover:bg-secondary transition-colors duration-state-change"
                >
                  <span data-design-text-token="label-lg">Envoyer le message</span>
                  <span className="material-symbols-outlined text-body-md" aria-hidden="true">
                    north_east
                  </span>
                </button>
                {submitted && (
                  <p
                    id="form-feedback"
                    className="font-body text-body-sm text-whatsapp"
                    role="status"
                    data-design-text-token="body-sm"
                  >
                    Merci ! Votre message a bien été envoyé.
                  </p>
                )}
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
