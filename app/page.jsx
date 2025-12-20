"use client";
import React from "react";

export default function HomePage() {
  const [shrink, setShrink] = React.useState(false);

  React.useEffect(() => {
    const handleScroll = () => setShrink(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="pt-20 min-h-screen bg-[#f6f4fa] text-[#1f2933]">
      {/* HEADER */}
      <header
        className={`fixed top-0 left-0 w-full z-50 px-6 ${
          shrink ? "py-1 shadow-md" : "py-2 shadow-sm"
        } flex items-center justify-between bg-[#3d1e6d]/95 backdrop-blur-md border-b border-[#3d1e6d]/20 transition-all duration-300`}
      >
        <div className="text-white font-bold text-lg">
          VSD Serrurerie
        </div>

        <nav className="hidden md:flex items-center space-x-8 text-white font-medium">
          <a href="#services" className="hover:text-[#f5c400] transition">Dépannage</a>
          <a href="#tarifs" className="hover:text-[#f5c400] transition">Tarifs</a>
          <a href="#zones" className="hover:text-[#f5c400] transition">Zones</a>
          <a href="#contact" className="hover:text-[#f5c400] transition">Contact</a>
        </nav>

        <a
          href="tel:0652826311"
          className="hidden md:inline-block bg-[#f5c400] text-[#2a144d] py-2 px-6 rounded-lg shadow hover:bg-[#e0b000] transition font-bold"
        >
          📞 06 52 82 63 11
        </a>
      </header>

      {/* HERO */}
      <section className="px-6 pt-10 pb-20">
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12 items-center">
          <div>
            <h1 className="text-4xl md:text-5xl font-bold text-[#2a144d] mb-4">
              Serrurier à Chartres <span className="text-[#f5c400]">(28)</span>
            </h1>

            <p className="text-lg md:text-xl opacity-90 max-w-xl leading-relaxed">
              Artisan serrurier diplômé et assuré décennale.  
              Intervention rapide 24h/24 et 7j/7 dans tout l’Eure-et-Loir.
            </p>

            <ul className="mt-6 space-y-2 font-medium">
              <li>✔️ Devis gratuit</li>
              <li>✔️ Règlement après prestation</li>
              <li>✔️ Ouverture sans dégâts</li>
              <li>✔️ Intervention en 30 minutes max</li>
            </ul>

            <a
              href="tel:0652826311"
              className="inline-block mt-8 bg-[#f5c400] text-[#2a144d] py-4 px-10 rounded-xl shadow-lg hover:bg-[#e0b000] transition font-bold text-lg"
            >
              📞 Appel immédiat
            </a>
          </div>

          <div className="bg-white rounded-2xl shadow-xl p-8 border">
            <h3 className="text-2xl font-bold text-[#3d1e6d] mb-6 text-center">
              Prestations serrurerie
            </h3>
            <ul className="space-y-4 text-lg">
              <li>🔑 Ouverture de porte claquée</li>
              <li>🔐 Porte verrouillée / serrure cassée</li>
              <li>🛡️ Sécurisation après effraction</li>
              <li>🚪 Remplacement de serrure</li>
            </ul>
          </div>
        </div>
      </section>

      {/* TARIFS */}
      <section id="tarifs" className="bg-white py-20 border-t">
        <h2 className="text-3xl font-bold text-center text-[#3d1e6d] mb-12">
          Tarifs transparents
        </h2>

        <div className="max-w-5xl mx-auto grid md:grid-cols-3 gap-6 px-6">
          {[
            { name: "Ouverture porte claquée", price: "85€" },
            { name: "Porte verrouillée", price: "120€" },
            { name: "Sécurisation après effraction", price: "Sur devis" },
          ].map((t) => (
            <div
              key={t.name}
              className="bg-[#f6f4fa] rounded-xl shadow p-6 text-center border"
            >
              <h3 className="text-xl font-semibold mb-2">{t.name}</h3>
              <p className="text-3xl font-bold text-[#f5c400]">{t.price}</p>
            </div>
          ))}
        </div>
      </section>

      {/* ZONES */}
      <section id="zones" className="py-20 bg-[#f6f4fa] border-t">
        <h2 className="text-3xl font-bold text-center text-[#3d1e6d] mb-6">
          Zones d’intervention
        </h2>
        <p className="text-center max-w-3xl mx-auto opacity-80">
          Chartres • Lucé • Mainvilliers • Dreux • Châteaudun • Nogent-le-Rotrou  
          et toutes les communes de l’Eure-et-Loir (28)
        </p>
      </section>

      {/* CONTACT */}
      <section
        id="contact"
        className="bg-[#2a144d] text-white py-20 text-center"
      >
        <h2 className="text-3xl font-bold mb-4">
          🚨 Urgence serrurier 24h/24 – 7j/7
        </h2>
        <p className="opacity-90 mb-8">
          Intervention rapide – Prix justes – Aucune surprise
        </p>
        <a
          href="tel:0652826311"
          className="bg-[#f5c400] text-[#2a144d] py-4 px-12 rounded-xl shadow-lg hover:bg-[#e0b000] transition font-bold text-lg"
        >
          📞 Appeler maintenant
        </a>
      </section>

      {/* FOOTER */}
      <footer className="text-center py-10 text-sm opacity-70">
        © 2025 VSD Serrurerie – Artisan serrurier à Chartres et dans le 28
      </footer>
    </div>
  );
}
