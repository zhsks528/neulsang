---
title: "백준알고리즘 - 2751. 수 정렬하기 2"
date: "2020-07-23T10:29:42.454Z"
category: "ps"
emoji: "🛹"
---

## 백준알고리즘 - 2751. 수 정렬하기 2

- 관련된 알고리즘 : Sort

### 문제

N개의 수가 주어졌을 때, 이를 오름차순으로 정렬하는 프로그램을 작성하시오.

### 입력

첫째 줄에 수의 개수 N(1 ≤ N ≤ 1,000,000)이 주어진다. 둘째 줄부터 N개의 줄에는 숫자가 주어진다. 이 수는 절댓값이 1,000,000보다 작거나 같은 정수이다. 수는 중복되지 않는다.

### 출력

첫째 줄부터 N개의 줄에 오름차순으로 정렬한 결과를 한 줄에 하나씩 출력한다.

### 예제

```
Input : 5
        5
        4
        3
        2
        1
Output : 1
         2
         3
         4
         5
```

### 해결 1

```python
# 초기값
N = int(input())

array = list()

# 리스트에 입력값 추가
for _ in range(N):
    data = int(input())
    array.append(data)

# 정렬
array.sort()

for i in array:
    print(i)
```

### 설명

1. 파이썬의 기본 정렬 라이브러리인 sort()를 이용하여 문제를 풀 수 있다.

### 해결 2

```python
# 초기값
N = int(input())
array = list()

# 리스트에 입력값 추가
for _ in range(N):
    data = int(input())
    array.append(data)

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

for i in result:
    print(i)

```

### 설명

1. 퀵 정렬을 사용하여 문제를 해결할 수 있다.

### 해결 3

```python
# 초기값
N = int(input())
array = list()

# 리스트에 입력값 추가
for _ in range(N):
    data = int(input())
    array.append(data)

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
    
    if len(data) <= 1:
        return data
    
    medium = int(len(data) / 2)
    
    left = merge_sort(data[:medium])
    right = merge_sort(data[medium:])
        
    return merge(left, right)

result = merge_sort(array)

for i in result:
    print(i)
```

### 설명

1. 병합 정렬을 사용하여 문제를 해결할 수 있다.

### 출처

- https://www.acmicpc.net/problem/2751

