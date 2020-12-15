const hour = document.getElementById("hour");
const minutes = document.getElementById("minutes");
const seconds = document.getElementById("seconds");
const todayDate = document.getElementById("date"); 
let currentDay;

setInterval(clock, 1000)
setInterval(checkDay, 1000)

function clock() {
    const date = new Date();
    const h = date.getHours();
    const m = date.getMinutes();
    const s = date.getSeconds();

    hour.innerText = h < 10 ? "0" + h : h;
    minutes.innerText = m < 10 ? "0" + m : m;
    seconds.innerText = s < 10 ? "0" + s : s;

}

function checkDay() {
    const date = new Date();
    const day = date.getDay();
    if (currentDay === day) {
        return;
    } else {
        fullDate();
        currentDay = day;
        console.log(currentDay);
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
