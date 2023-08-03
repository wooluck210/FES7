// return을 정의하지 않으면 undefined을 갖는다.
function add(a, b){
  let answer = a + b
}

let result = add(10, 20)

///////////////

function add(a, b){
  let answer = a + b
  return
}

let result2 = add(10, 20)

///////////////

function add(a, b){
  let answer = a + b
  return undefined
}

let result3 = add(10, 20)

///////////////
function test(){
  console.log('hello')
  console.log('hello')
  console.log('hello')
  return
  console.log('hello')
  console.log('hello')
  console.log('hello')
}

///////////////

function test(){
  console.log('hello')
  console.log('hello')
  console.log('hello')
  return
  // 이렇게 애러가 나는 코드가 있어도 javascript엔진이 보지 않는 공간에서는 애러를 출력하지 않습니다.
  console.logi('hello')
  console.loghojun('hello')
  console.logjun('hello')
}

// 에러가 나는 코드가 있어도 JS엔진이 보지 않는 공간(return 이후)에서는 에러를 출력하지 않는다.
// 단락 평가에서도 마찬가지다.
function errorCode(){
  console.loghojun('hello')
}
let value = true
// errorCode 실행시키지 않았다
let result4 = true || errorCode()

///////////////

// return(반환보다는 종료에 느낌으로 쓰는 코드)
function test(){
  if (true) {
      if (false) {
          console.log('1')
          return
      }
  }
  console.log('2')
  // 여러 코드...
  return
}

// return : 반환보다는 종료의 느낌으로 쓰는 코드
// 안쪽 조건이 맞는 if 문에서 종료
function test() {
  if (true) {
    if (true) {
      return
    }
  }
  return
}

///////////////
// 함수의 이름은 변수이다. 변수처럼 해당 내용을 가리키는 것이다.
console.log('hello') // 'hello'는 아규먼트
let leehojun = console.log
leehojun('hello')

function test(){
    console.log('hello')
}
test()
let hojun = test
hojun()


///////////////
//함수의 이름도 결국 변수이기 때문에 아규먼트로 전할 수 있고, 리턴값으로도 전달할 수 있다.
function add(a, b) {
  return a+b
}

let x = 10
let y = 20
console.log(add(x,y))

// 1. 함수를 아규먼트로 전달 : 아규먼트로 전달된 함수를 콜백함수라고 부른다.
function add(x, y) {
  return x + y
}
function addAndMultiply(x, y, z) {
  let sum = z(x, y) * x(x, y)
  return sum
}
addAndMultiply(1, 2, add)

// 2. 함수를 리턴값으로 전달(스코프, 클로저 배운 후 다시 공부)
//
function one(x) {
  function two(y) {
    return x + y
  }
  return two
}

let result5 = one(10)
result5(100)