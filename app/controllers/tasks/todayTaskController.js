import TodayTaskView from "../../views/tasks/todayView.js";
import TodayTaskModel from "../../models/tasks/todayTaskModel.js";
import InputDataModel from "../../models/tasks/inputDataModel.js";
import ViewHandler from "../../views/tasks/viewHandler.js";
import MenuView from "../../views/menu/menuView.js";

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
    this.viewHandler.showView(this.viewHandler.today, "none");
    this.menuView.toggleMenu();
  }
}

export default TodayTaskController;
