// example
function example(a: number, b: number) {
  return a + b;
}

// 다섯가지 함수 선언 방법

// 이름을 붙인 함수
function namefunc(name: string) {
  return "Hello " + name;
}

// 함수 표현식
let greet = function (name: string) {
  return "Hello " + name;
};

// 화살표 함수 표현식
let arrowFunc = (name: string) => {
  return "Hello " + name;
};

// 단축형 화살표 함수 표현식
let shortsArrow = (name: string) => "Hello" + name;

// 함수 생성자
let newFunc = new Function("name", 'return "Hello" + name');

example(1, 2);
namefunc("Crystal");

//example(1) // Error
//example(1, 'a') // Error

// 나머지 매개변수
// 인수를 여러개 받는 함수라면 그 목록을 배열 형태로 건넬 수도 있다.

function sum(numbers: number[]): number {
  return numbers.reduce((total, n) => total + n, 0);
}

sum([1, 2, 3]); // 6으로 평가한다.

function sumVariadic(): number {
  return Array
    .from(arguments)
    .reduce((total, n) => total + n, 0)
}

// sumVariadic(1, 2, 3) // error

// 안전하지 않은 arguments

function a(){
    return Array.from(arguments).reduce((total, n) => total + n, 0)
}

// 안전하게 사용하기
function preventfunc(...numbers:number[]) : number {
    return numbers.reduce((total, n) => total + n, 0)
}

preventfunc(1,2,3) // 6

// call, apply, bind

function add(a:number, b:number):number {
    return a+ b
}

add(10, 20)// 30
add.apply(null, [10, 20]) // 30 [apply 함수 안에서 값을 this 로 한정(bind)하며 (여기에서는 this를 null로 한정) 두번째 인수를 펼쳐 함수에 매개변수로 전달 ]
add.call(null, 10, 20) // 30 [call 도 같은 기능이긴 하지만 인수를 펼쳐 전달하지 않고 순서대로 전달하는 점만 다르다.]
add.bind(null, 10, 20) () // 30 [bind도 this 인수를 함수의 인수 목록으로 한정한다, 더룬 점은 bind는 함수를 호출하지 않고 새로운 함수를 반환, 개발자는 ()나 .call을 이용해 반환된 함수를 호출하거나 .apply로 아직 한정하지 않은 매개변수를 추가로 전달할수 있다. ]


