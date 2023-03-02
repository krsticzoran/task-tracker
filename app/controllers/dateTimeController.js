import TimeView from "../views/timeView.js";
let currentTime = 0;
class MainController {
  constructor() {
    this.timeView = new TimeView();

    // call displayTime() method every second to update the clock
    setInterval(() => {
      currentTime = currentTime + 1;
      this.timeView.displayTime(currentTime);
    }, 1000);
  }
}

export default MainController;
