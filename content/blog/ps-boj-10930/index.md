---
title: "백준알고리즘 - 10930. SHA-256"
date: "2020-07-13T13:06:20.284Z"
category: "ps"
emoji: "🤗"
---

## 백준알고리즘 - 10930. SHA-256

- 관련된 알고리즘 : Hash

### 문제

문자열 S가 주어졌을 때, SHA-256 해시값을 구하는 프로그램을 작성하시오.

### 입력

첫째 줄에 문자열 S가 주어진다. S는 알파벳 대문자와 소문자, 그리고 숫자로만 이루어져 있으며, 길이는 최대 50이다.

### 출력

첫째 줄에 S의 SHA-256 해시값을 출력한다.

### 예제

```
Input : Baekjoon
Output : 9944e1862efbb2a4e2486392dc6701896416b251eccdecb8332deb7f4cf2a857
```

### 해결

```python
import hashlib

string = input()

encoded_string = string.encode()
hexdigest = hashlib.sha256(encoded_string).hexdigest()

print(hexdigest)
```

### 설명

1. hashlib의 sha256 함수를 이용하면 SHA-256 해시를 구할 수 있다.
2. hashlib.sha256(문자열).hexdigest()

### 출처

- https://www.acmicpc.net/problem/10930

