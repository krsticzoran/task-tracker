import TomorrowTaskView from "../views/tomorrowTaskView.js";
import TomorrowTaskModel from "../models/tomorrowTaskmodel.js";
import InputDataModel from "../models/inputDataModel.js";
import ViewHandler from "../views/viewHandler.js";
import MenuView from "../views/menuView.js";

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
    this.viewHandler.showView(this.viewHandler.tomorrow);
    this.menuView.toggleMenu();
  }
}

export default TomorrowTaskController;
