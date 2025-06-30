const arr1 = [1, 2, 3];
const arr2 = [4, 5, 6];

const result: number[] = [];

for (let i = 0; i < arr1.length; i++) {
  result.push(arr1[i] + arr2[i]);
}

console.log(result); // [5, 7, 9]