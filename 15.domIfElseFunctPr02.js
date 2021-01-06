// 2-7
// 클릭 말고도 아주 많은 이벤트들이 있다. always use MDN!

const title = document.querySelector("#title");

const CLICKED_CLASS = "clicked";


// function handleClick() {
//     const hasClass = title.classList.contains(CLICKED_CLASS);
//     if(hasClass) {
//         title.classList.remove(CLICKED_CLASS);
//     } else {
//         title.classList.add(CLICKED_CLASS);
//     }
// }   // 근데 너무 길어보임.

/** classList
 * remove   : 지정한 클래스 값을 제거한다.
 * add      : 지정한 클래스 값을 추가한다. (중복시에는 무시.)
 * contains : 지정한 클래스 값이 엘리먼트의 class 속성에 존재하는지를 확인.
 */

function handleClick() {
    title.classList.toggle(CLICKED_CLASS);
} // 기모띠. 간결하고 이해하기 쉬워짐, 기메리.

/** classList
 * togle    : 
 * 하나의 인수만 있을 때 : 클래스 값을 토글링 한다.
 * 클래스가 존재하면 제거하고 false 반환, 존재하지 않으면 클래스를 추가하고 true 반환
 * 두번째 인수가 있을 때 : 두번째 인수가 true로 평가되면 지정한 클래스 값을 추가하고
 * false로 평가되면 제거한다.
 */

function init() {
    title.addEventListener("click", handleClick);
}

init();