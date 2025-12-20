export default function HomePage() {
  return (
    <>
      {/* BANDEAU FIN */}
      <section className="bg-[#0A3D62] text-white">
        <div className="max-w-7xl mx-auto px-6 py-6 flex flex-col md:flex-row md:items-center md:justify-between gap-4">
          <h1 className="text-lg md:text-xl font-bold">
            Serrurier en Eure-et-Loir (28)
          </h1>

          <a
            href="tel:0600000000"
            className="bg-[#1BA784] text-white font-semibold px-5 py-2 rounded-md shadow hover:opacity-90 transition"
          >
            📞 Dépannage immédiat
          </a>
        </div>
      </section>

      {/* INTRO */}
      <section className="bg-slate-50">
        <div className="max-w-4xl mx-auto px-6 py-10 text-center">
          <p className="text-lg text-slate-700">
            Dépannage serrurerie 24h/24 et 7j/7 • Intervention rapide • Artisan local
          </p>
        </div>
      </section>

      {/* GARANTIES */}
      <section className="bg-white">
        <div className="max-w-6xl mx-auto px-6 py-16">
          <h2 className="text-2xl font-bold text-center mb-12">
            Un service clair, professionnel et sans surprise
          </h2>

          <div className="grid md:grid-cols-2 gap-6 text-slate-700">
            <p>✔ Artisan diplômé et assuré en garantie décennale</p>
            <p>✔ Devis gratuit avant toute intervention</p>
            <p>✔ Règlement après prestation uniquement</p>
            <p>✔ Intervention en 30 minutes maximum</p>
            <p>✔ Disponible 24h/24 et 7j/7</p>
            <p>✔ Ouverture sans dégâts au prix le plus juste</p>
            <p>✔ Tarifs annoncés à l’avance</p>
            <p>✔ Aucune mauvaise surprise</p>
          </div>
        </div>
      </section>

      {/* PRESTATIONS */}
      <section className="bg-slate-50">
        <div className="max-w-6xl mx-auto px-6 py-16">
          <h2 className="text-2xl font-bold text-center mb-12">
            Nos prestations de serrurerie
          </h2>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white p-6 rounded-lg shadow">
              <h3 className="font-semibold mb-2">Ouverture de porte</h3>
              <p className="text-slate-600">
                Porte claquée ou verrouillée, intervention rapide sans dégâts.
              </p>
            </div>

            <div className="bg-white p-6 rounded-lg shadow">
              <h3 className="font-semibold mb-2">Remplacement de serrure</h3>
              <p className="text-slate-600">
                Serrures standards, multipoints et haute sécurité.
              </p>
            </div>

            <div className="bg-white p-6 rounded-lg shadow">
              <h3 className="font-semibold mb-2">Sécurisation après effraction</h3>
              <p className="text-slate-600">
                Mise en sécurité immédiate du logement ou du local.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* TARIFS */}
      <section className="bg-white">
        <div className="max-w-4xl mx-auto px-6 py-16">
          <h2 className="text-2xl font-bold text-center mb-10">
            Tarifs indicatifs
          </h2>

          <ul className="space-y-4 text-slate-700">
            <li>🔑 Ouverture de porte claquée : <strong>à partir de 85 €</strong></li>
            <li>🔐 Ouverture de porte verrouillée : <strong>à partir de 120 €</strong></li>
            <li>🛠 Remplacement de serrure : <strong>devis gratuit</strong></li>
            <li>🚨 Sécurisation après effraction : <strong>devis gratuit</strong></li>
          </ul>
        </div>
      </section>

      {/* CTA FINAL */}
      <section className="bg-[#0A3D62] text-white">
        <div className="max-w-6xl mx-auto px-6 py-12 text-center">
          <p className="text-lg mb-4">
            Besoin d’un serrurier maintenant ?
          </p>
          <a
            href="tel:0600000000"
            className="bg-[#1BA784] text-white font-bold px-8 py-3 rounded-md shadow hover:opacity-90 transition"
          >
            📞 Appeler immédiatement
          </a>
        </div>
      </section>
    </>
  );
}
