"use client";
import React from "react";

export default function HomePage() {
  const [shrink, setShrink] = React.useState(false);

  React.useEffect(() => {
    const onScroll = () => setShrink(window.scrollY > 20);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <div className="pt-20 min-h-screen bg-[#F6F3ED] text-[#1A1A1A]">
      {/* HEADER */}
      <header
        className={`fixed top-0 left-0 w-full z-50 px-6 transition-all duration-300 ${
          shrink ? "py-2 shadow-lg" : "py-3"
        } bg-[#FBFAF7]/90 backdrop-blur-md border-b border-[#E5DCCB] flex items-center justify-between`}
      >
        <span className="font-semibold tracking-widest text-lg">
          VSD SERRURERIE
        </span>

        <nav className="hidden md:flex space-x-10 text-sm font-medium">
          {["Dépannage", "Tarifs", "Zones", "Contact"].map((item) => (
            <a
              key={item}
              href={`#${item.toLowerCase()}`}
              className="relative group"
            >
              <span className="group-hover:text-[#C9A24D] transition">
                {item}
              </span>
              <span className="absolute left-0 -bottom-1 w-0 h-[1px] bg-[#C9A24D] transition-all group-hover:w-full" />
            </a>
          ))}
        </nav>

        <a
          href="tel:0652826311"
          className="hidden md:inline-block bg-[#C9A24D] text-white px-7 py-2 rounded-md font-semibold transition hover:bg-[#9F7F2E] shadow-[0_0_20px_rgba(201,162,77,0.35)]"
        >
          📞 06 52 82 63 11
        </a>
      </header>

      {/* HERO */}
      <section className="px-6 pt-16 pb-24 relative overflow-hidden">
        {/* GOLD GLOW */}
        <div className="absolute -top-32 -right-32 w-[500px] h-[500px] bg-[#C9A24D]/20 rounded-full blur-[120px]" />

        <div className="relative max-w-6xl mx-auto grid md:grid-cols-2 gap-16 items-center">
          <div>
            <h1 className="text-4xl md:text-5xl font-bold leading-tight mb-6">
              Serrurier à Chartres{" "}
              <span className="text-[#C9A24D]">(28)</span>
            </h1>

            <p className="text-lg opacity-85 max-w-xl leading-relaxed">
              Artisan serrurier diplômé et assuré décennale.  
              Intervention rapide 24h/24 – 7j/7, ouverture sans dégâts,
              prix justes et transparents.
            </p>

            <div className="grid grid-cols-2 gap-3 mt-8 text-sm font-medium">
              {[
                "Devis gratuit",
                "Paiement après prestation",
                "Intervention < 30 min",
                "Disponible 24/7",
              ].map((t) => (
                <div
                  key={t}
                  className="bg-[#FBFAF7] border border-[#E5DCCB] rounded-lg px-4 py-3 hover:shadow-md transition"
                >
                  ✔️ {t}
                </div>
              ))}
            </div>

            <a
              href="tel:0652826311"
              className="inline-block mt-10 bg-[#C9A24D] text-white px-12 py-4 rounded-xl font-semibold transition hover:bg-[#9F7F2E] shadow-[0_10px_30px_rgba(201,162,77,0.35)] hover:scale-[1.03]"
            >
              📞 Appel immédiat
            </a>
          </div>

          {/* CARD */}
          <div className="bg-white/80 backdrop-blur-md rounded-2xl shadow-xl p-8 border border-[#E5DCCB] hover:shadow-2xl transition">
            <h3 className="text-2xl font-semibold mb-6 text-center">
              Prestations serrurerie
            </h3>
            <ul className="space-y-4 text-base">
              <li>🔑 Ouverture de porte claquée</li>
              <li>🔐 Porte verrouillée / serrure HS</li>
              <li>🛡️ Sécurisation après effraction</li>
              <li>🚪 Remplacement de serrure</li>
            </ul>
          </div>
        </div>
      </section>

      {/* TARIFS */}
      <section id="tarifs" className="py-24 bg-[#FBFAF7] border-t border-[#E5DCCB]">
        <h2 className="text-3xl font-semibold text-center mb-14">
          Tarifs transparents
        </h2>

        <div className="max-w-5xl mx-auto grid md:grid-cols-3 gap-8 px-6">
          {[
            { title: "Ouverture porte claquée", price: "85€" },
            { title: "Porte verrouillée", price: "120€" },
            { title: "Sécurisation après effraction", price: "Sur devis" },
          ].map((item) => (
            <div
              key={item.title}
              className="group bg-[#F6F3ED] rounded-xl p-8 text-center border border-[#E5DCCB] transition hover:-translate-y-2 hover:shadow-xl"
            >
              <h3 className="font-medium mb-3">{item.title}</h3>
              <p className="text-3xl font-bold text-[#C9A24D]">
                {item.price}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* CONTACT */}
      <section
        id="contact"
        className="py-24 text-center bg-gradient-to-b from-[#F6F3ED] to-[#FBFAF7] border-t border-[#E5DCCB]"
      >
        <h2 className="text-3xl font-semibold mb-6">
          Urgence serrurier – Intervention immédiate
        </h2>
        <p className="opacity-80 max-w-2xl mx-auto mb-10">
          Artisan local de confiance · Aucune surprise · Prix justes
        </p>
        <a
          href="tel:0652826311"
          className="bg-[#C9A24D] text-white px-14 py-4 rounded-xl font-semibold transition hover:bg-[#9F7F2E] shadow-[0_10px_40px_rgba(201,162,77,0.45)] hover:scale-[1.05]"
        >
          📞 Appeler maintenant
        </a>
      </section>

      {/* FOOTER */}
      <footer className="text-center py-10 text-xs opacity-70">
        © 2025 VSD Serrurerie – Artisan serrurier premium à Chartres (28)
      </footer>
    </div>
  );
}
