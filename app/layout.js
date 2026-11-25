import { Plus_Jakarta_Sans, Source_Code_Pro } from 'next/font/google';
import './globals.css';

const plusJakartaSans = Plus_Jakarta_Sans({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700'],
  variable: '--font-jakarta',
  display: 'swap',
});

const sourceCodePro = Source_Code_Pro({
  subsets: ['latin'],
  weight: ['500', '600'],
  variable: '--font-source-code',
  display: 'swap',
});

export const viewport = {
  width: 'device-width',
  initialScale: 1,
};

export const metadata = {
  title: "GENNEVILLIERS — Vente de Chargeurs, Réparation d'Écrans & Espace Coworking | Casablanca",
  description:
    "Gennevilliers vous propose une gamme de services adaptés à vos besoins à Casablanca : Vente de chargeurs (12W, 20W, 30W), réparation d'afficheurs et d'écrans, et espace de coworking convivial. Contact : 0614095999.",
  icons: {
    icon: [
      { url: '/fav.svg', type: 'image/svg+xml' },
      { url: '/favicon.svg', type: 'image/svg+xml' },
      { url: '/images/logo.png', type: 'image/png' },
    ],
    shortcut: '/fav.svg',
    apple: '/images/logo.png',
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="fr" className={`${plusJakartaSans.variable} ${sourceCodePro.variable} scroll-smooth`}>
      <head>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <link rel="icon" href="/fav.svg" type="image/svg+xml" />
        <link rel="shortcut icon" href="/fav.svg" type="image/svg+xml" />
        <link rel="apple-touch-icon" href="/images/logo.png" />
        <link
          href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:wght,FILL@100..700,0..1&display=block"
          rel="stylesheet"
        />
      </head>
      <body className="bg-surface text-on-surface font-body antialiased min-h-screen flex flex-col overflow-x-hidden">
        {children}
      </body>
    </html>
  );
}
