function cleanString(str: string): string {
  return str.replace(/\s/g, "").toLowerCase().split("").sort().join("");
}

function areAnagrams(str1: string, str2: string): boolean {
  return cleanString(str1) === cleanString(str2);
}

// Test cases
console.log(areAnagrams("listen", "silent"));      // true
console.log(areAnagrams("Triangle", "Integral"));  // true
console.log(areAnagrams("Apple", "Pabble"));       // false