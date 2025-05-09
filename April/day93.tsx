//SOLUTION

function closeStrings(word1: string, word2: string): boolean {
    if (word1.length !== word2.length) return false;
    
    const freq1 = new Map<string, number>();
    const freq2 = new Map<string, number>();
    
    for (const char of word1) {
        freq1.set(char, (freq1.get(char) || 0) + 1);
    }
    for (const char of word2) {
        freq2.set(char, (freq2.get(char) || 0) + 1);
    }
    
    const keys1 = [...freq1.keys()].sort();
    const keys2 = [...freq2.keys()].sort();
    if (keys1.join('') !== keys2.join('')) return false;
    
    const values1 = [...freq1.values()].sort((a, b) => a - b);
    const values2 = [...freq2.values()].sort((a, b) => a - b);
    
    return values1.join('') === values2.join('');
}

// MY EXPLANATION ABOUT THE CODE
//I'm doing a list of LeetCode exercises (75 in total)

// EXERCISE

// Two strings are considered close if you can attain one from the other using the following operations:

// Operation 1: Swap any two existing characters.
// For example, abcde -> aecdb
// Operation 2: Transform every occurrence of one existing character into another existing character, and do the same with the other character.
// For example, aacabb -> bbcbaa (all a's turn into b's, and all b's turn into a's)
// You can use the operations on either string as many times as necessary.

// Given two strings, word1 and word2, return true if word1 and word2 are close, and false otherwise.

// Example 1:

// Input: word1 = "abc", word2 = "bca"
// Output: true
// Explanation: You can attain word2 from word1 in 2 operations.
// Apply Operation 1: "abc" -> "acb"
// Apply Operation 1: "acb" -> "bca"
// Example 2:

// Input: word1 = "a", word2 = "aa"
// Output: false
// Explanation: It is impossible to attain word2 from word1, or vice versa, in any number of operations.
// Example 3:

// Input: word1 = "cabbba", word2 = "abbccc"
// Output: true
// Explanation: You can attain word2 from word1 in 3 operations.
// Apply Operation 1: "cabbba" -> "caabbb"
// Apply Operation 2: "caabbb" -> "baaccc"
// Apply Operation 2: "baaccc" -> "abbccc"

// Constraints:

// 1 <= word1.length, word2.length <= 105
// word1 and word2 contain only lowercase English letters.