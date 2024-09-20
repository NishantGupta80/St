 var hours = 0;
var minutes = 0;
var seconds = 0;
var lapno = 0;
var isRunning = false;
var intervalId;
var start = document.getElementById("stop");
var display = document.getElementById("display");
var lap = document.getElementById("lap");
var laps = document.getElementById("laps");

function updateTimer() {
    return new Promise(function(resolve,reject){
        intervalId=setInterval(()=>{
    seconds++;
    if (seconds >= 60) {
        seconds = 0;
        minutes++;
        if (minutes >= 60) {
            minutes = 0;
            hours++;
            if (hours >= 24) {
                hours = 0;
            }
        }
    }

    var formattedHours = hours < 10 ? "0" + hours : hours;
    var formattedMinutes = minutes < 10 ? "0" + minutes : minutes;
    var formattedSeconds = seconds < 10 ? "0" + seconds : seconds;

    display.innerHTML = formattedHours + ":" + formattedMinutes + ":" + formattedSeconds;
    resolve(display);
},1000);
});
}


start.addEventListener("click",async function() {
    if (isRunning) {
        clearInterval(intervalId); 
        start.textContent = "START"; 
        lap.textContent = "Reset"; 
    } else {
        start.textContent = "STOP";
            const time = await updateTimer();
            display.textContent = time;
    }
    isRunning = !isRunning; 
});


lap.addEventListener("click", function() {
    if (isRunning) {
        lapno++;
        var li = document.createElement("li");
        li.id = "recordedlaps";
        li.innerHTML = `<span>LAP ${lapno}</span><span>${display.textContent}</span>`;
        laps.appendChild(li);
    } else {
        hours = 0;
        minutes = 0;
        seconds = 0;
        display.textContent = "00:00:00";
        lapno = 0;
        laps.innerHTML = ""; 
    }
});
