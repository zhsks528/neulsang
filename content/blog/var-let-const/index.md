---
title: "var vs let vs const"
date: "2020-09-04T17:15:22.441Z"
category: "fe"
emoji: "🔥"
---

## var vs let vs const

### 1. var의 문제점과 let, const 등장 배경

#### 1-1. var 키워드로 선언된 변수의 특징 (문제점)

- 함수 레벨 스코프(Function-level scope)
  - 함수의 코드 블록만을 스코프로 인정하기 때문에 전역 함수 외부에서 생성한 변수는 모두 전역 변수이다. 이로써 전역 변수를 남발할 가능성을 높인다.
  - for 문의 변수 선언문에서 선언한 변수를 for 문의 코드  블록 외부에서 참조할 수 있다.

- var 키워드 생략 허용
  - 암묵적 전역 변수를 양산할 가능성이 크다

- 변수 중복 선언 허용
  - 의도하지 않은 변수값의 변경이 일어날 가능성이 크다. 
  - 어디서 어떻게 사용되는지 파악이 힘들다.
  - 코드참조

```js
    var name = 'bathingape'
    console.log(name) // bathingape

    var name = 'javascript'
    console.log(name) // javascript
```

- 변수 호이스팅
  - 변수를 선언하기 이전에 참조할 수 있다.

#### 1-2. let, const 등장 배경

- **ES6는 이러한 var 키워드의 단점을 보완하기 위해 let과 const 키워드를 도입**



### 2. var와 const, let의 차이점

#### 2-1. 변수 재선언 여부

|           | 변수 재선언 |
| :-------: | :---------: |
|  **var**  |      O      |
|  **let**  |      X      |
| **const** |      X      |



### 3. const, let의 차이점

#### 3-1. immutable 여부

|           | 변수 재선언 | 변수 재할당 |
| :-------: | :---------: | :---------: |
|  **let**  |      X      |      O      |
| **const** |      X      |      X      |

#### 3-2. 코드 참조

```javascript
// let
let a = 'javascript'
let a = 'javascript2' // Uncaught SyntaxError: Identifier 'a' has already been declared
a = 'javascript3'     // 가능

// const
const b = 'javascript'
const b = 'javascript2' // Uncaught SyntaxError: Identifier 'b' has already been declared
b = 'javascript3'    // Uncaught TypeError:Assignment to constant variable.
```



### 4. ES6 이후 변수 선언 방식 정의

#### 4-1. 정의

변수 선언에는 기본적으로 const를 사용하고 let은 재할당이 필요한 경우에 한정해 사용하는 것이 좋다. 

원시 값의 경우, 가급적 상수를 사용하는 편이 좋다.

객체를 재할당하는 경우는 흔치 않으므로 const를 사용한다. 

의도치 않은 재할당을 방지해주기 때문에 보다 안전하다.

#### 4-2. 정리

| 방식  | 정의                                                         |
| ----- | ------------------------------------------------------------ |
| var   | ES6를 사용한다면 var 키워드는 사용 X                         |
| const | 기본적인 변수에 선언<br />재할당이 필요없는 상수와 객체      |
| let   | 재할당이 필요한 경우에 한정<br />변수의 스코프는 최대한 좁게 만든다. |


### 참조

- https://gist.github.com/LeoHeo/7c2a2a6dbcf80becaaa1e61e90091e5d
- [https://velog.io/@bathingape/JavaScript-var-let-const-%EC%B0%A8%EC%9D%B4%EC%A0%90](https://velog.io/@bathingape/JavaScript-var-let-const-차이점)
- https://poiemaweb.com/es6-block-scope
