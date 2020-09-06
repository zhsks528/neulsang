---
title: "카라츠바 알고리즘 (karatuba)"
date: "2020-09-06T14:13:22.661Z"
category: "algorithm"
emoji: "💿"
---

## 카라츠바 알고리즘

### 1. 카라츠바 알고리즘이란?

- 큰 수에 대한 효과적인 곱셈 알고리즘
- n^2개의 한 자리 곱셈을 해야하는 고전적인 곱셈 방법보다 빠름

### 2. 카라츠바 알고리즘의 이해

카리츠바 알고리즘의 기본 단계는 큰 두 수 x, y의 곱을 자릿수가 x, y의 절반인 수들의 곱 3번과 덧셈과 시피트 연산을 이용해 계산하는 것이다.

x, y를 B진법의 n자리수라고 하자. n보다 작은 양수 m에 대해 다음과 같이 x, y를 쪼갤 수 있다.

`x = x1 * B^m + x0`

`y = y1 * B^m + y0`

(단, x0, y0 < B^m)

`xy = x1 * y1 + B^(m*2) + (x1 * y0 + x0 * y1) + B^m + x0 *y0`

이 식은 4번의 곱셈을 해야하므로 수행시간이 **O(n^2)**이다.

카리츠바는 덧셈을 몇 번 함으로써, xy를 3번의 곱셈을 통해 구할 수 있다는 것을 알았다.

```
z2 = x1 * y1
z0 = x0 * y0
z1 = (x1 + x0) * (y1 + y0) - z0 - z2
```

#### 2-1. 예시

```
B = 10, m = 2라 가정할 때, 1234 * 5678의 곱은?

12 34 = 12 * 10^2 + 34
56 78 = 56 * 10^2 + 78

z2 = 12 * 56 = 672
z0 = 34 * 78 = 2652
z1 = (12 + 34)(56 + 78) - z2 - z0 = 46*134 - 672 - 2652 = 2840

결과 z2 * 10^(2*2) + z1 * 10^2 + z0 = 672 × 10000 + 2840 × 100 + 2652 = 7006652
```

### 3. 카라츠바 알고리즘 구현

```python
def karatuba(x, y):
    # 각각의 length를 구함
    strx, stry = str(x), str(y)
    lenx, leny, = len(strx), len(stry)
    
    # Initialize
    if lenx == 1 or leny == 1:
        return x * y
    
    # Divide
    m = min(lenx, leny) // 2
    a, b = int(strx[:-m]), int(strx[-m:])
    c, d = int(stry[:-m]), int(stry[-m:])
    
    # Conquer
    ac = karatusba(a, c) # z2
    bd = karatusba(b, d) # z0
    ad_bc = karatusba(a+b, c+d) - ac - bd # z1
    
    # Combine
    return ac*10**(2*m) + 10**m * ad_bc + bd
```

- Input parameter들의 길이와 같이 알고리즘에서 사용할 변수들을 먼저 구해놓는다
- 둘 중 하나라도 길이가 1이면 단순곱을 반환한다
- 두 parameter 중 짧은 길이를 가진 parameter의 length 절반만큼 잘라서 분할한다.
- 재귀적으로 변수를 구한다. 이 때 가우스의 방법을 이용하여 재귀 횟수를 줄인다.
- 결합하여 리턴한다.

### 4. 시간 복잡도

- O(n^log3)

### 참조

- [Karatsuba 알고리즘 구현하기](https://nearkim.coffee/posts/karatsuba-python-implementation)
- [위키피디아 - 카라츠바 알고리즘](https://ko.wikipedia.org/wiki/%EC%B9%B4%EB%9D%BC%EC%B6%94%EB%B0%94_%EC%95%8C%EA%B3%A0%EB%A6%AC%EC%A6%98)

