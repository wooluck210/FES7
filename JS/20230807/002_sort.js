// 에러가 생기지 않는 코드
// data.sort((a, b) => (a[key] > b[key] ? -1 : (a[key] < b[key] ? 1 : 0)))

let data1 = ['a', 'z', 'b', 'e'];
data1.sort();

// 사전식(문자취급) 정렬이어서 아래와 같은 값은 정렬 되지 않는다.
let data2 = [1, 11, 22, 2];
data2.sort();

// 이해를 위한 코드는 아니고 sort 실무를 위해 가지고 있는 utility 코드.
// 문자, 한글 같은 것이 있을 때 사용
data2.sort((a, b) => (a > b ? -1 : (a < b ? 1 : 0)))
data2.sort((a, b) => (a < b ? -1 : (a > b ? 1 : 0)))

// 여러분들이 자주 사용하는 코드
let data3 = [1, 11, 2, 111, 22];
data3.sort((a, b) => (a - b)); // 오름차순
data3.sort((a, b) => (b - a)); // 내림차순

// (a, b) => (a - b)가 콜백함수입니다.
// a - b 값이 0보다 작은 경우 a를 b보다 낮은 색인으로 정렬합니다. 즉, a가 먼저옵니다.
// a - b 값이 0을 반환하면 a와 b를 서로에 대해 변경하지 않고 모든 다른 요소에 대해 정렬합니다.
// a - b 값이 0보다 큰 경우, b를 a보다 낮은 인덱스로 소트합니다. 즉, b가 먼저옵니다.

// 원리
let test1 = [13, 9, 10, 2];
test1.sort((a, b) => {
    console.log(a, b)
})
// 출력해보면 a, b의 값이 순차적으로 들어갈 것 같지만 그렇지 않습니다.
// 9 13
// 10 9
// 2 10

let test2 = [13, 9, 10, 2];
test2.sort((a, b) => {
    console.log(a, b)
    console.log(a - b) // 0보다 작은 경우 a를 b보다 낮은 색인으로 정렬합니다. 즉, a가 먼저옵니다.
});

let test3 = [13, 9, 10, 2];
test3.sort((a, b) => {
    return a - b; // 작은 값이 앞으로 간다 => 오름차순
})