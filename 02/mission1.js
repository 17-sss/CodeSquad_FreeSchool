// # 코드스쿼드 FreeSchool - 자바스크립트 함수 :: Mission
const { log } = console;

// 1. 반지름을 입력받아 원의 넓이를 계산하는 함수를 만든다.
/* 
    1) 원 둘레, 면적 공식
        - 원주(원의 둘레) 구하는 공식 = 2*π(파이)*r(반지름)
        - 원면적 구하는 공식 = π(파이)*r(반지름)^2 
        참고: https://kangs523.tistory.com/7
    2) 소수점 자리수 올림, 버림, 반올림, 절삭
        참고: https://thingsthis.tistory.com/47
*/
const calcAreaCircle = (r) => Number((Math.PI * (r ** 2)).toFixed(1));
log(calcAreaCircle(5));

// 2. 필요한 인자를 입력받아 사각형의 넓이를 계산하는 함수를 만든다.
// 사각형 넓이 공식: 가로 * 세로
const calcAreaRectangle = (w, h) => w * h;
log(calcAreaRectangle(5, 2));

// 3. 필요한 인자를 입력받아 사다리꼴의 넓이를 계산하는 함수를 만든다.
/* 
    * 사다리 꼴 넓이 공식
        - 윗변과 아랫변을 더하고 높이를 곱한 다음 2로 나눔. [(a+b)*c]/2
        참고: https://deleger.tistory.com/245
*/
const calcAreaTrapezoid = (upLength, downLength, height) => ( ((upLength + downLength) * height) / 2 );
log(calcAreaTrapezoid(5, 10, 5));

// 4. 필요한 인자를 입력받아 원기둥의 넒이를 계산하는 함수를 만든다.
/* 
    * 원기둥 넓이 공식
        - 밑면의 넓이 = 원의 넓이 = 반지름 * 반지름 * 3.14
        - 옆 넓이 = 직사각형의 넓이 = 밑면의 원주 * 원기둥의 높이
        - 원기둥 겉넓이 =(한 밑면의 넓이 * 2) + 옆 넓이
*/
const calcAreaCylindrical = (circleR, rectangle = { w, h }) => {
    const { w, h } = rectangle;
    if (!circleR || !rectangle || !w || !h) 
        return new Error('매개변수 값을 받아오지 못했습니다.');
    if (typeof circleR !== "number" || typeof w !== "number" || typeof h !== "number") 
        return new Error('매개변수 값이 숫자가 아닙니다..');

    return Number((Math.PI * 2 * circleR).toFixed(1)) + calcAreaRectangle(w, h);
}

log(calcAreaCylindrical(5, {w: 10, h: 5} ));


// 5. 숫자가 아니면 에러를 반환하도록 구현한다. -- 4번만 구현
// 6. 인자의갯수가 부족하면 에러를 반환한다.    -- 4번만 구현