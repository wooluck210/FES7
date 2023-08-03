// 매우매우 중요

// 1. 비교 연산
let x = 3
let y = 5
console.log(x > y)

// 2. 논리 연산 : 각 비교값이 true나 false인 경우
// true나 false가 아닌 경우 단락회로평가가 일어남
let a = true
let b = false
console.log(a && b)

// 3. true나 false로 평가되는 것들
// if(value){value가 true일 때 실행. 그렇다면 어떤 value가 true인가?}

if(Boolean('hello')) {
  console.log('!!')
}
if('hello') {
  console.log('!!')
}

Boolean('hello') // true
Boolean('') // false
Boolean(' ') // true
Boolean(0) // false
Boolean(1) // true. 0외 다른 숫자는 true
Boolean(0) // false
Boolean(null) // false
Boolean(undefined) // false
Boolean(NaN) // false

// 4. JS에서 힘들게 하는 true, false
// JS의 입장 : 배열 안에 요소가 사라져도 x가 가리키고 있는 값은 변한적이 없는데 true, false가 바뀌는 것은 옳지 않다.
Boolean([1, 2, 3]) // 배열은 true
Boolean([]) // 비어 있는 배열은 false
Boolean({'one':1}) // true
Boolean({}) // true

null == undefined // true
null > undefined // false, 다른 비교도 false
undefined < 100 // false, 숫자와 비교는 다 false.