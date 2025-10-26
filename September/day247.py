def unique_twice(nums):
    return [n for n in nums if nums.count(n) == 1]

print(unique_twice([1, 2, 3, 2, 4, 5, 1, 1, 6, 2]))

