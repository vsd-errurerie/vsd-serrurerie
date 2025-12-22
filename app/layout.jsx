import "./globals.css";

export const metadata = {
  title: {
    default: "VSD Serrurerie – Serrurier à Chartres & Eure-et-Loir (28)",
    template: "%s | VSD Serrurerie",
  },
  description:
    "Artisan serrurier diplômé et assuré décennale. Dépannage serrurerie 24h/24 et 7j/7 à Chartres et dans tout l’Eure-et-Loir (28). Ouverture de porte sans dégâts, prix justes et transparents.",
  icons: {
    icon: "/favicon.ico",
    apple: "/apple-touch-icon.png",
  },
  openGraph: {
    title: "VSD Serrurerie – Serrurier à Chartres (28)",
    description:
      "Dépannage serrurerie 24/7. Intervention rapide, ouverture sans dégâts, devis gratuit.",
    url: "https://vsd-serrurerie.fr",
    siteName: "VSD Serrurerie",
    locale: "fr_FR",
    type: "website",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="fr">
      <head />
      <body>{children}</body>
    </html>
  );
}
