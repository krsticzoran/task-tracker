class InputDataModel {
  static input = [{ input: "Zoki", date: "29.01.1981" }];

  static getInput() {
    return this.input;
  }

  static pushInput(input) {
    this.input.unshift(input); // add input to the beginning of the array
    console.log(this.input);
  }
}

export default InputDataModel;
