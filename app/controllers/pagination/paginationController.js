import PagangtionView from "../../views/pagination/paginationView.js";
import PagantionModel from "../../models/pagination/paginationModel.js";
import InputDataModel from "../../models/tasks/inputDataModel.js";
import InputView from "../../views/tasks/inputView.js";

class PaganationController {
  constructor() {
    this.pagangtionView = new PagangtionView();
    this.inputView = new InputView();
    this.displayNumber();
    this.pagangtionView.bindLeftButton(() => this.leftClick());
    this.pagangtionView.bindRightButton(() => this.rightClick());
  }

  // display page number of tasks
  displayNumber() {
    this.pagangtionView.setPageNumber(PagantionModel.getPageNumber());
    this.inputView.clearToDoList();
    this.inputView.renderToDoList(
      InputDataModel.getInput(),
      PagantionModel.getPageNumber()
    );
  }

  // creturn to the previous page
  leftClick() {
    PagantionModel.setPageNumber(-1);
    this.displayNumber();
  }
  //go to the next page
  rightClick() {
    PagantionModel.setPageNumber(1);
    this.displayNumber();
  }
}
export default PaganationController;
