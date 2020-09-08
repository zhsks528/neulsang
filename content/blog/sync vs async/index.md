---
title: "동기식과 비동기식"
date: "2020-09-04T16:22:33.651Z"
category: "cs"
emoji: "🖥️"
---

## 동기식과 비동기식

### 동기식의 정의

![동기](https://user-images.githubusercontent.com/38130934/92361840-013e4500-f12a-11ea-86b1-78ce5465a480.PNG)

- 요청에 대한 응답을 기다린 후, 응답이 오면 다음 요청을 하는 방식

### 동기식의 특징

- 장점
  - 구성이 단순하다.
  - 순서대로 실행이 가능하다.
- 단점
  - 여러 일을 동시에 수행하는 것이 불가능하다. (멀티 태스킹 X)

### 비동기식의 정의

![비동기](https://user-images.githubusercontent.com/38130934/92361836-000d1800-f12a-11ea-9a7d-20c1fbcb3634.PNG)

- 요청에 대한 응답을 기다리지 않고, 다음 동작을 진행하는 방식

### 비동기식의 특징

- 장점
  - 동시에 여러 일을 수행할 수 있다. (멀티 태스킹 O)
- 단점
  - 설계가 복잡하다.
  - 일정 시간당 요청량이 많아질 경우 부하가 발생하며 이를 위한 추가적인 처리가 필요하다.


### 참조

- https://startces.tistory.com/28

- https://sinsomi.tistory.com/entry/%EC%8B%A0%EC%9E%85-%EA%B0%9C%EB%B0%9C%EC%9E%90-%EB%A9%B4%EC%A0%91-%EB%8F%99%EA%B8%B0%EC%99%80-%EB%B9%84%EB%8F%99%EA%B8%B0-%EA%B0%9C%EB%85%90-%EC%B4%88%EC%BD%94%EB%8D%94

- https://m.blog.naver.com/PostView.nhn?blogId=coen11&logNo=220248358863&proxyReferer=https:%2F%2Fwww.google.com%2F

  
