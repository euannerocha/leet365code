function median(arr) {
  if (!Array.isArray(arr) || arr.length === 0) return null;
  const a = arr.slice().sort((x, y) => x - y);
  const n = a.length;
  const mid = Math.floor(n / 2);
  return n % 2 === 1 ? a[mid] : (a[mid - 1] + a[mid]) / 2;
}