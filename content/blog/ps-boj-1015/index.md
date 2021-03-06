---
title: "백준알고리즘 - 1015. 수열 정렬"
date: "2020-07-24T13:44:20.580Z"
category: "ps"
emoji: "🌇"
---

## 백준알고리즘 - 1015. 수열 정렬

- 관련된 알고리즘 : Sort

### 문제

P[0], P[1], ...., P[N-1]은 0부터 N-1까지(포함)의 수를 한 번씩 포함하고 있는 수열이다. 수열 P를 길이가 N인 배열 A에 적용하면 길이가 N인 배열 B가 된다. 적용하는 방법은 B[P[i]] = A[i]이다.

배열 A가 주어졌을 때, 수열 P를 적용한 결과가 비내림차순이 되는 수열을 찾는 프로그램을 작성하시오. 비내림차순이란, 각각의 원소가 바로 앞에 있는 원소보다 크거나 같을 경우를 말한다. 만약 그러한 수열이 여러개라면 사전순으로 앞서는 것을 출력한다.

### 입력

첫째 줄에 배열 A의 크기 N이 주어진다. 둘째 줄에는 배열 A의 원소가 0번부터 차례대로 주어진다. N은 50보다 작거나 같은 자연수이고, 배열의 원소는 1,000보다 작거나 같은 자연수이다.

### 출력

첫째 줄에 비내림차순으로 만드는 수열 P를 출력한다.

### 예제

```
Input : 3
        2 3 1
Output : 1 2 0
```

### 해결 1

```python
import sys
import math

A_size = int(sys.stdin.readline())
A = sys.stdin.readline().replace("\n", "").split(' ')
A = [int(i) for i in A]

# 1. A를 오름차순으로 정렬하여 작은 숫자부터 순서대로 정리된 새로운 list를 할당 
sorted_A = [i for i in A]
sorted_A.sort()

P = []
# 2. A의 각 숫자들에 대해 sorted_A에서의 index를 찾아 몇번째로 작은 숫자인지 P 수열에 새롭게 append한다.
for i in A:
    P.append(sorted_A.index(i))
    # 3. 이미 할당한 숫자는 sorted_A에서 -1로 대채해 재탐색되지 않도록 한다.
    sorted_A[sorted_A.index(i)] = -1

results = [i for i in P]

for result in results:
    sys.stdout.write(str(result)+' ')
```

### 해결 2

```python
n = int(input())
a = list(map(int, input().split(' ')))

# 1. A를 오름차순으로 정렬하여 작은 숫자부터 순서대로 정리된 새로운 list를 할당
sort = sorted(a)
results = list()

# 2. A의 각 숫자들에 대해 sorted_A에서의 index를 찾아 몇번째로 작은 숫자인지 P 수열에 새롭게 append한다.
for i in a:
    results.append(sort.index(i))

for result in results:
    print(result, end = ' ') 
```

### 설명

1. A를 오름차순으로 정렬하여 작은 숫자부터 순서대로 정리된 새로운 list를 할당 
2. A의 각 숫자들에 대해 sorted_A에서의 index를 찾아 몇번째로 작은 숫자인지 P 수열에 새롭게 append한다.

### 문제점

1. 해결1과 해결2의 결과값은 동일한데 백준에서 해결 2는 틀렸다고 나온다. 왜 그런 것인지 알아봐야된다.

### 출처

- https://www.acmicpc.net/problem/1015
