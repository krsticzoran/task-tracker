import InputView from "../views/inputView.js";
import InputDataModel from "../models/inputDataModel.js";
import MapModel from "../models/mapModel.js";

class InputController {
  constructor() {
    this.inputView = new InputView();
    this.displayToDo();
    this.inputView.bindFailedList(() => this.displayFailedList());
  }

  displayFailedList() {
    this.inputView.clearToDoList();
    this.inputView.renderToDoList(InputDataModel.getFailed());
  }

  displayToDo() {
    InputDataModel.setInput();
    this.inputView.clearToDoList();

    this.inputView.renderToDoList(InputDataModel.getInput());
  }
}

export default InputController;
