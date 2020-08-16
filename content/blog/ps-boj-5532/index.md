---
title: "백준알고리즘 - 5532. 방학 숙제"
date: "2020-08-04T14:34:22.543Z"
category: "ps"
emoji: "⛱️"
---

## 백준알고리즘 - 5532. 방학 숙제

- 관련된 알고리즘 : .

### 문제

상근이는 초등학교에 다닐 때, 방학 숙제를 남들보다 먼저 미리 하고 남은 기간을 놀았다. 방학 숙제는 수학과 국어 문제 풀기이다.

방학은 총 L일이다. 수학은 총 B페이지, 국어는 총 A페이지를 풀어야 한다. 상근이는 하루에 국어를 최대 C페이지, 수학을 최대 D페이지 풀 수 있다.

상근이가 겨울 방학동안 숙제를 하지 않고 놀 수 있는 최대 날의 수를 구하는 프로그램을 작성하시오.

### 입력

한 줄에 하나씩 총 다섯 줄에 걸쳐 L, A, B, C, D가 주어진다. (2 ≤ L ≤ 40, 1 ≤ A, B ≤ 1000, 1 ≤ C, D ≤ 100)

항상 방학 숙제를 방학 기간내에 다 할 수 있는 경우만 입력으로 주어진다.

### 출력

첫째 줄에 상근이가 놀 수 있는 날의 최댓값을 출력한다.

### 예제

```
Input : 20
        25
        30
        6
        8
Output : 15
```

### 해결 1

```python
import math

L = int(input())
A = int(input())
B = int(input())
C = int(input())
D = int(input())
k = math.ceil(A / C)
m = math.ceil(B / D)

free = max(k, m)
print(L - free)
```

### 설명

없음.

### 해결 2

```python
l = int(input())
b = int(input())
a = int(input())
c = int(input())
d = int(input())

math_day = b // c
math_rest = b % c

korean_day = a // d
korean_rest = a % d 

count = max(math_day, korean_day)

if math_rest != 0 and korean_rest != 0:
    count += 1 
    
result = l - count 

print(result)
```

### 설명

없음.

### 출처

- https://www.acmicpc.net/problem/5532
