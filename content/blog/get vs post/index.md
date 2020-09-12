---
title: "GET Method vs POST Method"
date: "2020-09-12T13:41:33.556Z"
category: "cs"
emoji: "🖥️"
---

## GET Method vs POST Method

![GETvsPost](https://raw.githubusercontent.com/zhsks528/TIL/master/Resource/GET%20vs%20POST.PNG)

이미지 출처 : https://dev.to/williamragstad/how-to-use-ajax-3b5e

### 1. GET Method의 정의

GET Method는 주로 데이터를 읽거나(Read) 검색(Retrieve)할 때에 사용되는 메소드이다.

### 2. GET Method의 특징

- URL에 변수(데이터)를 포함시켜 요청한다.
- 데이터를 Header(헤더)에 포함하여 전송한다.
- URL에 데이터가 노출되어 보안에 취약하다.
- 전송하는 길이에 제한이 있다.
- 캐싱할 수 있다.

### 3. POST Method의 정의

POST Method는 주로 새로운 리소스를 생성(Create)할 때 사용되는 메소드이다.

### 4. POST Method의 특징

- URL에 변수(데이터)를 노출하지 않고 요청한다.
- 데이터를 Body(바디)에 포함시킨다.
- URL에 데이터가 노출되지 않아서 기본 보안은 되어있다.
- 전송하는 길이에 제한이 없다.
- 캐싱할 수 없다.

### 5. 정리

|                 | GET                                                          | POST                                                   |
| --------------- | ------------------------------------------------------------ | ------------------------------------------------------ |
| History         | 파라미터들은 URL의 일부분이기 때문에 브라우저 히스토리에 남는다. | 파라미터들이 브라우저 히스토레이 저장되지 않는다.      |
| Bookmarked      | 요청 파라미터들이 URL로 인코딩되므로 즐겨찾기가 가능하다.    | request URL에 나타나지 않으므로 즐겨찾기가 불가능하다. |
| 데이터 저장위치 | Header                                                       | Body                                                   |
| 보안            | 취약                                                         | 안전                                                   |
| 전송길이제한    | 있음                                                         | 없음                                                   |
| 캐싱            | 가능                                                         | 불가능                                                 |
| 사용            | 민감한 정보를 전송하는데 사용 X                              | 민감한 정보를 전송하는데 사용 O                        |

### 6. 참고 자료

- [GET과 POST의 비교 및 차이](https://mangkyu.tistory.com/17)
- [HTTP Method 정리 / GET vs POST 차이점](https://im-developer.tistory.com/166)