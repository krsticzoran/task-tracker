class TimeView {
  constructor() {
    // Gets the element that displays the time.
    this.clockElement = document.querySelector(".clock");
  }

  displayTime(time) {
    // Updates the text content of the time element with the specified time.
    this.clockElement.textContent = time;
  }
}

export default TimeView;
