//SOLUTION

function reverseVowels(s: string): string {
    const vowels = new Set(['a', 'e', 'i', 'o', 'u', 'A', 'E', 'I', 'O', 'U']);
    const arr = s.split('');
    let left = 0, right = arr.length - 1;
    
    while (left < right) {
        while (left < right && !vowels.has(arr[left])) {
            left++;
        }
        while (left < right && !vowels.has(arr[right])) {
            right--;
        }
        
        [arr[left], arr[right]] = [arr[right], arr[left]]; 
        left++;
        right--;
    }
    
    return arr.join('');
}

// MY EXPLANATION ABOUT THE CODE
//I'm doing a list of LeetCode exercises (75 in total)


// EXERCISE

// Given a string s, reverse only all the vowels in the string and return it.

// The vowels are 'a', 'e', 'i', 'o', and 'u', and they can appear in both lower and upper cases, more than once.

// Example 1:

// Input: s = "IceCreAm"

// Output: "AceCreIm"

// Explanation:

// The vowels in s are ['I', 'e', 'e', 'A']. On reversing the vowels, s becomes "AceCreIm".

// Example 2:

// Input: s = "leetcode"

// Output: "leotcede"

// Constraints:

// 1 <= s.length <= 3 * 105
// s consist of printable ASCII characters.