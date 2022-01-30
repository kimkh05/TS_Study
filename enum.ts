enum Language {
    English = 0,
    Spanish = 1
}

enum Color{
    Red = '#c10000',
    Blue = '#007ac1',
    Pink = 0xc10050, // 16진수 리터널
    White = 255 // 10진수 리터널
}

let red = Color.Red;

let pink = Color.Pink

/*
let a = Color.Red;
let b = Color.Green // 타입 존재 하지 않음
let c = Color[255] // String
let d = color[6] // String(!!!)

접근할 수 없어야 하지만 더 안전하게 접근하기
const enum Language{
    English,
    Spanish,
    Russian
}

// 유효한 enum 키 접근 
let a = Language.English // Langhage

// 유효하지 않은 enum 키 접근
let b = Language.Tagalog // Tagalog 프로퍼티는 존재하지 않는다.

// 유효한 키 접근
let c = Language[0] // Error : const enum 멤버는 문자열 리터널로만 접근 가능.

// 유효하지 않은 enum 키 접근
let d = Language[6] // Error : const enum 멤버는 문자열 리터널로만 접근 가능
*/

/*
const enum 사용방법

const enum Flippable{
    Burger,
    Chair,
    Cup,
    Skateboard,
    Table
}

function flip(f: Flippable){
    return 'flipped it'
}

flip(Flippable.Chair); //'flipped it'
flip(Flippable.Cup); // 'flipped it'
flip(12) // 'flipped it' (!!!)

//모두다 할당 가능하다. 

const enum Flippable{
    Burger = 'Burger',
    Chair = 'Chair',
    Cup = 'Cup',
    Skateboard = 'Skateboard',
    Table = 'Table'
}

function flip(f: Flippable){
    return 'flipped it'
}

flip(Flippable.Chair); //'flipped it'
flip(Flippable.Cup); // 'flipped it'
flip(12) // Error : 12 인수타입은 매개변수 타입에 할당 불가능
filp('Hat') // Error : 'Hat' 인수타입은 매개변수 타입에 할당할 수 없다.
*/

/*결론
let & var 를 사용하면 일반적인 타입으로 추론하는 방면, const 를 이용하면 더욱 구체적인 타입을 추론하게 만든다. 

타입         |    서브타입
Boolean       불 리터널
bigint          큰 정수 리터럴
number          숫자 리터럴
string          문자열 리터럴
symbol          Unique symbol
object          객체 리터럴
Array              튜플
enum                const Enum
*/
