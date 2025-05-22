const frases: string[] = [
  "olá mundo",
  "typescript é legal",
  "estou aprendendo programação",
  "isso é divertido"
];

function capitalizeWords(frase: string): string {
  return frase
    .split(" ")
    .map(palavra => palavra.charAt(0).toUpperCase() + palavra.slice(1))
    .join(" ");
}

frases.forEach(frase => {
  console.log(capitalizeWords(frase));
});