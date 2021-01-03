// 2-4
// events and eventHandlers

// const title = document.querySelector("#title");

// function handleResize(event) {
//     console.log(event);
// }

// window.addEventListener("resize", handleResize);
// // window.addEventListener("resize", handleResize); 와
// // window.addEventListener("resize", handleResize());
// // 의 차이점 바로 인지하기. (함수 불러오기 / 함수 즉시 실행)

const title = document. querySelector("#title");

function handleClick() {
    title.style.color = "black";
}
title.addEventListener("click", handleClick);