export function generateMetadata({ params }) {
  const ville =
    params.ville.charAt(0).toUpperCase() +
    params.ville.slice(1).replace(/-/g, " ");

  return {
    title: `Serrurier à ${ville} – Dépannage 24/7 | VSD Serrurerie`,
    description: `Serrurier à ${ville}. Intervention rapide 24h/24 et 7j/7. Ouverture de porte, remplacement de serrure, sécurisation après effraction. Artisan diplômé et assuré.`,
  };
}

export default function VillePage({ params }) {
  const ville =
    params.ville.charAt(0).toUpperCase() +
    params.ville.slice(1).replace(/-/g, " ");

  return (
    <main className="min-h-screen bg-[#fbf7ef] text-[#212529]">
      <section className="max-w-5xl mx-auto px-6 py-20">
        <h1 className="text-4xl font-bold mb-6">
          Serrurier à {ville}
        </h1>

        <p className="text-lg mb-6">
          VSD Serrurerie intervient à {ville} et ses environs pour tout dépannage
          serrurerie : ouverture de porte, remplacement de serrure, mise en
          sécurité après effraction.
        </p>

        <ul className="space-y-2 mb-8">
          <li>✔ Artisan diplômé et assuré décennale</li>
          <li>✔ Devis gratuit</li>
          <li>✔ Règlement après prestation</li>
          <li>✔ Intervention rapide – 24h/24 & 7j/7</li>
          <li>✔ Ouverture sans dégâts au prix juste</li>
        </ul>

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
