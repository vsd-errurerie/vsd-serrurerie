export default function VillePage({ params }) {
  const ville = params.ville.replace(/-/g, " ");

  return (
    <main className="max-w-4xl mx-auto p-6">
      <h1 className="text-3xl font-bold mb-4">
        Serrurier à {ville}
      </h1>

      <p>
        Intervention rapide à {ville} pour porte claquée, serrure bloquée
        ou sécurisation après effraction.
      </p>
    </main>
  );
}
