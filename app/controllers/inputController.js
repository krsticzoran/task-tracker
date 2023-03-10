import InputView from "../views/inputView.js";
import InputDataModel from "../models/inputDataModel.js";
import MapModel from "../models/mapModel.js";

class InputController {
  constructor() {
    this.inputView = new InputView();
    this.displayToDo();
  }

  displayToDo() {
    InputDataModel.setInput();
    const inputData = InputDataModel.getInput();
    console.log(inputData);
    this.inputView.renderToDoList(inputData);
    inputData.map((item) => {
      MapModel.addMarker(item.lng, item.lat, item.input);
    });
  }
}

export default InputController;
