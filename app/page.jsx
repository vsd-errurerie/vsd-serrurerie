export default function HomePage() {
  return (
    <main className="bg-[#f7f5f0] min-h-screen">
      
      {/* HERO */}
      <section className="bg-[#1f2933] text-white">
        <div className="max-w-6xl mx-auto px-6 py-20">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">
            Serrurier en Eure-et-Loir (28)
          </h1>

          <p className="text-lg md:text-xl max-w-2xl mb-8 text-gray-200">
            Dépannage serrurerie 24h/24 et 7j/7.  
            Ouverture de porte, remplacement de serrure, sécurisation après effraction.
          </p>

          <a
            href="tel:06XXXXXXXX"
            className="inline-block bg-[#d4af37] text-black font-semibold px-8 py-4 rounded-lg shadow hover:bg-[#c9a52f] transition"
          >
            📞 Appel immédiat
          </a>
        </div>
      </section>

      {/* SERVICES */}
      <section className="max-w-6xl mx-auto px-6 py-20">
        <h2 className="text-3xl font-bold mb-12 text-center text-gray-800">
          Nos prestations de serrurerie
        </h2>

        <div className="grid md:grid-cols-3 gap-8">
          
          <div className="bg-white p-6 rounded-xl shadow">
            <h3 className="text-xl font-semibold mb-3">🚪 Ouverture de porte</h3>
            <p className="text-gray-600">
              Porte claquée ou verrouillée, intervention rapide sans dégâts.
            </p>
          </div>

          <div className="bg-white p-6 rounded-xl shadow">
            <h3 className="text-xl font-semibold mb-3">🔑 Remplacement de serrure</h3>
            <p className="text-gray-600">
              Serrures standards, multipoints, haute sécurité.
            </p>
          </div>

          <div className="bg-white p-6 rounded-xl shadow">
            <h3 className="text-xl font-semibold mb-3">🛡 Sécurisation</h3>
            <p className="text-gray-600">
              Intervention après effraction, mise en sécurité immédiate.
            </p>
          </div>

        </div>
      </section>

      {/* ENGAGEMENTS */}
      <section className="bg-white">
        <div className="max-w-6xl mx-auto px-6 py-20">
          <h2 className="text-3xl font-bold mb-10 text-center text-gray-800">
            Pourquoi choisir VSD Serrurerie ?
          </h2>

          <ul className="grid md:grid-cols-2 gap-6 text-lg text-gray-700">
            <li>✅ Intervention en moins de 30 minutes</li>
            <li>✅ Disponible 24h/24 – 7j/7</li>
            <li>✅ Prix annoncés avant intervention</li>
            <li>✅ Artisan local expérimenté</li>
          </ul>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="bg-[#1f2933] text-gray-300">
        <div className="max-w-6xl mx-auto px-6 py-8 text-center">
          © {new Date().getFullYear()} VSD Serrurerie – Eure-et-Loir (28)
        </div>
      </footer>

    </main>
  );
}
