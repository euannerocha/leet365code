function subarraysDivByK(nums, k) {
  const freq = new Map();
  freq.set(0, 1);

  let sum = 0;
  let res = 0;

  for (let n of nums) {
    sum = ((sum + n) % k + k) % k;
    res += freq.get(sum) || 0;
    freq.set(sum, (freq.get(sum) || 0) + 1);
  }

  return res;
}