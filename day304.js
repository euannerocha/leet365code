function topKFrequent(nums, k) {
  const map = new Map();
  for (let num of nums) map.set(num, (map.get(num) || 0) + 1);
  const buckets = Array(nums.length + 1).fill().map(() => []);
  for (let [num, freq] of map) buckets[freq].push(num);
  const res = [];
  for (let i = buckets.length - 1; i >= 0 && res.length < k; i--) {
    res.push(...buckets[i]);
  }
  return res.slice(0, k);
}

console.log(topKFrequent([1,1,1,2,2,3], 2));