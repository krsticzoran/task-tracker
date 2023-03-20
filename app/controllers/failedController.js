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
  }

  // Method to display the list of failed inputs
  displayFailedList() {
    this.viewHandler.showView(this.viewHandler.failed);
    this.failedView.renderFailedList(InputDataModel.getFailed());
    this.menuView.toggleMenu();
  }
}

export default FailedController;
