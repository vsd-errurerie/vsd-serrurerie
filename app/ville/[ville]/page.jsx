"use client";
import { useParams } from "next/navigation";

export default function VillePage() {
  const { ville } = useParams();
  const city =
    ville.charAt(0).toUpperCase() + ville.slice(1).replace("-", " ");

  /* COULEURS MAÎTRESSES */
  const BLUE = "#0A1A2F";
  const GOLD = "#b08a3c";
  const BG = "#f6f1e8";

  return (
    <div className="min-h-screen relative" style={{ backgroundColor: BG }}>
      {/* ================= HERO ================= */}
      <section
        className="py-24 px-6 text-center"
        style={{ backgroundColor: BLUE, color: "white" }}
      >
        <h1 className="text-4xl md:text-5xl font-bold mb-6">
          Serrurier à {city}
        </h1>
        <p className="max-w-3xl mx-auto text-lg opacity-90">
          Artisan serrurier diplômé et assuré décennale à {city}.  
          Dépannage 24h/24 et 7j/7, intervention rapide et sans surprise.
        </p>

        <a
          href="tel:0652826311"
          className="inline-block mt-10 px-10 py-4 rounded-xl font-semibold shadow-lg hover:scale-[1.05] transition"
          style={{ backgroundColor: GOLD, color: BLUE }}
        >
          📞 Appeler un serrurier à {city}
        </a>
      </section>

      {/* ================= CONTENU SEO ================= */}
      <section className="max-w-5xl mx-auto py-20 px-6">
        <h2 className="text-3xl font-bold mb-6" style={{ color: BLUE }}>
          Dépannage serrurerie à {city}
        </h2>

        <p className="mb-6 leading-relaxed">
          Vous recherchez un serrurier fiable à {city} pour une urgence ou un
          dépannage planifié ? VSD Serrurerie intervient rapidement pour toute
          ouverture de porte, remplacement de serrure ou mise en sécurité après
          effraction.
        </p>

        <p className="mb-10 leading-relaxed">
          Artisan local, nous privilégions les interventions sans dégâts, des
          tarifs clairs annoncés à l’avance et un règlement uniquement après
          prestation.
        </p>

        {/* ENGAGEMENTS */}
        <div className="grid md:grid-cols-2 gap-6">
          {[
            "Artisan diplômé & assuré décennale",
            "Devis gratuit avant intervention",
            "Intervention rapide (30 minutes)",
            "Disponible 24h/24 – 7j/7",
            "Ouverture sans dégâts",
            "Tarifs justes et transparents",
          ].map((item) => (
            <div
              key={item}
              className="bg-white rounded-xl p-6 shadow border"
            >
              ✔️ {item}
            </div>
          ))}
        </div>
      </section>

      {/* ================= TARIFS ================= */}
      <section className="py-20 border-t bg-[#fffaf2]">
        <div className="max-w-5xl mx-auto px-6">
          <h2
            className="text-3xl font-bold mb-10 text-center"
            style={{ color: BLUE }}
          >
            Tarifs serrurier à {city}
          </h2>

          <div className="grid md:grid-cols-2 gap-6">
            {[
              ["Ouverture porte claquée", "110€ – 130€"],
              ["Ouverture porte fermée à clés", "130€ – 150€"],
              ["Ouverture porte blindée", "150€ – 210€"],
              ["Remplacement de serrure", "Sur devis"],
            ].map(([name, price]) => (
              <div
                key={name}
                className="flex justify-between bg-white p-5 rounded-xl shadow border hover:shadow-lg transition"
              >
                <span>{name}</span>
                <strong style={{ color: GOLD }}>{price}</strong>
              </div>
            ))}
          </div>

          {/* CTA APRÈS TARIFS */}
          <div className="mt-14 text-center">
            <p className="mb-6 opacity-80">
              Devis gratuit • Aucun frais caché • Règlement après prestation
            </p>
            <a
              href="tel:0652826311"
              className="inline-block px-10 py-4 rounded-xl font-semibold shadow-lg hover:scale-[1.05] transition"
              style={{ backgroundColor: GOLD, color: BLUE }}
            >
              📞 Contacter un serrurier à {city}
            </a>
          </div>
        </div>
      </section>

      {/* ================= RASSURANCE FINAL ================= */}
      <section className="py-16 text-center bg-white border-t">
        <h3 className="text-2xl font-bold mb-4">
          Artisan serrurier de confiance à {city}
        </h3>
        <p className="max-w-2xl mx-auto opacity-80 mb-6">
          Intervention rapide • Artisan diplômé • Assurance décennale • Tarifs annoncés
        </p>
        <a
          href="tel:0652826311"
          className="inline-block px-10 py-4 rounded-xl font-semibold shadow-lg hover:scale-[1.05] transition"
          style={{ backgroundColor: GOLD, color: BLUE }}
        >
          📞 Appeler maintenant
        </a>
      </section>

      {/* ================= CTA MOBILE FIXE ================= */}
      <a
        href="tel:0652826311"
        className="fixed bottom-4 left-4 right-4 z-50 md:hidden text-center py-4 rounded-xl font-semibold shadow-xl"
        style={{ backgroundColor: GOLD, color: BLUE }}
      >
        📞 Appeler maintenant
      </a>
    </div>
  );
}
