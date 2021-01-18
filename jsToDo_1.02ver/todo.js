// clock의 상수명과 겹치기 때문에 다른 상수명으로 저장.
const toDoForm = document.querySelector(".js-toDoForm");
const toDoInput = toDoForm.querySelector("input");
const toDoList = document.querySelector(".js-toDoList");

const TODOS_LS = "toDos";

function paintToDo(text) {
    const li = document.createElement("li");
    const deleteButton = document.createElement("button");
    deleteButton.innerText = "❎";
    const checkButton = document.createElement("button");
    checkButton.innerText = "✅"
    const span = document.createElement("span");
    span.innerText = text;
    li.appendChild(span);
    li.appendChild(deleteButton);
    li.appendChild(checkButton);
    toDoList.appendChild(li);
}

function handleSubmit(event) {
    event.preventDefault();
    const currentValue = toDoInput.value;
    paintToDo(currentValue);
    toDoInput.value = "";
}

function loadToDos() {
    const toDos = localStorage.getItem(TODOS_LS);
    if(toDos !== null) {
    } 
}

function init(){
    loadToDos();
    toDoForm.addEventListener("submit", handleSubmit);
}

init();