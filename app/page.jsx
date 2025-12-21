export const metadata = {
  title: "Serrurier à Chartres & Eure-et-Loir (28) – VSD Serrurerie",
  description:
    "Artisan serrurier diplômé et assuré décennale. Dépannage serrurerie 24h/24 et 7j/7 à Chartres et dans tout l’Eure-et-Loir (28). Prix transparents, intervention rapide.",
};

export default function HomePage() {
  return (
    <main className="bg-[#fbf7ef] text-[#1f2933]">

      {/* HERO */}
      <section className="relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-6 py-24 grid md:grid-cols-2 gap-12 items-center">
          
          {/* TEXTE */}
          <div className="space-y-6">
            <h1 className="text-4xl md:text-5xl font-extrabold leading-tight">
              Serrurier à Chartres <br />
              <span className="text-[#c9a24d]">
                & Eure-et-Loir (28)
              </span>
            </h1>

            <p className="text-lg opacity-90 max-w-xl">
              Artisan serrurier diplômé et assuré décennale. Dépannage serrurerie
              24h/24 et 7j/7 : ouverture de porte, remplacement de serrure,
              sécurisation après effraction.
            </p>

            <div className="flex flex-wrap gap-4">
              <a
                href="tel:0652826311"
                className="inline-flex items-center gap-2 bg-[#c9a24d] text-white px-8 py-4 rounded-xl font-semibold shadow-lg hover:shadow-xl hover:scale-[1.02] transition"
              >
                📞 Appel immédiat
              </a>

              <span className="inline-flex items-center text-sm opacity-80">
                Intervention en moins de 30 minutes
              </span>
            </div>
          </div>

          {/* BLOC ENGAGEMENT */}
          <div className="relative bg-white rounded-2xl p-8 shadow-xl border border-[#e8dcc7]">
            
            {/* LOGO */}
            <div className="flex justify-center mb-6">
              <img
                src="/logo.png"
                alt="VSD Serrurerie"
                className="h-24 w-auto drop-shadow"
              />
            </div>

            <h2 className="text-2xl font-bold text-center mb-6">
              Engagements VSD Serrurerie
            </h2>

            <ul className="space-y-3 text-sm">
              <li>✔ Artisan diplômé & assuré décennale</li>
              <li>✔ Devis gratuit – prix annoncés à l’avance</li>
              <li>✔ Règlement après prestation</li>
              <li>✔ Disponible 24h/24 & 7j/7</li>
              <li>✔ Ouverture sans dégâts au prix le plus juste</li>
              <li>✔ Aucune mauvaise surprise</li>
            </ul>
          </div>
        </div>
      </section>

      {/* PRESTATIONS */}
      <section className="py-20 bg-[#fff8f0]">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-3xl font-bold text-center mb-12">
            Nos prestations de serrurerie
          </h2>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              { title: "Ouverture de porte", desc: "Porte claquée ou fermée à clé" },
              { title: "Remplacement de serrure", desc: "Serrures 1 à 5 points" },
              { title: "Sécurisation après effraction", desc: "Mise en sécurité immédiate" },
            ].map((item) => (
              <div
                key={item.title}
                className="bg-white rounded-xl p-6 shadow hover:shadow-lg transition"
              >
                <h3 className="font-bold text-xl mb-2 text-[#c9a24d]">
                  {item.title}
                </h3>
                <p className="opacity-80">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* TARIFS */}
      <section id="tarifs" className="py-20">
        <div className="max-w-5xl mx-auto px-6">
          <h2 className="text-3xl font-bold text-center mb-10">
            Tarifs serrurerie
          </h2>

          <div className="bg-white rounded-2xl shadow-xl p-8 border border-[#e8dcc7]">
            <ul className="divide-y">
              {[
                "Ouverture porte simple fermée à clés : 130 – 150€",
                "Ouverture porte blindée fermée à clés : 150 – 210€",
                "Ouverture porte simple claquée : 110 – 130€",
                "Ouverture porte blindée claquée : 150 – 180€",
                "Serrure 1 point (fourniture + pose) : 150 – 290€",
                "Serrure 3 points (fourniture + pose) : 290 – 580€",
                "Serrure 5 points (fourniture + pose) : 310 – 690€",
                "Serrure boîte aux lettres : 110 – 140€",
                "Mise en sécurité après effraction : Sur devis",
              ].map((t) => (
                <li key={t} className="py-3">{t}</li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* ZONES */}
      <section className="py-16 bg-[#fff8f0]">
        <div className="max-w-6xl mx-auto px-6 text-center">
          <h2 className="text-2xl font-bold mb-4">
            Intervention dans tout l’Eure-et-Loir (28)
          </h2>
          <p className="opacity-80">
            Chartres, Lucé, Mainvilliers, Dreux, Vernouillet, Nogent-le-Rotrou,
            Châteaudun, Maintenon, Épernon et toutes les communes du 28.
          </p>
        </div>
      </section>

      {/* FOOTER CTA */}
      <section className="py-16 text-center">
        <a
          href="tel:0652826311"
          className="inline-flex items-center gap-2 bg-[#c9a24d] text-white px-10 py-4 rounded-xl font-semibold shadow-lg hover:scale-[1.02] transition"
        >
          📞 Urgence serrurier – Appelez maintenant
        </a>
      </section>

    </main>
  );
}
