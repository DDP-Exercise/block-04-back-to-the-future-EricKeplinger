"use strict";

export let analogClock = {
    updateClock(hours, minutes, seconds) {
        let hoursStick = document.getElementById("hour");
        let minutesStick = document.getElementById("minute");
        let secondsStick = document.getElementById("second");

        let hoursMath = hours * 30 + minutes / 2;
        let minutesMath = minutes * 6;
        let secondsMath = seconds * 6;

        hoursStick.style.transform = "rotate(" + hoursMath + "deg)";
        minutesStick.style.transform = "rotate(" + minutesMath + "deg)";
        secondsStick.style.transform = "rotate(" + secondsMath + "deg)";
    }
}