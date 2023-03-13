import FailedView from "../views/failedView.js";
import ViewHandler from "../views/viewHandler.js";
import InputDataModel from "../models/inputDataModel.js";

class FailedController {
  constructor() {
    this.failedView = new FailedView();
    this.viewHandler = new ViewHandler();
    this.failedView.bindFailedList(() => this.displayFailedList());
  }
  displayFailedList() {
    this.viewHandler.showView(this.viewHandler.failed);
    this.failedView.renderFailedList(InputDataModel.getFailed());
  }
}

export default FailedController;
