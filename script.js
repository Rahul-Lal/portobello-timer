// Initial time (25 minutes example, adjust to your app logic)
let minutes = 25;
let seconds = 0;
let timerInterval;

// Grab timer display element
const timerElement = document.getElementById("timer");
const alarmSound = new Audio("emergency-alarm-with-reverb-29431.mp3");

// Function: Updates the UI + tab title
function updateTimerDisplay(min, sec) {
  const formattedTime = `${min}:${sec < 10 ? "0" : ""}${sec}`;
  timerElement.textContent = formattedTime;
  document.title = `${formattedTime} - Portobello Timer`;
}

// Function: Starts the timer
function startTimer() {
  // Prevent multiple intervals running at once
  clearInterval(timerInterval);

  timerInterval = setInterval(() => {
    // ✅ Check if timer has finished
    if (minutes === 0 && seconds === 0) {
      clearInterval(timerInterval);
      document.title = "Portobello Timer"; // Reset tab title
      alert("Time’s up!"); // Optional alarm or sound
      return;
    }

    // Countdown logic
    if (seconds === 0) {
      minutes--;
      seconds = 59;
    } else {
      seconds--;
    }

    // Update screen + tab
    updateTimerDisplay(minutes, seconds);
  }, 1000);
}

// Function: Reset the timer
function resetTimer(startMinutes = 25) {
  clearInterval(timerInterval);
  minutes = startMinutes;
  seconds = 0;
  updateTimerDisplay(minutes, seconds);
  document.title = "Portobello Timer";
}

// Function: Starts the timer
function startTimer() {
  // Prevent multiple intervals running at once
  clearInterval(timerInterval);

  timerInterval = setInterval(() => {

    if (minutes === 0 && seconds === 0) {
      clearInterval(timerInterval);
      document.title = "Portobello Timer"; // Reset tab title
      alarmSound.play(); // Optional alarm or sound
      return;
    }

    // Countdown logic
    if (seconds === 0) {
      minutes--;
      seconds = 59;
    } else {
      seconds--;
    }

    // Update screen + tab
    updateTimerDisplay(minutes, seconds);
  }, 1000);
}

// Function: Reset the timer
function resetTimer(startMinutes = 25) {
  clearInterval(timerInterval);
  minutes = startMinutes;
  seconds = 0;
  updateTimerDisplay(minutes, seconds);
  document.title = "Portobello Timer";
}

function startShortBreak() {
  resetTimer(5);
}