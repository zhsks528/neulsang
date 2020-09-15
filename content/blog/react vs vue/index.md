---
title: "React vs Vue"
date: "2020-09-15T12:34:45.567Z"
category: "fe"
emoji: "🔥"
---

## React vs Vue

### 1. React

- JSX 기반 컴포넌트 구문
- 큰 규모에서 더 빛을 발하고, 테스팅이 수월하다.
  - 상태를 고유 속성대로 유지하기 때문이다. (불변성 유지)
- Web과 Native 앱 개발에 모두 사용 가능하다.
- 큰 개발자 커뮤니티
  - 페이스북의 지원
  - 다양한 레퍼런스, 확장 라이브러리 존재한다.
- 데이터 변이 측면
  - state 객체를 만들고, 업데이트에 조금 더 작업이 필요하다.

### 2. Vue

- HTML 기반 템플릿 구문
- SFC (Single File Component)
  - .vue 확장자를 가진 하나의 파일에 HTML, CSS, JavaScript 코드를 모두 정의하는 방식
  - 적당한 규모의 프로젝트에서 관리의 생산성을 높인다.
  - 협업을 수월하게 도와준다.
- 간편한 Syntax와 프로젝트 설정
- 빠른 렌더링과 더 작은 용량
- 데이터 변이 측면
  - 반드시 데이터 객체를 생성한 이후 data를 업데이트 할 수 있다.

### 3. React & Vue 공통점

1. Virtual DOM으로 빠른 렌더링
2. 경량 라이브러리
3. SSR
4. 라우터, 번들러, state management와 결합이 쉬움
5. 훌륭항 개발자 커뮤니티와 지원

### 4. 참고자료

- [다른 프레임워크와의 비교](https://kr.vuejs.org/v2/guide/comparison.html)
- [React 인가 Vue 인가?](https://joshua1988.github.io/web_dev/vue-or-react/)
- [React.js vs Vue.js, 자바스크립트 프레임워크 비교](http://library.gabia.com/contents/infrahosting/8284)
- [Vue.js와 React의 차이](https://gyoogle.dev/blog/web-knowledge/Vue.js%EC%99%80%20React%EC%9D%98%20%EC%B0%A8%EC%9D%B4.html)