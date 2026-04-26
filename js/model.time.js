"use strict";

export let time = {
    getCurrentTime(){
        let currentTime = new Date();

        let hours = currentTime.getHours()
        let minutes = currentTime.getMinutes()
        let seconds = currentTime.getSeconds()

        return {
            hours: hours,
            minutes: minutes,
            seconds: seconds
        }
    },
}