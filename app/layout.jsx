import "../styles/globals.css";

export const metadata = {
  title: "VSD Serrurerie",
  description: "Serrurier en Eure-et-Loir (28) – Intervention 24/7",
};

export default function RootLayout({ children }) {
  return (
    <html lang="fr">
      <body>{children}</body>
    </html>
  );
}
