---
title: "백준알고리즘 - 10699. 오늘 날짜"
date: "2020-07-24T14:10:42.423Z"
category: "ps"
emoji: "☁️"
---

## 백준알고리즘 - 10699. 오늘 날짜

- 관련된 알고리즘 : .

### 문제

서울의 오늘 날짜를 출력하는 프로그램을 작성하시오.

### 입력

없음

### 출력

서울의 오늘 날짜를 "YYYY-MM-DD" 형식으로 출력한다.

### 예제

```
Input : 
Output : 2015-01-24
```

### 해결

```python
from datetime import datetime

print(str(datetime.now())[:10])
```

### 설명

1. 내장함수인 **datetime**을 이용하면 문제를 해결할 수 있다.

### 출처

- https://www.acmicpc.net/problem/10699
