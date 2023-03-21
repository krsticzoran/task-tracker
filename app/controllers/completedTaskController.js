import CompletedTaskModel from "../models/completedTaskModel.js";
import CompletedTaskView from "../views/completedTaskView.js";
import ViewHandler from "../views/viewHandler.js";
import MenuView from "../views/menuView.js";

class CompletedTaskController {
  constructor() {
    this.completedTaskView = new CompletedTaskView();
    this.viewHandler = new ViewHandler();
    this.menuView = new MenuView();
    this.completedTaskView.bindCompletedList(() => this.displayCompletedList());
  }

  displayCompletedList() {
    this.viewHandler.showView(this.viewHandler.completed);

    this.completedTaskView.renderCompletedTask(
      CompletedTaskModel.getCompletedTask()
    );
    this.menuView.toggleMenu();
  }
}

export default CompletedTaskController;
