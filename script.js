// Get elements from the DOM
const hoursInput = document.getElementById("hours");
const minutesInput = document.getElementById("minutes");
const secondsInput = document.getElementById("seconds");
const resultDisplay = document.getElementById("result");

const stopwatchDisplay = document.getElementById("stopwatch-display");
const startButton = document.getElementById("start-button");
const stopButton = document.getElementById("stop-button");
const resetButton = document.getElementById("reset-button");

let stopwatchInterval;
let stopwatchStartTime;

// Convert time function
function convertTime() {
  const hours = parseInt(hoursInput.value) || 0;
  const minutes = parseInt(minutesInput.value) || 0;
  const seconds = parseInt(secondsInput.value) || 0;

  const totalSeconds = hours * 3600 + minutes * 60 + seconds;

  const convertedHours = Math.floor(totalSeconds / 3600);
  const convertedMinutes = Math.floor((totalSeconds % 3600) / 60);
  const convertedSeconds = totalSeconds % 60;

  resultDisplay.textContent = `${convertedHours} hours, ${convertedMinutes} minutes, ${convertedSeconds} seconds`;
}

// Stopwatch functions
function startStopwatch() {
  stopwatchStartTime = Date.now();

  stopwatchInterval = setInterval(() => {
    const elapsedTime = Date.now() - stopwatchStartTime;
    const stopwatchTime = new Date(elapsedTime);

    const hours = stopwatchTime.getUTCHours().toString().padStart(2, "0");
    const minutes = stopwatchTime.getUTCMinutes().toString().padStart(2, "0");
    const seconds = stopwatchTime.getUTCSeconds().toString().padStart(2, "0");

    stopwatchDisplay.textContent = `${hours}:${minutes}:${seconds}`;
  }, 1000);

  startButton.disabled = true;
  stopButton.disabled = false;
}

function stopStopwatch() {
  clearInterval(stopwatchInterval);
  startButton.disabled = false;
  stopButton.disabled = true;
}

function resetStopwatch() {
  clearInterval(stopwatchInterval);
  stopwatchDisplay.textContent = "00:00:00";
  startButton.disabled = false;
  stopButton.disabled = true;
}

