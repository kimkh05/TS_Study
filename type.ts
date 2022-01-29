function squareOf(n){
    return n*n
}
console.log(squareOf(2));// 4
console.log(squareOf('z')); // NaN

//let d = [1, 'a']
//d.map(_ => {
  //  if(typeof _ === 'number'){
    //    return _ * 3
   // }
    //return _.toUpperCase()
//})

function buildArray(){
    let a = [];
    a.push(1);
    a.push('x');
    return a;
}

//let a: [number] = [1]
//let b: [string, string, number] = ['malcolm', 'qladwell', 1963];
//b = ['queen', 'elizabeth', 'ii', 1926]// ErrorTS2322
// 'number' 타입에 할당할 수 없음

function nullReturn(x:number){
    if(x<10) return x;
    return null;
}

function undefinedReturn(){
    return undefined;
}

function voidFunc(){
    let a = 2+2;
    let b = a*a;
}

function neverReturn(){
    throw TypeError('I always error');
}

function neverReturn2(){
    while(true){
        // doSomething();
    }
}

// null : 값이 없음
// undefined : 아직 값을 변수에 할당하지 않음
// Void  :return 문을 포함하지 않은 함수
// never : 절대 반환하지 않는 함수