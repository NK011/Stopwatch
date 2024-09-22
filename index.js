console.log("script loaded");

function getFinalTime(hour, minutes, seconds) {
    var hourInMilliSecond = hour * 60 * 60 * 1000;
    var minutesInMilliSecond = minutes * 60 * 1000;
    var secondsInMilliSecond = seconds * 1000;

    var timeToAdd =
        hourInMilliSecond + minutesInMilliSecond + secondsInMilliSecond;

    var totalTime = new Date().getTime() + timeToAdd;
    return totalTime;
}

const finalTime = getFinalTime(0, 1, 59);

function showTimer() {
    var currTime = new Date().getTime();

    var distance = finalTime - currTime;

    if (distance < 0) {
        console.log("Time's up!");
        clearInterval(timer);
        return;
    }

    var hoursLeft = Math.floor(
        (distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
    );
    var minutesLeft = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    var secondsLeft = Math.floor((distance % (1000 * 60)) / 1000);

    console.log("hours: ", hoursLeft);
    console.log("minutes: ", minutesLeft);
    console.log("seconds: ", secondsLeft);
}

var timer = setInterval(showTimer, 1000);
