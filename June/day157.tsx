function sumOfSquares(numbers: number[]): number {
  return numbers.reduce((sum, num) => sum + num * num, 0);
}

const testInput = [1, 2, 3, 4];
const expectedOutput = 30;
const result = sumOfSquares(testInput);

if (result === expectedOutput) {
  console.log("Test passed");
} else {
  console.log(`Test failed: expected ${expectedOutput}, got ${result}`);
}