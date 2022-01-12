// document.getElementById('startTime').onload = function () { startTime() };

// function startTime() {
//     let today = new Date();
//     let h = today.getHours() % 12;
//     if (h === 0) {
//         h = 12;
//     }
//     let m = today.getMinutes();
//     let s = today.getSeconds();
//     // add a zero in front of numbers<10
//     m = checkTime(m);
//     s = checkTime(s);
//     document.getElementById("clock").innerHTML = h + ":" + m + ":" + s;
//     t = setTimeout(function () { startTime() }, 500);
// }

// function checkTime(i) {
//     if (i < 10) {
//         i = "0" + i;
//     }
//     return i;
// }

// weekday();

// function weekday() {
//     var d = new Date().getDay();
//     document.getElementById("day-" + d).classList.add('opening-day');
// }

//! Clock 
let is24Hour = false,
    timeDisplay = document.getElementById("time"),
    changeButton = document.getElementById("changeFormat"),
    armyTime = document.getElementById("armyTime");

let updateTime = function () {
    let currentDate = new Date(),
        hours = currentDate.getHours(),
        minutes = currentDate.getMinutes(),
        seconds = currentDate.getSeconds();

    minutes = checkTime(minutes);
    seconds = checkTime(seconds);

    if (is24Hour) {
        timeDisplay.innerText = hours + ":" + minutes + ":" + seconds;
    }
    else {
        let suffix = hours >= 12 ? "PM" : "AM",
            hours12 = hours % 12;
        if (hours12 === 0) {
            hours12 = 12;
        }
        timeDisplay.innerText = hours12 + ":" + minutes + ":" + seconds + " " + suffix;
    }

};

function checkTime(i) {
    if (i < 10) {
        i = "0" + i;
    }
    return i;
}

weekday();

function weekday() {
    let d = new Date().getDay();
    document.getElementById("day-" + d).classList.add('opening-day');
}

let changeFormat = function () {
    is24Hour = !is24Hour;
};

changeButton.addEventListener("click", changeFormat);
window.setInterval(updateTime, 100);

// document.getElementById("armyTime").removeAttribute('disabled');

armyTime.addEventListener("click", changeFormat);
window.setInterval(updateTime, 100);
// document.getElementById("armyTime").disabled = true;


