const answers = [
  "The answer lies within you.",
  "Time will reveal the truth.",
  "Doubt is the beginning of wisdom.",
  "You already know the answer.",
  "Silence speaks louder than words.",
  "Seek, and you shall find.",
  "Reality is merely an illusion.",
  "Yes. And also no."
];

function askOracle(question: string): string {
  const response = answers[Math.floor(Math.random() * answers.length)];
  return `You asked: "${question}"\nOracle says: "${response}"`;
}

const question = "Should I learn TypeScript?";
console.log(askOracle(question));