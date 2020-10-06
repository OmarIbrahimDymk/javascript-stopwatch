let stopWatch;
let counts = 0;
let countsElement = document.querySelector("#timer");
let startBtn = document.querySelector("#startBtn");
let stopBtn = document.querySelector("#stopBtn");
let resetBtn = document.querySelector("#resetBtn");
let seconds = 0;
let minutes = 0;
let displayMinute = 0;

let start = () => {
  stopWatch = setInterval(() => {
    counts++;
    if (counts < 60) {
      seconds = counts;
    } else {
      minutes++;
      counts = 0;
      seconds = counts;
    }
    if (seconds < 10) {
      seconds = `0${seconds}`;
    }
    if (minutes < 10) {
      displayMinute = `0${minutes}`;
    } else {
      displayMinute = minutes;
    }
    countsElement.innerHTML = `${displayMinute}:${seconds}`;
  }, 100);
};

let stop = () => {
  clearInterval(stopWatch);
};

let reset = () => {
  counts = 0;
  countsElement.innerHTML = "00:00";
};

startBtn.addEventListener("click", start);
stopBtn.addEventListener("click", stop);
resetBtn.addEventListener("click", reset);
