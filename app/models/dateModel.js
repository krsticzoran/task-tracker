class DateModel {
  // Returns the current date as a string in the format "D Month YYYY".
  getDate() {
    const now = new Date();
    const year = now.getFullYear().toString();
    const month = now.toLocaleString("default", { month: "long" });
    const day = now.getDate();
    return `${day} ${month} ${year}`;
  }
}

export default DateModel;
