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

export const metadata = {
  title: 'Ecomus — Chargeurs Rapides, Câbles USB-C & Accessoires MagSafe',
  description:
    'Accessoires de charge mobile de haute qualité : Chargeurs rapides GaN, câbles tressés USB-C et Lightning, stations et batteries MagSafe. Commande directe sur WhatsApp.',
  icons: {
    icon: [
      { url: '/fav.svg', type: 'image/svg+xml' },
      { url: '/favicon.svg', type: 'image/svg+xml' },
    ],
    shortcut: '/fav.svg',
    apple: '/fav.svg',
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="fr" className={`${plusJakartaSans.variable} ${sourceCodePro.variable} scroll-smooth`}>
      <head>
        <link rel="icon" href="/fav.svg" type="image/svg+xml" />
        <link rel="shortcut icon" href="/fav.svg" type="image/svg+xml" />
        <link rel="apple-touch-icon" href="/fav.svg" />
        <link
          href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:wght,FILL@100..700,0..1&display=block"
          rel="stylesheet"
        />
      </head>
      <body className="bg-surface text-on-surface font-body antialiased min-h-screen flex flex-col">
        {children}
      </body>
    </html>
  );
}
