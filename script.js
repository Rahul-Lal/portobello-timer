// setInterval(livetime, 1000);
let minute, second;

let pTime = 25;
let sbTIme = 5;
let lbTime = 15

function btnStart_Click() {
    console.log("Start");
    timerActivate("hOneTimer");
}

function timerActivate (timer) {
        // Credit: https://codepen.io/rxsharp/pen/jPZgpX
    var element, endTime, hours, secs, msLeft, time;
    element = document.getElementById("hOneTimer");

    function twoDigits( n )
    {
        return (n <= 9 ? "0" + n : n);
    }
}

function btnPause_Click() {
    console.log("Pause");
}

function btnBreak_Click() {
    console.log("Break");
}