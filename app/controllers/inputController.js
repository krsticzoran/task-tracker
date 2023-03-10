import InputView from "../views/inputView.js";
import InputDataModel from "../models/inputDataModel.js";
import MapModel from "../models/mapModel.js";

class InputController {
  constructor() {
    this.inputView = new InputView();
    this.displayToDo();
  }

  async displayToDo() {
    InputDataModel.setInput();

    this.inputView.renderToDoList(InputDataModel.getInput());
  }
}

export default InputController;
