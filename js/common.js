//h1태그에 접근하는 변수생성
let clock = document.querySelector(".h1-clock");

//new Date()를 통해 시간을 가져와 각각의 변수에 넣고, 이것들을 h1에 넣음
function getTime() {
  const time = new Date();
  const hour = time.getHours();
  const minutes = time.getMinutes();
  const seconds = time.getSeconds();

  //상항연산자를 이용해 시,분,초를 두자리로 만듬
  clock.innerHTML = `${hour < 10 ? `0${hour}` : hour}:
  ${minutes < 10 ? `0${minutes}` : minutes}:
  ${seconds < 10 ? `0${seconds}` : seconds}`;
}

//1초마다 시계를 실행시키기 위해 seInterval()함수에 인자를 넣고 init함수를 통해 실행시킴
function init() {
  setInterval(getTime, 1000);
}

init();
