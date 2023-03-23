import PagangtionView from "../views/paganationView.js";
import PagantionModel from "../models/paganationModel.js";
import InputDataModel from "../models/inputDataModel.js";

class PaganationController {
  constructor() {
    this.pagangtionView = new PagangtionView();
    this.displayNumber();
    this.pagangtionView.bindLeftButton(() => this.leftClick());
    this.pagangtionView.bindRightButton(() => this.rightClick());
  }

  displayNumber() {
    this.pagangtionView.setPageNumber(PagantionModel.getPageNumber());
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
