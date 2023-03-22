import InputView from "../views/inputView.js";
import InputDataModel from "../models/inputDataModel.js";
import ViewHandler from "../views/viewHandler.js";
import MenuView from "../views/menuView.js";
import CompletedTaskModel from "../models/completedTaskModel.js";

class InputController {
  constructor() {
    this.viewHandler = new ViewHandler();
    this.inputView = new InputView();
    this.menuView = new MenuView();
    this.loadTasks();
    this.inputView.bindList(() => this.displayTasks());
    this.inputView.bindSort(() => this.sortTasks());
  }

  // rendering inputs when user click on home link/button
  displayTasks() {
    this.inputView.clearToDoList();
    this.inputView.renderToDoList(InputDataModel.getInput());
    this.viewHandler.showView(this.viewHandler.toDo, "block");
    this.menuView.toggleMenu();
  }

  // rendering input when user load page
  loadTasks() {
    this.inputView.clearToDoList();
    InputDataModel.setInput();

    this.inputView.renderToDoList(InputDataModel.getInput());
    this.viewHandler.showView(this.viewHandler.toDo, "block");

    CompletedTaskModel.setCompletedTask();
  }

  sortTasks() {
    InputDataModel.sortInput();
    this.inputView.clearToDoList();
    this.inputView.renderToDoList(InputDataModel.getInput());
  }
}

export default InputController;
