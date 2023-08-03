function test(a, b, c) {
  console.log(a, b, c)
  return a + b + c
}

// 다른 언어에서는 error
test(10,20) // 아규먼트가 개수가 부족하게 입력되면 undefined
test(10,20,30, 40) // 개수가 넘치면 제대로 작동

function test(a=10, b=20, c=30) {
  console.log(a, b, c)
  return a + b + c
}
test(100,200)
test()
// 이상한 JS
test(a=100,b=200) // 330
test(b=100,c=200) // 310이 아닌 330.
// JS는 아규먼트 값을 순서대로 넣어서 두번째 test가 330이 나온다.
// 이를 해결하기 위한 기법이 RORO(Receive an Object, Return an object) 기법.

function mob(scene, x, y, texture, animKey, initHp, dropRate) {
  // scene: 스토리신, 플레이신, 엔딩신
  // x, y: 몹의 위치
  // texture: 몹의 이름
  // animKey: 몹의 애니메이션
  // initHp: 몹의 체력
  // dropRate: 몹이 아이템을 떨어뜨리는 확률
  return
}
// 위 문제와 아래 문제를 해결하기 위해 RORO을 사용할 수 있습니다.
// mob('플레이신', 100, 200, '슬라임', '슬라임_애니', 100, 0.1)
// mob('플레이신', ...뭐가 들어가야하지?)

function player({ scene, x, y, texture, animKey, initHp, dropRate }) {
  console.log(scene, x, y, texture, animKey, initHp, dropRate)
  return
}

// 아래와 같이 작성되기 때문에 2번째 문제 해결, 순서도 상관없습니다.
player({
  scene: '플레이신',
  y: 200,
  x: 100,
  texture: '슬라임',
  animKey: '슬라임_애니',
  initHp: 100,
  dropRate: 0.1
})

// 아래와 같이 작성되기 때문에 1번째 문제 해결
player({
  scene: '플레이신',
  y: 200,
  initHp: 100,
})

// 기본값 설정하는 방법
function player({ scene='플레이신', x=0, y=0, texture, animKey, initHp, dropRate=0.1 }) {
  console.log(scene, x, y)
}

player({
  initHp: 100,
})