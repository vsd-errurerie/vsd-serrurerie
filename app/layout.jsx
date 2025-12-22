import "../styles/globals.css";

export const metadata = {
  title: {
    default:
      "Serrurier à Chartres & Eure-et-Loir (28) – Dépannage 24h/24 | VSD Serrurerie",
    template: "%s | VSD Serrurerie",
  },
  description:
    "VSD Serrurerie, artisan serrurier diplômé et assuré décennale à Chartres. Dépannage serrurerie 24h/24 et 7j/7 dans tout l’Eure-et-Loir (28) : ouverture de porte sans dégâts, tarifs annoncés, intervention rapide.",
  keywords: [
    "serrurier Chartres",
    "serrurier Eure-et-Loir",
    "serrurier 28",
    "dépannage serrurerie",
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
