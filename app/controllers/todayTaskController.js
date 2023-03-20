import TodayTaskView from "../views/todayView.js";
import TodayTaskModel from "../models/todayTaskModel.js";
import InputDataModel from "../models/inputDataModel.js";
import ViewHandler from "../views/viewHandler.js";
import MenuView from "../views/menuView.js";

class TodayTaskController {
  constructor() {
    this.todayTaskView = new TodayTaskView();
    this.todayTaskModel = new TodayTaskModel();
    this.viewHandler = new ViewHandler();
    this.menuView = new MenuView();

    this.todayTaskView.bindTodayList(() => this.displayTodayTasks());
  }
  displayTodayTasks() {
    const todayTasks = this.todayTaskModel.getTodayTasks(
      InputDataModel.getInput()
    );
    this.todayTaskView.renderTodayTask(todayTasks);
    this.viewHandler.showView(this.viewHandler.today);
    this.menuView.toggleMenu();
  }
}

export default TodayTaskController;
