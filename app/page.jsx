"use client";
import React from "react";

export const metadata = {
  title: "VSD Serrurerie – Serrurier à Chartres & Eure-et-Loir (28)",
  description:
    "Serrurier à Chartres et dans tout le 28. Artisan diplômé et assuré décennale. Dépannage serrurerie 24h/24, ouverture sans dégâts, tarifs justes.",
};

export default function HomePage() {
  const [shrink, setShrink] = React.useState(false);

  React.useEffect(() => {
    const onScroll = () => setShrink(window.scrollY > 30);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const BLUE = "#0A1A2F";
  const GOLD = "#b08a3c";
  const BG = "#f6f1e8";

  return (
    <div className="pt-20 min-h-screen" style={{ backgroundColor: BG }}>
      {/* HEADER */}
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

          <nav className="hidden md:flex gap-8 text-white/90 font-medium">
            <a href="#tarifs" className="hover:text-[#b08a3c] transition">
              Tarifs
            </a>
            <a href="#contact" className="hover:text-[#b08a3c] transition">
              Contact
            </a>
          </nav>

          <a
            href="tel:0652826311"
            className="hidden md:inline-block font-semibold py-2 px-6 rounded-lg shadow-lg hover:scale-[1.04] transition"
            style={{ backgroundColor: GOLD, color: BLUE }}
          >
            📞 06 52 82 63 11
          </a>
        </div>
      </header>

      {/* HERO */}
      <section className="relative px-6 pt-20 pb-28">
        <div className="absolute inset-0 opacity-10 bg-[url('https://images.unsplash.com/photo-1602080752272-5dfae6bd86c1')] bg-cover bg-center" />

        <div className="relative max-w-6xl mx-auto grid md:grid-cols-2 gap-16 items-center">
          <div>
            <h1 className="text-4xl md:text-5xl font-bold mb-6" style={{ color: BLUE }}>
              Serrurier à Chartres & Eure-et-Loir (28)
            </h1>

            <p className="text-lg md:text-xl opacity-90 max-w-xl leading-relaxed">
              Artisan serrurier diplômé et assuré décennale. Intervention rapide
              24h/24, ouverture sans dégâts, tarifs clairs.
            </p>

            <a
              href="tel:0652826311"
              className="inline-block mt-10 py-4 px-10 rounded-xl shadow-xl font-semibold hover:scale-[1.06] transition"
              style={{ backgroundColor: GOLD, color: BLUE }}
            >
              📞 Appel immédiat
            </a>
          </div>

          <div className="bg-white/90 backdrop-blur-md shadow-2xl rounded-2xl p-8 border flex flex-col md:flex-row gap-10 items-center">
            <div>
              <h3 className="text-2xl font-bold mb-4" style={{ color: BLUE }}>
                Engagements VSD Serrurerie
              </h3>
              <ul className="space-y-3 text-sm md:text-base">
                <li>✔️ Artisan diplômé & assuré décennale</li>
                <li>✔️ Devis gratuit & prix annoncés</li>
                <li>✔️ Intervention en 30 minutes</li>
                <li>✔️ Disponible 24h/24 – 7j/7</li>
                <li>✔️ Ouverture sans dégâts</li>
              </ul>
            </div>

            <img
              src="/logo-vsd.png"
              alt="Logo VSD Serrurerie"
              className="w-40 md:w-44 h-auto"
            />
          </div>
        </div>
      </section>

      {/* TARIFS */}
      <section id="tarifs" className="py-24 bg-[#fffaf2] border-t">
        <div className="max-w-6xl mx-auto px-6">
          <h2 className="text-3xl font-bold text-center mb-14" style={{ color: BLUE }}>
            Tarifs serrurerie
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
                className="flex justify-between items-center bg-white rounded-xl p-5 shadow border"
              >
                <span>{name}</span>
                <span className="font-bold" style={{ color: GOLD }}>
                  {price}
                </span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CONTACT */}
      <section
        id="contact"
        className="py-24 text-center"
        style={{ backgroundColor: BLUE, color: "white" }}
      >
        <h2 className="text-3xl font-bold mb-6">
          🚨 Urgence serrurier – Intervention immédiate
        </h2>
        <a
          href="tel:0652826311"
          className="py-4 px-12 rounded-xl shadow-xl inline-block font-semibold hover:scale-[1.06] transition"
          style={{ backgroundColor: GOLD, color: BLUE }}
        >
          📞 Appeler maintenant
        </a>
      </section>
    </div>
  );
}
