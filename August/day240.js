function spiralArray(n) {
  let result = Array.from({ length: n }, () => Array(n).fill(0))
  let value = 1, top = 0, bottom = n - 1, left = 0, right = n - 1
  
  while (top <= bottom && left <= right) {
    for (let i = left; i <= right; i++) result[top][i] = value++
    top++
    for (let i = top; i <= bottom; i++) result[i][right] = value++
    right--
    for (let i = right; i >= left; i--) result[bottom][i] = value++
    bottom--
    for (let i = bottom; i >= top; i--) result[i][left] = value++
    left++
  }
  return result
}

console.log(spiralArray(4))

// EXERCISE

*/Dado um número inteiro n, construa uma matriz n x n preenchida com números de 1 até n² em ordem espiral, começando do canto superior esquerdo.*/

