import InputView from "../views/inputView.js";
import ConfirmModel from "../models/confirmModel.js";
import InputDataModel from "../models/inputDataModel.js";
import CompletedTaskModel from "../models/completedTaskModel.js";
import TodayTaskView from "../views/todayView.js";
import TodayTaskModel from "../models/todayTaskModel.js";
import TomorrowTaskModel from "../models/tomorrowTaskmodel.js";
import TomorrowTaskView from "../views/tomorrowTaskView.js";
import PagantionModel from "../models/paganationModel.js";
import PagangtionView from "../views/paganationView.js";

class ConfirmController {
  constructor() {
    this.inputView = new InputView();
    this.confirmModel = new ConfirmModel();
    this.todayTaskView = new TodayTaskView();
    this.todayTaskModel = new TodayTaskModel();
    this.tomorrowTaskModel = new TomorrowTaskModel();
    this.tomorrowTaskView = new TomorrowTaskView();
    this.pagangtionView = new PagangtionView();
    this.inputView.bindTask((e) => this.confirmTask(e));
    this.todayTaskView.bindTaskClick((e) => this.confirmTask(e));
    this.tomorrowTaskView.bindTomorrowClick((e) => this.confirmTask(e));
  }

  confirmTask(e) {
    this.confirmModel.clickCheckbox(e);
    const isConfirm = this.confirmModel.confirmTask(e);
    if (isConfirm) {
      const element = this.confirmModel.getConfirmElement(e);
      InputDataModel.delInput(element);
      CompletedTaskModel.addCompletedTask(element);

      //page number
      PagantionModel.setLength(InputDataModel.getInput());
      this.pagangtionView.setPageNumber(PagantionModel.getPageNumber());

      //Re-render inputs
      this.inputView.clearToDoList();
      this.inputView.renderToDoList(
        InputDataModel.getInput(),
        PagantionModel.getPageNumber()
      );

      //Re-render today
      const todayTasks = this.todayTaskModel.getTodayTasks(
        InputDataModel.getInput()
      );
      this.todayTaskView.renderTodayTask(todayTasks);

      //Re-render tomorrow
      const tomorrowTasks = this.tomorrowTaskModel.getTomorrowTasks(
        InputDataModel.getInput()
      );
      this.tomorrowTaskView.renderTomorrowTask(tomorrowTasks);
    }
  }
}
export default ConfirmController;
