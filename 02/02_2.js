// # 코드스쿼드 FreeSchool - 자바스크립트 함수 (2)
// 일부만 실습해봄.

const { log } = console;

// ============================================
/* 
    * 함수 - 반환값과 undefined
        아래 함수의 반환값은 무엇일까?
*/

function printName(firstname) {
    const myname = 'jisu';
    const result = myname + ' ' + firstname;
    // return 안써놈!!
}
log(printName());
// 정답은 undefined이다. 자바스크립트 함수는 반드시 return값이 존재하며, 없을때는 기본 반환값인 'undefined'이 반환된다.
// ============================================//


// ============================================
/* 
    * 함수 - arguments 속성     ★★★  
        함수가 실행되면 그 안에서 arguments라는 특별한 지역변수가 존재한다. 
        자바스크립트 함수는 선언한 파라미터보다 더 많은 인자를 보낼 수도 있다. 
        이때 넘어온 인자를 arguments로 배열의 형태로 하나씩 접근할 수가 있다. 
        arguments는 배열타입은 아니다. 따라서 배열의 메서드를 사용할 수가 없다.

        + 메모
            1. 어렴풋이 ...args는 조금 알았지만 자세힌 몰랐었음!!
            2. 근데 또 ...args와 arguments는 다른 거 같음.
                1) ...args 매개변수는 배열 메서드가 가능함.
                2) arguments 지역변수는 배열 메서드 불가능
*/
function a() {
    console.log(arguments);
}
a(1, 2, 3);

// 자바스크립트의 가변인자를 받아서 처리하는 함수를 만들때 등에서 arguments속성을 유용하게 사용할 수가 있다.
// # 해볼만한 것(1 ~ 무한대까지 인자를 받아 합을 구하는 함수를 만들어보자)
function argsTest1() {
    let result = 0;
    for (let i = 0; i < arguments.length; i++) {
        result += arguments[i];
    }
    return result;
}
log(argsTest1(1, 2, 3));

function argsTest2(...args) {
    return args.reduce((prev, curr) => (prev + curr), 0);
}
log(argsTest2(1, 2, 3));
// ============================================//


// ============================================
/* 
    * 유용한 native 함수들
        Date나 Math와 같은 native객체를 사용한 JavaScript 함수를 사용할 수 있다.

        MDN사이트를 통해서 자바스크립트를 함수를 어떻게 사용할 수 있는지 도움을 받을 수 있다.
        실제로 구글검색을 통해서 자바스크립트 레퍼런스를 찾아보면 대부분 MDN사이트가 상위에 노출된다.
        관련검색어를 MDN과 함께 검색하면 정확히 원하는 결과를 얻을 수 있다. ('mdn javascript math')

        Math관련한 정보를 찾는다고 가정하자.
        Math는 객체라서 다양한 메서드 설명이 나온다.
        Math.floor 과 같은 메서드를 검색해도 비슷하긴하다.

        1. Math
            https://developer.mozilla.org/ko/docs/Web/JavaScript/Reference/Global_Objects/Math

        2. Date
            https://developer.mozilla.org/ko/docs/Web/JavaScript/Reference/Global_Objects/Date
*/
// ============================================//