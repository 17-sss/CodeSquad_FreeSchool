// # 코드스쿼드 FreeSchool - 자바스크립트 함수 (1)
// 일부만 실습해봄.

const { log } = console;

// ============================================
/* 
    * 연산자 - 비교연산자
        비교는 == 보다는 === 를 사용한다. ==로 인한 다양한 오류 상황이 있는데 아래 결과를 참고하자.
*/

// 1) == 사용
log('1) ==');
log(0 == false); // true
log('' == false); // true
log(null == false); // false
log(0 == '0'); // true
log(null == undefined); // true

log();

// 2) === 사용
log('2) ===');
log(0 === false); // false
log('' === false); // false
log(null === false); // false
log(0 === '0'); // false
log(null === undefined); // false

log();
// ============================================//


// ============================================
/* 
    * for, while 이외의 반복문
        배열의 경우 forEach와 같은 메서드를 통해서 좀더 쉽게 탐색할 수 있다.
        for-of를 통한 탐색도 자주 사용된다.
        (for-of를 따르는 타입은 배열이외에도 문자열등 더 많다. iterable object인 경우에 for-of를 사용할 수 있는데 이부분은 나중에 더 공부한다)
        for-in은 객체를 탐색할때 사용한다.
*/
// ============================================//


// ============================================
/*
 * 문자열에 다양한 메서드가 있음.
 */
'ab:cd'.split(':'); //["ab","cd"]
'ab:cd'.replace(':', '$'); //"ab$cd"
' abcde  '.trim(); //"abcde"
'뺉'.charCodeAt(); //뭘까? --> 48777
// ============================================//


// ============================================
/* 
    * express & statements
        expression(식) 과 statements(문) 의 차이는 용어이긴 하지만 그 차이를 알아둘 필요가 있다.
        expression은 값(value)를 생산해내고,
        statements는 프로그램 로직을 만들어낸다(조건문, 반복문 등)

        아래 내용을 참고하면 좋다. (영문)
        https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Expressions_and_Operators
        https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements
        http://2ality.com/2012/09/expressions-vs-statements.html        
    
    + 기타 링크 (한글)
        https://m.blog.naver.com/jdub7138/221028032624
*/

// ============================================//


// ============================================
/*
    * 함수 - 함수의 선언
        함수는 여러개의 인자를 받아서, 그 결과를 출력한다.
        파라미터의 갯수와 인자의 갯수가 일치하지 않아도 오류가 나지 않는다.
        파라미터가 1개일때, 인자의 갯수가 0개라면, 파라미터(매개변수)는 undefined이라는 값을 갖게 된다.
        값이 할당되지 않았기 때문이다.
*/

// 아래 함수 선언코드는 함수선언문이라고 한다.
function test() {
    log(printName());
    function printName() {
        return 'anonymouse';
    }
}
test(); //anonymouse

// Custom
function testCustom(aParam) {
    return aParam;
}
log(testCustom());  // undefined
log(testCustom(1)); // 1
// ============================================//


// ============================================
/* 
    * 함수 - 함수표현식
        함수는 아래 printName과 같이 표현할 수도 있다. (함수가 표현식으로 표현한다는 것은 '값'으로 함수가 표현된다고 생각할 수 있다)
        이렇게 표현하면 함수선언문과 달리 선언과 호출순서에 따라서 정상적으로 함수가 실행되지 않는다.
*/
// 1. START
function test() { 
	console.log(printName()); 
	var printName = function() {
		return 'anonymouse';
	}
}

test(); //TypeError: printName is not a function

/*
    오류내용을 보면 function이 아니라고 나왔다. 이유는 printName이 실행되는 순간 'undefined'으로 지정됐기 때문이다.
    자바스크립트 함수는 실행되기 전에 함수안에 필요한 변수값들을 미리 다 모아서 선언한다. 함수 안에 있는 변수들을 모두 끌어올려서 선언한다고해서, hoisting이라고 한다.
    따라서 아래 코드역시 함수를 값으로 가지지만 어쨋든 printName도 변수임으로 끌어올려지게 되고, 값이 할당되기 전에 실행됐음으로 undefined이 할당된 상태이다.
*/

printName(); //아직, printName이 undefined으로 할당된 상태이다. 
var printName = function(){}

/*
    printName이라는 변수가 존재하고 아직 값이 할당되기 전임으로 printName에는 'undefined'이라는 기본 값이 할당된 셈이다.
    const와 let을 사용하면 또 달라진다. 이번에는 ReferenceError 가 발생한다.
    const, let을 가급적 사용해서 이와 같이 명확하게 오류를 발생시키는 것이 더 좋다.
*/
function test() { 
	console.log(printName()); 
	const printName = function() {
		return 'anonymouse';
	}
}

test(); //ReferenceError: printName is not defined

// ============================================//
