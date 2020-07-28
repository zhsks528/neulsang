---
title: "백준알고리즘 - 2750. 수 정렬하기"
date: "2020-07-15T16:40:20.284Z"
category: "ps"
emoji: "😻"
---

## 백준알고리즘 - 2750. 수 정렬하기

- 관련된 알고리즘 : Sort

### 문제

N개의 수가 주어졌을 때, 이를 오름차순으로 정렬하는 프로그램을 작성하시오.

### 입력

첫째 줄에 수의 개수 N(1 ≤ N ≤ 1,000)이 주어진다. 둘째 줄부터 N개의 줄에는 숫자가 주어진다. 이 수는 절댓값이 1,000보다 작거나 같은 정수이다. 수는 중복되지 않는다.

### 출력

첫째 줄부터 N개의 줄에 오름차순으로 정렬한 결과를 한 줄에 하나씩 출력한다.

### 예제

```
Input : 5
        5
        2
        3
        4
        1
Output : 1
         2
         3
         4
         5
```

### 해결 1 (Bubble Sort)

```python
# 수의 개수
n = int(input()) 

input_list = list()
for _ in range(n):
    data = int(input())
    input_list.append(data)

# 중복 제거
data_list = list(set(input_list)) 

length = len(data_list)

# Bubble Sort
for index in range(length - 1):
    for index2 in range(index + 1,length):
        if data_list[index] > data_list[index2]:
            data_list[index], data_list[index2] = data_list[index2], data_list[index]
        
for i in data_list:
    print(i)
    
```

### 설명

1. 앞의 숫자와 뒤에 숫자를 비교 (bubble sort)
2. 앞의 숫자가 뒤에 숫자보다 크다면 자리 변경
3. 앞의 숫자가 뒤에 숫자보다 작다면 인덱스 변경
4. 정렬될 때까지 반복

### 해결 2 (Selection Sort)

```python
# 수의 개수
n = int(input())
array = list()

for _ in range(n):
    array.append(int(input()))

# Selection Sort
for index in range(n):
    lowest = index
    
    for index2 in range(index + 1, len(array)):
        if array[lowest] > array[index2]:
            lowest = index2
    array[lowest], array[index] = array[index], array[lowest]

for i in array:
    print(i)
```

### 설명

1. 현재 숫자를 제외한 숫자모임에서 최솟값을 찾아냄
2. 현재 숫자와 최솟값을 비교 (selction sort)
3. 최솟값이 현재 숫자와 비교했을 때 값이 크다면 계속 반복

### 해결 3 (파이썬 기본 정렬 라이브러리)

```python
# 수의 개수
n = int(input()) 
data_list = list()

for _ in range(n):
    data = int(input())
    data_list.append(data)

data_list.sort()

for i in data_list:
    print(i)
```

### 설명

1. sort() 함수를 사용하면 오름차순으로 정렬이 된다.



### 출처

- https://www.acmicpc.net/problem/2750

