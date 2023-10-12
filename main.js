function updateClock(){
    var date = new Date();
var hours = date.getHours();
var minutes = date.getMinutes();
var seconds = date.getSeconds();



document.getElementById('hours').innerHTML= hours
hours=hours<10?"0"+hours:hours;
document.getElementById('minutes').innerHTML= minutes
document.getElementById('seconds').innerHTML=seconds
}
setInterval(updateClock, 1000)

//Stop watch

let stopwatchInterval;
let hours = 0;
let minutes = 0;
let seconds = 0;

function startStopwatch() {
  stopwatchInterval = setInterval(updateStopwatch, 1000);
}

function stopStopwatch() {
  clearInterval(stopwatchInterval);
}

function resetStopwatch() {
  clearInterval(stopwatchInterval);
  hours = 0;
  minutes = 0;
  seconds = 0;
  updateDisplay();
}

function updateStopwatch() {
  seconds++;
  if (seconds >= 60) {
    seconds = 0;
    minutes++;
    if (minutes >= 60) {
      minutes = 0;
      hours++;
    }
  }
  updateDisplay();
}

function updateDisplay() {
  document.getElementById('hour').textContent = hours.toString().padStart(2, '0');
  document.getElementById('minute').textContent = minutes.toString().padStart(2, '0');
  document.getElementById('second').textContent = seconds.toString().padStart(2, '0');
}

document.getElementById('startBtn').addEventListener('click', startStopwatch);
document.getElementById('stopBtn').addEventListener('click', stopStopwatch);
document.getElementById('resetBtn').addEventListener('click', resetStopwatch);