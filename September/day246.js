function secondLargest(arr) {
  let unique = [...new Set(arr)]
  if (unique.length < 2) return null
  unique.sort((a, b) => b - a)
  return unique[1]
}

console.log(secondLargest([10, 5, 8, 20, 20, 3]))