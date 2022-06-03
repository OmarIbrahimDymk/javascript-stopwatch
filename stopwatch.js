let utility = require("./utility");

let stopWatch;
let counts = 0;
let countsElement = document.querySelector("#timer");
let startBtn = document.querySelector("#startBtn");
let stopBtn = document.querySelector("#stopBtn");
let resetBtn = document.querySelector("#resetBtn");
let seconds = 0;
let minutes = 0;

let start = () => {
  stopWatch = setInterval(() => {
    counts++;

    countsElement.innerHTML = formatNumber(counts);
  }, 10);
};

let formatNumber = (unformattedNumber) => {
  let milis = utility.stringifyNumber(unformattedNumber).slice(2);
  let seconds = utility.stringifyNumber(unformattedNumber).slice(0, 2);
  return `${seconds}:${milis}`;
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
