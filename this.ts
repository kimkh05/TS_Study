let a = {
    b() {
        return this
    }
}
a.b() // b()의 바디 안에서 this는 객체 x임

function fancyData(){
    //return ${ this.getDate() } /${ this.getMonth() } / ${ this.getFullYear() }
}

fancyData.call(new Date)

fancyData() // this.getDate는 함수가 아님

function fancyDate(this: Date) {
    // return ${ this.getDate() } /${ this.getMonth() } / ${ this.getFullYear() }
}

// 제너레이터 함수
function* createFibonacciGenerator(){ // 1
    let a = 0;
    let b = 1;
    while(true){ // 2
        yield a;// 3
        [a, b] = [b, a+b] // 4
    }
}

let fibonacciGenerator = createFibonacciGenerator()

fibonacciGenerator.next() // {value: 0, done: false}

fibonacciGenerator.next() // {value: 1, done: false}

fibonacciGenerator.next() // {value: 1, done: false}

fibonacciGenerator.next() // {value: 2, done: false}

fibonacciGenerator.next() // {value: 3, done: false}

fibonacciGenerator.next() // {value: 5, done: false}

/*
1. 함수명 앞에 *는 이 함수가 제너레이터임을 의미한다. 제너레이터 함수를 호출하면 이터러블 반복자가 반환된다. 
2. 제너레이터는 영구적으로 값을 생성할 수 있다. 
3. 제너레이터는 yield 라는 키워드로 값을 방출한다. 소비자가 제너레이터에 다음 값을 요청하면(expample: next 호출같은 경우) yield를 이용해 결과를 소비자에게 보내고, 소비자가 다음 값을 다시 요청하기 전까지는 실행을 중지한다.
이런 방식으로 동작하므로 while(true) 루프가 영원히 실행되다가 비정상 종료되는 상황이 일어나지 않는다. 
4. 다음 피보나치 숫자를 계산하기 위해 a에 b를, b에 a+b를 한번에 다시 할당한다. 
*/

// 제너레이터 함수와 일반 함수와 차이점
/*
제너레이터 함수는 호출 시 제너레이터 객체를 생성해 반환한다.
일반 함수는 호출이 되면 함수의 코드 블록을 실행시킨다. 반면, 제너레이터 함수는 코드 블록을 실행시키는 것이 아니라 제너레이터 객체를 생성해서 반환한다.
*/

// IterableIterator 에서 방출하는 타입을 감싸서 제너레이터의 타입을 명시하는 방법도 있다.
function* createNumbers(): IterableIterator<number> {
    let n = 0;
    while(1){
        yield n++
    }
}

let numbers = createNumbers();
numbers.next() // {value: 0, done: false}

numbers.next() // {value: 1, done: false}

numbers.next() // {value: 2, done: false}


// 반복자
/*
반복자와 제너레이터는 상생 관계이다. 제너레이터 값의 스트림을 생성할 수 있고 반복자로 생성된 값을 소비할 수 있기 때문이다.
*/

let num = {
    *[Symbol.iterator]() {
        for(let i = 1;i<=10;i++){
            yield i
        }
    }
}

// num은 이터러블이며, 제너레이터 함수 num[Symbol.iterator]()을 호출하면 이터러블 반복자가 반환한다. 