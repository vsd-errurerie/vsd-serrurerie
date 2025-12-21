import "../styles/globals.css";

export const metadata = {
  title: "VSD Serrurerie – Serrurier à Chartres & Eure-et-Loir",
  description:
    "Artisan serrurier diplômé et assuré décennale. Dépannage serrurerie 24h/24 et 7j/7 à Chartres et dans tout le 28.",
  icons: {
    icon: "/favicon-v1.ico",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="fr">
      <body>{children}</body>
    </html>
  );
}
