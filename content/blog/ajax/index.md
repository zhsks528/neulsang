---
title: "AJAX"
date: "2020-09-15T13:45:45.567Z"
category: "fe"
emoji: "🔥"
---

## AJAX

### AJAX의 정의

AJAX = Asynchronous Javascript And XML의 약자

JavaScript를 사용한 비동기 통신, 클라이언트와 서버간에 XML 데이터를 주고받는 기술이다.

### AJAX를 사용하는 이유

기본적으로 HTTP프로토콜은 클라이언트쪽에서 Request를 보내고 Server쪽에서 Response를 받으면 이어졌던 연결이 끊기게 되어있다. 그래서 화면의 내용을 갱신하기 위해서는 다시 request를 하고 response를 하면서 페이지 전체를 갱신하게 된다. 하지만 이렇게 할 경우 페이지의 일부분만 갱신할 경우에도 페이지 전체를 다시 로드해야하는데 엄청난 자원낭비와 시간낭비를 초래한다.

하지만 ajax는 html 페이지 전체가아닌 일부분만 갱신할수 있도록 XML HttpRequest객체를 통해 서버에 request를 한다. 이 경우 Json이나 xml형태로 필요한 데이터만 받아 갱신하기 때문에 그만큼의 자원과 시간을 아낄 수 있다. 

### AJAX의 동작방식

[![img](https://github.com/baeharam/Must-Know-About-Frontend/raw/master/images/javascript/ajax.png)](https://github.com/baeharam/Must-Know-About-Frontend/blob/master/images/javascript/ajax.png)

사용자가 AJAX가 적용된 UI와 상호작용하면, 서버에 AJAX 요청을 보내게 된다. 서버는 DB에서 데이터를 가져와서 JS 파일에 정의되어 있는 대로 HTML/CSS와 데이터를 융합하여 만든 DOM 객체를 UI에 업데이트 시킨다. 비동기로 이루어지며, 기존의 페이지를 전부 로딩하는 방식이 아닌 **일부만 업데이트 하는 방식이다.**

### AJAX의 장단점

**장점**

1. 웹페이지의 속도향상
2. 서버의 처리가 완료 될때까지 기다리지 않고 처리 가능하다.
3. 서버에서 Data만 전송해면 되므로 전체적인 코딩의 양이 줄어든다.
4. 기존 웹에서는 불가능했던 다양한 UI를 가능하게 해준다. 사진공유 사이트 Flickr의 경우 사진의 제목이나 태그를 페이지 리로드 없이 수정할 수 있다.

 **단점**

1. 히스토리 관리가 안 된다. (보안에 좀 더 신경을 써야한다.)
2. 연속으로 데이터를 요청하면 서버 부하가 증가할 수 있다.
3. XMLHttpRequest를 통해 통신을 하는 경우사용자에게 아무런 진행 정보가 주어지지 않는다. 그래서 아직 요청이 완료되지 않았는데 사용자가 페이지를 떠나거나 오작동할 우려가 발생하게 된다. 

### 4. 참고자료

- [Ajax란 무엇인가?](https://coding-factory.tistory.com/143)
- [AJAX](https://github.com/baeharam/Must-Know-About-Frontend/blob/master/Notes/javascript/ajax.md)