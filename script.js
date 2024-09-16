//Credit to source: https://jsfiddle.net/u7ahcdgn/2/
let btnStart = document.getElementById('btnStart');
let btnStop = document.getElementById('btnStop');
let btnShortBreak = document.getElementById('btnShortBreak');


function startTimer(duration, display) {
    let timer = duration,
      minutes, seconds;
    let intervalId = setInterval(function() {
      minutes = parseInt(timer / 60, 10)
      seconds = parseInt(timer % 60, 10);
  
      minutes = minutes < 10 ? "0" + minutes : minutes;
      seconds = seconds < 10 ? "0" + seconds : seconds;
      display.textContent = minutes + ":" + seconds;
  
      if (--timer < 0) {
        timer = duration;
      }
      if(timer == 0 ){
        alert("Times Up");
        console.log("Times Up");
      }
    }, 1000);
  
    btnStop.addEventListener('click', function() {
      clearInterval(intervalId);
      console.log("Timer Stopped");
      alert("Timer Stopped");
      btnStart.disabled = false;
      btnStop.disabled = true;
      btnShortBreak.disabled = false;
    });
  }
  
  window.onload = function() {
    display = document.querySelector('#time');
    btnStart.addEventListener('click', function() {
      startTimer(1500, display);
      console.log("Start Portobello");
      alert("Start Portobello");
      btnStart.disabled = true;
      btnStop.disabled = false;
      btnShortBreak.disabled = true;

    });
  btnShortBreak.addEventListener('click', function() {
    console.log("Short Break Start");
    alert("Short Break Start");
      startTimer(300, display);
      
      btnStart.disabled = true;
      btnStop.disabled = false;
      btnShortBreak.disabled = true;
    });
  
  };
  