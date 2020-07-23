---
title: "백준알고리즘 - 11004. K 번째 수"
date: "2020-07-23T11:31:00.104Z"
category: "algorithm"
emoji: "🏈"
---

## 백준알고리즘 -11004. K 번째 수

- 관련된 알고리즘 : Sort

### 문제

수 N개 A1, A2, ..., AN이 주어진다. A를 오름차순 정렬했을 때, 앞에서부터 K번째 있는 수를 구하는 프로그램을 작성하시오.

### 입력

첫째 줄에 N(1 ≤ N ≤ 5,000,000)과 K (1 ≤ K ≤ N)이 주어진다.

둘째에는 A1, A2, ..., AN이 주어진다. (-109 ≤ Ai ≤ 109)

### 출력

A를 정렬했을 때, 앞에서부터 K번째 있는 수를 출력한다.

### 예제

```
Input : 5 2
        4 1 2 3 5
Output : 2
```

### 해결 1

```python
# 초기값
n, k = map(int, input().split(' '))
data = list(map(int, input().split(' ')))

array = list()

# 리스트에 입력값 추가
for i in data:
    array.append(i)
    
sort = sorted(array)

if n >= k:
    print(sort[k - 1])
else:
    print(False)
```

### 설명

1. 파이썬의 기본 정렬 라이브러리인 sort()를 이용하여 문제를 풀 수 있다.

### 해결 2

```python
# 초기값
n, k = map(int, input().split(' '))
data = list(map(int, input().split(' ')))
array = list()

# 리스트에 입력값 추가
for i in data:
    array.append(i)

# 퀵 정렬
def quicksort(data):
    if len(data) <= 1:
        return data
    
    left = []
    right = []
    pivot = data[0]
    
    for i in range(1, len(data)):
        if pivot > data[i]:
            left.append(data[i])
        else:
            right.append(data[i])
    
    return quicksort(left) + [pivot] + quicksort(right)

result = quicksort(array)

print(result[k - 1])
```

### 설명

1. 퀵 정렬을 사용하여 문제를 해결할 수 있다.

### 해결 3

```python
# 초기값
n, k = map(int, input().split(' '))
data = list(map(int, input().split(' ')))

array = list()

# 리스트에 입력값 추가
for i in data:
    array.append(i)
    
# 병합 정렬
def merge(left, right):
    merged = list()
    left_index, right_index = 0, 0
    
    while len(left) > left_index and len(right) > right_index:
        if left[left_index] > right[right_index]:
            merged.append(right[right_index])
            right_index += 1
        else:
            merged.append(left[left_index])
            left_index += 1
    
    while len(left) > left_index:
        merged.append(left[left_index])
        left_index += 1
    
    while len(right) > right_index:
        merged.append(right[right_index])
        right_index += 1
        
    return merged
    
def merge_sort(data):
    medium = int(len(data) / 2)
    left, right = list(), list()
    
    if len(data) <= 1:
        return data
    
    left = merge_sort(data[:medium])
    right = merge_sort(data[medium:])
    
    return merge(left, right)

result = merge_sort(array)

print(result[k - 1])
```

### 설명

1. 병합 정렬을 사용하여 문제를 해결할 수 있다.

### 출처

- https://www.acmicpc.net/problem/11004

