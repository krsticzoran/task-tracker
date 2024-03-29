import AddTaskView from "../../views/add-task/addTaskView.js";
import MapModel from "../../models/map/mapModel.js";
import AddTaskModel from "../../models/add-task/addTaskModel.js";
import InputDataModel from "../../models/tasks/inputDataModel.js";
import InputView from "../../views/tasks/inputView.js";
import TodayTaskModel from "../../models/tasks/todayTaskModel.js";
import TodayView from "../../views/tasks/todayView.js";
import TomorrowTaskModel from "../../models/tasks/tomorrowTaskmodel.js";
import TomorrowTaskView from "../../views/tasks/tomorrowTaskView.js";
import PagantionModel from "../../models/pagination/paginationModel.js";

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
    const input = this.addTaskView.inputAdd.value;
    const date = this.addTaskView.inputDate.value;

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

      MapModel.addMarker(lat, lng, input);

      // store input to localeStorage
      localStorage.setItem("todo", JSON.stringify(InputDataModel.input));

      //add task to today view
      const todayTasks = this.todayTaskModel.getTodayTasks(
        InputDataModel.getInput()
      );
      this.todayView.renderTodayTask(todayTasks);
      //add task to tomorrow view
      const tomorrowTasks = this.tomorrowTaskModel.getTomorrowTasks(
        InputDataModel.getInput()
      );
      this.tomorrowTaskView.renderTomorrowTask(tomorrowTasks);

      //clear inputs
      this.addTaskView.clearInput();
      this.closeModal();

      MapModel.clearLatLong();

      //recalculate
      PagantionModel.setLength(InputDataModel.getInput());
    }
  }
  // Close the modal methtod
  closeModal() {
    this.addTaskView.closeTaskModal();
  }
}

export default AddTaskController;
