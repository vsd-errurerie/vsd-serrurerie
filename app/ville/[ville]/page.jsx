"use client";
import { useParams } from "next/navigation";

export function generateMetadata({ params }) {
  const city =
    params.ville.charAt(0).toUpperCase() +
    params.ville.slice(1).replace("-", " ");

  return {
    title: `Serrurier à ${city} – Dépannage 24h/24 | VSD Serrurerie`,
    description: `Serrurier à ${city}. Artisan diplômé et assuré décennale. Intervention rapide, ouverture sans dégâts, tarifs annoncés.`,
  };
}

export default function VillePage() {
  const { ville } = useParams();
  const city =
    ville.charAt(0).toUpperCase() + ville.slice(1).replace("-", " ");

  const BLUE = "#0A1A2F";
  const GOLD = "#b08a3c";
  const BG = "#f6f1e8";

  return (
    <div className="min-h-screen relative" style={{ backgroundColor: BG }}>
      {/* HERO */}
      <section
        className="py-24 px-6 text-center"
        style={{ backgroundColor: BLUE, color: "white" }}
      >
        <h1 className="text-4xl md:text-5xl font-bold mb-6">
          Serrurier à {city}
        </h1>
        <p className="max-w-3xl mx-auto text-lg opacity-90">
          Artisan serrurier diplômé et assuré décennale à {city}. Dépannage
          serrurerie 24h/24 et 7j/7.
        </p>

        <a
          href="tel:0652826311"
          className="inline-block mt-10 px-10 py-4 rounded-xl font-semibold shadow-lg hover:scale-[1.05] transition"
          style={{ backgroundColor: GOLD, color: BLUE }}
        >
          📞 Appeler un serrurier à {city}
        </a>
      </section>

      {/* CONTENU */}
      <section className="max-w-5xl mx-auto py-20 px-6">
        <h2 className="text-3xl font-bold mb-6" style={{ color: BLUE }}>
          Dépannage serrurerie à {city}
        </h2>

        <p className="mb-6">
          VSD Serrurerie intervient rapidement à {city} pour toute urgence :
          porte claquée, clé perdue, serrure bloquée ou mise en sécurité après
          effraction.
        </p>

        <div className="grid md:grid-cols-2 gap-6 mt-10">
          {[
            "Artisan diplômé & assuré décennale",
            "Devis gratuit",
            "Intervention rapide",
            "Ouverture sans dégâts",
            "Tarifs clairs",
            "Disponible 24h/24 – 7j/7",
          ].map((item) => (
            <div key={item} className="bg-white p-6 rounded-xl shadow border">
              ✔️ {item}
            </div>
          ))}
        </div>
      </section>

      {/* TARIFS */}
      <section className="py-20 bg-[#fffaf2] border-t">
        <div className="max-w-5xl mx-auto px-6">
          <h2 className="text-3xl font-bold mb-10 text-center" style={{ color: BLUE }}>
            Tarifs serrurier à {city}
          </h2>

          <div className="grid md:grid-cols-2 gap-6">
            {[
              ["Ouverture porte claquée", "110€ – 130€"],
              ["Ouverture porte fermée à clés", "130€ – 150€"],
              ["Porte blindée", "150€ – 210€"],
              ["Remplacement de serrure", "Sur devis"],
            ].map(([name, price]) => (
              <div
                key={name}
                className="flex justify-between bg-white p-5 rounded-xl shadow border"
              >
                <span>{name}</span>
                <strong style={{ color: GOLD }}>{price}</strong>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA MOBILE */}
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
