---
title: "백준알고리즘 - 1083. 소트"
date: "2020-08-03T10:51:20.785Z"
category: "ps"
emoji: "⛲"
---

## 백준알고리즘 - 1083. 소트

- 관련된 알고리즘 : 탐욕 알고리즘, 정렬

### 문제

크기가 N인 배열 A가 있다. 배열에 있는 모든 수는 서로 다르다. 이 배열을 소트할 때, 연속된 두 개의 원소만 교환할 수 있다. 그리고, 교환은 많아봐야 S번 할 수 있다. 이때, 소트한 결과가 사전순으로 가장 뒷서는 것을 출력한다.

### 입력

첫째 줄에 N이 주어진다. N은 50보다 작거나 같은 자연수이다. 둘째 줄에는 각 원소가 차례대로 주어진다. 이 값은 1000000보다 작거나 같은 자연수이다. 마지막 줄에는 S가 주어진다. S는 1000000보다 작거나 같은 음이 아닌 정수이다.

### 출력

첫째 줄에 문제의 정답을 출력한다.

### 예제 1

```
Input : 7
        10 20 30 40 50 60 70
        1
Output : 20 10 30 40 50 60 70
```

### 예제 2

```
Input : 5
        3 5 1 2 4
        2
Output : 5 3 2 1 4
```

### 예제 3

```
Input : 10
        19 20 17 18 15 16 13 14 11 12
        5
Output : 20 19 18 17 16 15 14 13 12 11
```

### 해결 

```python
N = int(input())
arr = list(map(int, input().split()))
S = int(input())

for i in range(N - 1):
    if S == 0:
        break
    max, idx = arr[i], i
    
    for j in range(i + 1, min(N, i + 1 + S)):
        if max < arr[j]:
            max = arr[j]
            idx = j
            
    S -= idx - i
    
    for j in range(idx, i, -1):
       arr[j] = arr[j - 1]
    arr[i] = max

print(' '.join(map(str, arr)))
```

### 설명

1. 교환 횟수인 s가 0이 될 때까지 정렬하면 문제를 해결할 수 있다.

### 출처

- https://www.acmicpc.net/problem/1083
