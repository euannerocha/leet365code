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

const variations = [
  { pattern: ["capital", "france"], key: "capital of france" },
  { pattern: ["who", "discovered", "brazil"], key: "discovered brazil" },
  { pattern: ["quem", "descobriu", "brasil"], key: "discovered brazil" },
  { pattern: ["quanto", "2", "2"], key: "2 + 2" },
  { pattern: ["how", "much", "2", "2"], key: "2 + 2" }
];

const conversationHistory: HistoryEntry[] = [];
const stats: Record<Language, number> = { en: 0, pt: 0 };

function normalize(text: string): string {
  return text
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "") // remove accents
    .toLowerCase()
    .replace(/[^\w\s]/gi, ""); // remove punctuation
}

function detectLanguage(input: string): Language {
  const ptKeywords = ["quanto", "qual", "quem", "descobriu", "capital", "é", "do", "da", "brasil", "franca"];
  const enKeywords = ["what", "who", "how", "much", "is", "capital", "brazil", "france"];

  const norm = normalize(input);
  const ptMatches = ptKeywords.filter(word => norm.includes(word)).length;
  const enMatches = enKeywords.filter(word => norm.includes(word)).length;

  return ptMatches > enMatches ? "pt" : "en";
}

function matchKey(input: string): string | null {
  const words = normalize(input).split(/\s+/);

  for (const variation of variations) {
    const found = variation.pattern.every(p => words.includes(p));
    if (found) return variation.key;
  }

  return null;
}

function getAnswer(input: string, language: Language): string {
  const matchedKey = matchKey(input);

  if (matchedKey) {
    const item = knowledgeBase.find(kb => kb.questionKey === matchedKey);
    if (item) {
      return `[${item.category}] ${item.answers[language]}`;
    }
  }

  return language === "pt"
    ? "Desculpe, não sei a resposta para isso."
    : "Sorry, I don't know the answer to that.";
}

function simpleGPT(input: string): string {
  const language = detectLanguage(input);
  const response = getAnswer(input, language);

  conversationHistory.push({ user: input, bot: response, language });
  stats[language]++;
  return response;
}

// Example usage
console.log(simpleGPT("Qual é a capital da França?"));
console.log(simpleGPT("Who discovered Brazil?"));
console.log(simpleGPT("Quanto é 2 + 2?"));
console.log(simpleGPT("What is the capital of Italy?"));

console.log("\nConversation History:");
console.log(conversationHistory);

console.log("\nStats:");
console.log(stats);