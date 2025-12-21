import "./globals.css";

export const metadata = {
  title: "VSD Serrurerie – Serrurier à Chartres & Eure-et-Loir",
  description:
    "Artisan serrurier diplômé et assuré décennale. Dépannage serrurerie 24h/24 et 7j/7 à Chartres et dans tout le 28.",
  icons: {
    icon: "/favicon.ico",
    apple: "/apple-touch-icon.png",
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
