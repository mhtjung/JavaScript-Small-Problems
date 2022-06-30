class Application {
  constructor() {
    this.hours = 2;
    this.minutes = 59;
    this.seconds = 59;
    this.centiSeconds = 0;
    this.stopped = false;
    this.interval = null;

    this.hoursDisplay = document.querySelector('.hours');
    this.minsDisplay = document.querySelector('.mins');
    this.secsDisplay = document.querySelector('.secs');
    this.csDisplay = document.querySelector('.centisecs');
    this.toggleButton = document.querySelector('.toggle');
    this.resetButton = document.querySelector('.reset')

    this.bindEvents();
  }

  bindEvents() {
    this.toggleButton.addEventListener('click', this.handleToggleClick.bind(this));
    this.resetButton.addEventListener('click', this.handleResetClick.bind(this));
  }

  handleToggleClick(event) {
    if (event.target.value === 'start') {
      this.incrementCS();
      event.target.value = 'stop';
      event.target.textContent = 'Stop';
    } else {
      clearInterval(this.interval);
      event.target.value = 'start';
      event.target.textContent = 'Start'
    }
  }

  handleResetClick(event) {
    clearInterval(this.interval);
    ['hours', 'minutes', 'seconds', 'centiSeconds'].forEach(prop => this[prop] = 0);
    [this.hoursDisplay, this.minsDisplay, this.secsDisplay, this.csDisplay].forEach(el => 
      el.textContent = this.formatNumber(0)
    )
    this.toggleButton.value = 'start';
    this.textContent = 'Start';
  }

  incrementCS() {
    this.interval = setInterval(() => {
      this.centiSeconds += 1;
      this.csDisplay.textContent = this.formatNumber(this.centiSeconds);
      if (this.centiSeconds >= 99) {
        this.centiSeconds = 0;
        this.incrementSecs();
      } 
    }, 10)
  }

  incrementSecs() {
    this.seconds += 1
    this.secsDisplay.textContent = this.formatNumber(this.seconds);
    if (this.seconds >= 60) {
      this.seconds = 0;
      this.secsDisplay.textContent = this.formatNumber(this.seconds);
      this.incrementMins();
    }
  }

  incrementMins() {
    this.minutes += 1;
    this.minsDisplay.textContent = this.formatNumber(this.minutes);
    if (this.minutes >= 60) {
      this.minutes = 0;
      this.minsDisplay.textContent = this.formatNumber(this.seconds);
      this.incrementHours();
    }
  }

  incrementHours() {
    this.hours += 1;
    this.hoursDisplay.textContent = this.formatNumber(this.hours);
  }

  formatNumber(number) {
    if (String(number).length < 2) {
      return `0${String(number)}`;
    }
    return String(number);
  }
}

document.addEventListener('DOMContentLoaded', () => {
  const app = new Application()
})