---
title: "순차 탐색 (Sequential Search)"
date: "2020-07-27T10:11:33.278Z"
category: "algorithm"
emoji: "🌱"
---

## 순차 탐색 (Sequential Search)

### 1. 순차 탐색 (Sequential Search) 이란?
* 탐색은 여러 데이터 중에서 원하는 데이터를 찾아내는 것을 의미
* 데이터가 담겨있는 리스트를 앞에서부터 하나씩 비교해서 원하는 데이터를 찾는 방법


```python
def sequencial(data_list, search_data):
    for index in range(len(data_list)):
        if data_list[index] == search_data:
            return index
    return -1
```

### 2. 알고리즘 분석
* 최악의 경우 리스트 길이가 n일 때, n번 비교해야 함
  - O(n)
