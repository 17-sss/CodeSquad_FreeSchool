<!-- 코드스쿼드 FreeSchool : 01 Node.JS와 개발환경 -->
<!-- Mission1: debugging 기술문서 정리하기  -->

# 코드스쿼드 FreeSchool - Node.JS와 개발환경

## [1] Mission : debugging 기술문서 정리하기

### 1. breakpoints란

-   breakpoints는 코드 실행 중에 내가 break(중지) 해보고 싶을 때 사용.
-   특정 위치에서 에러가 발생한다거나 특정 값을 확인해야 할 때 주로 사용.
-   VSCODE에서 breakpoint를 설정하고 싶은 코드 부분을 클릭 후 F9 버튼을 누르면 좌측에 빨간 점이 생긴다.  
     혹은 좌측 코드 위치를 표시하는 숫자 왼쪽을 클릭하면 빨간점이 생긴다.  
     이로써 breakpoint가 설정된다.

### 2. watch사용법

1. 디버깅 할 때 VSCODE 좌측 조사식 창의(watch) + 버튼 클릭.
2. 추적하고자하는 조건이나 변수를 입력 후 Enter.  
   ex) `result === 1`  
   아래 예제 코드 참고.

```js
// ex) Code
function example() {
    // result === 1 이라는 표현식을 Watch 창에 추가했다고 가정함.

    // ▼ 여기에 breakpoint 지정하고 단위 실행(F10) 눌러가며 아래로.. 
    let result = "";           // 여기선 좌측 Watch의   result === 1: false
    result = 0;                //                     result === 1: false
    result = 1;                //                     result === 1: false 
    result = "123AB";          //                     result === 1: true 

    return result;
}
```

### 3. call stack 의 의미

-   자바스크립트 엔진이 구동되면서 실행 중인 코드를 추적하는 공간이 call stack.<br/>
    함수(function)의 호출(call)을 기록하는 스택(stack)자료구조다
-   호출 스택이란 함수의 호출을 기록하는 자료구조이다. </br>
    기본적으로 우리가 프로그램 안에서 위치한 곳이며, 만약 우리가 어떤 함수를 실행시킨다면, </br>
    우리는 스택 위에 무언가를 올리는(push) 행위를 하는 것이다. 그리고 우리가 함수로부터 반환을 받을 때, </br>
    우리는 스택의 맨 위를 가져오는(pop) 것임.
-   코드 예시

```js
function func01() {
    throw new Error('Oops!');
}
function func02() {
    func01();
}
function func03() {
    func02();
}
func03();
// Uncaught Error: Oops!
// at func01 (index.html:27)
// at func02 (index.html:30)
// at func03 (index.html:33)
// at window.onload (index.html:35)
```

-   호출 스택 (call stack)은 Stack 구조처럼 (LIFO)순으로 작동한다.
-   위 코드를 디버깅해보면 처음에 (anonymous) 출력, 그다음은 func03 -> func02 -> func01 순으로 쌓인다
-   위 코드 실행 시 에러가 나오는데, 처음에는 func01 -> func02 -> func03 -> onload 순으로 출력된다.
-   참고 자료
    -   [자바스크립트 호출 스택(Call Stack)](https://velog.io/@recordboy/자바스크립트-호출-스택Call-Stack)

### 4. Continue / Step over / Step into/ Step out : 디버깅 모드에서 쓰임

-   계속 (Continue)
    > 다음 breakpoint로 이동.
-   단위 실행 (Step over)
    > 한줄을 실행. 함수가 있으면 실행 후 다음으로 넘어감.
-   단계 정보 (Step info)   
    > 한줄을 실행하지만, 함수가 있으면 함수 내부로 들어갑니다.
-   단계 출력 (Step out)       
    > 함수를 끝까지 실행시키고 호출시킨 곳으로 되돌아 갑니다. </br>
    > (Step Info 실행 후 바로 return으로 넘어가고 싶을 때 유용)
