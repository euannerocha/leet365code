const number = [1, 10, 18, 32, 89, 93];

let count = 0;

function sumArr(initialValue, arr) {
  const total = arr.reduce((acc, curr) => acc + curr, initialValue);
  return total;
}

console.log(sumArr(count, number));