class DateModel {
  // Returns the current date as a string in the format "D Month YYYY".
  getDate() {
    const now = new Date();
    const year = now.getFullYear().toString();
    const month = now.toLocaleString("default", { month: "long" });
    const day = now.getDate();
    return `${day} ${month} ${year}`;
  }

  // Returns true if it's currently daytime, false otherwise.
  isDay() {
    const now = new Date();
    const hours = now.getHours();
    return hours >= 6 && hours < 18;
  }
}

export default DateModel;
