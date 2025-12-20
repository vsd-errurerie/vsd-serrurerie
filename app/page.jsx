export default function HomePage() {
  return (
    <>
      {/* HERO FIN */}
      <section className="bg-slate-800 text-slate-50">
        <div className="max-w-6xl mx-auto px-6 py-12">
          <div className="max-w-3xl">
            <h1 className="text-3xl md:text-4xl font-bold mb-4">
              Serrurier en Eure-et-Loir (28)
            </h1>

            <p className="text-slate-200 mb-6">
              Dépannage serrurerie 24h/24 et 7j/7 •
              Artisan local de confiance • Intervention rapide
            </p>

            <a
              href="tel:0600000000"
              className="inline-flex items-center gap-2 bg-[#B87333] text-white font-semibold px-6 py-3 rounded-lg shadow-lg hover:scale-105 transition"
            >
              📞 Appel immédiat
            </a>
          </div>
        </div>
      </section>

      {/* BANDE DE CONFIANCE */}
      <section className="bg-[#F7F3EE] border-b border-slate-200">
        <div className="max-w-6xl mx-auto px-6 py-6 grid md:grid-cols-3 gap-4 text-center">
          <div className="font-semibold text-slate-700">
            ⏱ Intervention rapide
          </div>
          <div className="font-semibold text-slate-700">
            🔒 Artisan serrurier local
          </div>
          <div className="font-semibold text-slate-700">
            ⭐ Travail soigné & transparent
          </div>
        </div>
      </section>

      {/* SERVICES */}
      <section className="bg-[#F7F3EE]">
        <div className="max-w-6xl mx-auto px-6 py-20">
          <h2 className="text-3xl font-bold text-slate-900 text-center mb-14">
            Nos prestations de serrurerie
          </h2>

          <div className="grid md:grid-cols-3 gap-10">
            <div className="bg-white rounded-2xl p-8 shadow hover:shadow-xl transition">
              <div className="text-3xl mb-4">🚪</div>
              <h3 className="text-xl font-semibold mb-3">
                Ouverture de porte
              </h3>
              <p className="text-slate-600">
                Porte claquée ou verrouillée, ouverture rapide sans détérioration.
              </p>
            </div>

            <div className="bg-white rounded-2xl p-8 shadow hover:shadow-xl transition">
              <div className="text-3xl mb-4">🔑</div>
              <h3 className="text-xl font-semibold mb-3">
                Remplacement de serrure
              </h3>
              <p className="text-slate-600">
                Serrures standards, multipoints et haute sécurité certifiées.
              </p>
            </div>

            <div className="bg-white rounded-2xl p-8 shadow hover:shadow-xl transition">
              <div className="text-3xl mb-4">🛡️</div>
              <h3 className="text-xl font-semibold mb-3">
                Sécurisation après effraction
              </h3>
              <p className="text-slate-600">
                Mise en sécurité immédiate et conseils de protection.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA FINAL */}
      <section className="bg-slate-800 text-slate-50">
        <div className="max-w-6xl mx-auto px-6 py-14 text-center">
          <h2 className="text-2xl font-bold mb-4">
            Besoin d’un serrurier immédiatement ?
          </h2>
          <p className="text-slate-200 mb-6">
            Intervention rapide en Eure-et-Loir • 24h/24 – 7j/7
          </p>
          <a
            href="tel:0600000000"
            className="inline-block bg-[#B87333] text-white font-semibold px-8 py-4 rounded-xl shadow-lg hover:scale-105 transition"
          >
            📞 Appeler maintenant
          </a>
        </div>
      </section>
    </>
  );
}
