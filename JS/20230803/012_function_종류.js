// 화살표 함수에 다양한 예제(****)
// 읽어볼만한 문헌 : https://ko.javascript.info/arrow-functions-basics
// 1. 함수 선언문
function sum(x, y){
  return x + y;
}

// 2. 함수 표현식
let sumXY = function(x, y){
  return x + y;
};
console.log(sum(10, 20));
console.log(sumXY(10, 20));

// 3. 화살표 함수
// 3.1 return 문만 있는 경우 간소화 가능
function sum(x, y){
  return x + y;
}
let sum = (x,y) => x+y

// 3.2 함수의 기능 + return이 있는 경우
function sum(x, y){
  let z= x+y
  console.log(z)
  return x + y;
}
let sum = (x,y) => {
  let z= x+y
  console.log(z)
  return x + y;
}

// 3.3 인자가 하나인 경우
function pow(x) {
  return x * x
}
let pow = x => x * x
let pow = (x) => x * x

// 4. 즉시 실행
// 대부분 main 함수로 만들어서 사용하는 경우가 많다.
// 이점 : 변수가 휘발되어서 메모리를 절약할 수 있다. main을 다시 사용할 수 없게 할 수 있다.
// 전역변수 등을 사용하지 않게 할 수 있어요.
(function (){
  console.log('즉시 실행')
})

// 5. 재귀함수(중급자 될 때까지는 권하지 않는다.)
// 반복문으로 만들 수 있으면 재귀로 표현이 가능하고
// 재귀로 표현이 가능하면 반복문으로 표현이 가능합니다.
function factorial(n){
  if(n == 1){
      return 1;
  }
  return n * factorial(n-1);
}
factorial(5)

// factorial(5) == 5 * factorial(4)
// factorial(4) == 4 * factorial(3)
// factorial(3) == 3 * factorial(2)
// factorial(2) == 2 * factorial(1)
// factorial(1) == 1

// 6. 지역변수 전역변수
let a = 10; // 전역변수
function test() {
    console.log(a)
}
test()

let a2 = 10
function one() {
    let a2 = 100 // 지역변수
    function two() {
        function three() {
            console.log(a2)
        }
        three()
    }
    two()
}
one()

// 자신의 공간에 해당 변수가 없으면 상위 공간에서 찾습니다.
// 못찾으면 error입니다.

// 지역변수 끼리는 서로 간섭을 못합니다.
function one() { // 메모장
    let x = 10 // x는 라인 수
}

function two() { // 카메라
    let x = 100 // x는 조리개값
    console.log(x)
}
one()
two()

let b = 10; // 전역변수
function test() {
    let b = 100
    return b
}
test()
console.log(b) // 10

let c = 10;
function test() {
    let c = 100
    function test2() {
        c = 1000
    }
    test2()
    console.log(c) // 1000
}
test()
console.log(c) // 10

// 지역변수는 서로 간섭하지 않습니다.
function test1() {
  let x = 100
}

function test2() {
  // 이렇게 하면 window에 등록이 되어 버립니다.
  // let이나 const, var 키워드를 꼭 써주세요.
  x = 100
}

test1()
test2()
console.log(x)