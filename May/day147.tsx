const beginnings = ["When the soap falls", "If the water runs cold", "While the steam rises", "Before the shampoo ends"];
const middles = ["you will remember", "a truth will surface", "the silence will speak", "foam will guide you"];
const endings = ["but only if you dare to rinse", "unless the drain swallows it", "and the curtain stays closed", "in echoes of forgotten bubbles"];

function generateShowerProphecy(): string {
  const part1 = beginnings[Math.floor(Math.random() * beginnings.length)];
  const part2 = middles[Math.floor(Math.random() * middles.length)];
  const part3 = endings[Math.floor(Math.random() * endings.length)];
  return `${part1}, ${part2} ${part3}.`;
}

console.log(generateShowerProphecy());