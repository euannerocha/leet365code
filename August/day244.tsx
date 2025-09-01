function twoSumPairs(arr, target) {
  let seen = new Set()
  let result = []
  for (let num of arr) {
    let complement = target - num
    if (seen.has(complement)) {
      result.push([complement, num])
    }
    seen.add(num)
  }
  return result
}

console.log(twoSumPairs([2, 4, 3, 5, 7, 8, -1], 7))