function chunkArray<T>(arr: T[], size: number): T[][] {
  const result: T[][] = [];
  for (let i = 0; i < arr.length; i += size) {
    result.push(arr.slice(i, i + size));
  }
  return result;
}

const data = [1, 2, 3, 4, 5, 6, 7];
const chunks = chunkArray(data, 3);
console.log(chunks);