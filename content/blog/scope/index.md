---
title: "Function-scope와 Block-scope"
date: "2020-09-03T22:40:21.556"
category: "fe"
emoji: "🔥"
---

## Function-scope와 Block-scope

관련 scope 예제를 살펴보자.

```javascript
function scopeTest() {
    boolean is = true;
    
    if (is) {
        boolean is = false;
    }

    for(var i=0;i<=5;i++) {
        var inFor = i;
    }

    console.log(inFor); // 출력되는 값은?console.log(is);}
```

inFor 변수는 어떤 값이 출력될 것인가?

출력되는 값은 inFor = 5, is = false 이다.

큰 이유는 block scope가 아닌 function scope이기 때문이다.

\* block scope라면 is 변수는 각각 다른 변수여야한다. (scopeTest 함수 내부, if문 내부)



자바스크립트에서는 block scope가 사실상 없다. (es5기준)

관련된 문제점을 통해 자세히 알아보자.



```
function scopeTest() {
    var es = [];
    for (var i = 0; i < 10; i++) {
        es[i] = function () {
            console.log("ECMAScript is ES" + i);
        };
    }
    es[6](); // 출력되는 값은?   
}
```



es[6]() 호출 시 무엇이 출력될까?

우리가 원하는 출력값은 "ECMAScript is ES6" 이다.

하지만 "ECMAScript is ES10"이 출력된다.

이유는 function scope 이기에 i는 scopeTest 함수단위인 scope에 존재한다.

결과적으로 es[6]() 호출 시 scope 안의 최종 i인 10을 참조하기 때문에 10이 출력된다.



i에 대해 원하는 값을 위해 참조할 scope를 다르게 해야한다.

즉, i가 참조할 scope는 block scope 형태로 만들어줘야한다.

즉시실행함수를 사용하여 해결할 수 있다.



```
for (var i = 0; i < 10; i++) {
  (function(c) {
    es[i] = function () {
      console.log("ECMAScript is ES" + c);
    };
  }(i));
}
```



즉시실행함수를 통해 i의 scope를 block scope와 같은 형태로 분리했다.

es6의 경우에는 block scope인 let 키워드를 통해 해결할 수 있다.



```
var es = [];
for (var i = 0; i < 10; i++) { // or (let i = 0; i < 10; i++)
    let c = i;
    es[i] = function () {
        console.log("ECMAScript is ES" + c);
    };
}
es[6]();
```



### 참조

- https://mygumi.tistory.com/130