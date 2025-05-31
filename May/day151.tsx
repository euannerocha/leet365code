const verbs = ["absorbs", "rejects", "interprets", "consumes", "reflects", "transcends"];
const objects = ["the moonlight", "quantum soup", "eternal cheese", "inverted rainbows", "the void", "your shoelace"];
const outcomes = ["silently", "with regret", "in harmony", "while tap dancing", "at dusk", "as expected"];

function askTurtle(question: string): string {
  const verb = verbs[Math.floor(Math.random() * verbs.length)];
  const object = objects[Math.floor(Math.random() * objects.length)];
  const outcome = outcomes[Math.floor(Math.random() * outcomes.length)];

  return `The Cosmic Turtle ${verb} ${object} ${outcome}.`;
}

const userQuestion = "Should I eat that third slice of pizza?";
console.log(`Question: ${userQuestion}`);
console.log(askTurtle(userQuestion));