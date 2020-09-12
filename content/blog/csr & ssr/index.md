---
title: "CSR & SSR"
date: "2020-09-12T14:32:55.661Z"
category: "fe"
emoji: "🔥"
---

## CSR & SSR 

### 1. CSR & SSR의 경계

**화면을 렌더링 하는 위치**, 유저의 요청에 따른 데이터 변화로 해당 데이터가 **변화된 화면을 만들어주는 위치**가 어디인지에 따라서 SSR, CSR로 나뉜다.

- CSR(클라이언트 사이드 렌더링) = 변화된 UI를 유저의 브라우저에서 만든다.
- SSR(서버 사이드 렌더링) = 서버 단에서 변화된 데이터로 화면을 미리 만들어서 완성본을 전달한다.

### 2. CSR의 정의

![CSR](https://raw.githubusercontent.com/zhsks528/TIL/master/Resource/CSR.PNG)

이미지 출처 : https://velog.io/@namezin/CSR-SSR

Browser가 서버에 HTML과 static파일을 요청한 후 로드되면 사용자의 상호작용에 따라서 javascript를 통해 동적으로 Rendering한다. 

필요에 따라 데이터를 서버에 요청해서 받아와 Rendring한다.

### 3. CSR의 장단점

장점

- **트래픽이 감소한다. (서버 부담이 적다)**
  - 필요하거나 변경된 데이터만 받는다.
- **사용자 경험(UX)이 뛰어나다.**
  - 새로고침이 발생하지 않아 사용자가 네이티브 앱과 비슷한 경험을 할 수 있다.

단점

- **초기 로딩 속도 느림**
  - 모든 JS 파일을 다운 받아와야 하기 때문에, 초기에 오래 걸린다.
- **검색엔진(SEO) 문제 발생**
  - 구글 검색엔진은 자바스크립트 엔진이 내장되어있지만, 네이버나 다음 등 검색엔진은 크롤링에 어려움이 있어 SSR을 따로 구현해야하는 번거로움 존재

### 4. SSR의 정의

![SSR](https://raw.githubusercontent.com/zhsks528/TIL/master/Resource/SSR.PNG)

이미지 출처 : https://velog.io/@namezin/CSR-SSR

완전하게 만들어진 HTML파일을 받아오고 Rendering하게 된다.

웹서버에 요청할때 마다 Browser 새로고침이 일어나고 서버에 새로운 페이지에 대한 요청을 하는 방식이다.

### 5. SSR의 장단점

장점

- **검색엔진최적화(SEO) 가능**
  - 서버사이드 렌더링을 통해 얻을 수 있는 가장 큰 이점이다.

- **초기로딩 성능 빠름**
  - CSR에 비해 다운 받는 파일이 적으므로 속도가 빠르다.

단점

- **사용가 경험(UX)가 좋지 않다.**
  - 페이지 이동시 새로고침이 발생하기 때문이다.
- **성능 악화 가능성 여부**
  - 서버 렌더링에 따른 부하가 생긴다.

### 6. 정리

![CSR&SSR](https://raw.githubusercontent.com/zhsks528/TIL/master/Resource/CSR%26SSR.PNG)

이미지 출처 : https://velog.io/@namezin/CSR-SSR

|                  | **CSR**                | **SSR**  |
| ---------------- | ---------------------- | -------- |
| **초기로딩속도** | **느림**               | **빠름** |
| **서버 부담**    | 적음                   | 많음     |
| **SEO**          | 불가능 (단, 구글 제외) | 가능     |
| **UX 성능**      | 좋음                   | 나쁨     |

### 5. 참고 자료

- [CSR, SSR](https://velog.io/@namezin/CSR-SSR)
- [서버사이드렌더링(SSR) & 클라이언트사이드렌더링(CSR)](https://velog.io/@zansol/%ED%99%95%EC%9D%B8%ED%95%98%EA%B8%B0-%EC%84%9C%EB%B2%84%EC%82%AC%EC%9D%B4%EB%93%9C%EB%A0%8C%EB%8D%94%EB%A7%81SSR-%ED%81%B4%EB%9D%BC%EC%9D%B4%EC%96%B8%ED%8A%B8%EC%82%AC%EC%9D%B4%EB%93%9C%EB%A0%8C%EB%8D%94%EB%A7%81CSR)
- [클라이언트 사이드 렌더링, 서버사이드 렌더링, SPA, React](https://velog.io/@imacoolgirlyo/%ED%81%B4%EB%9D%BC%EC%9D%B4%EC%96%B8%ED%8A%B8-%EC%82%AC%EC%9D%B4%EB%93%9C-%EB%A0%8C%EB%8D%94%EB%A7%81-%EC%84%9C%EB%B2%84%EC%82%AC%EC%9D%B4%EB%93%9C-%EB%A0%8C%EB%8D%94%EB%A7%81-SPA-React)
- [이미지 CSR, SSR, rendering](https://velog.io/@namezin/CSR-SSR)