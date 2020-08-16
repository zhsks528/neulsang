---
title: "백준알고리즘 - 1100. 하얀 칸"
date: "2020-08-04T16:40:22.412Z"
category: "ps"
emoji: "♗"
---

## 백준알고리즘 - 1100. 하얀 칸

- 관련된 알고리즘 : .

### 문제

체스판은 8*8크기이고, 검정 칸과 하얀 칸이 번갈아가면서 색칠되어 있다. 가장 왼쪽 위칸 (0,0)은 하얀색이다. 체스판의 상태가 주어졌을 때, 하얀 칸 위에 말이 몇 개 있는지 출력하는 프로그램을 작성하시오.

### 입력

첫째 줄부터 8개의 줄에 체스판의 상태가 주어진다. ‘.’은 빈 칸이고, ‘F’는 위에 말이 있는 칸이다.

### 출력

첫째 줄에 문제의 정답을 출력한다.

### 예제

```
Input : .F.F...F
        F...F.F.
        ...F.F.F
        F.F...F.
        .F...F..
        F...F.F.
        .F.F.F.F
        ..FF..F.
Output : 1
```

### 해결 1

```python
chess = list()
for _ in range(8):
    data = list(map(str, list(input())))
    chess.append(data)
    
count = 0

a = [0,2,4,6]
b = [1,3,5,7]

for i in range(8):
    for j in range(4):
        if i % 2 == 0:
            if chess[i][a[j]] == 'F':
                count += 1
        else:
            if chess[i][b[j]] == 'F':
                count += 1

print(count)
```

### 설명

1. 하얀칸은 (0, 0) (0, 2) (2, 0), (4, 2) 처럼 짝수이다.
2. 반복하면서 F일 때마다 체크해주면 된다.

### 해결 2

```python
chess = list()
for _ in range(8):
    data = list(map(str, list(input())))
    chess.append(data)
    
count = 0

for i in range(8):
    for j in range(8):
        if (i + j) % 2 == 0:
            if chess[i][j] == 'F':
                count += 1
                

print(count)
```

### 설명

1. 해결 1의 소스에서 짝수 구하는 방법을 더욱 간단하게 해보았다.

### 출처

- https://www.acmicpc.net/problem/1100
