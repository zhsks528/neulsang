---
title: "플로이드 와샬 (Floyd Warshall)"
date: "2020-08-27T09:26:44.321Z"
category: "algorithm"
emoji: "🧭"
---

## 플로이드 와샬 (Floyd Warshall)

### 1. 플로이드 와샬 알고리즘이란?
1. 그래프에서 **최단 거리**를 구하는 알고리즘
  - **모든 정점에 대해 모든 다른 정점에 대한 최단 경로를 구해줌**

2. 그래프의 알고리즘 종류

   - 다익스트라 알고리즘 : 하나의 정점에서 최단경로를 구하는 알고리즘

   - 벨만 포드 알고리즘 : 하나의 정점에서 최단경로를 구하는 알고리즘

   - 플로이드 와샬 알고리즘 : 모든 정점에 대해 모든 다른 정점에 대한 최단 경로를 구하는 알고리즘

### 2. 플로이드 와샬 알고리즘의 이해

- 3중 for문을 이용
  - 첫 번째 반복문 = 겨쳐가는 꼭지점
  - 두 번째 반복문 = 출발하는 꼭짓점
  - 세 번째 반복문 = 도착하는 꼭짓점
- 플로이드 와셜 알고리즘의 핵심 코드

```c
for (int k = 0; k < N; ++k) {
    for (int i = 0; i < N; ++i) {
        for (int j = 0; j < N; ++j) {
            if (d[i][j] > d[i][k] + d[k][j]) {
                d[i][j] = d[i][k] + d[k][j];
            }
        }
    }
}
```

### 3. 플로이드 와샬 알고리즘 구현

- 플로이드 와샬 알고리즘의 과정
  1. 하나의 정점에서 다른 정점으로 바로 갈 수 있으면 최소 비용을, 갈 수 없다면 INF로 배열에 값을 저장한다.
  2. 3중 for문을 통해 거쳐가는 정점을 설정한 후 해당 정점을 거쳐가서 비용이 줄어드는 경우에는 값을 변경한다.
  3. 위의 과정을 반복해 모든 정점 사이의 최단 경로를 탐색한다.

![2](https://user-images.githubusercontent.com/38130934/91557190-00115900-e96f-11ea-84fb-4598f1847751.PNG)

- 다음과 같은 단방향 그래프가 있으면 정점은 1, 2, 3, 4로 4개다.

- 간선은 1->2, 1->4, 2->1, 2->4, 3->1, 4->2, 4->3로 7개다.
- Dist는 1부터 각 정점까지의 최단 경로를 담는 배열

![2-0](https://user-images.githubusercontent.com/38130934/91557079-c93b4300-e96e-11ea-9ce6-6056c85f4bdd.PNG)

1. 시작점과 끝점이 1을 거치는 경우에 값이 기존 값보다 작은 경우 최단 경로를 Dist에 저장한다.
2. 3에서 2로 가는 방법이 INF였는데 3에서 1을 거쳐 2로 가는 방법이 5이기 때문에 Dist(3)(2)는 5로 바꿔준다.
3. 3에서 4로 가는 방법이 INF였는데 3에서 1을 거쳐 4로 가는 방법이 7이기 때문에 Dist(3)(4)는 7로 바꿔준다.
4. 4에서 1로 가는 방법이 INF였는데 4에서 2을 거쳐 4로 가는 방법이 4이기 때문에 Dist(4)(1)는 4로 바꿔준다.

![2-1](https://user-images.githubusercontent.com/38130934/91557081-ca6c7000-e96e-11ea-9d0a-f88ebb1f5ce0.PNG)

1. 3을 거쳐가는 경우에는 변동이 없다.
2. 1에서 3로 가는 방법이 INF였는데 1에서 4을 거쳐 3로 가는 방법이 5이기 때문에 Dist(1)(3)는 5로 바꿔준다.
3. 2에서 3로 가는 방법이 INF였는데 2에서 4을 거쳐 3로 가는 방법이 6이기 때문에 Dist(2)(3)는 6로 바꿔준다.



- 예시를 이용한 플로이드 와샬 알고리즘 파이썬 코드

```python
import sys

INF = sys.maxsize

def Floyd_Warshall():
    dist = [[INF] *n for i in range(n)] # 최단 경로를 담는 배열
    
    # 최단 경로를 담는 배열 초기화
    for i in range(n): 
        for j in range(n):
            dist[i][j] = a[i][j]
    
    for k in range(n): # 거처자는 정점
        for i in range(n): # 시작점
            for j in range(n): # 끝점
                # k를 거쳤을 때의 경로가 더 적은 경로
                if dist[i][j] > dist[i][k] + dist[k][j]:
                    dist[i][j] = dist[i][k] + dist[k][j]
    return dist
          
n = 4 # 정점 수
a = [[0, 2, INF, 4], [2, 0, INF, 5], [3, INF, 0, INF], [INF, 2, 1, 0]]

dist = Floyd_Warshall()

for i in range(n):
    for j in range(n):
        print(dist[i][j], end='')
    print()
```

### 4. 시간 복잡도
- 일반적인 플로이드 와샬의 시간 복잡도
  - 매번 모든 노드들의 조합에 대해서 현재까지의 최단 경로를 구해야함
  - O(N^3)

### 5. 참조

- https://it-garden.tistory.com/247
- https://heekim0719.tistory.com/280
- http://www.crocus.co.kr/536