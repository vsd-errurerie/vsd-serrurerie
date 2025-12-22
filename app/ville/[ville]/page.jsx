export function generateMetadata({ params }) {
  const ville = params.ville
    .replace(/-/g, " ")
    .replace(/\b\w/g, (l) => l.toUpperCase());

  return {
    title: `Serrurier à ${ville} (28) – Intervention rapide | VSD Serrurerie`,
    description: `Serrurier à ${ville} (28). Dépannage serrurerie 24h/24 et 7j/7. Ouverture de porte sans dégâts, tarifs annoncés à l’avance.`,
  };
}

export default function VillePage({ params }) {
  const ville = params.ville
    .replace(/-/g, " ")
    .replace(/\b\w/g, (l) => l.toUpperCase());

  return (
    <main className="bg-[#f8f3ea] text-[#1f2933]">

      {/* HERO IDENTIQUE HOME */}
      <section className="max-w-7xl mx-auto px-6 pt-20 pb-24 grid lg:grid-cols-2 gap-16 items-center">
        <div>
          <h1 className="text-4xl md:text-5xl font-bold mb-6">
            Serrurier à {ville} <span className="text-[#c9a24d]">(28)</span>
          </h1>

          <p className="text-lg mb-6 max-w-xl">
            VSD Serrurerie intervient directement à <strong>{ville}</strong> et dans ses alentours.
            Dépannage serrurerie 24h/24 et 7j/7 : ouverture de porte, remplacement
            de serrure, sécurisation après effraction.
          </p>

          <p className="text-lg mb-8">
            Artisan serrurier diplômé et assuré décennale. Tarifs transparents,
            annoncés à l’avance – aucune mauvaise surprise.
          </p>

          <a
            href="tel:0652826311"
            className="inline-block bg-[#c9a24d] text-white px-10 py-4 rounded-xl font-semibold shadow-lg hover:opacity-90 transition"
          >
            📞 Appel immédiat – 06 52 82 63 11
          </a>
        </div>

        {/* ENGAGEMENTS + LOGO */}
        <div className="bg-white rounded-2xl shadow-2xl p-10 border flex flex-col md:flex-row gap-8 items-center">
          <div className="flex-1">
            <h2 className="text-2xl font-bold mb-6">
              Engagements VSD Serrurerie
            </h2>
            <ul className="space-y-3 text-lg">
              <li>✔ Artisan diplômé & assuré décennale</li>
              <li>✔ Devis gratuit – prix annoncés</li>
              <li>✔ Règlement après prestation</li>
              <li>✔ Intervention en moins de 30 minutes</li>
              <li>✔ Disponible 24h/24 – 7j/7</li>
              <li>✔ Ouverture sans dégâts au prix juste</li>
            </ul>
          </div>

          <img
            src="/logo.png"
            alt="VSD Serrurerie"
            className="w-40 h-40 object-contain"
          />
        </div>
      </section>

      {/* TARIFS COMPLETS */}
      <section className="bg-white py-24">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-3xl font-bold mb-12 text-center">
            Tarifs serrurier à {ville}
          </h2>

          <div className="grid md:grid-cols-2 gap-6 text-lg">
            <div className="p-6 bg-[#f8f3ea] rounded-xl shadow border">
              🔐 Ouverture porte simple fermée à clé : <strong>130 – 150€</strong>
            </div>
            <div className="p-6 bg-[#f8f3ea] rounded-xl shadow border">
              🔐 Ouverture porte blindée fermée à clé : <strong>150 – 210€</strong>
            </div>
            <div className="p-6 bg-[#f8f3ea] rounded-xl shadow border">
              🚪 Ouverture porte claquée : <strong>110 – 130€</strong>
            </div>
            <div className="p-6 bg-[#f8f3ea] rounded-xl shadow border">
              🔑 Serrure 1 point (fourniture + pose) : <strong>150 – 290€</strong>
            </div>
            <div className="p-6 bg-[#f8f3ea] rounded-xl shadow border">
              🔑 Serrure 3 points : <strong>290 – 580€</strong>
            </div>
            <div className="p-6 bg-[#f8f3ea] rounded-xl shadow border">
              🔑 Serrure 5 points : <strong>310 – 690€</strong>
            </div>
            <div className="p-6 bg-[#f8f3ea] rounded-xl shadow border">
              📮 Serrure boîte aux lettres : <strong>110 – 140€</strong>
            </div>
            <div className="p-6 bg-[#f8f3ea] rounded-xl shadow border">
              🚨 Mise en sécurité après effraction : <strong>Sur devis</strong>
            </div>
          </div>
        </div>
      </section>

      {/* CTA FINAL LOCAL */}
      <section className="py-24 text-center bg-[#f8f3ea]">
        <h2 className="text-3xl font-bold mb-6">
          Serrurier à {ville} – Intervention immédiate
        </h2>
        <p className="mb-8 text-lg">
          Intervention locale, sans frais cachés. VSD Serrurerie se déplace
          rapidement à {ville} et dans tout le 28.
        </p>
        <a
          href="tel:0652826311"
          className="bg-[#c9a24d] text-white px-12 py-5 rounded-xl font-semibold shadow-lg hover:opacity-90 transition"
        >
          📞 Appeler maintenant
        </a>
      </section>
    </main>
  );
}
