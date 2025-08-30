function chunkArray(arr, k) {
  let result = []
  for (let i = 0; i < arr.length; i += k) {
    let chunk = arr.slice(i, i + k)
    while (chunk.length < k) chunk.push(0)
    result.push(chunk)
  }
  return result
}

console.log(chunkArray([1, 2, 3, 4, 5, 6, 7], 3))

// EXERCISE

*/

Dado um array de inteiros, divida-o em subarrays de tamanho k. Se o último grupo não tiver k elementos, complete-o com zeros até atingir o tamanho. Retorne a lista de subarrays.

*/

