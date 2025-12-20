function subarraySum(nums, k) {
  const map = new Map();
  map.set(0, 1);

  let sum = 0;
  let count = 0;

  for (let n of nums) {
    sum += n;
    count += map.get(sum - k) || 0;
    map.set(sum, (map.get(sum) || 0) + 1);
  }

  return count;
}