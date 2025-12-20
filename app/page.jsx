"use client";
import React from "react";

export default function HomePage() {
  const [shrink, setShrink] = React.useState(false);

  React.useEffect(() => {
    const onScroll = () => setShrink(window.scrollY > 30);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  /* COULEURS MAÎTRESSES (FIGÉES) */
  const BLUE = "#0A1A2F";     // BLEU LOGO
  const GOLD = "#b08a3c";     // DORÉ PREMIUM
  const BG = "#f6f1e8";       // FOND CHAUD

  return (
    <div className="pt-20 min-h-screen" style={{ backgroundColor: BG }}>
      {/* ================= HEADER ================= */}
      <header
        className={`fixed top-0 left-0 w-full z-50 px-6 transition-all duration-500 ${
          shrink ? "py-2 shadow-xl" : "py-3"
        }`}
        style={{ backgroundColor: `${BLUE}f2` }}
      >
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          <span className="text-white font-semibold tracking-wide text-lg">
            VSD Serrurerie
          </span>

          <nav className="hidden md:flex items-center gap-8 text-white/90 font-medium">
            {["Tarifs", "Zones", "Contact"].map((item) => (
              <a
                key={item}
                href={`#${item.toLowerCase()}`}
                className="relative after:absolute after:left-0 after:-bottom-1 after:h-[1px] after:w-0 after:bg-[var(--gold)] hover:after:w-full after:transition-all duration-300"
                style={{ ["--gold"]: GOLD }}
              >
                {item}
              </a>
            ))}
          </nav>

          <a
            href="tel:0652826311"
            className="hidden md:inline-block font-semibold py-2 px-6 rounded-lg shadow-lg hover:scale-[1.04] transition duration-300"
            style={{ backgroundColor: GOLD, color: BLUE }}
          >
            📞 06 52 82 63 11
          </a>
        </div>
      </header>

      {/* ================= HERO ================= */}
      <section className="relative px-6 pt-20 pb-28">
        <div className="absolute inset-0 opacity-10 bg-[url('https://images.unsplash.com/photo-1602080752272-5dfae6bd86c1')] bg-cover bg-center" />

        <div className="relative max-w-6xl mx-auto grid md:grid-cols-2 gap-16 items-center">
          {/* TEXTE */}
          <div className="animate-[fadeInUp_0.9s_ease-out]">
            <h1
              className="text-4xl md:text-5xl font-bold mb-6 leading-tight"
              style={{ color: BLUE }}
            >
              Serrurier à Chartres <br className="hidden md:block" />
              & Eure-et-Loir (28)
            </h1>

            <p className="text-lg md:text-xl opacity-90 max-w-xl leading-relaxed">
              Artisan serrurier diplômé et assuré décennale. Intervention rapide,
              ouverture sans dégâts, tarifs justes et transparents.
            </p>

            <a
              href="tel:0652826311"
              className="inline-block mt-10 py-4 px-10 rounded-xl shadow-xl font-semibold hover:scale-[1.06] transition duration-300"
              style={{ backgroundColor: GOLD, color: BLUE }}
            >
              📞 Appel immédiat
            </a>
          </div>

          {/* ================= ENGAGEMENTS ================= */}
          <div className="bg-white/90 backdrop-blur-md shadow-2xl rounded-2xl p-8 border border-[#e1d6c2] flex flex-col md:flex-row gap-10 items-center hover:shadow-[0_25px_70px_rgba(0,0,0,0.18)] transition duration-500">
            
            {/* TEXTE */}
            <div className="order-2 md:order-1">
              <h3
                className="text-2xl font-bold mb-4"
                style={{ color: BLUE }}
              >
                Engagements VSD Serrurerie
              </h3>
              <ul className="space-y-3 text-[#2b2b2b] text-sm md:text-base">
                <li>✔️ Artisan diplômé & assuré décennale</li>
                <li>✔️ Devis gratuit & tarifs annoncés</li>
                <li>✔️ Règlement après prestation</li>
                <li>✔️ Intervention en 30 minutes max</li>
                <li>✔️ Disponible 24h/24 – 7j/7</li>
                <li>✔️ Ouverture sans dégâts</li>
              </ul>
            </div>

            {/* LOGO */}
            <img
              src="/logo-vsd.png"
              alt="Logo VSD Serrurerie"
              className="order-1 md:order-2 w-36 md:w-44 h-auto opacity-95 hover:scale-[1.06] transition duration-300"
            />
          </div>
        </div>
      </section>

      {/* ================= TARIFS ================= */}
      <section id="tarifs" className="py-24 bg-[#fffaf2] border-t">
        <div className="max-w-6xl mx-auto px-6">
          <h2
            className="text-3xl md:text-4xl font-bold text-center mb-14"
            style={{ color: BLUE }}
          >
            Tarifs serrurerie
          </h2>

          <div className="grid md:grid-cols-2 gap-6">
            {[
              ["Ouverture porte simple fermée à clés", "130€ – 150€"],
              ["Ouverture porte blindée fermée à clés", "150€ – 210€"],
              ["Ouverture porte simple claquée", "110€ – 130€"],
              ["Ouverture porte blindée claquée", "150€ – 180€"],
              ["Serrure 1 point (fourniture + pose)", "150€ – 290€"],
              ["Serrure 3 points (fourniture + pose)", "290€ – 580€"],
              ["Serrure 5 points (fourniture + pose)", "310€ – 690€"],
              ["Serrure boîte aux lettres", "110€ – 140€"],
              ["Mise en sécurité après effraction", "Sur devis"],
            ].map(([name, price]) => (
              <div
                key={name}
                className="flex justify-between items-center bg-white rounded-xl p-5 shadow hover:shadow-xl hover:-translate-y-1 transition duration-300 border"
              >
                <span className="font-medium">{name}</span>
                <span className="font-bold" style={{ color: GOLD }}>
                  {price}
                </span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ================= CONTACT ================= */}
      <section
        id="contact"
        className="py-24 text-center"
        style={{ backgroundColor: BLUE, color: "white" }}
      >
        <h2 className="text-3xl md:text-4xl font-bold mb-6">
          🚨 Urgence serrurier – Intervention immédiate
        </h2>
        <p className="opacity-85 max-w-2xl mx-auto mb-10">
          Artisan local de confiance – aucune mauvaise surprise.
        </p>
        <a
          href="tel:0652826311"
          className="py-4 px-12 rounded-xl shadow-xl inline-block font-semibold hover:scale-[1.06] transition duration-300"
          style={{ backgroundColor: GOLD, color: BLUE }}
        >
          📞 Appeler maintenant
        </a>
      </section>

      {/* ================= FOOTER ================= */}
      <footer className="text-center py-10 text-sm opacity-70">
        © 2025 VSD Serrurerie – Artisan serrurier à Chartres & Eure-et-Loir
      </footer>
    </div>
  );
}
