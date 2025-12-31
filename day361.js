function sumSubarrayMins(arr) {
  const MOD = 1e9 + 7;
  const stack = [];
  let res = 0;

  for (let i = 0; i <= arr.length; i++) {
    const cur = i === arr.length ? 0 : arr[i];

    while (stack.length && cur < arr[stack[stack.length - 1]]) {
      const mid = stack.pop();
      const left = stack.length ? mid - stack[stack.length - 1] : mid + 1;
      const right = i - mid;
      res = (res + arr[mid] * left * right) % MOD;
    }

    stack.push(i);
  }

  return res;
}