// HTML이 JS와 어떻게 함께 작동하는지 알아보는 시간.

// HTML을 DOM 객체로 바꿀 수 있다.
// DOM? wtf is this...
// DOM : document object model

const title = document.querySelector("#title");
title.innerHTML = "Hi! From JS";
title.style.color = "black";
document.title = "i own you now"

// js를 이용해서 어떻게 html을 변경 할 수 있는지
// 어떻게 내용을 추가 할 수 있는지 이해하는 과정