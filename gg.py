def maxEl(arr):
    max = float('-inf')
    for i in range(len(arr)):
        if max < arr[i]:
            max = arr[i]
    return max