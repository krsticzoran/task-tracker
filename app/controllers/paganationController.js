import PagangtionView from "../views/paganationView.js";
import PagantionModel from "../models/paganationModel.js";
import InputDataModel from "../models/inputDataModel.js";
import InputView from "../views/inputView.js";

class PaganationController {
  constructor() {
    this.pagangtionView = new PagangtionView();
    this.inputView = new InputView();
    this.displayNumber();
    this.pagangtionView.bindLeftButton(() => this.leftClick());
    this.pagangtionView.bindRightButton(() => this.rightClick());
  }

  displayNumber() {
    this.pagangtionView.setPageNumber(PagantionModel.getPageNumber());
    this.inputView.clearToDoList();
    this.inputView.renderToDoList(
      InputDataModel.getInput(),
      PagantionModel.getPageNumber()
    );
  }

  leftClick() {
    PagantionModel.setPageNumber(-1);
    this.displayNumber();
  }
  rightClick() {
    PagantionModel.setPageNumber(1);
    this.displayNumber();
  }
}
export default PaganationController;
