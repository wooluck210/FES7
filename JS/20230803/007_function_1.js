// 문제 1번 : 사칙연산 함수
function add(x, y) {
  return x + y
}
function mul(x, y) {
  return x * y
}
function sub(x, y) {
  return x - y
}
function divide(x, y) {
  return x / y
}

// 문제 2번 : '10,000' 숫자에서 콤마를 삭제하는 함수
function makeNum(str) {
  let result = parseInt(str.replaceAll(',',''))
  return result
}

// 문제 3번 : 입력된 문자열을 콘솔로 출력하고 쪼개서 결과를 출력하는 함수
// 입력값 : world. 출력:['w', 'o' ,'r','l','d']
function splitWord(str) {
  console.log(str)
  return str.split('')
}

// 문제 4번 : 입력된 2개 숫자를 더하고, 더한 값에 2를 곱하는 함수
function addMul(x, y) {
  result = (x + y) ** 2
  return result
}
// 다른 풀이
function add2(x, y) {
  return x+y
}
function addAndMul(x, y) {
  result = add2(x, y) * add2(x, y)
  return result
}
// 다른 풀이2
function addAndMul2(x, y) {
  function add(x, y) {
    return x+y
  }
  result = add(x, y) * add(x, y)
  return result
}

// 문제 5번 : x**2 + 4x - 12를 구하는 함수
function num5(x) {
  result = x**2 + 4*x - 12
  return result
}
