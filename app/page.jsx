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
    <div className="pt-20 min-h-screen bg-[#f7f2e9] text-[#1c1c1c]">
      {/* ================= HEADER ================= */}
      <header
        className={`fixed top-0 left-0 w-full z-50 px-6 ${
          shrink ? "py-2 shadow-lg" : "py-3"
        } flex items-center justify-between bg-[#0b1e33]/95 backdrop-blur-md border-b border-white/10 transition-all duration-300`}
      >
        <span className="text-lg font-semibold tracking-wide text-white">
          VSD Serrurerie
        </span>

        <nav className="hidden md:flex items-center gap-8 text-white/90 font-medium">
          <a href="#services" className="hover:text-[#c9a24d] transition">
            Dépannage
          </a>
          <a href="#tarifs" className="hover:text-[#c9a24d] transition">
            Tarifs
          </a>
          <a href="#zones" className="hover:text-[#c9a24d] transition">
            Zones
          </a>
          <a href="#contact" className="hover:text-[#c9a24d] transition">
            Contact
          </a>
        </nav>

        <a
          href="tel:0652826311"
          className="hidden md:inline-block bg-[#c9a24d] text-[#0b1e33] py-2 px-6 rounded-lg font-semibold shadow hover:opacity-90 transition"
        >
          📞 06 52 82 63 11
        </a>
      </header>

      {/* ================= HERO ================= */}
      <section className="relative px-6 pt-12 pb-20">
        <div className="absolute inset-0 opacity-10 bg-[url('https://images.unsplash.com/photo-1602080752272-5dfae6bd86c1')] bg-cover bg-center" />

        <div className="relative max-w-6xl mx-auto grid md:grid-cols-2 gap-12 items-center">
          <div>
            <h1 className="text-4xl md:text-5xl font-bold text-[#0b1e33] mb-6">
              Serrurier à Chartres & Eure-et-Loir (28)
            </h1>
            <p className="text-lg md:text-xl opacity-90 max-w-xl leading-relaxed">
              Artisan serrurier diplômé et assuré décennale. Dépannage 24h/24 et
              7j/7, ouverture sans dégâts, tarifs justes et transparents.
            </p>

            <a
              href="tel:0652826311"
              className="inline-block mt-8 bg-[#c9a24d] text-[#0b1e33] py-3 px-8 rounded-xl shadow-lg hover:opacity-90 transition font-semibold"
            >
              📞 Appel immédiat
            </a>
          </div>

          {/* ================= ENGAGEMENTS ================= */}
          <div className="bg-white/85 backdrop-blur-md shadow-xl rounded-2xl p-8 border border-[#e2d7c5] flex gap-6 items-start">
            {/* LOGO */}
            <img
              src="/logo-vsd.png"
              alt="Logo VSD Serrurerie"
              className="w-20 h-auto opacity-90"
            />

            {/* TEXTE */}
            <div>
              <h3 className="text-2xl font-bold text-[#0b1e33] mb-4">
                Engagements VSD Serrurerie
              </h3>
              <ul className="space-y-3 text-[#2a2a2a]">
                <li>✔️ Artisan diplômé & assuré décennale</li>
                <li>✔️ Devis gratuit & prix annoncés</li>
                <li>✔️ Règlement après prestation</li>
                <li>✔️ Intervention en 30 minutes max</li>
                <li>✔️ Disponible 24h/24 – 7j/7</li>
                <li>✔️ Ouverture sans dégâts</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* ================= TARIFS ================= */}
      <section id="tarifs" className="py-16 bg-[#fff8ef] border-t">
        <div className="max-w-6xl mx-auto px-6">
          <h2 className="text-3xl font-bold text-center mb-10 text-[#0b1e33]">
            Tarifs serrurerie
          </h2>

          <div className="grid md:grid-cols-2 gap-6">
            {[
              ["Ouverture porte simple fermée à clés", "130€ – 150€"],
              ["Ouverture porte blindée fermée à clés", "150€ – 210€"],
              ["Ouverture porte simple claquée", "110€ – 130€"],
              ["Ouverture porte blindée claquée", "150€ – 180€"],
              ["Fourniture & pose serrure 1 point", "150€ – 290€"],
              ["Fourniture & pose serrure 3 points", "290€ – 580€"],
              ["Fourniture & pose serrure 5 points", "310€ – 690€"],
              ["Serrure boîte aux lettres", "110€ – 140€"],
              ["Mise en sécurité après effraction", "Sur devis"],
            ].map(([name, price]) => (
              <div
                key={name}
                className="flex justify-between items-center bg-white rounded-xl p-5 shadow border"
              >
                <span className="font-medium">{name}</span>
                <span className="font-bold text-[#c9a24d]">{price}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ================= CONTACT ================= */}
      <section
        id="contact"
        className="bg-[#0b1e33] text-white py-16 text-center"
      >
        <h2 className="text-3xl font-bold mb-4">
          🚨 Urgence serrurier – Intervention immédiate
        </h2>
        <p className="opacity-80 max-w-2xl mx-auto mb-8">
          Intervention rapide, sans surprise, par un artisan local de confiance.
        </p>
        <a
          href="tel:0652826311"
          className="bg-[#c9a24d] text-[#0b1e33] py-3 px-10 rounded-xl shadow-lg hover:opacity-90 transition inline-block font-semibold"
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
