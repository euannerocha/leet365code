def longest_str_chain(words):
    words.sort(key=len)
    dp = {}
    best = 1
    for w in words:
        dp[w] = 1
        for i in range(len(w)):
            prev = w[:i] + w[i+1:]
            if prev in dp:
                dp[w] = max(dp[w], dp[prev] + 1)
        best = max(best, dp[w])
    return best

print(longest_str_chain(["a","b","ba","bca","bda","bdca"]))