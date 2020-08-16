---
title: "백준알고리즘 - 9713. Sum of Odd Sequence"
date: "2020-08-11T14:00:11.421Z"
category: "ps"
emoji: "🕋"
---

## 백준알고리즘 - 9713. Sum of Odd Sequence

- 관련된 알고리즘 : 다이나믹 프로그래밍

### 문제

Given an odd integer N, calculate the sum of all the odd integers between 1 and N inclusive.

### 입력

First line of the input contains T, the number of test cases. Each test case contains a single integer N. N is between 1 and 100.

### 출력

For each test case output the value 1+3+….+N.

### 예제

```
Input : 10
        1
        3
        5
        7
        9
        11
        13
        15
        17
        19
Output : 1
         4
         9
         16
         25
         36
         49
         64
         81
         100
```

### 해결

```python
def dp(n):
    if n == 1:
        return 1
    else:
        return n + dp(n - 2)

t = int(input())

for i in range(t):
    data = int(input())
    print(dp(data))
    
```

### 설명

없음.

### 출처

- https://www.acmicpc.net/problem/9713
