type QA = {
  category: string;
  questionKey: string;
  answer: string;
};

type HistoryEntry = {
  user: string;
  bot: string;
};

const knowledgeBase: QA[] = [
  { category: "Geography", questionKey: "capital of france", answer: "The capital of France is Paris." },
  { category: "History", questionKey: "discovered brazil", answer: "Brazil was discovered by Pedro Álvares Cabral in 1500." },
  { category: "Math", questionKey: "2 + 2", answer: "2 + 2 equals 4." },
  { category: "Math", questionKey: "3 * 3", answer: "3 * 3 equals 9." }
];

const conversationHistory: HistoryEntry[] = [];

function simpleGPT(input: string): string {
  const lowerInput = input.toLowerCase();

  // Busca por pergunta semelhante
  for (const item of knowledgeBase) {
    if (lowerInput.includes(item.questionKey)) {
      const response = `[${item.category}] ${item.answer}`;
      conversationHistory.push({ user: input, bot: response });
      return response;
    }
  }

  const fallback = "Sorry, I don't know the answer to that.";
  conversationHistory.push({ user: input, bot: fallback });
  return fallback;
}

// Exemplo de uso:
console.log(simpleGPT("What is the capital of France?"));
console.log(simpleGPT("Do you know who discovered Brazil?"));
console.log(simpleGPT("How much is 3 * 3?"));
console.log(simpleGPT("What is the capital of Italy?"));

console.log("\nConversation History:");
console.log(conversationHistory);