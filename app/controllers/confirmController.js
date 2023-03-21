import InputView from "../views/inputView.js";
import ConfirmModel from "../models/confirmModel.js";
import InputDataModel from "../models/inputDataModel.js";
import CompletedTaskModel from "../models/completedTaskModel.js";

class ConfirmController {
  constructor() {
    this.inputView = new InputView();
    this.confirmModel = new ConfirmModel();

    this.inputView.bindTask((e) => this.confirmTask(e));
  }

  confirmTask(e) {
    this.confirmModel.clickCheckbox(e);
    const isConfirm = this.confirmModel.confirmTask(e);
    if (isConfirm) {
      const element = this.confirmModel.getConfirmElement(e);
      InputDataModel.delInput(element);
      CompletedTaskModel.addCompletedTask(element);
    }
  }
}
export default ConfirmController;
