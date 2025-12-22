export function generateMetadata({ params }) {
  const ville = params.ville
    .replace(/-/g, " ")
    .replace(/\b\w/g, (l) => l.toUpperCase());

  return {
    title: `Serrurier à ${ville} (28) – VSD Serrurerie`,
    description: `Besoin d’un serrurier à ${ville} ? VSD Serrurerie intervient 24h/24 et 7j/7. Artisan diplômé, ouverture de porte sans dégâts, tarifs transparents.`,
  };
}

export default function VillePage({ params }) {
  const ville = params.ville
    .replace(/-/g, " ")
    .replace(/\b\w/g, (l) => l.toUpperCase());

  return (
    <main className="bg-[#f8f3ea] text-[#1f2933]">
      <section className="max-w-6xl mx-auto px-6 py-20">
        <h1 className="text-4xl md:text-5xl font-bold mb-6">
          Serrurier à {ville} <span className="text-[#c9a24d]">(28)</span>
        </h1>

        <p className="text-lg max-w-3xl mb-8">
          VSD Serrurerie intervient à <strong>{ville}</strong> pour tout dépannage
          serrurier : ouverture de porte, remplacement de serrure,
          sécurisation après effraction. Artisan diplômé et assuré décennale.
        </p>

        <ul className="space-y-3 text-lg mb-10">
          <li>✔ Intervention en moins de 30 minutes</li>
          <li>✔ Disponible 24h/24 et 7j/7</li>
          <li>✔ Ouverture sans dégâts</li>
          <li>✔ Tarifs annoncés à l’avance</li>
          <li>✔ Règlement après prestation</li>
        </ul>

        <a
          href="tel:0652826311"
          className="inline-block bg-[#c9a24d] text-white px-8 py-4 rounded-xl font-semibold shadow-lg hover:opacity-90 transition"
        >
          📞 Appel immédiat – 06 52 82 63 11
        </a>
      </section>
    </main>
  );
}
