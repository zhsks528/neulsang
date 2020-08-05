---
title: "백준알고리즘 - 8393. 합"
date: "2020-07-24T14:10:42.423Z"
category: "ps"
emoji: "👋"
---

## 백준알고리즘 - 8393. 합

- 관련된 알고리즘 : .

### 문제

n이 주어졌을 때, 1부터 n까지 합을 구하는 프로그램을 작성하시오.

### 입력

첫째 줄에 n (1 ≤ n ≤ 10,000)이 주어진다.

### 출력

1부터 n까지 합을 출력한다.

### 예제

```
Input : 3
Output : 6
```

### 해결

```python
n = int(input())
sum = 0

for i in range(n + 1):
    sum += i

print(sum)
```

### 설명

없음

### 출처

- https://www.acmicpc.net/problem/8393
