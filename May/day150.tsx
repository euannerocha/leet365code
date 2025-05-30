function isIncreasingPattern(arr: number[]): boolean {
  return arr.every((val, i, a) => i === 0 || val > a[i - 1]);
}

function isDecreasingPattern(arr: number[]): boolean {
  return arr.every((val, i, a) => i === 0 || val < a[i - 1]);
}

function hasRepetition(arr: (string | number)[]): boolean {
  return new Set(arr).size !== arr.length;
}

function isPalindrome(text: string): boolean {
  const clean = text.toLowerCase().replace(/[^a-z0-9]/g, "");
  return clean === clean.split("").reverse().join("");
}

// Examples
const numbers1 = [1, 2, 3, 4, 5];
const numbers2 = [9, 7, 5, 5, 1];
const words = ["hello", "hello", "world"];
const phrase = "A man, a plan, a canal, Panama";

console.log("Increasing:", isIncreasingPattern(numbers1));
console.log("Decreasing:", isDecreasingPattern(numbers2));
console.log("Has repetition:", hasRepetition(words));
console.log("Is palindrome:", isPalindrome(phrase));