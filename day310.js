function longestMountain(arr) {
  let longest = 0, i = 1;
  while (i < arr.length - 1) {
    if (arr[i - 1] < arr[i] && arr[i] > arr[i + 1]) {
      let left = i - 1, right = i + 1;
      while (left > 0 && arr[left - 1] < arr[left]) left--;
      while (right < arr.length - 1 && arr[right] > arr[right + 1]) right++;
      longest = Math.max(longest, right - left + 1);
      i = right;
    } else {
      i++;
    }
  }
  return longest;
}

console.log(longestMountain([2,1,4,7,3,2,5]));