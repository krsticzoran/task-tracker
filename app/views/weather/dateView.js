class DateView {
  constructor() {
    // Gets the element that displays the date.
    this.dateElement = document.querySelector(".date");
  }

  displayDate(date) {
    // Updates the text content of the date element with the specified date.
    this.dateElement.textContent = date;
  }
}

export default DateView;
