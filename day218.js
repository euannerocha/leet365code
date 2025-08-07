const numbers = [1, 2, 3, 4, 5, 6];

const doubledEvenNumbers = numbers
  .filter(num => num % 2 === 0)
  .map(num => num * 2);

console.log(doubledEvenNumbers);