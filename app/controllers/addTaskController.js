import AddTaskView from "../views/addTaskView.js";

class AddTaskController {
  constructor() {
    this.addTaskView = new AddTaskView();
    this.addTaskView.bindCloseModal(() => this.closeModal());
  }

  closeModal() {
    this.addTaskView.closeTaskModal();
  }
}

export default AddTaskController;
