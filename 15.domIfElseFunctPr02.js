// 2-7
// 클릭 말고도 아주 많은 이벤트들이 있다. always use MDN!

const title = document.querySelector("#title");

const CLICKED_CLASS = "clicked";

/*
function handleClick() {
    const hasClass = title.classList.contains(CLICKED_CLASS);
    if(hasClass) {
        title.classList.remove(CLICKED_CLASS);
    } else {
        title.classList.add(CLICKED_CLASS);
    }
}   // 근데 너무 길어보임.
*/

function handleClick() {
    title.classList.toggle(CLICKED_CLASS);
} // 기모띠. 간결하고 이해하기 쉬워짐, 기메리.

// classList, add, remove, toggle

function init() {
    title.addEventListener("click", handleClick);
}

init();