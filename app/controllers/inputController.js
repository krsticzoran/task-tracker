import InputView from "../views/inputView.js";
import InputDataModel from "../models/inputDataModel.js";
import ViewHandler from "../views/viewHandler.js";
import TodayTaskView from "../views/todayView.js";
import TodayTaskModel from "../models/todayTaskModel.js";

class InputController {
  constructor() {
    this.viewHandler = new ViewHandler();
    this.inputView = new InputView();
    this.todayTaskView = new TodayTaskView();
    this.todayTaskModel = new TodayTaskModel();
    this.displayTasks();
    this.todayTaskView.bindTodayList(() => this.displayTodayTasks());
  }

  displayTodayTasks() {
    const todayTasks = this.todayTaskModel.getTodayTasks(
      InputDataModel.getInput()
    );
    this.todayTaskView.renderTodayTask(todayTasks);
    this.viewHandler.showView(this.viewHandler.today);
  }

  displayTasks() {
    InputDataModel.setInput();
    this.inputView.clearToDoList();

    this.inputView.renderToDoList(InputDataModel.getInput());
    this.viewHandler.showView(this.viewHandler.toDo);
  }
}

export default InputController;
