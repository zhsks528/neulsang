---
title: "백준알고리즘 - 1920. 수 찾기"
date: "2020-07-13T14:00:20.284Z"
category: "algorithm"
emoji: "🚀"
---

## 백준알고리즘 - 1920. 수 찾기

- 관련된 알고리즘 : Hash

### 문제

N개의 정수 A[1], A[2], …, A[N]이 주어져 있을 때, 이 안에 X라는 정수가 존재하는지 알아내는 프로그램을 작성하시오.

### 입력

첫째 줄에 자연수 N(1≤N≤100,000)이 주어진다. 다음 줄에는 N개의 정수 A[1], A[2], …, A[N]이 주어진다. 다음 줄에는 M(1≤M≤100,000)이 주어진다. 다음 줄에는 M개의 수들이 주어지는데, 이 수들이 A안에 존재하는지 알아내면 된다. 모든 정수의 범위는 -231 보다 크거나 같고 231보다 작다.

### 출력

M개의 줄에 답을 출력한다. 존재하면 1을, 존재하지 않으면 0을 출력한다.

### 예제

```
Input : 5
        4 1 5 2 3
        5
        1 3 7 9 5
Output : 1
         1
         0
         0
         1
```

### 해결

```python
n = int(input())
array = set(map(int, input().split()))

m = int(input())
x = list(map(int, input().split()))

for i in x:
    if i not in array:
        print('0')
    else:
        print('1')
```

### 설명

1. 특정 정수의 등장 여부만을 간단히 체크하면 된다.
2. Python에서는 dictionary 자료형을 해시처럼 사용할 수 있다.
3. set 자료형을 이용하면 더욱 간단히 풀 수 있다.

### 출처

- https://www.acmicpc.net/problem/1920
