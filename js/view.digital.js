"use strict";

export let digitalClock = {
    updateClock(hours, minutes, seconds){
        let digital = document.getElementById("digital");

        if (hours < 10) {
            hours = "0" + hours;
        }
        if (minutes < 10) {
            minutes = "0" + minutes;
        }
        if (seconds < 10) {
            seconds = "0" + seconds;
        }

        digital.innerText = hours + ":" + minutes + ":" + seconds;


    }
}