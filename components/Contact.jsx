'use client';

import { useState } from 'react';
import { Phone, MessageCircle, MapPin, Mail, ArrowRight, Check } from 'lucide-react';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    service: 'Vente de Chargeurs (12W, 20W, 30W)',
    message: '',
  });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
    setFormData({ name: '', email: '', phone: '', service: 'Vente de Chargeurs (12W, 20W, 30W)', message: '' });
  };

  return (
    <section id="contact" className="pb-14 lg:pb-section">
      <div className="max-w-7xl mx-auto px-page-margin lg:px-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
          {/* Coordonnées directes */}
          <div className="lg:col-span-5 flex flex-col gap-5">
            <div className="flex flex-col gap-2">
              <span className="text-xs font-mono font-semibold text-primary tracking-wider uppercase">
                Contact &amp; Localisation
              </span>
              <h2
                className="font-headline text-headline-md md:text-headline-lg text-on-surface font-bold"
                data-design-text-token="headline-lg"
              >
                Nous Contacter
              </h2>
              <p className="font-body text-body-md text-muted text-pretty" data-design-text-token="body-md">
                Une question sur un chargeur (12W, 20W, 30W), une réparation d&apos;écran ou l&apos;espace coworking ? Écrivez à Rachid directement sur WhatsApp ou par e-mail.
              </p>
            </div>

            {/* Carte WhatsApp */}
            <article className="rounded-lg bg-surface-container p-6 flex items-start gap-4 shadow-sm">
              <div className="w-12 h-12 rounded-full bg-surface border border-outline flex items-center justify-center shrink-0 text-whatsapp shadow-sm">
                <MessageCircle className="w-6 h-6 shrink-0" aria-hidden="true" />
              </div>
              <div className="flex flex-col gap-1.5">
                <h3
                  className="font-title text-title-md text-on-surface-container font-semibold"
                  data-design-text-token="title-md"
                >
                  WhatsApp &amp; Téléphone Direct
                </h3>
                <p className="font-body text-body-sm text-muted" data-design-text-token="body-sm">
                  Disponible 7j/7 de 9h00 à 20h00 pour commande, devis réparation et réservation coworking.
                </p>
                <div className="flex flex-wrap items-center gap-3 pt-1">
                  <a
                    href="https://wa.me/212614095999?text=Bonjour%20Rachid%2C%20je%20vous%20contacte%20concernant%20vos%20services%20Gennevilliers."
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 font-label text-label-lg text-whatsapp underline underline-offset-4 font-semibold"
                  >
                    <span>06 14 09 59 99</span>
                    <ArrowRight className="w-4 h-4 shrink-0" aria-hidden="true" />
                  </a>
                  <a
                    href="tel:0614095999"
                    className="inline-flex items-center gap-1.5 font-label text-label-sm text-muted hover:text-on-surface font-medium"
                  >
                    <Phone className="w-3.5 h-3.5 shrink-0" aria-hidden="true" />
                    <span>Appel direct</span>
                  </a>
                </div>
              </div>
            </article>

            {/* Carte Adresse Casablanca */}
            <article className="rounded-lg border border-outline p-6 flex items-start gap-4 shadow-sm">
              <div className="w-12 h-12 rounded-full bg-surface-container flex items-center justify-center shrink-0 text-primary">
                <MapPin className="w-6 h-6 shrink-0" aria-hidden="true" />
              </div>
              <div className="flex flex-col gap-1">
                <h3 className="font-title text-title-md text-on-surface font-semibold" data-design-text-token="title-md">
                  Adresse &amp; Coworking Casablanca
                </h3>
                <p className="font-body text-body-sm text-on-surface font-medium" data-design-text-token="body-sm">
                  13 RUE MAARAKAT OUHOUD, EX MARECHAL
                </p>
                <p className="font-body text-body-sm text-muted">
                  Casablanca 20080, Casablanca, Morocco
                </p>
                <p className="font-body text-body-xs text-muted pt-1">
                  Du Lundi au Samedi &bull; 9h00 – 20h00
                </p>
              </div>
            </article>

            {/* Carte Email */}
            <article className="rounded-lg border border-outline p-6 flex items-start gap-4 shadow-sm">
              <div className="w-12 h-12 rounded-full bg-surface-container flex items-center justify-center shrink-0 text-primary">
                <Mail className="w-6 h-6 shrink-0" aria-hidden="true" />
              </div>
              <div className="flex flex-col gap-1">
                <h3 className="font-title text-title-md text-on-surface font-semibold" data-design-text-token="title-md">
                  Adresse E-mail Officielle
                </h3>
                <a
                  href="mailto:rachid@gennevilliers.mav"
                  className="font-body text-body-sm text-primary hover:underline font-medium"
                >
                  rachid@gennevilliers.mav
                </a>
                <p className="font-body text-body-xs text-muted">
                  Réponse rapide sous 24h ouvrées.
                </p>
              </div>
            </article>
          </div>

          {/* Formulaire de contact */}
          <div className="lg:col-span-7 rounded-lg border border-outline p-6 md:p-8 bg-surface shadow-sm">
            <div className="flex flex-col gap-1 mb-6">
              <h3
                className="font-headline text-headline-md text-on-surface font-semibold"
                data-design-text-token="headline-md"
              >
                Envoyer un message à Gennevilliers
              </h3>
              <p className="font-body text-body-sm text-muted" data-design-text-token="body-sm">
                Pour toute demande de devis réparation, commande d&apos;accessoires ou visite du coworking.
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
                    placeholder="Votre nom"
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
                    placeholder="rachid@exemple.com"
                    className="w-full px-4 py-2.5 rounded-sm border border-outline bg-surface text-body-md text-on-surface placeholder:text-muted focus:border-primary focus:ring-0"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="flex flex-col gap-1.5">
                  <label
                    htmlFor="contact-phone"
                    className="font-label text-label-lg text-on-surface"
                  >
                    Téléphone / WhatsApp
                  </label>
                  <input
                    id="contact-phone"
                    type="tel"
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    placeholder="06 XX XX XX XX"
                    className="w-full px-4 py-2.5 rounded-sm border border-outline bg-surface text-body-md text-on-surface placeholder:text-muted focus:border-primary focus:ring-0"
                  />
                </div>
                <div className="flex flex-col gap-1.5">
                  <label
                    htmlFor="contact-service"
                    className="font-label text-label-lg text-on-surface"
                  >
                    Service concerné
                  </label>
                  <select
                    id="contact-service"
                    value={formData.service}
                    onChange={(e) => setFormData({ ...formData, service: e.target.value })}
                    className="w-full px-4 py-2.5 rounded-sm border border-outline bg-surface text-body-md text-on-surface focus:border-primary focus:ring-0"
                  >
                    <option value="Vente de Chargeurs (12W, 20W, 30W)">Vente de Chargeurs (12W, 20W, 30W)</option>
                    <option value="Réparation d'Afficheurs et Écrans">Réparation d&apos;Afficheurs et Écrans</option>
                    <option value="Espace Coworking Casablanca">Espace Coworking Casablanca</option>
                    <option value="Autre demande">Autre demande</option>
                  </select>
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
                  placeholder="Précisez votre demande, le modèle d'appareil ou vos dates souhaitées pour le coworking..."
                  className="w-full px-4 py-3 rounded-sm border border-outline bg-surface text-body-md text-on-surface placeholder:text-muted focus:border-primary focus:ring-0"
                ></textarea>
              </div>

              <div className="flex flex-wrap items-center justify-between gap-4 pt-1">
                <button
                  type="submit"
                  className="inline-flex items-center justify-center gap-2 px-6 py-2.5 rounded-full bg-primary text-on-primary font-label text-label-lg hover:bg-secondary transition-colors duration-state-change shadow-sm shrink-0"
                >
                  <span data-design-text-token="label-lg">Envoyer le message</span>
                  <ArrowRight className="w-4 h-4 shrink-0" aria-hidden="true" />
                </button>
                <a
                  href="https://wa.me/212614095999?text=Bonjour%20Rachid%2C%20je%20souhaite%20une%20r%C3%A9ponse%20rapide%20via%20WhatsApp."
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 text-whatsapp text-sm font-semibold hover:underline"
                >
                  <MessageCircle className="w-4 h-4 shrink-0" aria-hidden="true" />
                  <span>Réponse encore plus rapide sur WhatsApp</span>
                </a>
                {submitted && (
                  <p
                    id="form-feedback"
                    className="w-full font-body text-body-sm text-whatsapp bg-whatsapp/10 p-3 rounded-sm flex items-center gap-2"
                    role="status"
                    data-design-text-token="body-sm"
                  >
                    <Check className="w-4 h-4 shrink-0" aria-hidden="true" />
                    <span>Merci ! Votre message a bien été envoyé. Rachid de Gennevilliers reviendra vers vous très vite.</span>
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
