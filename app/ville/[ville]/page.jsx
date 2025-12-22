export function generateMetadata({ params }) {
  const ville = params.ville
    .replace(/-/g, " ")
    .replace(/\b\w/g, (l) => l.toUpperCase());

  return {
    title: `Serrurier à ${ville} (28) – Intervention rapide | VSD Serrurerie`,
    description: `Serrurier à ${ville} (28). Dépannage 24h/24 et 7j/7, ouverture de porte sans dégâts, tarifs annoncés à l’avance. Artisan diplômé.`,
  };
}

export default function VillePage({ params }) {
  const ville = params.ville
    .replace(/-/g, " ")
    .replace(/\b\w/g, (l) => l.toUpperCase());

  return (
    <main className="bg-[#f8f3ea] text-[#1f2933]">
      {/* HERO */}
      <section className="max-w-6xl mx-auto px-6 pt-20 pb-16 grid md:grid-cols-2 gap-12 items-center">
        <div>
          <h1 className="text-4xl md:text-5xl font-bold mb-6">
            Serrurier à {ville} <span className="text-[#c9a24d]">(28)</span>
          </h1>

          <p className="text-lg mb-6 max-w-xl">
            VSD Serrurerie intervient à <strong>{ville}</strong> pour tout dépannage
            serrurier : ouverture de porte, remplacement de serrure,
            sécurisation après effraction. Artisan diplômé et assuré décennale.
          </p>

          <a
            href="tel:0652826311"
            className="inline-block bg-[#c9a24d] text-white px-8 py-4 rounded-xl font-semibold shadow-lg hover:opacity-90 transition"
          >
            📞 Appel immédiat – 06 52 82 63 11
          </a>
        </div>

        {/* ENGAGEMENTS */}
        <div className="bg-white rounded-2xl shadow-xl p-8 border">
          <h2 className="text-2xl font-bold mb-6">
            Engagements VSD Serrurerie
          </h2>
          <ul className="space-y-3 text-lg">
            <li>✔ Artisan diplômé & assuré décennale</li>
            <li>✔ Devis gratuit – tarifs annoncés</li>
            <li>✔ Règlement après prestation</li>
            <li>✔ Intervention en moins de 30 minutes</li>
            <li>✔ Disponible 24h/24 et 7j/7</li>
            <li>✔ Ouverture sans dégâts</li>
          </ul>
        </div>
      </section>

      {/* PRESTATIONS */}
      <section className="bg-white py-20">
        <div className="max-w-6xl mx-auto px-6">
          <h2 className="text-3xl font-bold mb-10 text-center">
            Prestations de serrurerie à {ville}
          </h2>

          <div className="grid md:grid-cols-3 gap-6">
            {[
              "Ouverture de porte claquée",
              "Ouverture de porte fermée à clé",
              "Remplacement de serrure",
              "Installation serrure multipoints",
              "Sécurisation après effraction",
              "Blindage de porte",
            ].map((service) => (
              <div
                key={service}
                className="bg-[#f8f3ea] p-6 rounded-xl shadow border text-center"
              >
                <h3 className="font-semibold text-lg">{service}</h3>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA FINAL */}
      <section className="py-20 text-center bg-[#f8f3ea]">
        <h2 className="text-3xl font-bold mb-6">
          Besoin d’un serrurier à {ville} ?
        </h2>
        <p className="mb-8 text-lg">
          Intervention rapide – tarifs transparents – aucune surprise.
        </p>
        <a
          href="tel:0652826311"
          className="bg-[#c9a24d] text-white px-10 py-4 rounded-xl font-semibold shadow-lg hover:opacity-90 transition"
        >
          📞 Appeler maintenant
        </a>
      </section>
    </main>
  );
}
