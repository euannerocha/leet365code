const prefixes = ["Xan", "Vor", "Zul", "Trex", "Kly", "Obe", "Mur", "Del"];
const suffixes = ["thar", "onia", "exis", "quon", "ara", "drax", "umi", "tor"];
const climates = ["lava-covered", "frozen", "toxic", "oceanic", "jungle", "crystal desert", "cloud city", "gas giant"];

function generatePlanetName(): string {
  const pre = prefixes[Math.floor(Math.random() * prefixes.length)];
  const suf = suffixes[Math.floor(Math.random() * suffixes.length)];
  return pre + suf;
}

function describePlanet(): string {
  const name = generatePlanetName();
  const climate = climates[Math.floor(Math.random() * climates.length)];
  return `Planet ${name} is a ${climate} world.`;
}

console.log(describePlanet());