const clockContainer = document.querySelector(".js-clock");
const clockTitle = clockContainer.querySelector(".js-clockTitle")

function getTime() {
    const date = new Date();
    const minutes = date.getMinutes();
    const hours = date.getHours();

    clockTitle.innerText = `${hours}:${minutes}`;
}

function init() {
    getTime();
    setInterval(getTime, 50);
}

init();