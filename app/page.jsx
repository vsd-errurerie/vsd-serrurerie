"use client";

import Image from "next/image";

export const metadata = {
  title: "Serrurier à Chartres & Eure-et-Loir (28) – Dépannage 24h/24 | VSD Serrurerie",
  description:
    "VSD Serrurerie, artisan serrurier à Chartres et dans tout l’Eure-et-Loir (28). Dépannage 24h/24 et 7j/7, ouverture de porte sans dégâts, prix annoncés, intervention rapide.",
};

export default function HomePage() {
  return (
    <main className="bg-[#fbf7ef] text-[#1f2933]">
      {/* HERO */}
      <section className="max-w-7xl mx-auto px-6 py-20 grid md:grid-cols-2 gap-12 items-center">
        <div>
          <h1 className="text-4xl md:text-5xl font-extrabold leading-tight mb-6">
            Serrurier à <span className="text-[#c9a24d]">Chartres</span> &{" "}
            <span className="text-[#c9a24d]">Eure-et-Loir (28)</span>
          </h1>

          <p className="text-lg mb-6 leading-relaxed">
            Artisan serrurier diplômé et assuré décennale. Dépannage serrurerie
            <strong> 24h/24 et 7j/7</strong> : ouverture de porte, remplacement de
            serrure, sécurisation après effraction. Intervention rapide et
            tarifs transparents.
          </p>

          <a
            href="tel:0652826311"
            className="inline-flex items-center gap-2 bg-[#c9a24d] text-white px-8 py-4 rounded-xl shadow-lg hover:opacity-90 transition font-semibold"
          >
            📞 Appel immédiat – 06 52 82 63 11
          </a>
        </div>

        {/* ENGAGEMENTS */}
        <div className="bg-white rounded-2xl shadow-xl p-8 flex gap-6 items-center">
          <div className="flex-1">
            <h2 className="text-2xl font-bold mb-4">
              Engagements VSD Serrurerie
            </h2>
            <ul className="space-y-3">
              <li>✔ Artisan diplômé & assuré décennale</li>
              <li>✔ Devis gratuit – prix annoncés</li>
              <li>✔ Règlement après prestation</li>
              <li>✔ Intervention en 30 minutes max</li>
              <li>✔ Disponible 24h/24 – 7j/7</li>
              <li>✔ Ouverture sans dégâts</li>
            </ul>
          </div>

          <Image
            src="/logo.png"
            alt="VSD Serrurerie – Artisan serrurier"
            width={120}
            height={120}
            className="hidden md:block"
          />
        </div>
      </section>

      {/* TARIFS */}
      <section id="tarifs" className="bg-white py-20">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-3xl font-bold mb-10 text-center">
            Tarifs serrurerie
          </h2>

          <div className="grid md:grid-cols-2 gap-6">
            <ul className="space-y-3">
              <li>🔑 Ouverture porte simple fermée à clés : 130€ – 150€</li>
              <li>🔐 Ouverture porte blindée fermée à clés : 150€ – 210€</li>
              <li>🚪 Porte simple claquée : 110€ – 130€</li>
              <li>🛡 Porte blindée claquée : 150€ – 180€</li>
            </ul>
            <ul className="space-y-3">
              <li>🔧 Serrure 1 point (fourniture + pose) : 150€ – 290€</li>
              <li>🔧 Serrure 3 points : 290€ – 580€</li>
              <li>🔧 Serrure 5 points : 310€ – 690€</li>
              <li>📮 Serrure boîte aux lettres : 110€ – 140€</li>
              <li>🚨 Sécurisation après effraction : sur devis</li>
            </ul>
          </div>
        </div>
      </section>

      {/* ZONE */}
      <section className="py-16 bg-[#fbf7ef]">
        <div className="max-w-5xl mx-auto px-6 text-center">
          <h2 className="text-2xl font-bold mb-4">
            Intervention dans tout l’Eure-et-Loir (28)
          </h2>
          <p>
            Chartres, Dreux, Châteaudun, Lucé, Mainvilliers, Vernouillet,
            Nogent-le-Rotrou, Maintenon, Épernon et toutes les communes du 28.
          </p>
        </div>
      </section>
    </main>
  );
}
