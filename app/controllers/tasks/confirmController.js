import InputView from "../../views/tasks/inputView.js";
import ConfirmModel from "../../models/tasks/confirmModel.js";
import InputDataModel from "../../models/tasks/inputDataModel.js";
import CompletedTaskModel from "../../models/tasks/completedTaskModel.js";
import TodayTaskView from "../../views/tasks/todayView.js";
import TodayTaskModel from "../../models/tasks/todayTaskModel.js";
import TomorrowTaskModel from "../../models/tasks/tomorrowTaskmodel.js";
import TomorrowTaskView from "../../views/tasks/tomorrowTaskView.js";
import PagantionModel from "../../models/pagination/paginationModel.js";
import PagangtionView from "../../views/pagination/paginationView.js";
import MapModel from "../../models/map/mapModel.js";

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
    const element = this.confirmModel.getConfirmElement(e);
    const { lat, lng } = this.confirmModel.getElementLatLng(
      element,
      InputDataModel.getInput()
    );
    MapModel.centerMap(lat, lng, element[0]);
    const isConfirm = this.confirmModel.confirmTask(e);
    if (isConfirm) {
      // Remove markers based on lat and lng
      MapModel.removeMarker(lat, lng);

      //delete element and push in completed arr
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
