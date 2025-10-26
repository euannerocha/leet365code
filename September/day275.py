def longestConsecutive(nums):
    num_set = set(nums)
    longest = 0
    
    for num in num_set:
        if num - 1 not in num_set:
            length = 1
            while num + length in num_set:
                length += 1
            longest = max(longest, length)
    
    return longest

print(longestConsecutive([100,4,200,1,3,2]))  
print(longestConsecutive([0,3,7,2,5,8,4,6,0,1]))  