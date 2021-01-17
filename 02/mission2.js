// # 코드스쿼드 FreeSchool - 자바스크립트 함수 :: 추가 Mission 
const { log } = console;

/* 
    ES2015에 추가된 기능중, default parameter 와 rest parameter는 무엇인가? 알아본다.
    call by value, call by reference의 차이를 이해한다
*/

// [1] default parameter 와 rest parameter ======================================
/* 
    * 참고
        https://velog.io/@chdb57/default-parameter-rest-parameter
        https://poiemaweb.com/es6-extended-parameter-handling   // 여기에 매개변수 기본값, rest 말고도 볼거 많음
*/

// 1. 매개변수 기본 값
/* 
    1) 함수를 호출할 때 매개변수의 개수만큼 인수를 전달하는 것이 일반적이지만 
        그렇지 않은 경우에도 에러가 발생하지는 않는다. 
        함수는 매개변수의 개수와 인수의 개수를 체크하지 않는다. 
        인수가 부족한 경우, 매개변수의 값은 undefined이다.
*/
function sum1 (x, y) {
    return (x + y);
}
log(sum1(1));   // NaN
log();


// 2) 따라서 매개 변수에 적절한 인수가 전달되었는지 함수 내부에서 확인할 필요가 있다.
function sum2 (x, y) {
    x = x || 0;
    y = y || 0;
    return (x + y);
}
log(sum2(1));       // 1
log(sum2(1, 2));    // 3
log();


/* 
    3) ES6에서는 매개변수 기본값을 사용하여 함수 내에서 수행하던 인수 체크 및 초기화를 간소화할 수 있다. 
        매개변수 기본값은 매개변수에 인수를 전달하지 않았을 경우에만 유효하다. 
*/
function sum3 (x = 0, y = 0) {
    return (x + y);
}
log(sum3(1));       // 1
log(sum3(1, 2));    // 3
log();


/* 
    4) 매개변수 기본값은 함수 정의 시 선언한 매개변수 개수를 
        나타내는 함수 객체의 length 프로퍼티와 arguments 객체에 영향을 주지 않는다.
*/
function sum4 (x, y = 0) {
    log(arguments);  
    
    return "나(return) 없으면 undefined 자동 리턴!";
}
log(sum4.length);
log(sum4(5));       // [Arguments] { '0': 5 }
log(sum4(7, 2));    // [Arguments] { '0': 7, '1': 2 }
log();
// ----------------------------------------


// 2. Rest 파라미터
/* 
    1) Rest 파라미터(Rest Parameter, 나머지 매개변수)는 매개변수 이름 앞에 세개의 점 ...을 붙여서 정의한 매개변수를 의미한다. 
        Rest 파라미터는 함수에 전달된 인수들의 목록을 배열로 전달받는다.
*/
function rest1(...rest) {    
    log(Array.isArray(rest));   // true
    log(rest);                  // [1, 2, 3, 4, 5]
    log(rest.length);           // 5
}
rest1(1, 2, 3, 4, 5);
log();


/* 
    2) 함수에 전달된 인수들은 순차적으로 파라미터와 Rest 파라미터에 할당된다.
*/
function rest21(param, ...rest) {
    console.log(param); // 1
    console.log(rest);  // [ 2, 3, 4, 5 ]
}
rest21(1, 2, 3, 4, 5);

function rest22(param1, param2, ...rest) {
    console.log(param1); // 1
    console.log(param2); // 2
    console.log(rest); // [ 3, 4, 5 ]
}
rest22(1, 2, 3, 4, 5);
log();


/*
    3) Rest 파라미터는 이름 그대로 먼저 선언된 파라미터에 할당된 인수를 제외한 
        나머지 인수들이 모두 배열에 담겨 할당된다. 
        따라서 Rest 파라미터는 반드시 마지막 파라미터이어야 한다.

function rest3(...rest, param1, param2) { }
rest3(1, 2, 3, 4, 5);
// SyntaxError: Rest parameter must be last formal parameter
*/
log('rest3은 주석');
log();


/* 
    4) Rest 파라미터는 함수 정의 시 선언한 매개변수 개수를 나타내는 함수 객체의 
        length 프로퍼티에 영향을 주지 않는다.
*/
function rest41(...rest) {}
log(rest41.length); // 0

function rest42(x, ...rest) {}
log(rest42.length); // 1

function rest43(x, y, ...rest) {}
log(rest43.length); // 2
log();
//.. 이후는 https://poiemaweb.com/es6-extended-parameter-handling 보기



// -------------------------------------------------------------------------------------------
// [2] call by value, call by reference ======================================
/* 
    * 참고
        https://perfectacle.github.io/2017/10/30/js-014-call-by-value-vs-call-by-reference/        
*/
