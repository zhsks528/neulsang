---
title: "백준알고리즘 - 8370. Plane"
date: "2020-07-24T13:56:40.780Z"
category: "ps"
emoji: "✈️"
---

## 백준알고리즘 - 8370. Plane

- 관련된 알고리즘 : .

### 문제

Byteland Airlines recently extended their aircraft fleet with a new model of a plane. The new acquisition has *n*1 rows of seats in the business class and *n*2 rows in the economic class. In the business class each row contains *k*1 seats, while each row in the economic class has *k*2 seats.

Write a program which:

- reads information about available seats in the plane,
- calculates the sum of all seats available in that plane,
- writes the result.

### 입력

In the first and only line of the standard input there are four integers *n*1, *k*1, *n*2 and *k*2 (1 ≤ *n*1, *k*1, *n*2, *k*2 ≤ 1 000), separated by single spaces.

### 출력

The first and only line of the standard output should contain one integer - the total number of seats available in the plane.

### 예제

```
Input : 2 5 3 20
Output : 70
```

### 해결

```python
n = list(map(int, input().split(' ')))

result = n[0] * n[1] + n[2] * n[3]

print(result)
```

### 설명

없음

### 출처

- https://www.acmicpc.net/problem/8370
