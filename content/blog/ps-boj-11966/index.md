---
title: "백준알고리즘 - 11966. 2의 제곱인가"
date: "2020-08-14T17:16:22.512Z"
category: "ps"
emoji: "🌡"
---

## 백준알고리즘 - 11966. 2의 제곱인가

- 관련된 알고리즘 : .

### 문제

자연수 N이 주어졌을 때, 2의 제곱수면 1을 아니면 0을 출력하는 프로그램을 작성하시오.

### 입력

첫째 줄에 N(1 ≤ N ≤ 230)이 주어진다.

### 출력

N이 2의 제곱수면 1을 아니면 0을 출력하는 프로그램을 작성하시오.

### 예제 1

```
Input : 1
Output : 1
```

### 예제 2

```
Input : 2
Output : 1
```

### 예제 3

```
Input : 3
Output : 0
```

### 예제 4

```
Input : 4
Output : 1
```

### 해결

```python
n = int(input())

area = [2**i for i in range(31)]

if n in area:
    print(1)
else:
    print(0)
```

### 설명

없음.

### 출처

- https://www.acmicpc.net/problem/11966
