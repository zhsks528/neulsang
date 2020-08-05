---
title: "백준알고리즘 - 1969. DNA"
date: "2020-08-02T19:13:22.132Z"
category: "ps"
emoji: "🎃"
---

## 백준알고리즘 - 1969. DNA

- 관련된 알고리즘 : 탐욕 알고리즘

### 문제

DNA란 어떤 유전물질을 구성하는 분자이다. 이 DNA는 서로 다른 4가지의 뉴클레오티드로 이루어져 있다(Adenine, Thymine, Guanine, Cytosine). 우리는 어떤 DNA의 물질을 표현할 때, 이 DNA를 이루는 뉴클레오티드의 첫글자를 따서 표현한다. 만약에 Thymine-Adenine-Adenine-Cytosine-Thymine-Guanine-Cytosine-Cytosine-Guanine-Adenine-Thymine로 이루어진 DNA가 있다고 하면, “TAACTGCCGAT”로 표현할 수 있다. 그리고 Hamming Distance란 길이가 같은 두 DNA가 있을 때, 각 위치의 뉴클오티드 문자가 다른 것의 개수이다. 만약에 “AGCAT"와 ”GGAAT"는 첫 번째 글자와 세 번째 글자가 다르므로 Hamming Distance는 2이다.

우리가 할 일은 다음과 같다. n개의 길이가 같은 DNA가 주어져 있을 때(이 DNA를 a1a2a3a4...이라고 하자) Hamming Distance의 합이 가장 작은 DNA s를 구하는 것이다. 즉, s와 a1의 Hamming Distance + s와 a2의 Hamming Distance + s와 a3의 Hamming Distance ... 의 합이 최소가 된다는 의미이다.

### 입력

첫 줄에 DNA의 수 N과 문자열의 길이 M이 주어진다. 그리고 둘째 줄부터 N+1번째 줄까지 N개의 DNA가 주어진다. N은 1,000보다 작거나 같은 자연수이고, M은 50보다 작거나 같은 자연수이다.

### 출력

첫째 줄에 Hamming Distance의 합이 가장 작은 DNA 를 출력하고, 둘째 줄에는 그 Hamming Distance의 합을 출력하시오. 그러한 DNA가 여러 개 있을 때에는 사전순으로 가장 앞서는 것을 출력한다.

### 예제 1

```
Input : 5 8
        TATGATAC
        TAAGCTAC
        AAAGATCC
        TGAGATAC
        TAAGATGT
Output : TAAGATAC
         7
```

### 예제 2

```
Input : 4 10
        ACGTACGTAC
        CCGTACGTAG
        GCGTACGTAT
        TCGTACGTAA
Output : ACGTACGTAA
         6
```

### 예제 3

```
Input : 6 10
        ATGTTACCAT
        AAGTTACGAT
        AACAAAGCAA
        AAGTTACCTT
        AAGTTACCAA
        TACTTACCAA
Output : AAGTTACCAA
         12
```

### 해결

```python
N,M = map(int,input().split())
dna = []
result =''
hd = 0
for i in range(N):
    dna.append(input())

for i in range(M):
    cnt = [0,0,0,0]
    for j in range(N):
        if dna[j][i] == 'A':
            cnt[0] +=1
        elif dna[j][i] =='C':
            cnt[1] +=1
        elif dna[j][i] == 'G':
            cnt[2] +=1
        elif dna[j][i] == 'T':
            cnt[3] +=1

    Max = max(cnt)
    idx = cnt.index(Max)
    if idx ==0:
        result+='A'
    elif idx==1:
        result+='C'
    elif idx==2:
        result+='G'
    elif idx==3:
        result+='T'
    hd += N - Max

print(result)
print(hd)
```

### 설명

1. 가장 많이 등장하는 뉴클레오티드('문자')를 세고 그 값을 Max로 설정한다.
2.  가장 많이 등장하는 문자가 H.D가 최소가 되도록 하므로 DNA 결과(result)에 포함시킨다.
3.  하나의 뉴클레오티드가 결정될 때마다 H.D의 값은 N - Max 만큼 증가한다.

### 출처

- https://www.acmicpc.net/problem/1969
