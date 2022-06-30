// Place the event listeners on figures
  // When the mouse the 'figure', start a timer
    // If the mouse leave the 'figure', cancel the timer;

  // After the timeout, display the caption.

class myApp {
  constructor() {
    this.timer = null;
    this.figures = document.querySelectorAll('figure')
    this.figureContainer = document.querySelector('#exotic_animals')
    this.bindEvents();
  }

  displayCaption(event) {
    let caption = event.target.querySelector('figcaption')
    caption.style.display = 'block';
    caption.style.position = 'absolute';
  }

  hideCaption(event) {
    let caption = event.target.querySelector('figcaption');
    caption.style.display = 'none';
  }

  handleMouseLeave(event) {
    if (this.timer) {
      clearTimeout(this.timer);
    } 
    this.hideCaption(event);
  }
  handleMouseEnter(event) {
    console.log(event.target.tagName)
    this.timer = setTimeout(function() {
      this.displayCaption(event);
    }.bind(this), 2000);
  }

  bindEvents() {
    // this.figureContainer.addEventListener('mouseenter', this.handleMouseEnter.bind(this));
    // this.figureContainer.addEventListener('mouseleave', this.handleMouseLeave.bind(this));

    this.figures.forEach(fig => fig.addEventListener('mouseenter', this.handleMouseEnter.bind(this)));
    this.figures.forEach(fig => fig.addEventListener('mouseleave', this.handleMouseLeave.bind(this)));
  }
}
document.addEventListener('DOMContentLoaded', () => {
  const APP = new myApp()
})