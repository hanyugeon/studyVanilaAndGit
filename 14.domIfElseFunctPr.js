// 2-6 약간의 변화를 주자.
// 이러한게 어떻게 활용될까
// 클릭, 크기조절, 드래그, 더블클릭 등등...
const title = document. querySelector("#title");

const BASE_COLOR = "rgb(0, 0, 0)";

const OTHER_COLOR = "#b4b4b4"

function handleClick() {
    const currentColor = title.style.color;
    console.log(currentColor);
    if (currentColor === BASE_COLOR) {
        title.style.color = OTHER_COLOR;
    } else {
        title.style.color = BASE_COLOR;
    }
}

function init() {
    title.style.color = BASE_COLOR;
    title.addEventListener("click", handleClick);
}

// 클릭 말고도 아주 많은 이벤트들이 있다. always use MDN!

init();

// 인터넷 끊을때와 다시 연결했을때 변화!

function handleOffline() {
    console.log('ahahaha');
}

function handleOnline() {
    console.log('welcome back!');
}

window.addEventListener("offline", handleOffline)

window.addEventListener("online", handleOnline)