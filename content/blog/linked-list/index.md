---
title: "Linked List"
date: "2020-07-09"
category: "algorithm"
emoji: "🤖"
---

## Linked List

### Linked List 구조
* **연결 리스트**라고도 함
* 배열은 순차적으로 연결된 공간에 데이터를 나열하는 데이터 구조
* 링크드 리스트는 떨어진 곳에 존재하는 데이터를 화살표로 연결해서 관리하는 데이터 구조
* <font color='#BF360C'>본래 C언어에서는 주요한 데이터 구조이지만, 파이썬은 리스트 타입이 링크드 리스트의 기능을 모두 지원</font>

* 링크드 리스트 기본 구조와 용어
  - 노드(Node): 데이터 저장 단위 (데이터값, 포인터) 로 구성
  - 포인터(pointer): 각 노드 안에서, 다음이나 이전의 노드와의 연결 정보를 가지고 있는 공간

<br>

* 일반적인 링크드 리스트 형태
<img src="https://www.fun-coding.org/00_Images/linkedlist.png" />
(출처: wikipedia, https://en.wikipedia.org/wiki/Linked_list)

### 간단한 링크드 리스트 예

#### Node 구현
- 보통 파이썬에서 링크드 리스트 구현시, 파이썬 클래스를 활용함
  - 파이썬 객체지향 문법 이해 필요


```python
class Node:
    def __init__(self, data, next=None):
        self.data = data
        self.next = next
```

#### Node와 Node 연결하기 (포인터 활용)


```python
node1 = Node(1)
node2 = Node(2)
node1.next = node2
head = node1
```

#### Linked List 데이터 추가하기


```python
class Node:
    def __init__(self, data, next=None):
        self.data = data
        self.next = next

def add(data):
    node = head
    
    while node.next:
        node = node.next
    node.next = Node(data)
```


### Linked List 장단점 
* 장점
  - 미리 데이터 공간을 미리 할당하지 않아도 됨
    - 배열은 **미리 데이터 공간을 할당** 해야 함
* 단점
  - 연결을 위한 별도 데이터 공간이 필요하므로, **저장공간 효율이 높지 않음**
  - **연결 정보를 찾는 시간이 필요하므로 접근 속도가 느림**
  - **중간 데이터 삭제시, 앞뒤 데이터의 연결을 재구성해야 하는 부가적인 작업 필요**

### Linked List의 복잡한 기능_1 (링크드 리스트 데이터 사이에 데이터를 추가)
- 링크드 리스트는 유지 관리에 부가적인 구현이 필요함

<img src="https://www.fun-coding.org/00_Images/linkedlistadd.png" />
(출처: wikipedia, https://en.wikipedia.org/wiki/Linked_list)


```python
node = head
while node.next:
    print(node.data)
    node = node.next
print (node.data)
```

    1
    2
    3
    4
    5
    6
    7
    8
    9

```python
node3 = Node(1.5)
```


```python
node = head
search = True
while search:
    if node.data == 1:
        search = False
    else:
        node = node.next

node_next = node.next
node.next = node3
node3.next = node_next
```


```python
node = head
while node.next:
    print(node.data)
    node = node.next
print (node.data)
```

    1
    1.5
    2
    3
    4
    5
    6
    7
    8
    9


### 객체지향 프로그래밍으로 Linked List 구현 (Python)


```python
class Node:
    def __init__(self, data, next=None):
        self.data = data
        self.next = next
        
class NodeMgmt:
    def __init__(self, data):
        self.head = Node(data)
        
    def add(self, data):
        if self.head == "":
            self.head = Node(data)
        else:
            node = self.head
            while node.next:
                node = node.next
            node.next = Node(data)
    
    def desc(self):
        node = self.head
        while node:
            print(node.data)
            node = node.next
```


### Linked List의 복잡한 기능_2 (특정 노드를 삭제)
* 다음 코드는 위의 코드에서 delete 메서드만 추가한 것이므로 해당 메서드만 확인하면 됨                    

```python
class Node:
    def __init__(self, data, next=None):
        self.data = data
        self.next = next

class NodeMgmt:
    def __init__(self, data):
        self.head = Node(data)
    
    # 데이터 추가하기
    def add(self, data):
        if self.head == "":
            self.head = Node(data)
        else:
            node = self.head
            while node.next:
                node = node.next
            node.next = Node(data)
            
    # 데이터 출력하기
    def desc(self):
        node = self.head
        
        while node:
            print(node.data)
            node = node.next
    
    # 데이터 삭제하기
    def delete(self, data):
        node = self.head
        
        if self.head == "":
            print("삭제할 노드가 없습니다.")
            return
        
        if self.head.data == data:
            temp = self.head
            self.head = self.head.next
            del temp
        else:
            node = self.head
            
            while node.next:
                if node.next.data == data:
                    temp = node.next
                    node.next = node.next.next
                    del temp
                    pass
                else:
                    node = node.next
    
    # 데이터 찾기
    def search_node(self, data):
        node = self.head
        while node:
            if node.data == data:
                return node
            else :
                node = node.next
```


### 다양한 Linked List 구조 
* 더블 링크드 리스트(Doubly linked list) 기본 구조 
  - 이중 연결 리스트라고도 함
  - 장점: 양방향으로 연결되어 있어서 노드 탐색이 양쪽으로 모두 가능
  <br>
<img src="https://www.fun-coding.org/00_Images/doublelinkedlist.png" />
(출처: wikipedia, https://en.wikipedia.org/wiki/Linked_list)

```python
class Node:
    def __init__(self, data, prev=None, next=None):
        self.prev = prev
        self.data = data
        self.next = next

class NodeMgmt:
    def __init__(self, data):
        self.head = Node(data)
        self.tail = self.head

    def insert_before(self, data, before_data):
        if self.head == None:
            self.head = Node(data)
            return True
        else:
            node = self.tail
            while node.data != before_data:
                node = node.prev
                if node == None:
                    return False
            new = Node(data)
            before_new = node.prev
            before_new.next = new
            new.prev = before_new
            new.next = node
            node.prev = new
            return True
    
    def insert(self, data):
        if self.head == None:
            self.head = Node(data)
            self.tail = self.head
        else:
            node = self.head
            while node.next:
                node = node.next
            new = Node(data)
            node.next = new
            new.prev = node
            self.tail = new
            
    def insert_after(self, data, after_data):
        if self.head == None:
            self.head = Node(data)
            return True            
        else:
            node = self.head
            while node.data != after_data:
                node = node.next
                if node == None:
                    return False
            new = Node(data)
            after_new = node.next
            new.next = after_new
            new.prev = node
            node.next = new
            if new.next == None:
                self.tail = new
            return True
       
    def search_from_head(self, data):
        if self.head == None:
            return False
    
        node = self.head
        while node:
            if node.data == data:
                return node
            else:
                node = node.next
        return False
    
    def search_from_tail(self, data):
        if self.head == None:
            return False
    
        node = self.tail
        while node:
            if node.data == data:
                return node
            else:
                node = node.prev
        return False
    
    def desc(self):
        node = self.head
        while node:
            print (node.data)
            node = node.next
```



