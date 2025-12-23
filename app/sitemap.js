export default function sitemap() {
  const baseUrl = "https://vsd-serrurerie-z9ie.vercel.app";

  const cities = [
  "chartres",
  "dreux",
  "chateaudun",
  "nogent-le-rotrou",
  "luce",
  "mainvilliers",
  "vernouillet",
  "leves",
  "luisant",
  "maintenon",
  "epernon",
  "courville-sur-eure",
  "auneau-bleury-saint-symphorien",
  "gallardon",
  "bonneval",
  "cloyes-les-trois-rivieres",
  "les-villages-voveens",
  "brou",
  "illiers-combray",
  "orgeres-en-beauce",
  "senonches",
  "anet",
  "cherisy",
  "janville-en-beauce",
  "thiron-gardais",
  "la-loupe",
  "bailleau-le-pin",
  "le-coudray",
  "fontenay-sur-eure",
  "barjouville",
  "tremblay-les-villages",
  "saint-georges-sur-eure",
  "lormaye",
  "aunay-sous-auneau",
  "yevrem",
  "gasville-oiseme",
  "morancez",
  "nogent-le-phaye",
  "fresnay-le-comte",
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
