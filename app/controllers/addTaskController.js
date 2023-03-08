import AddTaskView from "../views/addTaskView.js";
import MapModel from "../models/mapModel.js";
import AddTaskModel from "../models/addTaskModel.js";
import InputDataModel from "../models/inputDataModel.js";
import InputView from "../views/inputView.js";

class AddTaskController {
  constructor() {
    this.addTaskView = new AddTaskView();
    this.addTaskView.bindCloseModal(() => this.closeModal());
    this.addTaskView.bindAddTask(() => this.addTask());
    this.addTaskModel = new AddTaskModel();
    this.inputView = new InputView();
  }

  addTask() {
    // Get input data and date
    const { input, date } = this.addTaskModel.getData();
    // Get the latitude and longitude
    const { lat, lng } = MapModel.getLatLong();
    // Create an object with input data and location
    const inputData = { input, date, lat, lng };

    // check - input data is valid
    if (this.addTaskModel.setInputData(inputData)) {
      //store inputData object in array of data
      InputDataModel.pushInput(inputData);

      // display task
      this.inputView.renderToDoList([inputData]);

      this.addTaskView.clearInput();
      this.closeModal();
      MapModel.clearLatLong();
    }
  }
  // Close the modal methtod
  closeModal() {
    this.addTaskView.closeTaskModal();
  }
}

export default AddTaskController;
