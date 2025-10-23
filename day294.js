function mergeSortedArrays(nums1, m, nums2, n) {
  let i = m - 1, j = n - 1, k = m + n - 1;
  while (j >= 0) {
    if (i >= 0 && nums1[i] > nums2[j]) {
      nums1[k--] = nums1[i--];
    } else {
      nums1[k--] = nums2[j--];
    }
  }
  return nums1;
}

console.log(mergeSortedArrays([1,2,3,0,0,0], 3, [2,5,6], 3));