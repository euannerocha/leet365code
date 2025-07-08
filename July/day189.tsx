const numbers: number[] = [1, 4, 7, 10, 13, 16, 19, 20];

function filterEven(arr: number[]): number[] {
  return arr.filter(n => n % 2 === 0);
}

const result = filterEven(numbers);
console.log(result);