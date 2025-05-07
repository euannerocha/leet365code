type Language = "en" | "pt";

type QA = {
  category: string;
  questionKey: string;
  answers: { [lang in Language]: string };
};

type HistoryEntry = {
  user: string;
  bot: string;
  language: Language;
};

const knowledgeBase: QA[] = [
  {
    category: "Geography",
    questionKey: "capital of france",
    answers: {
      en: "The capital of France is Paris.",
      pt: "A capital da França é Paris."
    }
  },
  {
    category: "History",
    questionKey: "discovered brazil",
    answers: {
      en: "Brazil was discovered by Pedro Álvares Cabral in 1500.",
      pt: "O Brasil foi descoberto por Pedro Álvares Cabral em 1500."
    }
  },
  {
    category: "Math",
    questionKey: "2 + 2",
    answers: {
      en: "2 + 2 equals 4.",
      pt: "2 + 2 é igual a 4."
    }
  }
];

const conversationHistory: HistoryEntry[] = [];

// Detecta o idioma com base em palavras simples
function detectLanguage(input: string): Language {
  const ptKeywords = ["quanto", "qual", "quem", "descobriu", "capital", "é", "do", "da"];
  const inputLower = input.toLowerCase();

  const matchesPT = ptKeywords.some(word => inputLower.includes(word));
  return matchesPT ? "pt" : "en";
}

function simpleGPT(input: string): string {
  const language = detectLanguage(input);
  const lowerInput = input.toLowerCase();

  for (const item of knowledgeBase) {
    if (lowerInput.includes(item.questionKey)) {
      const response = `[${item.category}] ${item.answers[language]}`;
      conversationHistory.push({ user: input, bot: response, language });
      return response;
    }
  }

  const fallback = language === "pt"
    ? "Desculpe, não sei a resposta para isso."
    : "Sorry, I don't know the answer to that.";
    
  conversationHistory.push({ user: input, bot: fallback, language });
  return fallback;
}

// Testes
console.log(simpleGPT("Qual é a capital da França?"));
console.log(simpleGPT("Who discovered Brazil?"));
console.log(simpleGPT("Quanto é 2 + 2?"));
console.log(simpleGPT("What is the capital of Italy?"));

console.log("\nConversation History:");
console.log(conversationHistory);