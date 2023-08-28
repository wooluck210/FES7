const modal = document.querySelector('.modal');
const btnOpen = document.querySelector('.btn-open');
const btnClose = document.querySelector('.btn-close');
const dim = document.querySelector('.dim');

const focusalbeEl = modal.querySelectorAll('a, button, input');
const firstEl = focusalbeEl[0];
// const firstEl = modal.querySelector('a, button, input');
// NodeList는 유사배열이라 -1을 사용할 수 없다.
const lastEl = focusalbeEl[focusalbeEl.length - 1];

// console.log(firstEl, lastEl)

function openModal() {
  modal.classList.add('active');
  document.documentElement.style.overflow = 'hidden';

  // firstEl.focus();
}
function closeModal() {
  modal.classList.remove('active');
  document.documentElement.style.overflow = 'auto';
}

function handleTab(e) {
  // e.key : 누른 key 정보 확인
  // console.log(e.key);
  // shift 키 눌림 확인
  // console.log(e.shiftKey);
  // document.activeElement: 현재 포커스를 받고 있는 요소 반환
  // console.log('activeElement', document.activeElement)

  const activeEl = document.activeElement;

  if(e.key === 'Tab') {
    if (e.shiftKey) {
      // shift + tab
      if(activeEl === firstEl) {
        // keydown의 기본 동작을 막는다.
        e.preventDefault();
        lastEl.focus();
      }
    } else {
        if (activeEl === lastEl){
        // tab만 눌렀을 때
        e.preventDefault();
        firstEl.focus();
      }
    }
  }
}

btnOpen.addEventListener('click', openModal)
btnClose.addEventListener('click', closeModal)
dim.addEventListener('click', closeModal)

firstEl.addEventListener('keydown', handleTab);
lastEl.addEventListener('keydown', handleTab);

window.addEventListener('keydown', (e) => {
  console.log(modal.classList)
  // active 클래스의 포함여부를 boolean 값으로 변환
  console.log(modal.classList.contains('active'))
  if(modal.classList.contains('active') && e.key === 'Escape') {
    closeModal();
  }
})