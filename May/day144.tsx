const syllables = ["abra", "cad", "zor", "ven", "lum", "tar", "mi", "no", "xis", "tra"];
const effects = ["explodes", "glows", "vanishes", "shakes", "sings", "melts", "whispers", "dances"];

function createSpell(): string {
  const parts = Array.from({ length: 3 }, () => syllables[Math.floor(Math.random() * syllables.length)]);
  return parts.join("") + "!";
}

function castSpell(spell: string): string {
  const effect = effects[Math.floor(Math.random() * effects.length)];
  return `${spell} The air ${effect}.`;
}

const spell = createSpell();
console.log(castSpell(spell));