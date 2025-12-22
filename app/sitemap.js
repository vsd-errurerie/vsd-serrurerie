export default function sitemap() {
  const baseUrl = "https://vsd-serrurerie-z9ie.vercel.app";

  const cities = [
    "chartres",
    "dreux",
    "chateaudun",
    "nogent-le-rotrou",
    "lucé",
    "vernouillet",
    "maintenon",
    "senonches",
    "epernon",
    "luisant"
  ];

  const cityPages = cities.map((city) => ({
    url: `${baseUrl}/ville/${city}`,
    lastModified: new Date(),
  }));

  return [
    {
      url: baseUrl,
      lastModified: new Date(),
    },
    ...cityPages,
  ];
}
