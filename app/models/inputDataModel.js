class InputDataModel {
  static input = [];
  static failed = [];

  static getInput() {
    return this.input;
  }

  static setInput() {
    const today = new Date();
    today.setHours(0, 0, 0, 0); // set the time to 00:00:00:000 (midnight)

    const localStorageInput = [];
    //localStorage.clear("todo2");

    JSON.parse(localStorage.getItem("todo2")) &&
      this.failed.unshift(...JSON.parse(localStorage.getItem("todo2")));

    //localStorage.clear("todo");
    JSON.parse(localStorage.getItem("todo")) &&
      localStorageInput.unshift(...JSON.parse(localStorage.getItem("todo")));
    console.log(localStorageInput);
    if (localStorageInput) {
      const filteredFailed = localStorageInput.filter(function (task) {
        return new Date(task.date).getTime() < today.getTime();
      });
      filteredFailed && this.failed.unshift(...filteredFailed);
      localStorage.setItem("todo2", JSON.stringify(filteredFailed));
      console.log(this.failed);
      const filteredInput = localStorageInput.filter(function (task) {
        return new Date(task.date).getTime() >= today.getTime();
      });
      filteredInput && this.input.unshift(...filteredInput);
      localStorage.setItem("todo", JSON.stringify(this.input));
      console.log(this.input);
    }
  }

  static pushInput(input) {
    this.input.unshift(input); // add input to the beginning of the array
    console.log(this.input);
  }
}

export default InputDataModel;
