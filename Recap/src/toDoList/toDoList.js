const listBlock = document.querySelector(".js-listBlock");
const listInput = listBlock.querySelector(".js-listInput");
const textInput = listInput.querySelector("input")
const listContents = listBlock.querySelector(".js-listContents");

const TODOS_LS = 'toDos';

let toDos = [];

function saveToDos() {
    localStorage.setItem(TODOS_LS, JSON.stringify(toDos));
}

function deleteToDo(event) {
    const btn = event.target;
    const li = btn.parentNode;
    const cleanToDos = toDos.filter(function(toDo) {
        return toDo.id !== parseInt(li.id);
    });
    listContents.removeChild(li);
    toDos = cleanToDos;
    saveToDos();
}

function filterFn(toDo) {
    return toDo.id !== parseInt(li.id);
}

function paintToDos(text) {
    const li = document.createElement("li");
    const span = document.createElement("span");
    const delBtn = document.createElement("button");
    const newId = toDos.length + 1;
    const toDoObj = {
        text: text,
        id: newId
    };

    span.innerText = text;
    delBtn.innerHTML = "❎";
    delBtn.addEventListener("click", deleteToDo);

    li.appendChild(span);
    li.appendChild(delBtn);
    listContents.appendChild(li);
    li.id = newId;
    toDos.push(toDoObj);
    saveToDos();
    

}

function handleSubmit(event) {
    event.preventDefault();
    const currentValue = textInput.value;
    paintToDos(currentValue);
    listInput.value="";
}

function something(toDo) {
    paintToDos(toDo.text);
}

function loadToDos() {
    const loadedToDos = localStorage.getItem(TODOS_LS);
    if (loadedToDos !== null) {
        const parsedToDos = JSON.parse(loadedToDos);
        parsedToDos.forEach(something);
    }
}

function init() {
    loadToDos();
    listInput.addEventListener("submit", handleSubmit)
}

init();