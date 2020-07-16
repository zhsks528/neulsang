---
title: "백준알고리즘 - 10814. 나이순정렬"
date: "2020-07-16T10:59:20.456Z"
category: "algorithm"
emoji: "👨"

---

## 백준알고리즘 - 10814. 나이순정렬

- 관련된 알고리즘 : Sort

### 문제

온라인 저지에 가입한 사람들의 나이와 이름이 가입한 순서대로 주어진다. 이때, 회원들을 나이가 증가하는 순으로, 나이가 같으면 먼저 가입한 사람이 앞에 오는 순서로 정렬하는 프로그램을 작성하시오.

### 입력

첫째 줄에 온라인 저지 회원의 수 N이 주어진다. (1 ≤ N ≤ 100,000)

둘째 줄부터 N개의 줄에는 각 회원의 나이와 이름이 공백으로 구분되어 주어진다. 나이는 1보다 크거나 같으며, 200보다 작거나 같은 정수이고, 이름은 알파벳 대소문자로 이루어져 있고, 길이가 100보다 작거나 같은 문자열이다. 입력은 가입한 순서로 주어진다.

### 출력

첫째 줄에 자리수를 내림차순으로 정렬한 수를 출력한다.

### 예제

```
Input : 3
        21 Junkyu
        21 Dohyun
        20 Sunyoung
Output : 20 Sunyoung
         21 Junkyu
         21 Dohyun
```

### 해결

```python
n = int(input())

array = list()

for i in range(n):
    input_data = input().split(' ')
    array.append((int(input_data[0]), input_data[1]))
    
array = sorted(array, key=lambda x: x[0])

for i in array:
    print(i[0], i[1])
```

### 설명

1. (나이, 이름)의 정보를 입력 받은 뒤에 나이를 기준으로 정렬한다.
2. 파이썬의 기본 정렬 라이브러리인 **sorted()를 이용**한다.
3. 나이가 동일한 경우 ,먼저 입력된 이름 순서를 따르도록 **key 속성을 설정**해야 한다.

### 출처

- https://www.acmicpc.net/problem/10814

