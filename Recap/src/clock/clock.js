const clockBlock = document.querySelector(".js-clockBlock");
const clock = clockBlock.querySelector(".js-clock");

function getTime() {
    // 변수 선언부
    const date = new Date();
    const minutes = date.getMinutes();
    const hours = date.getHours();

    // 10 미만단위 앞에 0 붙이기
    if(hours < 10) {
        if(minutes < 10) {
            clock.innerText = `0${hours}:0${minutes}`;
        } else {
            clock.innerText = `0${hours}:${minutes}`;
        }    
    } else {
        if(minutes < 10) {
            clock.innerText = `${hours}:0${minutes}`;
        } else {
            clock.innerText = `${hours}:${minutes}`;
        }
    }
}

function init() {
    getTime();
    setInterval(getTime, 50);
}

init();