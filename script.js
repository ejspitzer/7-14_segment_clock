const hour = document.getElementById("hour");
const minutes = document.getElementById("minutes");
const seconds = document.getElementById("seconds");
const todayDate = document.getElementById("date"); 
const pageTitle = document.querySelector("title");
let currentDay;

setInterval(clock, 1000)
setInterval(checkDay, 1000)

function clock() {
    const date = new Date();
    let h = date.getHours();
    let m = date.getMinutes();
    let s = date.getSeconds();

    h = h < 10 ? "0" + h : h;
    m = m < 10 ? "0" + m : m;
    s = s < 10 ? "0" + s : s;

    hour.innerText = h;
    minutes.innerText = m;
    seconds.innerText = s;

    pageTitle.innerText = `${h}:${m}:${s}`

}

function checkDay() {
    const date = new Date();
    const day = date.getDay();
    if (currentDay === day) {
        return;
    } else {
        fullDate();
        currentDay = day;
    }

}

function fullDate() {
    const date = new Date();
    let monthDay = date.getDate();
    let month = date.getMonth() + 1;
    const year = date.getFullYear(); 

    function weekDay() {
        const weekDay = date.getDay();
        switch (weekDay) {
            case 0:
                return "ned";
            case 1:
                return "pon";
            case 2:
                return "tor";
            case 3:
                return "sre";
            case 4:
                return "cet";
            case 5:
                return "pet";
            case 6:
                return "sob";
        }

    }

    monthDay = monthDay < 10 ? "0" + monthDay : monthDay;
    month = month < 10 ? "0" + month : month;

    todayDate.innerText = `${weekDay()}-${monthDay}-${month}-${year}`;

}
