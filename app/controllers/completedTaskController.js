import CompletedTaskModel from "../models/completedTaskModel.js";
import CompletedTaskView from "../views/completedTaskView.js";
import ViewHandler from "../views/viewHandler.js";

class CompletedTaskController {
  constructor() {
    this.completedTaskView = new CompletedTaskView();
    this.viewHandler = new ViewHandler();
    this.completedTaskView.bindCompletedList(() => this.displayCompletedList());
  }

  displayCompletedList() {
    this.viewHandler.showView(this.viewHandler.completed);
    this.completedTaskView.renderCompletedTask(
      CompletedTaskModel.getCompletedTask()
    );
  }
}

export default CompletedTaskController;
