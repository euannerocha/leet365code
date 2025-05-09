//SOLUTION

function longestSubarray(nums: number[]): number {
    let left = 0, right = 0;
    let maxCount = 0;
    let zeroCount = 0;
    
    while (right < nums.length) {
        if (nums[right] === 0) zeroCount++;
        
        while (zeroCount > 1) {
            if (nums[left] === 0) zeroCount--;
            left++;
        }
        
        maxCount = Math.max(maxCount, right - left);
        right++;
    }
    
    return maxCount;
}

// MY EXPLANATION ABOUT THE CODE
//I'm doing a list of LeetCode exercises (75 in total)

// EXERCISE

// Given a binary array nums, you should delete one element from it.

// Return the size of the longest non-empty subarray containing only 1's in the resulting array. Return 0 if there is no such subarray.

// Example 1:

// Input: nums = [1,1,0,1]
// Output: 3
// Explanation: After deleting the number in position 2, [1,1,1] contains 3 numbers with value of 1's.
// Example 2:

// Input: nums = [0,1,1,1,0,1,1,0,1]
// Output: 5
// Explanation: After deleting the number in position 4, [0,1,1,1,1,1,0,1] longest subarray with value of 1's is [1,1,1,1,1].
// Example 3:

// Input: nums = [1,1,1]
// Output: 2
// Explanation: You must delete one element.
 
// Constraints:

// 1 <= nums.length <= 105
// nums[i] is either 0 or 1.