# Solution

class Solution:
    def twoSum(self, nums: list[int], target: int) -> list[int]:
        num_map = {}
        for i, num in enumerate(nums):
            diff = target - num
            if diff in num_map:
                return [num_map[diff], i]
            num_map[num] = i


# Exercise

# //Title: Two Sum
# //Difficulty: Easy

# //Description:
# Given an array of integers nums and an integer target, return the indices of the two numbers such that they add up to target.

# You may assume that each input would have exactly one solution, and you may not use the same element twice.

# Example:

# Input: nums = [2,7,11,15], target = 9  
# Output: [0,1]

# Explanation: nums[0] + nums[1] = 2 + 7 = 9.
# #

