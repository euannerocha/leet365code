def letter_combinations(digits):
    if not digits:
        return []
    mapping = {
        "2": "abc", "3": "def", "4": "ghi", "5": "jkl",
        "6": "mno", "7": "pqrs", "8": "tuv", "9": "wxyz"
    }
    res = []
    def backtrack(index, path):
        if index == len(digits):
            res.append("".join(path))
            return
        for char in mapping[digits[index]]:
            backtrack(index + 1, path + [char])
    backtrack(0, [])
    return res

print(letter_combinations("23"))