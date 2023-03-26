import TomorrowTaskView from "../../views/tasks/tomorrowTaskView.js";
import TomorrowTaskModel from "../../models/tasks/tomorrowTaskmodel.js";
import InputDataModel from "../../models/tasks/inputDataModel.js";
import ViewHandler from "../../views/tasks/viewHandler.js";
import MenuView from "../../views/menu/menuView.js";

class TomorrowTaskController {
  constructor() {
    this.tomorrowTaskModel = new TomorrowTaskModel();
    this.tomorrowTaskView = new TomorrowTaskView();
    this.menuView = new MenuView();
    this.viewHandler = new ViewHandler();
    this.tomorrowTaskView.bindTomorrowList(() => this.displayTomorrowTasks());
  }

  displayTomorrowTasks() {
    const tomorrowTasks = this.tomorrowTaskModel.getTomorrowTasks(
      InputDataModel.getInput()
    );
    this.tomorrowTaskView.renderTomorrowTask(tomorrowTasks);
    this.viewHandler.showView(this.viewHandler.tomorrow, "none");
    this.menuView.toggleMenu();
  }
}

export default TomorrowTaskController;
