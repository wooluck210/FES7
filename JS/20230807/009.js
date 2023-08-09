// filter(**)
const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9];
const result = arr.filter((item) => item % 2 === 0);

// filter는 return 값이 true인 것만 모아서 새로운 배열을 만든다.
// filter는 메소드 체이닝으로 많이 사용된다.
const arr1 = [1, 2, 3, 4, 5, 6, 7, 8, 9];
const result1 = arr.filter((item) =>{
  return true
});
const arr2 = [1, 2, 3, 4, 5, 6, 7, 8, 9];
const result2 = arr.filter(v => {
    return false
})
result2

const arr3 = [1, 2, 3, 4, 5, 6, 7, 8, 9];
const result3 = arr.filter((item) =>{
  return v > 5
});

const arr4 = [1, 2, 3, 4, 5, 6, 7, 8, 9];
const result4 = arr.filter((item) =>{
  return v % 2 !== 0
});

// reduce
[10,20,30,40,50].reduce((a, c) => a + c, 0) // 공식 코드. 암기하기. 0은 초기값.
[10,20,30,40,50].reduce((a, c) => a + c)
// [].reduce((a, c) => a + c // 초기값이 없어 에러나옴
[10,20,30,40,50].reduce((a, c) => {
  console.log(a, c)
  return a + c
})

// includes
const arr5 = ['hello', 'world', 'hojun']
arr5.includes('world')

const arr6 = ['hello', 'world', 'hojun']
arr6.includes('leehojun')

const arr7 = ['hello', 'world', 'hojun']
arr7.includes('jun')

// join(***)
let arr8 = ['hello', 'world', 'hojun']
arr8.join('!') // hello!world!hojun
arr8.join(' ') // hello world hojun
arr8.join('-') // hello-world-hojun

let arr9 = ['안녕하세요.', '제 이름은 이호준입니다.', '저는 제주에 살아요.']
arr.join('\n')
console.log(arr9.join('\n'))

let arr10 = ['안녕하세요.', '제 이름은 이호준입니다.', '저는 제주에 살아요.']
arr.join('<br>')
console.log(arr10.join('<br>')) // innerHTML로 하면 <br>이 개행됩니다.
document.write(arr10.join('<br>'))

// reverse
[10,20,30].reverse() // [30,20,10]