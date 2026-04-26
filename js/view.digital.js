"use strict";

export let digitalClock = {
    updateClock(hours, minutes, seconds){
        let digital = document.getElementById("digital");
        digital.innerText = hours + ":" + minutes + ":" + seconds;

    }
}