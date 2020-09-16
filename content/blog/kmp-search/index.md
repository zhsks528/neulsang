---
title: "KMP 알고리즘 (KMP)"
date: "2020-09-16T14:13:22.661Z"
category: "algorithm"
emoji: "💿"
---

## KMP 알고리즘

### 1. KMP 알고리즘이란?

- 접두사와 접미사의 개념을 활용하여 반복되는 연산을 얼마나 줄일 수 있는지를 판별하여 매칭할 문자열을 빠르게 점프하는 기법
- 문자열을 전부비교하는 것보다 속도가 빠름

### 2. KMP 알고리즘의 이해

1. 접두사와 접미사의 이해
2. 접두사와 접미사가 같은 최대길이 구하기

| 길이 | 문자열           | 최대길이 pi[i] |
| ---- | ---------------- | -------------- |
| 1    | a                | 0              |
| 2    | ab               | 0              |
| 3    | **a**b**a**      | 1              |
| 4    | abac             | 0              |
| 5    | **a**bac**a**    | 1              |
| 6    | **a**baca**a**   | 1              |
| 7    | **ab**aca**ab**  | 2              |
| 8    | **aba**ca**aba** | 3              |

### 3. KMP 알고리즘 구현

```python
# N에서 자기 자신을 찾으면서 나타나는 부분 일치를 이용
# pi[]를 계산
# pi[i]= N[..i]의 접미사도 되고 접두사도 되는 문자열의 최대 길이
def getPartialMatch(N):
    m = len(N)
    pi = [0] * m
    
    # N에서 N을 찾는다.
    # begin = 0 이면 자기 자신을 찾아버리니까 안됨
    begin, matched = 1, 0
    
    # 비교할 문자가 N의 끝에 도달할 때까지 찾으면서 부분 일치를 모두 기록
    while begin + matched < m:
        if N[begin + matched] == N[matched]:
            matched += 1
            pi[begin+matched-1] = matched
        else:
            if matched == 0:
                begin += 1
            else:
                begin += matched - pi[matched-1]
                matched = pi[matched-1]
                
    return pi

# H = 짚더미, N = 바늘
def kmp(H, N):
    n, m = len(H), len(N)
	ret = []
    
    pi = getPartialMatch(N)
    
    # begin = 시작위치, match = 같은 문자
    begin, matched = 0, 0
    
    while begin <= n - m:
        # 만약 짚더미의 해당 글자가 바늘의 해당 글자와 같다면
        if matched < m and H[begin+matched] == N[matched]:
            matched +=1
            
            # 결과적으로 m글자가 모두 일치했다면 답에 추가
            if matched == m:
                ret.append(begin)
        else:
            # 예외 : matched == 0인 경우에는 다음 칸에서부터 계속
            if matched == 0:
                begin += 1
            else:
                begin += matched - pi[matched-1]
                # begin을 옮겼다고 처음부터 다시 비교할 필요가 없음
                # 옮긴 후에도 pi[matched-1]만큼은 항상 일치하기 때문
                matched = pi[matched-1]
    return ret
```

### 4. 시간 복잡도

- O(N+M)

### 참조

- [KMP : 문자열 검색 알고리즘](https://bowbowbow.tistory.com/6)
- [30. KMP(Knuth-Morris-Pratt) 알고리즘](https://m.blog.naver.com/PostView.nhn?blogId=ndb796&logNo=221240660061&proxyReferer=https:%2F%2Fwww.google.com%2F)

