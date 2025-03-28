//SOLUTION

function maxVowels(s: string, k: number): number {
    const vowels = new Set(['a', 'e', 'i', 'o', 'u']);
    let maxCount = 0, currentCount = 0;

    for (let i = 0; i < k; i++) {
        if (vowels.has(s[i])) currentCount++;
    }
    maxCount = currentCount;

    for (let i = k; i < s.length; i++) {
        if (vowels.has(s[i])) currentCount++;
        if (vowels.has(s[i - k])) currentCount--;
        maxCount = Math.max(maxCount, currentCount);
    }
    
    return maxCount;
}


// MY EXPLANATION ABOUT THE CODE
//I'm doing a list of LeetCode exercises (75 in total)

// EXERCISE

// Given a string s and an integer k, return the maximum number of vowel letters in any substring of s with length k.

// Vowel letters in English are 'a', 'e', 'i', 'o', and 'u'.

// Example 1:

// Input: s = "abciiidef", k = 3
// Output: 3
// Explanation: The substring "iii" contains 3 vowel letters.
// Example 2:

// Input: s = "aeiou", k = 2
// Output: 2
// Explanation: Any substring of length 2 contains 2 vowels.
// Example 3:

// Input: s = "leetcode", k = 3
// Output: 2
// Explanation: "lee", "eet" and "ode" contain 2 vowels.

// Constraints:

// 1 <= s.length <= 105
// s consists of lowercase English letters.
// 1 <= k <= s.length