class Chronometer {
  constructor() {
    // ... your code goes here
    this.currentTime = 0
    this.intervalId = 0
  }
  startClick(callback) {
    // ... your code goes here
    this.intervalId = setInterval(() => this.currentTime++, 1000);
  }
  getMinutes() {
    // ... your code goes here
    return Math.floor(this.currentTime / 60);
  }
  getSeconds() {
    // ... your code goes here
    return this.currentTime % 60;
  }
  twoDigitsNumber(value) {
    if(value < 10){
      return `0${value}`;
    }
    return `${value}`;
  }
  stopClick() {
    // ... your code goes here
    clearInterval(this.intervalId);
  }
  resetClick() {
    // ... your code goes here
    this.currentTime = 0;
  }
  splitClick() {
    // ... your code goes here
    return this.twoDigitsNumber(this.getMinutes()) + ':' + this.twoDigitsNumber(this.getSeconds());
  }
}