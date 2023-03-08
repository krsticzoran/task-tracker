import InputView from "../views/inputView.js";
import InputDataModel from "../models/inputDataModel.js";

class InputController {
  constructor() {
    this.inputView = new InputView();
    this.displayToDo();
  }

  displayToDo() {
    this.inputView.renderToDoList(InputDataModel.getInput());
  }
}

export default InputController;
