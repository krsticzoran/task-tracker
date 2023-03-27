class InputDataModel {
  static input = [];
  static failed = [];
  static sortController = 0;

  // Get all tasks
  static getInput() {
    return this.input;
  }

  // Delete task
  static delInput(element) {
    this.input.forEach((input, index) => {
      if (input.input == element[0] && input.date == element[1]) {
        this.input.splice(index, 1);
        localStorage.setItem("todo", JSON.stringify(this.input));
      }
    });
  }

  // Sort tasks in ascending/descending order
  static sortInput() {
    if (this.sortController == 0) {
      this.input.sort((a, b) => a.input.localeCompare(b.input));
      this.sortController = 1;
    } else {
      this.input.sort((a, b) => b.input.localeCompare(a.input));
      this.sortController = 0;
    }
  }

  //Checking if task deadline has expired
  static setInput() {
    const today = new Date();
    today.setHours(0, 0, 0, 0); // set the time to 00:00:00:000 (midnight)

    const localStorageInput = [];
    //localStorage.clear("todo2");

    // store failed tasks in failed array from localeStorege
    JSON.parse(localStorage.getItem("todo2")) &&
      this.failed.unshift(...JSON.parse(localStorage.getItem("todo2")));

    //localStorage.clear("todo");
    // store  tasks in localStorageInput array from localeStorege
    JSON.parse(localStorage.getItem("todo")) &&
      localStorageInput.unshift(...JSON.parse(localStorage.getItem("todo")));

    if (localStorageInput) {
      //Check if the task's time has expired and put that task in faild arrays
      const filteredFailed = localStorageInput.filter(function (task) {
        return new Date(task.date).getTime() < today.getTime();
      });
      filteredFailed && this.failed.unshift(...filteredFailed);
      localStorage.setItem("todo2", JSON.stringify(this.failed));

      //Filter tasks that have not yet expired and put them in an input array.
      const filteredInput = localStorageInput.filter(function (task) {
        return new Date(task.date).getTime() >= today.getTime();
      });
      filteredInput && this.input.unshift(...filteredInput);
      localStorage.setItem("todo", JSON.stringify(this.input));
    }
  }

  static pushInput(input) {
    this.input.unshift(input); // add input to the beginning of the array
  }

  // Get all failed tasks
  static getFailed() {
    return this.failed;
  }

  // delete failed task
  static deleteTask(e) {
    const element = this.getElement(e);
    this.failed.forEach((task, index) => {
      if (task.input == element[0] && task.date == element[1]) {
        this.failed.splice(index, 1);
        localStorage.setItem("todo2", JSON.stringify(this.failed));
      }
    });
  }

  //delete all Failed Task
  static deleteAllFailed() {
    this.failed = [];
    localStorage.setItem("todo2", JSON.stringify(this.failed));
  }

  // Get clicked element
  static getElement(e) {
    return [
      e.target.parentElement.querySelector(".span--completed").textContent,
      e.target.parentElement.querySelector(".date-for-delete").textContent,
    ];
  }
}

export default InputDataModel;
