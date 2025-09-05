def longest_common_substring(strings):
    if not strings:
        return ""
    shortest = min(strings, key=len)
    length = len(shortest)
    for l in range(length, 0, -1):
        for i in range(length - l + 1):
            sub = shortest[i:i + l]
            if all(sub in s for s in strings):
                return sub
    return ""

print(longest_common_substring(["interspecies", "interstellar", "interstate"]))