export function generateMetadata({ params }) {
  const villeSlug = params?.ville || "chartres";
  const ville = decodeURIComponent(villeSlug)
    .replace(/-/g, " ")
    .replace(/\b\w/g, (c) => c.toUpperCase());

  return {
    title: `Serrurier à ${ville} (28) — VSD Serrurerie`,
    description:
      `Dépannage serrurerie 24h/24 et 7j/7 à ${ville} (Eure-et-Loir). ` +
      `Artisan diplômé et assuré décennale : ouverture de porte, remplacement de serrure, sécurisation après effraction.`,
  };
}

const phone = "06 52 82 63 11";
const phoneHref = "tel:0652826311";

export default function VillePage({ params }) {
  const villeSlug = params?.ville || "chartres";
  const ville = decodeURIComponent(villeSlug)
    .replace(/-/g, " ")
    .replace(/\b\w/g, (c) => c.toUpperCase());

  return (
    <div className="min-h-screen bg-[#fbf7ef] text-[#0b1220]">
      {/* Simple header (reprend le style global) */}
      <header className="bg-[#0B1F3B] text-white border-b border-white/10">
        <div className="mx-auto max-w-6xl px-5 py-4 flex items-center justify-between">
          <a href="/" className="font-semibold tracking-wide">
            VSD Serrurerie
          </a>
          <a
            href={phoneHref}
            className="inline-flex items-center gap-2 rounded-xl px-4 py-2 font-semibold
                       bg-[#C9A24A] text-[#0B1F3B] shadow hover:opacity-95 transition"
          >
            📞 {phone}
          </a>
        </div>
      </header>

      <main className="mx-auto max-w-6xl px-5 py-12">
        <h1 className="text-4xl md:text-5xl font-extrabold text-[#0B1F3B]">
          Serrurier à <span className="text-[#C9A24A]">{ville}</span> (28)
        </h1>

        <p className="mt-5 text-lg text-[#22314a] max-w-3xl leading-relaxed">
          Dépannage serrurerie 24h/24 et 7j/7 à {ville} : ouverture de porte (claquée/verrouillée),
          remplacement de serrure, sécurisation après effraction. Artisan diplômé et assuré décennale,
          tarifs annoncés, règlement après prestation.
        </p>

        <div className="mt-8 flex flex-col sm:flex-row gap-4">
          <a
            href={phoneHref}
            className="inline-flex items-center justify-center gap-2 rounded-xl px-7 py-4
                       bg-[#C9A24A] text-[#0B1F3B] font-bold shadow-lg
                       hover:opacity-95 active:scale-[0.99] transition"
          >
            📞 Appel immédiat
          </a>
          <a
            href="/#tarifs"
            className="inline-flex items-center justify-center rounded-xl px-7 py-4
                       border border-[#eadfca] bg-white/80 text-[#0B1F3B] font-semibold
                       hover:shadow-md transition"
          >
            Voir les tarifs
          </a>
        </div>

        <section className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-6">
          {[
            {
              title: "Intervention rapide",
              desc: "Environ 30 minutes max selon circulation.",
            },
            {
              title: "Ouverture sans dégâts",
              desc: "Méthodes professionnelles, respect de votre porte.",
            },
            {
              title: "Tarifs transparents",
              desc: "Devis gratuit, prix annoncés, aucune surprise.",
            },
          ].map((c) => (
            <div
              key={c.title}
              className="rounded-3xl border border-[#eadfca] bg-white/80 p-7 shadow-sm hover:shadow-lg transition"
            >
              <div className="h-1 w-14 rounded-full bg-[#C9A24A] mb-5" />
              <h3 className="text-xl font-extrabold text-[#0B1F3B]">
                {c.title}
              </h3>
              <p className="mt-2 text-[#22314a] leading-relaxed">{c.desc}</p>
            </div>
          ))}
        </section>

        <div className="mt-14 text-sm text-[#22314a]">
          <a
            href="/mentions-legales"
            className="underline decoration-[#C9A24A] decoration-2 underline-offset-4 hover:opacity-80 transition"
          >
            Mentions légales
          </a>
        </div>
      </main>

      <footer className="py-10 text-center text-sm text-[#22314a] border-t border-[#eadfca]">
        © {new Date().getFullYear()} VSD Serrurerie — Intervention à {ville} et dans tout l’Eure-et-Loir (28)
      </footer>
    </div>
  );
}
