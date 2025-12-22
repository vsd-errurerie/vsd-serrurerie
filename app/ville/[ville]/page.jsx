export async function generateMetadata({ params }) {
  const ville = params.ville
    .replace("-", " ")
    .replace(/\b\w/g, (l) => l.toUpperCase());

  return {
    title: `Serrurier à ${ville} (28) – Dépannage 24h/24 | VSD Serrurerie`,
    description: `VSD Serrurerie intervient à ${ville} (28) pour tout dépannage serrurier : ouverture de porte, remplacement de serrure, sécurisation après effraction. Artisan diplômé, assuré décennale.`,
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
            VSD Serrurerie intervient à <strong>{ville}</strong> et dans les
            alentours pour tout dépannage serrurerie : ouverture de porte,
            remplacement de serrure, sécurisation après effraction.
            Artisan serrurier diplômé et assuré décennale.
          </p>

          <a
            href="tel:0652826311"
            className="inline-flex items-center gap-2 bg-[#d4a856] text-white px-8 py-4 rounded-xl shadow-lg hover:opacity-90 transition"
          >
            📞 Appel immédiat – 06 52 82 63 11
          </a>

          <p className="mt-4 text-sm text-[#555]">
            Intervention rapide à {ville} – sans frais cachés
          </p>
        </div>

        {/* ENGAGEMENTS + LOGO */}
        <div className="bg-white rounded-2xl shadow-xl p-10 border border-[#eee] grid grid-cols-1 md:grid-cols-2 gap-6 items-center">
          <div>
            <h2 className="text-2xl font-bold text-[#1f2a44] mb-6">
              Engagements VSD Serrurerie
            </h2>
            <ul className="space-y-3 text-[#2e2e2e]">
              <li>✔ Artisan diplômé & assuré décennale</li>
              <li>✔ Devis gratuit – prix annoncés</li>
              <li>✔ Règlement après prestation</li>
              <li>✔ Intervention en 30 minutes max</li>
              <li>✔ Disponible 24h/24 et 7j/7</li>
              <li>✔ Ouverture sans dégâts</li>
            </ul>
          </div>

          <div className="flex justify-center">
            <img
              src="/logo-vsd.png"
              alt="VSD Serrurerie"
              className="w-40 h-auto"
            />
          </div>
        </div>
      </section>

      {/* TARIFS */}
      <section className="bg-white py-20 border-t">
        <div className="max-w-6xl mx-auto px-6">
          <h2 className="text-3xl font-bold text-center text-[#1f2a44] mb-12">
            Tarifs serrurier à {ville}
          </h2>

          <div className="grid md:grid-cols-2 gap-8">
            {[
              ["Ouverture porte simple fermée à clé", "130 – 150 €"],
              ["Ouverture porte blindée fermée à clé", "150 – 210 €"],
              ["Ouverture porte simple claquée", "110 – 130 €"],
              ["Ouverture porte blindée claquée", "150 – 180 €"],
              ["Serrure 1 point (fourniture + pose)", "150 – 290 €"],
              ["Serrure 3 points (fourniture + pose)", "290 – 580 €"],
              ["Serrure 5 points (fourniture + pose)", "310 – 690 €"],
              ["Serrure boîte aux lettres", "110 – 140 €"],
              ["Mise en sécurité après effraction", "Sur devis"],
            ].map(([label, price]) => (
              <div
                key={label}
                className="flex justify-between items-center bg-[#fbf7ef] p-5 rounded-xl shadow-sm border"
              >
                <span className="font-medium text-[#1f2a44]">{label}</span>
                <span className="font-bold text-[#d4a856]">{price}</span>
              </div>
            ))}
          </div>

          <p className="text-center text-sm text-[#555] mt-8">
            Tarifs identiques dans toutes les villes de l’Eure-et-Loir (28)
          </p>
        </div>
      </section>

      {/* CTA FINAL */}
      <section className="bg-[#1f2a44] py-16 text-center text-white">
        <h2 className="text-3xl font-bold mb-4">
          Serrurier disponible à {ville} immédiatement
        </h2>
        <p className="mb-8 opacity-90">
          Intervention rapide dans votre secteur, sans surcoût.
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
