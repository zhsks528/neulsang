---
title: "백준알고리즘 - 9655. 돌 게임"
date: "2020-08-11T10:33:22.555Z"
category: "ps"
emoji: "🪨"
---

## 백준알고리즘 - 9655. 돌 게임

- 관련된 알고리즘 : .

### 문제

돌 게임은 두 명이서 즐기는 재밌는 게임이다.

탁자 위에 돌 N개가 있다. 상근이와 창영이는 턴을 번갈아가면서 돌을 가져가며, 돌은 1개 또는 3개 가져갈 수 있다. 마지막 돌을 가져가는 사람이 게임을 이기게 된다.

두 사람이 완벽하게 게임을 했을 때, 이기는 사람을 구하는 프로그램을 작성하시오. 게임은 상근이가 먼저 시작한다.

### 입력

첫째 줄에 N이 주어진다. (1 ≤ N ≤ 1000)

### 출력

상근이가 게임을 이기면 SK를, 창영이가 게임을 이기면 CY을 출력한다.

### 예제

```
Input : 5
Output : SK
```

### 해결

```python
n = int(input())

if n % 2 != 0:
    print('SK')
else:
    print('CY')
```

### 설명

1.  n 의 갯수가 홀수면 SK , 짝수면 CY를 출력하면 문제를 해결할 수 있다.

### 출처

- https://www.acmicpc.net/problem/9655
