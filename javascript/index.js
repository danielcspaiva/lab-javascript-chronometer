const chronometer = new Chronometer();

// get the buttons:
const btnLeft = document.getElementById('btnLeft');
const btnRight = document.getElementById('btnRight');

// get the DOM elements that will serve us to display the time:
let minDec = document.getElementById('minDec');
let minUni = document.getElementById('minUni');
let secDec = document.getElementById('secDec');
let secUni = document.getElementById('secUni');
let milDec = document.getElementById('milDec');
let milUni = document.getElementById('milUni');
let splits = document.getElementById('splits');

function printTime() {
  // ... your code goes here
  intervalIdDom = setInterval(() => {
    printSeconds();
    printMinutes();
  }, 1000);
}

function printMinutes() {
  // ... your code goes here
  minDec.innerHTML = chronometer.twoDigitsNumber(chronometer.getMinutes())[0];
  minUni.innerHTML = chronometer.twoDigitsNumber(chronometer.getMinutes())[1];
}

function printSeconds() {
  // ... your code goes here
  secDec.innerHTML = chronometer.twoDigitsNumber(chronometer.getSeconds())[0];
  secUni.innerHTML = chronometer.twoDigitsNumber(chronometer.getSeconds())[1];
}

// ==> BONUS
function printMilliseconds() {
  // ... your code goes here
}

function printSplit() {
  // ... your code goes here
  let li = document.createElement('li')
  li.innerHTML = chronometer.splitClick()
  splits.appendChild(li)
}

function clearSplits() {
  // ... your code goes here
  splits.innerHTML = ''
}

function clearTimer() {
  minDec.innerHTML = '0'
  minUni.innerHTML = '0'
  secUni.innerHTML = '0'
  secDec.innerHTML = '0'
}

function setStopBtn() {
  // ... your code goes here
  btnLeft.classList.remove("start")
  btnLeft.classList.add("stop")
  btnLeft.innerHTML = "STOP"
}

function setSplitBtn() {
  // ... your code goes here
  btnRight.classList.remove("reset")
  btnRight.classList.add("split")
  btnRight.innerHTML = "SPLIT"
}

function setStartBtn() {
  // ... your code goes here
  btnLeft.classList.remove("stop")
  btnLeft.classList.add("start")
  btnLeft.innerHTML = "START"
}

function setResetBtn() {
  // ... your code goes here
  btnRight.classList.remove("split")
  btnRight.classList.add("reset")
  btnRight.innerHTML = "RESET"
}

// Start/Stop Button
btnLeft.addEventListener('click', () => {
  // ... your code goes here
  if(btnLeft.classList.contains("start")){
    chronometer.startClick()
    printTime()
    setStopBtn()
    setSplitBtn()
  } else {
    chronometer.stopClick()
    clearInterval(intervalIdDom)
    setStartBtn()
    setResetBtn()
  }
});

// Reset/Split Button
btnRight.addEventListener('click', () => {
  // ... your code goes here
  if (btnRight.classList.contains("reset")) {
    clearSplits()
    chronometer.resetClick()
    clearTimer()
  } else {
    printSplit()
  }
});
