import AddTaskView from "../views/addTaskView.js";
import MapModel from "../models/mapModel.js";
import AddTaskModel from "../models/addTaskModel.js";
import InputDataModel from "../models/inputDataModel.js";
import InputView from "../views/inputView.js";
import TodayTaskModel from "../models/todayTaskModel.js";
import TodayView from "../views/todayView.js";
import TomorrowTaskModel from "../models/tomorrowTaskmodel.js";
import TomorrowTaskView from "../views/tomorrowTaskView.js";
import PagantionModel from "../models/paganationModel.js";

class AddTaskController {
  constructor() {
    this.addTaskView = new AddTaskView();
    this.inputView = new InputView();
    this.addTaskModel = new AddTaskModel();
    this.todayTaskModel = new TodayTaskModel();
    this.todayView = new TodayView();
    this.tomorrowTaskModel = new TomorrowTaskModel();
    this.tomorrowTaskView = new TomorrowTaskView();
    this.addTaskView.bindCloseModal(() => this.closeModal());
    this.addTaskView.bindAddTask(() => this.addTask());
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
      this.inputView.clearToDoList();
      this.inputView.renderToDoList(
        InputDataModel.getInput(),
        PagantionModel.getPageNumber()
      );
      //console.log(lat, long);

      MapModel.addMarker(lat, lng, input);

      // store input to localeStorage
      localStorage.setItem("todo", JSON.stringify(InputDataModel.input));

      //add task to today view
      const todayTasks = this.todayTaskModel.getTodayTasks(
        InputDataModel.getInput()
      );
      this.todayView.renderTodayTask(todayTasks);
      //
      const tomorrowTasks = this.tomorrowTaskModel.getTomorrowTasks(
        InputDataModel.getInput()
      );
      this.tomorrowTaskView.renderTomorrowTask(tomorrowTasks);

      //add task to tomorrow view
      this.addTaskView.clearInput();
      this.closeModal();

      MapModel.clearLatLong();

      PagantionModel.setLength(InputDataModel.getInput());
    }
  }
  // Close the modal methtod
  closeModal() {
    this.addTaskView.closeTaskModal();
  }
}

export default AddTaskController;
