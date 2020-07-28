---
title: "백준알고리즘 - 10989. 수 정렬하기3"
date: "2020-07-16T11:37:32.874Z"
category: "ps"
emoji: "👨"
---

## 백준알고리즘 - 10989. 수 정렬하기3

- 관련된 알고리즘 : Sort

### 문제

N개의 수가 주어졌을 때, 이를 오름차순으로 정렬하는 프로그램을 작성하시오.

### 입력

첫째 줄에 수의 개수 N(1 ≤ N ≤ 10,000,000)이 주어진다. 둘째 줄부터 N개의 줄에는 숫자가 주어진다. 이 수는 10,000보다 작거나 같은 자연수이다.

### 출력

첫째 줄부터 N개의 줄에 오름차순으로 정렬한 결과를 한 줄에 하나씩 출력한다.

### 예제

```
Input : 10
        5
        2
        3
        1
        4
        2
        3
        5
        1
        7
Output : 1
         1
         2
         2
         3
         3
         4
         5
         5
         7
```

### 해결

```python
import sys

n = int(sys.stdin.readline())
array = [0] * 10001

for i in range(n):
    data = int(sys.stdin.readline())
    array[data] += 1

for i in range(10001):
    if array[i] != 0:
        for j in range(array[i]):
            print(i)
```

### 설명

1. 계수 정렬 알고리즘을 이용한다.

### 출처

- https://www.acmicpc.net/problem/10989

