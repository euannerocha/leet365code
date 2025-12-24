function longestMountain(arr) {
  let res = 0;
  let i = 1;

  while (i < arr.length - 1) {
    if (arr[i - 1] < arr[i] && arr[i] > arr[i + 1]) {
      let l = i - 1;
      let r = i + 1;

      while (l > 0 && arr[l - 1] < arr[l]) l--;
      while (r < arr.length - 1 && arr[r] > arr[r + 1]) r++;

      res = Math.max(res, r - l + 1);
      i = r;
    } else {
      i++;
    }
  }

  return res;
}