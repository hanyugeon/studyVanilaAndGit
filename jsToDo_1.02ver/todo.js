// clock의 상수명과 겹치기 때문에 다른 상수명으로 저장.
const toDoForm = document.querySelector(".js-toDoForm");
const toDoInput = toDoForm.querySelector("input");
const toDoList = document.querySelector(".js-toDoList");

const TODOS_LS = "toDos";

const toDos = [];

function saveToDos() {
    localStorage.setItem(TODOS_LS, JSON.stringify(toDos));
    // 사실 localStorage에는 string만 저장할 수 있다.
    // JSON.stringify 활용하기.
}

function paintToDo(text) {
    const li = document.createElement("li");
    const deleteButton = document.createElement("button");
    const checkButton = document.createElement("button");
    const span = document.createElement("span");
    const newId = toDos.length + 1;
    deleteButton.innerText = "❎";
    checkButton.innerText = "✅"
    span.innerText = text;
    li.appendChild(span);
    li.appendChild(deleteButton);
    li.appendChild(checkButton);
    li.id = newId;
    toDoList.appendChild(li);
    const toDoObj = {
        text: text,
        id: newId
    };
    toDos.push(toDoObj);
    saveToDos(); // 함수 위치가 왜 여기인지 생각해보기.
}

function handleSubmit(event) {
    event.preventDefault();
    const currentValue = toDoInput.value;
    paintToDo(currentValue);
    toDoInput.value = "";
}

function loadToDos() {
    const loadedToDos = localStorage.getItem(TODOS_LS);
    if(loadedToDos !== null) {
        /*
        console.log(loadedToDos);
        // 근데 새로고침 이후 다시 불러온게 string임.
        */
        const parsedToDos = JSON.parse(loadedToDos);
        console.log(parsedToDos);
        // JSON.parse 활용하기.
        parsedToDos.forEach(function(toDo) {
            paintToDo(toDo.text);
        });
    } 
}

function init(){
    loadToDos();
    toDoForm.addEventListener("submit", handleSubmit);
}

init();