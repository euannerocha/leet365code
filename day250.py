def longest_unique_substring(s):
    seen = {}
    start = 0
    max_len = 0
    for i, c in enumerate(s):
        if c in seen and seen[c] >= start:
            start = seen[c] + 1
        seen[c] = i
        max_len = max(max_len, i - start + 1)
    return max_len

print(longest_unique_substring("abcabcbb"))