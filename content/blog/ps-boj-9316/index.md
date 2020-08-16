---
title: "백준알고리즘 - 9316. Hello Judge"
date: "2020-08-11T10:24:11.621Z"
category: "ps"
emoji: "👋"
---

## 백준알고리즘 - 9316. Hello Judge

- 관련된 알고리즘 : .

### 문제

당신은 N개의 테스트케이스들에게 반드시 인사를 해야 이 문제를 풀 수 있다.

N개의 줄에 걸쳐

"Hello World, Judge i!"

를 출력하는 프로그램을 만들라. 여기서 i는 줄의 번호이다.

### 입력

N이 주어진다. (1 ≤ N ≤ 200)

### 출력

한 줄에 하나의 Hello World, Judge i! 를 출력한다.

### 예제

```
Input : 3
Output : Hello World, Judge 1!
         Hello World, Judge 2!
         Hello World, Judge 3!
```

### 해결

```python
n = int(input())

for i in range(1, n + 1):
    print("Hello World, Judge {0}!".format(i))
```

### 설명

1.  format 을 이용하여 출력하는 값의 형태를 변화시키면 문제를 해결할 수 있다.

### 출처

- https://www.acmicpc.net/problem/9316
