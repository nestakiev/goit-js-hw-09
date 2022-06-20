const refs = {
    btnStart: document.querySelector('[data-start]'),
    btnStop: document.querySelector('[data-stop]'),
    body: document.querySelector("body"),
}

let intervalId = null
refs.btnStop.disabled = true;

refs.btnStart.addEventListener('click', onChangeColorBtn);
refs.btnStop.addEventListener('click', onStopBtn);

function getRandomHexColor() {
    return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

function onChangeColorBtn() {
    intervalId = setInterval(() => { 
    const newColor = getRandomHexColor();
    refs.body.style.backgroundColor = newColor;
    }, 1000)
    refs.btnStart.disabled = true;
    refs.btnStop.disabled = false;
}

function onStopBtn() {
    clearInterval(intervalId)
    refs.btnStart.disabled = false;
    refs.btnStop.disabled = true;
};


