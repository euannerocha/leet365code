function setZeroes(matrix) {
  const rows = new Set();
  const cols = new Set();
  for (let i = 0; i < matrix.length; i++) {
    for (let j = 0; j < matrix[0].length; j++) {
      if (matrix[i][j] === 0) {
        rows.add(i);
        cols.add(j);
      }
    }
  }
  for (let i of rows) {
    for (let j = 0; j < matrix[0].length; j++) {
      matrix[i][j] = 0;
    }
  }
  for (let j of cols) {
    for (let i = 0; i < matrix.length; i++) {
      matrix[i][j] = 0;
    }
  }
  return matrix;
}

console.log(setZeroes([
  [1, 1, 1],
  [1, 0, 1],
  [1, 1, 1]
]));