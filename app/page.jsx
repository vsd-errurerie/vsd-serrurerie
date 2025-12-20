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
    <div className="pt-20 min-h-screen bg-[#F5F1EA] text-[#1C1C1C]">
      {/* HEADER */}
      <header
        className={`fixed top-0 left-0 w-full z-50 px-6 transition-all duration-300 ${
          shrink ? "py-2 shadow-md" : "py-3"
        } bg-[#FBF8F3] border-b border-[#E2D6C8] flex items-center justify-between`}
      >
        <span className="font-semibold tracking-wide text-lg">
          VSD Serrurerie
        </span>

        <nav className="hidden md:flex space-x-8 text-sm font-medium">
          <a href="#services" className="hover:text-[#B87333] transition">
            Dépannage
          </a>
          <a href="#tarifs" className="hover:text-[#B87333] transition">
            Tarifs
          </a>
          <a href="#zones" className="hover:text-[#B87333] transition">
            Zones
          </a>
          <a href="#contact" className="hover:text-[#B87333] transition">
            Contact
          </a>
        </nav>

        <a
          href="tel:0652826311"
          className="hidden md:inline-block bg-[#B87333] text-white px-6 py-2 rounded-md font-semibold hover:bg-[#8A5A2B] transition"
        >
          📞 06 52 82 63 11
        </a>
      </header>

      {/* HERO */}
      <section className="px-6 pt-12 pb-20">
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-14 items-center">
          <div>
            <h1 className="text-4xl md:text-5xl font-bold leading-tight mb-6">
              Serrurier à Chartres{" "}
              <span className="text-[#B87333]">(28)</span>
            </h1>

            <p className="text-lg opacity-85 max-w-xl leading-relaxed">
              Artisan serrurier diplômé et assuré décennale.  
              Intervention rapide 24h/24 et 7j/7 dans tout l’Eure-et-Loir.
            </p>

            <ul className="mt-8 space-y-2 text-sm font-medium">
              <li>✔️ Devis gratuit</li>
              <li>✔️ Règlement après prestation</li>
              <li>✔️ Ouverture sans dégâts</li>
              <li>✔️ Intervention en 30 minutes max</li>
            </ul>

            <a
              href="tel:0652826311"
              className="inline-block mt-10 bg-[#B87333] text-white px-10 py-4 rounded-lg font-semibold shadow hover:bg-[#8A5A2B] transition"
            >
              📞 Appel immédiat
            </a>
          </div>

          <div className="bg-white rounded-xl shadow-lg p-8 border border-[#E2D6C8]">
            <h3 className="text-2xl font-semibold mb-6 text-center">
              Prestations serrurerie
            </h3>
            <ul className="space-y-4 text-base">
              <li>🔑 Ouverture de porte claquée</li>
              <li>🔐 Porte verrouillée / serrure cassée</li>
              <li>🛡️ Sécurisation après effraction</li>
              <li>🚪 Remplacement de serrure</li>
            </ul>
          </div>
        </div>
      </section>

      {/* TARIFS */}
      <section id="tarifs" className="py-20 bg-white border-t border-[#E2D6C8]">
        <h2 className="text-3xl font-semibold text-center mb-12">
          Tarifs clairs et transparents
        </h2>

        <div className="max-w-5xl mx-auto grid md:grid-cols-3 gap-6 px-6">
          {[
            { title: "Ouverture porte claquée", price: "85€" },
            { title: "Porte verrouillée", price: "120€" },
            { title: "Sécurisation après effraction", price: "Sur devis" },
          ].map((item) => (
            <div
              key={item.title}
              className="bg-[#F5F1EA] rounded-lg p-6 text-center border border-[#E2D6C8]"
            >
              <h3 className="font-medium mb-2">{item.title}</h3>
              <p className="text-2xl font-bold text-[#B87333]">
                {item.price}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* ZONES */}
      <section id="zones" className="py-20">
        <h2 className="text-3xl font-semibold text-center mb-6">
          Zones d’intervention
        </h2>
        <p className="text-center max-w-3xl mx-auto opacity-80 text-sm">
          Chartres • Lucé • Mainvilliers • Dreux • Châteaudun • Nogent-le-Rotrou •
          Maintenon • Épernon • et toutes les communes du 28.
        </p>
      </section>

      {/* CONTACT */}
      <section
        id="contact"
        className="bg-[#FBF8F3] py-20 text-center border-t border-[#E2D6C8]"
      >
        <h2 className="text-3xl font-semibold mb-4">
          Urgence serrurier 24h/24 – 7j/7
        </h2>
        <p className="opacity-80 mb-8">
          Artisan local de confiance – Prix justes – Aucune surprise
        </p>
        <a
          href="tel:0652826311"
          className="bg-[#B87333] text-white px-12 py-4 rounded-lg font-semibold hover:bg-[#8A5A2B] transition"
        >
          📞 Appeler maintenant
        </a>
      </section>

      {/* FOOTER */}
      <footer className="text-center py-10 text-xs opacity-70">
        © 2025 VSD Serrurerie – Artisan serrurier à Chartres et dans tout le 28
      </footer>
    </div>
  );
}
