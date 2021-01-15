const form = document.querySelector(".js-form"); // clock.html 11line 참고
const input = form.querySelector("input"); // clock.html 12line 참고
const greeting = document.querySelector(".js-greetings"); // clock.html 14line 참고

const USER_LS = "currentUser"; // localStorage로 저장할 시에 key값으로 됨
const SHOWING_CN = "showing";

function saveName(text) {
    localStorage.setItem(USER_LS, text);
}

function handleSubmit(event) {
    event.preventDefault();
    const currentValue = input.value;
    console.log(currentValue);
    paintGreeting(currentValue);
    saveName(currentValue);
}

function askForName() {
    form.classList.add(SHOWING_CN);
    form.addEventListener("submit", handleSubmit);
}

function paintGreeting(text) {
    form.classList.remove(SHOWING_CN)
    greeting.classList.add(SHOWING_CN); // 3-3 부터
    greeting.innerText = `Hello ${text}`
}

function loadName() {
    const currentUser = localStorage.getItem(USER_LS);
    if(currentUser === null) {
        askForName();
    } else {
        paintGreeting(currentUser);
    }
}

function init() {
    loadName();
}

init();

// local storage?