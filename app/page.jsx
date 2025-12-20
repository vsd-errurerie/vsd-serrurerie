export default function HomePage() {
  return (
    <>
      {/* HERO */}
      <section className="bg-slate-900 text-slate-50">
        <div className="max-w-6xl mx-auto px-6 py-24">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">
            Serrurier en Eure-et-Loir (28)
          </h1>

          <p className="text-lg text-slate-200 max-w-2xl mb-8">
            Dépannage serrurerie 24h/24 et 7j/7.  
            Ouverture de porte, remplacement de serrure,
            sécurisation après effraction.  
            <strong className="block mt-2 text-slate-100">
              Artisan local de confiance.
            </strong>
          </p>

          <a
            href="tel:0600000000"
            className="inline-block bg-[#C28E2C] text-slate-900 font-semibold px-6 py-3 rounded-lg shadow hover:opacity-90 transition"
          >
            📞 Appel immédiat
          </a>
        </div>
      </section>

      {/* SERVICES */}
      <section className="bg-slate-50">
        <div className="max-w-6xl mx-auto px-6 py-20">
          <h2 className="text-3xl font-bold text-slate-900 text-center mb-12">
            Nos prestations de serrurerie
          </h2>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white rounded-xl p-6 shadow">
              <h3 className="text-xl font-semibold mb-2">
                🚪 Ouverture de porte
              </h3>
              <p className="text-slate-600">
                Porte claquée ou verrouillée, intervention rapide sans dégâts.
              </p>
            </div>

            <div className="bg-white rounded-xl p-6 shadow">
              <h3 className="text-xl font-semibold mb-2">
                🔑 Remplacement de serrure
              </h3>
              <p className="text-slate-600">
                Serrures standards, multipoints, haute sécurité.
              </p>
            </div>

            <div className="bg-white rounded-xl p-6 shadow">
              <h3 className="text-xl font-semibold mb-2">
                🛡️ Sécurisation
              </h3>
              <p className="text-slate-600">
                Intervention après effraction, mise en sécurité immédiate.
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
