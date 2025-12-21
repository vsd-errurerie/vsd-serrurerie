"use client";

import React from "react";

export default function HomePage() {
  const [shrink, setShrink] = React.useState(false);

  React.useEffect(() => {
    const onScroll = () => setShrink(window.scrollY > 18);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const phone = "06 52 82 63 11";
  const phoneHref = "tel:0652826311";

  const tarifs = [
    { title: "Ouverture de porte simple fermée à clés", price: "130–150€" },
    { title: "Ouverture de porte blindée fermée à clés", price: "150–210€" },
    { title: "Ouverture de porte simple claquée", price: "110–130€" },
    { title: "Ouverture de porte blindée claquée", price: "150–180€" },
    { title: "Fourniture & pose serrure 1 point", price: "150–290€" },
    { title: "Fourniture & pose serrure 3 points", price: "290–580€" },
    { title: "Fourniture & pose serrure 5 points", price: "310–690€" },
    { title: "Fourniture & pose serrure boîte aux lettres", price: "110–140€" },
    { title: "Mise en sécurité après effraction", price: "Sur devis" },
  ];

  const engagements = [
    "Artisan diplômé & assuré décennale",
    "Devis gratuit & tarifs annoncés",
    "Règlement après prestation",
    "Intervention en 30 minutes max",
    "Disponible 24h/24 – 7j/7",
    "Ouverture sans dégâts au prix le plus juste",
    "Aucune mauvaise surprise",
  ];

  return (
    <div className="min-h-screen bg-[#fbf7ef] text-[#0b1220]">
      {/* HEADER */}
      <header
        className={[
          "fixed top-0 left-0 right-0 z-50",
          "border-b border-white/10",
          "bg-[#0B1F3B]/95 backdrop-blur-md",
          "transition-all duration-300",
          shrink ? "py-2 shadow-lg" : "py-3 shadow-sm",
        ].join(" ")}
      >
        <div className="mx-auto max-w-6xl px-5 flex items-center justify-between">
          {/* Brand */}
          <div className="flex items-center gap-3">
            <span className="text-white font-semibold tracking-wide">
              VSD Serrurerie
            </span>
          </div>

          {/* Nav */}
          <nav className="hidden md:flex items-center gap-10 text-white/90 font-medium">
            <a href="#tarifs" className="hover:text-white transition">
              Tarifs
            </a>
            <a href="#zones" className="hover:text-white transition">
              Zones
            </a>
            <a href="#contact" className="hover:text-white transition">
              Contact
            </a>
          </nav>

          {/* Phone CTA */}
          <a
            href={phoneHref}
            className="inline-flex items-center gap-2 rounded-xl px-4 py-2 font-semibold
                       bg-[#C9A24A] text-[#0B1F3B] shadow hover:opacity-95 active:scale-[0.99] transition"
          >
            📞 <span>{phone}</span>
          </a>
        </div>
      </header>

      {/* HERO */}
      <section className="pt-24 md:pt-28">
        <div className="mx-auto max-w-6xl px-5">
          <div className="grid md:grid-cols-2 gap-10 items-center">
            {/* Left */}
            <div className="animate-[fadeIn_.6s_ease-out]">
              <h1 className="text-4xl md:text-6xl font-extrabold leading-tight text-[#0B1F3B]">
                Serrurier à Chartres
                <br />
                <span className="text-[#C9A24A]">&amp; Eure-et-Loir (28)</span>
              </h1>

              <p className="mt-5 text-lg md:text-xl text-[#22314a] leading-relaxed max-w-xl">
                Artisan serrurier diplômé et assuré décennale. Intervention rapide,
                ouverture sans dégâts, tarifs justes et transparents.
              </p>

              <div className="mt-7 flex flex-col sm:flex-row gap-4 sm:items-center">
                <a
                  href={phoneHref}
                  className="inline-flex items-center justify-center gap-2 rounded-xl px-7 py-4
                             bg-[#C9A24A] text-[#0B1F3B] font-bold shadow-lg
                             hover:opacity-95 active:scale-[0.99] transition"
                >
                  📞 Appel immédiat
                </a>
                <span className="text-[#22314a]">
                  Intervention en moins de <b>30 minutes</b>
                </span>
              </div>
            </div>

            {/* Right / Engagements card */}
            <div className="relative">
              <div className="absolute -inset-4 rounded-[28px] bg-gradient-to-br from-[#0B1F3B]/10 via-transparent to-[#C9A24A]/15 blur-2xl" />
              <div className="relative bg-white/90 border border-[#eadfca] rounded-3xl shadow-xl p-7 md:p-8">
                <h2 className="text-2xl font-extrabold text-[#0B1F3B]">
                  Engagements VSD Serrurerie
                </h2>

                <div className="mt-5 grid grid-cols-1 sm:grid-cols-[1fr_auto] gap-6 items-center">
                  <ul className="space-y-3 text-[#1f2b40]">
                    {engagements.map((t) => (
                      <li key={t} className="flex gap-2">
                        <span className="mt-[2px] text-[#0B1F3B]">✓</span>
                        <span>{t}</span>
                      </li>
                    ))}
                  </ul>

                  {/* Logo (dans le bloc, à droite, plus gros) */}
                  <div className="flex justify-center sm:justify-end">
                    <div className="rounded-2xl border border-[#eadfca] bg-white shadow-sm p-3">
                      {/* Mets ton logo ici: public/logo.png */}
                      <img
                        src="/logo.png"
                        alt="Logo VSD Serrurerie"
                        className="w-28 h-28 md:w-32 md:h-32 object-contain"
                        loading="eager"
                      />
                    </div>
                  </div>
                </div>

                <div className="mt-6 flex flex-wrap gap-3">
                  <span className="px-3 py-1 rounded-full bg-[#0B1F3B]/5 text-[#0B1F3B] text-sm border border-[#0B1F3B]/10">
                    Devis gratuit
                  </span>
                  <span className="px-3 py-1 rounded-full bg-[#C9A24A]/15 text-[#7a5c18] text-sm border border-[#C9A24A]/25">
                    Tarifs annoncés
                  </span>
                  <span className="px-3 py-1 rounded-full bg-[#0B1F3B]/5 text-[#0B1F3B] text-sm border border-[#0B1F3B]/10">
                    24/7
                  </span>
                </div>
              </div>
            </div>
          </div>

          {/* Divider */}
          <div className="mt-14 border-t border-[#eadfca]" />
        </div>
      </section>

      {/* PRESTATIONS */}
      <section className="py-14">
        <div className="mx-auto max-w-6xl px-5">
          <h2 className="text-3xl md:text-4xl font-extrabold text-[#0B1F3B] text-center">
            Nos prestations de serrurerie
          </h2>

          <div className="mt-10 grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              {
                title: "Ouverture de porte",
                desc: "Porte claquée, verrouillée, perte de clés.",
              },
              {
                title: "Remplacement de serrure",
                desc: "Serrures 1/3/5 points, multipoints, cylindre.",
              },
              {
                title: "Sécurisation",
                desc: "Après effraction, mise en sécurité, conseils.",
              },
            ].map((c) => (
              <div
                key={c.title}
                className="group rounded-3xl border border-[#eadfca] bg-white/80 shadow-sm p-7
                           hover:shadow-lg transition"
              >
                <div className="h-1 w-14 rounded-full bg-[#C9A24A] mb-5 group-hover:w-20 transition-all" />
                <h3 className="text-xl font-extrabold text-[#0B1F3B]">
                  {c.title}
                </h3>
                <p className="mt-2 text-[#22314a] leading-relaxed">{c.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* TARIFS */}
      <section id="tarifs" className="py-16 bg-white/50 border-y border-[#eadfca]">
        <div className="mx-auto max-w-6xl px-5">
          <h2 className="text-3xl md:text-4xl font-extrabold text-[#0B1F3B] text-center">
            Tarifs serrurerie
          </h2>
          <p className="mt-3 text-center text-[#22314a]">
            Prix indicatifs — le tarif est annoncé avant intervention.
          </p>

          <div className="mt-10 grid grid-cols-1 md:grid-cols-2 gap-6">
            {tarifs.map((t) => (
              <div
                key={t.title}
                className="rounded-2xl border border-[#eadfca] bg-white/90 p-6 shadow-sm
                           hover:shadow-md transition"
              >
                <div className="flex items-start justify-between gap-4">
                  <div>
                    <h3 className="font-bold text-[#0B1F3B]">{t.title}</h3>
                    <p className="mt-1 text-sm text-[#22314a]">
                      Devis gratuit — règlement après prestation
                    </p>
                  </div>
                  <div className="shrink-0 font-extrabold text-[#C9A24A] text-lg">
                    {t.price}
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-10 text-center">
            <a
              href={phoneHref}
              className="inline-flex items-center justify-center gap-2 rounded-xl px-7 py-4
                         bg-[#0B1F3B] text-white font-bold shadow-lg
                         hover:opacity-95 active:scale-[0.99] transition"
            >
              📞 Appeler pour un devis gratuit
            </a>
          </div>
        </div>
      </section>

      {/* ZONES */}
      <section id="zones" className="py-16">
        <div className="mx-auto max-w-6xl px-5 text-center">
          <h2 className="text-3xl md:text-4xl font-extrabold text-[#0B1F3B]">
            Zones d’intervention (28)
          </h2>
          <p className="mt-4 text-[#22314a] max-w-3xl mx-auto">
            Chartres • Lucé • Mainvilliers • Lèves • Luisant • Dreux • Vernouillet •
            Nogent-le-Rotrou • Châteaudun • Maintenon • Épernon • et toutes les communes du 28.
          </p>

          <div className="mt-8">
            <a
              href="/ville/chartres"
              className="inline-flex items-center gap-2 font-semibold text-[#0B1F3B] underline decoration-[#C9A24A] decoration-2 underline-offset-4 hover:opacity-80 transition"
            >
              Voir la page Chartres →
            </a>
          </div>
        </div>
      </section>

      {/* CONTACT */}
      <section id="contact" className="py-16 bg-[#0B1F3B] text-white">
        <div className="mx-auto max-w-6xl px-5 text-center">
          <h2 className="text-3xl md:text-4xl font-extrabold">
            Urgence serrurier — 24h/24 et 7j/7
          </h2>
          <p className="mt-4 text-white/85 max-w-2xl mx-auto">
            Ouverture de porte, remplacement de serrure, sécurisation après effraction.
            Intervention rapide et tarifs transparents.
          </p>

          <div className="mt-8">
            <a
              href={phoneHref}
              className="inline-flex items-center justify-center gap-2 rounded-xl px-8 py-4
                         bg-[#C9A24A] text-[#0B1F3B] font-extrabold shadow-lg
                         hover:opacity-95 active:scale-[0.99] transition"
            >
              📞 Appel urgent — {phone}
            </a>
          </div>

          <p className="mt-6 text-white/70 text-sm">
            Artisan diplômé et assuré décennale — devis gratuit — règlement après prestation.
          </p>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="py-10 text-center text-sm text-[#22314a]">
        © {new Date().getFullYear()} VSD Serrurerie — Serrurier à Chartres & Eure-et-Loir (28)
      </footer>

      {/* small keyframes */}
      <style jsx global>{`
        @keyframes fadeIn {
          from { opacity: 0; transform: translateY(8px); }
          to { opacity: 1; transform: translateY(0); }
        }
      `}</style>
    </div>
  );
}
