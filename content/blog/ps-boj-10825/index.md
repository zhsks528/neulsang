---
title: "백준알고리즘 - 10825. 국영수"
date: "2020-07-24T10:48:03.048Z"
category: "ps"
emoji: "📘"
---

## 백준알고리즘 - 10825. 국영수

- 관련된 알고리즘 : Sort

### 문제

도현이네 반 학생 N명의 이름과 국어, 영어, 수학 점수가 주어진다. 이때, 다음과 같은 조건으로 학생의 성적을 정렬하는 프로그램을 작성하시오.

1. 국어 점수가 감소하는 순서로
2. 국어 점수가 같으면 영어 점수가 증가하는 순서로
3. 국어 점수와 영어 점수가 같으면 수학 점수가 감소하는 순서로
4. 모든 점수가 같으면 이름이 사전 순으로 증가하는 순서로 (단, 아스키 코드에서 대문자는 소문자보다 작으므로 사전순으로 앞에 온다.)

### 입력

첫째 줄에 도현이네 반의 학생의 수 N (1 ≤ N ≤ 100,000)이 주어진다. 둘째 줄부터 한 줄에 하나씩 각 학생의 이름, 국어, 영어, 수학 점수가 공백으로 구분해 주어진다. 점수는 1보다 크거나 같고, 100보다 작거나 같은 자연수이다. 이름은 알파벳 대소문자로 이루어진 문자열이고, 길이는 10자리를 넘지 않는다.

### 출력

문제에 나와있는 정렬 기준으로 정렬한 후 첫째 줄부터 N개의 줄에 걸쳐 각 학생의 이름을 출력한다.

### 예제

```
Input : 12
        Junkyu 50 60 100
        Sangkeun 80 60 50
        Sunyoung 80 70 100
        Soong 50 60 90
        Haebin 50 60 100
        Kangsoo 60 80 100
        Donghyuk 80 60 100
        Sei 70 70 70
        Wonseob 70 70 90
        Sanghyun 70 70 80
        nsj 80 80 80
        Taewhan 50 60 90
Output : Donghyuk
         Sangkeun
         Sunyoung
         nsj
         Wonseob
         Sanghyun
         Sei
         Kangsoo
         Haebin
         Junkyu
         Soong
         Taewhan
```

### 해결

```python
n = int(input())

array = list()

for _ in range(n):
    input_data = input().split(" ")
    array.append((input_data[0], int(input_data[1]), int(input_data[2]), int(input_data[3])))
    
result = sorted(array, key=lambda x: (-x[1], x[2], -x[3], x[0]))

for i in result:
    print(i[0])
```

### 설명

1. 국어 점수가 감소하는 순서로
2. 국어 점수가 같으면 영어 점수가 증가하는 순서로
3. 국어 점수와 영어 점수가 같으면 수학 점수가 감소하는 순서로
4. 모든 점수가 같으면 이름이 사전 순으로 증가하는 순서로
5. 파이썬의 기본 정렬 라이브러리인 **sorted()를 이용**한다.
6. **key 속성을 설정**해야 한다. (오름차순 = 기본 값, 내림차순 = -)

### 출처

- https://www.acmicpc.net/problem/10825

