// for-of로 반복자 반복하기
for(let a of numbers){
    // 1, 2, 3 등
}

// 반복자 스프레드
let allNumbers = [...numbers] // number[]

// 반복자 구조 분해 할당
let [one, two, ...rest] = numbers // [number, number, number[]]

// 호출 시그니쳐

function sum (a:number, b:number){
    return a+b
}
// sum 은 Function 타입이라 말할 수 있다. 

