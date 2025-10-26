def removeDuplicates(nums):
    if len(nums) <= 2:
        return len(nums)
    
    slow = 2
    for fast in range(2, len(nums)):
        if nums[fast] != nums[slow-2]:
            nums[slow] = nums[fast]
            slow += 1
    return slow

nums1 = [1,1,1,2,2,3]
k1 = removeDuplicates(nums1)
print(k1, nums1[:k1])

nums2 = [0,0,1,1,1,1,2,3,3]
k2 = removeDuplicates(nums2)
print(k2, nums2[:k2])