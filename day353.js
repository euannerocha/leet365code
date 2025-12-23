function wiggleSort(nums) {
  const sorted = [...nums].sort((a, b) => a - b);
  let mid = Math.floor((nums.length - 1) / 2);
  let end = nums.length - 1;

  for (let i = 0; i < nums.length; i++) {
    nums[i] = i % 2 === 0 ? sorted[mid--] : sorted[end--];
  }

  return nums;
}