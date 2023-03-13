import InputView from "../views/inputView.js";
import InputDataModel from "../models/inputDataModel.js";
import MapModel from "../models/mapModel.js";
import ViewHandler from "../views/viewHandler.js";

class InputController {
  constructor() {
    this.viewHandler = new ViewHandler();
    this.inputView = new InputView();
    this.displayToDo();
  }

  displayToDo() {
    InputDataModel.setInput();
    this.inputView.clearToDoList();

    this.inputView.renderToDoList(InputDataModel.getInput());
    this.viewHandler.showView(this.viewHandler.toDo);
  }
}

export default InputController;
