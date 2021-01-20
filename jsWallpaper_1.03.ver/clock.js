const clockContainer = document.querySelector(".js-clock"); // clock.html 8line 참고
const clockTitle = clockContainer.querySelector("h1"); // clock.html 9line 참고

function getTime() {
    const date = new Date();
    const minutes = date.getMinutes();
    const hours = date.getHours();
    const seconds = date.getSeconds();
    clockTitle.innerText = `${hours < 10 ? `0${hours}` : hours}:${
        minutes < 10 ? `0${minutes}` : minutes}:${
        seconds < 10 ? `0${seconds}` : seconds}`; // clock.js 2line 참고
    /**삼항연산자(mini if)
     * `${seconds < 10 ? `0${seconds}` : seconds}`
     * 
    */
}

function init() {
    getTime();
    setInterval(getTime, 1000); // setInterval(fn, ms)
}

init();