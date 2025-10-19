function longestIncreasingSubsequence(nums) {
  const dp = [];
  for (let num of nums) {
    let left = 0, right = dp.length;
    while (left < right) {
      const mid = Math.floor((left + right) / 2);
      if (dp[mid] < num) left = mid + 1;
      else right = mid;
    }
    dp[left] = num;
  }
  return dp.length;
}

console.log(longestIncreasingSubsequence([10,9,2,5,3,7,101,18]));