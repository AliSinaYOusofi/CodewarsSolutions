def find_uniq(arr):
    unique = ''
    for i in arr:
        if (arr.count(i) == 1):
            unique = i
            break
    return unique