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
    this.completedTaskView.bindCompletedClick((e) => this.deleteTask(e));
    this.completedTaskView.bindDeleteAll(() => this.deleteAll());
  }

  deleteAll() {
    CompletedTaskModel.deleteAllCompletedTask();
    this.completedTaskView.renderCompletedTask(
      CompletedTaskModel.getCompletedTask()
    );
  }

  deleteTask(e) {
    if (e.target.classList.contains("delete")) {
      CompletedTaskModel.deleteTask(e);
      this.completedTaskView.renderCompletedTask(
        CompletedTaskModel.getCompletedTask()
      );
    }
  }

  displayCompletedList() {
    this.viewHandler.showView(this.viewHandler.completed, "none");

    this.completedTaskView.renderCompletedTask(
      CompletedTaskModel.getCompletedTask()
    );
    this.menuView.toggleMenu();
  }
}

export default CompletedTaskController;
