// dom으로 path 가져오기
const path = document.querySelector('#path');
const openBtn = document.querySelector('.btn-open');

// path의 전체 길이 구하기
const pathLength = path.getTotalLength();
// css에서 stroke-dasharray를 js로 표현
// stroke-dasharray: 1000 1000;
path.style.strokeDasharray = pathLength + ' ' + pathLength;
// path.style.strokeDasharray = 100 + ' ' + 100;

// dashoffset을 표현. dash가 어디서부터 시작할지. 아래 코드는 안 나타나게 시작한다.
// stroke-dashoffset: 1000
path.style.strokeDashoffset = pathLength;

// console.log('clientHeight', document.documentElement.clientHeight)
// console.log('scrollHeight', document.documentElement.scrollHeight)

function scrollHandler() {
  // 현재 스크롤 위치 : 전체 height에서 뷰포트의 높이를 뺀 것만큼 나오기 때문에 가장 아래의 스크롤 위치는 height의 길이가 아니다.
  // 스크롤의 위치값은 항상 화면의 맨위에 위치하기 때문에 위와 같은 원리가 적용된다.
  const scrollTop = document.documentElement.scrollTop;
  // 전체 스크롤 길이(height의 길이)
  const scrollHeight = document.documentElement.scrollHeight;
  // 뷰포트(보이는 화면)의 높이
  const clientHeight = document.documentElement.clientHeight;

  // 스크롤의 위치를 퍼센티지로 변경(0 ~ 1의 값을 가짐)
  const scrollPercentage = scrollTop / (scrollHeight - clientHeight);
  const drawLength = pathLength * scrollPercentage;

  // pathLength -> 0
  path.style.strokeDashoffset = pathLength - drawLength;

  // button opacity 조절
  openBtn.style.opacity = scrollPercentage;
  if (scrollPercentage > 0.8) {
    openBtn.disabled = false;
  } else {
    openBtn.disabled = true;
  }
}

window.addEventListener('scroll', scrollHandler)

