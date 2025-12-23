export default function sitemap() {
  const baseUrl = "https://www.vsd-serrurerie.com";

  const villes = [
    "chartres",
    "dreux",
    "chateaudun",
    "nogent-le-rotrou",
    "maintenon",
    "luisant",
    "lucé",
    "epernon",
    "auneau",
    "courville-sur-eure",
    "vernouillet",
    "mainvilliers",
    "senonches",
    "bonneval",
    "orgères-en-beauce",
    "janville-en-beauce",
    "voves",
    "illiers-combray",
    "brou",
    "la-loupe",
    "tremblay-les-villages",
    "gasville-oiseme",
    "saint-georges-sur-eure",
    "fontenay-sur-eure",
    "morancez",
    "barjouville",
    "le-coudray",
    "lèves",
    "berchères-les-pierres",
    "pezy",
    "bailleau-le-pin",
    "frazé",
    "thiron-gardais",
    "authon-du-perche",
    "unverre",
    "cloyes-les-trois-rivières",
    "arbouville",
    "marboué",
    "nottonville"
  ];

  const pages = [
    {
      url: baseUrl,
      lastModified: new Date(),
    },
  ];

  const villePages = villes.map((ville) => ({
    url: `${baseUrl}/serrurier-${ville}`,
    lastModified: new Date(),
  }));

  return [...pages, ...villePages];
}
