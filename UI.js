const clockOutput = document.getElementById("clock");
const dateOutput = document.getElementById("date-container");
const setBtn = document.getElementById("set-btn");
const setterCloseBtn = document.getElementById("setter-close");
// const modal = document.getElementById("modal");
const uiSet = document.getElementById("ui-setter");

setBtn.addEventListener("click", openModal);
setterCloseBtn.addEventListener("click", closeModal);
// modal.addEventListener("click", closeModal);

function openModal() {
    modal.style.display = "block";
}

function closeModal(e) {
    modal.style.display = "none";

    // if (e.target.classList.contain("modal")) {
    //     modal.style.display = "none";
    // }
}


const sevenSegBtn = document.getElementById("seven-seg-btn");
const fourteenSegBtn = document.getElementById("fourteen-seg-btn");
sevenSegBtn.addEventListener("click", setSevenSeg);
fourteenSegBtn.addEventListener("click", setFourteenSeg);

function setSevenSeg() {
    clockOutput.classList.remove("fourteen-seg");
    dateOutput.classList.remove("fourteen-seg");
    sevenSegBtn.style.transform = "scale(1.2)";
    sevenSegBtn.style.cursor = "default"
    fourteenSegBtn.style.transform = "scale(1)";
    fourteenSegBtn.style.cursor = "pointer";
    
}

function setFourteenSeg() {
    clockOutput.classList.add("fourteen-seg");
    dateOutput.classList.add("fourteen-seg");
    fourteenSegBtn.style.transform = "scale(1.2)";
    fourteenSegBtn.style.cursor = "default";
    sevenSegBtn.style.transform = "scale(1)";
    sevenSegBtn.style.cursor = "pointer"
}


const rootStyle = document.documentElement.style;
const redColor = "#ff5050";
const orangeColor = "#ff9900";
const yellowColor = "#ffff00"
const whiteColor = "#d9d9d9";
const greenColor = "#00ff00";
const blueColor = "#0099ff";
const prupleColor = "#cc33ff";
const redBtn = document.getElementById("red");
const yellowBtn = document.getElementById("yellow");
const whiteBtn = document.getElementById("white");
const orangeBtn = document.getElementById("orange");
const greenBtn = document.getElementById("green");
const blueBtn = document.getElementById("blue");
const purpleBtn = document.getElementById("purple");
redBtn.addEventListener("click", setRed);
orangeBtn.addEventListener("click", setOrange);
yellowBtn.addEventListener("click", setYellow);
whiteBtn.addEventListener("click", setWhite);
greenBtn.addEventListener("click", setGreen);
blueBtn.addEventListener("click", setBlue);
purpleBtn.addEventListener("click", setPurple);

function setRed() {
    rootStyle.setProperty("--color", redColor);
}

function setOrange() {
    rootStyle.setProperty("--color", orangeColor);
}

function setYellow() {
    rootStyle.setProperty("--color", yellowColor);
}

function setWhite(){
    rootStyle.setProperty("--color", whiteColor);
}

function setGreen() {
    rootStyle.setProperty("--color", greenColor);
}

function setBlue() {
    rootStyle.setProperty("--color", blueColor);
}

function setPurple() {
    rootStyle.setProperty("--color", prupleColor);
}



