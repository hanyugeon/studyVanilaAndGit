const form = document.querySelector(".js-form"); // clock.html 11line 참고
const input = form.querySelector("input"); // clock.html 12line 참고
const greeting = document.querySelector(".js-greetings"); // clock.html 14line 참고

const USER_LS = "currentUser"; // localStorage로 저장할 시에 key값으로 됨
const SHOWING_CN = "showing"; // ??? wtf is this?

function saveName(text) {
    localStorage.setItem(USER_LS, text); // localStorage에 저장.
}

function handleSubmit(event) {
    event.preventDefault(); // preventDefault() : 원래 설정 및 실행을 억제
    const currentValue = input.value;
    console.log(currentValue);
    paintGreeting(currentValue);
    saveName(currentValue);
}

function askForName() { // 이후에 공부가 필요한 부분(EventListener : submit)
    form.classList.add(SHOWING_CN);
    form.addEventListener("submit", handleSubmit);
}

function paintGreeting(text) {
    form.classList.remove(SHOWING_CN);
    greeting.classList.add(SHOWING_CN);
    greeting.innerText = `Hello ${text}`;
}

function loadName() {
    const currentUser = localStorage.getItem(USER_LS); // USER_LS의 value값
    if(currentUser === null) {
        askForName(); // value값이 null일때 새로 입력을 받는 함수 호출
    } else {
        paintGreeting(currentUser); // value값을 불러오는 함수 호출
    }
}

function init() {
    loadName();
}

init();