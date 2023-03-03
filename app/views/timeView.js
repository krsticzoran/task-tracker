class TimeView {
  constructor() {
    this.clockElement = document.querySelector(".clock");
  }

  displayTime(time) {
    this.clockElement.textContent = time;
  }
}

export default TimeView;
