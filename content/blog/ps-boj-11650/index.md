---
title: "백준알고리즘 - 11650. 좌표 정렬하기"
date: "2020-07-16T11:16:12.147Z"
category: "ps"
emoji: "🙄"
---

## 백준알고리즘 - 11650. 좌표 정렬하기

- 관련된 알고리즘 : Sort

### 문제

2차원 평면 위의 점 N개가 주어진다. 좌표를 x좌표가 증가하는 순으로, x좌표가 같으면 y좌표가 증가하는 순서로 정렬한 다음 출력하는 프로그램을 작성하시오.

### 입력

첫째 줄에 점의 개수 N (1 ≤ N ≤ 100,000)이 주어진다. 둘째 줄부터 N개의 줄에는 i번점의 위치 xi와 yi가 주어진다. (-100,000 ≤ xi, yi ≤ 100,000) 좌표는 항상 정수이고, 위치가 같은 두 점은 없다.

### 출력

첫째 줄부터 N개의 줄에 점을 정렬한 결과를 출력한다.

### 예제

```
Input : 5
        3 4
        1 1
        1 -1
        2 2
        3 3
Output : 1 -1
         1 1
         2 2
         3 3
         3 4
```

### 해결1

```python
n = int(input())
array = list()

for _ in range(n):
    input_data = input().split(' ')
    array.append((int(input_data[0]), int(input_data[1])))
    
array = sorted(array, key=lambda x: (x[0], x[1]))

for i in array:
    print(i[0], i[1])
```

### 설명

1. (x좌표, y좌표)의 정보를 입력 받은 뒤에 x좌표 기준으로 정렬한다. x좌표가 같다면 y좌표로 정렬한다.
2. 파이썬의 기본 정렬 라이브러리인 **sorted()를 이용**한다.
3. 나이가 동일한 경우 ,먼저 입력된 이름 순서를 따르도록 **key 속성을 설정**해야 한다.

### 해결2

```python
n = int(input())
array = list()

for _ in range(n):
    input_data = input().split(' ')
    array.append((int(input_data[0]), int(input_data[1])))
    
array = sorted(array)

for i in array:
    print(i[0], i[1])
```

### 설명

1. (x 좌표, y 좌표)를 입력 받은 뒤 x 좌표, y 좌표 순서대로 차례대로 오름차순 정렬한다.
2. 파이썬의 기본 정렬 라이브러리는 기본적으로 튜플의 인덱스 순서대로 오름차순 정렬한다.
3. 따라서 단순히 기본 정렬 라이브러리를 이용하면 된다.

### 출처

- https://www.acmicpc.net/problem/11650

