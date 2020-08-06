---
title: "백준알고리즘 - 1197. 최소 스패닝 트리"
date: "2020-08-05T13:34:35.558Z"
category: "ps"
emoji: "🌲"
---

## 백준알고리즘 - 1197. 최소 스패닝 트리

- 관련된 알고리즘 : 최소 스패닝 트리(MST)

### 문제

그래프가 주어졌을 때, 그 그래프의 최소 스패닝 트리를 구하는 프로그램을 작성하시오.

최소 스패닝 트리는, 주어진 그래프의 모든 정점들을 연결하는 부분 그래프 중에서 그 가중치의 합이 최소인 트리를 말한다.

### 입력

첫째 줄에 정점의 개수 V(1 ≤ V ≤ 10,000)와 간선의 개수 E(1 ≤ E ≤ 100,000)가 주어진다. 다음 E개의 줄에는 각 간선에 대한 정보를 나타내는 세 정수 A, B, C가 주어진다. 이는 A번 정점과 B번 정점이 가중치 C인 간선으로 연결되어 있다는 의미이다. C는 음수일 수도 있으며, 절댓값이 1,000,000을 넘지 않는다.

그래프의 정점은 1번부터 V번까지 번호가 매겨져 있고, 임의의 두 정점 사이에 경로가 있다. 최소 스패닝 트리의 가중치가 -2,147,483,648보다 크거나 같고, 2,147,483,647보다 작거나 같은 데이터만 입력으로 주어진다.

### 출력

첫째 줄에 최소 스패닝 트리의 가중치를 출력한다.

### 예제

```
Input : 3 3
        1 2 1
        2 3 2
        1 3 3
Output : 3
```

### 해결

```python
v, e = map(int, input().split())

vertices = list()
data = list()

for i in range(v):
    vertices.append(i + 1)
    
for _ in range(e):
    node_a, node_b, weight = map(int, input().split())
    data.append((node_a, node_b, weight))
    
mygraph = dict()
mygraph['vertices'] = vertices
mygraph['edges'] = data

parents = dict()
ranks = dict()

def make_set(node):
    parents[node] = node
    ranks[node] = 0

def find(node):
    if parents[node] != node:
        parents[node] = find(parents[node])
    
    return parents[node]

def union(node_a, node_b):
    root1= find(node_a)
    root2 = find(node_b)
    
    if ranks[root1] > ranks[root2]:
        parents[root2] = root1
    else:
        parents[root1] = root2
        
        if ranks[root1] == ranks[root2]:
            ranks[root2] += 1
            
def kruskal(graph):
    mst = list()
    
    for node in graph['vertices']:
        make_set(node)
    
    edges = graph['edges']
    edges.sort(key=lambda x: x[2])
    
    for edge in graph['edges']:
        node_a, node_b, weight = edge
        
        if find(node_a) != find(node_b):
            union(node_a, node_b)
            mst.append(edge)
    
    sum = 0
    
    for i in range(len(mst)):
        sum += mst[i][2]
        
    return sum

result = kruskal(mygraph)
print(result)
```

### 설명

1. 최소신장트리 중 크루스칼 알고리즘을 이용하여 문제를 해결했다.
2. 간선을 기준으로 정렬한 후 최상단 노드가 다르다면 합치는 작업(union)을 하면 문제를 해결할 수 있다.
3. 최상단 노드가 같게되면 연결되는 그래프가 되버리기 때문에 제외 시켜야한다.

### 출처

- https://www.acmicpc.net/problem/1197
