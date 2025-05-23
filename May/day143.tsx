function getRandomNumber(min: number, max: number): number {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

function generateLotteryNumbers(quantity: number, min: number, max: number): number[] {
  const numbers: Set<number> = new Set();

  while (numbers.size < quantity) {
    numbers.add(getRandomNumber(min, max));
  }

  return Array.from(numbers).sort((a, b) => a - b);
}

const luckyNumbers = generateLotteryNumbers(6, 1, 60);
console.log("Lucky numbers:", luckyNumbers);