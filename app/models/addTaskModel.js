class AddTaskModel {
  constructor() {
    this.input = "";
    this.date = "";
    // get input text
    this.inputAdd = document.querySelector(".input--add");
    // get input date
    this.inputDate = document.querySelector(".input--date");
    // add event listeners for input changes on input elements
    this.inputAdd.addEventListener("input", this.handleInputAdd.bind(this));
    this.inputDate.addEventListener("input", this.handleInputDate.bind(this));
  }
  //return current values of input and date properties
  getData() {
    return { input: this.input, date: this.date };
  }
  //handle input changes
  handleInputAdd(event) {
    this.input = event.target.value;
  }
  //handle date changes
  handleInputDate(event) {
    this.date = event.target.value;
  }

  // set input and date on default value
  clearInputDate() {
    this.input = "";
    this.date = "";
  }

  //input validation
  setInputData(inputData) {
    const today = new Date();
    today.setHours(0, 0, 0, 0); // set the time to 00:00:00:000 (midnight)
    const dateObj = new Date(inputData.date);
    if (!inputData.input) {
      alert("add a task");
      return false;
    }
    if (dateObj.getTime() < today.getTime()) {
      alert("Please enter a valid date");
      return false;
    }
    this.input = inputData.input;
    this.date = inputData.date;
    return true;
  }
}

export default AddTaskModel;
