export const metadata = {
  title: "VSD Serrurerie – Serrurier à Chartres & Eure-et-Loir (28)",
  description:
    "Artisan serrurier diplômé et assuré décennale. Dépannage serrurerie 24h/24 et 7j/7 à Chartres et dans tout le 28.",
};

export default function HomePage() {
  return (
    <main className="min-h-screen bg-[#fbf7ef] text-[#212529]">
      <section className="max-w-6xl mx-auto px-6 py-20">
        <h1 className="text-4xl md:text-5xl font-bold mb-6">
          Serrurier à Chartres & Eure-et-Loir (28)
        </h1>

        <p className="text-lg max-w-3xl mb-8">
          Artisan serrurier diplômé et assuré décennale. Dépannage serrurerie
          24h/24 et 7j/7 : ouverture de porte, remplacement de serrure,
          sécurisation après effraction. Intervention rapide et prix transparents.
        </p>

        <a
          href="tel:0652826311"
          className="inline-block bg-[#c9a24d] text-white px-8 py-4 rounded-xl font-semibold shadow-lg hover:scale-105 transition"
        >
          📞 Appel immédiat – 06 52 82 63 11
        </a>
      </section>
    </main>
  );
}
