"use client";

import Image from "next/image";
import Link from "next/link";

const villesMap = {
  chartres: "Chartres",
  dreux: "Dreux",
  chateaudun: "Châteaudun",
  nogent_le_rotrou: "Nogent-le-Rotrou",
  luce: "Lucé",
  mainvilliers: "Mainvilliers",
  vernouillet: "Vernouillet",
  leves: "Lèves",
  luisant: "Luisant",
  maintenon: "Maintenon",
};

export default function VillePage({ params }) {
  const slug = params.ville;
  const ville = villesMap[slug] || slug.replace("-", " ");

  return (
    <main className="bg-[#fbf7ef] text-[#0b1220]">
      {/* HERO */}
      <section className="max-w-7xl mx-auto px-6 py-20 grid md:grid-cols-2 gap-12 items-center">
        <div>
          <h1 className="text-4xl md:text-5xl font-extrabold leading-tight">
            Serrurier à <span className="text-[#c9a24d]">{ville}</span> (28)
          </h1>

          <p className="mt-6 text-lg text-[#2a3342]">
            VSD Serrurerie intervient à <strong>{ville}</strong> pour tout
            dépannage serrurier : ouverture de porte, remplacement de serrure,
            sécurisation après effraction. Artisan diplômé et assuré
            décennale.
          </p>

          <ul className="mt-8 space-y-3 text-base">
            <li>✔ Intervention en moins de 30 minutes</li>
            <li>✔ Disponible 24h/24 – 7j/7</li>
            <li>✔ Ouverture sans dégâts</li>
            <li>✔ Tarifs annoncés à l’avance</li>
            <li>✔ Règlement après prestation</li>
          </ul>

          <a
            href="tel:0652826311"
            className="inline-flex items-center gap-3 mt-10 bg-[#c9a24d] hover:bg-[#b8943f] text-white font-semibold px-8 py-4 rounded-xl shadow-lg transition"
          >
            📞 Appel immédiat – 06 52 82 63 11
          </a>
        </div>

        {/* ENGAGEMENTS */}
        <div className="bg-white rounded-3xl shadow-xl p-10 flex flex-col md:flex-row items-center gap-8">
          <div className="flex-1">
            <h2 className="text-2xl font-bold mb-6">
              Engagements VSD Serrurerie
            </h2>
            <ul className="space-y-3 text-base">
              <li>✔ Artisan diplômé & assuré décennale</li>
              <li>✔ Devis gratuit – prix annoncés</li>
              <li>✔ Intervention rapide secteur {ville}</li>
              <li>✔ Aucune mauvaise surprise</li>
            </ul>
          </div>

          <Image
            src="/logo.png"
            alt="VSD Serrurerie"
            width={140}
            height={140}
            className="shrink-0"
          />
        </div>
      </section>

      {/* TARIFS */}
      <section className="bg-white py-20">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-3xl font-extrabold text-center">
            Tarifs serrurerie à {ville}
          </h2>
          <p className="text-center mt-4 text-[#2a3342]">
            Prix indicatifs – annoncés avant intervention
          </p>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mt-14">
            <Tarif
              title="Ouverture de porte simple fermée"
              price="130 – 150 €"
            />
            <Tarif
              title="Ouverture de porte claquée"
              price="110 – 130 €"
            />
            <Tarif
              title="Ouverture porte blindée"
              price="150 – 210 €"
            />
            <Tarif
              title="Changement de serrure 1 point"
              price="150 – 290 €"
            />
            <Tarif
              title="Serrure multipoints"
              price="290 – 580 €"
            />
            <Tarif
              title="Sécurisation après effraction"
              price="Sur devis"
            />
          </div>
        </div>
      </section>

      {/* ZONE LOCALE */}
      <section className="py-20 bg-[#fbf7ef]">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h2 className="text-3xl font-extrabold">
            Serrurier local à {ville} et alentours
          </h2>
          <p className="mt-6 text-lg text-[#2a3342]">
            Basée à Chartres, VSD Serrurerie intervient quotidiennement à{" "}
            <strong>{ville}</strong> et dans tout l’Eure-et-Loir (28), sans
            surcoût de déplacement.
          </p>

          <a
            href="tel:0652826311"
            className="inline-block mt-10 bg-[#0b2a4a] hover:bg-[#091f36] text-white font-semibold px-10 py-4 rounded-xl transition"
          >
            📞 Besoin d’un serrurier à {ville} ?
          </a>
        </div>
      </section>
    </main>
  );
}

function Tarif({ title, price }) {
  return (
    <div className="bg-[#fbf7ef] rounded-2xl p-6 shadow-md">
      <h3 className="font-bold text-lg">{title}</h3>
      <p className="mt-3 text-[#c9a24d] font-extrabold text-xl">{price}</p>
      <p className="mt-2 text-sm text-[#2a3342]">
        Devis gratuit – règlement après prestation
      </p>
    </div>
  );
}
