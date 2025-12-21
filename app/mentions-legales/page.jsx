export const metadata = {
  title: "Mentions légales – VSD Serrurerie",
  description:
    "Mentions légales du site VSD Serrurerie – Artisan serrurier à Chartres et en Eure-et-Loir (28).",
};

export default function MentionsLegales() {
  return (
    <main className="min-h-screen bg-[#fbf7ef] text-[#212529] px-6 py-20">
      <div className="max-w-4xl mx-auto space-y-8">
        <h1 className="text-3xl md:text-4xl font-bold text-[#8a6a3a]">
          Mentions légales
        </h1>

        <section className="space-y-2">
          <h2 className="text-xl font-semibold">Éditeur du site</h2>
          <p>
            <strong>VSD Serrurerie</strong>
            <br />
            Artisan serrurier
            <br />
            Chartres – Eure-et-Loir (28)
          </p>
          <p>
            Téléphone : <a href="tel:0652826311">06 52 82 63 11</a>
            <br />
            Email :{" "}
            <a href="mailto:contact@vsd-serrurerie.fr">
              contact@vsd-serrurerie.fr
            </a>
          </p>
        </section>

        <section className="space-y-2">
          <h2 className="text-xl font-semibold">Statut & assurances</h2>
          <p>
            Artisan serrurier diplômé et assuré.
            <br />
            Assurance responsabilité civile professionnelle et garantie
            décennale.
          </p>
        </section>

        <section className="space-y-2">
          <h2 className="text-xl font-semibold">Hébergement</h2>
          <p>
            Le site est hébergé par :
            <br />
            <strong>Vercel Inc.</strong>
            <br />
            440 N Barranca Ave #4133
            <br />
            Covina, CA 91723 – États-Unis
            <br />
            <a
              href="https://vercel.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              https://vercel.com
            </a>
          </p>
        </section>

        <section className="space-y-2">
          <h2 className="text-xl font-semibold">Responsabilité</h2>
          <p>
            L’éditeur du site s’efforce de fournir des informations aussi
            précises que possible. Toutefois, il ne pourra être tenu responsable
            des omissions, inexactitudes ou carences dans la mise à jour.
          </p>
        </section>

        <section className="space-y-2">
          <h2 className="text-xl font-semibold">Propriété intellectuelle</h2>
          <p>
            L’ensemble du contenu du site (textes, images, logo, design) est
            protégé par le droit de la propriété intellectuelle. Toute
            reproduction est interdite sans autorisation préalable.
          </p>
        </section>
      </div>
    </main>
  );
}
