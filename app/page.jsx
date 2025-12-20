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
    <div className="pt-20 min-h-screen bg-[#fbf7ef] text-[#212529]">

      {/* HEADER */}
      <header
        className={`fixed top-0 left-0 w-full z-50 px-6 ${
          shrink ? "py-2 shadow-md" : "py-3 shadow-sm"
        } flex items-center justify-between bg-[#fbf7ef] border-b border-[#e8e0d2] transition-all duration-300`}
      >
        <img src="/logo.png" alt="VSD Serrurerie" className="h-12 w-auto" />

        <nav className="hidden md:flex items-center space-x-8 text-[#8a6a3a] font-medium">
          <a href="#services" className="hover:text-[#d4a856] transition">Dépannage</a>
          <a href="#tarifs" className="hover:text-[#d4a856] transition">Tarifs</a>
          <a href="#zones" className="hover:text-[#d4a856] transition">Zones</a>
          <a href="#contact" className="hover:text-[#d4a856] transition">Contact</a>
        </nav>

        <a
          href="tel:0652826311"
          className="hidden md:inline-block bg-[#d4a856] text-white py-2 px-6 rounded-lg shadow hover:bg-[#8a6a3a] transition font-semibold"
        >
          📞 06 52 82 63 11
        </a>

        <button className="md:hidden text-[#8a6a3a] text-3xl">☰</button>
      </header>

      {/* HERO */}
      <section className="relative px-6 pt-10 pb-16">
        <div className="absolute inset-0 opacity-10 bg-[url('https://images.unsplash.com/photo-1602080752272-5dfae6bd86c1')] bg-cover bg-center" />

        <div className="relative max-w-6xl mx-auto grid md:grid-cols-2 gap-10 items-center">
          <div>
            <h1 className="text-4xl md:text-5xl font-bold text-[#8a6a3a] mb-4">
              Serrurier à Chartres
            </h1>
            <p className="text-lg text-[#3a2b20] max-w-xl">
              Dépannage 24h/24 et 7j/7 • Artisan diplômé et assuré en garantie décennale.
              Intervention rapide, devis gratuit, règlement après prestation.
            </p>

            <a
              href="tel:0652826311"
              className="inline-block mt-6 bg-[#d4a856] text-white py-3 px-8 rounded-xl shadow-lg hover:bg-[#8a6a3a] transition font-semibold"
            >
              📞 Appel immédiat
            </a>
          </div>

          <div className="bg-white/80 backdrop-blur-md shadow-xl rounded-2xl p-8 border border-[#e8dcc7]">
            <h3 className="text-2xl font-bold text-[#8a6a3a] mb-4 text-center">
              Engagements & garanties
            </h3>
            <ul className="space-y-3 text-[#4a3b2d]">
              <li>✔ Artisan diplômé et assuré en garantie décennale</li>
              <li>✔ Devis gratuit avant toute intervention</li>
              <li>✔ Règlement après prestation</li>
              <li>✔ Intervention en 30 minutes maximum</li>
              <li>✔ Disponible 24h/24 et 7j/7</li>
              <li>✔ Ouverture sans dégâts au prix le plus juste</li>
              <li>✔ Aucune mauvaise surprise</li>
            </ul>
          </div>
        </div>
      </section>

      {/* SERVICES */}
      <section id="services" className="max-w-6xl mx-auto p-8 grid md:grid-cols-3 gap-6">
        {[
          { name: "Ouverture porte claquée", price: "À partir de 85 €" },
          { name: "Ouverture porte verrouillée", price: "À partir de 120 €" },
          { name: "Sécurisation après effraction", price: "Devis gratuit" },
        ].map((s) => (
          <div key={s.name} className="bg-[#fff8f0] rounded-xl shadow-lg p-6 border">
            <h3 className="text-xl font-semibold mb-2">{s.name}</h3>
            <p className="text-[#d4a856] text-2xl font-bold">{s.price}</p>
          </div>
        ))}
      </section>

      {/* TARIFS */}
      <section id="tarifs" className="bg-[#fff8f0] py-16">
        <div className="max-w-4xl mx-auto px-6">
          <h2 className="text-3xl font-bold text-center mb-8 text-[#8a6a3a]">
            Tarifs transparents
          </h2>
          <ul className="space-y-4 text-center">
            <li>🔑 Porte claquée : <strong>85 €</strong></li>
            <li>🔐 Porte verrouillée : <strong>120 €</strong></li>
            <li>🛠 Serrure / sécurisation : <strong>Devis gratuit</strong></li>
          </ul>
        </div>
      </section>

      {/* ZONES */}
      <section id="zones" className="py-16 text-center">
        <h2 className="text-3xl font-bold mb-4 text-[#8a6a3a]">
          Intervention dans tout l’Eure-et-Loir (28)
        </h2>
        <p className="max-w-3xl mx-auto opacity-80">
          Chartres, Lucé, Mainvilliers, Lèves, Dreux, Vernouillet,
          Nogent-le-Rotrou, Châteaudun et toutes les communes du 28.
        </p>
      </section>

      {/* CONTACT */}
      <section id="contact" className="bg-[#f3e8d9] py-16 text-center">
        <h2 className="text-3xl font-bold mb-4 text-[#8a6a3a]">
          🚨 Urgence serrurier – Intervention immédiate
        </h2>
        <p className="mb-8">
          Disponible 24h/24 et 7j/7 • Règlement après prestation
        </p>
        <a
          href="tel:0652826311"
          className="bg-[#d4a856] text-white py-3 px-10 rounded-xl shadow-lg hover:bg-[#8a6a3a] transition inline-block"
        >
          📞 Appel urgent
        </a>
      </section>

      {/* FOOTER */}
      <footer className="text-center py-10 text-sm opacity-70">
        © 2025 VSD Serrurerie – Artisan serrurier en Eure-et-Loir (28)
      </footer>
    </div>
  );
}
