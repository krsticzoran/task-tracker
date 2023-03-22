import FailedView from "../views/failedView.js";
import ViewHandler from "../views/viewHandler.js";
import InputDataModel from "../models/inputDataModel.js";
import MenuView from "../views/menuView.js";

class FailedController {
  constructor() {
    this.failedView = new FailedView();
    this.viewHandler = new ViewHandler();
    this.menuView = new MenuView();
    this.failedView.bindFailedList(() => this.displayFailedList());
    this.failedView.bindClickDelete((e) => this.deleteTask(e));
    this.failedView.bindDeleteAll((e) => this.deleteAll(e));
  }

  deleteTask(e) {
    if (e.target.classList.contains("delete")) {
      InputDataModel.deleteTask(e);
      this.failedView.renderFailedList(InputDataModel.getFailed());
    }
  }

  deleteAll() {
    InputDataModel.deleteAllFailed();
    this.failedView.renderFailedList(InputDataModel.getFailed());
  }

  // Method to display the list of failed inputs
  displayFailedList() {
    this.viewHandler.showView(this.viewHandler.failed);
    this.failedView.renderFailedList(InputDataModel.getFailed());
    this.menuView.toggleMenu();
  }
}

export default FailedController;
