---
title: "백준알고리즘 - 11652. 카드"
date: "2020-07-24T11:31:30.501Z"
category: "ps"
emoji: "🗃️"
---

## 백준알고리즘 - 11652. 카드

- 관련된 알고리즘 : Sort

### 문제

준규는 숫자 카드 N장을 가지고 있다. 숫자 카드에는 정수가 하나 적혀있는데, 적혀있는 수는 -262보다 크거나 같고, 262보다 작거나 같다.

준규가 가지고 있는 카드가 주어졌을 때, 가장 많이 가지고 있는 정수를 구하는 프로그램을 작성하시오. 만약, 가장 많이 가지고 있는 정수가 여러 가지라면, 작은 것을 출력한다.

### 입력

첫째 줄에 준규가 가지고 있는 숫자 카드의 개수 N (1 ≤ N ≤ 100,000)이 주어진다. 둘째 줄부터 N개 줄에는 숫자 카드에 적혀있는 정수가 주어진다.

### 출력

첫째 줄에 준규가 가장 많이 가지고 있는 정수를 출력한다.

### 예제 1

```
Input : 5
        1
        2
        1
        2
        1
Output : 1
```

### 예제 2

```
Input : 6
        1
        2
        1
        2
        1
        2
Output : 1
```

### 해결

```python
n = int(input())
dic = {}

for i in range(n):
    data = int(input())
    
    # 1. 딕셔너리에 입력값이 있는지 확인 ( 있으면 count + 1 없으면 1로 생성 )
    if data in dic:
        dic[data] += 1
    else:
        dic[data] = 1

# 2. 카드개수를 기준으로 먼저 내림차순으로 정렬후 카드개수가 같으면 카드값을 기준으로 오름차순 정렬
dic = sorted(dic.items(), key=lambda x: (-x[1], x[0]))

print(dic[0][0])
```

### 설명

1. 딕셔너리에 입력값이 있는지 확인 ( 있으면 count + 1 없으면 1로 생성 )
2. 카드개수를 기준으로 먼저 내림차순으로 정렬후 카드개수가 같으면 카드값을 기준으로 오름차순 정렬하면 문제를 해결할 수 있다.

### 출처

- https://www.acmicpc.net/problem/11652
