//Credit to source: https://jsfiddle.net/u7ahcdgn/2/

const btnStart = document.getElementById('btnStart');
const btnStop = document.getElementById('btnStop');
const btnShortBreak = document.getElementById('btnShortBreak');
const display = document.querySelector('#time');
const statusMsg = document.querySelector('#status'); // optional, for messages

const beep = new Audio("emergency-alarm-with-reverb-29431.mp3");

let intervalId = null;

function startTimer(duration) {
  let timer = duration;

  clearInterval(intervalId); // clear old timers
  intervalId = setInterval(() => {
    const minutes = String(Math.floor(timer / 60)).padStart(2, '0');
    const seconds = String(timer % 60).padStart(2, '0');

    display.textContent = `${minutes}:${seconds}`;

    if (timer <= 0) {
      clearInterval(intervalId);
      statusMsg.textContent = "⏰ Time’s up!";
      beep.play();
      btnStart.disabled = false;
      btnStop.disabled = true;
      btnShortBreak.disabled = false;
    }
    timer--;
  }, 1000);
}

// Event listeners
btnStart.addEventListener('click', () => {
  startTimer(1500); // 25 minutes
  statusMsg.textContent = "🍅 Focus session started";
  btnStart.disabled = true;
  btnStop.disabled = false;
  btnShortBreak.disabled = true;
});

btnShortBreak.addEventListener('click', () => {
  startTimer(300); // 5 minutes
  statusMsg.textContent = "☕ Short break started";
  btnStart.disabled = true;
  btnStop.disabled = false;
  btnShortBreak.disabled = true;
});

btnStop.addEventListener('click', () => {
  clearInterval(intervalId);
  beep.pause();
  beep.currentTime = 0;
  statusMsg.textContent = "⏹ Timer stopped";
  btnStart.disabled = false;
  btnStop.disabled = true;
  btnShortBreak.disabled = false;
});

function updateTimerDisplay(minutes, seconds) {
  // Update the timer element on the page
  const timerElement = document.getElementById("timer");
  timerElement.textContent = `${minutes}:${seconds < 10 ? "0" : ""}${seconds}`;

  // Also update the browser tab title
  document.title = `${minutes}:${seconds < 10 ? "0" : ""}${seconds} - Portobello Timer`;

  // Update the timer display
  if (minutes === 0 && seconds === 0) {
    document.title = "Portobello Timer";
    clearInterval(timerInterval); // stop timer
  }
}