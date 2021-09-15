const clockContainer = document.querySelector(".js-clock");
const clockTitle = clockContainer.querySelector(".js-clockTitle")

function getTime() {
    const date = new Date();
    const minutes = date.getMinutes();
    const hours = date.getHours();

    if(hours < 10) {
        if(minutes < 10) {
            clockTitle.innerText = `0${hours}:0${minutes}`;
        } else {
            clockTitle.innerText = `0${hours}:${minutes}`;
        }    
    } else {
        if(minutes < 10) {
            clockTitle.innerText = `${hours}:0${minutes}`;
        } else {
            clockTitle.innerText = `${hours}:${minutes}`;
        }
    }

}

function init() {
    getTime();
    setInterval(getTime, 50);
}

init();