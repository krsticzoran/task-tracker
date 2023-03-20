import InputView from "../views/inputView.js";
import InputDataModel from "../models/inputDataModel.js";
import ViewHandler from "../views/viewHandler.js";
import MenuView from "../views/menuView.js";

class InputController {
  constructor() {
    this.viewHandler = new ViewHandler();
    this.inputView = new InputView();
    this.menuView = new MenuView();
    this.loadTasks();
    this.inputView.bindList(() => this.displayTasks());
  }

  // rendering inputs when user click on home link/button
  displayTasks() {
    this.inputView.clearToDoList();
    this.inputView.renderToDoList(InputDataModel.getInput());
    this.viewHandler.showView(this.viewHandler.toDo);
    this.menuView.toggleMenu();
  }

  // rendering input when user load page
  loadTasks() {
    this.inputView.clearToDoList();
    InputDataModel.setInput();

    this.inputView.renderToDoList(InputDataModel.getInput());
    this.viewHandler.showView(this.viewHandler.toDo);
  }
}

export default InputController;
