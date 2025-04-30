//Simple gpt

type QA = {
  [question: string]: string;
};

function simpleGPT(input: string): string {
  const mockData: QA = {
    "What is the capital of France?": "The capital of France is Paris.",
    "Who discovered Brazil?": "Brazil was discovered by Pedro Álvares Cabral in 1500.",
    "What is 2 + 2?": "2 + 2 equals 4."
  };

  return mockData[input] || "Sorry, I don't know the answer to that.";
}

// Example usage
console.log(simpleGPT("What is the capital of France?")); // Output: The capital of France is Paris.
console.log(simpleGPT("Who is the president of Brazil?")); // Output: Sorry, I don't know the answer to that.