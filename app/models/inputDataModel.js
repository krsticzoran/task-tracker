class InputDataModel {
  static input = [];

  static getInput() {
    return this.input;
  }

  static setInput() {
    //localStorage.clear("todo");
    const localStorageInput = JSON.parse(localStorage.getItem("todo"));
    if (localStorageInput) {
      Array.isArray(localStorageInput)
        ? this.input.unshift(...localStorageInput)
        : this.input.unshift(localStorageInput);
    }
  }

  static pushInput(input) {
    this.input.unshift(input); // add input to the beginning of the array
    console.log(this.input);
  }
}

export default InputDataModel;
