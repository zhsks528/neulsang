---
title: "백준알고리즘 - 3047. ABC"
date: "2020-07-24T11:05:42.480Z"
category: "ps"
emoji: "😘"
---

## 백준알고리즘 - 3047. ABC

- 관련된 알고리즘 : Sort

### 문제

세 수 A, B, C가 주어진다. A는 B보다 작고, B는 C보다 작다.

세 수 A, B, C가 주어졌을 때, 입력에서 주어진 순서대로 출력하는 프로그램을 작성하시오.

### 입력

첫째 줄에 세 수 A, B, C가 주어진다. 하지만, 순서는 A, B, C가 아닐 수도 있다. 세 수는 100보다 작거나 같은 자연수이다. 둘째 줄에는 A, B, C로 이루어진 세 글자가 주어지며, 이 순서대로 출력하면 된다.

### 출력

주어진 세 수를 주어진 출력 순서대로 출력하면 된다.

### 예제

```
Input : 1 5 3
        ABC
Output : 1 3 5
```

### 해결

```python
# 1. 입력값을 리스트로 만든다.
n = list(map(int, input().split(' ')))
seq = input()

# 2. 입력받은 리스트를 정렬한다.
sort = sorted(n)

result = list()

# 3. 입력받은 순서에 따라 결과리스트에 값을 넣는다.
for i in seq:
    if i == 'A':
        result.append(sort[0])
    elif i == 'B':
        result.append(sort[1])
    elif i == 'C':
        result.append(sort[2])

for j in result:
    print(j, end =' ')
```

### 설명

1. 입력값을 리스트로 만든다.
2. 입력받은 리스트를 정렬한다.
3. 입력받은 순서에 따라 결과리스트에 값을 넣는다.

### 출처

- https://www.acmicpc.net/problem/3047
