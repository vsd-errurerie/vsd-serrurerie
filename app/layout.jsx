import "../styles/globals.css";

export const metadata = {
  title: {
    default: "VSD Serrurerie – Serrurier à Chartres & Eure-et-Loir (28)",
    template: "%s | VSD Serrurerie",
  },
  description:
    "Artisan serrurier diplômé et assuré décennale. Dépannage serrurerie 24h/24 et 7j/7 : ouverture de porte sans dégâts, remplacement de serrure, sécurisation après effraction. Intervention rapide dans tout le 28.",
  keywords: [
    "serrurier Chartres",
    "serrurier Eure-et-Loir",
    "dépannage serrurerie 28",
    "ouverture de porte",
    "serrurier urgence",
    "serrurier 24h/24",
  ],
  icons: {
    icon: "/favicon.ico",
    apple: "/apple-touch-icon.png",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="fr">
      <body>{children}</body>
    </html>
  );
}
