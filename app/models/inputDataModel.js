class InputDataModel {
  static input = [];

  static getInput() {
    return this.input;
  }

  static pushInput(input) {
    this.input.unshift(input); // add input to the beginning of the array
    console.log(this.input);
  }
}

export default InputDataModel;
