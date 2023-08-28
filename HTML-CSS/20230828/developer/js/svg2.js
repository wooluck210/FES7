const path = document.querySelector('#path');
// console.log(path);
const pathLen = path.getTotalLength();
// console.log(pathLen);

path.style.strokeDasharray = pathLen + ' ' + pathLen;
path.style.strokeDashoffset = pathLen;

function drawWindow() {
  const scrollTop = document.documentElement.scrollTop;
  const scrollHeight = document.documentElement.scrollHeight;
  const clientHeight = document.documentElement.clientHeight;
}

window.addEventListener('scroll', drawWindow);
