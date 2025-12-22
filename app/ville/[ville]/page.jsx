export async function generateMetadata({ params }) {
  const ville = params.ville
    .replace("-", " ")
    .replace(/\b\w/g, (l) => l.toUpperCase());

  return {
    title: `Serrurier à ${ville} (28) – Dépannage 24h/24 | VSD Serrurerie`,
    description: `Besoin d’un serrurier à ${ville} ? VSD Serrurerie intervient en urgence 24h/24 et 7j/7 pour ouverture de porte, remplacement de serrure et sécurisation après effraction. Intervention rapide dans tout le 28.`,
  };
}

export default function PageVille({ params }) {
  const ville = params.ville
    .replace("-", " ")
    .replace(/\b\w/g, (l) => l.toUpperCase());

  return (
    <main className="bg-[#fbf7ef]">
      {/* HERO */}
      <section className="max-w-7xl mx-auto px-6 py-24 grid md:grid-cols-2 gap-12 items-center">
        <div>
          <h1 className="text-4xl md:text-5xl font-bold text-[#1f2a44] mb-6">
            Serrurier à {ville} <span className="text-[#d4a856]">(28)</span>
          </h1>

          <p className="text-lg text-[#2e2e2e] max-w-xl mb-8">
            VSD Serrurerie intervient à <strong>{ville}</strong> pour tout
            dépannage serrurerie : ouverture de porte, remplacement de serrure,
            sécurisation après effraction. Artisan diplômé, assuré décennale,
            intervention rapide.
          </p>

          <ul className="space-y-3 text-[#1f2a44] mb-10">
            <li>✔ Intervention en moins de 30 minutes</li>
            <li>✔ Disponible 24h/24 et 7j/7</li>
            <li>✔ Ouverture sans dégâts</li>
            <li>✔ Tarifs annoncés à l’avance</li>
            <li>✔ Règlement après prestation</li>
          </ul>

          <a
            href="tel:0652826311"
            className="inline-flex items-center gap-2 bg-[#d4a856] text-white px-8 py-4 rounded-xl shadow-lg hover:opacity-90 transition"
          >
            📞 Appel immédiat – 06 52 82 63 11
          </a>
        </div>

        {/* BLOC CONFIANCE */}
        <div className="bg-white rounded-2xl shadow-xl p-10 border border-[#eee]">
          <h2 className="text-2xl font-bold text-[#1f2a44] mb-6">
            Pourquoi choisir VSD Serrurerie à {ville} ?
          </h2>

          <ul className="space-y-4 text-[#2e2e2e]">
            <li>✔ Artisan serrurier local intervenant dans le 28</li>
            <li>✔ Aucune surfacturation liée à la distance</li>
            <li>✔ Même tarif partout en Eure-et-Loir</li>
            <li>✔ Méthodes professionnelles sans dégradation</li>
            <li>✔ Devis clair avant intervention</li>
          </ul>
        </div>
      </section>

      {/* CTA BAS */}
      <section className="bg-[#1f2a44] py-16 text-center text-white">
        <h2 className="text-3xl font-bold mb-4">
          Serrurier disponible immédiatement à {ville}
        </h2>
        <p className="mb-8 opacity-90">
          Intervention rapide dans toute la commune et alentours.
        </p>
        <a
          href="tel:0652826311"
          className="bg-[#d4a856] text-white px-10 py-4 rounded-xl shadow-lg hover:opacity-90 transition"
        >
          📞 Appeler maintenant
        </a>
      </section>
    </main>
  );
}
