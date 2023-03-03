import TimeView from "../views/timeView.js";
import DateView from "../views/dateView.js";
import ClockModel from "../models/timeModel.js";
import DateModel from "../models/dateModel.js";

class DateTimeController {
  constructor() {
    // Create instances of the TimeView and DateView classes to display the time and date.
    this.timeView = new TimeView();
    this.dateView = new DateView();
    // Create instances of the ClockModel and DateModel classes to get the current time and date.
    this.clockModel = new ClockModel();
    this.dateModel = new DateModel();

    // Call the displayTime() and displayDate() methods every second to update the clock and date views.
    setInterval(() => {
      // Get the current time and date as strings from the ClockModel and DateModel instances.
      const timeString = this.clockModel.getTime();
      const dateString = this.dateModel.getDate();
      // Update the time and date views with the current time and date strings.
      this.timeView.displayTime(timeString);
      this.dateView.displayDate(dateString);
    }, 1000);
  }
}

export default DateTimeController;






